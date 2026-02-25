import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  gradient: string;
  delay: number;
}

export function FeatureCard({ icon, title, description, gradient, delay }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative bg-white dark:bg-slate-800/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl hover:shadow-2xl dark:shadow-black/50 transition-all duration-300 border-2 border-slate-100 dark:border-slate-700 hover:border-slate-200 dark:hover:border-slate-600"
    >
      <div className={`w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br ${gradient} rounded-2xl sm:rounded-3xl flex items-center justify-center mb-4 sm:mb-6 text-white shadow-xl group-hover:scale-110 transition-transform duration-300`}>
        {icon}
      </div>
      <h3 className="text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4 text-slate-900 dark:text-white font-semibold">{title}</h3>
      <p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">{description}</p>
    </motion.div>
  );
}