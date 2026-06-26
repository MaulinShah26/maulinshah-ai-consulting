import { notFound } from "next/navigation";
import { getServicePage } from "@/lib/data";
import { ServicePage } from "@/components/ServicePage";

export const metadata = {
  title: "Decision System Build · Maulin Shah",
  description:
    "One high-impact data or AI system, designed, built, and handed over to your team.",
};

export default function Page() {
  const service = getServicePage("decision-system-build");
  if (!service) notFound();
  return <ServicePage service={service} />;
}
