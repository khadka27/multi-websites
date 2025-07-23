import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'OpenAI Integration Services | GPT Development | MVP Development',
  description: 'Expert OpenAI integration services including GPT-4, ChatGPT, DALL-E, and custom AI applications for business automation and intelligent solutions.',
  keywords: 'OpenAI, GPT-4, ChatGPT, DALL-E, AI integration, custom AI applications, business automation',
  openGraph: {
    title: 'OpenAI Integration Services | MVP Development',
    description: 'Expert OpenAI integration services for intelligent business solutions.',
    type: 'website',
  }
};

export default function OpenAIServicesPage() {
  const openAICapabilities = [
    {
      title: "GPT-4 Integration",
      icon: "🧠",
      description: "Advanced natural language processing and generation",
      features: ["Custom Chatbots", "Content Generation", "Code Assistant", "Text Analysis"],
      gradient: "from-orange-400 to-pink-500"
    },
    {
      title: "DALL-E Integration", 
      icon: "🎨",
      description: "AI-powered image generation and manipulation",
      features: ["Custom Images", "Design Automation", "Visual Content", "Brand Assets"],
      gradient: "from-pink-500 to-purple-600"
    },
    {
      title: "Whisper API",
      icon: "🎤",
      description: "Speech-to-text and audio processing",
      features: ["Voice Transcription", "Audio Analysis", "Multilingual Support", "Real-time Processing"],
      gradient: "from-purple-600 to-blue-600"
    },
    {
      title: "Custom AI Apps",
      icon: "⚡",
      description: "Tailored OpenAI-powered applications",
      features: ["Business Logic", "API Integration", "Workflow Automation", "Data Processing"],
      gradient: "from-blue-600 to-cyan-500"
    }
  ];

  const benefits = [
    {
      title: "Rapid Development",
      description: "Deploy AI solutions in weeks, not months",
      icon: "🚀"
    },
    {
      title: "Enterprise Ready",
      description: "Secure, scalable OpenAI integrations",
      icon: "🔒"
    },
    {
      title: "Cost Effective",
      description: "Optimize API usage and reduce costs",
      icon: "💰"
    },
    {
      title: "Expert Support",
      description: "Ongoing maintenance and optimization",
      icon: "🛠️"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-20 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400/10 via-pink-500/10 to-purple-600/10"></div>
          <div className="absolute top-0 left-0 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl">
                <span className="text-3xl">🤖</span>
              </div>
              <div className="text-left">
                <div className="bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent text-sm font-medium uppercase tracking-wide">OpenAI Integration</div>
                <div className="text-white/80 text-xs">Powered by GPT-4 & DALL-E</div>
              </div>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-light text-white mb-8 leading-tight">
              OpenAI Solutions
              <span className="block bg-gradient-to-r from-orange-400 via-pink-500 via-purple-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent font-medium">
                for Modern Business
              </span>
            </h1>
            
            <p className="text-xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
              Harness the power of OpenAI's cutting-edge models. We integrate GPT-4, DALL-E, and Whisper 
              into custom applications that transform how your business operates and engages with customers.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Link 
                href="/contact"
                className="group inline-flex items-center justify-center bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 hover:from-orange-500 hover:via-pink-600 hover:to-purple-700 text-white px-10 py-4 rounded-2xl font-medium transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              >
                Start OpenAI Project
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="#capabilities"
                className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-10 py-4 rounded-2xl font-medium transition-all duration-300 border border-white/20 hover:border-white/40"
              >
                Explore Capabilities
              </Link>
            </div>

            {/* OpenAI Visual */}
            <div className="relative flex justify-center">
              <div className="relative">
                <div className="w-24 h-24 bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 rounded-3xl flex items-center justify-center shadow-2xl animate-pulse">
                  <span className="text-3xl font-bold text-white">AI</span>
                </div>
                
                <div className="absolute inset-0 animate-spin-slow">
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-orange-400/80 rounded-lg flex items-center justify-center">
                    <span className="text-sm">💬</span>
                  </div>
                  <div className="absolute top-1/2 -right-8 transform -translate-y-1/2 w-8 h-8 bg-pink-500/80 rounded-lg flex items-center justify-center">
                    <span className="text-sm">🎨</span>
                  </div>
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-purple-600/80 rounded-lg flex items-center justify-center">
                    <span className="text-sm">🎤</span>
                  </div>
                  <div className="absolute top-1/2 -left-8 transform -translate-y-1/2 w-8 h-8 bg-blue-600/80 rounded-lg flex items-center justify-center">
                    <span className="text-sm">⚡</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OpenAI Capabilities */}
      <section id="capabilities" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-6">
              OpenAI Integration Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-light">
              Comprehensive OpenAI model integration covering GPT-4, DALL-E, Whisper, and custom AI applications 
              tailored to your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {openAICapabilities.map((capability, index) => (
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
                    {capability.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className={`w-2 h-2 bg-gradient-to-r ${capability.gradient} rounded-full`}></div>
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

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-6">
              Why Choose Our OpenAI Services?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
              Experience the future of AI with our expertly crafted OpenAI integrations designed for maximum impact and efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="group text-center">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                  <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 mb-4 group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-light text-white mb-6">
            Ready to Transform with OpenAI?
          </h2>
          <p className="text-xl text-blue-100 mb-8 font-light max-w-2xl mx-auto">
            Let's build intelligent solutions that leverage the full power of OpenAI's models. 
            Start your AI transformation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 hover:from-orange-500 hover:via-pink-600 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Get Started Now
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