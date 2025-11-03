'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion'; // For entry and hover animations

export default function HomePage() {
  return (
    /* 
      The <main> container sets the background tone for the site.
      We're using custom Tailwind colors (see tailwind.config.js) to create
      a hunting-inspired earthy palette.
    */
    <main className="min-h-screen bg-forest text-stone-100 font-sans">

      {/* 
        ────────────────────────────────────────────────
        HERO BANNER SECTION
        ────────────────────────────────────────────────
        - Full-width background image of a forest scene.
        - Dark overlay via ::before pseudo-element to improve text contrast.
        - Brand logo, title, tagline, and CTA buttons layered above.
      */}
      <section
        className="relative flex flex-col items-center justify-center text-center py-40 px-6
                   bg-[url('/deer-bg.jpg')] bg-cover bg-center bg-fixed
                   before:absolute before:inset-0 before:bg-black/50"
      >
        {/* Motion wrapper for smooth fade-in and upward slide animation */}
        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Brand logo (replace logo.svg with your actual asset) */}
          <Image
            src="/buck-et-logo.png"
            alt="Buck-et List Brands Logo"
            width={200}
            height={200}
            priority
            className="mx-auto mb-4"
          />

          {/* Primary headline */}
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-amberwood drop-shadow-lg">
            Buck-et List Brands
          </h1>

          {/* Supporting tagline */}
          <p className="mt-4 text-lg md:text-xl text-stone-300 max-w-2xl mx-auto">
            Gear built for the wild. Engineered for the hunt.
          </p>

          {/* Call-to-action buttons (Shop / Learn More) */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/shop"
              className="bg-amberwood hover:bg-amberwood/90 text-white px-6 py-3 rounded-xl 
                         font-semibold tracking-wide shadow-md transition"
            >
              Shop Gear
            </Link>
            <Link
              href="/about"
              className="border border-amberwood text-amberwood px-6 py-3 rounded-xl 
                         font-semibold tracking-wide hover:bg-amberwood/10 transition"
            >
              Learn More
            </Link>
          </div>
        </motion.div>
      </section>

      {/* 
        ────────────────────────────────────────────────
        FEATURED PRODUCTS GRID
        ────────────────────────────────────────────────
        - Displays sample hunting gear items.
        - Each card links to its future product detail page.
        - Uses motion hover scaling for interactivity.
      */}
      <section className="py-20 bg-moss">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 text-center text-amberwood">
            Featured Gear
          </h2>

          {/* Responsive 3-column grid (collapses on mobile) */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { name: 'Hoodies', image: 'jacket.jpg', href: '/product/stealth-jacket' },
              { name: 'Shirts', image: 'cap.jpg', href: '/product/trail-cap' },
              { name: 'Hats', image: 'hoodie.jpg', href: '/product/ranger-hoodie' },
            ].map((item) => (
              <Link key={item.name} href={item.href}>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="rounded-2xl overflow-hidden shadow-lg bg-bark hover:shadow-amberwood/30 transition"
                >
                  {/* Product Image — Replace with real photos in /public/images */}
                  <Image
                    src={`/images/${item.image}`}
                    alt={`${item.name} – premium hunting apparel`}
                    width={400}
                    height={400}
                    className="object-cover w-full h-64"
                  />

                  {/* Text content under image */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-amberwood">{item.name}</h3>
                    <p className="text-stone-400 mt-2">
                      Durable, weather-ready performance gear built for hunters.
                    </p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>

          {/* Link to full Shop page */}
          <div className="text-center mt-12">
            <Link
              href="/shop"
              className="text-amberwood hover:text-amberwood/90 underline"
            >
              View All Gear →
            </Link>
          </div>
        </div>
      </section>

      {/* 
        ────────────────────────────────────────────────
        BRAND MISSION / WHY US
        ────────────────────────────────────────────────
        - Communicates brand purpose and values.
        - Soft gradient background for contrast.
      */}
      <section className="py-20 bg-forest-light text-center px-6">
        <h2 className="text-2xl font-semibold text-amberwood mb-4">
          Why Buck-et List?
        </h2>
        <p className="max-w-3xl mx-auto text-stone-300">
          We combine precision engineering, rugged materials, and the spirit of the hunt
          to craft apparel that endures the toughest conditions.  
          From sunrise stalks to long-haul treks, every thread is tested by nature itself.
        </p>
      </section>
    </main>
  );
}
