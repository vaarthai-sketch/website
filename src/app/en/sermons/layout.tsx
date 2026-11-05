import React from "react";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  locale: "en",
  path: "/sermons",
  title: "Tamil & English Sermons | Tamil Church in Brisbane | Vaarthai Church",
  description:
    "Watch Sunday Tamil & English sermons by Pastor Weslyn from Vaarthai Evangelical Church Inc — Tamil Church in Brisbane.",
});

export default function EnglishSermonsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
