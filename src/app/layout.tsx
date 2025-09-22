import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./global.css";
import Navbar from "../components/Navbar";
import SocialSidebar from "../components/SocialSidebar";
import Footer from "../components/Footer";
import StructuredData from "../components/StructuredData";
import { structuredDataSchemas } from "../lib/seo";
import { GoogleAnalytics } from "@next/third-parties/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.websiteprogrammingdevelopment.com"),
  title: {
    default:
      "WP Development - Professional Web & Mobile App Development Services",
    template: "%s | WP Development",
  },
  description:
    "Professional web and mobile app development services. Expert solutions for React, Next.js, Flutter, iOS, Android, AI/ML, blockchain, e-commerce, and full-stack development. Custom software development for modern businesses.",
  keywords: [
    "web development",
    "mobile app development",
    "React development",
    "Next.js development",
    "Flutter development",
    "iOS development",
    "Android development",
    "AI development",
    "machine learning",
    "blockchain development",
    "e-commerce development",
    "custom software development",
    "full-stack development",
    "TypeScript development",
    "JavaScript development",
    "Python development",
    "Node.js development",
    "UI/UX design",
    "progressive web apps",
    "cloud migration",
    "IoT development",
    "game development",
    "enterprise software",
    "startup development",
    "MVP development",
  ],
  authors: [{ name: "WP Development Team" }],
  creator: "WP Development",
  publisher: "WP Development",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  category: "technology",
  robots: "index,follow",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "WP Development",
    title:
      "WP Development - Professional Web & Mobile App Development Services",
    description:
      "Expert web and mobile app development services. Custom React, Next.js, Flutter, AI/ML, blockchain, e-commerce, IoT, and game development solutions for modern businesses.",
    images: [
      {
        url: "/logo/websiteprogrammingdevelopmentlogo.png",
        width: 1200,
        height: 630,
        alt: "WP Development - Web & Mobile App Development Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@wp_development",
    creator: "@wp_development",
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/logo/websiteprogrammingdevelopmentlogo.png",
  },
  manifest: "/manifest.json",
  other: {
    "msapplication-TileColor": "#7c3aed",
    "theme-color": "#7c3aed",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = structuredDataSchemas.organization;
  const websiteSchema = structuredDataSchemas.website;

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <StructuredData data={[organizationSchema, websiteSchema]} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen font-sans`}
        style={{ margin: 0, padding: 0 }}
      >
        <Navbar />
        <SocialSidebar />
        <main className="relative">{children}</main>
        <Footer />
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
        )}
      </body>
    </html>
  );
}
