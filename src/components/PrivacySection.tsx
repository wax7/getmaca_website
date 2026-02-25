import { motion } from 'motion/react';
import { Shield, Lock, Server, Eye } from 'lucide-react';

interface PrivacySectionProps {
  title: string;
  subtitle: string;
  guaranteeTitle: string;
  guaranteeDescription: string;
  features: Array<{
    icon: React.ReactNode;
    title: string;
    description: string;
  }>;
}

export function PrivacySection({ title, subtitle, guaranteeTitle, guaranteeDescription, features }: PrivacySectionProps) {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-16"
        >
          <Shield className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 text-emerald-600 dark:text-emerald-400 mx-auto mb-4 sm:mb-6" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6 text-slate-900 dark:text-white">{title}</h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto px-2">{subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-slate-800 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-xl border-2 border-emerald-200 dark:border-emerald-800 hover:border-emerald-400 dark:hover:border-emerald-600 transition-all"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 md:mb-6 text-white">
                {feature.icon}
              </div>
              <h3 className="text-sm sm:text-base md:text-xl font-semibold text-slate-900 dark:text-white mb-2 sm:mb-3">{feature.title}</h3>
              <p className="text-xs sm:text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-10 sm:mt-16 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 text-center text-white shadow-2xl"
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">{guaranteeTitle}</h3>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
            {guaranteeDescription}
          </p>
        </motion.div>
      </div>
    </section>
  );
}