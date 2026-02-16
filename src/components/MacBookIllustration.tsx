import { motion } from 'motion/react';
import { translations, Language } from '../locales/translations';
import { AnimatedEqualizer } from './AnimatedEqualizer';

// Device Icon Components
const HeadphoneIcon = () => (
  <g>
    <path
      d="M 20,0 C 20,-22 -20,-22 -20,0 L -20,8 L -25,8 C -27,8 -28,10 -28,12 L -28,20 C -28,22 -27,24 -25,24 L -20,24 L -20,0 M 20,0 L 20,24 L 25,24 C 27,24 28,22 28,20 L 28,12 C 28,10 27,8 25,8 L 20,8 Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </g>
);

const SpeakerIcon = () => (
  <g>
    <rect x="-15" y="-20" width="30" height="40" rx="4" fill="none" stroke="currentColor" strokeWidth="3"/>
    <circle cx="0" cy="-8" r="6" fill="none" stroke="currentColor" strokeWidth="2.5"/>
    <circle cx="0" cy="8" r="10" fill="none" stroke="currentColor" strokeWidth="2.5"/>
  </g>
);

const MonitorIcon = () => (
  <g>
    <rect x="-22" y="-18" width="44" height="28" rx="2" fill="none" stroke="currentColor" strokeWidth="3"/>
    <line x1="-8" y1="10" x2="8" y2="10" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
    <line x1="-12" y1="14" x2="12" y2="14" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
  </g>
);

const AirPodsIcon = () => (
  <g>
    <path
      d="M -8,-20 L -8,-8 C -8,-4 -6,-2 -4,-2 L -4,8 C -4,12 -6,14 -10,14"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <circle cx="-8" cy="-22" r="4" fill="currentColor"/>
    <path
      d="M 8,-20 L 8,-8 C 8,-4 6,-2 4,-2 L 4,8 C 4,12 6,14 10,14"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <circle cx="8" cy="-22" r="4" fill="currentColor"/>
  </g>
);

const BluetoothSpeakerIcon = () => (
  <g>
    <rect x="-18" y="-12" width="36" height="24" rx="12" fill="none" stroke="currentColor" strokeWidth="3"/>
    <circle cx="-8" cy="0" r="4" fill="none" stroke="currentColor" strokeWidth="2"/>
    <circle cx="8" cy="0" r="4" fill="none" stroke="currentColor" strokeWidth="2"/>
    <line x1="-18" y1="-6" x2="-22" y2="-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <line x1="18" y1="-6" x2="22" y2="-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
  </g>
);

// App Icons that travel to devices
const GameIcon = () => (
  <g transform="scale(0.7)">
    {/* Game Controller */}
    <path
      d="M -20,0 C -20,-8 -12,-12 0,-12 C 12,-12 20,-8 20,0 C 20,8 12,12 0,12 C -12,12 -20,8 -20,0 Z"
      fill="currentColor"
    />
    <circle cx="-8" cy="0" r="3" fill="#1e293b"/>
    <circle cx="8" cy="-4" r="2" fill="#1e293b"/>
    <circle cx="12" cy="0" r="2" fill="#1e293b"/>
  </g>
);

const VideoCallIcon = () => (
  <g transform="scale(0.7)">
    {/* Video camera */}
    <rect x="-12" y="-8" width="16" height="16" rx="2" fill="currentColor"/>
    <path d="M 4,-4 L 12,-8 L 12,8 L 4,4 Z" fill="currentColor"/>
    <circle cx="-6" cy="0" r="2.5" fill="#1e293b"/>
  </g>
);

const MusicIcon = () => (
  <g transform="scale(0.7)">
    {/* Music note */}
    <circle cx="4" cy="8" r="5" fill="currentColor"/>
    <circle cx="-6" cy="10" r="5" fill="currentColor"/>
    <rect x="4" y="-10" width="3" height="18" rx="1.5" fill="currentColor"/>
    <rect x="-6" y="-8" width="3" height="18" rx="1.5" fill="currentColor"/>
    <path d="M 7,-10 L 7,-5 L -3,-3 L -3,-8 Z" fill="currentColor"/>
  </g>
);

