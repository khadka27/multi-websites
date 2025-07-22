import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Content Writing Services | SEO & Marketing Content | MVP Development',
  description: 'Professional content writing services for websites, blogs, marketing materials, and SEO-optimized content that engages and converts.',
  keywords: 'content writing, SEO content, blog writing, copywriting, marketing content, web content',
};

export default function ContentWritingPage() {
  const features = [
    { icon: "✍️", title: "SEO Content", description: "Search engine optimized articles and pages" },
    { icon: "📝", title: "Blog Writing", description: "Engaging blog posts that drive traffic" },
    { icon: "📄", title: "Web Copy", description: "Compelling website content and landing pages" },
    { icon: "📧", title: "Email Marketing", description: "Persuasive email campaigns and newsletters" },
    { icon: "📱", title: "Social Media", description: "Engaging social media content and captions" },
    { icon: "🎯", title: "Conversion Copy", description: "High-converting sales and marketing copy" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="pt-20 pb-16 bg-gradient-to-br from-orange-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <span className="text-4xl">✍️</span>
              <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-lg text-sm font-medium">Content Writing</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-light text-gray-900 mb-6 leading-tight">
              Compelling Content Creation
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed font-light">
              Create engaging, SEO-optimized content that connects with your audience and drives results. From blogs to web copy, we craft words that convert.
            </p>
            <Link href="/contact" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl">
              Start Content Project
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-light text-gray-900 mb-12 text-center">Content Writing Services</h2>
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
          <h2 className="text-4xl font-light text-white mb-6">Ready for Better Content?</h2>
          <p className="text-xl text-orange-100 mb-8">Create content that engages, converts, and ranks.</p>
          <Link href="/contact" className="bg-white hover:bg-orange-50 text-orange-600 px-8 py-4 rounded-xl font-medium transition-all duration-300 shadow-lg">
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
} 