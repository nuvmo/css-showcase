/* eslint-disable */
const DEMOS = [

  /* ──────────────────────────────────────────────
     KEYFRAME DEMOS
  ────────────────────────────────────────────── */

  {
    id: 'morphing-blob',
    title: 'Morphing Blob',
    category: 'keyframe',
    description: 'Layered blobs morph between organic shapes using border-radius animation and mix-blend-mode.',
    tags: ['border-radius', '@keyframes', 'mix-blend-mode', 'gradients'],
    html: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>Morphing Blob</title>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }

  body {
    background: #07070f;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    overflow: hidden;
  }

  .scene {
    position: relative;
    width: min(55vmin, 380px);
    height: min(55vmin, 380px);
  }

  /* Each blob has a different duration and direction to avoid periodicity */
  .blob {
    position: absolute;
    inset: 0;
    animation: morph var(--dur, 8s) ease-in-out infinite;
    animation-delay: var(--delay, 0s);
  }

  .blob:nth-child(1) {
    background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
    --dur: 8s;
  }
  .blob:nth-child(2) {
    background: linear-gradient(135deg, #ec4899 0%, #f43f5e 100%);
    mix-blend-mode: screen;
    --dur: 11s;
    animation-direction: reverse;
    scale: 0.8;
  }
  .blob:nth-child(3) {
    background: linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%);
    mix-blend-mode: screen;
    --dur: 14s;
    --delay: -4s;
    scale: 0.65;
  }

  @keyframes morph {
    0%,  100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
    20%        { border-radius: 40% 60% 60% 40% / 40% 60% 40% 60%; }
    40%        { border-radius: 30% 70% 50% 50% / 50% 40% 60% 50%; }
    60%        { border-radius: 50% 50% 30% 70% / 30% 50% 70% 40%; }
    80%        { border-radius: 70% 30% 50% 50% / 60% 70% 30% 40%; }
  }

  .label {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgba(255,255,255,0.9);
    font: 700 clamp(0.9rem, 5vmin, 1.3rem)/1 system-ui, sans-serif;
    letter-spacing: 0.2em;
    text-shadow: 0 0 40px rgba(255,255,255,0.6);
    pointer-events: none;
    text-transform: uppercase;
  }
</style>
</head>
<body>
  <div class="scene">
    <div class="blob"></div>
    <div class="blob"></div>
    <div class="blob"></div>
    <div class="label">Morphing</div>
  </div>
</body>
</html>`
  },

  {
    id: 'wave-text',
    title: 'Wave Text',
    category: 'keyframe',
    description: 'Each letter animates independently with a staggered delay, creating a fluid wave effect across the text.',
    tags: ['stagger', 'animation-delay', 'calc()', '@keyframes', 'custom properties'],
    html: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>Wave Text</title>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }

  body {
    background: #06060f;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 48px;
    min-height: 100vh;
    overflow: hidden;
  }

  .wave-text {
    display: flex;
    gap: 0.04em;
    font-size: clamp(2rem, 8vw, 5rem);
    font-weight: 900;
    font-family: system-ui, sans-serif;
  }

  .wave-text span {
    display: inline-block;
    animation: wave 1.8s ease-in-out infinite;
    /* --i is set via inline style in the HTML below */
    animation-delay: calc(var(--i) * 0.08s);
    background: linear-gradient(135deg, #818cf8, #c084fc, #f472b6);
    background-size: 200% auto;
    background-position: calc(var(--i) * 15%) 0;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .wave-text.line2 span {
    animation-name: wave2;
    background-image: linear-gradient(135deg, #34d399, #06b6d4, #3b82f6);
    font-size: clamp(1rem, 4vw, 2.2rem);
    letter-spacing: 0.4em;
    font-weight: 300;
  }

  @keyframes wave {
    0%, 100% { transform: translateY(0)    rotate(0deg); }
    25%       { transform: translateY(-35%) rotate(-4deg); }
    75%       { transform: translateY(15%)  rotate(2deg); }
  }

  @keyframes wave2 {
    0%, 100% { transform: translateY(0); opacity: 1; }
    50%       { transform: translateY(-20%); opacity: 0.5; }
  }
</style>
</head>
<body>
  <div class="wave-text">
    <span style="--i:0">C</span><span style="--i:1">S</span><span style="--i:2">S</span>
  </div>
  <div class="wave-text line2">
    <span style="--i:0">I</span><span style="--i:1">S</span>
    <span style="--i:2">&nbsp;</span>
    <span style="--i:3">A</span><span style="--i:4">W</span><span style="--i:5">E</span><span style="--i:6">S</span><span style="--i:7">O</span><span style="--i:8">M</span><span style="--i:9">E</span>
  </div>
</body>
</html>`
  },

  {
    id: 'neon-spinner',
    title: 'Neon Spinner',
    category: 'keyframe',
    description: 'Concentric rings with neon glow, each spinning at a different speed and direction using box-shadow and @keyframes.',
    tags: ['box-shadow', '@keyframes', 'animation-direction', 'conic-gradient'],
    html: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>Neon Spinner</title>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }

  body {
    background: #04040c;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    overflow: hidden;
  }

  .spinner {
    position: relative;
    width: min(50vmin, 300px);
    height: min(50vmin, 300px);
  }

  .ring {
    position: absolute;
    border-radius: 50%;
    border: 3px solid transparent;
    inset: var(--inset);
    animation: spin var(--dur) linear infinite;
    animation-direction: var(--dir, normal);
  }

  /* Conic gradient for the ring color — tail trails behind direction of travel */
  .ring::before {
    content: '';
    position: absolute;
    inset: -3px;
    border-radius: 50%;
    background: conic-gradient(from 0deg, transparent 70%, var(--color) 100%);
    -webkit-mask: radial-gradient(farthest-side, transparent calc(100% - 3px), white calc(100% - 3px));
    mask: radial-gradient(farthest-side, transparent calc(100% - 3px), white calc(100% - 3px));
    filter: blur(0.5px);
  }

  /* Reverse-spinning rings need the gradient mirrored so the tail still trails */
  .ring:nth-child(2)::before,
  .ring:nth-child(4)::before {
    background: conic-gradient(from 0deg, var(--color) 0%, transparent 30%, transparent 100%);
  }

  /* Glow dot at the "head" of each ring */
  .ring::after {
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    background: var(--color);
    border-radius: 50%;
    top: -5px;
    left: 50%;
    transform: translateX(-50%);
    box-shadow: 0 0 10px 4px var(--color), 0 0 20px 8px var(--glow);
    filter: blur(0.5px);
  }

  .ring:nth-child(1) { --inset: 0;   --color: #818cf8; --glow: rgba(129,140,248,0.4); --dur: 3s;   }
  .ring:nth-child(2) { --inset: 20%; --color: #f472b6; --glow: rgba(244,114,182,0.4); --dur: 2.2s; --dir: reverse; }
  .ring:nth-child(3) { --inset: 38%; --color: #34d399; --glow: rgba(52,211,153,0.4);  --dur: 1.6s; }
  .ring:nth-child(4) { --inset: 37%; --color: #fb923c; --glow: rgba(251,146,60,0.4);  --dur: 1.1s; --dir: reverse; }
  .ring:nth-child(5) { --inset: 44%; --color: #38bdf8; --glow: rgba(56,189,248,0.4);  --dur: 0.8s; }

  @keyframes spin {
    to { transform: rotate(360deg); }
  }

  /* Subtle background pulse */
  .backdrop {
    position: absolute;
    inset: 15%;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(129,140,248,0.05) 0%, transparent 70%);
    animation: pulse 3s ease-in-out infinite;
  }

  @keyframes pulse {
    0%, 100% { opacity: 0.4; transform: scale(1);    }
    50%       { opacity: 1;   transform: scale(1.15); }
  }
</style>
</head>
<body>
  <div class="spinner">
    <div class="backdrop"></div>
    <div class="ring"></div>
    <div class="ring"></div>
    <div class="ring"></div>
    <div class="ring"></div>
    <div class="ring"></div>
  </div>
</body>
</html>`
  },

  {
    id: 'typewriter',
    title: 'Typewriter Effect',
    category: 'keyframe',
    description: 'A pure CSS typewriter that cycles through phrases using steps() timing, with a blinking cursor.',
    tags: ['steps()', 'overflow: hidden', 'white-space', 'visibility', 'animation-delay'],
    html: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>Typewriter</title>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }

  body {
    background: #05050d;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 32px;
    min-height: 100vh;
    font-family: 'SF Mono', 'Fira Code', monospace;
    overflow: hidden;
  }

  .label {
    color: #64748b;
    font-size: clamp(0.9rem, 2.5vw, 1.2rem);
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }
  .label span { color: #34d399; }

  /* Fixed stage — phrases stack absolutely inside, no layout shift */
  .stage {
    position: relative;
    height: clamp(2.2rem, 7vw, 3.8rem);
    width: min(95vw, 560px);
  }

  .phrase {
    position: absolute;
    top: 0; left: 0;
    font-size: clamp(1.5rem, 5.5vw, 3rem);
    font-weight: 700;
    color: #e2e8f0;
    overflow: hidden;
    white-space: nowrap;
    width: 0;
    visibility: hidden;
    /* border-right is the cursor; box-sizing:content-box keeps it outside the overflow clip */
    border-right: 3px solid #818cf8;
    box-sizing: content-box;
  }

  /*
   * Each phrase owns a 5 s slot in a 20 s cycle.
   * Stagger with positive animation-delay so they activate sequentially.
   * Both the typing keyframe and the blink keyframe share the same delay
   * so the cursor only appears when the phrase is visible.
   */
  .p1 { animation: tw1 20s linear infinite,            blink 0.7s step-end infinite; }
  .p2 { animation: tw2 20s linear infinite,            blink 0.7s step-end infinite; animation-delay:  5s; }
  .p3 { animation: tw3 20s linear infinite,            blink 0.7s step-end infinite; animation-delay: 10s; }
  .p4 { animation: tw4 20s linear infinite,            blink 0.7s step-end infinite; animation-delay: 15s; }

  @keyframes blink {
    0%, 100% { border-right-color: #818cf8; }
    50%       { border-right-color: transparent; }
  }

  /*
   * Slot structure (% of 20 s):
   *   0 %  – 7.5 %  type   (1.5 s)  steps(N, end)
   *   7.5 % – 20 %  hold   (2.5 s)  step-end
   *  20 %  – 25 %  erase  (1.0 s)  steps(N, end)  (width N→0)
   *  25 %  – 100 % hidden (15 s)
   */

  /* "pure CSS magic" = 14 chars */
  @keyframes tw1 {
    0%   { width: 0;    visibility: visible; animation-timing-function: steps(14, end); }
    7.5% { width: 14ch; animation-timing-function: step-end; }
    20%  { width: 14ch; animation-timing-function: steps(14, end); }
    25%  { width: 0;    visibility: hidden; }
    100% { width: 0;    visibility: hidden; }
  }
  /* "scroll-driven" = 13 chars */
  @keyframes tw2 {
    0%   { width: 0;    visibility: visible; animation-timing-function: steps(13, end); }
    7.5% { width: 13ch; animation-timing-function: step-end; }
    20%  { width: 13ch; animation-timing-function: steps(13, end); }
    25%  { width: 0;    visibility: hidden; }
    100% { width: 0;    visibility: hidden; }
  }
  /* "just one div" = 12 chars */
  @keyframes tw3 {
    0%   { width: 0;    visibility: visible; animation-timing-function: steps(12, end); }
    7.5% { width: 12ch; animation-timing-function: step-end; }
    20%  { width: 12ch; animation-timing-function: steps(12, end); }
    25%  { width: 0;    visibility: hidden; }
    100% { width: 0;    visibility: hidden; }
  }
  /* "zero JavaScript" = 15 chars */
  @keyframes tw4 {
    0%   { width: 0;    visibility: visible; animation-timing-function: steps(15, end); }
    7.5% { width: 15ch; animation-timing-function: step-end; }
    20%  { width: 15ch; animation-timing-function: steps(15, end); }
    25%  { width: 0;    visibility: hidden; }
    100% { width: 0;    visibility: hidden; }
  }

  .hint {
    font-size: 0.75rem;
    color: #8496b4;
    letter-spacing: 0.06em;
  }
</style>
</head>
<body>
  <p class="label">CSS can be <span>→</span></p>
  <div class="stage">
    <div class="phrase p1">pure CSS magic</div>
    <div class="phrase p2">scroll-driven</div>
    <div class="phrase p3">just one div</div>
    <div class="phrase p4">zero JavaScript</div>
  </div>
  <p class="hint">Pure CSS · steps() timing · no JavaScript</p>
</body>
</html>`
  },

  /* ──────────────────────────────────────────────
     SCROLL-DRIVEN DEMOS
  ────────────────────────────────────────────── */

  {
    id: 'scroll-progress',
    title: 'Scroll Progress',
    category: 'scroll',
    description: 'A reading progress bar and staggered section reveals driven entirely by scroll position — no JavaScript.',
    tags: ['animation-timeline: scroll()', 'animation-timeline: view()', 'scroll-driven', '@keyframes', 'animation-range'],
    needsScroll: true,
    html: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>Scroll Progress</title>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }

  :root { color-scheme: dark; }

  body {
    background: #06060f;
    color: #e2e8f0;
    font-family: system-ui, sans-serif;
    padding: 0 20px 80px;
  }

  /* ── Progress bar ── */
  .progress-bar {
    position: fixed;
    top: 0;
    left: 0;
    height: 3px;
    width: 100%;
    background: linear-gradient(90deg, #818cf8, #c084fc, #f472b6);
    transform-origin: left;
    transform: scaleX(0);
    z-index: 100;

    animation: progress linear;
    animation-timeline: scroll(root);
  }

  @keyframes progress {
    to { transform: scaleX(1); }
  }

  /* ── Layout ── */
  header {
    text-align: center;
    padding: 80px 0 60px;
    position: sticky;
    top: 0;
    background: rgba(6,6,15,0.9);
    backdrop-filter: blur(10px);
    z-index: 10;
    margin: 0 -20px;
    padding-left: 20px;
    padding-right: 20px;
  }

  header h1 {
    font-size: clamp(1.8rem, 5vw, 3rem);
    font-weight: 800;
    background: linear-gradient(135deg, #818cf8, #c084fc);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 8px;
  }

  header p {
    color: #64748b;
    font-size: 0.9rem;
  }

  /* ── Cards that animate in on scroll ── */
  .cards {
    display: grid;
    gap: 20px;
    max-width: 660px;
    margin: 40px auto 0;
  }

  .card {
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255,255,255,0.07);
    border-radius: 16px;
    padding: 28px;

    /* Animate in as card enters viewport */
    animation: reveal-card linear both;
    animation-timeline: view();
    animation-range: entry 0% entry 40%;
  }

  @keyframes reveal-card {
    from {
      opacity: 0;
      transform: translateY(40px) scale(0.97);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  .card h2 {
    font-size: 1.1rem;
    font-weight: 700;
    margin-bottom: 10px;
    color: #c084fc;
  }

  .card p {
    color: #64748b;
    font-size: 0.9rem;
    line-height: 1.7;
  }

  .card .bar {
    margin-top: 16px;
    height: 4px;
    background: rgba(255,255,255,0.06);
    border-radius: 2px;
    overflow: hidden;
  }

  .card .bar-fill {
    height: 100%;
    background: linear-gradient(90deg, #818cf8, #c084fc);
    border-radius: 2px;

    animation: fill-bar linear both;
    animation-timeline: view();
    animation-range: entry 20% entry 70%;
    transform-origin: left;
    transform: scaleX(0);
  }

  @keyframes fill-bar {
    to { transform: scaleX(1); }
  }

  .scroll-hint {
    text-align: center;
    color: #334155;
    font-size: 0.8rem;
    margin-top: 16px;
    letter-spacing: 0.05em;
    animation: bounce-y 1.5s ease-in-out infinite;
  }

  @keyframes bounce-y {
    0%, 100% { transform: translateY(0); }
    50%       { transform: translateY(6px); }
  }
</style>
</head>
<body>
  <div class="progress-bar"></div>

  <header>
    <h1>Scroll-Driven Animations</h1>
    <p>Using animation-timeline: scroll() and view()</p>
    <p class="scroll-hint">↓ Scroll down to see animations</p>
  </header>

  <div class="cards">
    <div class="card">
      <h2>animation-timeline: scroll()</h2>
      <p>Links an animation's progress to a scroll container. As you scroll, the animation advances — no JavaScript event listeners needed. The progress bar above uses this.</p>
      <div class="bar"><div class="bar-fill"></div></div>
    </div>

    <div class="card">
      <h2>animation-timeline: view()</h2>
      <p>Triggers animations based on an element's position in the viewport. This card animated in as it entered the visible area. Replaces Intersection Observer for many use cases.</p>
      <div class="bar"><div class="bar-fill"></div></div>
    </div>

    <div class="card">
      <h2>animation-range</h2>
      <p>Fine-tunes exactly when an animation starts and ends relative to the scroll position. Ranges like <code>entry 0% entry 40%</code> mean "animate as the element enters the viewport".</p>
      <div class="bar"><div class="bar-fill"></div></div>
    </div>

    <div class="card">
      <h2>No JavaScript Required</h2>
      <p>Everything on this page — the progress bar, the card reveals, the progress bars inside cards — is driven purely by CSS scroll-linked animations. Zero event listeners.</p>
      <div class="bar"><div class="bar-fill"></div></div>
    </div>

    <div class="card">
      <h2>Scroll Timeline API</h2>
      <p>Supported in Chrome 115+, Firefox 110+, and Safari 15.4+. The future of scroll animations is declarative, performant, and entirely in CSS.</p>
      <div class="bar"><div class="bar-fill"></div></div>
    </div>

    <div class="card">
      <h2>Performance</h2>
      <p>Because these run off the main thread (no JS scroll handlers), they're silky smooth even on complex pages. The browser compositor drives them directly.</p>
      <div class="bar"><div class="bar-fill"></div></div>
    </div>
  </div>
</body>
</html>`
  },

  {
    id: 'scroll-parallax',
    title: 'Parallax Layers',
    category: 'scroll',
    description: 'Multiple background layers move at different rates as you scroll, creating depth using CSS scroll-driven animations.',
    tags: ['animation-timeline: scroll()', 'translate', 'z-index', 'layering', 'parallax'],
    needsScroll: true,
    html: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>Parallax</title>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }

  body {
    background: #020208;
    min-height: 400vh;
    font-family: system-ui, sans-serif;
    overflow-x: hidden;
  }

  /* ── Fixed scene ── */
  .scene {
    position: fixed;
    inset: 0;
    overflow: hidden;
  }

  /* Stars — fastest layer */
  .stars {
    position: absolute;
    inset: -50%;
    background-image:
      radial-gradient(1px 1px at 20%  30%, rgba(255,255,255,0.8) 0%, transparent 0%),
      radial-gradient(1px 1px at 50%  10%, rgba(255,255,255,0.6) 0%, transparent 0%),
      radial-gradient(1px 1px at 75%  55%, rgba(255,255,255,0.9) 0%, transparent 0%),
      radial-gradient(1px 1px at 10%  70%, rgba(255,255,255,0.5) 0%, transparent 0%),
      radial-gradient(1px 1px at 90%  25%, rgba(255,255,255,0.7) 0%, transparent 0%),
      radial-gradient(2px 2px at 35%  80%, rgba(255,255,255,0.4) 0%, transparent 0%),
      radial-gradient(1px 1px at 60%  45%, rgba(255,255,255,0.8) 0%, transparent 0%),
      radial-gradient(1px 1px at 85%  90%, rgba(255,255,255,0.6) 0%, transparent 0%),
      radial-gradient(2px 2px at 15%  15%, rgba(255,255,255,0.5) 0%, transparent 0%),
      radial-gradient(1px 1px at 40%  60%, rgba(255,255,255,0.7) 0%, transparent 0%),
      radial-gradient(1px 1px at 70%  35%, rgba(255,255,255,0.9) 0%, transparent 0%),
      radial-gradient(1px 1px at 25%  50%, rgba(255,255,255,0.4) 0%, transparent 0%),
      radial-gradient(1px 1px at 55%  75%, rgba(255,255,255,0.8) 0%, transparent 0%),
      radial-gradient(2px 2px at 80%  15%, rgba(255,255,255,0.3) 0%, transparent 0%),
      radial-gradient(1px 1px at 45%  90%, rgba(255,255,255,0.6) 0%, transparent 0%);
    animation: parallax-fast linear;
    animation-timeline: scroll(root);
  }
  @keyframes parallax-fast { to { transform: translateY(-60%); } }

  /* Nebula cloud — medium layer */
  .nebula {
    position: absolute;
    inset: 0;
    background:
      radial-gradient(ellipse 60% 40% at 30% 40%, rgba(99,102,241,0.15) 0%, transparent 60%),
      radial-gradient(ellipse 50% 35% at 70% 60%, rgba(168,85,247,0.12) 0%, transparent 60%),
      radial-gradient(ellipse 40% 50% at 50% 20%, rgba(6,182,212,0.08) 0%, transparent 60%);
    animation: parallax-medium linear;
    animation-timeline: scroll(root);
  }
  @keyframes parallax-medium { to { transform: translateY(-30%); } }

  /* Distant mountains — slow layer */
  .mountains-far {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 45%;
    background:
      radial-gradient(ellipse 30% 100% at 15% 100%, #1a1a3e 0%, transparent 70%),
      radial-gradient(ellipse 25% 90%  at 40% 100%, #16163a 0%, transparent 65%),
      radial-gradient(ellipse 35% 95%  at 65% 100%, #1a1a3e 0%, transparent 72%),
      radial-gradient(ellipse 28% 85%  at 85% 100%, #16163a 0%, transparent 60%);
    animation: parallax-slow linear;
    animation-timeline: scroll(root);
  }
  @keyframes parallax-slow { to { transform: translateY(-12%); } }

  /* Near mountains — barely moves */
  .mountains-near {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 30%;
    background:
      radial-gradient(ellipse 28% 110% at 10%  100%, #0d0d2e 0%, transparent 70%),
      radial-gradient(ellipse 22% 95%  at 35%  100%, #0a0a28 0%, transparent 65%),
      radial-gradient(ellipse 32% 105% at 60%  100%, #0d0d2e 0%, transparent 72%),
      radial-gradient(ellipse 26% 90%  at 82%  100%, #0a0a28 0%, transparent 62%),
      radial-gradient(ellipse 30% 100% at 100% 100%, #0d0d2e 0%, transparent 70%);
    animation: parallax-near linear;
    animation-timeline: scroll(root);
  }
  @keyframes parallax-near { to { transform: translateY(-5%); } }

  /* Ground — fixed */
  .ground {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 12%;
    background: linear-gradient(to top, #060618, #0a0a24);
  }

  /* Overlay text */
  .text-layer {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
    pointer-events: none;
    animation: text-parallax linear;
    animation-timeline: scroll(root);
  }

  @keyframes text-parallax { to { transform: translateY(-20%); opacity: 0; } }

  .text-layer h1 {
    font-size: clamp(2rem, 6vw, 4rem);
    font-weight: 900;
    color: rgba(255,255,255,0.9);
    text-shadow: 0 0 60px rgba(129,140,248,0.5);
    letter-spacing: -0.02em;
  }

  .text-layer p {
    color: rgba(255,255,255,0.3);
    font-size: clamp(0.8rem, 2vw, 1rem);
    letter-spacing: 0.2em;
    text-transform: uppercase;
  }

  /* Scroll indicator */
  .scroll-hint {
    position: fixed;
    bottom: 32px;
    left: 50%;
    transform: translateX(-50%);
    color: rgba(255,255,255,0.25);
    font-size: 0.75rem;
    letter-spacing: 0.1em;
    font-family: system-ui, sans-serif;
    animation: fade-hint linear;
    animation-timeline: scroll(root);
  }
  @keyframes fade-hint { 10% { opacity: 0; } to { opacity: 0; } }
</style>
</head>
<body>
  <div class="scene">
    <div class="stars"></div>
    <div class="nebula"></div>
    <div class="mountains-far"></div>
    <div class="mountains-near"></div>
    <div class="ground"></div>
    <div class="text-layer">
      <h1>Parallax</h1>
      <p>↓ Scroll to explore</p>
    </div>
  </div>
  <div class="scroll-hint">↓ Scroll down</div>
</body>
</html>`
  },

  /* ──────────────────────────────────────────────
     3D TRANSFORM DEMOS
  ────────────────────────────────────────────── */

  {
    id: 'css-cube',
    title: 'Rotating CSS Cube',
    category: '3d',
    description: 'A 3D cube built with six faces using CSS transform-style: preserve-3d, rotating continuously on multiple axes.',
    tags: ['transform-style: preserve-3d', 'perspective', 'rotateX()', 'rotateY()', 'backface-visibility'],
    html: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>CSS Cube</title>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }

  body {
    background: #05050e;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    overflow: hidden;
  }

  .scene {
    perspective: 600px;
    perspective-origin: 50% 50%;
  }

  .cube {
    width: min(30vmin, 180px);
    height: min(30vmin, 180px);
    position: relative;
    transform-style: preserve-3d;
    animation: rotate-cube 8s linear infinite;
  }

  @keyframes rotate-cube {
    0%   { transform: rotateX(-20deg) rotateY(0deg);    }
    100% { transform: rotateX(-20deg) rotateY(360deg);  }
  }

  .face {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: clamp(0.7rem, 3vmin, 1rem);
    font-weight: 700;
    font-family: system-ui, sans-serif;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    border: 2px solid rgba(255,255,255,0.15);
    backdrop-filter: blur(2px);
  }

  /* s = half the cube size */
  .face.front  { background: rgba(99,102,241,0.35);  transform: translateZ(calc(min(15vmin, 90px)));  color: #a5b4fc; }
  .face.back   { background: rgba(236,72,153,0.35);  transform: rotateY(180deg) translateZ(calc(min(15vmin, 90px))); color: #f9a8d4; }
  .face.left   { background: rgba(52,211,153,0.35);  transform: rotateY(-90deg) translateZ(calc(min(15vmin, 90px))); color: #6ee7b7; }
  .face.right  { background: rgba(251,146,60,0.35);  transform: rotateY(90deg)  translateZ(calc(min(15vmin, 90px))); color: #fcd34d; }
  .face.top    { background: rgba(56,189,248,0.35);  transform: rotateX(90deg)  translateZ(calc(min(15vmin, 90px))); color: #7dd3fc; }
  .face.bottom { background: rgba(192,132,252,0.35); transform: rotateX(-90deg) translateZ(calc(min(15vmin, 90px))); color: #d8b4fe; }

  /* Shadow on the floor */
  .shadow {
    position: absolute;
    width: min(30vmin, 180px);
    height: min(10vmin, 60px);
    background: radial-gradient(ellipse, rgba(99,102,241,0.3) 0%, transparent 70%);
    transform: translateY(calc(min(20vmin, 120px)));
    animation: shadow-pulse 8s linear infinite;
    filter: blur(8px);
  }

  @keyframes shadow-pulse {
    0%,100% { opacity: 0.8; transform: translateY(calc(min(20vmin, 120px))) scaleX(1);   }
    50%      { opacity: 0.5; transform: translateY(calc(min(20vmin, 120px))) scaleX(0.7); }
  }
</style>
</head>
<body>
  <div class="scene">
    <div class="shadow"></div>
    <div class="cube">
      <div class="face front">Front</div>
      <div class="face back">Back</div>
      <div class="face left">Left</div>
      <div class="face right">Right</div>
      <div class="face top">Top</div>
      <div class="face bottom">Bottom</div>
    </div>
  </div>
</body>
</html>`
  },

  {
    id: 'card-flip',
    title: '3D Card Flip',
    category: '3d',
    description: 'Cards flip in 3D on hover to reveal a back face, using backface-visibility and transform-style: preserve-3d.',
    tags: ['backface-visibility', 'rotateY()', 'transform-style: preserve-3d', 'perspective', ':hover transition'],
    html: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>Card Flip</title>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }

  body {
    background: #060610;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    gap: 28px;
    flex-wrap: wrap;
    padding: 40px 24px;
    font-family: system-ui, sans-serif;
  }

  .card-wrap {
    perspective: 800px;
  }

  .card {
    width: min(38vmin, 200px);
    height: min(52vmin, 280px);
    position: relative;
    transform-style: preserve-3d;
    transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
  }

  .card-wrap:hover .card,
  .card-wrap:focus-within .card {
    transform: rotateY(180deg);
  }

  .face {
    position: absolute;
    inset: 0;
    border-radius: 16px;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
    padding: 24px;
    border: 1px solid rgba(255,255,255,0.08);
  }

  .front {
    background: linear-gradient(145deg, #0f0f24 0%, #1a1a38 100%);
  }

  .back {
    background: linear-gradient(145deg, #1a1a38 0%, #0f0f24 100%);
    transform: rotateY(180deg);
  }

  .avatar {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    border: 2px solid rgba(255,255,255,0.1);
  }

  .name {
    font-size: clamp(0.9rem, 3vmin, 1.1rem);
    font-weight: 700;
    color: #e2e8f0;
    text-align: center;
  }

  .role {
    font-size: clamp(0.7rem, 2vmin, 0.8rem);
    color: #64748b;
    text-align: center;
    letter-spacing: 0.05em;
  }

  .flip-hint {
    font-size: 0.65rem;
    color: #334155;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    margin-top: 8px;
  }

  .stat {
    text-align: center;
  }

  .stat-value {
    font-size: clamp(1.4rem, 5vmin, 2rem);
    font-weight: 800;
    background: linear-gradient(135deg, var(--c1), var(--c2));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .stat-label {
    font-size: 0.7rem;
    color: #475569;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .divider {
    width: 40px;
    height: 1px;
    background: rgba(255,255,255,0.07);
    margin: 4px 0;
  }

  /* Card accent colors */
  .card:nth-child(1) .avatar { background: rgba(129,140,248,0.15); }
  .card:nth-child(2) .avatar { background: rgba(244,114,182,0.15); }
  .card:nth-child(3) .avatar { background: rgba(52,211,153,0.15);  }
</style>
</head>
<body>
  <div class="card-wrap" tabindex="0">
    <div class="card">
      <div class="face front">
        <div class="avatar">🎨</div>
        <div class="name">Alice Chen</div>
        <div class="role">UI Designer</div>
        <div class="flip-hint">Hover to reveal →</div>
      </div>
      <div class="face back">
        <div class="stat">
          <div class="stat-value" style="--c1:#818cf8;--c2:#c084fc">142</div>
          <div class="stat-label">Projects</div>
        </div>
        <div class="divider"></div>
        <div class="stat">
          <div class="stat-value" style="--c1:#c084fc;--c2:#f472b6">4.9★</div>
          <div class="stat-label">Rating</div>
        </div>
        <div class="divider"></div>
        <div class="stat">
          <div class="stat-value" style="--c1:#818cf8;--c2:#38bdf8">7yr</div>
          <div class="stat-label">Experience</div>
        </div>
      </div>
    </div>
  </div>

  <div class="card-wrap" tabindex="0">
    <div class="card">
      <div class="face front">
        <div class="avatar">⚡</div>
        <div class="name">Jordan Park</div>
        <div class="role">Frontend Dev</div>
        <div class="flip-hint">Hover to reveal →</div>
      </div>
      <div class="face back">
        <div class="stat">
          <div class="stat-value" style="--c1:#f472b6;--c2:#fb923c">2.4k</div>
          <div class="stat-label">Commits</div>
        </div>
        <div class="divider"></div>
        <div class="stat">
          <div class="stat-value" style="--c1:#fb923c;--c2:#fde68a">98%</div>
          <div class="stat-label">Coverage</div>
        </div>
        <div class="divider"></div>
        <div class="stat">
          <div class="stat-value" style="--c1:#f472b6;--c2:#c084fc">5yr</div>
          <div class="stat-label">Experience</div>
        </div>
      </div>
    </div>
  </div>

  <div class="card-wrap" tabindex="0">
    <div class="card">
      <div class="face front">
        <div class="avatar">🔬</div>
        <div class="name">Sam Rivera</div>
        <div class="role">Data Scientist</div>
        <div class="flip-hint">Hover to reveal →</div>
      </div>
      <div class="face back">
        <div class="stat">
          <div class="stat-value" style="--c1:#34d399;--c2:#06b6d4">38</div>
          <div class="stat-label">Models</div>
        </div>
        <div class="divider"></div>
        <div class="stat">
          <div class="stat-value" style="--c1:#06b6d4;--c2:#3b82f6">94%</div>
          <div class="stat-label">Accuracy</div>
        </div>
        <div class="divider"></div>
        <div class="stat">
          <div class="stat-value" style="--c1:#34d399;--c2:#818cf8">3yr</div>
          <div class="stat-label">Experience</div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`
  },

  {
    id: 'orbit-scene',
    title: '3D Orbit Scene',
    category: '3d',
    description: 'Planets orbiting in different planes using nested 3D transforms, all with CSS animation and preserve-3d.',
    tags: ['transform-style: preserve-3d', 'perspective', 'rotateX()', 'nested transforms', '@keyframes'],
    html: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>Orbit Scene</title>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }

  body {
    background: #03030a;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    overflow: hidden;
  }

  .scene {
    perspective: 800px;
  }

  .system {
    position: relative;
    width: min(70vmin, 400px);
    height: min(70vmin, 400px);
    transform-style: preserve-3d;
    animation: tilt 20s ease-in-out infinite;
  }

  @keyframes tilt {
    0%,100% { transform: rotateX(30deg) rotateZ(0deg);   }
    50%      { transform: rotateX(45deg) rotateZ(10deg);  }
  }

  /* Sun */
  .sun {
    position: absolute;
    top: 50%; left: 50%;
    width: min(9vmin, 52px);
    height: min(9vmin, 52px);
    margin: calc(min(-4.5vmin, -26px));
    border-radius: 50%;
    background: radial-gradient(circle at 35% 35%, #fde68a, #f97316 60%, #dc2626);
    box-shadow:
      0 0 20px 8px rgba(251,191,36,0.5),
      0 0 60px 20px rgba(249,115,22,0.3),
      0 0 100px 40px rgba(220,38,38,0.15);
    animation: sun-pulse 3s ease-in-out infinite;
  }

  @keyframes sun-pulse {
    0%,100% { box-shadow: 0 0 20px 8px rgba(251,191,36,0.5), 0 0 60px 20px rgba(249,115,22,0.3); }
    50%      { box-shadow: 0 0 30px 12px rgba(251,191,36,0.7), 0 0 80px 30px rgba(249,115,22,0.4); }
  }

  /* Orbit ring (the tilted plane) */
  .orbit {
    position: absolute;
    top: 50%; left: 50%;
    transform-style: preserve-3d;
    transform: translate(-50%, -50%) rotateX(var(--tilt, 70deg));
  }

  .orbit-ring {
    position: absolute;
    top: 50%; left: 50%;
    width: var(--r);
    height: var(--r);
    margin: calc(var(--r) / -2);
    border-radius: 50%;
    border: 1px solid rgba(255,255,255,0.07);
  }

  .orbit-path {
    position: absolute;
    top: 50%; left: 50%;
    width: var(--r);
    height: var(--r);
    margin: calc(var(--r) / -2);
    animation: orbit-spin var(--dur) linear infinite;
    animation-direction: var(--dir, normal);
    transform-style: preserve-3d;
  }

  @keyframes orbit-spin {
    to { transform: rotate(360deg); }
  }

  .planet {
    position: absolute;
    top: -1px;
    left: 50%;
    transform: translateX(-50%);
    width: var(--size, 20px);
    height: var(--size, 20px);
    border-radius: 50%;
    background: var(--planet-bg);
    box-shadow: 0 0 var(--glow-size, 8px) var(--glow-color, rgba(255,255,255,0.3));
  }

  /* Mercury */
  .orbit:nth-child(2) {
    --tilt: 75deg;
  }
  .orbit:nth-child(2) .orbit-path {
    --r: min(20vmin, 115px);
    --dur: 4s;
  }
  .orbit:nth-child(2) .planet {
    --size: min(2.5vmin, 14px);
    --planet-bg: radial-gradient(circle at 35% 35%, #94a3b8, #475569);
    --glow-size: 6px;
    --glow-color: rgba(148,163,184,0.3);
  }
  .orbit:nth-child(2) .orbit-ring { --r: min(20vmin, 115px); }

  /* Venus */
  .orbit:nth-child(3) {
    --tilt: 68deg;
  }
  .orbit:nth-child(3) .orbit-path {
    --r: min(30vmin, 175px);
    --dur: 7s;
    --dir: reverse;
  }
  .orbit:nth-child(3) .planet {
    --size: min(3.5vmin, 20px);
    --planet-bg: radial-gradient(circle at 35% 35%, #fde68a, #d97706);
    --glow-size: 10px;
    --glow-color: rgba(253,230,138,0.3);
  }
  .orbit:nth-child(3) .orbit-ring { --r: min(30vmin, 175px); }

  /* Earth */
  .orbit:nth-child(4) {
    --tilt: 72deg;
  }
  .orbit:nth-child(4) .orbit-path {
    --r: min(44vmin, 255px);
    --dur: 12s;
  }
  .orbit:nth-child(4) .planet {
    --size: min(3.8vmin, 22px);
    --planet-bg: radial-gradient(circle at 35% 35%, #60a5fa, #1d4ed8 50%, #166534);
    --glow-size: 12px;
    --glow-color: rgba(96,165,250,0.35);
  }
  .orbit:nth-child(4) .orbit-ring { --r: min(44vmin, 255px); }

  /* Mars */
  .orbit:nth-child(5) {
    --tilt: 65deg;
  }
  .orbit:nth-child(5) .orbit-path {
    --r: min(60vmin, 350px);
    --dur: 22s;
  }
  .orbit:nth-child(5) .planet {
    --size: min(3vmin, 17px);
    --planet-bg: radial-gradient(circle at 35% 35%, #fca5a5, #dc2626);
    --glow-size: 8px;
    --glow-color: rgba(220,38,38,0.3);
  }
  .orbit:nth-child(5) .orbit-ring { --r: min(60vmin, 350px); }
</style>
</head>
<body>
  <div class="scene">
    <div class="system">
      <div class="sun"></div>

      <div class="orbit">
        <div class="orbit-ring"></div>
        <div class="orbit-path"><div class="planet"></div></div>
      </div>

      <div class="orbit">
        <div class="orbit-ring"></div>
        <div class="orbit-path"><div class="planet"></div></div>
      </div>

      <div class="orbit">
        <div class="orbit-ring"></div>
        <div class="orbit-path"><div class="planet"></div></div>
      </div>

      <div class="orbit">
        <div class="orbit-ring"></div>
        <div class="orbit-path"><div class="planet"></div></div>
      </div>
    </div>
  </div>
</body>
</html>`
  },

  /* ──────────────────────────────────────────────
     INTERACTIVE DEMOS
  ────────────────────────────────────────────── */

  {
    id: 'ripple',
    title: 'Click Ripple',
    category: 'interactive',
    description: 'Each click spawns an expanding ripple. CSS handles the animation — JavaScript only places the element at cursor position.',
    tags: ['scale()', '@keyframes', 'pointer events', 'dynamic elements', 'opacity fade'],
    html: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>Click Ripple</title>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }

  body {
    background: #050510;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    cursor: crosshair;
    overflow: hidden;
    font-family: system-ui, sans-serif;
    user-select: none;
  }

  .hint {
    color: rgba(255,255,255,0.55);
    font-size: 0.85rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    pointer-events: none;
    transition: opacity 0.5s;
    position: absolute;
  }

  /* Ripples are injected here */
  .ripple-layer { position: fixed; inset: 0; pointer-events: none; }

  .ripple {
    position: absolute;
    border-radius: 50%;
    transform: translate(-50%, -50%) scale(0);
    animation: ripple-out 1.2s cubic-bezier(0, 0.4, 0.6, 1) forwards;
    pointer-events: none;
  }

  @keyframes ripple-out {
    0%   { transform: translate(-50%, -50%) scale(0);   opacity: 0.8; }
    80%  { opacity: 0.2; }
    100% { transform: translate(-50%, -50%) scale(1);   opacity: 0;   }
  }

  /* Grid background */
  body::before {
    content: '';
    position: fixed;
    inset: 0;
    background-image:
      linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px);
    background-size: 40px 40px;
    pointer-events: none;
  }

  /* Central target */
  .target {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    border: 1px solid rgba(255,255,255,0.06);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .target::before, .target::after {
    content: '';
    position: absolute;
    inset: -20px;
    border-radius: 50%;
    border: 1px solid rgba(255,255,255,0.04);
  }
  .target::after { inset: -40px; }

  .target-icon {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: rgba(255,255,255,0.15);
  }
</style>
</head>
<body>
  <div class="hint">Click anywhere</div>
  <div class="target">
    <div class="target-icon"></div>
  </div>
  <div class="ripple-layer" id="layer"></div>

  <script>
    const layer = document.getElementById('layer');
    const hint = document.querySelector('.hint');

    // Palette of ripple colors
    const colors = [
      ['rgba(129,140,248,', 'rgba(129,140,248,0.1)'],
      ['rgba(244,114,182,', 'rgba(244,114,182,0.1)'],
      ['rgba(52,211,153,',  'rgba(52,211,153,0.1)'],
      ['rgba(251,146,60,',  'rgba(251,146,60,0.1)'],
      ['rgba(56,189,248,',  'rgba(56,189,248,0.1)'],
    ];
    let colorIndex = 0;

    document.addEventListener('pointerdown', (e) => {
      hint.style.opacity = '0';

      const [rgb, faint] = colors[colorIndex % colors.length];
      colorIndex++;

      const size = Math.max(window.innerWidth, window.innerHeight) * 1.8;

      const r = document.createElement('div');
      r.className = 'ripple';
      r.style.cssText = \`
        left: \${e.clientX}px;
        top: \${e.clientY}px;
        width: \${size}px;
        height: \${size}px;
        background: radial-gradient(circle, \${rgb}0.3) 0%, \${faint} 40%, transparent 70%);
        border: 1.5px solid \${rgb}0.4);
      \`;

      layer.appendChild(r);
      r.addEventListener('animationend', () => r.remove());
    });
  </script>
</body>
</html>`
  },

  {
    id: 'magnetic-button',
    title: 'Magnetic Buttons',
    category: 'interactive',
    description: 'Buttons are attracted to the cursor when it moves nearby, then spring back on leave. CSS transitions do the easing.',
    tags: ['getBoundingClientRect()', 'translate()', 'CSS transition', 'mousemove', 'spring easing'],
    html: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>Magnetic Buttons</title>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }

  body {
    background: #04040e;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 36px;
    min-height: 100vh;
    font-family: system-ui, sans-serif;
    overflow: hidden;
  }

  .title {
    color: rgba(255,255,255,0.12);
    font-size: 0.75rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
  }

  .buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 28px;
    justify-content: center;
    padding: 20px;
  }

  .mag-btn {
    position: relative;
    padding: 14px 32px;
    border-radius: 100px;
    border: 1.5px solid var(--border-color);
    background: var(--bg-color);
    color: var(--text-color);
    font-size: 0.95rem;
    font-weight: 600;
    letter-spacing: 0.03em;
    cursor: pointer;
    transition: transform 0.5s cubic-bezier(0.23, 1, 0.32, 1),
                box-shadow 0.3s ease;
    will-change: transform;
    white-space: nowrap;
  }

  .mag-btn:hover {
    box-shadow: 0 8px 30px var(--glow-color);
  }

  .mag-btn-1 {
    --border-color: rgba(129,140,248,0.5);
    --bg-color: rgba(129,140,248,0.1);
    --text-color: #a5b4fc;
    --glow-color: rgba(129,140,248,0.25);
  }

  .mag-btn-2 {
    --border-color: rgba(244,114,182,0.5);
    --bg-color: rgba(244,114,182,0.1);
    --text-color: #f9a8d4;
    --glow-color: rgba(244,114,182,0.25);
  }

  .mag-btn-3 {
    --border-color: rgba(52,211,153,0.5);
    --bg-color: rgba(52,211,153,0.1);
    --text-color: #6ee7b7;
    --glow-color: rgba(52,211,153,0.25);
  }

  .mag-btn-4 {
    --border-color: rgba(251,146,60,0.5);
    --bg-color: rgba(251,146,60,0.1);
    --text-color: #fcd34d;
    --glow-color: rgba(251,146,60,0.25);
  }

  /* Inner span that tilts slightly */
  .mag-btn span {
    display: block;
    transition: transform 0.5s cubic-bezier(0.23, 1, 0.32, 1);
    pointer-events: none;
  }
</style>
</head>
<body>
  <p class="title">Move your cursor near the buttons</p>
  <div class="buttons">
    <button class="mag-btn mag-btn-1"><span>Magnetic</span></button>
    <button class="mag-btn mag-btn-2"><span>Attraction</span></button>
    <button class="mag-btn mag-btn-3"><span>Repulsion</span></button>
    <button class="mag-btn mag-btn-4"><span>Spring Back</span></button>
  </div>

  <script>
    const STRENGTH = 0.42;
    const RADIUS   = 100; /* px — how far the magnet activates */

    document.querySelectorAll('.mag-btn').forEach(btn => {
      const inner = btn.querySelector('span');

      document.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const cx   = rect.left + rect.width  / 2;
        const cy   = rect.top  + rect.height / 2;
        const dx   = e.clientX - cx;
        const dy   = e.clientY - cy;
        const dist = Math.hypot(dx, dy);

        if (dist < RADIUS) {
          const pull = (RADIUS - dist) / RADIUS;
          const tx   = dx * pull * STRENGTH;
          const ty   = dy * pull * STRENGTH;
          btn.style.transform   = \`translate(\${tx}px, \${ty}px)\`;
          inner.style.transform = \`translate(\${tx * 0.25}px, \${ty * 0.25}px)\`;
        } else {
          btn.style.transform   = '';
          inner.style.transform = '';
        }
      });

      btn.addEventListener('mouseleave', () => {
        btn.style.transform   = '';
        inner.style.transform = '';
      });
    });
  </script>
</body>
</html>`
  },

  {
    id: 'tilt-cards',
    title: '3D Tilt Gallery',
    category: 'interactive',
    description: 'Cards tilt in 3D perspective following the cursor. A specular highlight tracks the light direction using CSS variables and JS.',
    tags: ['perspective', 'rotateX()', 'rotateY()', 'CSS variables', 'mousemove', 'specular highlight'],
    html: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>3D Tilt Gallery</title>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }

  body {
    background: #050510;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 28px;
    min-height: 100vh;
    padding: 48px 24px;
    font-family: system-ui, sans-serif;
    overflow-x: hidden;
  }

  .tilt-card {
    position: relative;
    width: min(38vmin, 220px);
    height: min(52vmin, 300px);
    border-radius: 20px;
    overflow: hidden;
    cursor: pointer;
    transform-style: preserve-3d;
    transition: transform 0.1s linear;
    /* CSS variables updated by JS */
    --rx: 0deg;
    --ry: 0deg;
    --mx: 50%;
    --my: 50%;
    transform: perspective(600px) rotateX(var(--rx)) rotateY(var(--ry));
  }

  .tilt-card:not(:hover) {
    transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1);
    --rx: 0deg;
    --ry: 0deg;
  }

  .card-bg {
    position: absolute;
    inset: 0;
    background: var(--gradient);
    z-index: 0;
  }

  /* Specular highlight */
  .card-sheen {
    position: absolute;
    inset: 0;
    background: radial-gradient(
      circle at var(--mx) var(--my),
      rgba(255,255,255,0.18) 0%,
      transparent 60%
    );
    z-index: 2;
    pointer-events: none;
    mix-blend-mode: overlay;
  }

  .card-content {
    position: absolute;
    inset: 0;
    z-index: 3;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 20px;
  }

  .card-icon {
    font-size: 2.5rem;
    margin-bottom: 8px;
    filter: drop-shadow(0 4px 8px rgba(0,0,0,0.5));
  }

  .card-title {
    font-size: clamp(0.9rem, 3vmin, 1.05rem);
    font-weight: 700;
    color: rgba(255,255,255,0.95);
    text-shadow: 0 2px 8px rgba(0,0,0,0.6);
  }

  .card-sub {
    font-size: clamp(0.7rem, 2vmin, 0.8rem);
    color: rgba(255,255,255,0.5);
    margin-top: 2px;
  }

  .card-1 { --gradient: linear-gradient(145deg, #1e1b4b 0%, #4c1d95 50%, #6d28d9 100%); }
  .card-2 { --gradient: linear-gradient(145deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%); }
  .card-3 { --gradient: linear-gradient(145deg, #1a0a0a 0%, #450a0a 50%, #7f1d1d 100%); }
  .card-4 { --gradient: linear-gradient(145deg, #052e16 0%, #14532d 50%, #166534 100%); }
</style>
</head>
<body>
  <div class="tilt-card card-1" data-tilt>
    <div class="card-bg"></div>
    <div class="card-sheen"></div>
    <div class="card-content">
      <div class="card-icon">🌌</div>
      <div class="card-title">Deep Space</div>
      <div class="card-sub">Hover to tilt</div>
    </div>
  </div>

  <div class="tilt-card card-2" data-tilt>
    <div class="card-bg"></div>
    <div class="card-sheen"></div>
    <div class="card-content">
      <div class="card-icon">🌊</div>
      <div class="card-title">Ocean Depth</div>
      <div class="card-sub">Hover to tilt</div>
    </div>
  </div>

  <div class="tilt-card card-3" data-tilt>
    <div class="card-bg"></div>
    <div class="card-sheen"></div>
    <div class="card-content">
      <div class="card-icon">🔥</div>
      <div class="card-title">Ember Core</div>
      <div class="card-sub">Hover to tilt</div>
    </div>
  </div>

  <div class="tilt-card card-4" data-tilt>
    <div class="card-bg"></div>
    <div class="card-sheen"></div>
    <div class="card-content">
      <div class="card-icon">🌿</div>
      <div class="card-title">Forest Mist</div>
      <div class="card-sub">Hover to tilt</div>
    </div>
  </div>

  <script>
    const MAX_TILT = 18;

    document.querySelectorAll('[data-tilt]').forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top)  / rect.height;

        const ry =  (x - 0.5) * 2 * MAX_TILT;
        const rx = -(y - 0.5) * 2 * MAX_TILT;

        card.style.setProperty('--rx', rx + 'deg');
        card.style.setProperty('--ry', ry + 'deg');
        card.style.setProperty('--mx', (x * 100) + '%');
        card.style.setProperty('--my', (y * 100) + '%');
        card.style.transform = \`perspective(600px) rotateX(\${rx}deg) rotateY(\${ry}deg) scale(1.04)\`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
        card.style.setProperty('--mx', '50%');
        card.style.setProperty('--my', '50%');
      });
    });
  </script>
</body>
</html>`
  },

  /* ──────────────────────────────────────────────
     ONE DIV DEMOS
  ────────────────────────────────────────────── */

  {
    id: 'pixel-heart',
    title: 'Pixel Heart',
    category: 'one-div',
    description: 'A beating pixel-art heart drawn entirely from CSS box-shadows on a single 1px element — no images, no SVG.',
    tags: ['box-shadow', 'spread-radius', 'pixel art', 'filter: drop-shadow()', '@keyframes'],
    html: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>Pixel Heart</title>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    background: #06060f;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    flex-direction: column;
    gap: 48px;
    font-family: system-ui, sans-serif;
  }

  /*
    Technique: box-shadow with large spread-radius on a 1x1px element.
    Each "pixel" = X Y blur spread color  (blur=0 makes solid squares).
    20px pixel size, spread=9px.
    Heart grid 8 cols x 6 rows:
      Row 0: _ ■ ■ _ _ ■ ■ _
      Row 1: ■ ■ ■ ■ ■ ■ ■ ■
      Row 2: ■ ■ ■ ■ ■ ■ ■ ■
      Row 3: _ ■ ■ ■ ■ ■ ■ _
      Row 4: _ _ ■ ■ ■ ■ _ _
      Row 5: _ _ _ ■ ■ _ _ _
  */

  .pixel-heart {
    position: relative;
    width: 160px;
    height: 120px;
    animation: heartbeat 0.8s cubic-bezier(0.35, 0, 0.25, 1) infinite;
    filter: drop-shadow(0 0 24px rgba(244,63,94,0.6));
  }

  @keyframes heartbeat {
    0%  { transform: scale(1);    }
    14% { transform: scale(1.13); }
    28% { transform: scale(1);    }
    42% { transform: scale(1.08); }
    70% { transform: scale(1);    }
  }

  .pixel-heart::before {
    content: '';
    position: absolute;
    width: 1px; height: 1px;
    top: 0; left: 0;
    box-shadow:
       20px   0 0 9px #f43f5e,  40px   0 0 9px #f43f5e,
      100px   0 0 9px #f43f5e, 120px   0 0 9px #f43f5e,
        0  20px 0 9px #f43f5e,  20px  20px 0 9px #f43f5e,
       40px  20px 0 9px #f43f5e,  60px  20px 0 9px #f43f5e,
       80px  20px 0 9px #f43f5e, 100px  20px 0 9px #f43f5e,
      120px  20px 0 9px #f43f5e, 140px  20px 0 9px #f43f5e,
        0  40px 0 9px #f43f5e,  20px  40px 0 9px #f43f5e,
       40px  40px 0 9px #f43f5e,  60px  40px 0 9px #f43f5e,
       80px  40px 0 9px #f43f5e, 100px  40px 0 9px #f43f5e,
      120px  40px 0 9px #f43f5e, 140px  40px 0 9px #f43f5e,
       20px  60px 0 9px #f43f5e,  40px  60px 0 9px #f43f5e,
       60px  60px 0 9px #f43f5e,  80px  60px 0 9px #f43f5e,
      100px  60px 0 9px #f43f5e, 120px  60px 0 9px #f43f5e,
       40px  80px 0 9px #f43f5e,  60px  80px 0 9px #f43f5e,
       80px  80px 0 9px #f43f5e, 100px  80px 0 9px #f43f5e,
       60px 100px 0 9px #f43f5e,  80px 100px 0 9px #f43f5e;
  }

  .label {
    color: rgba(255,255,255,0.7);
    font-size: 0.75rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
  }
</style>
</head>
<body>
  <div class="pixel-heart"></div>
  <p class="label">1 div · 30 box-shadows</p>
</body>
</html>`
  },

  {
    id: 'crescent-moon',
    title: 'Crescent Moon',
    category: 'one-div',
    description: 'A crescent moon using only inset box-shadow — the outer circle is the disc, the inner shadow (matching the sky) carves the crescent.',
    tags: ['box-shadow: inset', 'border-radius: 50%', 'glow', '@keyframes', 'single element'],
    html: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>Crescent Moon</title>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    background: #03030b;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    gap: 60px;
    font-family: system-ui, sans-serif;
    overflow: hidden;
  }
  body::before {
    content: '';
    position: fixed;
    inset: 0;
    background-image:
      radial-gradient(1px 1px at 15% 25%, rgba(255,255,255,.7) 0%, transparent 0%),
      radial-gradient(1px 1px at 45% 10%, rgba(255,255,255,.5) 0%, transparent 0%),
      radial-gradient(1px 1px at 70% 35%, rgba(255,255,255,.8) 0%, transparent 0%),
      radial-gradient(1px 1px at 25% 65%, rgba(255,255,255,.4) 0%, transparent 0%),
      radial-gradient(2px 2px at 85% 20%, rgba(255,255,255,.6) 0%, transparent 0%),
      radial-gradient(1px 1px at 55% 80%, rgba(255,255,255,.5) 0%, transparent 0%),
      radial-gradient(1px 1px at 10% 85%, rgba(255,255,255,.7) 0%, transparent 0%),
      radial-gradient(1px 1px at 90% 70%, rgba(255,255,255,.4) 0%, transparent 0%);
    pointer-events: none;
  }

  /*
    Two-circle crescent: the element's circular border gives one arc; the inset
    shadow's inner boundary — the same border-radius contracted by the spread,
    then shifted by the X/Y offset — gives the other arc. The yellow shadow
    paints the crescent region between the two arcs; the dark background fills
    the rest.
  */
  .moon {
    width: min(40vmin, 220px);
    height: min(40vmin, 220px);
    border-radius: 50%;
    background: #03030b;
    box-shadow:
      inset -55px -15px 0 22px #fde68a,
      0 0 60px 20px rgba(253,230,138,.15),
      0 0 120px 40px rgba(253,230,138,.07);
  }

  .label { color: rgba(255,255,255,.7); font-size:.75rem; letter-spacing:.2em; text-transform:uppercase; }
</style>
</head>
<body>
  <div class="moon"></div>
  <p class="label">1 div · inset box-shadow</p>
</body>
</html>`
  },

  {
    id: 'pac-man',
    title: 'Pac-Man',
    category: 'one-div',
    description: 'A chomping Pac-Man using conic-gradient with an @property-animated custom angle. The gradient stop itself animates — not a transform.',
    tags: ['conic-gradient', '@property', 'custom properties', 'border-radius: 50%', 'animation'],
    html: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>Pac-Man</title>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    background: #050510;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 60px;
    min-height: 100vh;
    overflow: hidden;
    font-family: system-ui, sans-serif;
  }

  /* @property registers --mouth as an animatable <angle> type */
  @property --mouth {
    syntax: '<angle>';
    initial-value: 5deg;
    inherits: false;
  }

  .pacman {
    width: min(40vmin, 220px);
    height: min(40vmin, 220px);
    border-radius: 50%;
    /*
      conic-gradient from 0:
        mouth gap 0 → --mouth   (upper lip gap)
        yellow body --mouth → (360 - --mouth)
        mouth gap (360 - --mouth) → 360  (lower lip gap)
      rotate: 90deg moves the gap (centred at 0° = top) to face right
    */
    background: conic-gradient(
      transparent 0deg var(--mouth),
      #fde047 var(--mouth) calc(360deg - var(--mouth)),
      transparent calc(360deg - var(--mouth)) 360deg
    );
    animation: chomp .35s ease-in-out infinite alternate;
    rotate: 90deg;
    filter: drop-shadow(0 0 20px rgba(253,224,71,.4));
  }
  @keyframes chomp {
    from { --mouth: 4deg;  }
    to   { --mouth: 44deg; }
  }

  .label { color: rgba(255,255,255,.7); font-size:.75rem; letter-spacing:.2em; text-transform:uppercase; }
</style>
</head>
<body>
  <div class="pacman"></div>
  <p class="label">1 div · @property · conic-gradient</p>
</body>
</html>`
  },

  {
    id: 'conic-ring-loader',
    title: 'Conic Ring Loader',
    category: 'one-div',
    description: 'Spinning gradient rings — each is one div using conic-gradient and a radial mask to punch the centre hole. No borders used.',
    tags: ['conic-gradient', 'mask', 'radial-gradient', 'CSS custom properties', 'animation'],
    html: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>Ring Loader</title>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    background: #040410;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 64px;
    min-height: 100vh;
    font-family: system-ui, sans-serif;
  }
  .rings { display: flex; align-items: center; gap: 44px; }

  /*
    1. conic-gradient: colour sweep from solid → transparent
    2. mask with radial-gradient: punch a hole in centre → ring shape
    3. Rotate the element to spin the gradient around the ring
  */
  .ring {
    border-radius: 50%;
    background: conic-gradient(from 0deg, var(--c1) 0deg, var(--c2) 220deg, transparent 220deg);
    mask: radial-gradient(farthest-side,
      transparent calc(100% - var(--t, 8px)),
      white       calc(100% - var(--t, 8px)));
    -webkit-mask: radial-gradient(farthest-side,
      transparent calc(100% - var(--t, 8px)),
      white       calc(100% - var(--t, 8px)));
    animation: spin var(--dur, 1.2s) linear infinite;
    filter: drop-shadow(0 0 10px var(--glow));
  }
  @keyframes spin { to { transform: rotate(360deg); } }

  .ring:nth-child(1) {
    width:min(22vmin,130px); height:min(22vmin,130px);
    --c1:#818cf8; --c2:#c084fc; --glow:rgba(129,140,248,.5); --t:clamp(5px,2vmin,10px); --dur:1.4s;
  }
  .ring:nth-child(2) {
    width:min(32vmin,190px); height:min(32vmin,190px);
    --c1:#f472b6; --c2:#fb923c; --glow:rgba(244,114,182,.5); --t:clamp(6px,2.5vmin,13px); --dur:2s;
    animation-direction: reverse;
  }
  .ring:nth-child(3) {
    width:min(22vmin,130px); height:min(22vmin,130px);
    --c1:#34d399; --c2:#06b6d4; --glow:rgba(52,211,153,.5); --t:clamp(5px,2vmin,10px); --dur:.8s;
  }

  .label { color:rgba(255,255,255,.7); font-size:.75rem; letter-spacing:.2em; text-transform:uppercase; }
</style>
</head>
<body>
  <div class="rings">
    <div class="ring"></div>
    <div class="ring"></div>
    <div class="ring"></div>
  </div>
  <p class="label">1 div each · conic-gradient + mask</p>
</body>
</html>`
  },

  {
    id: 'triple-dot-loader',
    title: 'Three Dots — One Div',
    category: 'one-div',
    description: 'Three animated dots from one div: the element itself, ::before, and ::after — staggered animation-delay creates the wave.',
    tags: ['::before', '::after', 'pseudo-elements', 'animation-delay', 'position: absolute', 'stagger'],
    html: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>Three Dots</title>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    background: #040410;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 80px;
    min-height: 100vh;
    font-family: system-ui, sans-serif;
  }

  /* Middle dot = the div. Left/right = ::before/::after positioned absolutely. */
  .loader {
    position: relative;
    width: clamp(14px,3.5vmin,20px);
    height: clamp(14px,3.5vmin,20px);
    border-radius: 50%;
    background: #818cf8;
    box-shadow: 0 0 14px rgba(129,140,248,.7);
    animation: bounce 1.4s ease-in-out infinite;
    animation-delay: .16s;
  }
  .loader::before, .loader::after {
    content: '';
    position: absolute;
    width: 100%; height: 100%;
    border-radius: 50%;
    top: 0;
    animation: bounce 1.4s ease-in-out infinite;
  }
  .loader::before {
    left: calc(-100% - clamp(10px,2.5vmin,16px));
    background: #c084fc;
    box-shadow: 0 0 14px rgba(192,132,252,.7);
    animation-delay: 0s;
  }
  .loader::after {
    left: calc(100% + clamp(10px,2.5vmin,16px));
    background: #38bdf8;
    box-shadow: 0 0 14px rgba(56,189,248,.7);
    animation-delay: .32s;
  }
  @keyframes bounce {
    0%,80%,100% { transform: scale(.6) translateY(0);    opacity:.35; }
    40%          { transform: scale(1)  translateY(-30px); opacity:1;   }
  }

  /* Variation: expanding rings */
  .loader-ring {
    position: relative;
    width: clamp(14px,3.5vmin,20px);
    height: clamp(14px,3.5vmin,20px);
    border-radius: 50%;
    background: #f472b6;
    animation: ring-pulse 1.6s ease-out infinite;
    animation-delay: .2s;
  }
  .loader-ring::before, .loader-ring::after {
    content: '';
    position: absolute;
    width: 100%; height: 100%;
    border-radius: 50%;
    top: 0;
    animation: ring-pulse 1.6s ease-out infinite;
  }
  .loader-ring::before {
    left: calc(-100% - clamp(10px,2.5vmin,16px));
    background: #fb923c;
    animation-delay: 0s;
  }
  .loader-ring::after {
    left: calc(100% + clamp(10px,2.5vmin,16px));
    background: #34d399;
    animation-delay: .4s;
  }
  @keyframes ring-pulse {
    0%   { transform:scale(.8); opacity:.3; box-shadow:0 0 0   0 rgba(255,255,255,.15); }
    50%  { transform:scale(1);  opacity:1;  box-shadow:0 0 0 8px rgba(255,255,255,.0);  }
    100% { transform:scale(.8); opacity:.3; box-shadow:0 0 0   0 rgba(255,255,255,.0);  }
  }

  .label { color:rgba(255,255,255,.7); font-size:.75rem; letter-spacing:.2em; text-transform:uppercase; }
</style>
</head>
<body>
  <div class="loader"></div>
  <div class="loader-ring"></div>
  <p class="label">1 div · ::before · ::after</p>
</body>
</html>`
  },

  {
    id: 'gradient-prism',
    title: 'Gradient Prism',
    category: 'one-div',
    description: 'A rotating rainbow driven by a single @property custom angle — all conic-gradient stops reference the same --angle, so one animation moves everything.',
    tags: ['conic-gradient', 'multiple backgrounds', '@property', 'radial-gradient', 'mask'],
    html: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>Gradient Prism</title>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    background: #03030a;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 48px;
    min-height: 100vh;
    font-family: system-ui, sans-serif;
    overflow: hidden;
  }

  @property --angle {
    syntax: '<angle>';
    initial-value: 0deg;
    inherits: false;
  }

  /*
    Multiple background layers on one element:
    - radial dark overlay for depth
    - conic-gradient rainbow using --angle
    mask feathers the edges into a soft circle.
    ::before adds a counter-rotating specular highlight.
  */
  .prism {
    position: relative;
    width: min(60vmin,380px);
    height: min(60vmin,380px);
    border-radius: 50%;
    background:
      radial-gradient(circle at 50% 50%, rgba(0,0,0,.45) 0%, transparent 55%),
      conic-gradient(
        from var(--angle),
        hsl(0,100%,65%)    0%,   hsl(45,100%,65%)  12.5%,
        hsl(90,100%,65%)  25%,   hsl(135,100%,65%) 37.5%,
        hsl(180,100%,65%) 50%,   hsl(225,100%,65%) 62.5%,
        hsl(270,100%,65%) 75%,   hsl(315,100%,65%) 87.5%,
        hsl(360,100%,65%) 100%
      );
    animation: spin-prism 4s linear infinite;
    mask: radial-gradient(circle, white 50%, transparent 80%);
    -webkit-mask: radial-gradient(circle, white 50%, transparent 80%);
  }
  @keyframes spin-prism { to { --angle: 360deg; } }

  .prism::before {
    content: '';
    position: absolute;
    inset: 20%;
    border-radius: 50%;
    background: radial-gradient(circle at 40% 35%, rgba(255,255,255,.25) 0%, transparent 55%);
    animation: counter-spin 4s linear infinite;
  }
  @keyframes counter-spin { to { transform: rotate(-180deg); } }

  .label { color:rgba(255,255,255,.7); font-size:.75rem; letter-spacing:.2em; text-transform:uppercase; }
</style>
</head>
<body>
  <div class="prism"></div>
  <p class="label">1 div · @property · conic-gradient</p>
</body>
</html>`
  },

  {
    id: 'neon-sign',
    title: 'Neon Sign',
    category: 'one-div',
    description: 'Stacked box-shadows simulate how neon light diffuses through glass. Innermost = tight bright core. Outer layers = ambient glow. Random flicker included.',
    tags: ['box-shadow', 'text-shadow', 'layered glow', '::before ::after', 'flicker animation'],
    html: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>Neon Sign</title>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    background: #020209;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    font-family: system-ui, sans-serif;
  }

  /*
    Real neon = glass tube glowing bright + diffuse ambient corona.
    In CSS: stacked box-shadows with increasing blur, decreasing opacity:
      tight 4px  = the glowing tube surface
      medium 20px = the bright corona
      wide 80px   = ambient room glow
  */
  .sign {
    position: relative;
    padding: 28px 44px;
    border: 3px solid #818cf8;
    border-radius: 12px;
    color: #c4b5fd;
    font-size: clamp(2rem,8vw,4.5rem);
    font-weight: 900;
    letter-spacing: .12em;
    text-transform: uppercase;

    box-shadow:
       0 0  4px  1px #818cf8,
       0 0 10px  3px rgba(129,140,248,.8),
       0 0 20px  8px rgba(129,140,248,.5),
       0 0 40px 14px rgba(129,140,248,.25),
       0 0 80px 28px rgba(129,140,248,.1),
      inset 0 0  8px  1px rgba(129,140,248,.25);

    text-shadow:
       0 0  4px #c4b5fd,
       0 0 10px rgba(196,181,253,.9),
       0 0 24px rgba(196,181,253,.6),
       0 0 50px rgba(129,140,248,.5);

    animation: flicker 6s ease-in-out infinite;
  }

  @keyframes flicker {
    0%,18%,20%,22%,25%,53%,57%,100% { opacity: 1; }
    19%,21%  { opacity:.3; text-shadow:none; box-shadow:0 0 4px 1px #818cf8; }
    23%,24%  { opacity:.6; }
    54%,56%  { opacity:.4; text-shadow:none; }
  }

  /* Mounting wire brackets from the wall */
  .sign::before, .sign::after {
    content: '';
    position: absolute;
    top: -24px;
    width: 2px; height: 26px;
    background: #334155;
    box-shadow: 0 0 4px rgba(255,255,255,.08);
  }
  .sign::before { left: 22%; }
  .sign::after  { right: 22%; }
</style>
</head>
<body>
  <div class="sign">CSS</div>
</body>
</html>`
  },

  {
    id: 'folded-card',
    title: 'Folded Corner',
    category: 'one-div',
    description: 'A paper fold illusion using the CSS triangle trick on ::before — a zero-height element with asymmetric borders forms a right triangle. No images.',
    tags: ['::before', '::after', 'CSS triangles', 'border-width', 'box-shadow', 'z-index'],
    html: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>Folded Corner</title>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    background: #06060e;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 32px;
    min-height: 100vh;
    flex-wrap: wrap;
    padding: 40px 24px;
    font-family: system-ui, sans-serif;
  }

  /*
    Fold technique:
    ::before — CSS triangle (zero-width border trick) at the bottom-right corner,
               coloured like the page background — visually "removes" that corner
    ::after  — box-shadow casts a shadow over where the fold casts a shadow
    The card itself has border-radius: 0 on the bottom-right to expose the fold area.
  */
  .card {
    position: relative;
    width: min(60vmin,300px);
    height: min(42vmin,200px);
    background: var(--card-bg);
    border-radius: 10px 10px 0 10px;
    padding: 24px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    transition: transform .3s ease;
    cursor: default;
  }
  .card:hover { transform: translateY(-6px); }

  .card::before {
    content: '';
    position: absolute;
    bottom: 0; right: 0;
    width: 0; height: 0;
    border-style: solid;
    border-width: 0 0 55px 55px;
    border-color: transparent transparent #06060e transparent;
    z-index: 2;
    transition: border-width .3s ease;
  }
  .card:hover::before { border-width: 0 0 72px 72px; }

  .card::after {
    content: '';
    position: absolute;
    bottom: 6px; right: 6px;
    width: 38px; height: 38px;
    box-shadow: 3px 3px 10px rgba(0,0,0,.55);
    transform: rotate(45deg);
    z-index: 1;
  }

  .card-tag  { font-size:.65rem; letter-spacing:.12em; text-transform:uppercase; opacity:.4; margin-bottom:6px; }
  .card-title { font-size:clamp(.95rem,2.5vmin,1.2rem); font-weight:700; line-height:1.35; }

  .card:nth-child(1) { --card-bg:#1e1b4b; color:#a5b4fc; }
  .card:nth-child(2) { --card-bg:#1a0e0e; color:#fca5a5; }
  .card:nth-child(3) { --card-bg:#0a1a14; color:#6ee7b7; }
</style>
</head>
<body>
  <div class="card">
    <div class="card-tag">Hover me</div>
    <div class="card-title">CSS triangle<br>fold trick</div>
  </div>
  <div class="card">
    <div class="card-tag">No images</div>
    <div class="card-title">::before<br>&amp; ::after</div>
  </div>
  <div class="card">
    <div class="card-tag">Pure CSS</div>
    <div class="card-title">Zero extra<br>HTML</div>
  </div>
</body>
</html>`
  },

];
