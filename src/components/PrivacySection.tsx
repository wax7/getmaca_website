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
    <section className="py-20 px-6 bg-gradient-to-br from-emerald-50 to-teal-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Shield className="w-20 h-20 text-emerald-600 mx-auto mb-6" />
          <h2 className="text-5xl md:text-6xl mb-6 text-slate-900">{title}</h2>
          <p className="text-2xl text-slate-600 max-w-3xl mx-auto">{subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-xl border-2 border-emerald-200 hover:border-emerald-400 transition-all"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6 text-white">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-12 text-center text-white shadow-2xl"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4">{guaranteeTitle}</h3>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
            {guaranteeDescription}
          </p>
        </motion.div>
      </div>
    </section>
  );
}