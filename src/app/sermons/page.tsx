import { SermonsView } from "./SermonsContent";
import { churchConfig } from "@/data/config";

export const metadata = {
  title: `Sermons | ${churchConfig.name}`,
  description: "Browse our library of past sermons, series, and teachings.",
};

export default function SermonsPage() {
  return <SermonsView isEn={false} />;
}
