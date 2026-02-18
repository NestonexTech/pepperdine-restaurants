import { AdminLayout } from "@/components/AdminLayout";

export default function DashboardPage() {
  return (
    <AdminLayout activeItem="dashboard">
          {/* Hero card – gradient, shadow, compact */}
          <div
            className="relative overflow-hidden rounded-xl p-4 sm:rounded-2xl sm:p-5 md:p-6"
            style={{
              background: "var(--gradient-hero)",
              boxShadow: "var(--shadow-hero)",
            }}
          >
            {/* Decorative overlays */}
            <div className="absolute right-0 top-0 h-40 w-40 rounded-full opacity-[0.08]" style={{ background: "white" }} />
            <div className="absolute right-0 top-0 h-20 w-20 rounded-full opacity-[0.03]" style={{ background: "white" }} />

            <div className="relative flex flex-col gap-2">
              <div className="flex h-10 items-center justify-between sm:h-12">
                <h1
                  className="text-lg font-semibold leading-tight text-white sm:text-xl md:text-[22px]"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  Restaurant Dashboard
                </h1>
                <button
                  type="button"
                  className="flex h-9 w-9 items-center justify-center rounded-xl text-white sm:h-10 sm:w-10 sm:rounded-2xl"
                  style={{ background: "rgba(255,255,255,0.2)", boxShadow: "0px 2px 4px 0px rgba(255,255,255,0.05)" }}
                  aria-label="Notifications"
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10 2a6 6 0 0 1 6 6v3.5l1 1.5H3l1-1.5V8a6 6 0 0 1 6-6z" />
                    <path d="M8 16a2 2 0 0 0 4 0" />
                  </svg>
                </button>
              </div>
              <p className="text-sm font-normal leading-snug text-white sm:text-base md:text-lg" style={{ fontFamily: "var(--font-onest)" }}>
                Welcome back,
              </p>
              <div className="flex flex-wrap gap-2 pt-2 sm:gap-3 sm:pt-3">
                <span
                  className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium text-white sm:rounded-xl sm:px-4 sm:py-2 sm:text-sm"
                  style={{ background: "rgba(255,255,255,0.15)", fontFamily: "var(--font-onest)" }}
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" strokeWidth="1.17" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="8" cy="8" r="5.83" />
                  </svg>
                  Active Courier
                </span>
                <span
                  className="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium text-white sm:rounded-xl sm:px-3 sm:py-2 sm:text-sm"
                  style={{ background: "rgba(255,255,255,0.15)", fontFamily: "var(--font-onest)" }}
                >
                  4.2 Rating
                </span>
              </div>
            </div>
          </div>

          {/* Stats row – stack on mobile, 3 cols on sm+ */}
          <div className="mt-4 grid grid-cols-1 gap-2 sm:mt-5 sm:grid-cols-3 sm:gap-3 md:gap-4">
            <div
              className="flex flex-col items-center justify-center rounded-xl p-3 text-center text-white sm:rounded-2xl sm:p-4 md:p-5"
              style={{ background: "var(--primary-orange)", boxShadow: "var(--shadow-card)" }}
            >
              <span className="text-lg font-bold leading-tight sm:text-xl md:text-2xl" style={{ fontFamily: "var(--font-onest)" }}>
                4
              </span>
              <span className="mt-0.5 text-xs font-medium opacity-95 sm:text-sm md:text-base" style={{ fontFamily: "var(--font-onest)" }}>
                New Orders
              </span>
            </div>
            <div
              className="flex flex-col items-center justify-center rounded-xl p-3 text-center text-white sm:rounded-2xl sm:p-4 md:p-5"
              style={{ background: "var(--primary-blue-light)", boxShadow: "var(--shadow-card)" }}
            >
              <span className="text-lg font-bold leading-tight sm:text-xl md:text-2xl" style={{ fontFamily: "var(--font-onest)" }}>
                2
              </span>
              <span className="mt-0.5 text-xs font-medium opacity-95 sm:text-sm md:text-base" style={{ fontFamily: "var(--font-onest)" }}>
                Preparing
              </span>
            </div>
            <div
              className="flex flex-col items-center justify-center rounded-xl p-3 text-center text-white sm:rounded-2xl sm:p-4 md:p-5"
              style={{ background: "var(--gradient-ready)", boxShadow: "var(--shadow-card)" }}
            >
              <span className="text-lg font-bold leading-tight sm:text-xl md:text-2xl" style={{ fontFamily: "var(--font-onest)" }}>
                2
              </span>
              <span className="mt-0.5 text-xs font-medium opacity-95 sm:text-sm md:text-base" style={{ fontFamily: "var(--font-onest)" }}>
                Ready
              </span>
            </div>
          </div>

          {/* Tabs + Order cards – compact */}
          <div className="mt-4 flex flex-col gap-4 sm:mt-5 sm:gap-5">
            <div
              className="flex gap-1.5 overflow-x-auto rounded-lg px-2 py-1.5 sm:rounded-xl sm:px-2.5 sm:py-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
              style={{ background: "var(--primary-blue)", backdropFilter: "blur(44px)" }}
            >
              <button
                type="button"
                className="shrink-0 rounded-md px-2 py-1.5 text-xs font-semibold text-black sm:rounded-lg sm:py-2 sm:text-sm"
                style={{ background: "white", boxShadow: "var(--shadow-tab)", fontFamily: "var(--font-onest)" }}
              >
                New (3)
              </button>
              <button
                type="button"
                className="shrink-0 rounded-md px-2 py-1.5 text-xs font-semibold text-white/60 sm:rounded-lg sm:py-2 sm:text-sm"
                style={{ fontFamily: "var(--font-onest)" }}
              >
                Preparing
              </button>
              <button
                type="button"
                className="shrink-0 rounded-md px-2 py-1.5 text-xs font-semibold text-white/60 sm:rounded-lg sm:py-2 sm:text-sm"
                style={{ fontFamily: "var(--font-onest)", backdropFilter: "blur(17px)" }}
              >
                Completed
              </button>
            </div>

            {/* Order cards – responsive grid */}
            <div className="grid gap-4 sm:gap-5 md:grid-cols-2 md:gap-5 xl:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <OrderCard key={i} />
              ))}
            </div>
          </div>
    </AdminLayout>
  );
}

