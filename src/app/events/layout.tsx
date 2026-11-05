import React from "react";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  locale: "ta",
  path: "/events",
  title: "Upcoming Events | Tamil Church in Brisbane | Vaarthai Evangelical Church",
  description:
    "Join upcoming Tamil worship services, prayer meetings, family fellowships, and community events at Vaarthai Evangelical Church Inc in Brisbane, QLD.",
});

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
