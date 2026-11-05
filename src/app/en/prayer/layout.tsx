import React from "react";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  locale: "en",
  path: "/prayer",
  title: "Prayer Requests | Tamil Church in Brisbane | Vaarthai Evangelical Church",
  description:
    "Share your prayer request with Pastor Weslyn and our intercessory prayer team at Vaarthai Evangelical Church Inc — Tamil Church in Brisbane.",
});

export default function EnglishPrayerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
