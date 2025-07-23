"use client";

const TechStack = () => {
  // Real tech stack with logos - using a mix from different categories
  const techLogos = [
    {
      name: "React.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      category: "Frontend",
      color: "from-blue-400 to-cyan-400",
    },
    {
      name: "Next.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      category: "Frontend",
      color: "from-gray-700 to-gray-900",
    },
    {
      name: "Vue.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
      category: "Frontend",
      color: "from-green-400 to-emerald-500",
    },
    {
      name: "Angular",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
      category: "Frontend",
      color: "from-red-500 to-rose-600",
    },
    {
      name: "Node.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      category: "Backend",
      color: "from-green-500 to-green-700",
    },
    {
      name: "Express.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      category: "Backend",
      color: "from-gray-600 to-gray-800",
    },
    {
      name: "Laravel",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg",
      category: "Backend",
      color: "from-red-400 to-orange-500",
    },
    {
      name: "Django",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
      category: "Backend",
      color: "from-green-600 to-teal-600",
    },
    {
      name: "MongoDB",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      category: "Database",
      color: "from-green-500 to-green-600",
    },
    {
      name: "PostgreSQL",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      category: "Database",
      color: "from-blue-500 to-indigo-600",
    },
    {
      name: "MySQL",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      category: "Database",
      color: "from-blue-400 to-blue-600",
    },
    {
      name: "Redis",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
      category: "Database",
      color: "from-red-500 to-red-600",
    },
    {
      name: "TypeScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      category: "Language",
      color: "from-blue-500 to-blue-700",
    },
    {
      name: "Python",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      category: "Language",
      color: "from-yellow-400 to-blue-500",
    },
    {
      name: "Docker",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      category: "DevOps",
      color: "from-blue-400 to-blue-600",
    },
    {
      name: "AWS",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
      category: "Cloud",
      color: "from-orange-400 to-yellow-500",
    },
    {
      name: "Firebase",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
      category: "Cloud",
      color: "from-yellow-400 to-orange-500",
    },
    {
      name: "Tailwind CSS",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
      category: "CSS",
      color: "from-cyan-400 to-blue-500",
    },
    {
      name: "Bootstrap",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
      category: "CSS",
      color: "from-purple-500 to-indigo-600",
    },
    {
      name: "GraphQL",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
      category: "API",
      color: "from-pink-500 to-purple-600",
    },
    {
      name: "Jest",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
      category: "Testing",
      color: "from-red-500 to-orange-500",
    },
    {
      name: "Webpack",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg",
      category: "Build",
      color: "from-blue-400 to-cyan-500",
    },
  ];

  // Split logos into rows
  const row1 = techLogos.slice(0, 8);
  const row2 = techLogos.slice(8, 16);
  const row3 = techLogos.slice(16, 22);

  // Duplicate arrays for seamless infinite scroll
  const duplicateRow1 = [...row1, ...row1, ...row1];
  const duplicateRow2 = [...row2, ...row2, ...row2];
  const duplicateRow3 = [...row3, ...row3, ...row3];

  return (
    <section className="relative py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900 mb-6 leading-tight">
              Built with Modern Technology
            </h2>
          </div>
          <p className="text-xl text-gray-600 font-light leading-relaxed max-w-2xl mx-auto">
            We use cutting-edge technologies to deliver robust, scalable
            solutions
          </p>
        </div>

        {/* Scrolling Logo Rows */}
        <div className="space-y-20 ">
          {/* Row 1 - Scroll Right */}
          <div className="relative mb-6">
            <div className="flex animate-scroll-right-smooth">
              {duplicateRow1.map((tech, index) => (
                <div key={index} className="flex-shrink-0 mx-4 lg:mx-6">
                  <div className="group relative">
                    <div className="relative bg-white rounded-3xl shadow-lg border border-gray-100 p-6 hover:shadow-2xl transition-all duration-500 ease-out transform hover:scale-110 hover:-translate-y-2">
                      <div className="flex flex-col items-center space-y-4">
                        <div className="relative w-14 h-14 flex items-center justify-center">
                          <div
                            className={`absolute inset-0 bg-gradient-to-br ${tech.color} rounded-2xl opacity-10 group-hover:opacity-20 transition-opacity duration-500`}
                          ></div>
                          <img
                            src={tech.logo}
                            alt={tech.name}
                            className="relative w-12 h-12 object-contain group-hover:scale-125 transition-all duration-500 ease-out filter group-hover:drop-shadow-lg"
                            onError={(e) => {
                              e.currentTarget.style.display = "none";
                              if (e.currentTarget.nextElementSibling) {
                                (
                                  e.currentTarget
                                    .nextElementSibling as HTMLElement
                                ).style.display = "block";
                              }
                            }}
                          />
                          <div className="hidden text-2xl font-bold text-gray-400">
                            {tech.name.charAt(0)}
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-gray-800 font-semibold text-sm whitespace-nowrap group-hover:text-gray-900 transition-colors duration-300">
                            {tech.name}
                          </div>
                          <div
                            className={`text-xs mt-1 font-medium bg-gradient-to-r ${tech.color} bg-clip-text text-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300`}
                          >
                            {tech.category}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 - Scroll Left */}
            <div className="relative mb-6">
            <div className="flex animate-scroll-left-smooth">
              {duplicateRow2.map((tech, index) => (
                <div key={index} className="flex-shrink-0 mx-4 lg:mx-6">
                  <div className="group relative">
                    <div className="relative bg-white rounded-3xl shadow-lg border border-gray-100 p-6 hover:shadow-2xl transition-all duration-500 ease-out transform hover:scale-110 hover:-translate-y-2">
                      <div className="flex flex-col items-center space-y-4">
                        <div className="relative w-14 h-14 flex items-center justify-center">
                          <div
                            className={`absolute inset-0 bg-gradient-to-br ${tech.color} rounded-2xl opacity-10 group-hover:opacity-20 transition-opacity duration-500`}
                          ></div>
                          <img
                            src={tech.logo}
                            alt={tech.name}
                            className="relative w-12 h-12 object-contain group-hover:scale-125 transition-all duration-500 ease-out filter group-hover:drop-shadow-lg"
                            onError={(e) => {
                              e.currentTarget.style.display = "none";
                              if (e.currentTarget.nextElementSibling) {
                                (
                                  e.currentTarget
                                    .nextElementSibling as HTMLElement
                                ).style.display = "block";
                              }
                            }}
                          />
                          <div className="hidden text-2xl font-bold text-gray-400">
                            {tech.name.charAt(0)}
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-gray-800 font-semibold text-sm whitespace-nowrap group-hover:text-gray-900 transition-colors duration-300">
                            {tech.name}
                          </div>
                          <div
                            className={`text-xs mt-1 font-medium bg-gradient-to-r ${tech.color} bg-clip-text text-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300`}
                          >
                            {tech.category}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Row 3 - Scroll Right */}
          <div className="relative">
            <div className="flex animate-scroll-right-slower">
              {duplicateRow3.map((tech, index) => (
                <div key={index} className="flex-shrink-0 mx-4 lg:mx-6">
                  <div className="group relative">
                    <div className="relative bg-white rounded-3xl shadow-lg border border-gray-100 p-6 hover:shadow-2xl transition-all duration-500 ease-out transform hover:scale-110 hover:-translate-y-2">
                      <div className="flex flex-col items-center space-y-4">
                        <div className="relative w-14 h-14 flex items-center justify-center">
                          <div
                            className={`absolute inset-0 bg-gradient-to-br ${tech.color} rounded-2xl opacity-10 group-hover:opacity-20 transition-opacity duration-500`}
                          ></div>
                          <img
                            src={tech.logo}
                            alt={tech.name}
                            className="relative w-12 h-12 object-contain group-hover:scale-125 transition-all duration-500 ease-out filter group-hover:drop-shadow-lg"
                            onError={(e) => {
                              e.currentTarget.style.display = "none";
                              if (e.currentTarget.nextElementSibling) {
                                (
                                  e.currentTarget
                                    .nextElementSibling as HTMLElement
                                ).style.display = "block";
                              }
                            }}
                          />
                          <div className="hidden text-2xl font-bold text-gray-400">
                            {tech.name.charAt(0)}
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-gray-800 font-semibold text-sm whitespace-nowrap group-hover:text-gray-900 transition-colors duration-300">
                            {tech.name}
                          </div>
                          <div
                            className={`text-xs mt-1 font-medium bg-gradient-to-r ${tech.color} bg-clip-text text-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300`}
                          >
                            {tech.category}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
