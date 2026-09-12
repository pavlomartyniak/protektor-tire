"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";

type BookingContextValue = {
  isOpen: boolean;
  presetService: string;
  openBooking: (serviceTitle?: string) => void;
  closeBooking: () => void;
};

const BookingContext = createContext<BookingContextValue | null>(null);

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [presetService, setPresetService] = useState("");

  const openBooking = useCallback((serviceTitle?: string) => {
    setPresetService(serviceTitle ?? "");
    setIsOpen(true);
  }, []);

  const closeBooking = useCallback(() => setIsOpen(false), []);

  const value = useMemo(
    () => ({ isOpen, presetService, openBooking, closeBooking }),
    [isOpen, presetService, openBooking, closeBooking],
  );

  return (
    <BookingContext.Provider value={value}>{children}</BookingContext.Provider>
  );
}

export function useBooking() {
  const ctx = useContext(BookingContext);
  if (!ctx) {
    throw new Error("useBooking must be used within a BookingProvider");
  }
  return ctx;
}