const NavigationIcon = () => (
  <g transform="scale(0.7)">
    {/* Car/Navigation */}
    <rect x="-14" y="-6" width="28" height="12" rx="3" fill="currentColor"/>
    <circle cx="-8" cy="8" r="4" fill="currentColor"/>
    <circle cx="8" cy="8" r="4" fill="currentColor"/>
    <rect x="-10" y="-10" width="8" height="4" rx="1" fill="currentColor"/>
    <rect x="2" y="-10" width="8" height="4" rx="1" fill="currentColor"/>
    <circle cx="-8" cy="8" r="2" fill="#1e293b"/>
    <circle cx="8" cy="8" r="2" fill="#1e293b"/>
  </g>
);

const VideoEditorIcon = () => (
  <g transform="scale(0.7)">
    {/* Video Editor Timeline */}
    <rect x="-14" y="-10" width="28" height="20" rx="2" fill="currentColor"/>
    {/* Timeline tracks */}
    <rect x="-12" y="-7" width="24" height="3" rx="1" fill="#1e293b"/>
    <rect x="-12" y="-2" width="18" height="3" rx="1" fill="#1e293b"/>
    <rect x="-12" y="3" width="20" height="3" rx="1" fill="#1e293b"/>
    {/* Play head */}
    <rect x="-1" y="-8" width="2" height="16" fill="#1e293b"/>
    <path d="M -1,-10 L -4,-8 L 2,-8 Z" fill="#1e293b"/>
  </g>
);

const VideoIcon = () => (
  <g transform="scale(0.7)">
    {/* YouTube/Video play button */}
    <rect x="-14" y="-10" width="28" height="20" rx="3" fill="currentColor"/>
    <path d="M -4,-6 L -4,6 L 8,0 Z" fill="#1e293b"/>
  </g>
);

