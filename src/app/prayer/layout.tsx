import React from "react";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  locale: "ta",
  path: "/prayer",
  title: "Prayer Requests | Tamil Church in Brisbane | Vaarthai Evangelical Church",
  description:
    "Submit a confidential prayer request to Pastor Weslyn and the prayer team at Vaarthai Evangelical Church Inc — Tamil Church in Brisbane.",
});

export default function PrayerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
