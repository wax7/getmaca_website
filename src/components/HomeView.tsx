/**
 * HomeView – CDN-cache-safe version of the Home page.
 * Moved here from /pages/Home.tsx to bypass persistent CDN build cache
 * (same workaround as TermsView.tsx).
 * Rebuilt: 2026-03-12T15:00:00Z
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
import designCreateBg from 'figma:asset/ef27d3d39b4c2bdf481d15f23e6b0d5982edfc5d.png';
import producerMusicBg from 'figma:asset/767d5bccab2e861af9128623e97237d5127806b1.png';
import developerCoderBg from 'figma:asset/51f64e556b66fd4249b648a51735a8604d871bdb.png';
import remoteWorkerBg from 'figma:asset/693eda08fbef49e17fde694db1dfebab2cf5c87d.png';

export function HomeView() {
  const currentLang = useValidatedLang();
  const navigate = useNavigate();
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const scrolled = useScrolled(50);

  // Get translations directly with fallback to English
  const t = useMemo(() => {
    if (!translations) {
      console.error('Translations object is undefined');
      return null;
    }
    const translation = translations[currentLang];
    if (!translation) {
      console.warn(`Translation for ${currentLang} not found, falling back to English`);
      return translations.en;
    }
    return translation;
  }, [currentLang]);

  const homeT = useMemo(() => {
    return homeSectionTranslations[currentLang] || homeSectionTranslations.en;
  }, [currentLang]);

  const faqItems = useMemo(() => {
    return homeFAQTranslations[currentLang] || homeFAQTranslations.en;
  }, [currentLang]);

  if (!t) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white">
        <p>Loading translations...</p>
      </div>
    );
  }

  const handleLanguageChange = (newLang: Language) => {
    navigate(`/${newLang}`);
  };

  const appStoreUrl = 'https://apps.apple.com/app/maca-master-audio-control/id6759258773';

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
      {/* Header */}
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

      {/* Hero Section */}
      <main id="main-content">
        <section className="relative pt-28 sm:pt-32 md:pt-36 pb-6 sm:pb-8 md:pb-10 px-4 sm:px-6 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900" />
          <div className="relative max-w-6xl mx-auto text-center">
            {/* Badge - removed: was not in original design */}

            {/* MACA Brand Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-2 sm:mb-3"
            >
              <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent animate-gradient" style={{ backgroundSize: '200% 200%' }}>
                MACA
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-slate-900 via-blue-800 to-blue-600 dark:from-white dark:via-blue-200 dark:to-blue-400 bg-clip-text text-transparent"
            >
              {t.hero.title}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto text-slate-600 dark:text-slate-300 leading-relaxed"
              data-speakable
            >
              {t.hero.subtitle}
            </motion.p>

            {/* CTAs removed - not in original design */}
          </div>
        </section>

        {/* Screenshot Showcase */}
        <ScreenshotShowcase
          title={homeT.appMockup.title}
          subtitle={homeT.appMockup.subtitle}
          currentLang={currentLang}
        />

        {/* Problem / Solution */}
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

        {/* MacBook Illustration */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 dark:from-slate-800 dark:to-slate-900">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-white">{homeT.allDevices.title}</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                {homeT.allDevices.subtitle}
              </p>
            </motion.div>
            <MacBookIllustration currentLang={currentLang} />
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white dark:bg-slate-900">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-10 sm:mb-14"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
                {t.features.title}
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <FeatureCard icon={<Volume2 className="w-6 h-6" />} title={t.features.perAppVolume.title} description={t.features.perAppVolume.description} gradient="from-blue-500 to-cyan-500" delay={0} />
              <FeatureCard icon={<VolumeX className="w-6 h-6" />} title={t.features.quickMute.title} description={t.features.quickMute.description} gradient="from-red-500 to-pink-500" delay={0.1} />
              <FeatureCard icon={<Target className="w-6 h-6" />} title={t.features.focusMode.title} description={t.features.focusMode.description} gradient="from-amber-500 to-orange-500" delay={0.2} />
              <FeatureCard icon={<Layers className="w-6 h-6" />} title={t.features.audioProfiles.title} description={t.features.audioProfiles.description} gradient="from-emerald-500 to-teal-500" delay={0.3} />
              <FeatureCard icon={<Keyboard className="w-6 h-6" />} title={t.features.keyboardShortcuts.title} description={t.features.keyboardShortcuts.description} gradient="from-violet-500 to-purple-500" delay={0.4} />
              <FeatureCard icon={<Palette className="w-6 h-6" />} title={t.features.nativeDesign.title} description={t.features.nativeDesign.description} gradient="from-pink-500 to-rose-500" delay={0.5} />
              <FeatureCard icon={<Zap className="w-6 h-6" />} title={t.features.magicBoost.title} description={t.features.magicBoost.description} gradient="from-yellow-500 to-amber-500" delay={0.6} />
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-10 sm:mb-14"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
                {t.useCases.title}
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
              <UseCaseCard icon={Paintbrush} title={t.useCases.designerTitle} description={t.useCases.designer} gradient="from-pink-500 to-purple-500" iconGradient="from-pink-400 to-purple-400" delay={0} backgroundImage={designCreateBg} />
              <UseCaseCard icon={Music} title={t.useCases.producerTitle} description={t.useCases.producer} gradient="from-amber-500 to-orange-500" iconGradient="from-amber-400 to-orange-400" delay={0.1} backgroundImage={producerMusicBg} />
              <UseCaseCard icon={Code} title={t.useCases.developerTitle} description={t.useCases.developer} gradient="from-emerald-500 to-teal-500" iconGradient="from-emerald-400 to-teal-400" delay={0.2} backgroundImage={developerCoderBg} />
              <UseCaseCard icon={Wifi} title={t.useCases.remoteTitle} description={t.useCases.remote} gradient="from-blue-500 to-cyan-500" iconGradient="from-blue-400 to-cyan-400" delay={0.3} backgroundImage={remoteWorkerBg} />
            </div>
          </div>
        </section>

        {/* Comparison Table - removed per design decision */}

        {/* Why Not Others - removed per design decision */}

        {/* Testimonials - hidden until later activation */}

        {/* Privacy Section - individual feature props, no array mapping */}
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

        {/* Pricing */}
        <section id="pricing" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white dark:bg-slate-900">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-10 sm:mb-14"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
                {t.pricing.title}
              </h2>
              <p className="text-slate-600 dark:text-slate-300">{t.pricing.subtitle}</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-3xl mx-auto">
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
                delay={0.1}
              />
            </div>

            {/* Benefit Badges */}
            <div className="mt-10 flex flex-wrap justify-center gap-3 sm:gap-4">
              <BenefitBadge icon={<Check className="w-4 h-4" />} text={t.benefits.noSubscriptions} delay={0} />
              <BenefitBadge icon={<Shield className="w-4 h-4" />} text={t.benefits.noTracking} delay={0.1} />
              <BenefitBadge icon={<Lock className="w-4 h-4" />} text={t.benefits.noAds} delay={0.2} />
              <BenefitBadge icon={<Star className="w-4 h-4" />} text={t.benefits.nativeSupport} delay={0.3} />
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900">
          <div className="max-w-5xl mx-auto">
            <FAQSection
              title={homeT.faqTitle}
              items={faqItems.map(item => ({
                question: item.question,
                answer: item.answer,
              }))}
            />
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-white">{t.finalCta.title}</h2>
              <p className="mb-8 text-blue-100 max-w-2xl mx-auto">{t.finalCta.subtitle}</p>
              <a
                href={appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
              >
                <Download className="w-5 h-5" />
                {t.finalCta.cta}
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer currentLang={currentLang} />
    </div>
  );
}