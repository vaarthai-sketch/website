import React from "react";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  locale: "en",
  path: "/contact",
  title: "Contact Us | Tamil Church in Brisbane | Vaarthai Evangelical Church",
  description:
    "Contact Vaarthai Evangelical Church Inc — Tamil Church in Brisbane. Call 0485 07 77 11, email info@vaarthai.org.au, or join us on Sundays at 10:00 AM at 389 Old Logan Rd, Springfield QLD 4300.",
});

export default function EnglishContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
