import type { Metadata } from "next";
import { Inter, Playfair_Display, Kavivanar, Anek_Tamil } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { churchConfig } from "@/data/config";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const kavivanar = Kavivanar({
  weight: "400",
  subsets: ["tamil"],
  variable: "--font-kavivanar",
  display: "swap",
});

const anekTamil = Anek_Tamil({
  subsets: ["tamil"],
  variable: "--font-anek-tamil",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${churchConfig.name} | ${churchConfig.tagline}`,
    template: `%s | ${churchConfig.name}`
  },
  description: `Welcome to ${churchConfig.name} in ${churchConfig.contact.address.city}, ${churchConfig.contact.address.state}. Join us for worship services on Sundays at ${churchConfig.services[0].times.join(" & ")}.`,
  keywords: ["church", "Vaarthai Evangelical Church", "Brisbane", "QLD", "Australia", "Camira", "worship", "Christian", "Jesus", "community"],
  authors: [{ name: churchConfig.name }],
  metadataBase: new URL("https://vaarthaichurch.org"), // Mock URL
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vaarthaichurch.org",
    title: `${churchConfig.name} | Brisbane, QLD, Australia`,
    description: churchConfig.tagline,
    siteName: churchConfig.name,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${churchConfig.name} - Welcome`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: churchConfig.name,
    description: churchConfig.tagline,
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${kavivanar.variable} ${anekTamil.variable} h-full antialiased`}
    >
      <head>
        <script src="https://js.churchcenter.com/modal/v1" async></script>
      </head>
      <body className="min-h-full bg-background text-foreground flex flex-col font-sans">
        {/* Skip to Content for screenreaders accessibility */}
        <a href="#main-content" className="skip-link font-bold">
          Skip to main content
        </a>
        
        {/* Church PlaceOfWorship JSON-LD Structured Data */}
        <JsonLd type="church" />

        <Header />
        
        <main id="main-content" className="flex-grow flex flex-col focus:outline-none" tabIndex={-1}>
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}
