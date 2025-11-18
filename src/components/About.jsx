import { motion } from 'framer-motion'
import { Code2, Layout, Palette } from 'lucide-react'

const skills = [
  { icon: Palette, label: 'Visual Design' },
  { icon: Layout, label: 'UI Systems' },
  { icon: Code2, label: 'Prototyping' },
]

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-5">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-wide text-[#0F0F0F]">About</h2>
            <p className="mt-4 text-[#0F0F0F]/70 max-w-prose">
              I simplify complex problems into elegant, human-centered solutions. I focus on clarity, intent, and motion to craft interfaces that feel effortless.
            </p>
          </div>

          <div className="md:col-span-7 grid grid-cols-3 gap-3 sm:gap-4">
            {skills.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.5, ease: [0.22,1,0.36,1] }}
                className="group relative rounded-2xl bg-white/70 backdrop-blur-xl border border-slate-200/70 p-5 shadow-[0_8px_30px_rgba(0,0,0,0.05)]"
              >
                <s.icon className="w-6 h-6 text-[#0F0F0F]" />
                <div className="mt-2 text-sm text-[#0F0F0F]/80">{s.label}</div>
                <div className="absolute inset-0 rounded-2xl ring-1 ring-transparent group-hover:ring-[#4F6BFF]/40 transition-all" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
