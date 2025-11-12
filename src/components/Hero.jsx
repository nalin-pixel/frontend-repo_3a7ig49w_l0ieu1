import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] overflow-hidden flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 w-full">
        <div className="py-28 md:py-36">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold tracking-tight text-white"
          >
            Designer & Student
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-4 max-w-xl text-white/80"
          >
            I create playful, modern experiences across brand, product, and 3D. This is my little corner of the internet — explore my work and say hi.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="mt-8 flex flex-col sm:flex-row gap-3"
          >
            <a href="#work" className="inline-flex items-center justify-center rounded-full bg-white text-black font-semibold px-6 py-3">
              View Work
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-white/10 text-white font-semibold px-6 py-3 ring-1 ring-white/20 hover:bg-white/15">
              Contact Me
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
