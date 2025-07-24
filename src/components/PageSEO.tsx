import React from "react";
import { Metadata } from "next";
import StructuredData from "./StructuredData";

interface PageSEOProps {
  structuredData?: object | object[];
  children?: React.ReactNode;
}

interface MetadataProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
}

export function generatePageMetadata(props: MetadataProps): Metadata {
  const { title, description, keywords, canonical, ogImage } = props;

  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://wp-development.com";
  const defaultImage = `${baseUrl}/logo/websiteprogrammingdevelopmentlogo.png`;

  const seoTitle = title
    ? `${title} | WP Development`
    : "WP Development - Professional Web & Mobile App Development Services";

  const seoDescription =
    description ||
    "Professional web and mobile app development services. Expert solutions for React, Next.js, Flutter, iOS, Android, and full-stack development.";

  return {
    title: seoTitle,
    description: seoDescription,
    keywords:
      keywords ||
      "web development, mobile app development, React, Next.js, Flutter",
    authors: [{ name: "WP Development Team" }],
    creator: "WP Development",
    publisher: "WP Development",
    robots: "index,follow",
    alternates: {
      canonical: canonical || baseUrl,
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: canonical || baseUrl,
      siteName: "WP Development",
      title: seoTitle,
      description: seoDescription,
      images: [
        {
          url: ogImage || defaultImage,
          width: 1200,
          height: 630,
          alt: title || "WP Development Services",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@wp_development",
      creator: "@wp_development",
      title: seoTitle,
      description: seoDescription,
      images: [ogImage || defaultImage],
    },
  };
}

const PageSEO: React.FC<PageSEOProps> = ({ structuredData, children }) => {
  return (
    <>
      {structuredData && <StructuredData data={structuredData} />}
      {children}
    </>
  );
};

export default PageSEO;
