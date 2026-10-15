import { useState } from 'react'
import './MilkTea.css'

const BUBBLE_COUNT = 18

// Random number between min and max
const rand = (min, max) => min + Math.random() * (max - min)

function makeBubbles() {
  return Array.from({ length: BUBBLE_COUNT }, (_, i) => ({
    id: i,
    left: rand(0, 100), // % across the screen
    size: rand(8, 36), // px
    blur: rand(1, 3), // px, "slightly blurred"
    duration: rand(14, 28), // seconds to float from bottom to top
    delay: -rand(0, 28), // negative = already partway up when the page loads
    sway: rand(-30, 30), // px of sideways drift on the way up
    tea: Math.random() < 0.5, // half tea-colored, half milky white
  }))
}

// Background layer: slow-moving milky "smoke" plus blurred circles rising to the top.
export default function MilkTea() {
  // The function runs once, so the bubbles keep their settings while the page is open.
  const [bubbles] = useState(makeBubbles)

  return (
    <div className="milk-tea" aria-hidden="true">
      <div className="smoke smoke-1" />
      <div className="smoke smoke-2" />
      <div className="smoke smoke-3" />
      {bubbles.map((b) => (
        <span
          key={b.id}
          className={b.tea ? 'bubble bubble-tea' : 'bubble'}
          style={{
            left: `${b.left}%`,
            width: `${b.size}px`,
            height: `${b.size}px`,
            filter: `blur(${b.blur}px)`,
            animationDuration: `${b.duration}s`,
            animationDelay: `${b.delay}s`,
            '--sway': `${b.sway}px`,
          }}
        />
      ))}
    </div>
  )
}
