import React from 'react';
import {C} from '../constants';
import {Draw, Float, Glow} from './Sketch';

export const circle = (cx: number, cy: number, r: number) =>
  `M ${cx - r} ${cy} A ${r} ${r} 0 1 0 ${cx + r} ${cy} A ${r} ${r} 0 1 0 ${cx - r} ${cy}`;

export const star = (cx: number, cy: number, r: number, k = 0.45) => {
  const pts: string[] = [];
  for (let i = 0; i < 10; i++) {
    const a = -Math.PI / 2 + (i * Math.PI) / 5;
    const rr = i % 2 ? r * k : r;
    pts.push(`${(cx + rr * Math.cos(a)).toFixed(1)} ${(cy + rr * Math.sin(a)).toFixed(1)}`);
  }
  return `M ${pts.join(' L ')} Z`;
};

export const cloud = (x: number, y: number, s: number) =>
  `M ${x} ${y} c ${-30 * s} 0 ${-30 * s} ${-50 * s} 0 ${-50 * s} c ${10 * s} ${-45 * s} ${70 * s} ${-45 * s} ${80 * s} ${-5 * s} c ${40 * s} ${-10 * s} ${60 * s} ${50 * s} ${10 * s} ${55 * s} Z`;

/** Bidang langit/latar berbentuk lukisan, tepi tidak rata. */
export const PANEL =
  'M 80 300 C 300 130 780 150 1000 320 C 1060 700 1040 1100 980 1330 C 700 1430 300 1430 100 1330 C 20 1000 20 600 80 300 Z';

export const Panel: React.FC<{fill: string}> = ({fill}) => <Draw d={PANEL} fill={fill} w={0} delay={0} dur={24} />;

export const Cloud: React.FC<{x: number; y: number; s?: number; t?: number; ax?: number}> = ({x, y, s = 1, t = 0, ax = 40}) => (
  <Float ax={ax} ay={6} speed={0.5} phase={x}>
    <Draw d={cloud(x, y, s)} fill="#ffffff" delay={t} dur={26} w={3.5} />
  </Float>
);

export const House: React.FC<{x: number; y: number; s?: number; t?: number; smoke?: boolean}> = ({x, y, s = 1, t = 0, smoke = true}) => {
  const rect = (x1: number, y1: number, x2: number, y2: number) => `M ${x1} ${y1} L ${x1} ${y2} L ${x2} ${y2} L ${x2} ${y1} Z`;
  return (
    <g>
      <Draw d={rect(x + 50 * s, y - 250 * s, x + 90 * s, y - 150 * s)} fill={C.door} delay={t + 30} dur={14} w={3.5} />
      <Draw d={rect(x - 110 * s, y - 150 * s, x + 110 * s, y)} fill={C.wall} hatch delay={t} dur={28} />
      <Draw d={`M ${x - 140 * s} ${y - 150 * s} L ${x} ${y - 290 * s} L ${x + 140 * s} ${y - 150 * s} Z`} fill={C.roof} hatch delay={t + 16} dur={28} />
      <Draw d={rect(x - 28 * s, y - 95 * s, x + 28 * s, y)} fill={C.door} delay={t + 34} dur={18} w={3.5} />
      <Draw d={rect(x + 50 * s, y - 125 * s, x + 90 * s, y - 85 * s)} fill={C.sun} delay={t + 42} dur={16} w={3.5} />
      <Glow cx={x + 70 * s} cy={y - 105 * s} r={50 * s} delay={t + 50} speed={0.6} />
      {smoke && (
        <Float ax={14} ay={14} speed={1.2}>
          <Draw d={`M ${x + 70 * s} ${y - 275 * s} c ${-20 * s} ${-35 * s} ${20 * s} ${-55 * s} 0 ${-90 * s} c ${-20 * s} ${-35 * s} ${20 * s} ${-55 * s} 0 ${-90 * s}`} delay={t + 60} dur={36} w={3.5} />
        </Float>
      )}
    </g>
  );
};

export const Tree: React.FC<{x: number; y: number; s?: number; t?: number; fill?: string; ax?: number}> = ({x, y, s = 1, t = 0, fill = C.grass, ax = 6}) => (
  <Float ax={ax} speed={0.7} phase={x} origin={[x, y]} rot={1.2}>
    <Draw d={`M ${x - 14 * s} ${y} L ${x - 9 * s} ${y - 130 * s} L ${x + 9 * s} ${y - 130 * s} L ${x + 14 * s} ${y} Z`} fill={C.door} delay={t} dur={20} w={3.5} />
    <Draw d={circle(x, y - 200 * s, 85 * s)} fill={fill} hatch delay={t + 14} dur={34} />
    <Draw d={circle(x + 40 * s, y - 150 * s, 55 * s)} fill={fill} delay={t + 26} dur={26} w={3} />
  </Float>
);

export const Pine: React.FC<{x: number; y: number; s?: number; t?: number; fill?: string}> = ({x, y, s = 1, t = 0, fill = C.darkgreen}) => (
  <Float ax={5} speed={0.6} phase={x} origin={[x, y]} rot={1}>
    <Draw d={`M ${x - 10 * s} ${y} L ${x - 8 * s} ${y - 90 * s} L ${x + 8 * s} ${y - 90 * s} L ${x + 10 * s} ${y} Z`} fill={C.door} delay={t} dur={14} w={3.5} />
    <Draw d={`M ${x - 80 * s} ${y - 80 * s} L ${x} ${y - 250 * s} L ${x + 80 * s} ${y - 80 * s} Z`} fill={fill} hatch delay={t + 8} dur={28} />
    <Draw d={`M ${x - 60 * s} ${y - 190 * s} L ${x} ${y - 330 * s} L ${x + 60 * s} ${y - 190 * s} Z`} fill={fill} hatch delay={t + 20} dur={26} />
  </Float>
);

