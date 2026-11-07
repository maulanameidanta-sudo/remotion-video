import React from 'react';
import {C} from '../constants';
import {Draw, Float} from '../components/Sketch';
import {SceneShell} from '../components/SceneShell';
import {Cloud, House, Panel, Tree, circle} from '../components/Shapes';

export const Scene1: React.FC = () => (
  <SceneShell cam={{from: [1, 0, 0], to: [1.22, -40, -50]}} lines={['Di atas bukit yang sunyi,', 'berdiri sebuah rumah kecil.']}>
    <Panel fill={C.peach} />
    <Float ay={14} speed={0.6}>
      <Draw d={circle(760, 560, 110)} fill={C.sun} hatch delay={6} dur={40} />
    </Float>
    <Cloud x={200} y={520} s={1.4} t={14} />
    <Cloud x={560} y={400} s={1} t={22} ax={30} />
    <Float ax={30} ay={10} speed={0.8}>
      <Draw d="M 230 380 q 20 -25 40 0 q 20 -25 40 0" delay={60} dur={16} w={3.5} />
      <Draw d="M 330 330 q 14 -18 28 0 q 14 -18 28 0" delay={68} dur={16} w={3} />
    </Float>
    <Draw d="M 60 1000 C 260 860 520 880 700 960 S 960 1000 1020 940 L 1020 1400 L 60 1400 Z" fill={C.sage} hatch delay={10} dur={44} />
    <Draw d="M 60 1180 C 300 1040 600 1060 1020 1150 L 1020 1400 L 60 1400 Z" fill={C.grass} hatch delay={24} dur={44} />
    <House x={400} y={1100} s={1.25} t={40} />
    <Tree x={780} y={1130} s={1.1} t={66} />
  </SceneShell>
);
