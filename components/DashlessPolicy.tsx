"use client";

import { useEffect } from "react";

const SKIP_SELECTOR = "script, style, code, pre, textarea, svg";

function normalizeDashlessText(value: string) {
  return value
    .replace(/(\d+)\s*[–-]\s*(\d+)/g, "$1 to $2")
    .replace(/([A-Za-z0-9])-([A-Za-z0-9])/g, "$1 $2")
    .replace(/\s*[—–]\s*/g, ", ")
    .replace(/\s+-\s+/g, " · ")
    .replace(/(^|\s)-(?=\d)/g, "$1minus ");
}

function cleanTextNode(node: Node) {
  if (node.nodeType !== Node.TEXT_NODE) return;

  const parent = node.parentElement;
  if (!parent || parent.closest(SKIP_SELECTOR)) return;

  const current = node.nodeValue ?? "";
  const next = normalizeDashlessText(current);
  if (next !== current) node.nodeValue = next;
}

function scrub(root: Node) {
  cleanTextNode(root);

  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  let node = walker.nextNode();

  while (node) {
    cleanTextNode(node);
    node = walker.nextNode();
  }
}

export function DashlessPolicy() {
  useEffect(() => {
    scrub(document.body);

    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.type === "characterData") {
          cleanTextNode(mutation.target);
          continue;
        }

        mutation.addedNodes.forEach((node) => scrub(node));
      }
    });

    observer.observe(document.body, {
      subtree: true,
      childList: true,
      characterData: true,
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
