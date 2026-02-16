import { Volume2, Sliders } from 'lucide-react';

interface MacaAppIconProps {
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  className?: string;
}

export function MacaAppIcon({ size = 'xl', className = '' }: MacaAppIconProps) {
  const sizes = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24',
    lg: 'w-32 h-32',
    xl: 'w-48 h-48',
    '2xl': 'w-64 h-64',
  };

  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-10 h-10',
    lg: 'w-14 h-14',
    xl: 'w-20 h-20',
    '2xl': 'w-28 h-28',
  };

  const sliderSizes = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12',
    '2xl': 'w-16 h-16',
  };

  return (
    <div className={`${sizes[size]} ${className} relative group`}>
      {/* macOS App Icon Style */}
      <div className="relative w-full h-full rounded-[22%] bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 shadow-2xl overflow-hidden">
        {/* Top highlight (macOS style gloss effect) */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/10 to-transparent opacity-60" 
             style={{ clipPath: 'ellipse(100% 40% at 50% 0%)' }} />
        
        {/* Icon content container */}
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-white rounded-full blur-3xl" />
          </div>
          
          {/* Main icon elements */}
          <div className="relative z-10 flex items-center justify-center">
            {/* Volume icon with slider overlay */}
            <div className="relative">
              <Volume2 
                className={`${iconSizes[size]} text-white drop-shadow-2xl`} 
                strokeWidth={2.5} 
              />
              <Sliders 
                className={`${sliderSizes[size]} text-white/90 drop-shadow-lg absolute -bottom-1 -right-1`}
                strokeWidth={2.5}
              />
            </div>
          </div>
        </div>

        {/* Inner shadow for depth */}
        <div className="absolute inset-0 rounded-[22%] shadow-inner-lg pointer-events-none"
             style={{ boxShadow: 'inset 0 2px 12px rgba(0,0,0,0.2)' }} />
      </div>

      {/* Outer glow on hover */}
      <div className="absolute inset-0 rounded-[22%] bg-gradient-to-br from-blue-500 to-purple-500 opacity-0 group-hover:opacity-50 blur-2xl transition-opacity duration-500 -z-10" />
    </div>
  );
}
