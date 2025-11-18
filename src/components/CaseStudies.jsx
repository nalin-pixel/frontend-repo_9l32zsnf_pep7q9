import { motion } from 'framer-motion'

const projects = [
  { title: 'Fintech Dashboard', desc: 'Clean data, soft motion, glass cards.', image: 'https://images.unsplash.com/photo-1748439435495-722cc1728b7e?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxGaW50ZWNoJTIwRGFzaGJvYXJkfGVufDB8MHx8fDE3NjM0NTcxNTZ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { title: 'Wellness App', desc: 'Calm flows, human rhythm, warmth.', image: 'https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?q=80&w=1600&auto=format&fit=crop' },
  { title: 'SaaS Marketing', desc: 'Minimal landing, premium accents.', image: 'https://images.unsplash.com/photo-1748439435495-722cc1728b7e?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxGaW50ZWNoJTIwRGFzaGJvYXJkfGVufDB8MHx8fDE3NjM0NTcxNTZ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
]

export default function CaseStudies() {
  return (
    <section id="work" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl sm:3xl font-bold tracking-wide text-[#0F0F0F]">Case Studies</h2>
          <a href="#" className="text-sm text-[#0F0F0F]/60 hover:text-[#0F0F0F]">All projects →</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href="#"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.6, ease: [0.22,1,0.36,1] }}
              className="group relative overflow-hidden rounded-3xl bg-white/60 backdrop-blur-xl border border-slate-200/60 shadow-[0_8px_30px_rgba(0,0,0,0.05)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <motion.img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.05 }}
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.6, ease: [0.22,1,0.36,1] }}
                />
                <motion.div
                  initial={{ y: '100%' }}
                  whileHover={{ y: '0%' }}
                  transition={{ duration: 0.6, ease: [0.22,1,0.36,1] }}
                  className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F]/70 via-transparent to-transparent"
                />
              </div>
              <div className="p-5">
                <div className="text-[#0F0F0F] font-semibold">{p.title}</div>
                <div className="text-sm text-[#0F0F0F]/70 mt-1">{p.desc}</div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
