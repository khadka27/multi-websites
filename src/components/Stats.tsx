"use client";

const Stats = () => {
  const steps = [
    {
      number: "1",
      title: "Tell us your needs",
      description:
        "Share with us your goals, budget, project details, and timeline preferences.",
      icon: "💬",
      highlight: false,
    },
    {
      number: "2",
      title: "Meet top candidates",
      description:
        "Connect directly with your best matches, fully vetted and highly responsive.",
      icon: "👥",
      highlight: false,
    },
    {
      number: "3",
      title: "Interview and hire",
      description:
        "Decide who to hire, and we'll take care of the rest. Enjoy peace of mind with secure project delivery and compliant global partnerships via trusted development partners.",
      icon: "⭐",
      highlight: true,
    },
  ];

  return (
    <section className="relative -mt-20 pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-white z-10">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left side - Title */}
            <div className="lg:pr-8">
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-800 leading-tight">
                How to use Arc
              </h2>
            </div>

            {/* Right side - Steps */}
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-8 bottom-8 w-px bg-gray-300"></div>

              <div className="space-y-10">
                {steps.map((step, index) => (
                  <div key={index} className="relative flex items-start">
                    {/* Step indicator */}
                    <div className="relative flex-shrink-0 mr-6">
                      <div
                        className={`
                        w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold
                        ${
                          step.highlight
                            ? "bg-orange-400 text-white"
                            : "bg-gray-800 text-white"
                        }
                        z-10
                      `}
                      >
                        {step.highlight ? "⭐" : step.number}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 pt-1">
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">
                        {step.number}. {step.title}
                      </h3>
                      <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
