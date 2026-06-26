import { notFound } from "next/navigation";
import { getServicePage } from "@/lib/data";
import { ServicePage } from "@/components/ServicePage";

export const metadata = {
  title: "Data & AI Opportunity Audit · Maulin Shah",
  description:
    "A two-to-four-week audit that ends with a ranked plan: what to fix, build, automate, or ignore.",
};

export default function Page() {
  const service = getServicePage("opportunity-audit");
  if (!service) notFound();
  return <ServicePage service={service} />;
}
