'use client';
/**
 * Navbar.tsx
 * ------------
 * A responsive navigation bar for Buck-et List Brands.
 * 
 * Features:
 * - Sticky header that stays at the top when scrolling.
 * - Brand logo (linked to Home).
 * - Navigation links for Shop, About, Contact.
 * - Mobile menu toggle using React state.
 * - Tailwind classes for hunting-inspired earthy tones.
 * - Framer Motion for subtle animations.
 */

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { icons, Menu, X, ShoppingBag} from 'lucide-react'; // Lucide icons for the menu toggle

export default function Navbar() {
  // Track whether the mobile menu is open or closed
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 bg-[#1a1f1a]/90 backdrop-blur-md border-b border-amberwood/20"
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* ──────────────────────────────
            BRAND LOGO + NAME
            Clicking the logo redirects to Home.
           ────────────────────────────── */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/buck-et-logo.png"
            alt="Buck-et List Brands Logo"
            width={50}
            height={50}
            className="drop-shadow-md"
          />
          <span className="font-extrabold text-lg tracking-wide text-amberwood">
            Buck-et List
          </span>
        </Link>

        {/* ──────────────────────────────
            DESKTOP NAVIGATION LINKS
            (Hidden on mobile)
           ────────────────────────────── */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { name: 'Home', href: '/' },
            { name: 'Shop', href: '/shop' },
            { name: 'About', href: '/about' },
            { name: 'Contact', href: '/contact' },
          ].map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-stone-200 hover:text-amberwood transition font-medium tracking-wide"
            >
              {link.name}
            </Link>
          ))}

          {/* Shopping Cart */}
          <Link href="/cart" aria-label="Cart" className="relative text-stone-300 hover:text-amberwood transition">
            <ShoppingBag size={22} />
            {/* Cart Item Count (optional badge) */}
            <span className="absolute -top-2 -right-2 bg-amberwood text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              
            </span>
          </Link>

          {/* Example CTA Button */}
          <Link
            href="/account"
            className="bg-amberwood hover:bg-amberwood/90 text-white px-4 py-2 rounded-lg font-semibold transition"
          >
            Sign in
          </Link>
        </div>

        {/* ──────────────────────────────
            MOBILE MENU TOGGLE BUTTON
            (Appears only on smaller screens)
           ────────────────────────────── */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-stone-100 focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* ──────────────────────────────
          MOBILE MENU DROPDOWN
          (Animated using Framer Motion)
         ────────────────────────────── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#1e2320]/95 text-stone-100 border-t border-amberwood/10"
          >
            <div className="flex flex-col items-center py-4 space-y-4">
              {[
                { name: 'Home', href: '/' },
                { name: 'Shop', href: '/shop' },
                { name: 'About', href: '/about' },
                { name: 'Contact', href: '/contact' },
                { name: 'Account', href: '/account' },
              ].map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium hover:text-amberwood transition"
                  onClick={() => setIsOpen(false)} // Close menu after clicking
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
