/**
 * HomeView – CDN-cache-safe version of the Home page.
 * Moved here from /pages/Home.tsx to bypass persistent CDN build cache
 * (same workaround as TermsView.tsx).
 * Rebuilt: 2026-03-16T12:00:00Z — macOS-inspired redesign
 */
import { useMemo } from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router';
import { Download, Volume2, VolumeX, Shield, Zap, Target, Layers, Keyboard, Palette, Lock, Server, Eye, Check, Star, Paintbrush, Music, Code, Wifi, Users, MessageCircle } from 'lucide-react';
import { translations, type Language } from '../locales/translations';
import { homeSectionTranslations, homeFAQTranslations } from '../locales/home-translations';
import { Header } from './Header';
import { LanguageSelector } from './LanguageSelector';
import { useDarkMode } from '../hooks/useDarkMode';
import { useScrolled } from '../hooks/useScrolled';
import { useValidatedLang } from '../hooks/useValidatedLang';
import { ProblemSolutionSection } from './ProblemSolutionSection';
import { ScreenshotShowcase } from './ScreenshotShowcase';
import { MacBookIllustration } from './MacBookIllustration';
import { UseCaseCard } from './UseCaseCard';
import { FeatureCard } from './FeatureCard';
import { PrivacyBlock } from './PrivacyBlock';
import { PricingCard } from './PricingCard';
import { BenefitBadge } from './BenefitBadge';
import { FAQSection } from './FAQSection';
import { ComparisonTable } from './ComparisonTable';
import { Footer } from './Footer';
import { FloatingKeywords } from './FloatingKeywords';
import { CtaStarfield } from './CtaStarfield';
import designCreateBg from 'figma:asset/ef27d3d39b4c2bdf481d15f23e6b0d5982edfc5d.png';
import producerMusicBg from 'figma:asset/767d5bccab2e861af9128623e97237d5127806b1.png';
import developerCoderBg from 'figma:asset/51f64e556b66fd4249b648a51735a8604d871bdb.png';
import remoteWorkerBg from 'figma:asset/693eda08fbef49e17fde694db1dfebab2cf5c87d.png';

