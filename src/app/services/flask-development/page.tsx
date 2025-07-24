import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Flask Development Services | Python Web Framework",
  description: "Professional Flask development services for lightweight web applications. Build scalable APIs and web services with Python's micro-framework.",
  keywords: [
    "Flask development",
    "Python web development",
    "Flask framework",
    "RESTful API",
    "microservices",
    "web applications",
    "Python programming",
    "backend development",
    "Flask-SQLAlchemy",
    "Flask-RESTful"
  ],
  authors: [{ name: "wp development" }],
  openGraph: {
    title: "Professional Flask Development Services",
    description: "Build lightweight, scalable web applications with Flask. Expert Python web development for modern API and microservice solutions.",
    type: "website",
    images: [
      {
        url: "/logo/websiteprogrammingdevelopmentlogo.png",
        width: 1200,
        height: 630,
        alt: "Flask Development Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Flask Development Services",
    description: "Build lightweight, scalable web applications with Flask. Expert Python web development for modern API and microservice solutions.",
    images: ["/logo/websiteprogrammingdevelopmentlogo.png"],
  },
};

const FlaskDevelopmentPage = () => {
  const services = [
    {
      title: "RESTful API Development",
      description: "Create robust and scalable RESTful APIs using Flask-RESTful and modern API design patterns.",
      features: ["REST API design", "JSON serialization", "Authentication", "Rate limiting"]
    },
    {
      title: "Microservices Architecture",
      description: "Build lightweight microservices with Flask for distributed and scalable application architectures.",
      features: ["Service decomposition", "API gateways", "Service discovery", "Load balancing"]
    },
    {
      title: "Web Application Development",
      description: "Develop responsive web applications with Flask, Jinja2 templates, and modern frontend integration.",
      features: ["Template rendering", "Form handling", "Session management", "Frontend integration"]
    },
    {
      title: "Database Integration",
      description: "Implement efficient database solutions using Flask-SQLAlchemy, Flask-Migrate, and various database engines.",
      features: ["ORM configuration", "Database migrations", "Query optimization", "Multiple databases"]
    },
    {
      title: "Authentication & Security",
      description: "Implement secure authentication systems with JWT, OAuth, and comprehensive security measures.",
      features: ["JWT authentication", "OAuth integration", "CSRF protection", "Input validation"]
    },
    {
      title: "Testing & Deployment",
      description: "Comprehensive testing strategies and deployment solutions for Flask applications.",
      features: ["Unit testing", "Integration testing", "CI/CD pipelines", "Docker deployment"]
    }
  ];

  const benefits = [
    "Lightweight",
    "Flexible",
    "Pythonic",
    "Extensible",
    "Fast Development",
    "Minimalist",
    "Large Ecosystem",
    "Easy Testing"
  ];

  const technologies = [
    "Flask 3.0+",
    "Flask-SQLAlchemy",
    "Flask-RESTful",
    "Flask-Migrate",
    "Flask-Login",
    "Flask-JWT-Extended",
    "Jinja2",
    "Werkzeug",
    "SQLAlchemy",
    "Marshmallow",
    "Celery",
    "Redis"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-teal-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Flask Development Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-green-100 max-w-3xl mx-auto">
              Build lightweight, scalable web applications and APIs with Python&apos;s most flexible micro-framework
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Start Your Project
              </Link>
              <Link
                href="/pricing"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
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
              Our Flask Development Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive Flask solutions for modern web development and API creation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Flask for Your Project?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Flask provides the perfect balance of simplicity and power for web development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 rounded-lg bg-gray-50 hover:bg-green-50 transition-colors">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-lg font-bold">{index + 1}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{benefit}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Technologies We Use
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Modern Flask ecosystem and complementary technologies for robust development
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow text-center">
                <h3 className="text-lg font-medium text-gray-900">{tech}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Build with Flask?
          </h2>
          <p className="text-xl mb-8 text-teal-100 max-w-3xl mx-auto">
            Let&apos;s create lightweight, powerful web applications that scale with your business needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Started Today
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-teal-600 transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FlaskDevelopmentPage;
