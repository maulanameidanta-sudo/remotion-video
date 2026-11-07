import React from 'react';
import {AbsoluteFill, Audio, staticFile} from 'remotion';
import {TransitionSeries, linearTiming} from '@remotion/transitions';
import {fade} from '@remotion/transitions/fade';
import {C, H, SCENE_FRAMES, TRANS, W} from './constants';
import {Scene1} from './scenes/Scene1';
import {Scene2} from './scenes/Scene2';
import {Scene3} from './scenes/Scene3';
import {Scene4} from './scenes/Scene4';
import {Scene5} from './scenes/Scene5';
import {Scene6} from './scenes/Scene6';
import {Scene7} from './scenes/Scene7';

const scenes = [Scene1, Scene2, Scene3, Scene4, Scene5, Scene6, Scene7];

const Paper: React.FC = () => (
  <AbsoluteFill style={{background: C.paper}}>
    <svg width={W} height={H} style={{position: 'absolute', inset: 0, opacity: 0.35, mixBlendMode: 'multiply'}}>
      <filter id="paper-grain">
        <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3" seed="8" />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect width="100%" height="100%" filter="url(#paper-grain)" />
    </svg>
    <AbsoluteFill style={{background: 'radial-gradient(ellipse at center, rgba(0,0,0,0) 55%, rgba(120,90,50,0.28) 100%)'}} />
    <svg width="0" height="0" style={{position: 'absolute'}}>
      <filter id="text-pencil">
        <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="2" seed="2" result="w" />
        <feDisplacementMap in="SourceGraphic" in2="w" scale="3" xChannelSelector="R" yChannelSelector="G" result="o" />
        <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" seed="5" result="g" />
        <feColorMatrix in="g" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 -2 1.8" result="ga" />
        <feComposite in="o" in2="ga" operator="in" />
      </filter>
    </svg>
  </AbsoluteFill>
);

export const Story: React.FC = () => (
  <AbsoluteFill>
    <Paper />
    <TransitionSeries>
      {scenes.flatMap((Scene, i) => {
        const seq = (
          <TransitionSeries.Sequence key={`s${i}`} durationInFrames={SCENE_FRAMES[i]}>
            <Scene />
          </TransitionSeries.Sequence>
        );
        return i < scenes.length - 1
          ? [seq, <TransitionSeries.Transition key={`t${i}`} presentation={fade()} timing={linearTiming({durationInFrames: TRANS})} />]
          : [seq];
      })}
    </TransitionSeries>
    {/* Soundtrack asli, tidak diubah (29,02 dtk) */}
    <Audio src={staticFile('soundtrack.mp3')} />
  </AbsoluteFill>
);
