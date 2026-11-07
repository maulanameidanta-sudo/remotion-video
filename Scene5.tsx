import React from 'react';
import {C} from '../constants';
import {Draw, Float, Glow} from '../components/Sketch';
import {SceneShell} from '../components/SceneShell';
import {Girl, Panel, star, circle} from '../components/Shapes';

const wave = (y: number, x0 = 100) => `M ${x0} ${y} q 40 -26 80 0 t 80 0 t 80 0 t 80 0 t 80 0 t 80 0 t 80 0 t 80 0 t 80 0`;

export const Scene5: React.FC = () => (
  <SceneShell cam={{from: [1.1, 70, 0], to: [1.28, -60, -60]}} lines={['“Jangan takut,” bisiknya.', '“Ayo kita pulang.”']}>
    <Panel fill={C.water} />
    <Draw d={circle(800, 430, 80)} fill={C.moon} delay={8} dur={30} />
    <Draw d="M 60 940 C 260 840 440 860 620 930 S 900 900 1020 860 L 1020 1000 L 60 1000 Z" fill={C.sage} hatch delay={12} dur={36} />
    {[1010, 1090, 1170, 1250, 1330].map((y, i) => (
      <Float key={y} ax={24 + i * 4} speed={0.8 + i * 0.1} phase={i * 1.3}>
        <Draw d={wave(y, 60 + (i % 2) * 40)} delay={20 + i * 8} dur={36} w={3.5} />
      </Float>
    ))}
    <Float ay={12} rot={3} speed={1.1} origin={[540, 1200]}>
      <Draw d="M 330 1140 L 750 1140 C 710 1260 370 1260 330 1140 Z" fill={C.wood} hatch delay={34} dur={36} />
      <Draw d="M 540 1140 L 540 800 L 700 1100 Z" fill="#ffffff" delay={50} dur={30} w={3.5} />
      <Girl x={470} y={1150} s={0.8} t={60} armR={[40, -40]} />
      <Glow cx={610} cy={1085} r={90} delay={70} />
      <Draw d={star(610, 1085, 38)} fill={C.star} delay={70} dur={24} w={3.5} />
    </Float>
  </SceneShell>
);
