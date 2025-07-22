import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Java Development Services | Enterprise Applications | MVP Development',
  description: 'Professional Java development services for enterprise applications, Spring Boot, microservices, and scalable backend solutions.',
  keywords: 'Java development, Spring Boot, enterprise applications, microservices, backend development, Java EE',
};

export default function JavaDevelopmentPage() {
  const features = [
    { icon: "☕", title: "Modern Java", description: "Java 17+ with latest language features" },
    { icon: "🌱", title: "Spring Framework", description: "Spring Boot and Spring ecosystem" },
    { icon: "🏢", title: "Enterprise Ready", description: "Scalable enterprise solutions" },
    { icon: "🔧", title: "Microservices", description: "Distributed architecture patterns" },
    { icon: "🛡️", title: "Security", description: "Enterprise-grade security implementation" },
    { icon: "☁️", title: "Cloud Native", description: "Kubernetes and cloud deployment" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="pt-20 pb-16 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <span className="text-4xl">☕</span>
              <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-lg text-sm font-medium">Java Development</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-light text-gray-900 mb-6 leading-tight">
              Enterprise Java Solutions
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed font-light">
              Build robust, scalable enterprise applications with Java. Perfect for large-scale systems, microservices, and mission-critical applications.
            </p>
            <Link href="/contact" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl">
              Start Java Project
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-light text-gray-900 mb-12 text-center">Java Development Features</h2>
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

      <section className="py-20 bg-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-light text-white mb-6">Ready for Enterprise Java?</h2>
          <p className="text-xl text-orange-100 mb-8">Build scalable enterprise applications with Java.</p>
          <Link href="/contact" className="bg-white hover:bg-orange-50 text-orange-600 px-8 py-4 rounded-xl font-medium transition-all duration-300 shadow-lg">
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
} 