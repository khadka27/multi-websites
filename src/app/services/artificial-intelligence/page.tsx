import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Artificial Intelligence Development Services | AI Solutions | MVP Development',
  description: 'Expert AI development services including machine learning, natural language processing, computer vision, and custom AI solutions for business automation.',
  keywords: 'artificial intelligence, AI development, machine learning, NLP, computer vision, AI solutions, automation',
  openGraph: {
    title: 'Artificial Intelligence Development Services | MVP Development',
    description: 'Expert AI development services for business automation and intelligent solutions.',
    type: 'website',
  }
};

export default function AIServicesPage() {
  const aiCapabilities = [
    {
      title: "Machine Learning",
      icon: "🧠",
      description: "Predictive analytics and pattern recognition",
      applications: ["Recommendation Systems", "Fraud Detection", "Market Analysis", "Customer Segmentation"],
      gradient: "from-purple-600 to-blue-600"
    },
    {
      title: "Natural Language Processing",
      icon: "💬", 
      description: "Understanding and processing human language",
      applications: ["Chatbots", "Sentiment Analysis", "Text Summarization", "Language Translation"],
      gradient: "from-blue-600 to-cyan-600"
    },
    {
      title: "Computer Vision",
      icon: "👁️",
      description: "Visual recognition and image processing",
      applications: ["Object Detection", "Facial Recognition", "Quality Control", "Medical Imaging"],
      gradient: "from-cyan-600 to-teal-600"
    },
    {
      title: "Predictive Analytics",
      icon: "📊",
      description: "Data-driven insights and forecasting",
      applications: ["Sales Forecasting", "Risk Assessment", "Demand Planning", "Trend Analysis"],
      gradient: "from-teal-600 to-green-600"
    }
  ];

  const industries = [
    {
      name: "Healthcare",
      icon: "🏥",
      useCases: ["Medical Diagnosis", "Drug Discovery", "Treatment Optimization", "Health Monitoring"],
      impact: "40% faster diagnosis"
    },
    {
      name: "Finance", 
      icon: "💰",
      useCases: ["Algorithmic Trading", "Risk Management", "Credit Scoring", "Fraud Prevention"],
      impact: "60% reduction in fraud"
    },
    {
      name: "Retail",
      icon: "🛍️", 
      useCases: ["Personalized Recommendations", "Inventory Optimization", "Price Optimization", "Customer Analytics"],
      impact: "25% increase in sales"
    },
    {
      name: "Manufacturing",
      icon: "🏭",
      useCases: ["Predictive Maintenance", "Quality Control", "Supply Chain Optimization", "Process Automation"],
      impact: "30% cost reduction"
    }
  ];

  const aiTools = [
    { name: "TensorFlow", description: "Deep learning framework", logo: "🔥" },
    { name: "PyTorch", description: "Research-focused ML library", logo: "⚡" },
    { name: "OpenAI GPT", description: "Large language models", logo: "🤖" },
    { name: "Scikit-learn", description: "Classical ML algorithms", logo: "📈" },
    { name: "Hugging Face", description: "NLP model hub", logo: "🤗" },
    { name: "Computer Vision APIs", description: "Image processing services", logo: "👀" }
  ];

  const benefits = [
    {
      title: "Automation",
      description: "Reduce manual work by up to 80%",
      icon: "⚙️"
    },
    {
      title: "Accuracy",
      description: "AI models with 95%+ precision",
      icon: "🎯"
    },
    {
      title: "Insights",
      description: "Discover hidden patterns in data",
      icon: "💡"
    },
    {
      title: "Scalability", 
      description: "Handle millions of data points",
      icon: "📈"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">
                <span className="text-3xl">🤖</span>
              </div>
              <div className="text-left">
                <div className="text-blue-300 text-sm font-medium uppercase tracking-wide">Artificial Intelligence</div>
                <div className="text-white/80 text-xs">Next-Generation Solutions</div>
              </div>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-light text-white mb-8 leading-tight">
              Intelligent Solutions
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-medium">
                Powered by AI
              </span>
            </h1>
            
            <p className="text-xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
              Transform your business with cutting-edge artificial intelligence. We develop custom AI solutions that automate processes, 
              provide intelligent insights, and create competitive advantages through machine learning and data science.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Link 
                href="/contact"
                className="group inline-flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-10 py-4 rounded-2xl font-medium transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              >
                Start AI Project
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="#capabilities"
                className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-10 py-4 rounded-2xl font-medium transition-all duration-300 border border-white/20 hover:border-white/40"
              >
                Explore AI Capabilities
              </Link>
            </div>

            {/* AI Visual Animation */}
            <div className="relative flex justify-center">
              <div className="relative">
                {/* Central AI Node */}
                <div className="w-24 h-24 bg-gradient-to-r from-blue-400 to-purple-400 rounded-3xl flex items-center justify-center shadow-2xl animate-pulse">
                  <span className="text-3xl">🧠</span>
                </div>
                
                {/* Orbiting Elements */}
                <div className="absolute inset-0 animate-spin-slow">
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-blue-400/80 rounded-lg flex items-center justify-center">
                    <span className="text-sm">💬</span>
                  </div>
                  <div className="absolute top-1/2 -right-8 transform -translate-y-1/2 w-8 h-8 bg-purple-400/80 rounded-lg flex items-center justify-center">
                    <span className="text-sm">👁️</span>
                  </div>
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-cyan-400/80 rounded-lg flex items-center justify-center">
                    <span className="text-sm">📊</span>
                  </div>
                  <div className="absolute top-1/2 -left-8 transform -translate-y-1/2 w-8 h-8 bg-teal-400/80 rounded-lg flex items-center justify-center">
                    <span className="text-sm">⚙️</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Capabilities */}
      <section id="capabilities" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-6">
              Our AI Capabilities
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-light">
              Comprehensive artificial intelligence solutions covering the full spectrum of machine learning and data science applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aiCapabilities.map((capability, index) => (
              <div key={index} className="group relative overflow-hidden bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border border-gray-200 hover:border-gray-300 shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className={`absolute inset-0 bg-gradient-to-br ${capability.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                <div className="relative">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${capability.gradient} rounded-2xl flex items-center justify-center shadow-lg`}>
                      <span className="text-2xl">{capability.icon}</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-medium text-gray-900 group-hover:text-gray-700 transition-colors duration-300">
                        {capability.title}
                      </h3>
                      <p className="text-gray-600">{capability.description}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    {capability.applications.map((app, appIndex) => (
                      <div key={appIndex} className="flex items-center space-x-2">
                        <div className={`w-2 h-2 bg-gradient-to-r ${capability.gradient} rounded-full`}></div>
                        <span className="text-sm text-gray-700">{app}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Applications */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-white mb-6">
              AI Across Industries
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto font-light">
              Discover how our AI solutions are transforming businesses across different sectors with measurable results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="group bg-gray-800 rounded-2xl p-6 hover:bg-gray-700 transition-all duration-300 border border-gray-700 hover:border-gray-600">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {industry.icon}
                  </div>
                  <h3 className="text-xl font-medium text-white mb-2">{industry.name}</h3>
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-lg text-sm font-medium">
                    {industry.impact}
                  </div>
                </div>
                
                <div className="space-y-2">
                  {industry.useCases.map((useCase, useCaseIndex) => (
                    <div key={useCaseIndex} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                      <span className="text-sm text-gray-300">{useCase}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-6">
              Why Choose AI Solutions?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
              Unlock the power of artificial intelligence to drive efficiency, accuracy, and innovation in your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="group text-center">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-stone-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                  <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-6">
              AI Technology Stack
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
              We leverage cutting-edge AI frameworks and tools to build robust, scalable artificial intelligence solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiTools.map((tool, index) => (
              <div key={index} className="group bg-gradient-to-br from-stone-50 to-white rounded-2xl p-6 border border-stone-200 hover:border-blue-200 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                    {tool.logo}
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                      {tool.name}
                    </h3>
                    <p className="text-sm text-gray-600">{tool.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-light text-white mb-6">
            Ready to Harness the Power of AI?
          </h2>
          <p className="text-xl text-blue-100 mb-8 font-light max-w-2xl mx-auto">
            Transform your business with intelligent automation and data-driven insights. Let&apos;s explore how AI can solve your unique challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Start AI Consultation
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 border border-white/20 hover:border-white/40"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 