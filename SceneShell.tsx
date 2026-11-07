import React from 'react';
import {AbsoluteFill} from 'remotion';
import {Camera, Layered} from './Sketch';
import {Handwriting} from './Handwriting';

export const SceneShell: React.FC<{
  cam: {from: [number, number, number]; to: [number, number, number]};
  lines: string[];
  children: React.ReactNode;
}> = ({cam, lines, children}) => (
  <AbsoluteFill>
    <Camera from={cam.from} to={cam.to}>
      <Layered>{children}</Layered>
    </Camera>
    <Handwriting lines={lines} />
  </AbsoluteFill>
);