function OrderCard() {
  return (
    <div
      className="flex flex-col gap-3 rounded-xl border border-black/5 bg-white p-3 sm:gap-4 sm:rounded-2xl sm:p-4"
      style={{ boxShadow: "var(--shadow-order)" }}
    >
      <div className="flex items-start justify-between gap-2">
        <div className="flex flex-col gap-0.5">
          <span
            className="text-sm font-medium text-black sm:text-base"
            style={{ fontFamily: "var(--font-onest)" }}
          >
            Order
          </span>
          <div className="flex items-center gap-2">
            <span
              className="text-sm font-bold text-black sm:text-base"
              style={{ fontFamily: "Inter, system-ui, sans-serif" }}
            >
              #e36cd6
            </span>
            <span
              className="text-xs font-normal text-[var(--secondary)]"
              style={{ fontFamily: "Inter, system-ui, sans-serif" }}
            >
              6 min ago
            </span>
          </div>
        </div>
        <span
          className="rounded-full px-2 py-1 text-xs font-semibold sm:text-sm"
          style={{ background: "var(--badge-new)", color: "var(--primary-orange-alt)", fontFamily: "var(--font-onest)" }}
        >
          New Order
        </span>
      </div>

      <div className="flex gap-2 sm:gap-2.5">
        <div className="h-9 w-9 shrink-0 overflow-hidden rounded-full bg-gray-200 sm:h-10 sm:w-10">
          <div className="h-full w-full bg-gradient-to-br from-gray-300 to-gray-400" title="Profile" />
        </div>
        <div className="flex flex-1 flex-col gap-1.5 sm:gap-2">
          <span
            className="text-sm font-semibold text-[var(--grayscale-black)] sm:text-base"
            style={{ fontFamily: "var(--font-onest)" }}
          >
            Sarah
          </span>
          <div className="flex flex-col gap-1 sm:gap-1.5">
            <div className="flex items-center justify-between text-xs sm:text-sm">
              <span className="font-normal text-[var(--secondary)]" style={{ fontFamily: "var(--font-onest)" }}>2x Classic Burger</span>
              <span className="font-semibold text-black" style={{ fontFamily: "var(--font-onest)" }}>$8.90</span>
            </div>
            <div className="flex items-center justify-between text-xs sm:text-sm">
              <span className="font-normal text-[var(--secondary)]" style={{ fontFamily: "var(--font-onest)" }}>1x French Fries</span>
              <span className="font-semibold text-black" style={{ fontFamily: "var(--font-onest)" }}>$8.90</span>
            </div>
            <div
              className="my-0.5 h-px w-full"
              style={{ background: "linear-gradient(90deg, rgba(37,99,235,0.3) 0%, rgba(37,99,235,1) 50%, rgba(37,99,235,0.3) 100%)" }}
            />
            <div className="flex items-center justify-between text-sm sm:text-base">
              <span className="font-semibold text-black" style={{ fontFamily: "var(--font-onest)" }}>Total</span>
              <span className="font-semibold text-[var(--primary-orange-total)]" style={{ fontFamily: "var(--font-onest)" }}>$8.90</span>
            </div>
          </div>
        </div>
      </div>

      <button
        type="button"
        className="flex w-full items-center justify-center gap-1.5 rounded-xl py-2 text-sm font-bold text-white sm:rounded-2xl sm:py-2.5 sm:text-base"
        style={{ background: "var(--primary-orange)", boxShadow: "var(--shadow-button)", fontFamily: "var(--font-onest)" }}
      >
        Accept & Start Preparing
      </button>
    </div>
  );
}
