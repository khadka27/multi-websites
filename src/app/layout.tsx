import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./global.css";
import Navbar from "../components/Navbar";
import SocialSidebar from "../components/SocialSidebar";
import Footer from "../components/Footer";
import StructuredData from "../components/StructuredData";
import { structuredDataSchemas } from "../lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default:
      "WP Development - Professional Web & Mobile App Development Services",
    template: "%s | WP Development",
  },
  description:
    "Professional web and mobile app development services. Expert solutions for React, Next.js, Flutter, iOS, Android, and full-stack development. Custom software development for modern businesses.",
  keywords:
    "web development, mobile app development, React, Next.js, Flutter, iOS, Android, TypeScript, JavaScript, Node.js, Python, full-stack development, custom software, MVP development",
  authors: [{ name: "WP Development Team" }],
  creator: "WP Development",
  publisher: "WP Development",
  robots: "index,follow",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ||
      "https://www.websiteprogrammingdevelopment.com"
  ),
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
      "Expert web and mobile app development services. Custom React, Next.js, Flutter solutions for modern businesses.",
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
      </body>
    </html>
  );
}
