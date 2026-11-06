import type { Metadata } from "next";
import { Inter, Playfair_Display, Kavivanar, Anek_Tamil, Baloo_Thambi_2, Mukta_Malar } from "next/font/google";
import { Header } from "@/components/Header";
import { PlanVisitButton } from "@/components/PlanVisitButton";
import { Footer } from "@/components/Footer";
import { churchConfig } from "@/data/config";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const kavivanar = Kavivanar({
  weight: "400",
  subsets: ["tamil"],
  variable: "--font-kavivanar-face",
  display: "swap",
});

const anekTamil = Anek_Tamil({
  subsets: ["tamil"],
  variable: "--font-anek-tamil",
  display: "swap",
});

const balooThambi = Baloo_Thambi_2({
  subsets: ["tamil"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-baloo-thambi",
  display: "swap",
});

const muktaMalar = Mukta_Malar({
  subsets: ["tamil", "latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-mukta-malar",
  display: "swap",
});

const siteUrl = "https://www.vaarthai.org.au";

export const metadata: Metadata = {
  title: {
    default: `Tamil Church in Brisbane | Vaarthai Evangelical Church Inc`,
    template: `%s | Tamil Church in Brisbane | Vaarthai`
  },
  description: `Looking for a Tamil Church in Brisbane? Welcome to Vaarthai Evangelical Church Inc at 389 Old Logan Rd, Springfield QLD 4300. Join our Tamil Church Family for Sunday worship at 10:00 AM with Pastor Weslyn, Tamil & English worship, and Kids Sunday School.`,
  keywords: [
    "Tamil Church in Brisbane", "Brisbane Tamil Church", "Tamil Church Brisbane",
    "Tamil Christian Church Brisbane", "Tamil Church Springfield QLD", "Tamil Church",
    "Tamil Worship Brisbane", "Vaarthai Church", "Vaarthai Evangelical Church", "Vaarthai",
    "Tamil Family Church", "Tamil Gospel", "Pastor Weslyn Brisbane",
    "Tamil Christian", "Tamil Believer", "Tamil fellowship", "Tamil friends", "Tamil Family",
    "Tamil Church Family", "Family Tamil Church", "Tamil Word Church", "தமிழ் சபை",
    "பிரிஸ்பேன் தமிழ் சபை", "தமிழ் திருச்சபை", "தமிழ் கிறிஸ்தவ ஐக்கியம்", "ஐக்கிய கிறிஸ்துவ சபை", "வேதாகம சபை",
    "QLD", "Australia", "Springfield", "Camira", "Ipswich", "Logan", "church", "worship"
  ],
  authors: [{ name: churchConfig.name }],
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: siteUrl,
    title: `Tamil Church in Brisbane | Vaarthai Evangelical Church Inc`,
    description: `Welcome to Vaarthai Evangelical Church Inc — a welcoming Tamil Church in Brisbane (389 Old Logan Rd, Springfield QLD). Join our Tamil Church Family on Sundays at 10:00 AM!`,
    siteName: "Vaarthai Evangelical Church Inc | Tamil Church in Brisbane",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: `${churchConfig.name} - Tamil Church in Brisbane`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: `Tamil Church in Brisbane | Vaarthai Evangelical Church Inc`,
    description: `Welcome to Vaarthai Evangelical Church Inc — a welcoming Tamil Church in Brisbane. Join us for Sunday worship at 10:00 AM!`,
    images: ["/opengraph-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  }
};

import { ChurchSchema } from "@/components/StructuredData";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ta"
      className={`${inter.variable} ${playfair.variable} ${kavivanar.variable} ${anekTamil.variable} ${balooThambi.variable} ${muktaMalar.variable} h-full antialiased`}
    >
      <head>
        <script async src="https://www.googletagmanager.com/gtm.js?id=GTM-K2M4S6RK"></script>
        <script async src="https://www.googletagmanager.com/gtag/js?id=GTM-K2M4S6RK"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({'gtm.start': new Date().getTime(), event: 'gtm.js'});
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GTM-K2M4S6RK');
  gtag('config', 'G-1Z56MXX55Z');
`,
          }}
        />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-1Z56MXX55Z" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-1Z56MXX55Z');
          `}
        </Script>
        <script src="https://js.churchcenter.com/modal/v1" async></script>
      </head>
      <body className="min-h-full bg-background text-foreground flex flex-col font-sans">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-K2M4S6RK"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <ChurchSchema locale="ta" />
        {/* Skip to Content for screenreaders accessibility */}
        <a href="#main-content" className="skip-link font-bold">
          Skip to main content
        </a>

        <Header />
        <PlanVisitButton />
        
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
