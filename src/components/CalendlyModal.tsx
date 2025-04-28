"use client";

import { useEffect, useState, useCallback } from "react";
import Script from "next/script";

interface CalendlyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CalendlyModal({ isOpen, onClose }: CalendlyModalProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [scriptLoaded, setScriptLoaded] = useState(false);

  // Function to initialize Calendly widget
  const initializeCalendly = useCallback(() => {
    if (typeof window === "undefined" || !(window as any).Calendly) return;

    // Ensure we clean up any existing widgets first
    const cleanup = () => {
      const existingWidgets = document.querySelectorAll(
        '.calendly-inline-widget, iframe[src*="calendly"]'
      );
      existingWidgets.forEach((widget) => widget.remove());
    };

    cleanup();

    // Wait for DOM to be ready
    setTimeout(() => {
      const container = document.getElementById("calendly-container");
      if (!container) return;

      try {
        // Create a new div for the widget
        const widgetDiv = document.createElement("div");
        widgetDiv.style.minWidth = "320px";
        widgetDiv.style.height = "700px";
        container.appendChild(widgetDiv);

        // Initialize widget
        (window as any).Calendly.initInlineWidget({
          url: "https://calendly.com/dhruv-oberoi-tg6r/30min",
          parentElement: widgetDiv,
          prefill: {},
          utm: {},
        });

        // Check for successful initialization
        const checkInterval = setInterval(() => {
          const iframe = document.querySelector('iframe[src*="calendly"]');
          if (iframe) {
            setIsLoading(false);
            clearInterval(checkInterval);
          }
        }, 100);

        // Clear interval after 10 seconds
        setTimeout(() => clearInterval(checkInterval), 10000);
      } catch (error) {
        console.error("Error initializing Calendly:", error);
        setIsLoading(false);
      }
    }, 100);
  }, []);

  // Handle script loading
  const handleScriptLoad = useCallback(() => {
    setScriptLoaded(true);
    if (isOpen) {
      initializeCalendly();
    }
  }, [isOpen, initializeCalendly]);

  // Reset state when modal opens/closes
  useEffect(() => {
    if (isOpen) {
      setIsLoading(true);
      document.body.style.overflow = "hidden";

      if (scriptLoaded) {
        initializeCalendly();
      }
    } else {
      document.body.style.overflow = "unset";
      const calendlyElements = document.querySelectorAll(
        '.calendly-inline-widget, iframe[src*="calendly"]'
      );
      calendlyElements.forEach((element) => element.remove());
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen, scriptLoaded, initializeCalendly]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Container with Close Button */}
      <div className="relative w-[90vw] max-w-4xl mx-auto my-8">
        {/* Close button */}
        <div className="absolute -right-4 -top-4 z-50">
          <button
            onClick={onClose}
            className="group bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-all duration-200 hover:scale-105 hover:rotate-90"
          >
            <svg
              className="w-6 h-6 text-gray-900 transform transition-transform duration-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Content container with gradient background */}
        <div className="relative overflow-hidden rounded-2xl shadow-2xl">
          {/* Gradient background with patterns */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-white/5 to-indigo-600/10">
            {/* Decorative patterns */}
            <div
              className="absolute inset-0 bg-white/10"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)",
                backgroundSize: "20px 20px",
              }}
            ></div>
            <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-indigo-500/20 rounded-full mix-blend-multiply filter blur-3xl"></div>
          </div>

          {/* Loading Animation */}
          {isLoading && (
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-gradient-to-br from-blue-600/10 via-white/5 to-indigo-600/10 backdrop-blur-sm">
              <div className="flex items-center justify-center">
                <div className="relative w-16 h-16">
                  <div className="absolute inset-0 rounded-full border-4 border-blue-200/30"></div>
                  <div className="absolute inset-0 rounded-full border-4 border-blue-600 border-t-transparent animate-spin"></div>
                </div>
              </div>
              <h3 className="mt-4 text-lg font-medium text-white">
                Confirming availability...
              </h3>
              <p className="mt-2 text-sm text-blue-100/80">
                Please wait while we load your calendar
              </p>
            </div>
          )}

          {/* Calendly widget container */}
          <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
            <div id="calendly-container" className="min-w-[320px] h-[700px]" />
          </div>

          <Script
            src="https://assets.calendly.com/assets/external/widget.js"
            strategy="lazyOnload"
            onLoad={handleScriptLoad}
          />
        </div>
      </div>
    </div>
  );
}
