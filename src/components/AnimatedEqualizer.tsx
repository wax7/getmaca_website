import { motion } from 'motion/react';

interface AnimatedEqualizerProps {
  className?: string;
  barCount?: number;
  color?: string;
}

export function AnimatedEqualizer({ 
  className = "w-6 h-6", 
  barCount = 5,
  color = "currentColor"
}: AnimatedEqualizerProps) {
  const bars = Array.from({ length: barCount }, (_, i) => i);

  return (
    <div className={`flex items-end justify-center gap-[2px] ${className}`}>
      {bars.map((i) => (
        <motion.div
          key={i}
          className="w-[3px] rounded-full"
          style={{ backgroundColor: color }}
          animate={{
            height: ['20%', '100%', '20%'],
          }}
          transition={{
            duration: 0.8 + Math.random() * 0.4,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.1,
          }}
        />
      ))}
    </div>
  );
}
