import { useEffect, useState } from 'react'

const BACKGROUNDS = [
  '/pixelated-photo.png',
  '/mountain-background.png',
]

export default function Panorama() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setActive((current) => (current + 1) % BACKGROUNDS.length)
    }, 18000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="panorama" aria-hidden="true">
      {BACKGROUNDS.map((src, index) => (
        <img
          className={`panorama-image ${index === active ? 'active' : ''}`}
          src={src}
          alt=""
          key={src}
        />
      ))}
    </div>
  )
}
