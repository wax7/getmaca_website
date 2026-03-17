import { motion } from 'motion/react';
import { ReactNode } from 'react';
import { useNavigate } from 'react-router';
import { ArrowRight } from 'lucide-react';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  gradient: string;
  delay: number;
  link?: string;
  /** "large" = wider content area, "wide" = full width horizontal, default = standard */
  size?: 'large' | 'wide' | 'default';
}

export function FeatureCard({ icon, title, description, gradient, delay, link, size = 'default' }: FeatureCardProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (link) navigate(link);
  };

  const isWide = size === 'wide';
  const isLarge = size === 'large';

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ y: -3, transition: { duration: 0.2 } }}
      onClick={handleClick}
      className={`group mac-surface rounded-2xl overflow-hidden transition-shadow duration-300 hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_4px_20px_rgba(0,0,0,0.3)] h-full ${link ? 'cursor-pointer' : ''}`}
    >
      {/* macOS-style title bar */}
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-black/[0.04] dark:border-white/[0.06] bg-[#f6f6f6]/60 dark:bg-[#2a2a2c]/40">
        <div className="mac-dot mac-dot-red" style={{ width: 10, height: 10 }} />
        <div className="mac-dot mac-dot-yellow" style={{ width: 10, height: 10 }} />
        <span className="text-xs text-[#86868b] ml-2 truncate">{title}</span>
      </div>

      {/* Content */}
      <div className={`p-5 sm:p-6 ${isWide ? 'flex items-center gap-5' : ''} ${isLarge ? 'sm:p-7' : ''}`}>
        {/* Icon */}
        <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center text-white shadow-sm flex-shrink-0 ${isWide ? '' : 'mb-4'}`}>
          {icon}
        </div>

        <div className={`${isWide ? 'flex-1 min-w-0' : ''}`}>
          <h3 className={`font-semibold text-[#1d1d1f] dark:text-[#f5f5f7] mb-1.5 ${isWide ? 'mb-0.5' : ''}`} style={{ fontSize: 'var(--text-base)' }}>
            {title}
          </h3>
          <p className="text-[#86868b] leading-relaxed" style={{ fontSize: 'var(--text-sm)' }}>
            {description}
          </p>
        </div>

        {/* Arrow indicator for linked cards */}
        {link && (
          <div className={`flex items-center mt-3 ${isWide ? 'mt-0 ml-auto flex-shrink-0' : ''}`}>
            <span className="inline-flex items-center gap-1 text-sm text-[#007AFF] dark:text-[#0A84FF] font-medium opacity-0 group-hover:opacity-100 translate-x-[-4px] group-hover:translate-x-0 transition-all duration-200">
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </div>
        )}
      </div>
    </motion.div>
  );
}