'use client'
/**
 * about/page.tsx
 * ----------------
 * The About page for Buck-et List Brands.
 *
 * Purpose:
 *  - Share the brand’s story, mission, and values.
 *  - Maintain a cohesive visual identity with the rest of the site.
 *  - Include imagery and subtle motion for visual engagement.
 */

import Image from 'next/image';
import {motion} from 'framer-motion';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-forest text-stone-100">
      {/* 
        ────────────────────────────────────────────────
        HERO SECTION
        ────────────────────────────────────────────────
        - Large banner similar to Home Page hero, but with a focus on brand identity.
        - Use a background image of the outdoors or hunters in the field.
      */}
      <section
        className="relative flex flex-col items-center justify-center text-center py-32 px-6 
                   bg-[url('/deer-bg.jpg')] bg-cover bg-center bg-fixed
                   before:absolute before:inset-0 before:bg-black/60"
      >
        <motion.div
          className="relative z-10 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-extrabold text-amberwood mb-4 drop-shadow-lg">
            About Buck-et List Brands
          </h1>
          <p className="text-stone-300 text-lg">
            Born in the backcountry. Built for those who live for the hunt.
          </p>
        </motion.div>
      </section>

      {/* 
        ────────────────────────────────────────────────
        OUR STORY SECTION
        ────────────────────────────────────────────────
        - Describes how and why the brand started.
        - Uses two-column layout for readability and modern feel.
      */}
      <section className="py-20 bg-moss px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <h2 className="text-3xl font-bold text-amberwood mb-4">Our Story</h2>
                <p className="text-stone-300 leading-relaxed">
                Buck-et List Brands began with a simple mission: to create apparel that performs as hard as you do in the field. 
                What started as a small idea among passionate hunters evolved into a brand dedicated to durability, performance, and style.
                </p>
                <p className="text-stone-400 mt-4 leading-relaxed">
                Every piece we design is tested in real conditions — through mud, rain, and cold. 
                Whether it’s a stealth jacket for the early morning stalk or a rugged hoodie for campfire nights, we build it to last.
                </p>
            </motion.div>

            {/* Image */}
            <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative w-full h-80 rounded-2xl overflow-hidden shadow-lg"
            >
                <Image
                src="/images/hunters.jpg"
                alt="Hunters wearing Buck-et List apparel"
                fill
                className="object-cover"
                />
            </motion.div>
        </div>
      </section>

      {/* 
        ────────────────────────────────────────────────
        OUR VALUES SECTION
        ────────────────────────────────────────────────
        - Highlight the core values that define your brand identity.
        - Simple grid with icons or symbols.
      */}
      <section className="py-20 bg-[#2a332a]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-amberwood mb-10">Our Core Values</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: 'Rugged Performance',
                desc: 'Built to withstand the harshest terrains and toughest hunts.',
              },
              {
                title: 'Precision Engineering',
                desc: 'Every stitch, zipper, and seam designed with purpose.',
              },
              {
                title: 'Connection to Nature',
                desc: 'Inspired by the wild, made to preserve and respect it.',
              },
            ].map((value) => (
              <motion.div
                key={value.title}
                whileHover={{ scale: 1.05 }}
                className="bg-bark rounded-2xl p-6 shadow-md hover:shadow-amberwood/20 transition"
              >
                <h3 className="text-xl font-semibold text-amberwood mb-2">
                  {value.title}
                </h3>
                <p className="text-stone-300">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 
        ────────────────────────────────────────────────
        CALL TO ACTION SECTION
        ────────────────────────────────────────────────
        - Encourages users to explore the shop or sign up for the newsletter.
      */}
      <section className="py-20 bg-bark text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-amberwood mb-4">
            Ready to Gear Up?
          </h2>
          <p className="text-stone-300 mb-8">
            Join the Buck-et List movement — crafted by hunters, for hunters.
          </p>
          <a
            href="/shop"
            className="bg-amberwood hover:bg-amberwood/90 text-white px-8 py-3 rounded-xl font-semibold tracking-wide shadow-md transition"
          >
            Shop Now
          </a>
        </motion.div>
      </section>
    </main>
  );
}
