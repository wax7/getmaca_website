import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface BenefitBadgeProps {
  icon: ReactNode;
  text: string;
  delay: number;
}

export function BenefitBadge({ icon, text, delay }: BenefitBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
      whileHover={{ scale: 1.05 }}
      className="flex items-center gap-3 sm:gap-4 p-4 sm:p-6 md:p-8 bg-white/10 backdrop-blur-lg rounded-xl sm:rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 shadow-xl"
    >
      <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-white/20 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <p className="text-white font-medium text-sm sm:text-base md:text-lg leading-relaxed">{text}</p>
    </motion.div>
  );
}