import { useEffect, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { Download, Volume2, VolumeX, Shield, Zap, Target, Layers, Keyboard, Palette, Lock, Server, Eye, Check, Star, Paintbrush, Music, Code, Wifi } from 'lucide-react';
import { translations, type Language } from '../locales/translations';
import { homeSectionTranslations, homeFAQTranslations } from '../locales/home-translations';
import { Header } from '../components/Header';
import { LanguageSelector } from '../components/LanguageSelector';
import { useDarkMode } from '../hooks/useDarkMode';
import { useScrolled } from '../hooks/useScrolled';
import { ProblemSolutionSection } from '../components/ProblemSolutionSection';
import { ScreenshotShowcase } from '../components/ScreenshotShowcase';
import { MacBookIllustration } from '../components/MacBookIllustration';
import { UseCaseCard } from '../components/UseCaseCard';
import { FeatureCard } from '../components/FeatureCard';
import { PrivacySection } from '../components/PrivacySection';
import { PricingCard } from '../components/PricingCard';
import { BenefitBadge } from '../components/BenefitBadge';
import { FAQSection } from '../components/FAQSection';
import { Footer } from '../components/Footer';
import designCreateBg from 'figma:asset/ef27d3d39b4c2bdf481d15f23e6b0d5982edfc5d.png';
import producerMusicBg from 'figma:asset/767d5bccab2e861af9128623e97237d5127806b1.png';
import developerCoderBg from 'figma:asset/51f64e556b66fd4249b648a51735a8604d871bdb.png';
import remoteWorkerBg from 'figma:asset/693eda08fbef49e17fde694db1dfebab2cf5c87d.png';

export function Home() {
  const { lang } = useParams();
  const navigate = useNavigate();
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const scrolled = useScrolled(50);
  
  // Validate language and default to 'en' if invalid
  const validLanguages: Language[] = ['en', 'de', 'es', 'fr', 'it', 'ja', 'zh-Hans', 'zh-Hant', 'ar', 'ru', 'nl', 'tr', 'sv', 'da', 'ko', 'nb'];
  const requestedLang = lang as Language;
  
  // Always use a valid language, fallback to 'en'
  const currentLang: Language = (lang && validLanguages.includes(requestedLang)) ? requestedLang : 'en';
  
  // Redirect only if the language param is invalid (not for browser detection)
  useEffect(() => {
    if (lang && !validLanguages.includes(lang as Language)) {
      navigate('/en', { replace: true });
    }
  }, [lang]);

  // Get translations directly with fallback to English
  const t = useMemo(() => {
    // Always have a fallback
    if (!translations) {
      console.error('Translations object is undefined');
      return null;
    }
    
    // Try to get the current language
    const translation = translations[currentLang];
    if (!translation) {
      console.warn(`Translation for ${currentLang} not found, falling back to English`);
      return translations.en;
    }
    
    return translation;
  }, [currentLang]);
  
  // Safety check: if translations haven't loaded yet, show loading state
  if (!t || !t.hero || !t.hero.title) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-slate-600 dark:text-slate-400">Loading translations...</p>
        </div>
      </div>
    );
  }

  const handleLanguageChange = (newLang: Language) => {
    navigate(`/${newLang}`);
  };

  const appStoreUrl = "https://apps.apple.com/us/app/maca-master-audio-control/id6759258773";
  
  // Section translations from dedicated file
  const sectionT = homeSectionTranslations[currentLang] || homeSectionTranslations.en;
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-950 transition-colors duration-300 overflow-x-hidden" style={{ maxWidth: '100vw' }}>
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

      <main id="main-content">
      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute -top-40 -left-40 w-96 h-96 bg-blue-400/20 dark:bg-blue-600/10 rounded-full blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div
            className="absolute top-40 -right-40 w-96 h-96 bg-purple-400/20 dark:bg-purple-600/10 rounded-full blur-3xl"
            animate={{
              x: [0, -100, 0],
              y: [0, 100, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto"
          >
            {/* MACA Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="relative text-5xl sm:text-6xl md:text-7xl lg:text-9xl mb-4 leading-tight tracking-tight"
            >
              <span className="relative inline-block">
                <span className="font-black bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 dark:from-blue-400 dark:via-purple-400 dark:to-indigo-500 bg-clip-text text-transparent animate-gradient">
                  MACA
                </span>
                {/* Glow Effect */}
                <span className="absolute inset-0 font-black bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 dark:from-blue-400 dark:via-purple-400 dark:to-indigo-500 bg-clip-text text-transparent blur-2xl opacity-30 animate-pulse">
                  MACA
                </span>
              </span>
            </motion.h1>

            {/* Main Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-8 text-slate-900 dark:text-white leading-tight px-2 sm:px-4"
              style={{ textWrap: 'balance' } as any}
            >
              {t.hero.title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg sm:text-xl md:text-2xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-4xl mx-auto px-2"
            >
              {t.hero.subtitle}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* App Mockup Showcase */}
      <ScreenshotShowcase
        title={sectionT.appMockup.title}
        subtitle={sectionT.appMockup.subtitle}
        currentLang={currentLang}
      />

      {/* Problem Solution Section */}
      <ProblemSolutionSection
        problems={t.problem.items}
        problemTitle={t.problem.title}
        solutionTitle={t.solution.title}
        solutionSubtitle={t.solution.subtitle}
        statOneClick={sectionT.statOneClick}
        statOneClickLabel={sectionT.statOneClickLabel}
        statApps={sectionT.statApps}
        statAppsLabel={sectionT.statAppsLabel}
      />

      {/* MacBook Audio Devices Illustration */}
      <section className="py-6 px-4 sm:px-6 bg-white dark:bg-slate-900 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-6 sm:mb-8"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6 text-slate-900 dark:text-white">
              {sectionT.allDevices.title}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto px-2">
              {sectionT.allDevices.subtitle}
            </p>
          </motion.div>

          <MacBookIllustration currentLang={currentLang} />
        </div>
      </section>

      {/* Use Cases with Real Images */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6 text-slate-900 dark:text-white">{t.useCases.title}</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            <UseCaseCard
              icon={Paintbrush}
              title={t.useCases.designerTitle}
              description={t.useCases.designer}
              gradient="from-pink-500 via-rose-500 to-orange-400"
              iconGradient="from-pink-600 to-rose-600"
              delay={0.1}
              backgroundImage={designCreateBg}
              overlayColor="rgba(190, 40, 110, 0.4)"
            />
            <UseCaseCard
              icon={Music}
              title={t.useCases.producerTitle}
              description={t.useCases.producer}
              gradient="from-purple-600 via-violet-500 to-indigo-500"
              iconGradient="from-purple-600 to-indigo-600"
              delay={0.2}
              backgroundImage={producerMusicBg}
              overlayColor="rgba(102, 51, 153, 0.4)"
            />
            <UseCaseCard
              icon={Code}
              title={t.useCases.developerTitle}
              description={t.useCases.developer}
              gradient="from-blue-600 via-cyan-500 to-teal-400"
              iconGradient="from-blue-600 to-cyan-600"
              delay={0.3}
              backgroundImage={developerCoderBg}
              overlayColor="rgba(0, 123, 255, 0.4)"
            />
            <UseCaseCard
              icon={Wifi}
              title={t.useCases.remoteTitle}
              description={t.useCases.remote}
              gradient="from-emerald-500 via-green-500 to-teal-400"
              iconGradient="from-emerald-600 to-teal-600"
              delay={0.4}
              backgroundImage={remoteWorkerBg}
              overlayColor="rgba(20, 120, 180, 0.45)"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6 text-slate-900 dark:text-white">{t.features.title}</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            <FeatureCard
              icon={<Volume2 className="w-10 h-10" />}
              title={t.features.perAppVolume.title}
              description={t.features.perAppVolume.description}
              gradient="from-blue-500 to-blue-600"
              delay={0.1}
            />
            <FeatureCard
              icon={<VolumeX className="w-10 h-10" />}
              title={t.features.quickMute.title}
              description={t.features.quickMute.description}
              gradient="from-purple-500 to-purple-600"
              delay={0.2}
            />
            <FeatureCard
              icon={<Target className="w-10 h-10" />}
              title={t.features.focusMode.title}
              description={t.features.focusMode.description}
              gradient="from-indigo-500 to-indigo-600"
              delay={0.3}
            />
            <FeatureCard
              icon={<Layers className="w-10 h-10" />}
              title={t.features.audioProfiles.title}
              description={t.features.audioProfiles.description}
              gradient="from-emerald-500 to-emerald-600"
              delay={0.4}
            />
            <FeatureCard
              icon={<Keyboard className="w-10 h-10" />}
              title={t.features.keyboardShortcuts.title}
              description={t.features.keyboardShortcuts.description}
              gradient="from-orange-500 to-orange-600"
              delay={0.5}
            />
            <FeatureCard
              icon={<Palette className="w-10 h-10" />}
              title={t.features.nativeDesign.title}
              description={t.features.nativeDesign.description}
              gradient="from-pink-500 to-pink-600"
              delay={0.6}
            />
            <FeatureCard
              icon={<Zap className="w-10 h-10" />}
              title={t.features.magicBoost.title}
              description={t.features.magicBoost.description}
              gradient="from-yellow-500 to-yellow-600"
              delay={0.7}
            />
          </div>
        </div>
      </section>

      {/* Privacy Section */}
      <PrivacySection
        title={t.privacy.title}
        subtitle={t.privacy.subtitle}
        guaranteeTitle={t.privacy.guaranteeTitle}
        guaranteeDescription={t.privacy.guaranteeDescription}
        features={[
          {
            icon: <Shield className="w-8 h-8" />,
            title: t.privacy.features.noData.title,
            description: t.privacy.features.noData.description
          },
          {
            icon: <Lock className="w-8 h-8" />,
            title: t.privacy.features.localProcessing.title,
            description: t.privacy.features.localProcessing.description
          },
          {
            icon: <Server className="w-8 h-8" />,
            title: t.privacy.features.noCloud.title,
            description: t.privacy.features.noCloud.description
          },
          {
            icon: <Eye className="w-8 h-8" />,
            title: t.privacy.features.noTracking.title,
            description: t.privacy.features.noTracking.description
          }
        ]}
      />

      {/* Pricing Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white dark:bg-slate-900/50 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6 text-slate-900 dark:text-white">{t.pricing.title}</h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto px-2">{t.pricing.subtitle}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto px-2">
            <PricingCard
              title={t.pricing.free.title}
              price={t.pricing.free.price}
              features={t.pricing.free.features}
              cta={t.pricing.free.cta}
              ctaLink={appStoreUrl}
              delay={0.1}
            />
            <PricingCard
              title={t.pricing.pro.title}
              price={t.pricing.pro.price}
              features={t.pricing.pro.features}
              cta={t.pricing.pro.cta}
              ctaLink={appStoreUrl}
              badge={t.pricing.pro.badge}
              isPro
              delay={0.2}
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            <BenefitBadge
              icon={<Check className="w-6 h-6" />}
              text={t.benefits.noSubscriptions}
              delay={0.1}
            />
            <BenefitBadge
              icon={<Shield className="w-6 h-6" />}
              text={t.benefits.noTracking}
              delay={0.2}
            />
            <BenefitBadge
              icon={<Star className="w-6 h-6" />}
              text={t.benefits.noAds}
              delay={0.3}
            />
            <BenefitBadge
              icon={<Zap className="w-6 h-6" />}
              text={t.benefits.nativeSupport}
              delay={0.4}
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        title={sectionT.faqTitle}
        items={homeFAQTranslations[currentLang] || homeFAQTranslations.en}
      />

      {/* Final CTA */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6">{t.finalCta.title}</h2>
            <p className="text-lg sm:text-xl md:text-2xl text-blue-100 mb-8 sm:mb-10 leading-relaxed px-2">
              {t.finalCta.subtitle}
            </p>
            <a
              href={appStoreUrl}
              className="inline-flex items-center gap-2 sm:gap-3 px-8 sm:px-12 py-4 sm:py-6 bg-white text-blue-600 rounded-2xl hover:bg-slate-50 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:-translate-y-1 text-base sm:text-lg md:text-xl font-semibold"
            >
              <Download className="w-5 h-5 sm:w-7 sm:h-7" />
              <span>{t.finalCta.cta}</span>
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