/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Google Analytics 4 Event Tracking Hook
 * This hook provides utilities for tracking custom events with GA4
 */

import { sendGAEvent } from "@next/third-parties/google";

interface GAEventParams {
  action: string;
  category?: string;
  label?: string;
  value?: number;
  custom_parameters?: Record<string, any>;
}

export const useGA = () => {
  const trackEvent = (params: GAEventParams) => {
    if (
      typeof window !== "undefined" &&
      process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
    ) {
      sendGAEvent("event", params.action, {
        event_category: params.category,
        event_label: params.label,
        value: params.value,
        ...params.custom_parameters,
      });
    }
  };

  const trackPageView = (url: string, title?: string) => {
    if (
      typeof window !== "undefined" &&
      process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
    ) {
      sendGAEvent("event", "page_view", {
        page_location: url,
        page_title: title,
      });
    }
  };

  const trackPurchase = (
    transactionId: string,
    value: number,
    currency: string = "USD",
    items?: any[]
  ) => {
    if (
      typeof window !== "undefined" &&
      process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
    ) {
      sendGAEvent("event", "purchase", {
        transaction_id: transactionId,
        value: value,
        currency: currency,
        items: items,
      });
    }
  };

  const trackContact = (method: string) => {
    if (
      typeof window !== "undefined" &&
      process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
    ) {
      sendGAEvent("event", "contact", {
        contact_method: method,
      });
    }
  };

  const trackServiceView = (serviceName: string) => {
    if (
      typeof window !== "undefined" &&
      process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
    ) {
      sendGAEvent("event", "view_item", {
        item_category: "service",
        item_name: serviceName,
      });
    }
  };

  return {
    trackEvent,
    trackPageView,
    trackPurchase,
    trackContact,
    trackServiceView,
  };
};

// Utility function for tracking common website events
export const trackCommonEvents = {
  // Track newsletter signup
  newsletterSignup: () => {
    if (
      typeof window !== "undefined" &&
      process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
    ) {
      sendGAEvent("event", "sign_up", {
        method: "newsletter",
      });
    }
  },

  // Track file downloads
  fileDownload: (fileName: string, fileType: string) => {
    if (
      typeof window !== "undefined" &&
      process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
    ) {
      sendGAEvent("event", "file_download", {
        file_name: fileName,
        file_extension: fileType,
      });
    }
  },

  // Track external link clicks
  externalLinkClick: (url: string, linkText?: string) => {
    if (
      typeof window !== "undefined" &&
      process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
    ) {
      sendGAEvent("event", "click", {
        link_url: url,
        link_text: linkText,
        outbound: true,
      });
    }
  },

  // Track form submissions
  formSubmit: (formName: string, formLocation?: string) => {
    if (
      typeof window !== "undefined" &&
      process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
    ) {
      sendGAEvent("event", "form_submit", {
        form_name: formName,
        form_location: formLocation,
      });
    }
  },

  // Track video plays
  videoPlay: (videoTitle: string, videoDuration?: number) => {
    if (
      typeof window !== "undefined" &&
      process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
    ) {
      sendGAEvent("event", "video_play", {
        video_title: videoTitle,
        video_duration: videoDuration,
      });
    }
  },

  // Track search queries
  search: (searchTerm: string, searchLocation?: string) => {
    if (
      typeof window !== "undefined" &&
      process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
    ) {
      sendGAEvent("event", "search", {
        search_term: searchTerm,
        search_location: searchLocation,
      });
    }
  },
};
