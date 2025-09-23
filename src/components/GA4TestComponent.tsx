/**
 * GA4 Testing Component
 * Use this component to test Google Analytics 4 events
 * This can be temporarily added to any page for testing
 */

"use client";

import { useGA, trackCommonEvents } from "@/lib/analytics";

export default function GA4TestComponent() {
  const { trackEvent, trackContact, trackServiceView } = useGA();

  const testBasicEvent = () => {
    trackEvent({
      action: "test_button_click",
      category: "testing",
      label: "GA4 Test Button",
      value: 1,
    });
    console.log("GA4 Test Event Sent: test_button_click");
  };

  const testContactEvent = () => {
    trackContact("test_contact");
    console.log("GA4 Contact Event Sent");
  };

  const testServiceView = () => {
    trackServiceView("Web Development");
    console.log("GA4 Service View Event Sent");
  };

  const testFormSubmit = () => {
    trackCommonEvents.formSubmit("test_form", "ga4_test_component");
    console.log("GA4 Form Submit Event Sent");
  };

  const testExternalLink = () => {
    trackCommonEvents.externalLinkClick(
      "https://google.com",
      "Test External Link"
    );
    console.log("GA4 External Link Event Sent");
  };

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md">
      <h3 className="text-lg font-bold mb-4 text-gray-800">
        GA4 Testing Panel
      </h3>
      <p className="text-sm text-gray-600 mb-4">
        Open browser dev tools and check console + network tab when clicking
        these buttons. You should see GA4 events being sent to Google Analytics.
      </p>

      <div className="grid grid-cols-2 gap-3">
        <button
          onClick={testBasicEvent}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm"
        >
          Test Basic Event
        </button>

        <button
          onClick={testContactEvent}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 text-sm"
        >
          Test Contact Event
        </button>

        <button
          onClick={testServiceView}
          className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 text-sm"
        >
          Test Service View
        </button>

        <button
          onClick={testFormSubmit}
          className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 text-sm"
        >
          Test Form Submit
        </button>

        <button
          onClick={testExternalLink}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 text-sm col-span-2"
        >
          Test External Link Click
        </button>
      </div>

      <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded text-sm">
        <strong>Testing Instructions:</strong>
        <ol className="list-decimal list-inside mt-2 text-gray-700">
          <li>Open browser Developer Tools (F12)</li>
          <li>Go to Network tab, filter by "google" or "analytics"</li>
          <li>Click the buttons above</li>
          <li>Check console for confirmation messages</li>
          <li>Check network requests to see GA4 data being sent</li>
        </ol>
      </div>
    </div>
  );
}
