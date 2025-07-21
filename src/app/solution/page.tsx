export default function SolutionPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Our Solution
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover how our MVP development services can help bring your ideas
            to life with speed and precision.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Fast Development
            </h3>
            <p className="text-gray-600">
              Quick turnaround times without compromising quality.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Modern Stack
            </h3>
            <p className="text-gray-600">
              Using the latest technologies and best practices.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Scalable Architecture
            </h3>
            <p className="text-gray-600">
              Built to grow with your business needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
