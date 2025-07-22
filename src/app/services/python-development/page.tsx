import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Python Development Services | AI/ML & Web Applications | MVP Development',
  description: 'Expert Python development for web applications, AI/ML solutions, data science, and automation with Django, Flask, and modern frameworks.',
  keywords: 'Python development, Django, Flask, AI/ML, data science, web applications, automation, machine learning',
};

export default function PythonDevelopmentPage() {
  const features = [
    { icon: "🐍", title: "Modern Python", description: "Python 3.11+ with latest features" },
    { icon: "🌐", title: "Web Frameworks", description: "Django, Flask, and FastAPI development" },
    { icon: "🤖", title: "AI/ML Integration", description: "Machine learning and data science solutions" },
    { icon: "📊", title: "Data Processing", description: "Big data and analytics applications" },
    { icon: "⚡", title: "Automation", description: "Process automation and scripting" },
    { icon: "🔗", title: "API Development", description: "RESTful and GraphQL APIs" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="pt-20 pb-16 bg-gradient-to-br from-yellow-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <span className="text-4xl">🐍</span>
              <span className="bg-yellow-100 text-yellow-600 px-3 py-1 rounded-lg text-sm font-medium">Python Development</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-light text-gray-900 mb-6 leading-tight">
              Versatile Python Solutions
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed font-light">
              Leverage Python's versatility for web development, AI/ML, data science, and automation. From simple scripts to complex enterprise applications.
            </p>
            <Link href="/contact" className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl">
              Start Python Project
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-light text-gray-900 mb-12 text-center">Python Capabilities</h2>
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

      <section className="py-20 bg-yellow-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-light text-white mb-6">Ready to Build with Python?</h2>
          <p className="text-xl text-yellow-100 mb-8">Create powerful applications with Python's versatility.</p>
          <Link href="/contact" className="bg-white hover:bg-yellow-50 text-yellow-600 px-8 py-4 rounded-xl font-medium transition-all duration-300 shadow-lg">
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
} 