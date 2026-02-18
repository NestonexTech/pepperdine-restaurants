"use client";

import { AdminLayout } from "@/components/AdminLayout";

/* Exact copy from Figma: https://www.figma.com/design/RQXkyiSJmvDYPSuWDA3Mh2/PepperDIne?node-id=149-5069 */

const MENU_DESCRIPTION =
  "Grilled turkey bacon sandwich with freshly cut lettuce and mozerella cheese and cherry tom..";

const menuItems = [
  { title: "Sandwich", available: true, cal: "650", price: "9.67" },
  { title: "Sandwich (Not Available)", available: false, cal: "650", price: "9.67" },
  { title: "Sandwich", available: true, cal: "650", price: "9.67" },
];

export default function MenuPage() {
  return (
    <AdminLayout activeItem="menu" className="max-w-4xl sm:max-w-5xl md:max-w-[1100px] lg:px-8">
          <div className="mb-4 flex flex-row flex-wrap items-center justify-between gap-3 sm:mb-5">
            <h1
              className="text-lg font-semibold leading-tight text-[#030401] sm:text-xl md:text-[22px]"
              style={{ fontFamily: "var(--font-onest)" }}
            >
              Menu Management
            </h1>
            <button
              type="button"
              className="flex shrink-0 items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-medium text-white sm:gap-2 sm:px-4 sm:py-2 sm:text-base md:text-lg"
              style={{
                background: "#0B61D6",
                boxShadow: "0px 3px 6.8px 0px rgba(37, 99, 235, 0.33)",
                fontFamily: "var(--font-onest)",
              }}
              title="Add Item"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
              Add Item
            </button>
          </div>

          <div className="flex flex-col gap-4 sm:gap-5">
            <section className="flex flex-col gap-3 sm:gap-4">
              <h2
                className="text-base font-bold text-[#000000] sm:text-lg"
                style={{ fontFamily: "Inter, system-ui, sans-serif" }}
              >
                Sandwiches
              </h2>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 xl:grid-cols-3 xl:gap-5">
                {menuItems.map((item, i) => (
                  <MenuCard key={i} {...item} />
                ))}
              </div>
            </section>

            <section className="flex flex-col gap-3 sm:gap-4">
              <h2
                className="text-base font-bold text-[#000000] sm:text-lg"
                style={{ fontFamily: "Inter, system-ui, sans-serif" }}
              >
                Burgers
              </h2>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 xl:grid-cols-3 xl:gap-5">
                {menuItems.map((item, i) => (
                  <MenuCard key={i} {...item} />
                ))}
                <MenuCard title="Sandwich" available cal="650" price="9.67" />
              </div>
            </section>
          </div>
    </AdminLayout>
  );
}

/**
 * Menu card: Figma Frame 2147226087
 * - layout_EY41MU: height 186px, fill width, borderRadius 14px, effect_89NOYE shadow
 * - Left: layout_A2L7RP at (15,15) - title, description, fire+cal
 * - Rectangle 59: (236,0) 114x186, borderRadius 12px 12px 0 0
 * - price: (15, 145), orange #F56949
 * - Toggle: (190, 5) 28x28
 */
function MenuCard({
  title,
  available,
  cal,
  price,
}: {
  title: string;
  available: boolean;
  cal: string;
  price: string;
}) {
  return (
    <article
      className="relative flex h-[140px] w-full overflow-hidden rounded-xl bg-white sm:h-[152px] md:h-[166px]"
      style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.35)" }}
    >
      <div className="flex min-w-0 flex-1 flex-col gap-0.5 p-3 sm:p-3.5 md:p-4">
        <div className="flex flex-col gap-0.5">
          <h3
            className="text-sm font-semibold leading-tight text-[#030401] sm:text-base"
            style={{ fontFamily: "var(--font-onest)" }}
          >
            {title}
          </h3>
          <p
            className="line-clamp-2 max-w-[180px] text-xs font-normal leading-snug text-[#6B7280] sm:max-w-[200px] sm:text-[13px]"
            style={{ fontFamily: "var(--font-onest)" }}
          >
            {MENU_DESCRIPTION}
          </p>
        </div>
        <div className="mt-0.5 flex items-center gap-0.5">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#FF7A00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 sm:h-3 sm:w-3">
            <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
          </svg>
          <span
            className="text-[11px] font-normal text-[#6B7280] sm:text-xs"
            style={{ fontFamily: "var(--font-onest)" }}
          >
            {cal} cal
          </span>
        </div>
        <div className="mt-auto flex items-baseline gap-1">
          <span
            className="text-sm font-medium text-[#F56949] sm:text-base md:text-lg"
            style={{ fontFamily: "var(--font-onest)" }}
          >
            $
          </span>
          <span
            className="text-sm font-bold text-[#F56949] sm:text-base md:text-lg"
            style={{ fontFamily: "var(--font-onest)" }}
          >
            {price}
          </span>
        </div>
      </div>

      <div className="h-full w-[80px] shrink-0 rounded-tr-xl bg-gray-200 sm:w-[90px] md:w-[100px]">
        <div className="h-full w-full bg-gradient-to-br from-gray-300 to-gray-400" title="Menu item" />
      </div>

      <button
        type="button"
        className="absolute right-[5rem] top-1 flex h-6 w-6 items-center justify-center sm:right-[5.5rem] md:right-24 md:h-7 md:w-7"
        aria-label={available ? "Disable item" : "Enable item"}
      >
        <svg width="24" height="24" viewBox="0 0 28 28" fill="none" className="text-[#22C55E] md:h-7 md:w-7">
          <rect x="2" y="6" width="24" height="16" rx="8" fill="currentColor" fillOpacity="0.3" />
          <circle cx="20" cy="14" r="6" fill="white" />
        </svg>
      </button>
    </article>
  );
}
