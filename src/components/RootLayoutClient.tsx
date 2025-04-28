"use client";

import { useState, createContext, useContext } from "react";
import Navbar from "./Navbar";
import CalendlyModal from "./CalendlyModal";

// Create context for Calendly modal
export const CalendlyContext = createContext({
  isCalendlyOpen: false,
  openCalendly: () => {},
  closeCalendly: () => {},
});

// Custom hook to use Calendly context
export const useCalendly = () => useContext(CalendlyContext);

export default function RootLayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  const openCalendly = () => setIsCalendlyOpen(true);
  const closeCalendly = () => setIsCalendlyOpen(false);

  return (
    <CalendlyContext.Provider value={{ isCalendlyOpen, openCalendly, closeCalendly }}>
      <Navbar />
      <main className="pt-16">
        {children}
      </main>
      <CalendlyModal 
        isOpen={isCalendlyOpen}
        onClose={closeCalendly}
      />
    </CalendlyContext.Provider>
  );
}
