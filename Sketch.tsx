import React, {createContext, useContext} from 'react';
import {Easing, interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {evolvePath} from '@remotion/paths';
import {C, H, W} from '../constants';

type Layer = 'wash' | 'ink';
const LayerCtx = createContext<Layer>('ink');
const clamp = {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'} as const;

/** Menggambar children dua kali: lapisan warna lembut + lapisan garis pensil. */
export const Layered: React.FC<{children: React.ReactNode}> = ({children}) => {
  const frame = useCurrentFrame();
  const seed = (Math.floor(frame / 5) % 6) + 1; // garis "bergetar" seperti digambar tangan
  return (
    <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} style={{position: 'absolute', inset: 0}}>
      <defs>
        <filter id="wash" x="-10%" y="-10%" width="120%" height="120%">
          <feTurbulence type="fractalNoise" baseFrequency="0.012" numOctaves="2" seed="4" result="n" />
          <feDisplacementMap in="SourceGraphic" in2="n" scale="26" xChannelSelector="R" yChannelSelector="G" result="d" />
          <feGaussianBlur in="d" stdDeviation="2.2" />
        </filter>
        <filter id="pencil" x="-5%" y="-5%" width="110%" height="110%">
          <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="2" seed={seed} result="warp" />
          <feDisplacementMap in="SourceGraphic" in2="warp" scale="7" xChannelSelector="R" yChannelSelector="G" result="wob" />
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="2" seed="3" result="grain" />
          <feColorMatrix in="grain" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 -2.2 1.8" result="ga" />
          <feComposite in="wob" in2="ga" operator="in" />
        </filter>
        <pattern id="hatch" width="14" height="14" patternUnits="userSpaceOnUse" patternTransform="rotate(35)">
          <line x1="0" y1="0" x2="0" y2="14" stroke={C.ink} strokeWidth="2" opacity="0.5" />
        </pattern>
      </defs>
      <g filter="url(#wash)" opacity={0.85} style={{mixBlendMode: 'multiply'}} transform="translate(5 6)">
        <LayerCtx.Provider value="wash">{children}</LayerCtx.Provider>
      </g>
      <g filter="url(#pencil)">
        <LayerCtx.Provider value="ink">{children}</LayerCtx.Provider>
      </g>
    </svg>
  );
};

type DrawProps = {
  d: string;
  fill?: string;
  hatch?: boolean;
  delay?: number;
  dur?: number;
  w?: number; // 0 = tanpa garis (hanya warna)
  color?: string;
};

/** Garis digambar perlahan (drawing animation), lalu warna lembut menyusul. */
export const Draw: React.FC<DrawProps> = ({d, fill, hatch, delay = 0, dur = 30, w = 4, color = C.ink}) => {
  const layer = useContext(LayerCtx);
  const frame = useCurrentFrame();
  const p = interpolate(frame, [delay, delay + dur], [0, 1], {...clamp, easing: Easing.inOut(Easing.cubic)});
  const wash = interpolate(frame, [delay + dur * 0.5, delay + dur + 14], [0, 1], clamp);
  if (layer === 'wash') {
    return fill ? <path d={d} fill={fill} opacity={wash} /> : null;
  }
  if (p <= 0 && w > 0) return null;
  const ev = evolvePath(p, d);
  return (
    <g>
      {hatch && fill ? <path d={d} fill="url(#hatch)" opacity={wash * 0.45} /> : null}
      {w > 0 ? (
        <>
          <path d={d} fill="none" stroke={color} strokeWidth={w} strokeLinecap="round" strokeLinejoin="round" strokeDasharray={ev.strokeDasharray} strokeDashoffset={ev.strokeDashoffset} />
          <path d={d} fill="none" stroke={color} strokeWidth={w * 0.55} opacity={0.5} strokeLinecap="round" strokeLinejoin="round" strokeDasharray={ev.strokeDasharray} strokeDashoffset={ev.strokeDashoffset} transform="translate(2.2 1.6)" />
        </>
      ) : null}
    </g>
  );
};

/** Gerak melayang halus yang terus berjalan (angin, napas, ombak). */
export const Float: React.FC<{
  ax?: number; ay?: number; rot?: number; speed?: number; phase?: number; origin?: [number, number]; children: React.ReactNode;
}> = ({ax = 0, ay = 0, rot = 0, speed = 1, phase = 0, origin = [540, 960], children}) => {
  const f = useCurrentFrame();
  const t = (f / 30) * speed * Math.PI * 0.8 + phase;
  return (
    <g transform={`translate(${ax * Math.sin(t)} ${ay * Math.cos(t * 0.8)}) rotate(${rot * Math.sin(t)} ${origin[0]} ${origin[1]})`}>
      {children}
    </g>
  );
};

/** Memindahkan children dari posisi awal ke akhir pada rentang frame tertentu. */
export const Move: React.FC<{
  from: [number, number]; to: [number, number]; start: number; end: number; fade?: boolean; children: React.ReactNode;
}> = ({from, to, start, end, fade, children}) => {
  const f = useCurrentFrame();
  const p = interpolate(f, [start, end], [0, 1], {...clamp, easing: Easing.inOut(Easing.sin)});
  const x = from[0] + (to[0] - from[0]) * p;
  const y = from[1] + (to[1] - from[1]) * p;
  const o = fade ? interpolate(f, [start, start + 8, end - 14, end], [0, 1, 1, 0], clamp) : 1;
  return <g transform={`translate(${x} ${y})`} opacity={o}>{children}</g>;
};

/** Cahaya lembut yang berdenyut. */
export const Glow: React.FC<{cx: number; cy: number; r: number; color?: string; delay?: number; speed?: number}> = ({cx, cy, r, color = C.star, delay = 0, speed = 1}) => {
  const layer = useContext(LayerCtx);
  const f = useCurrentFrame();
  if (layer !== 'wash') return null;
  const a = interpolate(f, [delay, delay + 25], [0, 1], clamp);
  const pulse = 0.65 + 0.25 * Math.sin((f / 30) * speed * 4);
  return <circle cx={cx} cy={cy} r={r * (0.95 + 0.08 * Math.sin((f / 30) * speed * 4))} fill={color} opacity={a * pulse} />;
};

/** Kamera sinematik: zoom + pan halus sepanjang adegan. [scale, x, y] */
export const Camera: React.FC<{from: [number, number, number]; to: [number, number, number]; children: React.ReactNode}> = ({from, to, children}) => {
  const f = useCurrentFrame();
  const {durationInFrames} = useVideoConfig();
  const p = interpolate(f, [0, durationInFrames], [0, 1], {...clamp, easing: Easing.inOut(Easing.sin)});
  const l = (i: number) => from[i] + (to[i] - from[i]) * p;
  return (
    <div style={{position: 'absolute', inset: 0, transformOrigin: '50% 45%', transform: `translate(${l(1)}px, ${l(2)}px) scale(${l(0)})`}}>
      {children}
    </div>
  );
};
