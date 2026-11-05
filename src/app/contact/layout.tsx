import React from "react";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  locale: "ta",
  path: "/contact",
  title: "Contact Us | Tamil Church in Brisbane | Vaarthai Evangelical Church",
  description:
    "Contact Vaarthai Evangelical Church Inc — Tamil Church in Brisbane. Reach Pastor Weslyn and our pastoral team by phone (0485 07 77 11), email (info@vaarthai.org.au), or visit us Sundays at 389 Old Logan Rd, Springfield QLD 4300.",
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
