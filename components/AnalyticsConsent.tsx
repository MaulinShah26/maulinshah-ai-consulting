"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Script from "next/script";
import { GoogleAnalytics } from "@next/third-parties/google";
import {
  ANALYTICS_CONSENT_OPEN_EVENT,
  ANALYTICS_CONSENT_STORAGE_KEY,
  type AnalyticsConsentChoice,
} from "@/lib/consent";
import styles from "./AnalyticsConsent.module.css";

type Props = {
  gaId?: string;
  clarityId?: string;
};

type AnalyticsWindow = Window & {
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
  clarity?: (...args: unknown[]) => void;
  [key: string]: unknown;
};

function seedGrantedGoogleConsent(gaId?: string) {
  const analyticsWindow = window as AnalyticsWindow;
  analyticsWindow.dataLayer = analyticsWindow.dataLayer ?? [];
  analyticsWindow.gtag =
    analyticsWindow.gtag ??
    ((...args: unknown[]) => analyticsWindow.dataLayer?.push(args));

  if (gaId) analyticsWindow[`ga-disable-${gaId}`] = false;

  analyticsWindow.gtag("consent", "default", {
    analytics_storage: "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
  analyticsWindow.gtag("consent", "update", {
    analytics_storage: "granted",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
}

function clearFirstPartyAnalyticsCookies() {
  document.cookie.split(";").forEach((cookie) => {
    const name = cookie.split("=")[0]?.trim();
    if (!name || (!name.startsWith("_ga") && !name.startsWith("_cl"))) {
      return;
    }

    document.cookie = `${name}=; Max-Age=0; path=/; SameSite=Lax`;
  });
}

export function AnalyticsConsent({ gaId, clarityId }: Props) {
  const [choice, setChoice] = useState<AnalyticsConsentChoice | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [scriptsEnabled, setScriptsEnabled] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const analyticsConfigured = Boolean(gaId || clarityId);

  useEffect(() => {
    if (!analyticsConfigured) return;

    let storedChoice: AnalyticsConsentChoice | null = null;
    try {
      const stored = localStorage.getItem(ANALYTICS_CONSENT_STORAGE_KEY);
      if (stored === "granted" || stored === "denied") storedChoice = stored;
    } catch {}

    setChoice(storedChoice);
    setIsOpen(storedChoice === null);

    if (storedChoice === "granted") {
      seedGrantedGoogleConsent(gaId);
      setScriptsEnabled(true);
    }

    setIsReady(true);

    const openPreferences = () => setIsOpen(true);
    window.addEventListener(ANALYTICS_CONSENT_OPEN_EVENT, openPreferences);
    return () =>
      window.removeEventListener(ANALYTICS_CONSENT_OPEN_EVENT, openPreferences);
  }, [analyticsConfigured, gaId]);

  if (!analyticsConfigured) return null;

  const saveChoice = (nextChoice: AnalyticsConsentChoice) => {
    try {
      localStorage.setItem(ANALYTICS_CONSENT_STORAGE_KEY, nextChoice);
    } catch {}

    if (nextChoice === "granted") {
      seedGrantedGoogleConsent(gaId);
      setChoice("granted");
      setScriptsEnabled(true);
      setIsOpen(false);
      return;
    }

    const previouslyGranted = choice === "granted" || scriptsEnabled;
    const analyticsWindow = window as AnalyticsWindow;
    analyticsWindow.gtag?.("consent", "update", {
      analytics_storage: "denied",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
    });
    analyticsWindow.clarity?.("consentv2", {
      ad_Storage: "denied",
      analytics_Storage: "denied",
    });
    analyticsWindow.clarity?.("consent", false);
    if (previouslyGranted) {
      if (gaId) analyticsWindow[`ga-disable-${gaId}`] = true;
      clearFirstPartyAnalyticsCookies();
    }

    setChoice("denied");
    setScriptsEnabled(false);
    setIsOpen(false);

    if (previouslyGranted) window.location.reload();
  };

  return (
    <>
      {scriptsEnabled && gaId ? <GoogleAnalytics gaId={gaId} /> : null}
      {scriptsEnabled && clarityId ? (
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${clarityId}");
            window.clarity("consentv2", {
              ad_Storage: "denied",
              analytics_Storage: "granted"
            });
          `}
        </Script>
      ) : null}

      {isReady && isOpen ? (
        <section
          className={styles.panel}
          role="dialog"
          aria-label="Analytics preferences"
          aria-live="polite"
        >
          <div className={styles.inner}>
            <div>
              <p className={styles.eyebrow}>Analytics preferences</p>
              <p className={styles.copy}>
                I use Google Analytics and Microsoft Clarity to understand how
                this site is used and improve the experience. Nothing is loaded
                until you allow analytics.{" "}
                <Link className={styles.privacyLink} href="/privacy">
                  Privacy details
                </Link>
              </p>
            </div>

            <div className={styles.actions}>
              <button
                type="button"
                className={styles.button}
                onClick={() => saveChoice("denied")}
              >
                Decline
              </button>
              <button
                type="button"
                className={`${styles.button} ${styles.primary}`}
                onClick={() => saveChoice("granted")}
              >
                Allow analytics
              </button>
              {choice ? (
                <button
                  type="button"
                  className={`${styles.button} ${styles.close}`}
                  onClick={() => setIsOpen(false)}
                >
                  Close
                </button>
              ) : null}
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}
