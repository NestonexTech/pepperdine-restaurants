"use client";

import { AdminLayout } from "@/components/AdminLayout";
import { useState } from "react";

/* Revenue page – design from Figma: https://www.figma.com/design/RQXkyiSJmvDYPSuWDA3Mh2/PepperDIne?node-id=194-15972 */

const STAT_CARDS = [
  { value: "$231", label: "Total Revenue", sub: null },
  { value: "$231", label: "Today", sub: "Avg $6.34" },
  { value: "$23.61", label: "Avg Order", sub: "Per order" },
  { value: "10", label: "Total Orders", sub: null },
];

const CHART_MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
const CHART_VALUES = [56, 72, 48, 85, 64, 100];
const Y_AXIS_LABELS = ["400", "300", "200", "100", "0"];

const MONTHLY_BREAKDOWN = [
  { month: "Jan 2026", orders: "10 orders", total: "$233.2", average: "Average:  $ 22.33" },
  { month: "Feb 2026", orders: "8 orders", total: "$189.4", average: "Average:  $ 23.68" },
  { month: "Mar 2026", orders: "12 orders", total: "$278.1", average: "Average:  $ 23.18" },
];

export default function RevenuePage() {
  const [activeTab, setActiveTab] = useState<"monthly" | "daily" | "perorder">("monthly");

  return (
    <AdminLayout activeItem="revenue" className="max-w-4xl sm:max-w-5xl md:max-w-6xl lg:px-8">
          {/* Page title */}
          <h1
            className="mb-4 text-lg font-semibold leading-tight text-[#030401] sm:mb-5 sm:text-xl md:text-[22px]"
            style={{ fontFamily: "var(--font-onest)" }}
          >
            Revenue Analytics
          </h1>

          {/* Stats row – compact, responsive */}
          <div className="mb-4 grid grid-cols-2 gap-2 sm:mb-5 sm:gap-3 md:grid-cols-4 md:gap-4">
            {STAT_CARDS.map((card, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center gap-0.5 rounded-lg border border-black/[0.04] bg-white px-3 py-3 sm:gap-1 sm:rounded-xl sm:px-4 sm:py-4"
                style={{ boxShadow: "0px 2px 4px 0px rgba(0, 0, 0, 0.22)" }}
              >
                <span
                  className="text-base font-bold leading-tight text-[#2563EB] sm:text-lg md:text-[20px]"
                  style={{ fontFamily: "var(--font-onest)" }}
                >
                  {card.value}
                </span>
                {card.sub && (
                  <span
                    className="text-[11px] font-normal text-[#6B7280] sm:text-xs"
                    style={{ fontFamily: "var(--font-onest)" }}
                  >
                    {card.sub}
                  </span>
                )}
                <span
                  className="text-xs font-semibold leading-tight text-black sm:text-[13px] md:text-sm"
                  style={{ fontFamily: "var(--font-onest)" }}
                >
                  {card.label}
                </span>
              </div>
            ))}
          </div>

          {/* Tabs – scroll on very small screens */}
          <div
            className="mb-4 flex overflow-x-auto rounded-lg p-1.5 sm:mb-5 sm:rounded-xl sm:p-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            style={{ background: "#2563EB", backdropFilter: "blur(44px)" }}
          >
            <button
              type="button"
              onClick={() => setActiveTab("monthly")}
              className="flex min-w-0 flex-1 shrink-0 items-center justify-center rounded-md px-2 py-1.5 text-xs font-semibold text-black sm:rounded-lg sm:px-3 sm:py-2 sm:text-sm"
              style={{
                fontFamily: "var(--font-onest)",
                background: activeTab === "monthly" ? "white" : "transparent",
                boxShadow: activeTab === "monthly" ? "0px 2px 4px 0px rgba(0, 0, 0, 0.1)" : "none",
              }}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("daily")}
              className="flex min-w-0 flex-1 shrink-0 items-center justify-center rounded-md px-2 py-1.5 text-xs font-semibold sm:rounded-lg sm:px-3 sm:py-2 sm:text-sm"
              style={{
                fontFamily: "var(--font-onest)",
                color: activeTab === "daily" ? "black" : "rgba(255, 255, 255, 0.6)",
                background: activeTab === "daily" ? "white" : "transparent",
              }}
            >
              Daily
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("perorder")}
              className="flex min-w-0 flex-1 shrink-0 items-center justify-center rounded-md px-2 py-1.5 text-xs font-semibold sm:rounded-lg sm:px-3 sm:py-2 sm:text-sm"
              style={{
                fontFamily: "var(--font-onest)",
                color: activeTab === "perorder" ? "black" : "rgba(255, 255, 255, 0.6)",
                background: activeTab === "perorder" ? "white" : "transparent",
              }}
            >
              Per Order
            </button>
          </div>

          {/* Chart + Monthly Breakdown – compact */}
          <div className="flex flex-col gap-4 sm:gap-5">
            {/* Chart card */}
            <div
              className="flex flex-col gap-3 rounded-xl border border-black/[0.04] bg-white p-3 sm:gap-4 sm:rounded-2xl sm:p-4"
              style={{ boxShadow: "0px 2px 6px 0px rgba(0, 0, 0, 0.25)" }}
            >
              <div className="flex flex-wrap items-center justify-between gap-2 sm:gap-3">
                <h2
                  className="text-base font-medium text-black sm:text-lg"
                  style={{ fontFamily: "var(--font-onest)" }}
                >
                  Revenue
                </h2>
                <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                  <span
                    className="text-lg font-medium text-black sm:text-xl md:text-2xl"
                    style={{ fontFamily: "var(--font-onest)" }}
                  >
                    $16,000.00
                  </span>
                  <span
                    className="rounded-lg px-2 py-0.5 text-[10px] font-medium text-white sm:text-xs"
                    style={{ background: "#FF7A00", fontFamily: "var(--font-onest)" }}
                  >
                    +456
                  </span>
                  <span
                    className="text-base font-medium text-[#2563EB] sm:text-lg"
                    style={{ fontFamily: "var(--font-onest)" }}
                  >
                    2.03%
                  </span>
                </div>
              </div>

              <div
                className="flex gap-2 rounded-xl border border-black/[0.04] p-3 sm:gap-3 sm:rounded-2xl sm:p-4"
                style={{ background: "#F6F6F6", boxShadow: "0px 2px 6px 0px rgba(0, 0, 0, 0.25)" }}
              >
                <div
                  className="flex flex-col justify-between gap-0.5 pb-4 text-[10px] sm:text-xs"
                  style={{ fontFamily: "var(--font-onest)" }}
                >
                  {Y_AXIS_LABELS.map((label) => (
                    <span key={label} className="font-medium text-[#6B7280]">
                      {label}
                    </span>
                  ))}
                </div>
                <div className="flex min-h-0 min-w-0 flex-1 flex-col gap-2 overflow-x-auto">
                  <div className="flex min-w-0 flex-1 items-end justify-between gap-1 sm:min-h-[120px] md:min-h-[140px]">
                    {CHART_VALUES.map((val, i) => (
                      <div key={i} className="group relative flex flex-1 flex-col items-center max-w-[80px] sm:max-w-[100px]">
                        {i === 3 && (
                          <div
                            className="absolute bottom-full left-1/2 z-10 mb-0.5 -translate-x-1/2 rounded bg-[#2563EB] px-1.5 py-0.5 text-[10px] font-medium text-white sm:text-xs"
                            style={{ fontFamily: "var(--font-onest)" }}
                          >
                            $27,632
                          </div>
                        )}
                        <div
                          className="w-full rounded-lg transition-opacity group-hover:opacity-90 sm:rounded-[10px]"
                          style={{
                            height: `${Math.max(val, 12)}%`,
                            minHeight: 16,
                            background: "#FF7A00",
                          }}
                        />
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between gap-1 pt-1">
                    {CHART_MONTHS.map((m) => (
                      <span
                        key={m}
                        className="flex-1 text-center text-[10px] font-medium text-[#6B7280] sm:max-w-[100px] sm:text-xs"
                        style={{ fontFamily: "var(--font-onest)" }}
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Monthly Breakdown */}
            <div
              className="flex flex-col gap-3 rounded-xl border border-black/[0.04] bg-white p-3 sm:gap-4 sm:rounded-2xl sm:p-4"
              style={{ boxShadow: "0px 2px 6px 0px rgba(0, 0, 0, 0.25)" }}
            >
              <h2
                className="text-sm font-bold text-black sm:text-base"
                style={{ fontFamily: "var(--font-onest)" }}
              >
                Monthly Breakdown
              </h2>
              <div className="grid gap-2 sm:grid-cols-2 sm:gap-3 lg:grid-cols-3">
                {MONTHLY_BREAKDOWN.map((item, i) => (
                  <div
                    key={i}
                    className="flex flex-col gap-1 rounded-lg bg-[#F7F7F7] p-3 sm:gap-1.5 sm:p-3.5"
                    style={{ boxShadow: "0px 3px 6.8px 0px rgba(37, 99, 235, 0.08)" }}
                  >
                    <div className="flex flex-col gap-0">
                      <span
                        className="text-[13px] font-semibold text-black sm:text-sm"
                        style={{ fontFamily: "var(--font-onest)" }}
                      >
                        {item.month}
                      </span>
                      <span
                        className="text-[11px] font-normal text-[#6B7280] sm:text-xs"
                        style={{ fontFamily: "var(--font-onest)" }}
                      >
                        {item.orders}
                      </span>
                    </div>
                    <div className="flex flex-col gap-0">
                      <span
                        className="text-sm font-bold text-[#2563EB] sm:text-base"
                        style={{ fontFamily: "var(--font-onest)" }}
                      >
                        {item.total}
                      </span>
                      <span
                        className="text-[11px] font-normal text-[#6B7280] sm:text-xs"
                        style={{ fontFamily: "var(--font-onest)" }}
                      >
                        {item.average}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
    </AdminLayout>
  );
}
