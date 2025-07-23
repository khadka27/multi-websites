import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "DevOps & Deployment Tutorials - wp development",
  description:
    "Master DevOps practices and deployment strategies with tutorials on Docker, CI/CD, cloud platforms, monitoring, and production best practices.",
  keywords:
    "DevOps tutorials, deployment guides, Docker, CI/CD, AWS, cloud deployment, monitoring, production deployment",
  openGraph: {
    title: "DevOps & Deployment Tutorials - wp development",
    description:
      "Learn DevOps practices and deployment strategies for modern web applications.",
    type: "website",
  },
};

export default function DevOpsDeploymentTutorialsPage() {
  const tutorials = [
    {
      title: "Docker Fundamentals",
      description: "Containerize your applications with Docker",
      level: "Beginner",
      duration: "60 min",
      topics: ["Containers", "Images", "Dockerfile", "Docker Compose"],
      icon: "🐳",
      category: "Containerization",
    },
    {
      title: "CI/CD with GitHub Actions",
      description: "Automate your deployment pipeline",
      level: "Intermediate",
      duration: "75 min",
      topics: ["Workflows", "Actions", "Secrets", "Deployment"],
      icon: "🔄",
      category: "Automation",
    },
    {
      title: "AWS Cloud Deployment",
      description: "Deploy applications to Amazon Web Services",
      level: "Advanced",
      duration: "90 min",
      topics: ["EC2", "S3", "CloudFront", "RDS"],
      icon: "☁️",
      category: "Cloud",
    },
    {
      title: "Kubernetes Basics",
      description: "Orchestrate containers with Kubernetes",
      level: "Advanced",
      duration: "100 min",
      topics: ["Pods", "Services", "Deployments", "Ingress"],
      icon: "⚓",
      category: "Orchestration",
    },
    {
      title: "Monitoring & Logging",
      description: "Keep track of your application health",
      level: "Intermediate",
      duration: "50 min",
      topics: ["Metrics", "Logs", "Alerts", "Dashboards"],
      icon: "📊",
      category: "Monitoring",
    },
    {
      title: "Security Best Practices",
      description: "Secure your deployment pipeline",
      level: "Advanced",
      duration: "65 min",
      topics: ["Secrets", "Scanning", "Compliance", "Access Control"],
      icon: "🔒",
      category: "Security",
    },
  ];

  const deploymentPlatforms = [
    {
      name: "Vercel",
      description: "Perfect for frontend applications and JAMstack",
      icon: "▲",
      features: [
        "Automatic deployments",
        "Edge functions",
        "Analytics",
        "Preview URLs",
      ],
      bestFor: "Next.js, React, Static sites",
      pricing: "Free tier available",
    },
    {
      name: "Netlify",
      description: "Comprehensive platform for modern web projects",
      icon: "🌐",
      features: ["Continuous deployment", "Forms", "Functions", "CDN"],
      bestFor: "Static sites, JAMstack, Serverless",
      pricing: "Free tier available",
    },
    {
      name: "AWS",
      description: "Enterprise-grade cloud infrastructure",
      icon: "☁️",
      features: ["Scalable", "Global", "Comprehensive", "Enterprise"],
      bestFor: "Large applications, Enterprise",
      pricing: "Pay as you use",
    },
    {
      name: "Digital Ocean",
      description: "Developer-friendly cloud platform",
      icon: "🌊",
      features: ["Simple pricing", "App Platform", "Databases", "Monitoring"],
      bestFor: "Full-stack applications, APIs",
      pricing: "Predictable pricing",
    },
  ];

  const codeExamples = [
    {
      title: "Dockerfile for Node.js App",
      description: "Multi-stage Docker build for production optimization",
      category: "Docker",
      code: `# Multi-stage build for Node.js application
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy source code
COPY . .

# Build application
RUN npm run build

# Production stage
FROM node:18-alpine AS production

# Install dumb-init for proper signal handling
RUN apk add --no-cache dumb-init

# Create non-root user
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

# Set working directory
WORKDIR /app

# Copy built application from builder stage
COPY --from=builder --chown=nextjs:nodejs /app/dist ./dist
COPY --from=builder --chown=nextjs:nodejs /app/node_modules ./node_modules
COPY --from=builder --chown=nextjs:nodejs /app/package.json ./package.json

# Switch to non-root user
USER nextjs

# Expose port
EXPOSE 3000

# Start application
ENTRYPOINT ["dumb-init", "--"]
CMD ["node", "dist/server.js"]`,
    },
    {
      title: "GitHub Actions CI/CD",
      description: "Complete deployment workflow with testing and deployment",
      category: "CI/CD",
      code: `# .github/workflows/deploy.yml
name: Deploy to Production

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    
    steps:
      - name: Checkout code
        uses: actions/checkout@v4
        
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Run tests
        run: npm test
        
      - name: Run linting
        run: npm run lint
        
      - name: Build application
        run: npm run build

  deploy:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    
    steps:
      - name: Checkout code
        uses: actions/checkout@v4
        
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v25
        with:
          vercel-token: \${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: \${{ secrets.ORG_ID }}
          vercel-project-id: \${{ secrets.PROJECT_ID }}
          vercel-args: '--prod'`,
    },
  ];

  const deploymentChecklist = [
    { item: "Environment variables configured", category: "Configuration" },
    { item: "SSL certificates installed", category: "Security" },
    { item: "Database migrations applied", category: "Database" },
    { item: "CDN configured for static assets", category: "Performance" },
    { item: "Monitoring and logging setup", category: "Observability" },
    { item: "Backup strategy implemented", category: "Data" },
    { item: "Error tracking configured", category: "Monitoring" },
    { item: "Health checks enabled", category: "Reliability" },
  ];

  const resources = [
    {
      title: "Docker Documentation",
      description: "Official Docker guides and references",
      url: "https://docs.docker.com/",
      type: "Documentation",
    },
    {
      title: "AWS Free Tier",
      description: "Start with AWS cloud services for free",
      url: "https://aws.amazon.com/free/",
      type: "Platform",
    },
    {
      title: "GitHub Actions Marketplace",
      description: "Pre-built actions for your workflows",
      url: "https://github.com/marketplace",
      type: "Tools",
    },
    {
      title: "DevOps Roadmap",
      description: "Complete learning path for DevOps",
      url: "https://roadmap.sh/devops",
      type: "Learning",
    },
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner":
        return "bg-green-100 text-green-800";
      case "Intermediate":
        return "bg-purple-100 text-purple-800";
      case "Advanced":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      Containerization: "bg-blue-100 text-blue-800",
      Automation: "bg-green-100 text-green-800",
      Cloud: "bg-purple-100 text-purple-800",
      Orchestration: "bg-red-100 text-red-800",
      Monitoring: "bg-yellow-100 text-yellow-800",
      Security: "bg-gray-100 text-gray-800",
    };
    return (
      colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800"
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center gap-4 text-6xl mb-6">
              <span>🐳</span>
              <span>🔄</span>
              <span>☁️</span>
              <span>⚓</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              DevOps & Deployment
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Master DevOps practices and deployment strategies for modern web
              applications
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#tutorials"
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                Start Learning
              </Link>
              <Link
                href="#platforms"
                className="bg-white hover:bg-gray-50 text-purple-600 px-8 py-3 rounded-lg font-medium border border-purple-600 transition-colors duration-200"
              >
                Compare Platforms
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* DevOps Tutorials */}
      <section className="py-16" id="tutorials">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              DevOps Learning Path
            </h2>
            <p className="text-lg text-gray-600">
              From basics to advanced DevOps practices and deployment strategies
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tutorials.map((tutorial, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 hover:border-purple-200"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{tutorial.icon}</span>
                  <div className="flex gap-2">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(
                        tutorial.category
                      )}`}
                    >
                      {tutorial.category}
                    </span>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${getLevelColor(
                        tutorial.level
                      )}`}
                    >
                      {tutorial.level}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {tutorial.title}
                </h3>
                <p className="text-gray-600 mb-4">{tutorial.description}</p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <span>⏱️ {tutorial.duration}</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {tutorial.topics.map((topic, topicIndex) => (
                    <span
                      key={topicIndex}
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
                <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg font-medium transition-colors duration-200">
                  Start Tutorial
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deployment Platforms */}
      <section className="py-16 bg-gray-50" id="platforms">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Deployment Platforms
            </h2>
            <p className="text-lg text-gray-600">
              Choose the right platform for your application deployment
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {deploymentPlatforms.map((platform, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{platform.icon}</span>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {platform.name}
                    </h3>
                    <p className="text-gray-600">{platform.description}</p>
                  </div>
                </div>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">
                    Features:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {platform.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium text-gray-900">Best for:</span>
                    <p className="text-gray-600">{platform.bestFor}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-900">Pricing:</span>
                    <p className="text-gray-600">{platform.pricing}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Examples */}
      <section className="py-16" id="examples">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Configuration Examples
            </h2>
            <p className="text-lg text-gray-600">
              Production-ready configuration files and scripts
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {codeExamples.map((example, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {example.title}
                    </h3>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                      {example.category}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{example.description}</p>
                </div>
                <div className="bg-gray-900 p-6">
                  <pre className="text-green-400 text-sm overflow-x-auto">
                    <code>{example.code}</code>
                  </pre>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deployment Checklist */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Production Deployment Checklist
            </h2>
            <p className="text-lg text-gray-600">
              Essential items to verify before going live
            </p>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {deploymentChecklist.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <input
                    type="checkbox"
                    className="h-5 w-5 text-purple-600 rounded focus:ring-purple-500"
                  />
                  <div className="flex-1">
                    <span className="text-gray-900 font-medium">
                      {item.item}
                    </span>
                    <span className="ml-2 text-xs text-purple-600 bg-purple-100 px-2 py-1 rounded">
                      {item.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              DevOps Resources
            </h2>
            <p className="text-lg text-gray-600">
              Essential tools and platforms for DevOps and deployment
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => (
              <a
                key={index}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-all duration-300 hover:border-purple-200"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-purple-600 font-medium">
                    {resource.type}
                  </span>
                  <span className="text-purple-600 group-hover:translate-x-1 transition-transform">
                    ↗
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                  {resource.title}
                </h3>
                <p className="text-gray-600 text-sm">{resource.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need Help with Deployment?
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Let our DevOps experts set up robust, scalable deployment pipelines
            for your applications
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              Get Expert Help
            </Link>
            <Link
              href="/services/automation"
              className="bg-transparent hover:bg-white/10 text-white px-8 py-3 rounded-lg font-medium border border-white transition-colors duration-200"
            >
              Automation Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
