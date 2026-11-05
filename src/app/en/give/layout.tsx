import React from "react";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  locale: "en",
  path: "/give",
  title: "Give Online | Tamil Church in Brisbane | Vaarthai Evangelical Church",
  description:
    "Support Gospel ministry and community outreach at Vaarthai Evangelical Church Inc — a registered charity and Tamil Church in Brisbane (ABN 32 327 903 035).",
});

export default function EnglishGiveLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
