import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SEO Services | Search Engine Optimization | MVP Development",
  description:
    "Professional SEO services to improve your website rankings, organic traffic, and online visibility with proven strategies.",
  keywords:
    "SEO services, search engine optimization, organic traffic, website ranking, digital marketing, on-page SEO, off-page SEO",
};

export default function SEOPage() {
  const features = [
    {
      icon: "🔍",
      title: "Keyword Research",
      description: "Strategic keyword analysis and targeting",
    },
    {
      icon: "📈",
      title: "Rank Tracking",
      description: "Monitor and improve search rankings",
    },
    {
      icon: "🔧",
      title: "Technical SEO",
      description: "Site speed, structure, and optimization",
    },
    {
      icon: "📝",
      title: "Content SEO",
      description: "SEO-optimized content strategy",
    },
    {
      icon: "🔗",
      title: "Link Building",
      description: "Quality backlink acquisition",
    },
    {
      icon: "📊",
      title: "Analytics",
      description: "Detailed performance reporting",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <span className="text-4xl">🔍</span>
              <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-lg text-sm font-medium">
                SEO Services
              </span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-light text-gray-900 mb-6 leading-tight">
              Boost Your Search Rankings
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed font-light">
              Increase your organic traffic and online visibility with our
              proven SEO strategies. Get found by your target audience and drive
              more qualified leads.
            </p>
            <Link
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Start SEO Campaign
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-light text-gray-900 mb-12 text-center">
            SEO Services
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

      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-light text-white mb-6">
            Ready to Rank Higher?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Improve your search visibility and drive organic traffic.
          </p>
          <Link
            href="/contact"
            className="bg-white hover:bg-blue-50 text-blue-600 px-8 py-4 rounded-xl font-medium transition-all duration-300 shadow-lg"
          >
            Get SEO Audit
          </Link>
        </div>
      </section>
    </div>
  );
}
