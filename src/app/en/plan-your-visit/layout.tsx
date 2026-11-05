import React from "react";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  locale: "en",
  path: "/plan-your-visit",
  title: "Plan Your Visit | Tamil Church in Brisbane | Vaarthai Evangelical Church",
  description:
    "Plan your first Sunday visit to Vaarthai Evangelical Church Inc — a welcoming Tamil Church in Brisbane (389 Old Logan Rd, Springfield QLD 4300). Join us Sundays at 10:00 AM for Tamil & English worship, Vaarthai Kids, and fellowship.",
});

export default function EnglishPlanYourVisitLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
