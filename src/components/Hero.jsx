import { motion, useScroll, useTransform } from 'framer-motion'

export default function Hero() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 300], [0, 60])
  const opacity = useTransform(scrollY, [0, 300], [1, 0.85])

  return (
    <section id="top" className="relative overflow-hidden pt-28 sm:pt-32 pb-24 sm:pb-32">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#4F6BFF]/40 to-[#4F6BFF]/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-white/40 backdrop-blur-3xl shadow-[inset_0_0_1px_rgba(15,15,15,0.06)]" />
      </div>

      <motion.div style={{ y, opacity }} className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="text-[#0F0F0F] text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-[0.06em] leading-[1.05]"
            >
              Designing Clean, Human-Centered Experiences.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 text-[#0F0F0F]/70 text-lg max-w-2xl"
            >
              I craft calm, premium, ultra-minimal interfaces where clarity, motion, and intent guide every pixel.
            </motion.p>
            <div className="mt-8 flex items-center gap-3">
              <a href="#work" className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-[#0F0F0F] text-white text-sm hover:shadow-[0_10px_30px_rgba(15,15,15,0.25)] transition-all hover:scale-[1.02]">
                View Work
              </a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-white text-[#0F0F0F] border border-slate-200 hover:shadow-[0_10px_30px_rgba(15,15,15,0.08)] transition-all hover:scale-[1.02]">
                Get in Touch
              </a>
            </div>
          </div>
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative h-64 sm:h-80 lg:h-[420px] rounded-3xl bg-white/60 backdrop-blur-xl border border-slate-200/60 shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
            >
              <div className="absolute inset-0 overflow-hidden rounded-3xl">
                <motion.div
                  initial={{ y: '100%' }}
                  whileInView={{ y: '0%' }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 bg-[radial-gradient(120px_80px_at_20%_30%,rgba(79,107,255,0.25),transparent),radial-gradient(120px_80px_at_70%_70%,rgba(79,107,255,0.15),transparent)]"
                />
              </div>
              <div className="absolute inset-0 grid place-items-center">
                <div className="w-28 h-28 rounded-2xl bg-white/80 backdrop-blur-md border border-slate-200 shadow-[0_10px_50px_rgba(79,107,255,0.25)]" />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
