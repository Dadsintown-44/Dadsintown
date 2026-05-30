'use client';

import React, { useEffect, useRef, useState } from 'react';
import styles from './Preloader.module.css';

const STATUS_MESSAGES = [
  'Loading',
  'Brewing ideas',
  'Crafting vibes',
  'Sharpening pencils',
  'Talking to dads',
  'Almost there',
];

const Preloader = ({ onDone }) => {
  const canvasRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [statusIdx, setStatusIdx] = useState(0);
  const [hiding, setHiding] = useState(false);
  const [complete, setComplete] = useState(false);
  const doneRef = useRef(false);

  /* ── Doodle canvas ── */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    const ctx = canvas.getContext('2d');
    if (!ctx) return undefined;
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    const W = canvas.width;
    const H = canvas.height;

    const doodles = [
      { type: 'star',    x: 60,     y: 60,     size: 20 },
      { type: 'star',    x: W-80,   y: H-80,   size: 16 },
      { type: 'star',    x: W-110,  y: 80,     size: 24 },
      { type: 'circle',  x: 90,     y: H-90,   r: 22 },
      { type: 'circle',  x: W-70,   y: 200,    r: 14 },
      { type: 'circle',  x: 150,    y: 170,    r: 9 },
      { type: 'zigzag',  x: 30,     y: H/2-20, len: 80 },
      { type: 'zigzag',  x: W-110,  y: H/2+50, len: 60 },
      { type: 'arrow',   x: W/2+150,y: 130 },
      { type: 'arrow',   x: 80,     y: H/2+100 },
      { type: 'cross',   x: W/2-170,y: 90 },
      { type: 'cross',   x: W/2+170,y: H-70 },
      { type: 'wave',    x: 20,     y: H-130,  len: 90 },
      { type: 'wave',    x: W-120,  y: 150,    len: 70 },
      { type: 'dots',    x: W/2-190,y: H-60 },
      { type: 'dots',    x: W-60,   y: H/2-70 },
      { type: 'bracket', x: 35,     y: H/2+130 },
      { type: 'bracket', x: W-60,   y: H/2-110 },
    ];

    const DRAW_DUR = 800;
    const startT = performance.now();
    const startTimes = doodles.map((_, i) => startT + i * 180 + Math.random() * 300);
    const drawProgress = doodles.map(() => 0);

    const stroke = (alpha = 0.85) => `rgba(80,80,80,${alpha})`;

    function drawStar(x, y, size, p) {
      const pts = 4, len = size * p;
      ctx.save();
      ctx.translate(x, y);
      ctx.strokeStyle = stroke();
      ctx.lineWidth = 1.3; ctx.lineCap = 'round';
      for (let i = 0; i < pts; i++) {
        const a = (i / pts) * Math.PI * 2;
        const d = Math.max(0, Math.min(1, p * pts - i));
        if (d <= 0) continue;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(Math.cos(a) * len * d, Math.sin(a) * len * d);
        ctx.stroke();
      }
      ctx.restore();
    }

    function drawCircle(x, y, r, p) {
      ctx.save();
      ctx.strokeStyle = stroke(0.8);
      ctx.lineWidth = 1.3; ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.arc(x, y, r, -Math.PI / 2, -Math.PI / 2 + Math.PI * 2 * p);
      ctx.stroke();
      ctx.restore();
    }

    function drawZigzag(x, y, len, p) {
      const segs = 5, segLen = len / segs;
      const drawn = p * (segs + 1);
      ctx.save();
      ctx.strokeStyle = stroke(0.75);
      ctx.lineWidth = 1.3; ctx.lineCap = 'round'; ctx.lineJoin = 'round';
      ctx.beginPath(); ctx.moveTo(x, y);
      for (let i = 1; i <= Math.floor(drawn); i++) {
        ctx.lineTo(x + i * segLen, y + (i % 2 === 0 ? 0 : -16));
      }
      const frac = drawn - Math.floor(drawn);
      if (frac > 0 && Math.floor(drawn) < segs) {
        const i = Math.floor(drawn);
        const ny1 = y + (i % 2 === 0 ? 0 : -16);
        const ny2 = y + ((i + 1) % 2 === 0 ? 0 : -16);
        ctx.lineTo(x + i * segLen + frac * segLen, ny1 + (ny2 - ny1) * frac);
      }
      ctx.stroke(); ctx.restore();
    }

    function drawArrow(x, y, p) {
      if (p < 0.01) return;
      ctx.save();
      ctx.strokeStyle = stroke();
      ctx.lineWidth = 1.3; ctx.lineCap = 'round';
      const len = 32 * p;
      ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x + len, y); ctx.stroke();
      if (p > 0.6) {
        const ap = (p - 0.6) / 0.4;
        ctx.beginPath(); ctx.moveTo(x + len, y); ctx.lineTo(x + len - 9*ap, y - 7*ap); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(x + len, y); ctx.lineTo(x + len - 9*ap, y + 7*ap); ctx.stroke();
      }
      ctx.restore();
    }

    function drawCross(x, y, p) {
      ctx.save();
      ctx.strokeStyle = stroke(0.75);
      ctx.lineWidth = 1.3; ctx.lineCap = 'round';
      const s = 11;
      if (p > 0) { ctx.beginPath(); ctx.moveTo(x-s, y); ctx.lineTo(x-s + s*2*Math.min(1, p*2), y); ctx.stroke(); }
      if (p > 0.5) { ctx.beginPath(); ctx.moveTo(x, y-s); ctx.lineTo(x, y-s + s*2*((p-0.5)*2)); ctx.stroke(); }
      ctx.restore();
    }

    function drawWave(x, y, len, p) {
      const pts = 40, drawn = Math.floor(pts * p);
      ctx.save();
      ctx.strokeStyle = stroke(0.7);
      ctx.lineWidth = 1.3; ctx.lineCap = 'round';
      ctx.beginPath();
      for (let i = 0; i <= drawn; i++) {
        const px = x + (i / pts) * len;
        const py = y + Math.sin(i * 0.55) * 9;
        i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
      }
      ctx.stroke(); ctx.restore();
    }

    function drawDots(x, y, p) {
      ctx.save();
      for (let i = 0; i < 6; i++) {
        if (p * 6 < i) break;
        ctx.globalAlpha = Math.min(1, p * 6 - i) * 0.85;
        ctx.fillStyle = '#555';
        ctx.beginPath(); ctx.arc(x + i * 11, y, 2.2, 0, Math.PI * 2); ctx.fill();
      }
      ctx.restore();
    }

    function drawBracket(x, y, p) {
      ctx.save();
      ctx.strokeStyle = stroke(0.65);
      ctx.lineWidth = 1.3; ctx.lineCap = 'round';
      const h = 32, w = 11;
      if (p < 0.33) { ctx.beginPath(); ctx.moveTo(x+w, y); ctx.lineTo(x+w - w*(p*3), y); ctx.stroke(); }
      else if (p < 0.66) {
        ctx.beginPath(); ctx.moveTo(x+w, y); ctx.lineTo(x, y); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x, y + h*((p-0.33)*3)); ctx.stroke();
      } else {
        ctx.beginPath(); ctx.moveTo(x+w, y); ctx.lineTo(x, y); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x, y+h); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(x, y+h); ctx.lineTo(x + w*((p-0.66)*3), y+h); ctx.stroke();
      }
      ctx.restore();
    }

    function drawDoodle(d, p) {
      switch (d.type) {
        case 'star':    drawStar(d.x, d.y, d.size, p); break;
        case 'circle':  drawCircle(d.x, d.y, d.r, p); break;
        case 'zigzag':  drawZigzag(d.x, d.y, d.len, p); break;
        case 'arrow':   drawArrow(d.x, d.y, p); break;
        case 'cross':   drawCross(d.x, d.y, p); break;
        case 'wave':    drawWave(d.x, d.y, d.len, p); break;
        case 'dots':    drawDots(d.x, d.y, p); break;
        case 'bracket': drawBracket(d.x, d.y, p); break;
        default: break;
      }
    }

    let rafId;
    function draw(t) {
      ctx.clearRect(0, 0, W, H);
      doodles.forEach((d, i) => {
        if (t > startTimes[i]) {
          drawProgress[i] = Math.min(1, (t - startTimes[i]) / DRAW_DUR);
        }
        drawDoodle(d, drawProgress[i]);
      });
      rafId = requestAnimationFrame(draw);
    }
    rafId = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(rafId);
  }, []);

  /* ── Progress bar ── */
  useEffect(() => {
    if (doneRef.current) return;
    const interval = setInterval(() => {
      setProgress(prev => {
        const next = prev + Math.random() * 2.2 + 0.4;
        if (next >= 100) {
          clearInterval(interval);
          doneRef.current = true;
          setComplete(true);
          setTimeout(() => {
            setHiding(true);
            setTimeout(() => onDone?.(), 700);
          }, 800);
          return 100;
        }
        return next;
      });
    }, 110);
    return () => clearInterval(interval);
  }, [onDone]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (doneRef.current) return;
      doneRef.current = true;
      setComplete(true);
      setTimeout(() => {
        setHiding(true);
        setTimeout(() => onDone?.(), 700);
      }, 300);
    }, 5000);

    return () => clearTimeout(timeout);
  }, [onDone]);

  const handleSkip = () => {
    if (doneRef.current) return;
    doneRef.current = true;
    setComplete(true);
    setHiding(true);
    setTimeout(() => onDone?.(), 400);
  };

  /* ── Status cycling ── */
  useEffect(() => {
    if (complete) return;
    const t = setInterval(() => {
      setStatusIdx(i => (i + 1) % STATUS_MESSAGES.length);
    }, 900);
    return () => clearInterval(t);
  }, [complete]);

  const roundedProgress = Math.min(100, Math.round(progress));

  return (
    <div
      className={styles.preloader}
      style={{
        '--pl-opacity': hiding ? 0 : 1,
        '--pl-scale': hiding ? 1.04 : 1,
      }}
    >
      {/* Doodle canvas */}
      <canvas ref={canvasRef} className={styles.canvas} />

      {/* Center content */}
      <div className={styles.center}>
        {/* Brand name */}
        <div className={styles.brand}>
          Dadsintown<span className={styles.brandDot}>.</span>
        </div>

        {/* Tagline */}
        <div className={styles.tagline}>
          Turning brands into conversation starters
        </div>

        {/* Progress */}
        <div className={styles.progress}>
          <div className={styles.progressTrack}>
            <div
              className={styles.progressFill}
              style={{ '--pl-progress': `${roundedProgress}%` }}
            />
          </div>
          <div className={styles.progressRow}>
            <span
              className={styles.status}
              style={{ '--pl-status-opacity': complete ? 0 : 1 }}
            >
              {STATUS_MESSAGES[statusIdx]}
              <span className={styles.statusDot}>.</span>
              <span
                className={`${styles.statusDot} ${styles.statusDotDelay}`}
              >
                .
              </span>
              <span
                className={`${styles.statusDot} ${styles.statusDotDelay2}`}
              >
                .
              </span>
            </span>
            {complete && (
              <span className={styles.complete}>
                All set — let's talk brands
              </span>
            )}
            <span className={styles.percent}>{roundedProgress}%</span>
          </div>
        </div>
      </div>

      <button
        type="button"
        className={styles.skip}
        onClick={handleSkip}
      >
        Skip intro
      </button>
    </div>
  );
};

export default Preloader;
