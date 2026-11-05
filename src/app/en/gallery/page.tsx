import GalleryPage from "@/app/gallery/page";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  locale: "en",
  path: "/gallery",
  title: "Photo Gallery | Tamil Church in Brisbane | Vaarthai Evangelical Church",
  description:
    "View photos from Sunday worship services, Vaarthai Kids, Youth, and church family gatherings at Vaarthai Evangelical Church Inc in Brisbane.",
});

export default function EnglishGalleryPage() {
  return <GalleryPage />;
}
