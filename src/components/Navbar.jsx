import { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { href: '#work', label: 'Work' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#motion', label: 'Motion' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl backdrop-blur-xl bg-white/60 border border-slate-200/60 shadow-[0_8px_30px_rgba(0,0,0,0.05)]">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#top" className="font-semibold tracking-widest text-[12px] sm:text-sm text-[#0F0F0F] uppercase">UI/UX Portfolio</a>
            <div className="hidden md:flex items-center gap-6">
              {links.map(l => (
                <a key={l.href} href={l.href} className="text-sm text-[#0F0F0F]/80 hover:text-[#0F0F0F] transition-colors">
                  {l.label}
                </a>
              ))}
              <a href="#contact" className="inline-flex items-center gap-2 text-sm rounded-full px-4 py-2 bg-[#4F6BFF] text-white hover:shadow-[0_10px_30px_rgba(79,107,255,0.35)] transition-all will-change-transform hover:scale-[1.02]">
                Let’s talk
              </a>
            </div>
            <button className="md:hidden p-2" onClick={() => setOpen(v=>!v)} aria-label="Menu">
              <Menu className="w-5 h-5 text-[#0F0F0F]" />
            </button>
          </div>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden border-t border-slate-200/60 px-4 py-3 space-y-3"
            >
              {links.map(l => (
                <a key={l.href} href={l.href} onClick={()=>setOpen(false)} className="block text-sm text-[#0F0F0F]/80 hover:text-[#0F0F0F]">
                  {l.label}
                </a>
              ))}
              <a href="#contact" onClick={()=>setOpen(false)} className="inline-flex items-center gap-2 text-sm rounded-full px-4 py-2 bg-[#4F6BFF] text-white">
                Let’s talk
              </a>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}
