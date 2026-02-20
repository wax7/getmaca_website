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
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
      whileHover={{ y: -8 }}
      className={`relative rounded-3xl p-8 sm:p-10 transition-all duration-300 ${
        isPro 
          ? 'bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-2xl md:scale-105 border-4 border-white dark:border-slate-800' 
          : 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-xl border-2 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600'
      }`}
    >
      {isPro && badge && (
        <div className="absolute -top-5 left-1/2 -translate-x-1/2">
          <div className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-slate-900 rounded-full text-sm font-bold shadow-xl whitespace-nowrap">
            <Star className="w-5 h-5 fill-current" />
            <span>{badge}</span>
          </div>
        </div>
      )}

      <div className="mb-8">
        <h3 className={`text-3xl mb-4 font-bold ${isPro ? 'text-white' : 'text-slate-900 dark:text-white'}`}>{title}</h3>
        <div className={`text-4xl sm:text-5xl font-bold ${isPro ? 'text-white' : 'text-blue-600 dark:text-blue-400'}`}>{price}</div>
      </div>

      <ul className="space-y-4 sm:space-y-5 mb-10">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3 sm:gap-4">
            <div className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
              isPro ? 'bg-white/20' : 'bg-blue-100 dark:bg-blue-950/50'
            }`}>
              <Check className={`w-4 h-4 sm:w-5 sm:h-5 ${isPro ? 'text-white' : 'text-blue-600 dark:text-blue-400'}`} />
            </div>
            <span className={`leading-relaxed text-base sm:text-lg ${isPro ? 'text-white/95' : 'text-slate-600 dark:text-slate-300'}`}>{feature}</span>
          </li>
        ))}
      </ul>

      <a
        href={ctaLink}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center justify-center gap-3 w-full py-4 sm:py-5 rounded-2xl font-bold text-base sm:text-lg transition-all duration-300 ${
          isPro
            ? 'bg-white text-blue-600 hover:bg-slate-100 shadow-xl hover:shadow-2xl'
            : 'bg-slate-900 dark:bg-blue-600 text-white hover:bg-slate-800 dark:hover:bg-blue-700 shadow-lg hover:shadow-xl'
        }`}
      >
        <Download className="w-5 h-5 sm:w-6 sm:h-6" />
        {cta}
      </a>
    </motion.div>
  );
}
