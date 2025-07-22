import Link from 'next/link';

export default function ServicesPage() {
  const heroStats = [
    { label: "Since 2020", value: "" },
    { label: "200+ Satisfied Clients", value: "" },
    { label: "Global Recognition", value: "" }
  ];

  const serviceOfferings = [
    {
      title: "Website Development",
      description: "We have the right mixture of professional designers and expert web developers, making us a one-stop hub for hundreds of our clients worldwide.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Web Designing",
      description: "MVP Development is a quality-assured web design company that provides truly dignified design ideas to speak on behalf of your business.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
        </svg>
      )
    },
    {
      title: "Mobile App Development",
      description: "We develop world-class multi-functional mobile apps for Android, iOS, Flutter and React Native. Our professional developers ensure quality and on-time delivery.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Digital Marketing",
      description: "We prepare your strategy based on data and execute it efficiently, reviewing results and adjusting actions for continuous improvement.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  const webServices = [
    {
      title: "React.js Development",
      description: "We offer React.js development services covering music and video streaming apps to e-commerce and social networking applications.",
      tech: "React"
    },
    {
      title: "Node.js Development", 
      description: "Ideal web development partner for creating scalable and high-performing Node.js applications with modern architecture.",
      tech: "Node.js"
    },
    {
      title: "Angular Development",
      description: "Leading Angular development services offering the most versatile and demanding Angular solutions for enterprise applications.",
      tech: "Angular"
    },
    {
      title: "PHP Development",
      description: "Experienced PHP developers enabling custom web development tailored to meet your specific business requirements.",
      tech: "PHP"
    },
    {
      title: "Python Development",
      description: "Comprehensive Python web application development including designing, developing, and integrating Python solutions.",
      tech: "Python"
    },
    {
      title: "WordPress Development",
      description: "Full-range WordPress services including custom theme development, plugin customization, and speed optimization.",
      tech: "WordPress"
    }
  ];

  const mobileServices = [
    {
      title: "Native App Development",
      description: "Cutting-edge and secure native apps designed to create advanced mobility solutions adapted to your business needs.",
      platforms: ["iOS", "Android"]
    },
    {
      title: "React Native Development",
      description: "Leading React Native development company creating best-in-class mobile applications with truly-native experiences.",
      platforms: ["Cross-platform"]
    },
    {
      title: "Flutter Development",
      description: "100% custom-designed Flutter apps for reliable performance and scalability with state-of-the-art infrastructure.",
      platforms: ["Cross-platform"]
    },
    {
      title: "Hybrid App Development",
      description: "Flexible hybrid solutions offering better performance and scalability with native feature integration.",
      platforms: ["Multi-platform"]
    }
  ];

  const designServices = [
    {
      title: "UI/UX Designing",
      description: "Efficient design process bringing solid results with precision and speed through decade-long experience."
    },
    {
      title: "Logo Designing", 
      description: "Creative logo designs that fit your budget and represent your brand identity effectively."
    },
    {
      title: "Graphic Designing",
      description: "Excellent graphic design services combining hard work, excellence, and creative artistic ability."
    },
    {
      title: "Brochure Designing",
      description: "Best-quality business brochure designs creating lasting impressions on your target audience."
    }
  ];

  const faqData = [
    {
      question: "What types of websites or mobile apps do you develop?",
      answer: "We develop e-commerce websites, corporate websites, informational websites, mobile apps for iOS and Android, and custom solutions tailored to your unique needs with responsive design."
    },
    {
      question: "How do you ensure the quality of your work?",
      answer: "We follow experienced professionals, quality assurance, best practices, collaborative approach, thorough testing, code reviews, and continuous learning to ensure highest quality."
    },
    {
      question: "What is the typical development process?",
      answer: "Our process includes planning, design, development, testing, and deployment. We start with defining goals, wireframing, UI design, coding, testing, and finally deployment."
    },
    {
      question: "What's the difference between native and hybrid development?",
      answer: "Native apps are platform-specific (iOS/Android) while hybrid apps use web technologies to run on multiple platforms. Choice depends on your target audience and functionality needs."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900 mb-6 leading-tight">
              Offering IT-based Services To
              <span className="block">Accelerate Your Business Growth</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed mb-12">
              Our comprehensive services offer solutions that simplify business complexities 
              for some of the most successful companies worldwide.
            </p>

            {/* Stats */}
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-12 mb-12">
              {heroStats.map((stat, index) => (
                <div key={index} className="flex items-center">
                  <span className="text-sm font-medium text-gray-700">{stat.label}</span>
                  {index < heroStats.length - 1 && (
                    <span className="hidden sm:block text-gray-300 ml-12">|</span>
                  )}
                </div>
              ))}
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-xl font-medium transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Contact Us Now
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Service Offerings */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-6">
              Service Offerings
            </h2>
            <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
              We are an IT-based service provider focused on building quality software products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceOfferings.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl border border-stone-200 p-8 text-center hover:shadow-lg transition-all duration-300 group">
                <div className="w-16 h-16 bg-stone-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-stone-200 transition-colors duration-300">
                  <div className="text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Web Development Services */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-6">
              Our Web Development Services
            </h2>
            <p className="text-lg text-gray-600 font-light max-w-3xl mx-auto">
              We have been delivering impactful and engaging web development services 
              for leading companies across the globe.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {webServices.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl border border-stone-200 p-8 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium text-gray-900">{service.title}</h3>
                  <span className="bg-stone-100 text-gray-700 px-3 py-1 rounded-lg text-xs font-medium">
                    {service.tech}
                  </span>
                </div>
                <p className="text-gray-600 leading-relaxed text-sm mb-6">{service.description}</p>
                <Link 
                  href="#" 
                  className="inline-flex items-center text-gray-900 hover:text-gray-700 font-medium text-sm transition-colors duration-200"
                >
                  View Details
                  <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile Development Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-6">
              Our Mobile Development Services
            </h2>
            <p className="text-lg text-gray-600 font-light max-w-3xl mx-auto">
              We develop top-notch mobile applications with high-quality development solutions 
              for various platforms and business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mobileServices.map((service, index) => (
              <div key={index} className="bg-stone-50 rounded-2xl border border-stone-200 p-8 hover:shadow-lg transition-all duration-300">
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.platforms.map((platform, platformIndex) => (
                    <span key={platformIndex} className="bg-white text-gray-700 px-3 py-1 rounded-lg text-xs font-medium border border-stone-200">
                      {platform}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Services */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-6">
              Our Design Services
            </h2>
            <p className="text-lg text-gray-600 font-light max-w-3xl mx-auto">
              We continue to provide the latest in design services with eye-catching creativity 
              for businesses of all sizes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {designServices.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl border border-stone-200 p-8 hover:shadow-lg transition-all duration-300 group">
                <h3 className="text-xl font-medium text-gray-900 mb-4 group-hover:text-gray-700 transition-colors duration-200">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 font-light">
              Get answers to the most common questions about our services and development process.
            </p>
          </div>

          <div className="space-y-6">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-stone-50 rounded-2xl border border-stone-200 p-8">
                <h3 className="text-lg font-medium text-gray-900 mb-4">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-stone-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-gray-600 font-light mb-8 max-w-2xl mx-auto">
            Connect with us to get the best solution for all of your development needs. 
            Let&apos;s discuss your ideas and bring them to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-xl font-medium transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Get A Quote
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/blogs"
              className="inline-flex items-center bg-white hover:bg-stone-50 text-gray-700 px-8 py-3 rounded-xl font-medium transition-colors duration-200 border border-stone-200 hover:border-stone-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 