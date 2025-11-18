import { motion } from 'framer-motion'

const videos = [
  { title: 'Flow Transition', src: 'https://cdn.coverr.co/videos/coverr-a-scroll-through-the-city-4142/1080p.mp4' },
  { title: 'Micro Interaction', src: 'https://cdn.coverr.co/videos/coverr-waves-1569/1080p.mp4' },
  { title: 'Prototype Swipe', src: 'https://cdn.coverr.co/videos/coverr-light-streaks-2945/1080p.mp4' },
]

export default function MotionShowcase() {
  return (
    <section id="motion" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-wide text-[#0F0F0F] mb-8">Animations Showcase</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {videos.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.6, ease: [0.22,1,0.36,1] }}
              className="group overflow-hidden rounded-3xl bg-white/60 backdrop-blur-xl border border-slate-200/60 shadow-[0_8px_30px_rgba(0,0,0,0.05)]"
            >
              <div className="relative aspect-video overflow-hidden">
                <motion.video
                  src={v.src}
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                  initial={{ scale: 1.03 }}
                  whileHover={{ scale: 1.06 }}
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
                <div className="text-[#0F0F0F] font-semibold">{v.title}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
