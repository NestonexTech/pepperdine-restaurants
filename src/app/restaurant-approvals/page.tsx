"use client";

import Image from "next/image";
import { AdminLayout } from "@/components/AdminLayout";
import { useEffect, useMemo, useRef, useState } from "react";

function UserIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 8C10.2091 8 12 6.20914 12 4C12 1.79086 10.2091 0 8 0C5.79086 0 4 1.79086 4 4C4 6.20914 5.79086 8 8 8Z" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M2 16C2 12.6863 4.68629 10 8 10C11.3137 10 14 12.6863 14 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function MailIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 4L7.5 8.5L13 4M3 2H13C14.1046 2 15 2.89543 15 4V12C15 13.1046 14.1046 14 13 14H3C1.89543 14 1 13.1046 1 12V4C1 2.89543 1.89543 2 3 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.5 11.5V13C14.5 13.5523 14.0523 14 13.5 14C6.59644 14 1 8.40356 1 1.5C1 0.947715 1.44772 0.5 2 0.5H3.5C4.05228 0.5 4.5 0.947715 4.5 1.5C4.5 2.5 4.7 3.45 5.07 4.32C5.2 4.65 5.13 5.03 4.86 5.28L3.9 6.24C5.34 8.66 7.34 10.66 9.76 12.1L10.72 11.14C10.97 10.87 11.35 10.8 11.68 10.93C12.55 11.3 13.5 11.5 14.5 11.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function CalendarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2H4C2.89543 2 2 2.89543 2 4V12C2 13.1046 2.89543 14 4 14H12C13.1046 14 14 13.1046 14 12V4C14 2.89543 13.1046 2 12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2 6H14M6 2V4M10 2V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 4L12 9L7 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function CloseIcon({ className }: { className?: string }) {
  // Approximates Figma asset "basil:cross-outline"
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 14.6667C11.6819 14.6667 14.6667 11.6819 14.6667 8C14.6667 4.3181 11.6819 1.33333 8 1.33333C4.3181 1.33333 1.33333 4.3181 1.33333 8C1.33333 11.6819 4.3181 14.6667 8 14.6667Z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 4.66667V8L10 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const pendingRestaurants = [
  { name: "Pizza Heaven", address: "456 Oak", owner: "Maria", email: "maria.r@pizzaheaven.com", phone: "+1 (555) 343-23434", submitted: "Submitted 2 days ago" },
  { name: "Pizza Heaven", address: "456 Oak", owner: "Maria", email: "maria.r@pizzaheaven.com", phone: "+1 (555) 343-23434", submitted: "Submitted 2 days ago" },
  { name: "Pizza Heaven", address: "456 Oak", owner: "Maria", email: "maria.r@pizzaheaven.com", phone: "+1 (555) 343-23434", submitted: "Submitted 2 days ago" },
  { name: "Pizza Heaven", address: "456 Oak", owner: "Maria", email: "maria.r@pizzaheaven.com", phone: "+1 (555) 343-23434", submitted: "Submitted 2 days ago" },
];

type PendingRestaurant = (typeof pendingRestaurants)[number];

