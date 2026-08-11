import { MinistriesView } from "./MinistriesContent";
import { churchConfig } from "@/data/config";

export const metadata = {
  title: `Our Ministries | ${churchConfig.name}`,
  description: "Discover the active communities, classes, and outreach programs where you can connect and serve.",
};

export default function MinistriesPage() {
  return <MinistriesView isEn={false} />;
}
