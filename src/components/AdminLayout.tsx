"use client";

import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";

type ActiveItem = "dashboard" | "menu" | "revenue";

interface AdminLayoutProps {
  children: React.ReactNode;
  activeItem: ActiveItem;
  /** Optional max-width class for main content (default: max-w-4xl sm:max-w-5xl md:max-w-[1100px]) */
  className?: string;
}

/**
 * Responsive admin panel layout: sidebar (drawer on mobile) + main content.
 * On mobile, menu button lives in a header bar so content is not pushed right.
 */
export function AdminLayout({ children, activeItem, className }: AdminLayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="flex h-screen min-h-0 w-full overflow-hidden bg-[var(--background)]" suppressHydrationWarning>
      {/* Sidebar wrapper: zero width on mobile so main is full-width; sidebar is fixed overlay */}
      <div className="w-0 shrink-0 overflow-visible md:w-auto md:shrink-0">
        <Sidebar
          variant="blue"
          activeItem={activeItem}
          mobileOpen={mobileMenuOpen}
          onMobileOpenChange={setMobileMenuOpen}
        />
      </div>

      {/* Main: mobile header (menu button + title) then scrollable content */}
      <main className="flex min-h-0 min-w-0 flex-1 basis-0 flex-col overflow-hidden">
        {/* Mobile-only header: hamburger in a proper bar so content isn't pushed right */}
        <header className="flex shrink-0 items-center gap-3 border-b border-black/5 bg-white px-3 py-2.5 md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-black/10 bg-gray-50 transition hover:bg-gray-100"
            aria-label="Open menu"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
          <span className="text-base font-semibold text-[#030401]" style={{ fontFamily: "var(--font-onest)" }}>
            Pepperdine EATS
          </span>
        </header>

        {/* Scrollable content – normal padding, no extra offset */}
        <div className="min-h-0 flex-1 overflow-y-auto overflow-x-hidden overscroll-behavior-y-contain">
          <div
            className={`mx-auto w-full max-w-full px-3 py-3 sm:px-6 sm:py-5 md:py-6 lg:py-6 ${className ?? "max-w-4xl sm:max-w-5xl md:max-w-[1100px] lg:px-6"}`}
          >
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}
