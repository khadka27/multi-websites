import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Professional UI/UX Design Services | User Experience Design | MVP Development',
  description: 'Expert UI/UX design services for web and mobile applications. User-centered design approach with wireframing, prototyping, and usability testing.',
  keywords: 'UI design, UX design, user experience, user interface, wireframing, prototyping, design system, usability testing',
  openGraph: {
    title: 'Professional UI/UX Design Services | MVP Development',
    description: 'Expert UI/UX design services for exceptional user experiences.',
    type: 'website',
  }
};

export default function UIUXDesignPage() {
  const designServices = [
    {
      title: "User Research",
      icon: "🔍",
      description: "Deep understanding of your users' needs, behaviors, and pain points",
      deliverables: ["User Personas", "Journey Maps", "Research Reports", "Usability Insights"],
      color: "from-pink-500 to-rose-500"
    },
    {
      title: "Wireframing & Prototyping",
      icon: "📐",
      description: "Structured blueprints and interactive prototypes for optimal user flows",
      deliverables: ["Low-fi Wireframes", "High-fi Prototypes", "Interactive Mockups", "Flow Diagrams"],
      color: "from-purple-500 to-indigo-500"
    },
    {
      title: "Visual Design",
      icon: "🎨",
      description: "Beautiful, on-brand interfaces that create emotional connections",
      deliverables: ["Design System", "Style Guide", "UI Components", "Brand Integration"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Usability Testing",
      icon: "🧪",
      description: "Validate designs with real users to ensure optimal performance",
      deliverables: ["Test Plans", "User Feedback", "Iteration Reports", "Success Metrics"],
      color: "from-green-500 to-emerald-500"
    }
  ];

  const designPrinciples = [
    {
      principle: "User-Centered",
      description: "Every design decision is based on user needs and behaviors",
      icon: "👥"
    },
    {
      principle: "Accessibility First",
      description: "Inclusive design that works for users of all abilities",
      icon: "♿"
    },
    {
      principle: "Mobile-Responsive",
      description: "Seamless experiences across all devices and screen sizes",
      icon: "📱"
    },
    {
      principle: "Data-Driven",
      description: "Design decisions backed by analytics and user feedback",
      icon: "📊"
    }
  ];

  const designProcess = [
    {
      step: "Discover",
      description: "Research users, analyze competitors, define problems",
      icon: "🔍",
      duration: "1-2 weeks"
    },
    {
      step: "Define", 
      description: "Create user personas, map journeys, set design goals",
      icon: "🎯",
      duration: "1 week"
    },
    {
      step: "Design",
      description: "Wireframe, prototype, and create visual designs",
      icon: "✏️",
      duration: "2-4 weeks"
    },
    {
      step: "Develop",
      description: "Collaborate with developers for pixel-perfect implementation",
      icon: "⚙️",
      duration: "3-6 weeks"
    },
    {
      step: "Deliver",
      description: "Test with users, iterate, and launch the final product",
      icon: "🚀",
      duration: "1-2 weeks"
    }
  ];

  const portfolio = [
    {
      title: "E-commerce Mobile App",
      category: "Mobile Design",
      description: "Modern shopping experience with seamless checkout flow",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop",
      tags: ["Mobile", "E-commerce", "iOS", "Android"]
    },
    {
      title: "SaaS Dashboard",
      category: "Web Application",
      description: "Clean, data-driven interface for business analytics",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop",
      tags: ["Web", "Dashboard", "Analytics", "SaaS"]
    },
    {
      title: "Healthcare Platform",
      category: "Patient Portal",
      description: "Intuitive healthcare management system",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop",
      tags: ["Healthcare", "Portal", "Accessibility", "HIPAA"]
    }
  ];

  const tools = [
    { name: "Figma", icon: "🎨", description: "Collaborative design platform" },
    { name: "Adobe XD", icon: "🔷", description: "UI/UX design and prototyping" },
    { name: "Sketch", icon: "💎", description: "Vector-based design tool" },
    { name: "InVision", icon: "👁️", description: "Digital product design platform" },
    { name: "Principle", icon: "⚡", description: "Animated design tool" },
    { name: "Maze", icon: "🧩", description: "User testing platform" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-20 bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-pink-300/20 to-purple-300/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-indigo-300/20 to-cyan-300/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-14 h-14 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center">
                  <span className="text-2xl">✨</span>
                </div>
                <div>
                  <span className="block text-sm font-medium text-purple-600 uppercase tracking-wide">UI/UX Design</span>
                  <span className="block text-xs text-gray-500">User-Centered Excellence</span>
                </div>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-light text-gray-900 mb-8 leading-tight">
                Design That
                <span className="block bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent font-medium">
                  Converts & Delights
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-10 leading-relaxed font-light">
                Create exceptional user experiences that drive engagement and business results. Our user-centered design approach 
                combines research, creativity, and data to craft interfaces that users love and businesses rely on.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link 
                  href="/contact"
                  className="group inline-flex items-center justify-center bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white px-8 py-4 rounded-2xl font-medium transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
                >
                  Start Design Project
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="#portfolio"
                  className="inline-flex items-center justify-center bg-white hover:bg-gray-50 text-gray-700 px-8 py-4 rounded-2xl font-medium transition-all duration-300 border border-gray-200 hover:border-gray-300 shadow-lg hover:shadow-xl"
                >
                  View Our Work
                </Link>
              </div>

              {/* Design Stats */}
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">200+</div>
                  <div className="text-sm text-gray-600">Designs Created</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">95%</div>
                  <div className="text-sm text-gray-600">User Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">40%</div>
                  <div className="text-sm text-gray-600">Conversion Increase</div>
                </div>
              </div>
            </div>

            {/* Right Visual - Design Mockup */}
            <div className="relative">
              <div className="relative bg-white rounded-3xl shadow-2xl border border-gray-200 p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                {/* Browser Header */}
                <div className="flex items-center space-x-2 mb-6 pb-4 border-b border-gray-100">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <div className="flex-1 bg-gray-100 rounded-lg h-6 mx-4"></div>
                </div>
                
                {/* Design Mockup */}
                <div className="space-y-6">
                  <div className="h-4 bg-gradient-to-r from-pink-200 to-purple-200 rounded w-3/4"></div>
                  <div className="h-20 bg-gradient-to-br from-pink-100 to-purple-100 rounded-xl flex items-center justify-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-purple-400 rounded-xl"></div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-12 bg-pink-50 rounded-lg"></div>
                    <div className="h-12 bg-purple-50 rounded-lg"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 bg-gray-200 rounded w-full"></div>
                    <div className="h-2 bg-gray-200 rounded w-2/3"></div>
                    <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                  </div>
                </div>
              </div>
              
              {/* Floating Design Elements */}
              <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-3 border border-gray-200 animate-float">
                <span className="text-sm">🎨 Creative</span>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-3 border border-gray-200 animate-float delay-1000">
                <span className="text-sm">👤 User-Focused</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-6">
              Our Design Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-light">
              Comprehensive UI/UX design services that cover every aspect of creating exceptional user experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {designServices.map((service, index) => (
              <div key={index} className="group relative overflow-hidden bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border border-gray-200 hover:border-gray-300 shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                <div className="relative">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center shadow-lg text-white`}>
                      <span className="text-2xl">{service.icon}</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-medium text-gray-900 group-hover:text-gray-700 transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    {service.deliverables.map((deliverable, deliverableIndex) => (
                      <div key={deliverableIndex} className="flex items-center space-x-2">
                        <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full`}></div>
                        <span className="text-sm text-gray-700">{deliverable}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-6">
              Our Design Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
              A proven methodology that ensures every design decision is purposeful and user-centered.
            </p>
          </div>

          <div className="relative">
            {/* Process Timeline */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-pink-300 to-purple-300"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {designProcess.map((step, index) => (
                <div key={index} className="relative group text-center">
                  <div className="relative bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl">{step.icon}</span>
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">
                      {step.step}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">
                      {step.description}
                    </p>
                    <div className="bg-gradient-to-r from-pink-100 to-purple-100 text-purple-700 px-3 py-1 rounded-lg text-xs font-medium">
                      {step.duration}
                    </div>
                  </div>
                  
                  {/* Step Number */}
                  <div className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg">
                    {index + 1}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Design Principles */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-6">
              Our Design Principles
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
              Core principles that guide every design decision we make to ensure exceptional user experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {designPrinciples.map((principle, index) => (
              <div key={index} className="group text-center">
                <div className="bg-gradient-to-br from-stone-50 to-white rounded-2xl p-8 shadow-lg border border-stone-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                  <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {principle.icon}
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                    {principle.principle}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-6">
              Featured Design Work
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
              Explore some of our recent UI/UX design projects that showcase our design expertise and user-centered approach.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <div key={index} className="group bg-white rounded-3xl overflow-hidden shadow-lg border border-stone-200 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden">
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-lg text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="bg-gradient-to-r from-pink-100 to-purple-100 text-purple-700 px-3 py-1 rounded-lg text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-6">
              Design Tools We Master
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
              We use industry-leading design tools to create, prototype, and test exceptional user experiences.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {tools.map((tool, index) => (
              <div key={index} className="group text-center">
                <div className="bg-stone-50 rounded-2xl p-6 shadow-lg border border-stone-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {tool.icon}
                  </div>
                  <h3 className="font-medium text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300 text-sm">
                    {tool.name}
                  </h3>
                  <p className="text-xs text-gray-600">{tool.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-pink-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-light text-white mb-6">
            Ready to Create Amazing User Experiences?
          </h2>
          <p className="text-xl text-pink-100 mb-8 font-light max-w-2xl mx-auto">
            Transform your digital product with user-centered design that drives engagement and conversions. 
            Let&apos;s create something beautiful together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-white hover:bg-pink-50 text-pink-600 px-8 py-4 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Start Design Project
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center bg-transparent hover:bg-white/10 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 border border-white/20 hover:border-white/40"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 