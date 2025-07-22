import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Blockchain Development Services | Web3 & DApp Development | MVP Development",
  description:
    "Professional blockchain development services for DApps, smart contracts, NFT platforms, and Web3 solutions using Ethereum, Solidity, and modern frameworks.",
  keywords:
    "blockchain development, Web3, DApp development, smart contracts, Ethereum, Solidity, NFT, cryptocurrency",
};

export default function BlockchainDevelopmentPage() {
  const features = [
    {
      icon: "⛓️",
      title: "Smart Contracts",
      description: "Secure and efficient smart contract development",
    },
    {
      icon: "🌐",
      title: "DApp Development",
      description: "Decentralized applications on various blockchains",
    },
    {
      icon: "💎",
      title: "NFT Platforms",
      description: "NFT marketplaces and minting platforms",
    },
    {
      icon: "💰",
      title: "DeFi Solutions",
      description: "Decentralized finance applications",
    },
    {
      icon: "🔒",
      title: "Security Audits",
      description: "Comprehensive smart contract auditing",
    },
    {
      icon: "🚀",
      title: "Token Development",
      description: "Custom token creation and deployment",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="pt-20 pb-16 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <span className="text-4xl">⛓️</span>
              <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-lg text-sm font-medium">
                Blockchain Development
              </span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-light mb-6 leading-tight">
              Decentralized Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed font-light">
              Build the future with blockchain technology. From smart contracts
              to DApps, we create secure, decentralized solutions for Web3.
            </p>
            <Link
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Start Blockchain Project
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-light text-gray-900 mb-12 text-center">
            Blockchain Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-stone-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-light mb-6">Ready for Web3?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Enter the decentralized future with blockchain technology.
          </p>
          <Link
            href="/contact"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 shadow-lg"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
}