function RestaurantDetailsModal({
  restaurant,
  onClose,
}: {
  restaurant: PendingRestaurant | null;
  onClose: () => void;
}) {
  const open = restaurant !== null;
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);
  const [uiScale, setUiScale] = useState(1);

  const businessDetails = useMemo(
    () => ({
      license: "BL-335-34543543",
      taxId: "TAX-235454645",
      bankAccount: "BANK****-9090",
    }),
    [],
  );

  useEffect(() => {
    if (!open) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Cancel the global UI zoom inside the modal so its pixel sizes
    // match the Figma measurements (1003x1059, button padding, etc.).
    const cssScale = Number.parseFloat(
      getComputedStyle(document.documentElement).getPropertyValue("--ui-scale").trim(),
    );
    setUiScale(Number.isFinite(cssScale) && cssScale > 0 ? cssScale : 1);

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);

    // focus close button for keyboard users
    window.setTimeout(() => closeBtnRef.current?.focus(), 0);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  if (!open || !restaurant) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/40"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="restaurant-details-title"
        style={{ zoom: 1 / uiScale }}
        className="w-full max-w-[1003px] h-[90vh] max-h-[1059px] overflow-y-auto bg-white rounded-xl sm:rounded-[14.7px] shadow-[0px_9.79px_29.37px_0px_rgba(15,23,42,0.25)] flex flex-col gap-4 sm:gap-[19.58px] p-4 sm:pt-[24.48px] sm:pb-[24.48px] sm:px-[19.58px]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          ref={closeBtnRef}
          type="button"
          className="self-end w-[43.37px] h-[43.37px] rounded-full flex items-center justify-center text-[#6B7280] hover:bg-black/5 transition-colors"
          onClick={onClose}
          aria-label="Close"
        >
          <CloseIcon className="w-6 h-6" />
        </button>

        <div className="flex flex-col">
          <h2
            id="restaurant-details-title"
            className="text-black font-semibold text-[24px] leading-[1.275]"
            style={{ fontFamily: "Onest, sans-serif" }}
          >
            Restaurant Details
          </h2>
        </div>

        <div className="flex flex-col gap-[25px] w-full">
          {/* Restaurant Information */}
          <div className="w-full rounded-[12px] bg-white shadow-[0px_8px_24px_0px_rgba(15,23,42,0.25)] pt-[20px] pb-[20px] px-[16px] flex flex-col gap-[16px]">
            <div className="flex flex-col">
              <div
                className="text-black font-semibold text-[20px] leading-[1.275]"
                style={{ fontFamily: "Onest, sans-serif" }}
              >
                Restaurant Information
              </div>
            </div>

            {/* Compact restaurant card (43px tall in Figma) */}
            <div className="h-[43px] w-full rounded-[15px] border border-[rgba(107,114,128,0.16)] bg-white px-4 flex flex-col justify-center">
              <div
                className="text-black font-medium text-[15px] leading-[1.275]"
                style={{ fontFamily: "Onest, sans-serif" }}
              >
                {restaurant.name}
              </div>
              <div
                className="text-[#6B7280] font-medium text-[12px] leading-[1.21] pt-[2px]"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {restaurant.address}
              </div>
            </div>

            {/* Name (dropdown style) */}
            <div className="h-[78px] w-full">
              <div className="text-[16px] leading-[22px] text-[#030401]" style={{ fontFamily: "Onest, sans-serif" }}>
                Name
              </div>
              <div className="mt-[6px] h-[50px] w-full rounded-[15px] border border-[rgba(107,114,128,0.16)] bg-white px-4 flex items-center justify-between">
                <div className="text-[17px] leading-[22px] text-black" style={{ fontFamily: "Onest, sans-serif" }}>
                  {restaurant.owner} Rodriguez
                </div>
                <ChevronDownIcon className="w-[18px] h-[18px] text-[#6B7280]" />
              </div>
            </div>

            {/* Email */}
            <div className="h-[78px] w-full">
              <div className="text-[16px] leading-[22px] text-[#030401]" style={{ fontFamily: "Onest, sans-serif" }}>
                Email
              </div>
              <div className="mt-[6px] h-[50px] w-full rounded-[15px] border border-[rgba(107,114,128,0.16)] bg-white px-4 flex items-center">
                <div className="text-[17px] leading-[22px] text-black" style={{ fontFamily: "Onest, sans-serif" }}>
                  {restaurant.email}
                </div>
              </div>
            </div>

            {/* Phone No */}
            <div className="h-[78px] w-full">
              <div className="text-[16px] leading-[22px] text-[#030401]" style={{ fontFamily: "Onest, sans-serif" }}>
                Phone No
              </div>
              <div className="mt-[6px] h-[50px] w-full rounded-[15px] border border-[rgba(107,114,128,0.16)] bg-white px-4 flex items-center">
                <div className="text-[17px] leading-[22px] text-black" style={{ fontFamily: "Onest, sans-serif" }}>
                  {restaurant.phone}
                </div>
              </div>
            </div>
          </div>

          {/* Business Details */}
          <div className="w-full rounded-[12px] bg-white shadow-[0px_8px_24px_0px_rgba(15,23,42,0.25)] pt-[20px] pb-[20px] px-[16px] flex flex-col gap-[16px]">
            <div className="flex flex-col">
              <div
                className="text-black font-semibold text-[20px] leading-[1.275]"
                style={{ fontFamily: "Onest, sans-serif" }}
              >
                Business Details
              </div>
            </div>

            {/* License (dropdown style) */}
            <div className="h-[78px] w-full">
              <div className="text-[16px] leading-[22px] text-[#030401]" style={{ fontFamily: "Onest, sans-serif" }}>
                License
              </div>
              <div className="mt-[6px] h-[50px] w-full rounded-[15px] border border-[rgba(107,114,128,0.16)] bg-white px-4 flex items-center justify-between">
                <div className="text-[17px] leading-[22px] text-black" style={{ fontFamily: "Onest, sans-serif" }}>
                  {businessDetails.license}
                </div>
                <ChevronDownIcon className="w-[18px] h-[18px] text-[#6B7280]" />
              </div>
            </div>

            {/* Tax ID */}
            <div className="h-[78px] w-full">
              <div className="text-[16px] leading-[22px] text-[#030401]" style={{ fontFamily: "Onest, sans-serif" }}>
                Tax ID
              </div>
              <div className="mt-[6px] h-[50px] w-full rounded-[15px] border border-[rgba(107,114,128,0.16)] bg-white px-4 flex items-center">
                <div className="text-[17px] leading-[22px] text-black" style={{ fontFamily: "Onest, sans-serif" }}>
                  {businessDetails.taxId}
                </div>
              </div>
            </div>

            {/* Bank Account */}
            <div className="h-[78px] w-full">
              <div className="text-[16px] leading-[22px] text-[#030401]" style={{ fontFamily: "Onest, sans-serif" }}>
                Bank Account
              </div>
              <div className="mt-[6px] h-[50px] w-full rounded-[15px] border border-[rgba(107,114,128,0.16)] bg-white px-4 flex items-center">
                <div className="text-[17px] leading-[22px] text-black" style={{ fontFamily: "Onest, sans-serif" }}>
                  {businessDetails.bankAccount}
                </div>
              </div>
            </div>
          </div>

          {/* Submitted */}
          <div className="flex items-center gap-2 w-full">
            <div className="w-4 h-4 flex items-center justify-center text-[#6B7280]">
              <ClockIcon className="w-4 h-4" />
            </div>
            <div className="text-[#6B7280] font-normal text-[14px] leading-[1.275]" style={{ fontFamily: "Onest, sans-serif" }}>
              {restaurant.submitted}
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-4 w-full">
          <button
            type="button"
            className="flex-1 rounded-[24px] bg-[#2563EB] text-white shadow-[0px_2px_8px_0px_rgba(249,115,22,0.4)] py-[19px] px-[12px] text-[16px] font-semibold leading-[1.275] hover:opacity-90 transition-opacity"
            style={{ fontFamily: "Onest, sans-serif" }}
          >
            Reject
          </button>
          <button
            type="button"
            className="flex-1 rounded-[24px] bg-[#F97316] text-white shadow-[0px_2px_8px_0px_rgba(249,115,22,0.4)] py-[19px] px-[12px] text-[16px] font-semibold leading-[1.275] hover:opacity-90 transition-opacity"
            style={{ fontFamily: "Onest, sans-serif" }}
          >
            Approve
          </button>
        </div>
      </div>
    </div>
  );
}

