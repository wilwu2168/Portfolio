import { useEffect, useState } from 'react'
import { LOADING_TEXT } from './content'

export default function Loading({ onDone }) {
  const [pct, setPct] = useState(0)
  const [leaving, setLeaving] = useState(false)

  useEffect(() => {
    const id = setInterval(() => {
      setPct((p) => Math.min(100, p + 2 + Math.random() * 7))
    }, 120)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    if (pct < 100) return
    const a = setTimeout(() => setLeaving(true), 350)
    const b = setTimeout(onDone, 1000)
    return () => {
      clearTimeout(a)
      clearTimeout(b)
    }
  }, [pct, onDone])

  return (
    <div className={`loading ${leaving ? 'leaving' : ''}`}>
      <div className="loading-logo" aria-label={LOADING_TEXT}>
        {LOADING_TEXT}
      </div>
      <div className="loading-bar">
        <div className="loading-fill" style={{ width: `${pct}%` }} />
      </div>
    </div>
  )
}
