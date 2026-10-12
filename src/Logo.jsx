// Blocky Minecraft-style logo drawn from a 5x7 pixel grid with a stone texture and extruded depth.
const GLYPHS = {
  M: ['X...X', 'XX.XX', 'XXXXX', 'X.X.X', 'X...X', 'X...X', 'X...X'],
  I: ['XXXXX', '..X..', '..X..', '..X..', '..X..', '..X..', 'XXXXX'],
  N: ['X...X', 'XX..X', 'XXX.X', 'X.XXX', 'X..XX', 'X...X', 'X...X'],
  E: ['XXXXX', 'X....', 'X....', 'XXXX.', 'X....', 'X....', 'XXXXX'],
  C: ['.XXXX', 'X....', 'X....', 'X....', 'X....', 'X....', '.XXXX'],
  R: ['XXXX.', 'X...X', 'X...X', 'XXXX.', 'X.X..', 'X..X.', 'X...X'],
  A: ['.XXX.', 'X...X', 'X...X', 'XXXXX', 'X...X', 'X...X', 'X...X'],
  F: ['XXXXX', 'X....', 'X....', 'XXXX.', 'X....', 'X....', 'X....'],
  T: ['XXXXX', '..X..', '..X..', '..X..', '..X..', '..X..', '..X..'],
  J: ['..XXX', '...X.', '...X.', '...X.', '...X.', 'X..X.', '.XX..'],
  V: ['X...X', 'X...X', 'X...X', 'X...X', '.X.X.', '.X.X.', '..X..'],
  D: ['XXXX.', 'X...X', 'X...X', 'X...X', 'X...X', 'X...X', 'XXXX.'],
  O: ['.XXX.', 'X...X', 'X...X', 'X...X', 'X...X', 'X...X', '.XXX.'],
  ' ': ['..', '..', '..', '..', '..', '..', '..'],
}
const STONE = ['#8f8f8f', '#9a9a9a', '#a6a6a6', '#b2b2b2', '#868686']
const S = 2 // upscale factor: 5x7 glyphs become 10x14 for chunkier, 2-cell-thick strokes
const DEPTH = 3

function cells(word) {
  const out = []
  let ox = 0
  for (const ch of word) {
    GLYPHS[ch].forEach((row, y) => {
      for (let x = 0; x < row.length; x++) {
        if (row[x] !== 'X') continue
        for (let dx = 0; dx < S; dx++) for (let dy = 0; dy < S; dy++) out.push([ox + x * S + dx, y * S + dy])
      }
    })
    ox += (GLYPHS[ch][0].length + 1) * S
  }
  return { out, cols: ox - S }
}

export default function Logo({ word = 'MINECRAFT' }) {
  const { out, cols } = cells(word)
  const set = new Set(out.map(([x, y]) => `${x},${y}`))
  const has = (x, y) => set.has(`${x},${y}`)
  const w = cols + DEPTH + 2
  const h = 7 * S + DEPTH + 2
  const steps = Array.from({ length: DEPTH }, (_, i) => i + 1)
  return (
    <svg className="logo-svg" viewBox={`-1 -1 ${w + 1} ${h + 1}`} shapeRendering="crispEdges" role="img" aria-label={word}>
      {[...steps, 0].flatMap((d) =>
        out.map(([x, y]) => (
          <rect key={`o${d}-${x}-${y}`} x={x + d - 0.5} y={y + d - 0.5} width="2" height="2" fill="#000" />
        )),
      )}
      {steps.slice().reverse().flatMap((d) =>
        out.map(([x, y]) => (
          <rect key={`s${d}-${x}-${y}`} x={x + d} y={y + d} width="1" height="1" fill={d === DEPTH ? '#2f2f2f' : d === 1 ? '#5a5a5a' : '#444'} />
        )),
      )}
      {out.map(([x, y]) => (
        <rect key={`t${x}-${y}`} x={x} y={y} width="1.02" height="1.02" fill={STONE[(x * 7 + y * 13 + x * y) % STONE.length]} />
      ))}
      {out.map(([x, y]) => !has(x, y - 1) && <rect key={`h${x}-${y}`} x={x} y={y} width="1.02" height="0.45" fill="#dcdcdc" />)}
      {out.map(([x, y]) => !has(x - 1, y) && <rect key={`l${x}-${y}`} x={x} y={y} width="0.4" height="1.02" fill="#c4c4c4" />)}
      {out.map(([x, y]) => !has(x, y + 1) && <rect key={`b${x}-${y}`} x={x} y={y + 0.6} width="1.02" height="0.42" fill="#6a6a6a" />)}
    </svg>
  )
}
