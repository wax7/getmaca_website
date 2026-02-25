import { motion } from 'motion/react';
import { type LucideIcon } from 'lucide-react';

interface UseCaseCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: string;
  iconGradient: string;
  delay: number;
}

export function UseCaseCard({ icon: Icon, title, description, gradient, iconGradient, delay }: UseCaseCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
      className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500"
    >
      {/* Gradient background instead of image */}
      <div className={`relative h-80 overflow-hidden bg-gradient-to-br ${gradient}`}>
        {/* Decorative pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-6 right-6 w-32 h-32 rounded-full border-2 border-white/30" />
          <div className="absolute bottom-12 left-8 w-20 h-20 rounded-full border-2 border-white/20" />
          <div className="absolute top-1/2 left-1/3 w-16 h-16 rounded-full border border-white/15" />
        </div>
        {/* Icon centered */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className={`p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 group-hover:scale-110 transition-transform duration-500`}>
            <Icon className="w-16 h-16 text-white/90" strokeWidth={1.5} />
          </div>
        </div>
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
        <h3 className="text-3xl mb-3 font-semibold">{title}</h3>
        <p className="text-lg text-white/90 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}
