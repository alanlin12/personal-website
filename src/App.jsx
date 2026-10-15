import { Route, Routes } from 'react-router-dom'
import './App.css'
import MilkTea from './components/MilkTea.jsx'
import BobaName from './components/BobaName.jsx'
import Nav from './components/Nav.jsx'
import Experience from './pages/Experience.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import usePageFocus from './hooks/usePageFocus.js'

function App() {
  // false when the window/tab isn't focused, which pauses every animation (see .paused in index.css)
  const active = usePageFocus()

  return (
    <div className={active ? '' : 'paused'}>
      <MilkTea />
      {/* relative z-10 keeps the content above the background layer */}
      <main className = "relative z-10 mx-auto max-w-3xl px-6 py-16">
        {/* Name on the left, nav on the right; items-baseline lines up their text */}
        <header className="flex items-baseline justify-between">
          <BobaName>alan lin</BobaName>
          <Nav />
        </header>

        { /* Different tabs */}
        <Routes>
          <Route path="/" element={<Experience />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Experience />} />
        </Routes>
      </main>
    </div>
  )
}
export default App
