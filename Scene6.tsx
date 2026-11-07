import React from 'react';
import {C} from '../constants';
import {Draw, Float, Glow, Move} from '../components/Sketch';
import {SceneShell} from '../components/SceneShell';
import {Girl, Panel, SmallStar, star} from '../components/Shapes';

export const Scene6: React.FC = () => (
  <SceneShell cam={{from: [1, 0, 0], to: [1.25, 0, 170]}} lines={['Dari puncak bukit, ia', 'mengangkat bintang itu.']}>
    <Panel fill={C.dusk} />
    {[[200, 520, 20], [860, 480, 24], [320, 760, 16], [780, 780, 18], [540, 420, 14]].map(([x, y, r], i) => (
      <SmallStar key={i} x={x} y={y} r={r} t={14 + i * 6} phase={i} />
    ))}
    <Draw d="M 60 1180 C 300 1040 760 1040 1020 1160 L 1020 1400 L 60 1400 Z" fill={C.grass} hatch delay={8} dur={40} />
    <Float ay={3} speed={1}>
      <Girl x={540} y={1180} s={1.5} t={30} armR={[30, -112]} armL={[-46, 40]} />
    </Float>
    <Move from={[0, 0]} to={[0, -430]} start={70} end={130}>
      <Glow cx={597} cy={660} r={150} delay={30} speed={1.3} />
      <Float ay={6} rot={8} speed={1.6} origin={[597, 660]}>
        <Draw d={star(597, 660, 62)} fill={C.star} hatch delay={26} dur={30} w={4.5} />
      </Float>
    </Move>
  </SceneShell>
);
