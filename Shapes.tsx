type RanggaProps = {
  x: number;
  y: number;
  s?: number;
  armL?: [number, number];
  armR?: [number, number];
};

export const Rangga: React.FC<RanggaProps> = ({
  x,
  y,
  s = 1,
  armL = [-45, 20],
  armR = [45, 20],
}) => (
  <g transform={`translate(${x} ${y}) scale(${s})`}>
    {/* Kaki */}
    <path d="M-30 -95 L-38 0 L-5 0 L0 -90" fill="#35323a" stroke="#3d3b42" strokeWidth="5" />
    <path d="M8 -90 L15 0 L48 0 L40 -100" fill="#35323a" stroke="#3d3b42" strokeWidth="5" />

    {/* Sepatu */}
    <path d="M-38 0 Q-55 8 -48 18 L-2 18 Q5 8 -5 0" fill="#29272d" />
    <path d="M15 0 Q5 8 12 18 L58 18 Q62 7 48 0" fill="#29272d" />

    {/* Badan dan baju */}
    <path d="M-48 -205 Q-60 -190 -55 -115 L-42 -85 L42 -85 L55 -115 Q60 -190 45 -205 Q0 -225 -48 -205Z"
      fill="#45434b" stroke="#3d3b42" strokeWidth="5" />

    {/* Leher */}
    <path d="M-15 -225 L-15 -200 Q0 -185 15 -200 L15 -225"
      fill="#f7d6bd" stroke="#3d3b42" strokeWidth="4" />

    {/* Tangan kiri */}
    <path d={`M-45 -195 Q-65 -175 ${-48 + armL[0]} ${-145 + armL[1]}`}
      fill="none" stroke="#f7d6bd" strokeWidth="17" strokeLinecap="round" />
    <path d={`M-45 -195 Q-65 -175 ${-48 + armL[0]} ${-145 + armL[1]}`}
      fill="none" stroke="#3d3b42" strokeWidth="3" strokeLinecap="round" />

    {/* Tangan kanan */}
    <path d={`M45 -195 Q65 -175 ${48 + armR[0]} ${-145 + armR[1]}`}
      fill="none" stroke="#f7d6bd" strokeWidth="17" strokeLinecap="round" />
    <path d={`M45 -195 Q65 -175 ${48 + armR[0]} ${-145 + armR[1]}`}
      fill="none" stroke="#3d3b42" strokeWidth="3" strokeLinecap="round" />

    {/* Kepala */}
    <ellipse cx="0" cy="-255" rx="55" ry="65"
      fill="#f7d6bd" stroke="#3d3b42" strokeWidth="5" />

    {/* Rambut pendek hitam */}
    <path d="M-53 -265 Q-65 -320 -25 -325 Q0 -345 28 -325 Q65 -315 53 -260
      Q35 -285 15 -280 Q-10 -270 -25 -285 Q-40 -270 -53 -265Z"
      fill="#29272d" stroke="#3d3b42" strokeWidth="5" />

    {/* Mata */}
    <path d="M-25 -255 Q-17 -250 -10 -255 M12 -255 Q20 -250 27 -255"
      fill="none" stroke="#3d3b42" strokeWidth="4" strokeLinecap="round" />

    {/* Ekspresi sedih */}
    <path d="M-15 -225 Q0 -235 15 -225"
      fill="none" stroke="#3d3b42" strokeWidth="4" strokeLinecap="round" />
  </g>
);
