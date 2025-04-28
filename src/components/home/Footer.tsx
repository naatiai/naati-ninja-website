"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import PolicyPopup from "../ui/PolicyPopup";
import { policyContent } from "@/data/policyContent";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [activePolicy, setActivePolicy] = useState<string | null>(null);

  const legalLinks = [
    { name: "Privacy", key: "privacy" },
    { name: "Terms", key: "terms" },
    { name: "Cookie Policy", key: "cookies" },
    // { name: "Security Policy", key: "security" },
    { name: "Disclaimer", key: "disclaimer" },
  ];

  const socialLinks = [
    {
      name: "YouTube",
      href: "https://www.youtube.com/@NaatiNinja",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a2.999 2.999 0 00-2.11-2.11C19.394 3.5 12 3.5 12 3.5s-7.394 0-9.388.576a2.999 2.999 0 00-2.11 2.11C0 8.18 0 12 0 12s0 3.82.502 5.814a2.999 2.999 0 002.11 2.11C4.606 20.5 12 20.5 12 20.5s7.394 0 9.388-.576a2.999 2.999 0 002.11-2.11C24 15.82 24 12 24 12s0-3.82-.502-5.814zm-13.998 9.14v-7.96l6.5 3.98-6.5 3.98z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/naati.ninja",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm5.25-.75a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
        </svg>
      ),
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/people/Naati-Ninja/61569638377174/",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12v-9.294H9.294V11.31H12V8.745c0-2.685 1.643-4.151 4.039-4.151 1.149 0 2.134.086 2.421.124v2.806h-1.661c-1.302 0-1.553.619-1.553 1.526v2.002h3.106l-.405 3.395H15.246V24h7.429C23.407 24 24 23.407 24 22.675V1.325C24 .593 23.407 0 22.675 0z" />
        </svg>
      ),
    },
    {
      name: "Email",
      href: "mailto:support@naatininja.com",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 12.713L0 4.5V3c0-.55.45-1 1-1h22c.55 0 1 .45 1 1v1.5l-12 8.213zm12-5.52v10.5c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V7.193l11 7.533c.57.392 1.33.392 1.9 0l11-7.533z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 via-gray-900 to-black text-gray-300 py-8 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-none bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 to-black/90 backdrop-blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative max-w-7xl mx-auto px-6 lg:px-8"
      >
        <div className="flex flex-wrap items-center justify-between gap-6 py-2">
          {/* Logo and Copyright */}
          <motion.div
            className="flex items-center space-x-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-transparent to-gray-700 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-200"></div>
              <Link
                href="https://naatininja.com"
                className="flex items-center space-x-2"
              >
                <Image
                  src="/logo.png"
                  alt="Naati Ninja Logo"
                  width={137}
                  height={31}
                  className="w-50 h-50"
                />
                <h1 className="text-2xl font-semibold text-gray-100 tracking-tight lowercase"></h1>
              </Link>
            </div>
          </motion.div>

          {/* Legal Links */}
          <motion.div
            className="flex items-center space-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {legalLinks.map((link, index) => (
              <motion.button
                key={link.key}
                onClick={() => setActivePolicy(link.key)}
                className="relative text-sm text-gray-400 hover:text-white transition-colors duration-200 group"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <span className="relative z-10">{link.name}</span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-lg opacity-0 group-hover:opacity-100 blur transition-opacity duration-200" />
              </motion.button>
            ))}
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex items-center space-x-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {socialLinks.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="relative group"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <span className="sr-only">{item.name}</span>
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-200" />
                <div className="relative text-gray-400 hover:text-white transition-colors duration-200">
                  {item.icon}
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Policy Popups */}
      {activePolicy && (
        <PolicyPopup
          isOpen={true}
          closeModal={() => setActivePolicy(null)}
          title={
            legalLinks.find((link) => link.key === activePolicy)?.name || ""
          }
          content={policyContent[activePolicy as keyof typeof policyContent]}
        />
      )}
    </footer>
  );
}
