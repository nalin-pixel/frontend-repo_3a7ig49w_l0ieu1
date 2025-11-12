import { useState } from 'react'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="relative py-24 bg-black">
      <div className="max-w-3xl mx-auto px-4 md:px-6 text-white">
        <h2 className="text-3xl md:text-4xl font-bold">Contact</h2>
        <p className="text-white/70 mt-2">Have a project or just want to say hi?</p>

        <form onSubmit={handleSubmit} className="mt-8 grid gap-4">
          <input required placeholder="Your name" className="bg-white/5 ring-1 ring-white/10 rounded-xl px-4 py-3 outline-none focus:ring-white/30" />
          <input required type="email" placeholder="Email" className="bg-white/5 ring-1 ring-white/10 rounded-xl px-4 py-3 outline-none focus:ring-white/30" />
          <textarea required placeholder="Message" rows={5} className="bg-white/5 ring-1 ring-white/10 rounded-xl px-4 py-3 outline-none focus:ring-white/30" />
          <button className="inline-flex justify-center rounded-full bg-white text-black font-semibold px-6 py-3 disabled:opacity-60" disabled={sent}>
            {sent ? 'Sent — talk soon!' : 'Send message'}
          </button>
        </form>
      </div>
    </section>
  )
}
