export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Pricing Plans
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan for your MVP development needs.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Starter</h3>
            <p className="text-4xl font-bold text-purple-600 mb-6">$2,999</p>
            <ul className="space-y-3 text-gray-600">
              <li>• Basic MVP development</li>
              <li>• 2-week delivery</li>
              <li>• Basic support</li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-sm border-2 border-purple-600 relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <span className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm">
                Popular
              </span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Professional
            </h3>
            <p className="text-4xl font-bold text-purple-600 mb-6">$7,999</p>
            <ul className="space-y-3 text-gray-600">
              <li>• Full MVP development</li>
              <li>• 4-week delivery</li>
              <li>• Priority support</li>
              <li>• Code documentation</li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Enterprise
            </h3>
            <p className="text-4xl font-bold text-purple-600 mb-6">$15,999</p>
            <ul className="space-y-3 text-gray-600">
              <li>• Complex MVP development</li>
              <li>• 6-week delivery</li>
              <li>• 24/7 support</li>
              <li>• Full documentation</li>
              <li>• Deployment assistance</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
