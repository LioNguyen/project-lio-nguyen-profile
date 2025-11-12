// src/analytics.ts
export const gtagPageview = (url: string) => {
  if (typeof window.gtag === "function") {
    window.gtag("event", "page_view", {
      page_path: url,
      page_location: window.location.href,
      page_title: document.title,
    });
  }
};

export const gtagEvent = (action: string, params?: Record<string, any>) => {
  if (typeof window.gtag === "function") {
    window.gtag("event", action, params);
  }
};
