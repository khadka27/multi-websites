"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] =
    useState(false);
  const [isServicesOpen, setIsServicesOpen] =
    useState(false);
  const pathname = usePathname();

  // Refs for dropdown containers
  const servicesDropdownRef = useRef<HTMLDivElement>(null);
  const resourcesDropdownRef = useRef<HTMLDivElement>(null);

  // Click outside handler
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
      if (resourcesDropdownRef.current && !resourcesDropdownRef.current.contains(event.target as Node)) {
        setIsResourcesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const navItems = [
    {
      name: "Home",
      href: "/",
    },

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
        // Tutorials submenu
        {
          name: "HTML & CSS",
          href: "/resources/tutorials/html-css",
          isSubmenu: true,
          category: "Tutorials",
        },
        {
          name: "JavaScript & TypeScript",
          href: "/resources/tutorials/javascript-typescript",
          isSubmenu: true,
          category: "Tutorials",
        },
        {
          name: "Frameworks & Libraries",
          href: "/resources/tutorials/frameworks-libraries",
          isSubmenu: true,
          category: "Tutorials",
        },
        {
          name: "DevOps & Deployment",
          href: "/resources/tutorials/devops-deployment",
          isSubmenu: true,
          category: "Tutorials",
        },
        // Case Studies
        {
          name: "Case Studies",
          href: "/resources/case-studies",
        },
        // Other Resources
        {
          name: "Cheat Sheets",
          href: "/resources/cheat-sheets",
        },
        {
          name: "Tooling & Extensions",
          href: "/resources/tooling-extensions",
        },
        {
          name: "Recommended Reading",
          href: "/resources/recommended-reading",
        },
      ],
    },
    {
      name: "Blogs",
      href: "/blogs",
    },
    {
      name: "Company",
      href: "/company",
    },
  ];

  const servicesData = {
    "Programming Languages": [
      {
        name: "Java Development",
        icon: "/Images/javadevelopment.png",
        href: "/services/java-development",
      },
      {
        name: "C++ Development",
        icon: "/Images/cppdevelopment.png",
        href: "/services/cpp-development",
      },
      {
        name: "Python Development",
        icon: "/Images/pythondevelopment.png",
        href: "/services/python-development",
      },
      {
        name: "JavaScript Development",
        icon: "/Images/javascriptdevelopmet.png",
        href: "/services/javascript-development",
      },
      {
        name: "TypeScript Development",
        icon: "/Images/typescriptdevelopment.png",
        href: "/services/typescript-development",
      },
      {
        name: "C# Development",
        icon: "/Images/csharpdevelopment.png",
        href: "/services/csharp-development",
      },
      {
        name: "PHP Development",
        icon: "/Images/phpdevelopment.png",
        href: "/services/php-development",
      },
      {
        name: "Ruby Development",
        icon: "/Images/rubydevelopment.png",
        href: "/services/ruby-development",
      },
      {
        name: "Swift Development",
        icon: "/Images/swiftdevelopment.png",
        href: "/services/swift-development",
      },
      {
        name: "Kotlin Development",
        icon: "/Images/kotlindevelopment.png",
        href: "/services/kotlin-development",
      },
      {
        name: "Go Development",
        icon: "/Images/godevelopment.png",
        href: "/services/go-development",
      },
      {
        name: "Rust Development",
        icon: "/Images/rustdevelopment.png",
        href: "/services/rust-development",
      },
      {
        name: "Dart Development",
        icon: "/Images/dartdevelopment.png",
        href: "/services/dart-development",
      },
      {
        name: "Scala Development",
        icon: "/Images/scaladevelopment.png",
        href: "/services/scala-development",
      },
      {
        name: "R Development",
        icon: "/Images/rdevelopment.png",
        href: "/services/r-development",
      },
      {
        name: "Solidity Development",
        icon: "/Images/soliditydevelopment.png",
        href: "/services/solidity-development",
      },
    ],
    "Frameworks & Libraries": [
      {
        name: "React Development",
        icon: "/Images/reactdevelopment.png",
        href: "/services/react-development",
      },
      {
        name: "Angular Development",
        icon: "/Images/angulardevelopment.png",
        href: "/services/angular-development",
      },
      {
        name: "Vue.js Development",
        icon: "/Images/vuedevelopment.png",
        href: "/services/vuejs-development",
      },
      {
        name: "Next.js Development",
        icon: "/Images/nextjsdevelopment.png",
        href: "/services/nextjs-development",
      },
      {
        name: "Node.js Development",
        icon: "/Images/nodejsdevelopment.png",
        href: "/services/nodejs-development",
      },
      {
        name: "Django Development",
        icon: "/Images/djangodevelopment.svg",
        href: "/services/django-development",
      },
      {
        name: "Flask Development",
        icon: "/Images/flaskdevelopment.png",
        href: "/services/flask-development",
      },
      {
        name: "Spring Boot Development",
        icon: "/Images/springbootdevelopment.png",
        href: "/services/spring-boot-development",
      },
      {
        name: "Laravel Development",
        icon: "/Images/laraveldevelopment.png",
        href: "/services/laravel-development",
      },
      {
        name: "Ruby on Rails",
        icon: "/Images/rubyonrails.png",
        href: "/services/rails-development",
      },
      {
        name: "ASP.NET Development",
        icon: "/Images/aspdotnetdevelopment.png",
        href: "/services/aspnet-development",
      },
      {
        name: "Flutter Development",
        icon: "/Images/flutterdevelopment.png",
        href: "/services/flutter-development",
      },
      {
        name: "React Native Development",
        icon: "/Images/reactdevelopment.png",
        href: "/services/react-native-development",
      },
      {
        name: "Unity Development",
        icon: "/Images/unitydevelopment.png",
        href: "/services/unity-development",
      },
      {
        name: "TensorFlow Development",
        icon: "/Images/tensorflowdevelopment.png",
        href: "/services/tensorflow-development",
      },
      {
        name: "PyTorch Development",
        icon: "/Images/pytorchdevelopment.png",
        href: "/services/pytorch-development",
      },
    ],
    "Solution & Service Types": [
      {
        name: "MVP Development",
        icon: "/Images/mvpdevelopment.png",
        href: "/services/mvp-development",
      },
      {
        name: "Custom Software Development",
        icon: "/Images/customsoftwaredevelopment.png",
        href: "/services/custom-software-development",
      },
      {
        name: "Web Application Development",
        icon: "/Images/webapplicationdevelopment.png",
        href: "/services/web-development",
      },
      {
        name: "Mobile App Development",
        icon: "/Images/mobileapplicationdevelopment.png",
        href: "/services/mobile-app-development",
      },
      {
        name: "API Development",
        icon: "/Images/apidevelopment.png",
        href: "/services/api-development",
      },
      {
        name: "SaaS Development",
        icon: "/Images/webdevelopment.png",
        href: "/services/saas-development",
      },
      {
        name: "E-commerce Development",
        icon: "/Images/ecommercedevelopment.png",
        href: "/services/ecommerce-development",
      },
      {
        name: "CMS Development",
        icon: "/Images/cmsdevelopment.png",
        href: "/services/cms-development",
      },
      {
        name: "UI/UX Design",
        icon: "/Images/uiuxdesign.png",
        href: "/services/ui-ux-designs",
      },
      {
        name: "DevOps Services",
        icon: "/Images/devops.png",
        href: "/services/devops-services",
      },
      {
        name: "Cloud Migration",
        icon: "/Images/cloudmigration.png",
        href: "/services/cloud-migration",
      },
      {
        name: "AI/ML Solutions",
        icon: "/Images/aimldevelopment.png",
        href: "/services/artificial-intelligence",
      },
      {
        name: "Blockchain Development",
        icon: "/Images/blockchaindevelopment.png",
        href: "/services/blockchain-development",
      },
      {
        name: "IoT Development",
        icon: "/Images/iotdevelopment.png",
        href: "/services/iot-development",
      },
      {
        name: "AR/VR Development",
        icon: "/Images/arvrdevelopment.png",
        href: "/services/ar-vr-development",
      },
      {
        name: "Game Development",
        icon: "/Images/gamedevelopment.png",
        href: "/services/game-development",
      },
    ],
    "Platforms & Devices": [
      {
        name: "Web Development",
        icon: "/Images/webdevelopment.png",
        href: "/services/web-development",
      },
      {
        name: "iOS Development",
        icon: "/Images/iosdevelopment.png",
        href: "/services/ios-development",
      },
      {
        name: "Android Development",
        icon: "/Images/androiddevelopment.png",
        href: "/services/android-development",
      },
      {
        name: "Cross-Platform Development",
        icon: "/Images/crossplatformdevelopment.png",
        href: "/services/cross-platform-development",
      },
      {
        name: "Desktop Applications",
        icon: "/Images/desktopapplication.png",
        href: "/services/desktop-development",
      },
      {
        name: "Progressive Web Apps",
        icon: "/Images/progressivewebapp.png",
        href: "/services/pwa-development",
      },
      {
        name: "Smart TV Applications",
        icon: "/Images/smarttvapplications.png",
        href: "/services/smart-tv-development",
      },
      {
        name: "Wearables Development",
        icon: "/Images/wearablesdevelopment.png",
        href: "/services/wearables-development",
      },
      {
        name: "Embedded Systems",
        icon: "/Images/embeddedsystem.png",
        href: "/services/embedded-development",
      },
    ],
    "CMS & E-commerce": [
      {
        name: "WordPress Development",
        icon: "/Images/wordpressdevelopment.png",
        href: "/services/wordpress-development",
      },
      {
        name: "Shopify Development",
        icon: "/Images/shopifydevelopment.png",
        href: "/services/shopify-development",
      },
      {
        name: "Magento Development",
        icon: "/Images/magentodevelopment.png",
        href: "/services/magento-development",
      },
      {
        name: "Drupal Development",
        icon: "/Images/drupaldevelopment.png",
        href: "/services/drupal-development",
      },
      {
        name: "WooCommerce Development",
        icon: "/Images/woocommercedevelopment.png",
        href: "/services/woocommerce-development",
      },
      {
        name: "BigCommerce Development",
        icon: "/Images/bigcommercedevelopment.png",
        href: "/services/bigcommerce-development",
      },
      {
        name: "Custom E-commerce",
        icon: "/Images/customecommercedevelopment.jpg",
        href: "/services/custom-ecommerce",
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
            <Link
              href="/"
              className="flex items-center space-x-2"
            >
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
                <div
                  key={item.name}
                  className="relative"
                >
                  {item.hasDropdown ? (
                    <div
                      className="relative"
                      ref={item.isServices ? servicesDropdownRef : resourcesDropdownRef}
                    >
                      <div className="flex items-center">
                        <Link
                          href={item.href}
                          onClick={() =>
                            item.isServices
                              ? setIsServicesOpen(true)
                              : setIsResourcesOpen(true)
                          }
                          className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${isActive(
                            item.href
                          )
                            ? "text-gray-900 border-b-2 border-indigo-500"
                            : "text-gray-500 hover:text-gray-700 hover:border-gray-300"
                            }`}
                        >
                          {item.name}
                        </Link>
                        <button
                          onClick={() =>
                            item.isServices
                              ? setIsServicesOpen(!isServicesOpen)
                              : setIsResourcesOpen(!isResourcesOpen)
                          }
                          className="ml-1 p-1 text-gray-500 hover:text-gray-700"
                        >
                          <svg
                            className="h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </button>
                      </div>

                      {/* Services Dropdown */}
                      {item.isServices &&
                        isServicesOpen && (
                          <div className="absolute left-0 w-56 mt-2 origin-top-left bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg z-50">
                            {(Object.keys(
                              servicesData
                            ) as (keyof typeof servicesData)[]).map(
                              (
                                category
                              ) => (
                                <div
                                  key={
                                    category
                                  }
                                  className="relative group/submenu px-4 py-2 hover:bg-gray-50"
                                >
                                  <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-700">
                                      {
                                        category
                                      }
                                    </span>
                                    <span className="text-gray-400">
                                      →
                                    </span>
                                  </div>
                                  <div className="hidden group-hover/submenu:block absolute left-full top-0 w-64 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                                    <div className="py-2 max-h-72 overflow-y-auto">
                                      {servicesData[
                                        category
                                      ].map(
                                        (
                                          service
                                        ) => (
                                          <Link
                                            key={
                                              service.name
                                            }
                                            href={
                                              service.href
                                            }
                                            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                                          >
                                            <div className="w-5 h-5 mr-2 relative">
                                              <Image
                                                src={service.icon}
                                                alt={`${service.name} icon`}
                                                width={20}
                                                height={20}
                                                className="object-contain"
                                              />
                                            </div>
                                            {
                                              service.name
                                            }
                                          </Link>
                                        )
                                      )}
                                    </div>
                                  </div>
                                </div>
                              )
                            )}
                          </div>
                        )}

                      {/* Resources Dropdown */}
                      {!item.isServices &&
                        isResourcesOpen &&
                        item.dropdownItems && (
                          <div className="absolute top-full left-0 mt-1 w-72 bg-white rounded-md shadow-lg border border-gray-100 py-2 z-50">
                            {/* Tutorials Section */}
                            <div className="px-4 py-2">
                              <h4 className="text-xs font-semibold text-purple-600 mb-2 uppercase tracking-wide">
                                Tutorials
                              </h4>
                              {item.dropdownItems
                                .filter(
                                  (
                                    dropdownItem
                                  ) =>
                                    dropdownItem.isSubmenu
                                )
                                .map(
                                  (
                                    dropdownItem
                                  ) => (
                                    <Link
                                      key={
                                        dropdownItem.name
                                      }
                                      href={
                                        dropdownItem.href
                                      }
                                      className="block px-3 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors duration-150 rounded-md"
                                    >
                                      {
                                        dropdownItem.name
                                      }
                                    </Link>
                                  )
                                )}
                            </div>

                            {/* Divider */}
                            <div className="border-t border-gray-100 my-2"></div>

                            {/* Other Resources */}
                            {item.dropdownItems
                              .filter(
                                (
                                  dropdownItem
                                ) =>
                                  !dropdownItem.isSubmenu
                              )
                              .map(
                                (
                                  dropdownItem
                                ) => (
                                  <Link
                                    key={
                                      dropdownItem.name
                                    }
                                    href={
                                      dropdownItem.href
                                    }
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors duration-150"
                                  >
                                    {
                                      dropdownItem.name
                                    }
                                  </Link>
                                )
                              )}
                          </div>
                        )}
                    </div>
                  ) : (
                    <Link
                      href={
                        item.href
                      }
                      className={`px-3 py-2 text-sm font-medium transition-colors duration-200 relative ${isActive(
                        item.href
                      )
                        ? "text-purple-600"
                        : "text-gray-700 hover:text-purple-600"
                        }`}
                    >
                      {
                        item.name
                      }
                      {/* Active underline */}
                      {isActive(
                        item.href
                      ) && (
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
              onClick={() =>
                setIsMenuOpen(
                  !isMenuOpen
                )
              }
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-purple-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <svg
                className={`${isMenuOpen
                  ? "hidden"
                  : "block"
                  } h-6 w-6`}
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
                className={`${isMenuOpen
                  ? "block"
                  : "hidden"
                  } h-6 w-6`}
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
                <div
                  key={item.name}
                >
                  {item.hasDropdown ? (
                    <div>
                      <div className="flex items-center">
                        <Link
                          href={
                            item.href
                          }
                          onClick={() => {
                            setIsMenuOpen(false);
                            if (item.isServices) {
                              setIsServicesOpen(true);
                            } else {
                              setIsResourcesOpen(true);
                            }
                          }}
                          className={`flex-1 px-3 py-2 text-base font-medium transition-colors duration-200 ${isActive(
                            item.href
                          )
                            ? "text-purple-600 bg-purple-50"
                            : "text-gray-700 hover:text-purple-600 hover:bg-gray-50"
                            }`}
                        >
                          {
                            item.name
                          }
                        </Link>
                        <button
                          onClick={() =>
                            item.isServices
                              ? setIsServicesOpen(
                                !isServicesOpen
                              )
                              : setIsResourcesOpen(
                                !isResourcesOpen
                              )
                          }
                          className={`px-3 py-2 text-base font-medium transition-colors duration-200 ${isActive(
                            item.href
                          )
                            ? "text-purple-600 bg-purple-50"
                            : "text-gray-700 hover:text-purple-600 hover:bg-gray-50"
                            }`}
                        >
                          <svg
                            className={`w-4 h-4 transition-transform duration-200 ${(item.isServices &&
                              isServicesOpen) ||
                              (!item.isServices &&
                                isResourcesOpen)
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
                              strokeWidth={
                                2
                              }
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </button>
                      </div>

                      {/* Mobile Services Dropdown */}
                      {item.isServices &&
                        isServicesOpen && (
                          <div className="pl-6 space-y-1 max-h-96 overflow-y-auto">
                            {Object.entries(
                              servicesData
                            ).map(
                              ([
                                category,
                                services,
                              ]) => (
                                <div
                                  key={
                                    category
                                  }
                                  className="py-2"
                                >
                                  <h4 className="text-xs font-semibold text-blue-600 mb-2">
                                    {
                                      category
                                    }
                                  </h4>
                                  {services.map(
                                    (
                                      service
                                    ) => (
                                      <Link
                                        key={
                                          service.name
                                        }
                                        href={
                                          service.href
                                        }
                                        className="flex items-center space-x-2 px-3 py-1 text-sm text-gray-600 hover:text-purple-600 hover:bg-purple-50 transition-colors duration-150"
                                        onClick={() =>
                                          setIsMenuOpen(
                                            false
                                          )
                                        }
                                      >
                                        <div className="w-5 h-5 relative">
                                          <Image
                                            src={service.icon}
                                            alt={`${service.name} icon`}
                                            width={20}
                                            height={20}
                                            className="object-contain"
                                          />
                                        </div>
                                        <span>
                                          {
                                            service.name
                                          }
                                        </span>
                                      </Link>
                                    )
                                  )}
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
                            {/* Tutorials Section */}
                            <div className="py-2">
                              <h4 className="text-xs font-semibold text-purple-600 mb-2 uppercase tracking-wide">
                                Tutorials
                              </h4>
                              {item.dropdownItems
                                .filter(
                                  (
                                    dropdownItem
                                  ) =>
                                    dropdownItem.isSubmenu
                                )
                                .map(
                                  (
                                    dropdownItem
                                  ) => (
                                    <Link
                                      key={
                                        dropdownItem.name
                                      }
                                      href={
                                        dropdownItem.href
                                      }
                                      className="block px-3 py-2 text-sm text-gray-600 hover:text-purple-600 hover:bg-purple-50 transition-colors duration-150"
                                      onClick={() =>
                                        setIsMenuOpen(
                                          false
                                        )
                                      }
                                    >
                                      {
                                        dropdownItem.name
                                      }
                                    </Link>
                                  )
                                )}
                            </div>

                            {/* Other Resources */}
                            {item.dropdownItems
                              .filter(
                                (
                                  dropdownItem
                                ) =>
                                  !dropdownItem.isSubmenu
                              )
                              .map(
                                (
                                  dropdownItem
                                ) => (
                                  <Link
                                    key={
                                      dropdownItem.name
                                    }
                                    href={
                                      dropdownItem.href
                                    }
                                    className="block px-3 py-2 text-sm text-gray-600 hover:text-purple-600 hover:bg-purple-50 transition-colors duration-150"
                                    onClick={() =>
                                      setIsMenuOpen(
                                        false
                                      )
                                    }
                                  >
                                    {
                                      dropdownItem.name
                                    }
                                  </Link>
                                )
                              )}
                          </div>
                        )}
                    </div>
                  ) : (
                    <Link
                      href={
                        item.href
                      }
                      className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${isActive(
                        item.href
                      )
                        ? "text-purple-600 bg-purple-50"
                        : "text-gray-700 hover:text-purple-600 hover:bg-gray-50"
                        }`}
                      onClick={() =>
                        setIsMenuOpen(
                          false
                        )
                      }
                    >
                      {
                        item.name
                      }
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4">
                <Link
                  href="/contact"
                  className="block w-full text-center bg-gray-900 hover:bg-gray-800 text-white px-6 py-2 rounded-lg text-base font-medium transition-colors duration-200"
                  onClick={() =>
                    setIsMenuOpen(
                      false
                    )
                  }
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