export default function RestaurantApprovalsPage() {
  const [detailsRestaurant, setDetailsRestaurant] = useState<PendingRestaurant | null>(null);

  return (
    <>
    <AdminLayout currentPage="menu">
      <div className="flex flex-col gap-4 max-w-[1000px] min-w-0 w-full mx-auto">
        <h1 className="text-[#030401] font-semibold text-base sm:text-lg leading-tight" style={{ fontFamily: "Onest, sans-serif" }}>
          Pending Approvals
        </h1>

        <div className="flex flex-col gap-4 min-w-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 min-w-0">
            {pendingRestaurants.map((restaurant, i) => (
              <div
                key={i}
                className="flex flex-col gap-4 p-3 sm:p-4 rounded-xl bg-white border border-black/[0.04] shadow-sm min-w-0"
              >
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 min-w-0">
                  <div className="w-full sm:w-[120px] h-[140px] sm:h-[160px] rounded-xl flex-shrink-0 overflow-hidden bg-[#E5E7EB]">
                      <Image
                        src="/restaurant-placeholder.png"
                        alt={restaurant.name}
                        width={120}
                        height={160}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col gap-3 min-w-0 flex-1">
                      <div className="flex justify-between items-start gap-2 min-w-0">
                        <div className="flex flex-col gap-0.5 min-w-0">
                          <span className="text-black font-medium text-base" style={{ fontFamily: "Onest, sans-serif" }}>{restaurant.name}</span>
                          <span className="text-[#6B7280] font-medium text-xs" style={{ fontFamily: "Inter, sans-serif" }}>{restaurant.address}</span>
                        </div>
                        <span
                          className="flex-shrink-0 px-2 py-1 rounded-full text-[#FF7A00] font-semibold text-xs whitespace-nowrap"
                          style={{ background: "rgba(255, 122, 0, 0.35)", fontFamily: "Onest, sans-serif" }}
                        >
                          Pending Review
                        </span>
                      </div>
                      <div className="flex flex-col gap-2 text-xs text-[#6B7280]" style={{ fontFamily: "Onest, sans-serif" }}>
                        <div className="flex items-center gap-1.5">
                          <UserIcon className="w-3.5 h-3.5 flex-shrink-0 text-[#6B7280]" />
                          <span>Owner: {restaurant.owner}</span>
                        </div>
                        <div className="flex items-center gap-1.5 min-w-0">
                          <MailIcon className="w-3.5 h-3.5 flex-shrink-0 text-[#6B7280]" />
                          <span className="truncate">{restaurant.email}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <PhoneIcon className="w-3.5 h-3.5 flex-shrink-0 text-[#6B7280]" />
                          <span>{restaurant.phone}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <CalendarIcon className="w-3.5 h-3.5 flex-shrink-0 text-[#6B7280]" />
                          <span>{restaurant.submitted}</span>
                        </div>
                      </div>
                      <button
                        type="button"
                        className="flex items-center justify-center gap-1.5 w-[120px] h-9 px-3 rounded-[12px] bg-white shadow-sm border border-black/[0.04] hover:bg-gray-50 transition-colors"
                        onClick={() => setDetailsRestaurant(restaurant)}
                      >
                        <span className="text-black font-semibold text-xs" style={{ fontFamily: "Onest, sans-serif" }}>View Details</span>
                        <ArrowRightIcon className="w-3.5 h-3.5 text-black" />
                      </button>
                    </div>
                  </div>
                  <div className="flex gap-2 sm:gap-3 min-w-0">
                    <button
                      className="flex-1 min-w-0 flex items-center justify-center py-2.5 px-2 sm:px-3 rounded-2xl bg-[#2563EB] text-white font-semibold text-xs sm:text-sm shadow-md hover:opacity-90 transition-opacity"
                      style={{ fontFamily: "Onest, sans-serif" }}
                    >
                      Reject
                    </button>
                    <button
                      className="flex-1 min-w-0 flex items-center justify-center py-2.5 px-2 sm:px-3 rounded-2xl bg-[#F97316] text-white font-semibold text-xs sm:text-sm shadow-md hover:opacity-90 transition-opacity"
                      style={{ fontFamily: "Onest, sans-serif" }}
                    >
                      Approve
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
    </AdminLayout>
    <RestaurantDetailsModal restaurant={detailsRestaurant} onClose={() => setDetailsRestaurant(null)} />
    </>
  );
}
