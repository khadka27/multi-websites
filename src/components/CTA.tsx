import Link from "next/link";

interface CTAProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  className?: string;
}

const CTA = ({
  title = "Ready to Launch Your MVP?",
  description = "Join hundreds of successful startups who trusted us with their MVP development.",
  buttonText = "Get Started Today",
  buttonLink = "/contact",
  className = "",
}: CTAProps) => {
  return (
    <section
      className={`py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white ${className}`}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-light mb-6">{title}</h2>
        <p className="text-xl text-gray-300 mb-8 font-light leading-relaxed max-w-2xl mx-auto">
          {description}
        </p>
        <Link
          href={buttonLink}
          className="inline-block bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-medium transition-all duration-200 shadow-sm hover:shadow-md"
        >
          {buttonText}
        </Link>
      </div>
    </section>
  );
};

export default CTA;
