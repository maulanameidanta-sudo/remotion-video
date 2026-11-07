import React from 'react';
import {Composition} from 'remotion';
import {Story} from './Story';
import {FPS, H, TOTAL_FRAMES, W} from './constants';

export const Root: React.FC = () => (
  <Composition
    id="Story"
    component={Story}
    durationInFrames={TOTAL_FRAMES}
    fps={FPS}
    width={W}
    height={H}
  />
);
