import { notFound } from "next/navigation";
import { getServicePage } from "@/lib/data";
import { ServicePage } from "@/components/ServicePage";

export const metadata = {
  title: "Fractional Head of Data & AI · Maulin Shah",
  description:
    "Senior data and AI leadership embedded in your team, before you’re ready to hire a full-time executive.",
};

export default function Page() {
  const service = getServicePage("fractional-head");
  if (!service) notFound();
  return <ServicePage service={service} />;
}
