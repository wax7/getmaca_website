import { useMemo } from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router';
import { Download, Volume2, VolumeX, Shield, Zap, Target, Layers, Keyboard, Palette, Lock, Server, Eye, Check, Star, Paintbrush, Music, Code, Wifi, Users, MessageCircle } from 'lucide-react';
import { translations, type Language } from '../locales/translations';
import { homeSectionTranslations, homeFAQTranslations } from '../locales/home-translations';
import { Header } from '../components/Header';
import { LanguageSelector } from '../components/LanguageSelector';
import { useDarkMode } from '../hooks/useDarkMode';
import { useScrolled } from '../hooks/useScrolled';
import { useValidatedLang } from '../hooks/useValidatedLang';
import { ProblemSolutionSection } from '../components/ProblemSolutionSection';
import { ScreenshotShowcase } from '../components/ScreenshotShowcase';
import { MacBookIllustration } from '../components/MacBookIllustration';
import { UseCaseCard } from '../components/UseCaseCard';
import { FeatureCard } from '../components/FeatureCard';
import { PrivacyBlock } from '../components/PrivacyBlock';
import { PricingCard } from '../components/PricingCard';
import { BenefitBadge } from '../components/BenefitBadge';
import { FAQSection } from '../components/FAQSection';
import { ComparisonTable } from '../components/ComparisonTable';
import { Footer } from '../components/Footer';
import designCreateBg from 'figma:asset/ef27d3d39b4c2bdf481d15f23e6b0d5982edfc5d.png';
import producerMusicBg from 'figma:asset/767d5bccab2e861af9128623e97237d5127806b1.png';
import developerCoderBg from 'figma:asset/51f64e556b66fd4249b648a51735a8604d871bdb.png';
import remoteWorkerBg from 'figma:asset/693eda08fbef49e17fde694db1dfebab2cf5c87d.png';

