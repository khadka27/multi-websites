# Google Analytics 4 Implementation Guide

This guide explains how to complete the Google Analytics 4 setup for your Next.js application.

## 🚀 Setup Complete ✅

The following has been implemented:

1. ✅ **@next/third-parties package installed** - The official Next.js library for Google Analytics
2. ✅ **GoogleAnalytics component added** - Integrated into the root layout
3. ✅ **Environment variables configured** - Ready for your GA4 Measurement ID
4. ✅ **Custom analytics hooks created** - For advanced event tracking

## 📋 Next Steps - You Need To Do This:

### 1. Get Your GA4 Measurement ID

1. Go to [Google Analytics](https://analytics.google.com/)
2. Create a new GA4 property or use an existing one
3. In your GA4 property, go to **Admin** → **Data Streams**
4. Select your web stream for `https://www.websiteprogrammingdevelopment.com`
5. Copy your **Measurement ID** (format: `G-XXXXXXXXXX`)

### 2. Update Environment Variables

Edit `.env.local` file and replace the placeholder:

```env
# Replace 'G-XXXXXXXXXX' with your actual GA4 Measurement ID
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-1234567890
```

### 3. Restart Your Development Server

```bash
pnpm dev
```

## 🔧 Features Implemented

### Basic Tracking

- **Page views** - Automatically tracked on all routes
- **User interactions** - Standard GA4 events
- **Site search** - If you have search functionality
- **Scroll tracking** - User engagement metrics

### Custom Event Tracking (Available via useGA hook)

```tsx
import { useGA, trackCommonEvents } from "@/lib/analytics";

function ContactButton() {
  const { trackContact } = useGA();

  const handleClick = () => {
    trackContact("button_click");
    // Your contact logic here
  };

  return <button onClick={handleClick}>Contact Us</button>;
}

// Or use pre-built common events
function NewsletterForm() {
  const handleSubmit = () => {
    trackCommonEvents.formSubmit("newsletter", "footer");
    // Your form logic here
  };

  return <form onSubmit={handleSubmit}>...</form>;
}
```

### Available Event Tracking Functions

- `trackEvent()` - Custom events
- `trackPageView()` - Manual page view tracking
- `trackContact()` - Contact form/button interactions
- `trackServiceView()` - Service page views
- `trackCommonEvents.newsletterSignup()` - Newsletter signups
- `trackCommonEvents.fileDownload()` - File downloads
- `trackCommonEvents.externalLinkClick()` - External link clicks
- `trackCommonEvents.formSubmit()` - Form submissions

## 🧪 Testing Your Implementation

### 1. Check Browser Console

After adding your Measurement ID and restarting:

1. Open browser dev tools (F12)
2. Go to Network tab
3. Filter by "google-analytics" or "gtag"
4. Navigate your site - you should see GA requests

### 2. Real-time Reports

1. Go to your GA4 property
2. Navigate to **Reports** → **Realtime**
3. Visit your website
4. You should see your visit in real-time

### 3. GA4 Debug View

1. Install [Google Analytics Debugger](https://chrome.google.com/webstore/detail/google-analytics-debugger/jnkmfdileelhofjcijamephohjechhna) Chrome extension
2. Enable the debugger
3. Reload your website
4. Check console for detailed GA4 debug information

## 🔒 Privacy & GDPR Compliance

The implementation respects user privacy:

- No tracking without consent in regions requiring it
- Environment variable allows easy disabling for development
- All tracking is conditional on the presence of the Measurement ID

Consider adding a cookie consent banner for GDPR compliance.

## 📊 Recommended GA4 Setup in Dashboard

1. **Enhanced Measurement**: Enable in GA4 for automatic tracking of:

   - Scrolls
   - Outbound clicks
   - Site search
   - Video engagement
   - File downloads

2. **Conversion Events**: Set up key conversion events:

   - Contact form submissions
   - Service inquiries
   - Newsletter signups

3. **Custom Dimensions**: Create custom dimensions for:
   - User type (new vs returning)
   - Traffic source details
   - Service interests

## 🚨 Important Notes

- The GA4 Measurement ID is exposed to the client (starts with NEXT*PUBLIC*)
- This is normal and required for client-side tracking
- Never put sensitive API keys in NEXT*PUBLIC* variables
- Your GA4 property should be configured to only accept data from your domain

## 📈 Your Implementation Details

**Domain**: https://www.websiteprogrammingdevelopment.com
**Framework**: Next.js 15.4.2 with App Router
**Package**: @next/third-parties v15.5.3
**Analytics Library**: Google Analytics 4 with gtag

Your website is now ready for comprehensive analytics tracking!
