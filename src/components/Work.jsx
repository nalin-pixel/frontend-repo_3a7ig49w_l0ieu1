import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Playful Brand Kit',
    tag: 'Branding',
    desc: 'Colorful identity system with motion principles.',
  },
  {
    title: 'Portfolio Microsite',
    tag: 'Web',
    desc: 'Interactive landing with subtle 3D touches.',
  },
  {
    title: '3D Icon Set',
    tag: '3D',
    desc: 'A set of bubbly, tactile icons for a fintech app.',
  },
]

export default function Work() {
  return (
    <section id="work" className="relative py-24 bg-gradient-to-b from-black to-black">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Featured Work</h2>
        <p className="text-white/70 mt-2">A few things I loved building recently.</p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5 hover:bg-white/10 transition"
            >
              <span className="inline-flex text-xs px-2 py-1 rounded-full bg-white/10 text-white/80">{p.tag}</span>
              <h3 className="text-xl font-semibold text-white mt-3">{p.title}</h3>
              <p className="text-white/70 mt-2 text-sm">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
