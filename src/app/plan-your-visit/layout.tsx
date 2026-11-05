import React from "react";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  locale: "ta",
  path: "/plan-your-visit",
  title: "Plan Your Visit | Tamil Church in Brisbane | Vaarthai Evangelical Church",
  description:
    "Plan your Sunday visit to Vaarthai Evangelical Church Inc — a welcoming Tamil Church in Brisbane at 389 Old Logan Rd, Springfield QLD 4300. Sunday worship at 10:00 AM with Vaarthai Kids Sunday School and free parking.",
});

export default function PlanYourVisitLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
