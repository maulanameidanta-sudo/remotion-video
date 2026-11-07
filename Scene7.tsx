import React from 'react';
import {C} from '../constants';
import {Draw, Float, Glow} from '../components/Sketch';
import {SceneShell} from '../components/SceneShell';
import {Girl, House, Panel, SmallStar, star} from '../components/Shapes';

const pts: [number, number, number][] = [[180, 360, 22], [320, 520, 16], [700, 380, 20], [880, 560, 24], [160, 700, 18], [440, 700, 14], [760, 740, 16], [940, 400, 14], [600, 640, 12], [330, 300, 14]];

export const Scene7: React.FC = () => (
  <SceneShell cam={{from: [1.3, 0, 110], to: [1, 0, 0]}} lines={['Langit pun bersinar lagi,', 'dan kebaikan selalu pulang.']}>
    <Panel fill={C.deep} />
    <Glow cx={540} cy={470} r={260} delay={10} speed={0.7} />
    <Float ay={6} rot={4} speed={0.9} origin={[540, 470]}>
      <Draw d={star(540, 470, 130)} fill={C.star} hatch delay={8} dur={44} w={5} />
    </Float>
    {pts.map(([x, y, r], i) => (
      <SmallStar key={i} x={x} y={y} r={r} t={30 + i * 5} phase={i * 0.8} />
    ))}
    <Draw d="M 60 1180 C 300 1060 700 1060 1020 1150 L 1020 1400 L 60 1400 Z" fill={C.darkgreen} hatch delay={14} dur={40} />
    <House x={300} y={1110} s={0.9} t={44} />
    <Float ay={3} speed={1}>
      <Girl x={700} y={1120} s={1} t={62} armR={[34, -100]} />
    </Float>
  </SceneShell>
);
