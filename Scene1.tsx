
import React from 'react';
import {C} from '../constants';
import {Draw, Float, Glow} from '../components/Sketch';
import {SceneShell} from '../components/SceneShell';
import {Panel, Rangga, circle} from '../components/Shapes';

export const Scene1: React.FC = () => (
  <SceneShell
    cam={{from: [1, 0, 0], to: [1.12, -20, -35]}}
    lines={['Dan bintang tak lagi jatuh']}
  >
    {/* Langit malam */}
    <Panel fill={C.night} />

    {/* Bulan */}
    <Float ay={8} speed={0.4}>
      <Draw
        d={circle(820, 350, 105)}
        fill={C.moon}
        hatch
        delay={5}
        dur={35}
      />
    </Float>

    {/* Bintang-bintang */}
    <Glow cx={180} cy={300} r={13} delay={5} />
    <Glow cx={350} cy={480} r={10} delay={12} />
    <Glow cx={650} cy={230} r={12} delay={18} />
    <Glow cx={920} cy={620} r={11} delay={25} />
    <Glow cx={470} cy={700} r={8} delay={30} />

    <Draw d={circle(180, 300, 5)} fill={C.paper} delay={5} dur={10} />
    <Draw d={circle(350, 480, 4)} fill={C.paper} delay={12} dur={10} />
    <Draw d={circle(650, 230, 5)} fill={C.paper} delay={18} dur={10} />
    <Draw d={circle(920, 620, 4)} fill={C.paper} delay={25} dur={10} />

    {/* Bukit */}
    <Draw
      d="M 0 1150 Q 250 930 500 1080 Q 760 900 1080 1080 L 1080 1500 L 0 1500 Z"
      fill={C.darkgreen}
      hatch
      delay={10}
      dur={45}
    />

    {/* Rangga berdiri menatap langit */}
    <Rangga x={540} y={1460} s={1.35} />

    {/* Bayangan tanah */}
    <Draw
      d="M 330 1480 Q 540 1440 750 1480"
      w={5}
      delay={50}
      dur={20}
    />
  </SceneShell>
);
