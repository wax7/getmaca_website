import { Volume2 } from 'lucide-react';
import { motion } from 'motion/react';

interface MacaLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  animated?: boolean;
}

export function MacaLogo({ size = 'md', animated = false }: MacaLogoProps) {
  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24',
    lg: 'w-32 h-32',
    xl: 'w-48 h-48',
  };

  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24',
  };

  const LogoContent = (
    <div className={`relative ${sizeClasses[size]} bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 rounded-3xl flex items-center justify-center shadow-2xl shadow-blue-500/50`}>
      {/* Inner glow effect */}
      <div className="absolute inset-1 bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600 rounded-[22px] flex items-center justify-center">
        {/* Highlight effect */}
        <div className="absolute top-2 left-2 right-2 h-8 bg-gradient-to-b from-white/30 to-transparent rounded-t-[18px]" />
        
        {/* Icon */}
        <Volume2 className={`${iconSizes[size]} text-white drop-shadow-lg`} strokeWidth={2.5} />
      </div>
      
      {/* Outer ring */}
      <div className="absolute inset-0 rounded-3xl border-4 border-white/20" />
    </div>
  );

  if (animated) {
    return (
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ 
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 0.2
        }}
        whileHover={{ 
          scale: 1.1,
          rotate: 5,
          transition: { duration: 0.3 }
        }}
      >
        {LogoContent}
      </motion.div>
    );
  }

  return LogoContent;
}
