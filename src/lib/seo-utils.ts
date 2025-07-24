// SEO utility functions and constants for the new service pages

export const serviceCategories = {
  webDevelopment: [
    "web-development",
    "react-development",
    "nextjs-development",
    "angular-development",
    "nodejs-development",
    "javascript-development",
    "typescript-development",
    "html-css-development",
    "aspnet-development",
    "rails-development",
    "spring-boot-development",
  ],
  mobileDevelopment: [
    "mobile-app-development",
    "ios-development",
    "android-development",
    "react-native-development",
    "flutter-development",
    "hybrid-development",
    "native-app-development",
    "swift-development",
    "kotlin-development",
  ],
  backendDevelopment: [
    "python-development",
    "java-development",
    "php-development",
    "laravel-development",
    "ruby-development",
    "csharp-development",
    "go-development",
    "dart-development",
    "r-development",
    "scala-development",
  ],
  ecommerceDevelopment: [
    "ecommerce-development",
    "shopify-development",
    "woocommerce-development",
    "magento-development",
    "bigcommerce-development",
    "custom-ecommerce",
  ],
  cmsDevelopment: [
    "cms-development",
    "wordpress-development",
    "drupal-development",
  ],
  aiMlDevelopment: [
    "artificial-intelligence",
    "machine-learning",
    "data-science",
    "pytorch-development",
    "tensorflow-development",
    "open-ai",
  ],
  blockchainDevelopment: ["blockchain-development", "solidity-development"],
  emergingTech: [
    "ar-vr-development",
    "iot-development",
    "pwa-development",
    "cloud-migration",
    "desktop-development",
    "embedded-development",
    "smart-tv-development",
    "wearables-development",
  ],
  gamingDevelopment: ["game-development", "unity-development"],
  designServices: [
    "ui-ux-designs",
    "web-designing",
    "logo-designs",
    "mobile-app-designs",
    "brochure-designs",
  ],
  otherServices: ["automation", "content-writing", "digital-marketing", "seo"],
};

export const generateServiceStructuredData = (
  serviceName: string,
  description: string
) => {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    description: description,
    provider: {
      "@type": "Organization",
      name: "WP Development",
      url: "https://www.websiteprogrammingdevelopment.com",
      logo: "https://www.websiteprogrammingdevelopment.com/logo/websiteprogrammingdevelopmentlogo.png",
    },
    areaServed: {
      "@type": "Country",
      name: "Worldwide",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Development Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: serviceName,
          },
        },
      ],
    },
  };
};

export const generateBreadcrumbStructuredData = (
  serviceName: string,
  serviceSlug: string
) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.websiteprogrammingdevelopment.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: "https://www.websiteprogrammingdevelopment.com/services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: serviceName,
        item: `https://www.websiteprogrammingdevelopment.com/services/${serviceSlug}`,
      },
    ],
  };
};

export const seoKeywords = {
  webDevelopment: [
    "web development",
    "website development",
    "custom web development",
    "responsive web design",
    "frontend development",
    "backend development",
    "full-stack development",
  ],
  mobileDevelopment: [
    "mobile app development",
    "iOS app development",
    "Android app development",
    "cross-platform development",
    "native app development",
    "mobile application",
    "app development services",
  ],
  aiMl: [
    "artificial intelligence",
    "machine learning",
    "AI development",
    "ML solutions",
    "deep learning",
    "neural networks",
    "data science",
    "predictive analytics",
  ],
  blockchain: [
    "blockchain development",
    "smart contracts",
    "DeFi development",
    "Web3 development",
    "cryptocurrency",
    "decentralized applications",
    "blockchain solutions",
  ],
  ecommerce: [
    "e-commerce development",
    "online store development",
    "shopping cart development",
    "payment integration",
    "e-commerce platform",
    "online marketplace",
    "digital commerce",
  ],
};
