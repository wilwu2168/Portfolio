import { useCallback, useEffect, useState } from 'react'
import Loading from './Loading'
import Menu from './Menu'
import Screen from './Screen'

export default function App() {
  const [loaded, setLoaded] = useState(false)
  const [screen, setScreen] = useState(null)
  const finish = useCallback(() => setLoaded(true), [])

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setScreen(null)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <>
      {loaded && (screen ? <Screen id={screen} onBack={() => setScreen(null)} /> : <Menu onOpen={setScreen} />)}
      {!loaded && <Loading onDone={finish} />}
    </>
  )
}
