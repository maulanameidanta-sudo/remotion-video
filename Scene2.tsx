import React from 'react';
import {C} from '../constants';
import {Draw, Float, Glow, Move} from '../components/Sketch';
import {SceneShell} from '../components/SceneShell';
import {Girl, House, Panel, SmallStar, circle, star} from '../components/Shapes';

const stars: [number, number, number][] = [[200, 420, 24], [380, 330, 18], [560, 480, 26], [900, 600, 20], [250, 700, 18], [700, 340, 16], [480, 640, 14], [860, 820, 18]];

export const Scene2: React.FC = () => (
  <SceneShell cam={{from: [1, 0, 0], to: [1.25, -30, 90]}} lines={['Suatu malam, Laras melihat', 'sebuah bintang jatuh.']}>
    <Panel fill={C.night} />
    <Glow cx={800} cy={430} r={170} color={C.moon} delay={14} speed={0.4} />
    <Draw d={circle(800, 430, 90)} fill={C.moon} hatch delay={8} dur={36} />
    <Draw d={circle(775, 410, 14)} delay={40} dur={10} w={3} />
    <Draw d={circle(830, 460, 10)} delay={44} dur={10} w={3} />
    {stars.map(([x, y, r], i) => (
      <SmallStar key={i} x={x} y={y} r={r} t={20 + i * 6} phase={i} />
    ))}
    <Move from={[0, 0]} to={[470, 620]} start={50} end={125} fade>
      <Draw d="M 210 270 L 70 90 M 235 295 L 110 190" delay={50} dur={10} w={3.5} />
      <Draw d={star(250, 310, 44)} fill={C.star} delay={50} dur={14} w={4} />
      <Glow cx={250} cy={310} r={110} delay={50} />
    </Move>
    <Draw d="M 60 1150 C 300 1000 700 1000 1020 1120 L 1020 1400 L 60 1400 Z" fill={C.darkgreen} hatch delay={14} dur={40} />
    <House x={260} y={1070} s={0.75} t={36} />
    <Float ay={3} speed={1.2}>
      <Girl x={680} y={1090} s={1.3} t={52} armR={[28, -118]} />
    </Float>
  </SceneShell>
);
