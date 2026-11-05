import { SermonsView } from "./SermonsContent";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  locale: "ta",
  path: "/sermons",
  title: "Sermons & Messages | Tamil Church in Brisbane | Vaarthai Evangelical Church",
  description:
    "Watch Sunday Tamil & English sermons and Bible teachings by Pastor Weslyn from Vaarthai Evangelical Church Inc — Tamil Church in Brisbane.",
});

export default function SermonsPage() {
  return <SermonsView isEn={false} />;
}
