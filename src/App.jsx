import './App.css'
import MilkTea from './components/MilkTea.jsx'
import BobaName from './components/BobaName.jsx'
import usePageFocus from './hooks/usePageFocus.js'

function App() {
  // false when the window/tab isn't focused, which pauses every animation (see .paused in index.css)
  const active = usePageFocus()

  return (
    <div className={active ? '' : 'paused'}>
      <MilkTea />
      {/* relative z-10 keeps the content above the background layer */}
      <main className = "relative z-10 mx-auto max-w-3xl px-6 py-16">
        <BobaName>alan lin</BobaName>
      </main>
    </div>
  )
}
export default App
