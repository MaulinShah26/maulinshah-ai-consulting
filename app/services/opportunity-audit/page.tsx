import { notFound } from "next/navigation";
import { getServicePage } from "@/lib/data";
import { ServicePage } from "@/components/ServicePage";

export const metadata = {
  title: "Decision Systems Diagnostic · Maulin Shah",
  description:
    "A two-to-four-week diagnostic of the decisions, workflows, data and economics holding a growing business back.",
};

export default function Page() {
  const service = getServicePage("opportunity-audit");
  if (!service) notFound();
  return <ServicePage service={service} />;
}
