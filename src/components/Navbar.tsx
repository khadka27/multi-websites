"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Pricing", href: "/pricing" },
    {
      name: "Services",
      href: "/services",
      hasDropdown: true,
      isServices: true,
    },
    {
      name: "Resources",
      href: "/resources",
      hasDropdown: true,
      dropdownItems: [
        { name: "Blog", href: "/resources/blog" },
        { name: "Documentation", href: "/resources/docs" },
        { name: "Case Studies", href: "/resources/case-studies" },
        { name: "Guides", href: "/resources/guides" },
      ],
    },
    { name: "Blogs", href: "/blogs" },
    { name: "Company", href: "/company" },
  ];

  const servicesData = {
    "Web Services": [
      {
        name: "Web Development",
        icon: "💻",
        href: "/services/web-development",
      },
      {
        name: "React JS Development",
        icon: "⚛️",
        href: "/services/react-development",
      },
      {
        name: "Angular Development",
        icon: "🅰️",
        href: "/services/angular-development",
      },
      {
        name: "Node.js Development",
        icon: "🟢",
        href: "/services/nodejs-development",
      },
      {
        name: "PHP Development",
        icon: "🐘",
        href: "/services/php-development",
      },
      {
        name: "Java Development",
        icon: "☕",
        href: "/services/java-development",
      },
      {
        name: "Blockchain Development",
        icon: "⛓️",
        href: "/services/blockchain-development",
      },
      {
        name: "Python Development",
        icon: "🐍",
        href: "/services/python-development",
      },
      {
        name: "WordPress Development",
        icon: "📝",
        href: "/services/wordpress-development",
      },
      {
        name: "Shopify Development",
        icon: "🛒",
        href: "/services/shopify-development",
      },
    ],
    "Mobile Services": [
      {
        name: "Mobile App Development",
        icon: "📱",
        href: "/services/mobile-app-development",
      },
      {
        name: "Native App Development",
        icon: "📲",
        href: "/services/native-app-development",
      },
      {
        name: "iOS App Development",
        icon: "🍎",
        href: "/services/ios-development",
      },
      {
        name: "Android App Development",
        icon: "🤖",
        href: "/services/android-development",
      },
      {
        name: "Hybrid App Development",
        icon: "🔄",
        href: "/services/hybrid-development",
      },
      {
        name: "Flutter App Development",
        icon: "🦋",
        href: "/services/flutter-development",
      },
      {
        name: "React Native App Development",
        icon: "⚛️",
        href: "/services/react-native-development",
      },
    ],
    "AI Services": [
      {
        name: "Artificial Intelligence",
        icon: "🤖",
        href: "/services/artificial-intelligence",
      },
      {
        name: "Machine Learning",
        icon: "🧠",
        href: "/services/machine-learning",
      },
      { name: "Data Science", icon: "📊", href: "/services/data-science" },
      { name: "Open AI", icon: "🔮", href: "/services/open-ai" },
      { name: "Automation", icon: "⚙️", href: "/services/automation" },
    ],
    "Design Services": [
      { name: "Web Designing", icon: "🎨", href: "/services/web-designing" },
      {
        name: "HTML/CSS Development",
        icon: "📄",
        href: "/services/html-css-development",
      },
      { name: "UI/UX Designs", icon: "✨", href: "/services/ui-ux-designs" },
      {
        name: "Mobile App Designs",
        icon: "🎯",
        href: "/services/mobile-app-designs",
      },
      { name: "Logo Designs", icon: "🏷️", href: "/services/logo-designs" },
      {
        name: "Brochure Designs",
        icon: "📋",
        href: "/services/brochure-designs",
      },
    ],
    "Language Services": [
      {
        name: "JavaScript Development",
        icon: "🟨",
        href: "/services/javascript-development",
      },
      {
        name: "TypeScript Development",
        icon: "�",
        href: "/services/typescript-development",
      },
      {
        name: "Dart Programming",
        icon: "🎯",
        href: "/services/dart-development",
      },
      {
        name: "Next.js Development",
        icon: "⚡",
        href: "/services/nextjs-development",
      },
      {
        name: "Go Development",
        icon: "🐹",
        href: "/services/go-development",
      },
      {
        name: "Python Development",
        icon: "🐍",
        href: "/services/python-development",
      },
      {
        name: "Java Development",
        icon: "☕",
        href: "/services/java-development",
      },
      {
        name: "Laravel Development",
        icon: "🔴",
        href: "/services/laravel-development",
      },
    ],
  };

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 relative">
                <Image
                  src="/logo/websiteprogrammingdevelopmentlogo.png"
                  alt="wp development logo"
                  width={32}
                  height={32}
                  priority
                />
              </div>
              <span className="text-xl font-bold text-gray-900">
                wp development
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <div key={item.name} className="relative">
                  {item.hasDropdown ? (
                    <div
                      className="relative"
                      onMouseEnter={() =>
                        item.isServices
                          ? setIsServicesOpen(true)
                          : setIsResourcesOpen(true)
                      }
                      onMouseLeave={() =>
                        item.isServices
                          ? setIsServicesOpen(false)
                          : setIsResourcesOpen(false)
                      }
                    >
                      <div className="flex items-center space-x-1">
                        <Link
                          href={item.href}
                          className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                            isActive(item.href)
                              ? "text-purple-600"
                              : "text-gray-700 hover:text-purple-600"
                          }`}
                        >
                          {item.name}
                        </Link>
                        <button
                          className={`p-1 text-sm font-medium transition-colors duration-200 ${
                            isActive(item.href)
                              ? "text-purple-600"
                              : "text-gray-700 hover:text-purple-600"
                          }`}
                        >
                          <svg
                            className={`w-4 h-4 transition-transform duration-200 ${
                              (item.isServices && isServicesOpen) ||
                              (!item.isServices && isResourcesOpen)
                                ? "rotate-180"
                                : ""
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </button>
                      </div>

                      {/* Active underline */}
                      {isActive(item.href) && (
                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"></div>
                      )}

                      {/* Services Dropdown */}
                      {item.isServices && isServicesOpen && (
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 w-[1200px] bg-white rounded-2xl shadow-xl border border-gray-100 p-8 z-50">
                          <div className="grid grid-cols-5 gap-8">
                            {Object.entries(servicesData).map(
                              ([category, services]) => (
                                <div key={category}>
                                  <h3 className="text-sm font-semibold text-blue-600 mb-4 pb-2 border-b border-gray-100">
                                    {category}
                                  </h3>
                                  <ul className="space-y-3">
                                    {services.map((service) => (
                                      <li key={service.name}>
                                        <Link
                                          href={service.href}
                                          className="flex items-center space-x-3 p-2 rounded-lg hover:bg-stone-50 transition-colors duration-150 group"
                                        >
                                          <span className="text-lg group-hover:scale-110 transition-transform duration-150">
                                            {service.icon}
                                          </span>
                                          <span className="text-sm text-gray-700 group-hover:text-gray-900 font-medium">
                                            {service.name}
                                          </span>
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )
                            )}
                          </div>
                        </div>
                      )}

                      {/* Resources Dropdown */}
                      {!item.isServices &&
                        isResourcesOpen &&
                        item.dropdownItems && (
                          <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-md shadow-lg border border-gray-100 py-1">
                            {item.dropdownItems.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.name}
                                href={dropdownItem.href}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors duration-150"
                              >
                                {dropdownItem.name}
                              </Link>
                            ))}
                          </div>
                        )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className={`px-3 py-2 text-sm font-medium transition-colors duration-200 relative ${
                        isActive(item.href)
                          ? "text-purple-600"
                          : "text-gray-700 hover:text-purple-600"
                      }`}
                    >
                      {item.name}
                      {/* Active underline */}
                      {isActive(item.href) && (
                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"></div>
                      )}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Us Button */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors duration-200 border border-gray-900 hover:border-gray-800"
            >
              Contact us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-purple-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <svg
                className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`}
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`}
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-100">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.hasDropdown ? (
                    <div>
                      <div className="flex items-center">
                        <Link
                          href={item.href}
                          className={`flex-1 px-3 py-2 text-base font-medium transition-colors duration-200 ${
                            isActive(item.href)
                              ? "text-purple-600 bg-purple-50"
                              : "text-gray-700 hover:text-purple-600 hover:bg-gray-50"
                          }`}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                        <button
                          onClick={() =>
                            item.isServices
                              ? setIsServicesOpen(!isServicesOpen)
                              : setIsResourcesOpen(!isResourcesOpen)
                          }
                          className={`px-3 py-2 text-base font-medium transition-colors duration-200 ${
                            isActive(item.href)
                              ? "text-purple-600 bg-purple-50"
                              : "text-gray-700 hover:text-purple-600 hover:bg-gray-50"
                          }`}
                        >
                          <svg
                            className={`w-4 h-4 transition-transform duration-200 ${
                              (item.isServices && isServicesOpen) ||
                              (!item.isServices && isResourcesOpen)
                                ? "rotate-180"
                                : ""
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </button>
                      </div>

                      {/* Mobile Services Dropdown */}
                      {item.isServices && isServicesOpen && (
                        <div className="pl-6 space-y-1 max-h-96 overflow-y-auto">
                          {Object.entries(servicesData).map(
                            ([category, services]) => (
                              <div key={category} className="py-2">
                                <h4 className="text-xs font-semibold text-blue-600 mb-2">
                                  {category}
                                </h4>
                                {services.map((service) => (
                                  <Link
                                    key={service.name}
                                    href={service.href}
                                    className="flex items-center space-x-2 px-3 py-1 text-sm text-gray-600 hover:text-purple-600 hover:bg-purple-50 transition-colors duration-150"
                                    onClick={() => setIsMenuOpen(false)}
                                  >
                                    <span>{service.icon}</span>
                                    <span>{service.name}</span>
                                  </Link>
                                ))}
                              </div>
                            )
                          )}
                        </div>
                      )}

                      {/* Mobile Resources Dropdown */}
                      {!item.isServices &&
                        isResourcesOpen &&
                        item.dropdownItems && (
                          <div className="pl-6 space-y-1">
                            {item.dropdownItems.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.name}
                                href={dropdownItem.href}
                                className="block px-3 py-2 text-sm text-gray-600 hover:text-purple-600 hover:bg-purple-50 transition-colors duration-150"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                {dropdownItem.name}
                              </Link>
                            ))}
                          </div>
                        )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${
                        isActive(item.href)
                          ? "text-purple-600 bg-purple-50"
                          : "text-gray-700 hover:text-purple-600 hover:bg-gray-50"
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4">
                <Link
                  href="/contact"
                  className="block w-full text-center bg-gray-900 hover:bg-gray-800 text-white px-6 py-2 rounded-lg text-base font-medium transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact us
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
