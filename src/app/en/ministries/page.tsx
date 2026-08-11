import { MinistriesView } from "@/app/ministries/MinistriesContent";
import { churchConfig } from "@/data/config";

export const metadata = {
  title: `Our Ministries | ${churchConfig.name}`,
  description: "Discover the active communities, classes, and outreach programs where you can connect and serve.",
};

export default function EnglishMinistriesPage() {
  return <MinistriesView isEn={true} />;
}
