import React from "react";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  locale: "en",
  path: "/events",
  title: "Upcoming Events | Tamil Church in Brisbane | Vaarthai Evangelical Church",
  description:
    "Explore upcoming Sunday worship services, Bible studies, prayer gatherings, and community events at Vaarthai Evangelical Church Inc — Tamil Church in Brisbane.",
});

export default function EnglishEventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
