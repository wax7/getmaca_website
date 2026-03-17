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
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.3 }}
      className="mac-pill"
    >
      <span className="text-[#28c840]">{icon}</span>
      <span className="text-[#1d1d1f] dark:text-[#f5f5f7]">{text}</span>
    </motion.div>
  );
}
