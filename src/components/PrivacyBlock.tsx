import { motion } from 'motion/react';
import { Shield, Lock, Server, Eye } from 'lucide-react';

interface PrivacyCardProps {
  icon: React.ReactNode;
  cardTitle: string;
  cardDescription: string;
  animDelay: number;
}

function PrivacyCard({ icon, cardTitle, cardDescription, animDelay }: PrivacyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: animDelay, duration: 0.4 }}
      className="mac-surface rounded-2xl p-4 sm:p-5 md:p-6 text-center"
    >
      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#28c840]/10 dark:bg-[#32d74b]/10 flex items-center justify-center mx-auto mb-3 text-[#28c840] dark:text-[#32d74b]">
        {icon}
      </div>
      <h3 className="text-sm sm:text-base font-semibold text-[#1d1d1f] dark:text-[#f5f5f7] mb-1.5">{cardTitle}</h3>
      <p className="text-xs sm:text-sm text-[#86868b] leading-relaxed">{cardDescription}</p>
    </motion.div>
  );
}

interface PrivacyBlockProps {
  sectionTitle: string;
  sectionSubtitle: string;
  guaranteeHeading: string;
  guaranteeText: string;
  noDataTitle: string;
  noDataDesc: string;
  localTitle: string;
  localDesc: string;
  noCloudTitle: string;
  noCloudDesc: string;
  noTrackTitle: string;
  noTrackDesc: string;
}

export function PrivacyBlock({
  sectionTitle, sectionSubtitle, guaranteeHeading, guaranteeText,
  noDataTitle, noDataDesc, localTitle, localDesc,
  noCloudTitle, noCloudDesc, noTrackTitle, noTrackDesc,
}: PrivacyBlockProps) {
  return (
    <section className="py-14 sm:py-20 px-4 sm:px-6 mac-bg">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-[#28c840]/10 dark:bg-[#32d74b]/10 mb-4">
            <Shield className="w-6 h-6 text-[#28c840] dark:text-[#32d74b]" />
          </div>
          <h2 className="font-bold mb-3 text-[#1d1d1f] dark:text-[#f5f5f7]" style={{ fontSize: 'var(--text-3xl)' }}>{sectionTitle}</h2>
          <p className="text-[#86868b] max-w-2xl mx-auto" style={{ fontSize: 'var(--text-base)' }}>{sectionSubtitle}</p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          <PrivacyCard icon={<Server className="w-5 h-5" />} cardTitle={noDataTitle || ''} cardDescription={noDataDesc || ''} animDelay={0} />
          <PrivacyCard icon={<Lock className="w-5 h-5" />} cardTitle={localTitle || ''} cardDescription={localDesc || ''} animDelay={0.05} />
          <PrivacyCard icon={<Shield className="w-5 h-5" />} cardTitle={noCloudTitle || ''} cardDescription={noCloudDesc || ''} animDelay={0.1} />
          <PrivacyCard icon={<Eye className="w-5 h-5" />} cardTitle={noTrackTitle || ''} cardDescription={noTrackDesc || ''} animDelay={0.15} />
        </div>

        {/* Guarantee banner */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-8 mac-window overflow-hidden"
        >
          <div className="mac-titlebar">
            <div className="mac-dot mac-dot-red" />
            <div className="mac-dot mac-dot-yellow" />
            <span className="text-xs text-[#86868b] ml-2">Privacy Guarantee</span>
          </div>
          <div className="p-6 sm:p-8 text-center bg-gradient-to-b from-[#28c840]/[0.03] to-transparent dark:from-[#32d74b]/[0.03]">
            <h3 className="text-lg sm:text-xl font-bold mb-2 text-[#1d1d1f] dark:text-[#f5f5f7]">{guaranteeHeading}</h3>
            <p className="text-sm text-[#86868b] max-w-2xl mx-auto leading-relaxed">{guaranteeText}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}