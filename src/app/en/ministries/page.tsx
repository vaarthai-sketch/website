import { MinistriesView } from "@/app/ministries/MinistriesContent";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  locale: "en",
  path: "/ministries",
  title: "Our Ministries | Tamil Church in Brisbane | Vaarthai Evangelical Church",
  description:
    "Discover Vaarthai Kids, Youth, Men's & Women's Fellowship, Worship, and Outreach ministries at Vaarthai Evangelical Church Inc — Tamil Church in Brisbane.",
});

export default function EnglishMinistriesPage() {
  return <MinistriesView isEn={true} />;
}
