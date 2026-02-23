
import React from 'react';

/**
 * Meta Pixel Event Tracking Helper
 * Uses Standard Meta Events for better algorithm optimization
 */
export const trackPixelEvent = (eventName: string, params?: object) => {
  if (typeof window !== 'undefined') {
    const fbq = (window as any).fbq;
    if (typeof fbq === 'function') {
      try {
        if (params) {
          fbq('track', eventName, params);
        } else {
          fbq('track', eventName);
        }
        // Verification log for browser console
        console.debug(`%c[Meta Pixel] Event: ${eventName}`, "color: #007bff; font-weight: bold; border: 1px solid #007bff; padding: 2px 5px; border-radius: 3px;", params || "");
      } catch (err) {
        console.warn(`[Meta Pixel] Failed to track ${eventName}:`, err);
      }
    } else {
      console.debug(`[Meta Pixel] fbq not loaded. Event ${eventName} skipped.`);
    }
  }
};

/**
 * SEO Helper Component
 */
export const SEO: React.FC<{ title: string; description: string }> = ({ title, description }) => {
  React.useEffect(() => {
    document.title = title;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = "description";
      meta.content = description;
      document.head.appendChild(meta);
    }
  }, [title, description]);
  return null;
};
