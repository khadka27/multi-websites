import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mobile App Design Services | UI/UX for Mobile | MVP Development",
  description:
    "Professional mobile app design services for iOS and Android. User-centered design that creates engaging mobile experiences.",
  keywords:
    "mobile app design, mobile UI/UX, app interface design, mobile user experience, iOS design, Android design",
};

export default function MobileAppDesignsPage() {
  const features = [
    {
      icon: "🎯",
      title: "User-Centered",
      description: "Design focused on mobile user behavior",
    },
    {
      icon: "📱",
      title: "Platform Guidelines",
      description: "iOS and Android design standards",
    },
    {
      icon: "✨",
      title: "Intuitive Interfaces",
      description: "Easy-to-use mobile interactions",
    },
    {
      icon: "🎨",
      title: "Visual Appeal",
      description: "Beautiful, modern mobile aesthetics",
    },
    {
      icon: "🔄",
      title: "Prototyping",
      description: "Interactive mobile prototypes",
    },
    {
      icon: "📊",
      title: "User Testing",
      description: "Validate designs with real users",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="pt-20 pb-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <span className="text-4xl">🎯</span>
              <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-lg text-sm font-medium">
                Mobile App Design
              </span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-light text-gray-900 mb-6 leading-tight">
              Engaging Mobile Experiences
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed font-light">
              Design mobile apps that users love to interact with. From
              wireframes to polished interfaces, create mobile experiences that
              drive engagement and retention.
            </p>
            <Link
              href="/contact"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Start Design Project
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-light text-gray-900 mb-12 text-center">
            Mobile Design Features
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

      <section className="py-20 bg-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-light text-white mb-6">
            Ready for Mobile Design Excellence?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Create mobile apps that users love to use.
          </p>
          <Link
            href="/contact"
            className="bg-white hover:bg-purple-50 text-purple-600 px-8 py-4 rounded-xl font-medium transition-all duration-300 shadow-lg"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
}
