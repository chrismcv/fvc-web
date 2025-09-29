"use client"

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Simplified gradients using exact palette colors */}
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#62B6CB" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#FFB703" stopOpacity="0.12" />
          </linearGradient>

          <linearGradient id="grad2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#A5BE00" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#1B4965" stopOpacity="0.08" />
          </linearGradient>

          <radialGradient id="radial1" cx="30%" cy="30%" r="40%">
            <stop offset="0%" stopColor="#FFB703" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#FFB703" stopOpacity="0" />
          </radialGradient>

          <radialGradient id="radial2" cx="70%" cy="70%" r="35%">
            <stop offset="0%" stopColor="#A5BE00" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#A5BE00" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Clean background using exact palette color */}
        <rect width="100%" height="100%" fill="#FFF5E2" />

        {/* Geometric shapes using exact palette colors */}
        <g className="animate-float">
          <polygon points="50,100 200,50 350,150 200,250" fill="#62B6CB" opacity="0.12" />
        </g>

        <g className="animate-float-delayed">
          <circle cx="900" cy="150" r="120" fill="url(#radial1)" className="animate-pulse-slow" />
        </g>

        <g className="animate-float">
          <polygon points="750,350 950,300 1100,400 950,500" fill="#A5BE00" opacity="0.15" />
        </g>

        <g className="animate-float-delayed">
          <ellipse cx="250" cy="550" rx="180" ry="90" fill="#FFB703" opacity="0.1" />
        </g>

        <g className="animate-float">
          <polygon points="950,550 1150,500 1200,650 1000,700" fill="#1B4965" opacity="0.08" />
        </g>

        <g className="animate-float-delayed">
          <circle cx="100" cy="350" r="90" fill="url(#radial2)" className="animate-pulse-slow" />
        </g>

        {/* Flowing organic shapes using palette colors */}
        <g className="animate-float">
          <path
            d="M300,250 Q500,200 700,250 T1000,300 Q800,350 700,300 T300,250"
            fill="none"
            stroke="#62B6CB"
            strokeWidth="2"
            opacity="0.3"
          />
        </g>

        <g className="animate-float-delayed">
          <path
            d="M150,450 Q400,400 650,450 T950,500 Q700,550 650,500 T150,450"
            fill="none"
            stroke="#FFB703"
            strokeWidth="2"
            opacity="0.4"
          />
        </g>

        <g className="animate-float">
          <path
            d="M400,600 Q600,550 800,600 T1100,650 Q900,700 800,650 T400,600"
            fill="none"
            stroke="#A5BE00"
            strokeWidth="2"
            opacity="0.3"
          />
        </g>

        {/* Additional floating elements using exact colors */}
        <g className="animate-float">
          <rect
            x="650"
            y="80"
            width="50"
            height="50"
            rx="10"
            fill="#A5BE00"
            opacity="0.15"
            transform="rotate(45 675 105)"
          />
        </g>

        <g className="animate-float-delayed">
          <polygon points="450,120 480,90 510,120 480,150" fill="#FFB703" opacity="0.2" />
        </g>

        <g className="animate-float">
          <circle cx="1000" cy="250" r="35" fill="#62B6CB" opacity="0.12" />
        </g>
      </svg>
    </div>
  )
}
