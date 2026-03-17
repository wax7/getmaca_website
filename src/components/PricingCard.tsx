import { motion } from 'motion/react';
import { Check, Download, Star } from 'lucide-react';

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  cta: string;
  ctaLink: string;
  badge?: string;
  isPro?: boolean;
  delay: number;
}

export function PricingCard({ title, price, features, cta, ctaLink, badge, isPro = false, delay }: PricingCardProps) {
  const featureList = Array.isArray(features) ? features : [];
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.45 }}
      whileHover={{ y: -3, transition: { duration: 0.2 } }}
      className={`relative mac-window overflow-hidden ${isPro ? 'ring-2 ring-[#007AFF]/30 dark:ring-[#0A84FF]/30' : ''}`}
    >
      {/* macOS title bar */}
      <div className="mac-titlebar">
        <div className="mac-dot mac-dot-red" />
        <div className="mac-dot mac-dot-yellow" />
        <span className="text-xs text-[#86868b] ml-2">{title}</span>
        {isPro && badge && (
          <span className="ml-auto inline-flex items-center gap-1 px-2.5 py-0.5 bg-[#007AFF] text-white rounded-full text-xs font-medium">
            <Star className="w-3 h-3" />
            {badge}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-6 sm:p-8">
        <div className="mb-6">
          <h3 className="text-xl sm:text-2xl font-bold text-[#1d1d1f] dark:text-[#f5f5f7] mb-2">{title}</h3>
          <div className={`text-3xl sm:text-4xl font-bold ${isPro ? 'text-[#007AFF] dark:text-[#0A84FF]' : 'text-[#1d1d1f] dark:text-[#f5f5f7]'}`}>
            {price}
          </div>
        </div>

        <ul className="space-y-3 mb-8">
          {featureList.map((feature, index) => (
            <li key={index} className="flex items-start gap-2.5">
              <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                isPro ? 'bg-[#007AFF]/10 dark:bg-[#0A84FF]/15' : 'bg-[#28c840]/10'
              }`}>
                <Check className={`w-3 h-3 ${isPro ? 'text-[#007AFF] dark:text-[#0A84FF]' : 'text-[#28c840]'}`} />
              </div>
              <span className="text-sm sm:text-base text-[#1d1d1f]/80 dark:text-[#f5f5f7]/70 leading-relaxed">{feature}</span>
            </li>
          ))}
        </ul>

        <a
          href={ctaLink}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center justify-center gap-2 w-full py-3 rounded-xl font-medium text-[15px] transition-colors ${
            isPro
              ? 'bg-[#007AFF] hover:bg-[#0071E3] text-white shadow-[0_2px_8px_rgba(0,122,255,0.25)]'
              : 'bg-[#1d1d1f] dark:bg-[#f5f5f7] text-white dark:text-[#1d1d1f] hover:opacity-90'
          }`}
        >
          <Download className="w-4 h-4" />
          {cta}
        </a>
      </div>
    </motion.div>
  );
}