import type { Metadata } from "next";
import { Poppins, Onest } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const onest = Onest({
  weight: ["400", "500", "600", "700", "900"],
  subsets: ["latin"],
  variable: "--font-onest",
});

export const metadata: Metadata = {
  title: "Pepperdine Admin – Restaurant Dashboard",
  description: "Restaurant dashboard for Pepperdine EATS",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${onest.variable} antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
