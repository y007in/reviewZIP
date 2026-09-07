"use client"

import { useEffect } from "react";

interface ToastProps {
  message: string;
  onDismiss: () => void;
}

export default function Toast({ message, onDismiss }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(onDismiss, 2500);
    return () => clearTimeout(timer);
  }, [onDismiss])
  return (
    <div role="status"
      aria-live="polite"
      className="fixed bottom-6 left-1/2 z-50 flex -translate-x-1/2 items-center gap-2.5 rounded-xl border border-line bg-card px-[18px] py-[13px] text-[13.5px] font-semibold text-ink shadow-[0_10px_26px_rgba(27,26,23,0.14)]">
      {message}
    </div>
  );
}
