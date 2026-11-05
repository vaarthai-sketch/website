import React from "react";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  locale: "ta",
  path: "/give",
  title: "Give Online | Tamil Church in Brisbane | Vaarthai Evangelical Church",
  description:
    "Partner with Vaarthai Evangelical Church Inc — a registered charity and Tamil Church in Brisbane (ABN 32 327 903 035) — through secure online giving.",
});

export default function GiveLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
