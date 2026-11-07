import React from 'react';
import {C} from '../constants';
import {Float} from '../components/Sketch';
import {Draw} from '../components/Sketch';
import {SceneShell} from '../components/SceneShell';
import {Bush, Girl, Panel, StarCreature, circle} from '../components/Shapes';

export const Scene4: React.FC = () => (
  <SceneShell cam={{from: [1, 0, 0], to: [1.5, -30, -293]}} lines={['Di balik semak, sebuah', 'bintang kecil meringkuk.']}>
    <Panel fill="#b9d3bd" />
    <Draw d="M 60 1230 C 360 1170 700 1200 1020 1160 L 1020 1400 L 60 1400 Z" fill={C.grass} hatch delay={8} dur={36} />
    {[0, 1, 2, 3, 4, 5].map((i) => (
      <Float key={i} ax={30} ay={30} speed={0.9} phase={i * 1.7}>
        <Draw d={circle(180 + i * 150, 760 + (i % 3) * 90, 6)} fill={C.star} delay={40 + i * 5} dur={10} w={2.5} />
      </Float>
    ))}
    <StarCreature x={580} y={1150} r={62} t={30} />
    <Bush x={820} y={1130} s={1.2} t={8} fill={C.darkgreen} />
    <Bush x={130} y={1080} s={1.1} t={14} fill={C.darkgreen} />
    <Float ay={3} speed={1}>
      <Girl x={330} y={1260} s={1} t={56} armR={[46, 30]} />
    </Float>
  </SceneShell>
);
