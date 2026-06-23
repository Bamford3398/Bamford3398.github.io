export function initWaveToTube(canvas) {
  const ctx = canvas.getContext('2d')
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const CFG = {
    cols: 96,
    rows: 36,
    waveHold: 2.5,
    morphDuration: 6.0,
    morphStagger: 2.5,
    waveSpeed: 0.18,
    tubeRadiusFrac: 0.26,
    tubeRoll: 0.10,
    tubeBreath: 0.05,
    flareChance: 0.012,
    flareDuration: 2.2,
    linkAlpha: 0.16,
    gold: { r: 245, g: 192, b: 64 },
    hot: { r: 255, g: 244, b: 214 },
  }

  let W = 0
  let H = 0
  let dpr = 1
  let rafId = null

  function makeSprite(size, stops) {
    const c = document.createElement('canvas')
    c.width = c.height = size
    const g = c.getContext('2d')
    const grad = g.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2)
    stops.forEach(([t, col]) => grad.addColorStop(t, col))
    g.fillStyle = grad
    g.fillRect(0, 0, size, size)
    return c
  }

  const G = CFG.gold
  const HOT = CFG.hot
  const spriteSharp = makeSprite(64, [
    [0.00, `rgba(${HOT.r},${HOT.g},${HOT.b},1)`],
    [0.18, `rgba(${G.r},${G.g},${G.b},0.95)`],
    [0.45, `rgba(${G.r},${G.g},${G.b},0.25)`],
    [1.00, `rgba(${G.r},${G.g},${G.b},0)`],
  ])
  const spriteSoft = makeSprite(64, [
    [0.00, `rgba(${G.r},${G.g},${G.b},0.85)`],
    [0.40, `rgba(${G.r},${G.g},${G.b},0.35)`],
    [1.00, `rgba(${G.r},${G.g},${G.b},0)`],
  ])
  const spriteBlur = makeSprite(64, [
    [0.00, `rgba(${G.r},${G.g},${G.b},0.45)`],
    [0.55, `rgba(${G.r},${G.g},${G.b},0.18)`],
    [1.00, `rgba(${G.r},${G.g},${G.b},0)`],
  ])

  const N = CFG.cols * CFG.rows
  const jitter = new Float32Array(N)
  const phase = new Float32Array(N)
  const flareT = new Float32Array(N)
  const offX = new Float32Array(N)
  const offZ = new Float32Array(N)
  const delay = new Float32Array(N)

  for (let i = 0; i < N; i++) {
    jitter[i] = 0.55 + Math.random() * 0.9
    phase[i] = Math.random() * Math.PI * 2
    flareT[i] = 0
    offX[i] = (Math.random() - 0.5) * 0.55
    offZ[i] = (Math.random() - 0.5) * 0.55
    delay[i] = Math.random() * CFG.morphStagger
  }

  function waveHeight(x, z, t) {
    return (
      Math.sin(x * 0.45 + t * 1.1) * 0.55 +
      Math.sin(z * 0.55 - t * 0.8) * 0.65 +
      Math.sin((x + z) * 0.28 + t * 0.55) * 0.9 +
      Math.sin(x * 0.12 - z * 0.21 + t * 0.35) * 1.4
    )
  }

  const ease = (u) => (u <= 0 ? 0 : u >= 1 ? 1 : u * u * (3 - 2 * u))

  const P = {
    sx: new Float32Array(N),
    sy: new Float32Array(N),
    focus: new Float32Array(N),
    depth: new Float32Array(N),
    bright: new Float32Array(N),
  }

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2)
    W = canvas.clientWidth
    H = canvas.clientHeight
    canvas.width = W * dpr
    canvas.height = H * dpr
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
  }

  window.addEventListener('resize', resize)
  resize()

  const start = performance.now() / 1000
  let last = start

  function frame(nowMs) {
    const now = nowMs / 1000
    const dt = Math.min(now - last, 0.05)
    last = now
    const elapsed = now - start
    const motion = reduceMotion ? 0 : 1
    const tw = now * CFG.waveSpeed * motion

    ctx.clearRect(0, 0, W, H)

    const horizonY = H * 0.30
    const camDist = 7.5
    const tubeCy = H * 0.52
    const Rpx = H * CFG.tubeRadiusFrac
    const axisL = W * 0.06
    const axisR = W * 0.94
    const roll = now * CFG.tubeRoll * motion

    for (let r = 0; r < CFG.rows; r++) {
      for (let c = 0; c < CFG.cols; c++) {
        const i = r * CFG.cols + c

        const gx = (c / (CFG.cols - 1) - 0.5) * 30 + offX[i]
        const gz = (r / (CFG.rows - 1)) * 22 + 1.5 + offZ[i]
        const gy = waveHeight(gx, gz, tw) + Math.sin(phase[i] + now * 0.6 * motion) * 0.12
        const persp = camDist / (camDist + gz)
        const waveX = W * 0.5 + gx * persp * (W / 16)
        const waveY = horizonY + (H * 0.62) * (1 - persp) + (-gy) * persp * (H / 9)
        const waveFocus = 1 - Math.min(Math.abs(persp - 0.62) / 0.45, 1)
        const waveDepth = persp

        const ang = (r / CFG.rows) * Math.PI * 2 + roll + offZ[i] * 0.05
        const breathe = 1 + CFG.tubeBreath *
          Math.sin((c / CFG.cols) * Math.PI * 4 - now * 1.2 * motion + r * 0.18)
        const rad = Rpx * breathe * (1 + offX[i] * 0.012)
        const depth = Math.cos(ang)
        const widen = 1 + depth * 0.06
        const tubeX = axisL + (c / (CFG.cols - 1)) * (axisR - axisL) * widen
          + (widen - 1) * ((axisL + (c / (CFG.cols - 1)) * (axisR - axisL)) - W * 0.5)
        const tubeY = tubeCy + Math.sin(ang) * rad + Math.sin(phase[i] + now * 0.6 * motion) * 1.5
        const tubeFocus = Math.max(depth, 0)
        const tubeDepth = 0.45 + 0.30 * depth

        const m = ease((elapsed - CFG.waveHold - delay[i]) / CFG.morphDuration)
        const mm = reduceMotion ? 1 : m
        P.sx[i] = waveX + (tubeX - waveX) * mm
        P.sy[i] = waveY + (tubeY - waveY) * mm
        P.focus[i] = waveFocus + (tubeFocus - waveFocus) * mm
        P.depth[i] = waveDepth + (tubeDepth - waveDepth) * mm

        let b = 0.45 + 0.25 * Math.sin(phase[i] * 3 + now * 1.4 * motion)
        if (!reduceMotion) {
          if (flareT[i] > 0) {
            flareT[i] -= dt
            const p = 1 - flareT[i] / CFG.flareDuration
            b += Math.sin(Math.min(p, 1) * Math.PI) * 1.6
          } else if (Math.random() < CFG.flareChance * dt * 60) {
            flareT[i] = CFG.flareDuration * (0.6 + Math.random() * 0.8)
          }
        }
        P.bright[i] = b * (1 - mm * 0.45 * (1 - Math.max(Math.cos(
          (r / CFG.rows) * Math.PI * 2 + roll), 0)))
      }
    }

    ctx.lineWidth = 1
    for (let r = 0; r < CFG.rows; r++) {
      for (let c = 0; c < CFG.cols; c++) {
        const i = r * CFG.cols + c
        const d = P.depth[i]
        if (d < 0.18) continue
        const a = CFG.linkAlpha * d * d * (0.6 + P.bright[i] * 0.5) * 2.2
        ctx.strokeStyle = `rgba(${G.r},${G.g},${G.b},${Math.min(a, 0.5).toFixed(3)})`
        if (c < CFG.cols - 1) {
          ctx.beginPath()
          ctx.moveTo(P.sx[i], P.sy[i])
          ctx.lineTo(P.sx[i + 1], P.sy[i + 1])
          ctx.stroke()
        }
        const j = ((r + 1) % CFG.rows) * CFG.cols + c
        if (r < CFG.rows - 1 || elapsed > CFG.waveHold + CFG.morphDuration * 0.5) {
          ctx.beginPath()
          ctx.moveTo(P.sx[i], P.sy[i])
          ctx.lineTo(P.sx[j], P.sy[j])
          ctx.stroke()
        }
      }
    }

    ctx.globalCompositeOperation = 'lighter'
    for (let i = 0; i < N; i++) {
      const focus = P.focus[i]
      const d = P.depth[i]
      const b = P.bright[i]
      let sprite, size, alpha
      if (focus > 0.6) {
        sprite = spriteSharp
        size = (2.5 + b * 4.5) * jitter[i] * d * (W / 640)
        alpha = Math.min(0.55 + b * 0.5, 1)
      } else if (focus > 0.28) {
        sprite = spriteSoft
        size = (5 + b * 6) * jitter[i] * d * (W / 640)
        alpha = 0.5 + b * 0.3
      } else {
        sprite = spriteBlur
        size = (10 + b * 8) * jitter[i] * Math.max(d, 0.4) * (W / 640)
        alpha = 0.28 + b * 0.18
      }
      ctx.globalAlpha = Math.min(alpha, 1)
      ctx.drawImage(sprite, P.sx[i] - size, P.sy[i] - size, size * 2, size * 2)
    }
    ctx.globalAlpha = 1
    ctx.globalCompositeOperation = 'source-over'

    if (!reduceMotion) rafId = requestAnimationFrame(frame)
  }

  rafId = requestAnimationFrame(frame)

  return () => {
    window.removeEventListener('resize', resize)
    if (rafId) cancelAnimationFrame(rafId)
  }
}