export function Home() {
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
        <section className="relative pt-28 sm:pt-32 md:pt-36 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900" />
          <div className="relative max-w-6xl mx-auto text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-blue-100/80 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 backdrop-blur-sm"
            >
              <Zap className="w-4 h-4" />
              <span data-speakable>{t.hero.badge}</span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-4 sm:mb-6 bg-gradient-to-r from-slate-900 via-blue-800 to-blue-600 dark:from-white dark:via-blue-200 dark:to-blue-400 bg-clip-text text-transparent"
            >
              {t.hero.title}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hero-subtitle max-w-2xl mx-auto mb-8 sm:mb-10 text-slate-600 dark:text-slate-300"
              data-speakable
            >
              {t.hero.subtitle}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <a
                href={appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
              >
                <Download className="w-5 h-5" />
                {t.hero.cta}
              </a>
              <a
                href="#features"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm text-slate-700 dark:text-slate-200 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 hover:-translate-y-1"
              >
                <Eye className="w-5 h-5" />
                {t.hero.secondaryCta}
              </a>
            </motion.div>
          </div>
        </section>

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
        <MacBookIllustration currentLang={currentLang} />

        {/* Screenshot Showcase */}
        <ScreenshotShowcase
          title={homeT.appMockup.title}
          subtitle={homeT.appMockup.subtitle}
          currentLang={currentLang}
        />

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
              <h2 className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
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
              <h2 className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
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

        {/* Comparison Table */}
        <ComparisonTable
          title={t.comparison.title}
          subtitle={t.comparison.subtitle}
          maca={t.comparison.maca}
          others={t.comparison.others}
          features={t.comparison.features}
        />

        {/* Why Not Others */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white dark:bg-slate-900">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-10 sm:mb-14"
            >
              <h2 className="mb-4">{t.whyNotOthers.title}</h2>
              <p className="text-slate-600 dark:text-slate-300">{t.whyNotOthers.subtitle}</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
              {/* MACA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0 }}
                className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-2 border-blue-500 relative"
              >
                <div className="absolute -top-3 left-6 px-3 py-1 bg-blue-600 text-white rounded-full text-xs">
                  <Star className="w-3 h-3 inline mr-1" />Best Value
                </div>
                <h3 className="mb-2 text-blue-600 dark:text-blue-400">MACA Pro</h3>
                <p className="text-slate-900 dark:text-white mb-4">{t.whyNotOthers.macaPrice}</p>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                    <Check className="w-4 h-4 flex-shrink-0" />
                    <span className="text-sm">One-time purchase</span>
                  </div>
                  <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                    <Check className="w-4 h-4 flex-shrink-0" />
                    <span className="text-sm">Native macOS</span>
                  </div>
                  <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                    <Check className="w-4 h-4 flex-shrink-0" />
                    <span className="text-sm">No drivers needed</span>
                  </div>
                </div>
              </motion.div>

              {/* SoundSource */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="p-6 sm:p-8 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
              >
                <h3 className="mb-2 text-slate-600 dark:text-slate-400">{t.whyNotOthers.competitors.soundSource.name}</h3>
                <p className="text-slate-900 dark:text-white mb-4">{t.whyNotOthers.competitors.soundSource.price}</p>
                <div className="flex flex-col gap-2">
                  {t.whyNotOthers.competitors.soundSource.issues.map((issue, i) => (
                    <div key={i} className="flex items-start gap-2 text-red-500 dark:text-red-400">
                      <VolumeX className="w-4 h-4 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{issue}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Audio Hijack */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="p-6 sm:p-8 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
              >
                <h3 className="mb-2 text-slate-600 dark:text-slate-400">{t.whyNotOthers.competitors.audioHijack.name}</h3>
                <p className="text-slate-900 dark:text-white mb-4">{t.whyNotOthers.competitors.audioHijack.price}</p>
                <div className="flex flex-col gap-2">
                  {t.whyNotOthers.competitors.audioHijack.issues.map((issue, i) => (
                    <div key={i} className="flex items-start gap-2 text-red-500 dark:text-red-400">
                      <VolumeX className="w-4 h-4 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{issue}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Testimonials / Social Proof */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-indigo-950/30" aria-labelledby="testimonials-heading">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-10 sm:mb-14"
            >
              <h2 id="testimonials-heading" className="mb-4">{t.testimonials.title}</h2>
              <p className="text-slate-600 dark:text-slate-300">{t.testimonials.subtitle}</p>
            </motion.div>

            {/* Coming Soon Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="max-w-2xl mx-auto"
            >
              <div className="relative p-8 sm:p-12 rounded-3xl bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl border border-slate-200/50 dark:border-slate-700/50 shadow-xl text-center">
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 px-5 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm shadow-lg">
                  {t.testimonials.comingSoon}
                </div>

                <div className="flex justify-center gap-1 mb-6 mt-2" role="img" aria-label="5 stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-amber-400 fill-amber-400" aria-hidden="true" />
                  ))}
                </div>

                <div className="flex justify-center mb-6" aria-hidden="true">
                  <div className="flex -space-x-3">
                    {[
                      'bg-blue-500',
                      'bg-emerald-500',
                      'bg-purple-500',
                      'bg-amber-500',
                      'bg-pink-500',
                    ].map((bg, i) => (
                      <div
                        key={i}
                        className={`w-10 h-10 ${bg} rounded-full border-2 border-white dark:border-slate-800 flex items-center justify-center`}
                      >
                        <Users className="w-4 h-4 text-white" />
                      </div>
                    ))}
                  </div>
                </div>

                <p className="text-slate-700 dark:text-slate-200 mb-4">
                  {t.testimonials.joinUsers}
                </p>

                <div className="flex items-center justify-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                  <MessageCircle className="w-4 h-4" aria-hidden="true" />
                  <span>App Store Reviews</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* All Devices */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="mb-4">{homeT.allDevices.title}</h2>
              <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                {homeT.allDevices.subtitle}
              </p>
            </motion.div>

            <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6">
              {Object.entries(t.devices).map(([key, label], index) => {
                const icons: Record<string, React.ReactNode> = {
                  headphones: <Volume2 className="w-8 h-8" />,
                  speaker: <Volume2 className="w-8 h-8" />,
                  display: <Server className="w-8 h-8" />,
                  bluetooth: <Wifi className="w-8 h-8" />,
                  airpods: <Volume2 className="w-8 h-8" />,
                };
                return (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex flex-col items-center gap-3 p-4 sm:p-6 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
                  >
                    <div className="text-blue-500">{icons[key]}</div>
                    <span className="text-slate-700 dark:text-slate-300">{label}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

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
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-10 sm:mb-14"
            >
              <h2 className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
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

        {/* Final CTA */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="mb-4 text-white">{t.finalCta.title}</h2>
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