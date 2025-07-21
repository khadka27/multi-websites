'use client';

import { useEffect, useState, useRef } from 'react';

interface StatItem {
  icon: React.ReactNode;
  number: number;
  suffix: string;
  label: string;
  color: string;
}

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats: StatItem[] = [
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      number: 10,
      suffix: '+',
      label: 'Years of Experience',
      color: 'text-purple-600'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
        </svg>
      ),
      number: 12,
      suffix: '+',
      label: 'Countries Served',
      color: 'text-gray-500'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17 18c-1.11 0-2 .89-2 2s.89 2 2 2 2-.89 2-2-.89-2-2-2zM1 2v2h2l3.6 7.59-1.36 2.45c-.15.28-.24.61-.24.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12L8.1 13h7.45c.75 0 1.41-.42 1.75-1.03L21.7 4H5.21l-.94-2H1zm6 16c-1.11 0-2 .89-2 2s.89 2 2 2 2-.89 2-2-.89-2-2-2z"/>
        </svg>
      ),
      number: 200,
      suffix: '+',
      label: 'Products Delivered',
      color: 'text-green-600'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
        </svg>
      ),
      number: 80,
      suffix: '+',
      label: 'Clients Worldwide',
      color: 'text-orange-500'
    }
  ];

  // Intersection Observer to detect when section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  // Animate numbers when section becomes visible
  useEffect(() => {
    if (!isVisible) return;

    const animateNumbers = () => {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepDuration = duration / steps;
      
      let currentStep = 0;
      
      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        
        setCounts(prev => 
          stats.map((stat, index) => 
            Math.floor(stat.number * progress)
          )
        );
        
        if (currentStep >= steps) {
          setCounts(stats.map(stat => stat.number));
          clearInterval(timer);
        }
      }, stepDuration);
      
      return () => clearInterval(timer);
    };

    const cleanup = animateNumbers();
    return cleanup;
  }, [isVisible]);

  return (
    <section 
      ref={sectionRef}
      className="relative -mt-20 pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-white z-10"
    >
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 sm:p-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className={`${stat.color} p-3 rounded-xl bg-gray-50`}>
                    {stat.icon}
                  </div>
                </div>
                <div className={`text-4xl sm:text-5xl font-bold ${stat.color} mb-2`}>
                  {counts[index]}{stat.suffix}
                </div>
                <p className="text-gray-600 font-medium text-sm sm:text-base">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats; 