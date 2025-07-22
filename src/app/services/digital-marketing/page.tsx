import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Digital Marketing Services | Online Marketing Strategy | MVP Development',
  description: 'Comprehensive digital marketing services including SEO, social media, PPC, content marketing, and conversion optimization.',
  keywords: 'digital marketing, online marketing, SEO, social media marketing, PPC, content marketing, conversion optimization',
};

export default function DigitalMarketingPage() {
  const features = [
    { icon: "📈", title: "Growth Strategy", description: "Data-driven marketing strategies for business growth" },
    { icon: "🎯", title: "PPC Advertising", description: "Google Ads and social media advertising campaigns" },
    { icon: "📱", title: "Social Media", description: "Social media marketing and community management" },
    { icon: "📧", title: "Email Marketing", description: "Automated email campaigns and nurture sequences" },
    { icon: "📝", title: "Content Marketing", description: "Engaging content that converts visitors to customers" },
    { icon: "📊", title: "Analytics", description: "Performance tracking and ROI measurement" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="pt-20 pb-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <span className="text-4xl">📈</span>
              <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-lg text-sm font-medium">Digital Marketing</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-light text-gray-900 mb-6 leading-tight">
              Grow Your Business Online
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed font-light">
              Comprehensive digital marketing strategies that drive traffic, generate leads, and increase conversions across all digital channels.
            </p>
            <Link href="/contact" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl">
              Start Marketing Campaign
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-light text-gray-900 mb-12 text-center">Marketing Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-stone-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-light text-white mb-6">Ready to Accelerate Growth?</h2>
          <p className="text-xl text-purple-100 mb-8">Transform your digital presence with strategic marketing.</p>
          <Link href="/contact" className="bg-white hover:bg-purple-50 text-purple-600 px-8 py-4 rounded-xl font-medium transition-all duration-300 shadow-lg">
            Get Marketing Strategy
          </Link>
        </div>
      </section>
    </div>
  );
} 