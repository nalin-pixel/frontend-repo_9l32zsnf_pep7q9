import { motion } from 'framer-motion'
import { Boxes, Component, Figma, Sparkles } from 'lucide-react'

const services = [
  { icon: Figma, title: 'Product Design', desc: 'From flows to final pixels.' },
  { icon: Component, title: 'Design Systems', desc: 'Scalable, accessible UI kits.' },
  { icon: Boxes, title: 'Prototyping', desc: 'Micro-interactions and motion.' },
  { icon: Sparkles, title: 'Art Direction', desc: 'Calm, premium visual language.' },
]

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-wide text-[#0F0F0F] mb-8">Services</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5, ease: [0.22,1,0.36,1] }}
              className="group rounded-2xl bg-white/70 backdrop-blur-xl border border-slate-200/60 p-5 shadow-[0_8px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] transition-all"
            >
              <s.icon className="w-6 h-6 text-[#0F0F0F]" />
              <div className="mt-2 font-semibold text-[#0F0F0F]">{s.title}</div>
              <div className="text-sm text-[#0F0F0F]/70">{s.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
