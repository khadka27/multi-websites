import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.websiteprogrammingdevelopment.com";

  // Main pages
  const mainPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/company`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
  ];

  // Service pages - comprehensive list including all new pages
  const servicePages = [
    // Web Development
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

    // Mobile Development
    "mobile-app-development",
    "ios-development",
    "android-development",
    "react-native-development",
    "flutter-development",
    "hybrid-development",
    "native-app-development",
    "swift-development",
    "kotlin-development",

    // Backend Development
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

    // E-commerce Development
    "ecommerce-development",
    "shopify-development",
    "woocommerce-development",
    "magento-development",
    "bigcommerce-development",
    "custom-ecommerce",

    // CMS Development
    "cms-development",
    "wordpress-development",
    "drupal-development",

    // AI/ML & Data Science
    "artificial-intelligence",
    "machine-learning",
    "data-science",
    "pytorch-development",
    "tensorflow-development",
    "open-ai",

    // Blockchain & Web3
    "blockchain-development",
    "solidity-development",

    // Emerging Technologies
    "ar-vr-development",
    "iot-development",
    "pwa-development",
    "cloud-migration",
    "desktop-development",
    "embedded-development",
    "smart-tv-development",
    "wearables-development",

    // Gaming
    "game-development",
    "unity-development",

    // Design Services
    "ui-ux-designs",
    "web-designing",
    "logo-designs",
    "mobile-app-designs",
    "brochure-designs",

    // Other Services
    "automation",
    "content-writing",
    "digital-marketing",
    "seo",
  ].map((service) => ({
    url: `${baseUrl}/services/${service}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  return [...mainPages, ...servicePages];
}
