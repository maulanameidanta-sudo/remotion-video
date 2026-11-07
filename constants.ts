export const FPS = 30;
export const W = 1080;
export const H = 1920;
export const TRANS = 15;
// Jumlah durasi adegan = 29 detik (870 frame) + 6 transisi x 15 frame
export const SCENE_FRAMES = [140, 140, 140, 140, 130, 135, 135];
export const TOTAL_FRAMES =
  SCENE_FRAMES.reduce((a, b) => a + b, 0) - TRANS * (SCENE_FRAMES.length - 1); // 870

export const C = {
  ink: '#3d3b42',
  paper: '#f4ecdc',
  peach: '#f6cfae',
  sun: '#f8d878',
  sage: '#b7cfa6',
  grass: '#a9c98f',
  wall: '#f3dcc0',
  roof: '#e59b8f',
  door: '#c49a74',
  night: '#a3b4dc',
  deep: '#8e9fd0',
  moon: '#f7e7a6',
  teal: '#a9cbc6',
  darkgreen: '#8fb597',
  dress: '#ef8f8b',
  skin: '#f7d6bd',
  hair: '#9a7b64',
  wood: '#d1a97e',
  water: '#b5d6e6',
  dusk: '#e3c4d8',
  star: '#f9dc7a',
};
