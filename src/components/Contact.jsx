import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 sm:py-28">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 right-10 w-64 h-64 rounded-full bg-[#4F6BFF]/20 blur-2xl" />
        <div className="absolute bottom-10 -left-10 w-72 h-72 rounded-full bg-white/40 backdrop-blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white/70 backdrop-blur-xl border border-slate-200/60 p-6 sm:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-wide text-[#0F0F0F]">Let’s build something calm and premium.</h2>
          <p className="mt-2 text-[#0F0F0F]/70">Tell me a bit about your project and timeline.</p>
          <form className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input className="col-span-1 rounded-xl border border-slate-200 bg-white/80 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#4F6BFF]/40" placeholder="Name" />
            <input className="col-span-1 rounded-xl border border-slate-200 bg-white/80 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#4F6BFF]/40" placeholder="Email" type="email" />
            <input className="sm:col-span-2 rounded-xl border border-slate-200 bg-white/80 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#4F6BFF]/40" placeholder="Subject" />
            <textarea rows="4" className="sm:col-span-2 rounded-xl border border-slate-200 bg-white/80 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#4F6BFF]/40" placeholder="Message" />
            <div className="sm:col-span-2 flex items-center justify-between">
              <div className="text-xs text-[#0F0F0F]/50">I’ll reply within 24–48 hours.</div>
              <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.99 }} className="rounded-full px-6 py-3 bg-[#4F6BFF] text-white text-sm hover:shadow-[0_10px_30px_rgba(79,107,255,0.35)] transition-all">Send</motion.button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
