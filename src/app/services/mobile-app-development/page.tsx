import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Mobile App Development Services | iOS & Android Apps | MVP Development',
  description: 'Professional mobile app development for iOS and Android. Native, cross-platform, and hybrid app solutions with React Native, Flutter, and Swift.',
  keywords: 'mobile app development, iOS development, Android development, React Native, Flutter, mobile apps, cross-platform',
  openGraph: {
    title: 'Mobile App Development Services | MVP Development',
    description: 'Professional mobile app development for iOS and Android platforms.',
    type: 'website',
  }
};

export default function MobileAppDevelopmentPage() {
  const platforms = [
    {
      name: "iOS Development",
      icon: "🍎",
      description: "Native iOS apps with Swift and SwiftUI",
      features: ["Swift Programming", "App Store Optimization", "iOS Design Guidelines", "TestFlight Beta Testing"],
      color: "from-gray-800 to-gray-600"
    },
    {
      name: "Android Development", 
      icon: "🤖",
      description: "Native Android apps with Kotlin and Java",
      features: ["Kotlin/Java Development", "Google Play Store", "Material Design", "Android Testing Framework"],
      color: "from-green-600 to-green-400"
    },
    {
      name: "Cross-Platform",
      icon: "🔄", 
      description: "React Native and Flutter solutions",
      features: ["Single Codebase", "Native Performance", "Faster Development", "Cost-Effective"],
      color: "from-blue-600 to-purple-600"
    }
  ];

  const appTypes = [
    {
      category: "Business Apps",
      icon: "💼",
      examples: ["CRM Systems", "Project Management", "Team Collaboration", "Productivity Tools"],
      color: "bg-blue-50 border-blue-200"
    },
    {
      category: "E-commerce Apps",
      icon: "🛒", 
      examples: ["Online Stores", "Marketplace Apps", "Payment Integration", "Inventory Management"],
      color: "bg-green-50 border-green-200"
    },
    {
      category: "Social Apps",
      icon: "💬",
      examples: ["Chat Applications", "Social Networks", "Content Sharing", "Community Platforms"],
      color: "bg-purple-50 border-purple-200"
    },
    {
      category: "Entertainment Apps",
      icon: "🎮",
      examples: ["Gaming Apps", "Media Streaming", "AR/VR Experiences", "Interactive Content"],
      color: "bg-orange-50 border-orange-200"
    }
  ];

  const developmentProcess = [
    {
      phase: "Discovery",
      duration: "1-2 weeks",
      activities: ["Market Research", "User Personas", "Feature Planning", "Technical Architecture"],
      deliverable: "Project Roadmap"
    },
    {
      phase: "Design",
      duration: "2-3 weeks", 
      activities: ["UI/UX Design", "Wireframes", "Prototypes", "Design System"],
      deliverable: "Interactive Prototype"
    },
    {
      phase: "Development",
      duration: "8-16 weeks",
      activities: ["Frontend Development", "Backend APIs", "Database Design", "Third-party Integrations"],
      deliverable: "Beta Application"
    },
    {
      phase: "Testing",
      duration: "2-3 weeks",
      activities: ["Unit Testing", "Integration Testing", "Performance Testing", "User Acceptance Testing"],
      deliverable: "Tested Application"
    },
    {
      phase: "Launch",
      duration: "1-2 weeks",
      activities: ["App Store Submission", "Marketing Setup", "Analytics Implementation", "User Training"],
      deliverable: "Live Application"
    }
  ];

  const features = [
    { icon: "🚀", title: "Fast Performance", description: "Optimized for speed and efficiency" },
    { icon: "🔒", title: "Secure Architecture", description: "Enterprise-grade security implementation" },
    { icon: "📊", title: "Analytics Integration", description: "Built-in analytics and reporting" },
    { icon: "🔔", title: "Push Notifications", description: "Engage users with targeted messaging" },
    { icon: "💳", title: "Payment Integration", description: "Secure payment processing solutions" },
    { icon: "🌐", title: "Offline Capability", description: "Works seamlessly without internet" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-20 bg-gradient-to-br from-indigo-50 via-white to-cyan-50 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <div className="text-4xl">📱</div>
              <span className="bg-gradient-to-r from-indigo-600 to-cyan-600 text-white px-4 py-2 rounded-xl text-sm font-medium">
                Mobile App Development
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-light text-gray-900 mb-8 leading-tight">
              Build Amazing
              <span className="block bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent font-medium">
                Mobile Experiences
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
              Transform your ideas into powerful mobile applications. We create intuitive, high-performance apps for iOS and Android that engage users and drive business growth across all platforms.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Link 
                href="/contact"
                className="group inline-flex items-center justify-center bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-700 hover:to-cyan-700 text-white px-10 py-4 rounded-2xl font-medium transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              >
                Start Your App Project
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="#platforms"
                className="inline-flex items-center justify-center bg-white hover:bg-gray-50 text-gray-700 px-10 py-4 rounded-2xl font-medium transition-all duration-300 border border-gray-200 hover:border-gray-300 shadow-lg hover:shadow-xl"
              >
                Explore Platforms
              </Link>
            </div>

            {/* Phone Mockups */}
            <div className="relative flex justify-center items-end space-x-8">
              <div className="relative transform rotate-12 hover:rotate-6 transition-transform duration-500">
                <div className="w-48 h-96 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-2 shadow-2xl">
                  <div className="w-full h-full bg-white rounded-2xl overflow-hidden">
                    <div className="h-6 bg-gray-900 flex items-center justify-center">
                      <div className="w-12 h-1 bg-gray-300 rounded"></div>
                    </div>
                    <div className="p-4 space-y-4">
                      <div className="h-4 bg-indigo-200 rounded"></div>
                      <div className="h-20 bg-gradient-to-r from-indigo-400 to-cyan-400 rounded-lg"></div>
                      <div className="space-y-2">
                        <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                        <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative transform -rotate-12 hover:rotate-6 transition-transform duration-500">
                <div className="w-48 h-96 bg-gradient-to-br from-indigo-600 to-cyan-600 rounded-3xl p-2 shadow-2xl">
                  <div className="w-full h-full bg-white rounded-2xl overflow-hidden">
                    <div className="h-6 bg-indigo-600 flex items-center justify-center">
                      <div className="w-12 h-1 bg-white rounded"></div>
                    </div>
                    <div className="p-4 space-y-4">
                      <div className="h-4 bg-cyan-200 rounded"></div>
                      <div className="h-20 bg-gradient-to-r from-cyan-400 to-indigo-400 rounded-lg"></div>
                      <div className="space-y-2">
                        <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                        <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section id="platforms" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-6">
              Choose Your Platform
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-light">
              We develop for all major mobile platforms with expertise in both native and cross-platform solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {platforms.map((platform, index) => (
              <div key={index} className="group relative overflow-hidden bg-white rounded-3xl border border-gray-200 hover:border-gray-300 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className={`absolute inset-0 bg-gradient-to-br ${platform.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                <div className="relative p-8">
                  <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {platform.icon}
                  </div>
                  <h3 className="text-2xl font-medium text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors duration-300">
                    {platform.name}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {platform.description}
                  </p>
                  <div className="space-y-3">
                    {platform.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <div className={`w-2 h-2 bg-gradient-to-r ${platform.color} rounded-full`}></div>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Types Section */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-6">
              Types of Apps We Build
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
              From business solutions to entertainment platforms, we create apps for every industry and use case.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {appTypes.map((type, index) => (
              <div key={index} className={`group ${type.color} rounded-2xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}>
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {type.icon}
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  {type.category}
                </h3>
                <div className="space-y-2">
                  {type.examples.map((example, exampleIndex) => (
                    <div key={exampleIndex} className="text-sm text-gray-600 flex items-center">
                      <div className="w-1 h-1 bg-gray-400 rounded-full mr-2"></div>
                      {example}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-6">
              Essential App Features
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
              Every app we build includes these fundamental features to ensure success in the marketplace.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group text-center">
                <div className="bg-stone-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-stone-100 hover:border-stone-200">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-6">
              Our Development Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
              A structured approach that ensures your app is delivered on time, within budget, and exceeds expectations.
            </p>
          </div>

          <div className="space-y-8">
            {developmentProcess.map((phase, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-stone-200 hover:shadow-xl transition-all duration-300">
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-center">
                    <div className="lg:col-span-1">
                      <div className="text-center lg:text-left">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-600 to-cyan-600 text-white rounded-2xl text-xl font-bold mb-4">
                          {index + 1}
                        </div>
                        <h3 className="text-xl font-medium text-gray-900 mb-2">{phase.phase}</h3>
                        <div className="text-sm text-indigo-600 font-medium">{phase.duration}</div>
                      </div>
                    </div>
                    
                    <div className="lg:col-span-2">
                      <div className="grid grid-cols-2 gap-3">
                        {phase.activities.map((activity, activityIndex) => (
                          <div key={activityIndex} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-full"></div>
                            <span className="text-sm text-gray-700">{activity}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="lg:col-span-1">
                      <div className="text-center lg:text-right">
                        <div className="inline-flex items-center bg-stone-100 text-gray-700 px-4 py-2 rounded-xl text-sm font-medium">
                          📋 {phase.deliverable}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-600 to-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-light text-white mb-6">
            Ready to Launch Your Mobile App?
          </h2>
          <p className="text-xl text-indigo-100 mb-8 font-light max-w-2xl mx-auto">
            Transform your app idea into reality. Let&apos;s discuss your requirements and create a mobile experience that users will love.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-indigo-600 px-8 py-4 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Get Free App Consultation
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