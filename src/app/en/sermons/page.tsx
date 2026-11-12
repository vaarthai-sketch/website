import { SermonsView } from "@/app/sermons/SermonsContent";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  locale: "en",
  path: "/sermons",
  title: "Sermon Library | Tamil Church in Brisbane | Vaarthai Evangelical Church",
  description:
    "Watch and listen to Tamil and English sermons and Bible teachings from Vaarthai Evangelical Church Inc — a welcoming Tamil Church in Brisbane.",
});

export default function EnglishSermonsPage() {
  return <SermonsView isEn={true} />;
}
