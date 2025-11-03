'use client';
/**
 * contact/page.tsx
 * -----------------
 * The Contact page for Buck-et List Brands.
 *
 * Purpose:
 *  - Allow customers to reach out via a professional form.
 *  - Display brand contact details and support information.
 *  - Maintain consistent visual design and color palette.
 *
 * Future Integrations:
 *  - You can later connect this form to an API route, AWS SES, or
 *    a service like Formspree / EmailJS for real submissions.
 */

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react'; // Icons for contact info

export default function Contact() {
  return (
    <main className="min-h-screen bg-forest text-stone-100">
      {/* 
        ────────────────────────────────────────────────
        HERO SECTION
        ────────────────────────────────────────────────
        - Introduces the page and encourages users to reach out.
        - Uses a subtle parallax forest background to stay on-brand.
      */}
      <section
        className="relative flex flex-col items-center justify-center text-center py-32 px-6
                   bg-[url('/images/forest-bg.jpg')] bg-cover bg-center bg-fixed
                   before:absolute before:inset-0 before:bg-black/60"
      >
        <motion.div
          className="relative z-10 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-extrabold text-amberwood mb-4 drop-shadow-lg">
            Contact Us
          </h1>
          <p className="text-stone-300 text-lg">
            Have a question, a story to share, or feedback about your gear?  
            We’d love to hear from you.
          </p>
        </motion.div>
      </section>

      {/* 
        ────────────────────────────────────────────────
        CONTACT INFO + FORM SECTION
        ────────────────────────────────────────────────
        - Two-column layout: contact info on the left, form on the right.
        - Uses motion for smooth fade-in as the section scrolls into view.
      */}
      <section className="py-20 bg-moss px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          {/* LEFT SIDE — Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-amberwood mb-6">Get in Touch</h2>
            <p className="text-stone-300 mb-6 leading-relaxed">
              Whether you’re looking for product support, collaboration opportunities, 
              or just want to share your hunting story — our team is always ready to connect.
            </p>

            {/* Contact Details List */}
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-amberwood" />
                <span>support@bucketlistbrands.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-amberwood" />
                <span>+1 (555) 987-4321</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={20} className="text-amberwood" />
                <span>Outfitter HQ, Bozeman, MT 59715</span>
              </li>
            </ul>

            <p className="text-stone-400 text-sm mt-6">
              Business Hours: Mon–Fri, 9am–5pm (MST)
            </p>
          </motion.div>

          {/* RIGHT SIDE — Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            onSubmit={(e) => e.preventDefault()} // Prevent default for now
            className="bg-bark p-8 rounded-2xl shadow-lg space-y-6"
          >
            <h2 className="text-2xl font-semibold text-amberwood mb-4">
              Send Us a Message
            </h2>

            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm text-stone-300 mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                required
                placeholder="Enter your name"
                className="w-full px-4 py-2 rounded-lg bg-bark-light text-stone-100 
                           placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-amberwood"
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm text-stone-300 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                required
                placeholder="you@example.com"
                className="w-full px-4 py-2 rounded-lg bg-bark-light text-stone-100 
                           placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-amberwood"
              />
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-sm text-stone-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                required
                placeholder="Write your message..."
                className="w-full px-4 py-2 rounded-lg bg-bark-light text-stone-100 
                           placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-amberwood resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-amberwood hover:bg-amberwood/90 text-white py-3 rounded-lg 
                         font-semibold tracking-wide transition shadow-md"
            >
              Send Message
            </button>

            {/* Note below form */}
            <p className="text-xs text-stone-400 text-center">
              * This form is currently for demonstration purposes only.
            </p>
          </motion.form>
        </div>
      </section>

      {/* 
        ────────────────────────────────────────────────
        CTA FOOTER SECTION
        ────────────────────────────────────────────────
        - Reuses your brand tone to invite users to follow up or shop.
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
            Prefer to Talk to Someone?
          </h2>
          <p className="text-stone-300 mb-8">
            Give us a call — we’re real hunters, not robots.  
            Our team loves hearing your feedback and gear stories.
          </p>
          <a
            href="/shop"
            className="bg-amberwood hover:bg-amberwood/90 text-white px-8 py-3 rounded-xl font-semibold tracking-wide shadow-md transition"
          >
            Visit the Shop
          </a>
        </motion.div>
      </section>
    </main>
  );
}
