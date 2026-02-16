import { motion } from 'motion/react';
import { AlertTriangle, DollarSign } from 'lucide-react';

interface WhyNotOthersProps {
  title: string;
  subtitle: string;
  competitors: Array<{
    name: string;
    price: string;
    issues: string[];
  }>;
}

export function WhyNotOthersSection({ title, subtitle, competitors }: WhyNotOthersProps) {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl mb-6 text-white">{title}</h2>
          <p className="text-xl text-slate-300">{subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {competitors.map((comp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-800/50 backdrop-blur-lg rounded-3xl p-8 border-2 border-red-500/30"
            >
              <div className="flex items-start justify-between mb-6">
                <h3 className="text-2xl font-bold text-white">{comp.name}</h3>
                <div className="flex items-center gap-2 px-4 py-2 bg-red-500/20 rounded-full border border-red-500/30">
                  <DollarSign className="w-5 h-5 text-red-400" />
                  <span className="text-red-400 font-semibold">{comp.price}</span>
                </div>
              </div>
              
              <div className="space-y-4">
                {comp.issues.map((issue, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <AlertTriangle className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
                    <p className="text-slate-300 leading-relaxed">{issue}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl shadow-2xl">
            <span className="text-2xl font-bold text-white">MACA Pro: Just $14.99</span>
            <span className="text-lg text-white/90">One-time. No tricks.</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
