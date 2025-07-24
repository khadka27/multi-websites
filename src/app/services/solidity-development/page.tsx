import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Solidity Development Services | Blockchain Smart Contracts",
  description:
    "Professional Solidity development services for blockchain smart contracts. Build secure DeFi applications and Web3 solutions on Ethereum.",
  keywords: [
    "Solidity development",
    "smart contracts",
    "blockchain development",
    "Ethereum development",
    "DeFi applications",
    "Web3 development",
    "cryptocurrency",
    "decentralized apps",
    "NFT development",
    "blockchain solutions",
  ],
  authors: [{ name: "wp development" }],
  openGraph: {
    title: "Professional Solidity Development Services",
    description:
      "Build secure blockchain applications with Solidity smart contracts. Expert development services for DeFi and Web3 solutions.",
    type: "website",
    images: [
      {
        url: "/logo/websiteprogrammingdevelopmentlogo.png",
        width: 1200,
        height: 630,
        alt: "Solidity Development Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Solidity Development Services",
    description:
      "Build secure blockchain applications with Solidity smart contracts. Expert development services for DeFi and Web3 solutions.",
    images: ["/logo/websiteprogrammingdevelopmentlogo.png"],
  },
};

const SolidityDevelopmentPage = () => {
  const services = [
    {
      title: "Smart Contract Development",
      description:
        "Build secure and efficient smart contracts using Solidity for Ethereum and EVM-compatible blockchains.",
      features: [
        "Contract architecture",
        "Security audits",
        "Gas optimization",
        "Upgradeable contracts",
      ],
    },
    {
      title: "DeFi Applications",
      description:
        "Develop decentralized finance applications including DEXs, lending protocols, and yield farming platforms.",
      features: [
        "DEX development",
        "Lending protocols",
        "Yield farming",
        "Liquidity mining",
      ],
    },
    {
      title: "NFT Platforms",
      description:
        "Create NFT marketplaces and minting platforms with advanced features and custom functionality.",
      features: [
        "NFT minting",
        "Marketplace development",
        "Royalty systems",
        "Multi-chain support",
      ],
    },
    {
      title: "Web3 Integration",
      description:
        "Integrate blockchain functionality into existing applications with Web3 libraries and tools.",
      features: [
        "Web3 integration",
        "Wallet connections",
        "Transaction handling",
        "Event monitoring",
      ],
    },
  ];

  const technologies = [
    "Solidity",
    "Ethereum",
    "Web3.js",
    "Hardhat",
    "Truffle",
    "OpenZeppelin",
    "MetaMask",
    "IPFS",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-600 to-orange-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Solidity Development Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-yellow-100 max-w-3xl mx-auto">
              Build secure blockchain applications with Solidity smart contracts
              and Web3 technology
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-yellow-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Start Your Project
              </Link>
              <Link
                href="/pricing"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-yellow-600 transition-colors"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Solidity Development Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive blockchain development solutions for Web3
              applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, serviceIndex) => (
              <div
                key={`service-${serviceIndex}`}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={`feature-${serviceIndex}-${featureIndex}`}
                      className="flex items-center text-sm text-gray-700"
                    >
                      <span className="w-2 h-2 bg-yellow-600 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Technologies We Use
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech, techIndex) => (
              <div
                key={`tech-${techIndex}`}
                className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <h3 className="text-lg font-medium text-gray-900">{tech}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-yellow-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Build on Blockchain?
          </h2>
          <p className="text-xl mb-8 text-orange-100 max-w-3xl mx-auto">
            Let&apos;s create secure smart contracts and Web3 applications using
            Solidity
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Started Today
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SolidityDevelopmentPage;
