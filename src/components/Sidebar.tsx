"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

type SidebarVariant = "navy" | "blue";
type ActiveItem = "dashboard" | "menu" | "revenue";

const sidebarBg: Record<SidebarVariant, string> = {
  navy: "var(--sidebar-bg)", // #1C2854
  blue: "#2563EB",
};

export function Sidebar({
  variant = "navy",
  activeItem = "dashboard",
  mobileOpen: controlledMobileOpen,
  onMobileOpenChange,
}: {
  variant?: SidebarVariant;
  activeItem?: ActiveItem;
  /** When set, menu open state is controlled by parent (e.g. hamburger in header). Omit for legacy floating button. */
  mobileOpen?: boolean;
  onMobileOpenChange?: (open: boolean) => void;
}) {
  const [collapsed, setCollapsed] = useState(false);
  const [internalMobileOpen, setInternalMobileOpen] = useState(false);

  const isControlled = onMobileOpenChange != null;
  const mobileOpen = isControlled ? (controlledMobileOpen ?? false) : internalMobileOpen;
  const setMobileOpen = isControlled ? onMobileOpenChange : setInternalMobileOpen;

  // Close mobile drawer when resizing to desktop
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const handler = () => setMobileOpen(false);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, [setMobileOpen]);

  const bg = sidebarBg[variant];

  return (
    <>
      {/* Mobile hamburger – only when NOT controlled (parent puts button in header) */}
      {!isControlled && (
        <button
          type="button"
          onClick={() => setMobileOpen(true)}
          className="fixed left-4 top-4 z-[60] flex h-10 w-10 min-h-[44px] min-w-[44px] items-center justify-center rounded-xl border border-black/10 bg-white shadow-md transition hover:bg-gray-50 md:hidden"
          style={{ left: "max(1rem, env(safe-area-inset-left))", top: "max(1rem, env(safe-area-inset-top))" }}
          aria-label="Open menu"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      )}

      {/* Backdrop when mobile drawer is open */}
      {mobileOpen && (
        <div
          role="button"
          tabIndex={-1}
          onClick={() => setMobileOpen(false)}
          onKeyDown={(e) => e.key === "Escape" && setMobileOpen(false)}
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          aria-hidden="true"
        />
      )}

      <aside
        className={`relative flex h-full min-h-screen shrink-0 flex-col overflow-hidden border-r border-black/5 transition-[width,transform] duration-200 ease-out ${collapsed ? "w-[64px]" : "w-[220px] sm:w-[240px]"} fixed inset-y-0 left-0 z-50 -translate-x-full md:relative md:translate-x-0 md:static ${mobileOpen ? "translate-x-0" : ""} max-w-[85vw] md:max-w-none`}
        style={{ background: bg }}
      >
      {/* Collapse toggle */}
      <button
        type="button"
        onClick={() => setCollapsed((c) => !c)}
        className="absolute -right-2.5 top-5 z-10 flex h-5 w-5 items-center justify-center rounded-full border border-black/10 bg-white shadow-md transition hover:bg-gray-50 sm:top-6 sm:h-6 sm:w-6"
        aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
      >
        <svg
          width="10"
          height="10"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={collapsed ? "rotate-180" : ""}
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      <div className="flex flex-col items-center gap-2 overflow-hidden px-1.5 pt-6 pb-4 sm:gap-3 sm:px-2 sm:pt-8 sm:pb-5">
        {/* Mobile close button */}
        <button
          type="button"
          onClick={() => setMobileOpen(false)}
          className="absolute right-3 top-4 flex h-8 w-8 items-center justify-center rounded-lg text-white/90 hover:bg-white/10 md:hidden"
          aria-label="Close menu"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        <div
          className={`shrink-0 transition-all duration-200 ${collapsed ? "h-9 w-9 sm:h-10 sm:w-10" : "h-14 w-14 sm:h-16 sm:w-16"}`}
        >
          <Image
            src="/logo-eats.svg"
            alt="EATS"
            width={64}
            height={64}
            priority
            className="h-full w-full object-contain object-center"
          />
        </div>
      </div>

      <nav className={`flex flex-1 flex-col gap-0 overflow-y-auto py-2 sm:py-3 ${collapsed ? "items-center px-0" : "px-1.5 sm:px-2"}`}>
        <Link
          href="/"
          onClick={() => setMobileOpen(false)}
          className={`flex items-center rounded-lg py-2 text-[13px] sm:py-2.5 sm:text-[14px] ${collapsed ? "justify-center px-2" : "gap-2 px-2 sm:gap-2.5 sm:px-2.5"}`}
          style={{
            fontFamily: "var(--font-onest)",
            ...(activeItem === "dashboard" ? { background: "rgba(255,255,255,0.1)", fontWeight: 500, color: "white" } : { fontWeight: 400, color: "rgba(255,255,255,0.9)" }),
          }}
          title="Discover"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 sm:h-6 sm:w-6">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
          {!collapsed && <span>Discover</span>}
        </Link>
        <Link
          href="/menu"
          onClick={() => setMobileOpen(false)}
          className={`flex items-center rounded-lg py-2 text-[13px] sm:py-2.5 sm:text-[14px] ${collapsed ? "justify-center px-2" : "gap-2 px-2 sm:gap-2.5 sm:px-2.5"}`}
          style={{
            fontFamily: "var(--font-onest)",
            ...(activeItem === "menu" ? { background: "white", fontWeight: 500, color: "#2563EB" } : { fontWeight: 400, color: "rgba(255,255,255,0.9)" }),
          }}
          title="Menu"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 sm:h-6 sm:w-6">
            <rect x="3" y="3" width="7" height="7" />
            <rect x="14" y="3" width="7" height="7" />
            <rect x="14" y="14" width="7" height="7" />
            <rect x="3" y="14" width="7" height="7" />
          </svg>
          {!collapsed && <span>Menu</span>}
        </Link>
        <Link
          href="/revenue"
          onClick={() => setMobileOpen(false)}
          className={`flex items-center rounded-lg py-2 text-[13px] sm:py-2.5 sm:text-[14px] ${collapsed ? "justify-center px-2" : "gap-2 px-2 sm:gap-2.5 sm:px-2.5"}`}
          style={{
            fontFamily: "var(--font-onest)",
            ...(activeItem === "revenue" ? { background: "white", fontWeight: 500, color: "#2563EB" } : { fontWeight: 400, color: "rgba(255,255,255,0.9)" }),
          }}
          title="Revenue"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 sm:h-6 sm:w-6">
            <line x1="12" y1="1" x2="12" y2="23" />
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
          </svg>
          {!collapsed && <span>Revenue</span>}
        </Link>
      </nav>
      <div className="shrink-0 border-t border-white/10 p-1.5 sm:p-2">
        <a
          href="#"
          className={`flex items-center rounded-lg py-2 text-[13px] font-normal text-white/90 sm:py-2.5 sm:text-[14px] ${collapsed ? "justify-center px-2" : "gap-2 px-2 sm:gap-2.5 sm:px-2.5"}`}
          style={{ fontFamily: "var(--font-onest)" }}
          title="Logout"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF3F3F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 sm:h-6 sm:w-6">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
            <polyline points="16 17 21 12 16 7" />
            <line x1="21" y1="12" x2="9" y2="12" />
          </svg>
          {!collapsed && <span>Logout</span>}
        </a>
      </div>
    </aside>
    </>
  );
}