export function HomeView() {
  const currentLang = useValidatedLang();
  const navigate = useNavigate();
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const scrolled = useScrolled(50);

  const t = useMemo(() => {
    if (!translations) return null;
    return translations[currentLang] || translations.en;
  }, [currentLang]);

  const homeT = useMemo(() => {
    return homeSectionTranslations[currentLang] || homeSectionTranslations.en;
  }, [currentLang]);

  const faqItems = useMemo(() => {
    return homeFAQTranslations[currentLang] || homeFAQTranslations.en;
  }, [currentLang]);

  if (!t) {
    return (
      <div className="min-h-screen flex items-center justify-center mac-bg">
        <p>Loading translations...</p>
      </div>
    );
  }

  const handleLanguageChange = (newLang: Language) => {
    navigate(`/${newLang}`);
  };

  const appStoreUrl = 'https://apps.apple.com/app/maca-master-audio-control/id6759258773';

  const multiRoomDescription = currentLang === 'de'
    ? 'Eine App gleichzeitig auf mehreren Ausgabegeräten abspielen – endlich möglich mit MACA. Leite den Sound parallel auf bis zu vier Geräte gleichzeitig weiter.'
    : 'Play one app across multiple output devices at the same time – now finally possible with MACA. Route audio in parallel to up to four devices simultaneously.';

  return (
    <div className="min-h-screen mac-bg text-[#1d1d1f] dark:text-[#f5f5f7]">
      <Header
        scrolled={scrolled}
        currentLang={currentLang}
        isDarkMode={isDarkMode}
        onToggleDarkMode={toggleDarkMode}
        onLanguageChange={handleLanguageChange}
        badge={t.headerBadge}
      >
        <LanguageSelector
          currentLang={currentLang}
          onLanguageChange={handleLanguageChange}
        />
      </Header>

      <main id="main-content">
        {/* Wrapper for FloatingKeywords – spans Hero through ProblemSolution */}
        <div className="relative overflow-hidden">
          <FloatingKeywords lang={currentLang} isDarkMode={isDarkMode} />

        {/* ══════════ HERO ══════════ */}
        <section className="relative pt-24 sm:pt-28 md:pt-36 pb-8 sm:pb-12 md:pb-16 px-4 sm:px-6 min-h-[480px] md:min-h-[560px] overflow-visible" style={{ zIndex: 5 }}>
          {/* Subtle radial accent behind heading */}
          <div className="absolute top-16 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-[#007AFF]/[0.04] dark:bg-[#0A84FF]/[0.06] blur-[100px] pointer-events-none" />

          <div className="relative max-w-5xl mx-auto text-center" style={{ zIndex: 2 }}>
            {/* Brand name – large, clean */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
            >
              <h1 className="font-bold tracking-[-0.03em] text-[#1d1d1f] dark:text-[#f5f5f7] mb-3" style={{ fontSize: 'var(--text-hero)' }}>
                MACA
              </h1>
              <p className="tracking-wide mb-1" style={{ fontSize: 'var(--text-sm)', color: '#86868b', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                Master Audio Control App
              </p>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-medium text-[#1d1d1f] dark:text-[#f5f5f7] mb-2 tracking-tight" style={{ fontSize: 'var(--text-3xl)' }}
            >
              {t.hero.title}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="max-w-2xl mx-auto text-[#86868b] dark:text-[#86868b] leading-relaxed"
              style={{ fontSize: 'var(--text-lg)', color: '#86868b' }}
              data-speakable
            >
              {t.hero.subtitle}
            </motion.p>

            {/* CTA row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="mt-8 flex items-center justify-center gap-3"
              style={{ overflow: 'visible' }}
            >
              <div className="relative group" style={{ overflow: 'visible', zIndex: 10 }}>
                {/* Converging starfield effect behind button */}
                <CtaStarfield width={360} height={240} isDark={isDarkMode} />
                {/* Static subtle glow */}
                <div
                  className="absolute -inset-6 rounded-full pointer-events-none blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-500"
                  style={{ background: 'radial-gradient(circle at center, rgba(0,122,255,0.25) 0%, transparent 65%)' }}
                />
                <a
                  href={appStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-flex items-center gap-2 px-6 py-2.5 bg-[#007AFF] hover:bg-[#0071E3] text-white rounded-full transition-colors font-medium shadow-[0_2px_8px_rgba(0,122,255,0.25)]"
                  style={{ fontSize: 'var(--text-base)' }}
                >
                  <Download className="w-4 h-4" />
                  {t.finalCta?.cta || 'Download'}
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ══════════ SCREENSHOT SHOWCASE ══════════ */}
        <ScreenshotShowcase
          title={homeT.appMockup.title}
          subtitle={homeT.appMockup.subtitle}
          currentLang={currentLang}
        />

        {/* Separator */}
        <div className="mac-separator relative" style={{ zIndex: 2 }} />

        {/* ══════════ PROBLEM / SOLUTION ══════════ */}
        <ProblemSolutionSection
          problemTitle={t.problem.title}
          problems={t.problem.items}
          solutionTitle={t.solution.title}
          solutionSubtitle={t.solution.subtitle}
          statOneClick={homeT.statOneClick}
          statOneClickLabel={homeT.statOneClickLabel}
          statApps={homeT.statApps}
          statAppsLabel={homeT.statAppsLabel}
        />

        <div className="mac-separator relative" style={{ zIndex: 2 }} />

        </div>{/* End FloatingKeywords wrapper */}

        {/* ══════════ MacBook ══════════ */}
        <section className="py-14 sm:py-20 px-4 sm:px-6 bg-[#1d1d1f]">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-bold mb-3 text-[#f5f5f7]" style={{ fontSize: 'var(--text-3xl)' }}>{homeT.allDevices.title}</h2>
              <p className="text-[#86868b] max-w-2xl mx-auto" style={{ fontSize: 'var(--text-base)' }}>{homeT.allDevices.subtitle}</p>
            </motion.div>
            <MacBookIllustration currentLang={currentLang} />
          </div>
        </section>

        {/* ══════════ FEATURES – Bento Grid ══════════ */}
        <section id="features" className="py-14 sm:py-20 px-4 sm:px-6 mac-bg">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-bold mb-3 text-[#1d1d1f] dark:text-[#f5f5f7]" style={{ fontSize: 'var(--text-3xl)' }}>
                {t.features.title}
              </h2>
            </motion.div>

            {/* Bento Grid – mixed sizes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Row 1: one large card spanning 2 cols + one regular */}
              <div className="sm:col-span-2">
                <FeatureCard icon={<Volume2 className="w-6 h-6" />} title={t.features.perAppVolume.title} description={t.features.perAppVolume.description} gradient="from-blue-500 to-cyan-500" delay={0} link={`/${currentLang}/guide#per-app-volume-control`} size="large" />
              </div>
              <FeatureCard icon={<VolumeX className="w-5 h-5" />} title={t.features.quickMute.title} description={t.features.quickMute.description} gradient="from-red-500 to-pink-500" delay={0.05} link={`/${currentLang}/guide#main-popup-window`} />

              {/* Row 2: three regular */}
              <FeatureCard icon={<Target className="w-5 h-5" />} title={t.features.focusMode.title} description={t.features.focusMode.description} gradient="from-amber-500 to-orange-500" delay={0.1} link={`/${currentLang}/guide#focus-mode`} />
              <FeatureCard icon={<Layers className="w-5 h-5" />} title={t.features.audioProfiles.title} description={t.features.audioProfiles.description} gradient="from-emerald-500 to-teal-500" delay={0.15} link={`/${currentLang}/guide#profiles`} />
              <FeatureCard icon={<Keyboard className="w-5 h-5" />} title={t.features.keyboardShortcuts.title} description={t.features.keyboardShortcuts.description} gradient="from-violet-500 to-purple-500" delay={0.2} link={`/${currentLang}/guide#keyboard-shortcuts`} />

              {/* Row 2b: Multi-room */}
              <FeatureCard icon={<Users className="w-5 h-5" />} title={t.comparison.features.multiRoom} description={multiRoomDescription} gradient="from-indigo-500 to-blue-500" delay={0.225} link={`/${currentLang}/guide#multi-room`} />

              {/* Row 3: one regular + one large spanning 2 cols */}
              <FeatureCard icon={<Palette className="w-5 h-5" />} title={t.features.nativeDesign.title} description={t.features.nativeDesign.description} gradient="from-pink-500 to-rose-500" delay={0.25} link={`/${currentLang}/guide#settings`} />
              <div className="sm:col-span-2">
                <FeatureCard icon={<Zap className="w-6 h-6" />} title={t.features.magicBoost.title} description={t.features.magicBoost.description} gradient="from-yellow-500 to-amber-500" delay={0.3} link={`/${currentLang}/guide#audio-normalizer`} size="large" />
              </div>

              {/* API card full width on mobile, centered on desktop */}
              <div className="sm:col-span-2 lg:col-span-3">
                <FeatureCard icon={<Code className="w-5 h-5" />} title={t.features.localApi.title} description={t.features.localApi.description} gradient="from-cyan-500 to-blue-500" delay={0.35} link={`/${currentLang}/guide#local-api`} size="wide" />
              </div>
            </div>
          </div>
        </section>

        <div className="mac-separator" />

        {/* ══════════ USE CASES ══════════ */}
        <section className="py-14 sm:py-20 px-4 sm:px-6 mac-bg">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-bold mb-3 text-[#1d1d1f] dark:text-[#f5f5f7]" style={{ fontSize: 'var(--text-3xl)' }}>
                {t.useCases.title}
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-4">
              <UseCaseCard icon={Paintbrush} title={t.useCases.designerTitle} description={t.useCases.designer} gradient="from-pink-500 to-purple-500" iconGradient="from-pink-400 to-purple-400" delay={0} backgroundImage={designCreateBg} />
              <UseCaseCard icon={Music} title={t.useCases.producerTitle} description={t.useCases.producer} gradient="from-amber-500 to-orange-500" iconGradient="from-amber-400 to-orange-400" delay={0.05} backgroundImage={producerMusicBg} />
              <UseCaseCard icon={Code} title={t.useCases.developerTitle} description={t.useCases.developer} gradient="from-emerald-500 to-teal-500" iconGradient="from-emerald-400 to-teal-400" delay={0.1} backgroundImage={developerCoderBg} />
              <UseCaseCard icon={Wifi} title={t.useCases.remoteTitle} description={t.useCases.remote} gradient="from-blue-500 to-cyan-500" iconGradient="from-blue-400 to-cyan-400" delay={0.15} backgroundImage={remoteWorkerBg} />
            </div>
          </div>
        </section>

        <div className="mac-separator" />

        {/* ══════════ PRIVACY ══════════ */}
        <PrivacyBlock
          sectionTitle={t.privacy.title}
          sectionSubtitle={t.privacy.subtitle}
          guaranteeHeading={t.privacy.guaranteeTitle}
          guaranteeText={t.privacy.guaranteeDescription}
          noDataTitle={t.privacy?.features?.noData?.title ?? ''}
          noDataDesc={t.privacy?.features?.noData?.description ?? ''}
          localTitle={t.privacy?.features?.localProcessing?.title ?? ''}
          localDesc={t.privacy?.features?.localProcessing?.description ?? ''}
          noCloudTitle={t.privacy?.features?.noCloud?.title ?? ''}
          noCloudDesc={t.privacy?.features?.noCloud?.description ?? ''}
          noTrackTitle={t.privacy?.features?.noTracking?.title ?? ''}
          noTrackDesc={t.privacy?.features?.noTracking?.description ?? ''}
        />

        <div className="mac-separator" />

        {/* ══════════ PRICING ══════════ */}
        <section id="pricing" className="py-14 sm:py-20 px-4 sm:px-6 mac-bg">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-bold mb-3 text-[#1d1d1f] dark:text-[#f5f5f7]" style={{ fontSize: 'var(--text-3xl)' }}>
                {t.pricing.title}
              </h2>
              <p className="text-[#86868b]" style={{ fontSize: 'var(--text-base)' }}>{t.pricing.subtitle}</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
              <PricingCard
                title={t.pricing.free.title}
                price={t.pricing.free.price}
                features={t.pricing.free.features}
                cta={t.pricing.free.cta}
                ctaLink={appStoreUrl}
                delay={0}
              />
              <PricingCard
                title={t.pricing.pro.title}
                price={t.pricing.pro.price}
                features={t.pricing.pro.features}
                cta={t.pricing.pro.cta}
                ctaLink={appStoreUrl}
                badge={t.pricing.pro.badge}
                isPro
                delay={0.05}
              />
            </div>

            {/* Benefit badges */}
            <div className="mt-10 flex flex-wrap justify-center gap-2 sm:gap-3">
              <BenefitBadge icon={<Check className="w-3.5 h-3.5" />} text={t.benefits.noSubscriptions} delay={0} />
              <BenefitBadge icon={<Shield className="w-3.5 h-3.5" />} text={t.benefits.noTracking} delay={0.05} />
              <BenefitBadge icon={<Lock className="w-3.5 h-3.5" />} text={t.benefits.noAds} delay={0.1} />
              <BenefitBadge icon={<Star className="w-3.5 h-3.5" />} text={t.benefits.nativeSupport} delay={0.15} />
            </div>
          </div>
        </section>

        <div className="mac-separator" />

        {/* ══════════ FAQ ══════════ */}
        <section className="py-14 sm:py-20 px-4 sm:px-6 mac-bg">
          <div className="max-w-3xl mx-auto">
            <FAQSection
              title={homeT.faqTitle}
              items={faqItems.map(item => ({
                question: item.question,
                answer: item.answer,
              }))}
            />
          </div>
        </section>

        <div className="mac-separator" />

        {/* ══════════ FINAL CTA ══════════ */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 bg-[#1d1d1f]">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-bold mb-4 text-[#f5f5f7]" style={{ fontSize: 'var(--text-4xl)' }}>{t.finalCta.title}</h2>
              <p className="mb-8 text-[#86868b] max-w-xl mx-auto" style={{ fontSize: 'var(--text-lg)' }}>{t.finalCta.subtitle}</p>
              <a
                href={appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3 bg-[#007AFF] hover:bg-[#0071E3] text-white rounded-full transition-colors font-medium shadow-[0_2px_12px_rgba(0,122,255,0.3)]"
              >
                <Download className="w-5 h-5" />
                {t.finalCta.cta}
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer currentLang={currentLang} />
    </div>
  );
}