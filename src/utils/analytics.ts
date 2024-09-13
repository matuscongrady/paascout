export const trackEvent = (eventName: string) => {
  (window as any)?.plausible?.(eventName, { action: eventName });
};
