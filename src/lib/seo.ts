import { Metadata } from "next";

export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: "website" | "article";
  noIndex?: boolean;
}

export function generateSEO(props: SEOProps): Metadata {
  const {
    title,
    description,
    keywords,
    canonical,
    ogImage,
    ogType = "website",
    noIndex = false,
  } = props;

  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://www.websiteprogrammingdevelopment.com";
  const defaultImage = `${baseUrl}/logo/websiteprogrammingdevelopmentlogo.png`;

  const seoTitle = title
    ? `${title} | WP Development`
    : "WP Development - Professional Web & Mobile App Development Services";

  const seoDescription =
    description ||
    "Professional web and mobile app development services. Expert solutions for React, Next.js, Flutter, iOS, Android, and full-stack development.";

  const seoKeywords =
    keywords ||
    "web development, mobile app development, React, Next.js, Flutter, iOS, Android, TypeScript, JavaScript, full-stack development";

  const metadata: Metadata = {
    title: seoTitle,
    description: seoDescription,
    keywords: seoKeywords,
    authors: [{ name: "WP Development Team" }],
    creator: "WP Development",
    publisher: "WP Development",
    robots: noIndex ? "noindex,nofollow" : "index,follow",
    alternates: {
      canonical: canonical || baseUrl,
    },
    openGraph: {
      type: ogType,
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
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
      yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
      yahoo: process.env.NEXT_PUBLIC_YAHOO_VERIFICATION,
    },
    other: {
      "msapplication-TileColor": "#7c3aed",
      "theme-color": "#7c3aed",
    },
  };

  return metadata;
}

export function generateServiceSEO(
  serviceName: string,
  technology: string
): Metadata {
  return generateSEO({
    title: `${serviceName} Development Services`,
    description: `Professional ${serviceName} development services. Expert ${technology} solutions for modern businesses. Custom development, consulting, and support.`,
    keywords: `${serviceName.toLowerCase()}, ${technology.toLowerCase()}, development, services, programming, software, custom solutions`,
    ogType: "website",
  });
}

export function generateTutorialSEO(
  tutorialName: string,
  category: string
): Metadata {
  return generateSEO({
    title: `${tutorialName} Tutorials & Learning Resources`,
    description: `Learn ${tutorialName} with comprehensive tutorials, guides, and resources. ${category} development tutorials for beginners to advanced developers.`,
    keywords: `${tutorialName.toLowerCase()}, tutorials, learning, ${category.toLowerCase()}, development, programming, guides`,
    ogType: "article",
  });
}

export const structuredDataSchemas = {
  organization: {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "WP Development",
    url: "https://www.websiteprogrammingdevelopment.com",
    logo: "https://www.websiteprogrammingdevelopment.com/logo/websiteprogrammingdevelopmentlogo.png",
    description: "Professional web and mobile app development services",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Global",
      addressCountry: "Worldwide",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-XXX-XXX-XXXX",
      contactType: "customer service",
      availableLanguage: "English",
    },
    sameAs: [
      "https://github.com/wp-development",
      "https://linkedin.com/company/wp-development",
      "https://twitter.com/wp_development",
    ],
  },

  website: {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "WP Development",
    url: "https://www.websiteprogrammingdevelopment.com",
    description: "Professional web and mobile app development services",
    publisher: {
      "@type": "Organization",
      name: "WP Development",
    },
  },

  service: (serviceName: string, description: string) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${serviceName} Development`,
    description: description,
    provider: {
      "@type": "Organization",
      name: "WP Development",
      url: "https://www.websiteprogrammingdevelopment.com",
    },
    areaServed: "Worldwide",
    serviceType: "Software Development",
    category: "Technology Services",
  }),

  breadcrumb: (items: Array<{ name: string; url: string }>) => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }),

  faq: (faqs: Array<{ question: string; answer: string }>) => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }),
};
