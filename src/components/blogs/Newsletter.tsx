"use client";

import { useState } from "react";

interface NewsletterProps {
  compact?: boolean;
}

export default function Newsletter({ compact = false }: NewsletterProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      // Here you would typically make an API call to your newsletter service
      // For now, we'll just simulate a successful subscription
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setStatus("success");
      setMessage(
        "Thank you for subscribing! Check your email for confirmation."
      );
      setEmail("");
    } catch (error) {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  };

  if (compact) {
    return (
      <form onSubmit={handleSubmit} className="animate-fadeIn">
        <div className="flex gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-3 py-2 rounded-md bg-background border border-input ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            required
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-r from-[#0b8d8c] to-[#f7941e] text-white shadow-lg h-10 px-6 hover:from-blue-700 hover:to-indigo-700"
          >
            {status === "loading" ? "..." : "Subscribe"}
          </button>
        </div>
        {message && (
          <p
            className={`mt-2 text-sm ${
              status === "success" ? "text-green-600" : "text-destructive"
            }`}
          >
            {message}
          </p>
        )}
      </form>
    );
  }

  return (
    <div className="bg-gradient-to-r from-blue-50/80 to-indigo-50/80 backdrop-blur-sm rounded-2xl shadow-lg shadow-gray-100/20 border border-gray-100/50 p-12 mb-16">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="relative max-w-2xl mx-auto text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
          <svg
            className="w-6 h-6 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-2">
          Stay Updated with Naati Ninja
        </h3>
        <p className="text-muted-foreground mb-6">
          Subscribe to our newsletter for the latest updates, and exclusive
          content.
        </p>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="h-10 px-4 py-2 rounded-md bg-background border border-input ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring w-full"
              required
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full sm:w-auto px-4 sm:px-6 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-r from-[#0b8d8c] to-[#f7941e] text-white shadow-lg h-10 hover:bg-indigo-700"
            >
              {status === "loading" ? "Subscribing..." : "Subscribe"}
            </button>
          </div>
          {message && (
            <p
              className={`mt-4 text-sm ${
                status === "success" ? "text-green-600" : "text-destructive"
              }`}
            >
              {message}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
