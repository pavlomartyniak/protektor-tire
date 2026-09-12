"use client";

import { useEffect, useState } from "react";
import { SITE } from "@/lib/site-config";
import { cn } from "@/lib/utils";

function getStatus() {
  const now = new Date();
  const schedule = SITE.scheduleByWeekday[now.getDay()];
  const hour = now.getHours() + now.getMinutes() / 60;
  const isOpen = hour >= schedule.open && hour < schedule.close;
  const closesSoon = isOpen && schedule.close - hour <= 1;
  return { isOpen, closesSoon, open: schedule.open, close: schedule.close };
}

export function OpenStatus({ className }: { className?: string }) {
  const [status, setStatus] = useState<ReturnType<typeof getStatus> | null>(
    null,
  );

  useEffect(() => {
    const id = setInterval(() => setStatus(getStatus()), 60_000);
    // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time client-only read of the system clock to avoid SSR/CSR mismatch
    setStatus(getStatus());
    return () => clearInterval(id);
  }, []);

  if (!status) return null;

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <span className="relative flex h-2 w-2">
        <span
          className={cn(
            "absolute inline-flex h-full w-full animate-ping rounded-full opacity-75",
            status.isOpen ? "bg-green-500" : "bg-accent-red",
          )}
        />
        <span
          className={cn(
            "relative inline-flex h-2 w-2 rounded-full",
            status.isOpen ? "bg-green-500" : "bg-accent-red",
          )}
        />
      </span>
      <span className="text-sm">
        {status.isOpen ? (
          <>
            <span className="text-green-500 font-medium">Відкрито</span>
            {status.closesSoon && (
              <span className="text-white/40"> · зачиняємось скоро</span>
            )}
          </>
        ) : (
          <span className="text-white/50 font-medium">Зачинено</span>
        )}
      </span>
    </div>
  );
}
