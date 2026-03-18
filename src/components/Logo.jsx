// COD Founders logo — box/cube icon in lime green
const Logo = ({ collapsed = false, size = 32 }) => (
  <div className="flex items-center gap-2.5 select-none">
    {/* Icon */}
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Cube/box shape made of "CF" */}
      <rect width="100" height="100" rx="18" fill="#8DC000"/>
      <g transform="translate(14, 12)">
        {/* Top face */}
        <path d="M36 8 L62 18 L36 28 L10 18 Z" fill="white" fillOpacity="0.9"/>
        {/* Left face */}
        <path d="M10 18 L10 52 L36 62 L36 28 Z" fill="white" fillOpacity="0.75"/>
        {/* Right face */}
        <path d="M36 28 L36 62 L62 52 L62 18 Z" fill="white" fillOpacity="0.6"/>
        {/* Inner C shape cutout */}
        <path d="M26 22 L26 48 L36 53 L36 43 L32 41 L32 29 L36 27 L36 17 Z" fill="#8DC000"/>
        {/* F notch */}
        <path d="M36 17 L36 27 L50 21 L50 28 L36 28 L36 33 L48 28.5 L48 35.5 L36 31 L36 62 L62 52 L62 18 Z" fill="#8DC000" fillOpacity="0.5"/>
      </g>
    </svg>

    {!collapsed && (
      <div className="leading-none">
        <span className="text-brand-500 font-black text-lg tracking-tight">COD</span>
        <span className="text-gray-900 font-black text-lg tracking-tight"> FOUNDERS</span>
      </div>
    )}
  </div>
)

export default Logo
