'use client';
/* 
        ────────────────────────────────────────────────
        FOOTER / NEWSLETTER SIGNUP
        ────────────────────────────────────────────────
        - Provides a place for customer engagement (email capture).
        - Contains copyright.
*/
export default function Footer() {
    return(
      <footer className="py-12 bg-bark border-t border-amberwood/20 text-center text-sm text-stone-400">
        <div className="max-w-4xl mx-auto px-6 space-y-4">
          {/* Newsletter prompt */}
          <p>Subscribe for updates & exclusive offers:</p>

          {/* Simple email input form (non-functional placeholder) */}
          <form
            className="flex flex-col sm:flex-row justify-center items-center gap-2"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Enter your email"
              aria-label="Email address"
              className="px-4 py-2 rounded-xl sm:rounded-l-xl bg-bark-light text-stone-200 
                         placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-amberwood w-64"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-amberwood text-white rounded-xl sm:rounded-r-xl 
                         hover:bg-amberwood/90 transition"
            >
              Subscribe
            </button>
          </form>

          {/* Footer credit */}
          <p>
            © {new Date().getFullYear()} Buck-et List Brands · Crafted for the Wild
          </p>
        </div>
      </footer>
    )
}