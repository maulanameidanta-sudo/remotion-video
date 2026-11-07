import React from 'react';
import {C} from '../constants';
import {Draw, Float, Move} from '../components/Sketch';
import {SceneShell} from '../components/SceneShell';
import {Girl, Panel, Pine, SmallStar, circle} from '../components/Shapes';

export const Scene3: React.FC = () => (
  <SceneShell cam={{from: [1.15, 70, 0], to: [1.15, -70, -20]}} lines={['Dengan lentera di tangan,', 'ia menyusuri hutan gelap.']}>
    <Panel fill={C.teal} />
    <Draw d={circle(250, 480, 70)} fill={C.moon} delay={10} dur={30} />
    <SmallStar x={600} y={420} t={30} />
    <SmallStar x={850} y={520} t={36} phase={2} r={18} />
    {[120, 330, 560, 790, 980].map((x, i) => (
      <Pine key={x} x={x} y={1130 + (i % 2) * 20} s={1.1 + (i % 3) * 0.15} t={12 + i * 8} fill={C.darkgreen} />
    ))}
    <Draw d="M 60 1260 C 360 1190 700 1220 1020 1180 L 1020 1400 L 60 1400 Z" fill={C.grass} hatch delay={20} dur={40} />
    <Move from={[-240, 0]} to={[200, 0]} start={20} end={135}>
      <Float ay={7} speed={3.6}>
        <Girl x={380} y={1300} s={1.4} t={34} armR={[52, 40]} armL={[-40, 70]} lantern />
      </Float>
    </Move>
  </SceneShell>
);
