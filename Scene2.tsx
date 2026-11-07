
import React from 'react';
import {C} from '../constants';
import {Draw, Float, Move} from '../components/Sketch';
import {SceneShell} from '../components/SceneShell';
import {Rangga, Panel, circle} from '../components/Shapes';

export const Scene2: React.FC = () => (
  <SceneShell
    cam={{from: [1, 0, 0], to: [1.18, -15, 45]}}
    lines={['Harapan-harapan runtuh', 'Napasku sisa separuh']}
  >
    <Panel fill={C.deep} />

    {/* Cahaya kenangan yang memudar */}
    <Draw
      d={circle(540, 390, 145)}
      fill={C.dusk}
      hatch
      delay={5}
      dur={35}
    />

    {/* Pecahan kenangan jatuh */}
    <Move from={[0, 0]} to={[-100, 420]} start={15} end={110}>
      <Draw
        d="M 330 420 L 390 350 L 420 440 Z"
        fill={C.peach}
        delay={10}
        dur={18}
      />
    </Move>

    <Move from={[0, 0]} to={[120, 480]} start={25} end={125}>
      <Draw
        d="M 650 360 L 720 420 L 640 470 Z"
        fill={C.wall}
        delay={15}
        dur={18}
      />
    </Move>

    <Move from={[0, 0]} to={[-60, 350]} start={35} end={130}>
      <Draw
        d="M 780 540 L 840 490 L 820 590 Z"
        fill={C.peach}
        delay={20}
        dur={18}
      />
    </Move>

    <Move from={[0, 0]} to={[80, 380]} start={20} end={120}>
      <Draw
        d="M 250 650 L 310 590 L 330 690 Z"
        fill={C.wall}
        delay={20}
        dur={18}
      />
    </Move>

    {/* Tanah */}
    <Draw
      d="M 0 1050 Q 260 950 520 1060 Q 800 970 1080 1080 L 1080 1550 L 0 1550 Z"
      fill={C.darkgreen}
      hatch
      delay={10}
      dur={40}
    />

    {/* Rangga dalam suasana kehilangan harapan */}
    <Float ay={3} speed={0.35}>
      <Rangga
        x={540}
        y={1480}
        s={1.25}
        armL={[-25, 65]}
        armR={[25, 65]}
      />
    </Float>

    <Draw
      d="M 220 1510 Q 540 1460 860 1510"
      delay={50}
      dur={20}
      w={3}
    />
  </SceneShell>
);
