import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Brochure Design Services | Marketing Materials | MVP Development",
  description:
    "Professional brochure design services for marketing materials, business brochures, and promotional content that captures attention.",
  keywords:
    "brochure design, marketing materials, business brochures, print design, promotional design, graphic design",
};

export default function BrochureDesignsPage() {
  const features = [
    {
      icon: "📋",
      title: "Custom Brochures",
      description: "Tailored designs for your business needs",
    },
    {
      icon: "🎨",
      title: "Creative Layouts",
      description: "Eye-catching, professional designs",
    },
    {
      icon: "📄",
      title: "Print-Ready",
      description: "High-resolution, print-optimized files",
    },
    {
      icon: "📱",
      title: "Digital Versions",
      description: "Digital brochures for online use",
    },
    {
      icon: "🎯",
      title: "Brand Alignment",
      description: "Consistent with your brand identity",
    },
    {
      icon: "📈",
      title: "Marketing Focus",
      description: "Designs that drive conversions",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="pt-20 pb-16 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <span className="text-4xl">📋</span>
              <span className="bg-yellow-100 text-yellow-600 px-3 py-1 rounded-lg text-sm font-medium">
                Brochure Design
              </span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-light text-gray-900 mb-6 leading-tight">
              Impactful Marketing Materials
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed font-light">
              Create professional brochures that showcase your business
              effectively. From concept to print-ready files, design marketing
              materials that make an impact.
            </p>
            <Link
              href="/contact"
              className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Start Brochure Project
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-light text-gray-900 mb-12 text-center">
            Brochure Design Features
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

      <section className="py-20 bg-yellow-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-light text-white mb-6">
            Ready for Professional Brochures?
          </h2>
          <p className="text-xl text-yellow-100 mb-8">
            Create marketing materials that showcase your business.
          </p>
          <Link
            href="/contact"
            className="bg-white hover:bg-yellow-50 text-yellow-600 px-8 py-4 rounded-xl font-medium transition-all duration-300 shadow-lg"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
}
