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
      className="flex items-center gap-4 p-8 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 shadow-xl"
    >
      <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <p className="text-white font-medium text-lg leading-relaxed">{text}</p>
    </motion.div>
  );
}