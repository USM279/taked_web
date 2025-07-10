import ReactGA from "react-ga4";

// Google Analytics Utility Functions
export const analytics = {
  // Track page view
  trackPageView: (page: string, title?: string) => {
    ReactGA.send({ 
      hitType: "pageview", 
      page,
      title: title || document.title 
    });

    // Also track with gtag if available
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'G-ZKHLZXZV2K', {
        page_title: title || document.title,
        page_location: window.location.href,
        page_path: page,
      });
    }
  },

  // Track custom events
  trackEvent: (eventName: string, parameters: Record<string, any> = {}) => {
    ReactGA.event(eventName, parameters);
    
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, parameters);
    }
  },

  // Track button clicks
  trackButtonClick: (buttonName: string, location?: string) => {
    analytics.trackEvent('button_click', {
      button_name: buttonName,
      location: location || 'unknown'
    });
  },

  // Track form submissions
  trackFormSubmission: (formName: string, success: boolean = true) => {
    analytics.trackEvent('form_submission', {
      form_name: formName,
      success: success
    });
  },

  // Track downloads
  trackDownload: (fileName: string, fileType?: string) => {
    analytics.trackEvent('file_download', {
      file_name: fileName,
      file_type: fileType || 'unknown'
    });
  },

  // Track external link clicks
  trackExternalLink: (url: string, linkText?: string) => {
    analytics.trackEvent('external_link_click', {
      link_url: url,
      link_text: linkText || 'unknown'
    });
  }
}; 