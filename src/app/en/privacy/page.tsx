import PrivacyPage from "@/app/privacy/page";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  locale: "en",
  path: "/privacy",
  title: "Privacy Policy | Vaarthai Evangelical Church Inc",
  description: "Privacy Policy for Vaarthai Evangelical Church Inc (Tamil Church in Brisbane).",
});

export default function EnglishPrivacyPage() {
  return <PrivacyPage />;
}
