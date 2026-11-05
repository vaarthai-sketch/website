import AccessibilityPage from "@/app/accessibility/page";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  locale: "en",
  path: "/accessibility",
  title: "Accessibility Statement | Vaarthai Evangelical Church Inc",
  description: "Accessibility details and step-free access at Vaarthai Evangelical Church Inc (Tamil Church in Brisbane).",
});

export default function EnglishAccessibilityPage() {
  return <AccessibilityPage />;
}
