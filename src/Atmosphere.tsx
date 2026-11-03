const leaves = [[125, 80, -26], [117, 164, 158], [139, 251, -18], [123, 340, 168], [109, 425, -34], [125, 515, 151], [145, 607, -21], [128, 700, 169], [106, 791, -36], [122, 882, 153], [143, 973, -22], [129, 1062, 167]]

function Vine({ mirrored = false }: { mirrored?: boolean }) {
  return <g transform={mirrored ? 'translate(1440 0) scale(-1 1)' : undefined}>
    <path className="vine-stem" d="M132-30C97 80 151 192 127 302S94 434 130 544S151 666 119 776S104 930 135 1045S126 1160 110 1210" />
    {leaves.map(([x, y, angle], index) => <g key={index} transform={`translate(${x} ${y}) rotate(${angle})`}><path className="vine-leaf" d="M0 0C-12-26-49-45-77-37C-69-8-34 15 0 0Z" /><path className="vine-vein" d="M0 0-66-32M-26-12-36-29M-43-20-57-13" /></g>)}
    <path className="vine-tendril" d="M126 302C72 286 54 239 69 222S102 227 87 242M119 776C54 756 44 714 67 701S96 716 78 724" />
  </g>
}

export default function Atmosphere({ paused }: { paused: boolean }) {
  return <div className="site-atmosphere" data-paused={paused} aria-hidden="true"><div className="ambient-glow" /><svg className="ambient-vines" viewBox="0 0 1440 1200" preserveAspectRatio="xMidYMid slice" fill="none"><Vine /><Vine mirrored /></svg><div className="window-light window-light-one" /><div className="window-light window-light-two" /><div className="window-light window-light-three" /></div>
}
