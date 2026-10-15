import { useEffect, useState } from 'react'

// True while the user is looking at the page: the tab is visible AND the browser window is focused.
// Switching tabs, switching apps, or minimizing the window all make it false.
const isActive = () => document.hasFocus() && !document.hidden

export default function usePageFocus() {
  const [active, setActive] = useState(isActive)

  useEffect(() => {
    const update = () => setActive(isActive())
    window.addEventListener('focus', update)
    window.addEventListener('blur', update)
    document.addEventListener('visibilitychange', update)
    // Cleanup: remove the listeners if the component ever unmounts
    return () => {
      window.removeEventListener('focus', update)
      window.removeEventListener('blur', update)
      document.removeEventListener('visibilitychange', update)
    }
  }, [])

  return active
}
