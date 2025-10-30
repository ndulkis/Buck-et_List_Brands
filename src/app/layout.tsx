import type { Metadata } from "next";
import "../styles/global.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

/**
 * layout.tsx
 * ------------
 * Defines the root layout for all pages in the Buck-et List Brands site.
 * This file wraps every route in a consistent layout (Navbar + Body styling).
 */

export const metadata: Metadata = {
  title: "Buck-et List Brands | Premium Hunting Apparel",
  description:
    "Modern hunting gear built for the wild — crafted with Next.js, AWS, and style.",
  icons: {
    icon: "/icon.png", // stored in /public/icon.png
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* 
        Body includes Tailwind background/text classes for a consistent dark earthy theme.
        Added padding-top to ensure content clears the fixed navbar.
      */}
      <body className="bg-forest text-stone-100 font-sans antialiased">
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
