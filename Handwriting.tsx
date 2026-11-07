import React from 'react';
import {Easing, interpolate, useCurrentFrame} from 'remotion';
import {loadFont} from '@remotion/google-fonts/Caveat';
import {C} from '../constants';

const {fontFamily} = loadFont('normal', {weights: ['600'], subsets: ['latin']});

/** Tulisan tangan yang "ditulis" dari kiri ke kanan, baris demi baris. */
export const Handwriting: React.FC<{lines: string[]; start?: number; perLine?: number; size?: number}> = ({lines, start = 16, perLine = 40, size = 92}) => {
  const f = useCurrentFrame();
  return (
    <div style={{position: 'absolute', left: 60, right: 60, bottom: 130, textAlign: 'center', fontFamily: `${fontFamily}, 'Comic Sans MS', cursive`, fontSize: size, lineHeight: 1.15, color: C.ink, filter: 'url(#text-pencil)'}}>
      {lines.map((line, i) => {
        const s = start + i * perLine;
        const p = interpolate(f, [s, s + perLine - 4], [0, 100], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.inOut(Easing.quad)});
        return (
          <div key={i} style={{clipPath: `inset(-12px ${100 - p}% -12px 0)`, transform: `rotate(${i % 2 ? 0.8 : -1.2}deg)`, textShadow: `0 0 1.2px ${C.ink}`}}>
            {line}
          </div>
        );
      })}
    </div>
  );
};
