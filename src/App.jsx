import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Work from './components/Work'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <Work />
      <About />
      <Contact />
      <footer className="text-center text-white/50 text-sm py-8">© {new Date().getFullYear()} Your Name — Designed with care.</footer>
    </div>
  )
}

export default App
