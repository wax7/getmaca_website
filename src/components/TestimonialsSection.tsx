import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

interface TestimonialsSectionProps {
  title: string;
  subtitle: string;
  comingSoon: string;
  joinUsers: string;
}

export function TestimonialsSection({ title, subtitle, comingSoon, joinUsers }: TestimonialsSectionProps) {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl mb-6 text-slate-900">{title}</h2>
          <p className="text-xl text-slate-600">{subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[...Array(3)].map((_, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-3xl p-8 border-2 border-slate-200 relative"
            >
              <Quote className="w-12 h-12 text-blue-600/20 absolute top-6 right-6" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <div className="space-y-4 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full mx-auto" />
                <p className="text-lg font-semibold text-slate-900">{comingSoon}</p>
                <p className="text-slate-500">User testimonials will be displayed here soon</p>
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
          <p className="text-slate-600 text-lg">
            <strong>{joinUsers}</strong>
          </p>
        </motion.div>
      </div>
    </section>
  );
}