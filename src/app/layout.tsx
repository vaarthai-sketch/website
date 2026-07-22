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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? process.env.NEXT_PUBLIC_SITE_URL
  : process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "https://vaarthaichurch.org";

export const metadata: Metadata = {
  title: {
    default: `Vaarthai Evangelical Church | Tamil Church in Brisbane`,
    template: `%s | Tamil Church in Brisbane | Vaarthai`
  },
  description: `Welcome to Vaarthai Evangelical Church (Tamil Church in Brisbane) in ${churchConfig.contact.address.city}, ${churchConfig.contact.address.state}. Join our Tamil Church Family for worship services on Sundays at ${churchConfig.services[0].times.join(" & ")}.`,
  keywords: [
    "Tamil Church", "Tamil Church in Brisbane", "Tamil Worship", "Vaarthai Church", "Vaarthai",
    "Tamil Family Church", "Tamil Gospel",
    "Tamil Christian", "Tamil Believer", "Tamil fellowship", "Tamil friends", "Tamil Family",
    "Tamil Church Family", "Family Tamil Church", "Tamil Word Church", "தமிழ் சபை",
    "தமிழ் திருச்சபை", "தமிழ் கிறிஸ்தவ ஐக்கியம்", "ஐக்கிய கிறிஸ்துவ சபை", "வேதாகம சபை",
    "Brisbane Tamil Church", "QLD", "Australia", "Camira", "church", "worship"
  ],
  authors: [{ name: churchConfig.name }],
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: `Vaarthai Evangelical Church | Tamil Church in Brisbane`,
    description: `Welcome to Vaarthai Evangelical Church (Tamil Church in Brisbane). Join our Tamil Church Family for worship services on Sundays!`,
    siteName: "Vaarthai Tamil Church in Brisbane",
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
    title: `Vaarthai Evangelical Church | Tamil Church in Brisbane`,
    description: `Welcome to Vaarthai Evangelical Church (Tamil Church in Brisbane). Join our Tamil Church Family for worship services on Sundays!`,
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
        
        {/* External Tracking Script */}
        <script 
          src="https://link.msgsndr.com/js/external-tracking.js"
          data-tracking-id="tk_b903a2a30b40429aacd86f244ab74dec"
        ></script>
      </body>
    </html>
  );
}
