import TermsPage from "@/app/terms/page";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  locale: "en",
  path: "/terms",
  title: "Terms of Use | Vaarthai Evangelical Church Inc",
  description: "Terms of Use for Vaarthai Evangelical Church Inc (Tamil Church in Brisbane).",
});

export default function EnglishTermsPage() {
  return <TermsPage />;
}