export const Bush: React.FC<{x: number; y: number; s?: number; t?: number; fill?: string}> = ({x, y, s = 1, t = 0, fill = C.darkgreen}) => (
  <Float ax={5} ay={3} speed={0.8} phase={x}>
    <Draw d={circle(x, y, 90 * s)} fill={fill} hatch delay={t} dur={30} />
    <Draw d={circle(x + 85 * s, y + 25 * s, 65 * s)} fill={fill} delay={t + 12} dur={26} w={3.5} />
    <Draw d={circle(x - 80 * s, y + 30 * s, 60 * s)} fill={fill} delay={t + 20} dur={26} w={3.5} />
  </Float>
);

export const SmallStar: React.FC<{x: number; y: number; r?: number; t?: number; phase?: number}> = ({x, y, r = 22, t = 0, phase = 0}) => (
  <Float ay={3} speed={1.5} phase={phase} origin={[x, y]} rot={10}>
    <Draw d={star(x, y, r)} fill={C.star} delay={t} dur={18} w={3} />
  </Float>
);

/** Bintang kecil bermuka (tokoh cerita). */
export const StarCreature: React.FC<{x: number; y: number; r?: number; t?: number; glow?: number}> = ({x, y, r = 60, t = 0, glow = 1}) => (
  <Float ay={8} rot={5} speed={1.4} origin={[x, y]}>
    <Glow cx={x} cy={y} r={r * 2.1 * glow} delay={t + 20} />
    <Draw d={star(x, y, r)} fill={C.star} hatch delay={t} dur={34} w={4.5} />
    <Draw d={`M ${x - r * 0.28} ${y - r * 0.05} l 0.1 0 M ${x + r * 0.28} ${y - r * 0.05} l 0.1 0`} delay={t + 30} dur={6} w={r * 0.14} />
    <Draw d={`M ${x - r * 0.2} ${y + r * 0.2} q ${r * 0.2} ${r * 0.18} ${r * 0.4} 0`} delay={t + 34} dur={10} w={3.5} />
  </Float>
);

type Girl = {x: number; y: number; s?: number; t?: number; armL?: [number, number]; armR?: [number, number]; lantern?: boolean};

/** Laras, gadis kecil berbaju koral dengan kuncir dua. Kaki di (x, y). */
export const Girl: React.FC<Girl> = ({x, y, s = 1, t = 0, armL = [-42, 62], armR = [42, 62], lantern}) => {
  const sh = (sign: number) => [x + sign * 8 * s, y - 205 * s];
  const [lx, ly] = sh(-1);
  const [rx, ry] = sh(1);
  const hx = rx + armR[0] * s;
  const hy = ry + armR[1] * s;
  const hdy = y - 250 * s;
  return (
    <g>
      <Draw d={`M ${x - 15 * s} ${y - 80 * s} L ${x - 18 * s} ${y - 5 * s} M ${x + 15 * s} ${y - 80 * s} L ${x + 18 * s} ${y - 5 * s}`} delay={t} dur={16} w={4.5} />
      <Draw d={`M ${x - 10 * s} ${y - 215 * s} L ${x + 10 * s} ${y - 215 * s} L ${x + 50 * s} ${y - 80 * s} L ${x - 50 * s} ${y - 80 * s} Z`} fill={C.dress} hatch delay={t + 8} dur={30} />
      <Draw d={`M ${lx} ${ly} L ${lx + armL[0] * s} ${ly + armL[1] * s}`} delay={t + 24} dur={12} w={4.5} />
      <Draw d={`M ${rx} ${ry} L ${hx} ${hy}`} delay={t + 24} dur={12} w={4.5} />
      <Draw d={circle(x, hdy, 36 * s)} fill={C.skin} delay={t + 30} dur={22} />
      <Draw d={`M ${x - 37 * s} ${hdy} C ${x - 40 * s} ${hdy - 52 * s} ${x + 40 * s} ${hdy - 52 * s} ${x + 37 * s} ${hdy} C ${x + 20 * s} ${hdy - 20 * s} ${x - 20 * s} ${hdy - 18 * s} ${x - 37 * s} ${hdy} Z`} fill={C.hair} hatch delay={t + 40} dur={22} w={3.5} />
      <Draw d={circle(x - 48 * s, hdy + 18 * s, 12 * s)} fill={C.hair} delay={t + 50} dur={12} w={3} />
      <Draw d={circle(x + 48 * s, hdy + 18 * s, 12 * s)} fill={C.hair} delay={t + 52} dur={12} w={3} />
      <Draw d={`M ${x - 12 * s} ${hdy + 2 * s} l 0.1 0 M ${x + 12 * s} ${hdy + 2 * s} l 0.1 0`} delay={t + 56} dur={4} w={6 * s} />
      <Draw d={`M ${x - 11 * s} ${hdy + 17 * s} q ${11 * s} ${9 * s} ${22 * s} 0`} delay={t + 58} dur={8} w={3} />
      {lantern && (
        <Float ax={4} rot={5} speed={1.6} origin={[hx, hy]}>
          <Glow cx={hx} cy={hy + 55 * s} r={140 * s} delay={t + 60} speed={0.9} />
          <Draw d={`M ${hx} ${hy} L ${hx} ${hy + 22 * s}`} delay={t + 50} dur={6} w={3.5} />
          <Draw d={`M ${hx - 16 * s} ${hy + 22 * s} L ${hx - 16 * s} ${hy + 78 * s} L ${hx + 16 * s} ${hy + 78 * s} L ${hx + 16 * s} ${hy + 22 * s} Z`} fill={C.sun} delay={t + 54} dur={16} w={3.5} />
        </Float>
      )}
    </g>
  );
};
