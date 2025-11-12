import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-gradient-to-b from-black to-black/95">
      <div className="max-w-6xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">About Me</h2>
          <p className="text-white/70 mt-4">
            I’m a designer and student blending visual design, product thinking, and playful 3D. I enjoy crafting interfaces that feel alive and friendly.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4">
            {["UI/UX", "Brand", "Motion", "3D"].map((s, i) => (
              <motion.div
                key={s}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4 text-white/90"
              >
                {s}
              </motion.div>
            ))}
          </div>
        </div>
        <div className="rounded-2xl bg-gradient-to-br from-violet-500/20 to-blue-500/20 ring-1 ring-white/10 p-6 text-white/80">
          <p className="leading-relaxed">
            Outside of design, I love learning, experimenting with new tools, and collaborating with people who care about details. If that’s you, let’s chat.
          </p>
        </div>
      </div>
    </section>
  )
}