export function MacBookIllustration({ currentLang }: { currentLang: Language }) {
  const t = translations[currentLang];
  const devices = [
    { 
      id: 'headphones',
      icon: HeadphoneIcon,
      appIcon: GameIcon,
      appName: 'Gaming',
      label: t.devices.headphones,
      x: -280, 
      y: -140,
      color: '#ec4899'
    },
    { 
      id: 'speaker-left',
      icon: SpeakerIcon,
      appIcon: VideoIcon,
      appName: 'YouTube',
      label: t.devices.speaker,
      x: -300, 
      y: 100,
      color: '#8b5cf6'
    },
    { 
      id: 'monitor',
      icon: MonitorIcon,
      appIcon: VideoEditorIcon,
      appName: 'Final Cut',
      label: t.devices.display,
      x: 280, 
      y: -140,
      color: '#06b6d4'
    },
    { 
      id: 'bluetooth-speaker',
      icon: BluetoothSpeakerIcon,
      appIcon: MusicIcon,
      appName: 'Spotify',
      label: t.devices.bluetooth,
      x: 300, 
      y: 100,
      color: '#10b981'
    },
    { 
      id: 'airpods',
      icon: AirPodsIcon,
      appIcon: VideoCallIcon,
      appName: 'Zoom',
      label: t.devices.airpods,
      x: 0, 
      y: -200,
      color: '#f59e0b'
    },
  ];

  return (
    <div className="relative w-full py-0 -mb-12">
      <svg 
        viewBox="-400 -280 800 460" 
        className="w-full h-auto max-w-7xl mx-auto relative z-10"
        style={{ minHeight: '480px' }}
      >
        {/* Gradient definitions */}
        <defs>
          <linearGradient id="macbook-screen-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1e293b" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>

          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>

          <filter id="app-glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>

          <radialGradient id="center-glow">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Animated connection lines */}
        {devices.map((device, index) => {
          const startX = 0;
          const startY = 0;
          const endX = device.x;
          const endY = device.y;
          
          return (
            <g key={`line-${device.id}`}>
              {/* Static line base */}
              <line
                x1={startX}
                y1={startY}
                x2={endX}
                y2={endY}
                stroke={device.color}
                strokeWidth="2"
                strokeOpacity="0.2"
                strokeLinecap="round"
              />
              
              {/* Animated glowing line */}
              <motion.line
                x1={startX}
                y1={startY}
                x2={endX}
                y2={endY}
                stroke={device.color}
                strokeWidth="3"
                strokeLinecap="round"
                strokeOpacity="0.6"
                filter="url(#glow)"
                animate={{ 
                  strokeOpacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.6
                }}
              />
            </g>
          );
        })}

        {/* Traveling App Icons */}
        {devices.map((device, index) => {
          const startX = 0;
          const startY = 0;
          const endX = device.x;
          const endY = device.y;
          const midX = (startX + endX) / 2;
          const midY = (startY + endY) / 2;
          
          return (
            <g key={`app-${device.id}`}>
              {/* App Icon traveling to device */}
              <motion.g
                style={{ color: device.color }}
                filter="url(#app-glow)"
                animate={{
                  x: [startX, midX * 0.3, midX * 0.7, endX * 0.9, endX, endX, endX],
                  y: [startY, midY * 0.3, midY * 0.7, endY * 0.9, endY, endY, endY],
                  opacity: [0, 0.8, 1, 1, 1, 0.3, 0],
                  scale: [0.3, 0.8, 1, 1.1, 1.2, 0.5, 0]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: [0.25, 0.1, 0.25, 1],
                  delay: index * 1.2
                }}
              >
                {/* App icon background circle */}
                <circle
                  r="18"
                  fill="#1e293b"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <device.appIcon />
              </motion.g>

              {/* App name label that appears near the device */}
              <motion.text
                x={endX}
                y={endY - 55}
                textAnchor="middle"
                fill={device.color}
                fontSize="13"
                fontWeight="700"
                animate={{
                  opacity: [0, 0, 0, 0, 1, 1, 0.5, 0, 0]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 1,
                  times: [0, 0.4, 0.5, 0.55, 0.6, 0.7, 0.8, 0.85, 1]
                }}
              >
                {device.appName}
              </motion.text>
            </g>
          );
        })}

        {/* Center glow effect */}
        <motion.circle
          cx="0"
          cy="0"
          r="120"
          fill="url(#center-glow)"
          animate={{
            opacity: [0.3, 0.5, 0.3],
            r: [120, 140, 120]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* MacBook in center */}
        <g transform="translate(0, 0)">
          {/* Screen shadow */}
          <rect
            x="-87"
            y="-67"
            width="174"
            height="114"
            rx="12"
            fill="black"
            opacity="0.2"
            transform="translate(3, 3)"
          />
          
          {/* MacBook screen outer border */}
          <rect
            x="-85"
            y="-65"
            width="170"
            height="110"
            rx="10"
            fill="#1e293b"
            stroke="#475569"
            strokeWidth="4"
          />
          
          {/* MacBook screen */}
          <rect
            x="-80"
            y="-60"
            width="160"
            height="100"
            rx="6"
            fill="url(#macbook-screen-gradient)"
          />
          
          {/* Screen glow effect */}
          <rect
            x="-78"
            y="-58"
            width="156"
            height="96"
            rx="5"
            fill="#1e40af"
            opacity="0.1"
          />
          
          {/* App windows on screen (small representations) */}
          <g opacity="0.4">
            <rect x="-65" y="-45" width="28" height="20" rx="2" fill="#ec4899" opacity="0.3"/>
            <rect x="-32" y="-45" width="28" height="20" rx="2" fill="#8b5cf6" opacity="0.3"/>
            <rect x="4" y="-45" width="28" height="20" rx="2" fill="#06b6d4" opacity="0.3"/>
            <rect x="37" y="-45" width="28" height="20" rx="2" fill="#10b981" opacity="0.3"/>
            <rect x="-32" y="-20" width="28" height="20" rx="2" fill="#f59e0b" opacity="0.3"/>
          </g>
          
          {/* MACA logo - outer circle with glow */}
          <motion.circle
            cx="0"
            cy="10"
            r="28"
            fill="#3b82f6"
            opacity="0.15"
            animate={{
              r: [28, 32, 28],
              opacity: [0.15, 0.25, 0.15]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* MACA logo - main circle */}
          <circle
            cx="0"
            cy="10"
            r="22"
            fill="none"
            stroke="#3b82f6"
            strokeWidth="2.5"
          />
          
          {/* Animated Equalizer Icon */}
          <g transform="translate(0, 10)">
            {/* 4 animated bars for equalizer */}
            <motion.rect
              x="-10"
              y="0"
              width="4"
              height="16"
              rx="2"
              fill="#3b82f6"
              animate={{
                height: [8, 18, 8],
                y: [8, -1, 8]
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0
              }}
            />
            <motion.rect
              x="-3"
              y="0"
              width="4"
              height="16"
              rx="2"
              fill="#3b82f6"
              animate={{
                height: [12, 16, 12],
                y: [4, 0, 4]
              }}
              transition={{
                duration: 1.0,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.1
              }}
            />
            <motion.rect
              x="4"
              y="0"
              width="4"
              height="16"
              rx="2"
              fill="#3b82f6"
              animate={{
                height: [10, 20, 10],
                y: [6, -2, 6]
              }}
              transition={{
                duration: 0.9,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.2
              }}
            />
            <motion.rect
              x="11"
              y="0"
              width="4"
              height="16"
              rx="2"
              fill="#3b82f6"
              animate={{
                height: [14, 18, 14],
                y: [2, -1, 2]
              }}
              transition={{
                duration: 1.1,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.3
              }}
            />
          </g>
          
          {/* MacBook base/keyboard */}
          <path
            d="M -110,45 L -85,45 L -82,52 L 82,52 L 85,45 L 110,45 L 100,62 L -100,62 Z"
            fill="#374151"
            stroke="#475569"
            strokeWidth="3"
          />
          
          {/* Keyboard detail */}
          <rect
            x="-70"
            y="48"
            width="140"
            height="8"
            rx="1"
            fill="#1f2937"
            opacity="0.6"
          />
          
          {/* Trackpad */}
          <rect
            x="-30"
            y="48"
            width="60"
            height="10"
            rx="3"
            fill="#4b5563"
          />
        </g>

        {/* Audio devices */}
        {devices.map((device, index) => (
          <motion.g
            key={device.id}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              delay: 0.3 + index * 0.15,
              duration: 0.5,
              type: "spring",
              stiffness: 150
            }}
          >
            <g transform={`translate(${device.x}, ${device.y})`}>
              {/* Device glow effect */}
              <motion.circle
                cx="0"
                cy="0"
                r="50"
                fill={device.color}
                opacity="0.1"
                animate={{
                  r: [50, 55, 50],
                  opacity: [0.1, 0.2, 0.1]
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.3
                }}
              />
              
              {/* Device background circle */}
              <motion.circle
                cx="0"
                cy="0"
                r="38"
                fill="#1e293b"
                stroke={device.color}
                strokeWidth="3"
                animate={{
                  strokeOpacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.4
                }}
              />
              
              {/* Device icon */}
              <g transform="scale(0.8)" style={{ color: device.color }}>
                <device.icon />
              </g>
              
              {/* Device label */}
              <text
                x="0"
                y="60"
                textAnchor="middle"
                fill="#64748b"
                fontSize="15"
                fontWeight="600"
              >
                {device.label}
              </text>
            </g>
          </motion.g>
        ))}
      </svg>
    </div>
  );
}