import { useEffect, useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router';
import { motion } from 'motion/react';
import {
  BookOpen, X,
  Rocket, Monitor, Layout, Volume2, Router, Sliders, Phone,
  Gauge, FolderOpen, Speaker, Keyboard, Mic, Settings,
  HeartPulse, Crown, Wrench, ExternalLink
} from 'lucide-react';
import { translations, type Language } from '../locales/translations';
import { getGuideTranslation } from '../locales/guide';
import { Header } from '../components/Header';
import { LanguageSelector } from '../components/LanguageSelector';
import { Footer } from '../components/Footer';
import { useDarkMode } from '../hooks/useDarkMode';
import { useScrolled } from '../hooks/useScrolled';

const sectionIcons = [
  <Rocket className="w-5 h-5" />, <Monitor className="w-5 h-5" />, <Layout className="w-5 h-5" />,
  <Volume2 className="w-5 h-5" />, <Router className="w-5 h-5" />, <Sliders className="w-5 h-5" />,
  <Phone className="w-5 h-5" />, <Gauge className="w-5 h-5" />, <FolderOpen className="w-5 h-5" />,
  <Speaker className="w-5 h-5" />, <Keyboard className="w-5 h-5" />, <Mic className="w-5 h-5" />,
  <Settings className="w-5 h-5" />, <HeartPulse className="w-5 h-5" />, <Crown className="w-5 h-5" />,
  <Wrench className="w-5 h-5" />,
];

const sectionIconsLg = [
  <Rocket className="w-6 h-6" />, <Monitor className="w-6 h-6" />, <Layout className="w-6 h-6" />,
  <Volume2 className="w-6 h-6" />, <Router className="w-6 h-6" />, <Sliders className="w-6 h-6" />,
  <Phone className="w-6 h-6" />, <Gauge className="w-6 h-6" />, <FolderOpen className="w-6 h-6" />,
  <Speaker className="w-6 h-6" />, <Keyboard className="w-6 h-6" />, <Mic className="w-6 h-6" />,
  <Settings className="w-6 h-6" />, <HeartPulse className="w-6 h-6" />, <Crown className="w-6 h-6" />,
  <Wrench className="w-6 h-6" />,
];

const sectionIds = [
  'getting-started', 'menu-bar-icon', 'main-popup-window', 'per-app-volume-control',
  'per-app-audio-routing', 'per-app-equalizer', 'focus-mode', 'audio-normalizer',
  'profiles', 'secondary-devices', 'keyboard-shortcuts', 'siri-and-shortcuts',
  'settings', 'audio-health-monitor', 'free-vs-pro', 'troubleshooting',
];

// --- Helper Components ---

function GuideTable({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="overflow-x-auto my-6 rounded-xl border border-slate-200 dark:border-slate-700">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-slate-100 dark:bg-slate-800">
            {headers.map((h, i) => (
              <th key={i} className="px-4 py-3 text-left text-slate-700 dark:text-slate-300 font-semibold first:rounded-tl-xl last:rounded-tr-xl">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-t border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-3 text-slate-600 dark:text-slate-400">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ProBadge() {
  return <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-semibold ml-2">Pro</span>;
}

function Kbd({ children }: { children: React.ReactNode }) {
  return <kbd className="px-2 py-0.5 rounded-md bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-mono border border-slate-300 dark:border-slate-600">{children}</kbd>;
}

function SectionHeading({ number, title, icon, sectionLabel }: { number: number; title: string; icon: React.ReactNode; sectionLabel: string }) {
  return (
    <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex items-center gap-3 mb-6">
      <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white shadow-lg flex-shrink-0">{icon}</div>
      <div>
        <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">{sectionLabel} {number}</span>
        <h2 className="text-2xl sm:text-3xl text-slate-900 dark:text-white">{title}</h2>
      </div>
    </motion.div>
  );
}

function GuideCard({ children }: { children: React.ReactNode }) {
  return (
    <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white dark:bg-slate-800/80 rounded-2xl border border-slate-200 dark:border-slate-700 p-6 sm:p-8 shadow-sm backdrop-blur-sm text-slate-600 dark:text-slate-400 leading-relaxed">
      {children}
    </motion.div>
  );
}

function Callout({ children, variant = 'info' }: { children: React.ReactNode; variant?: 'info' | 'warning' }) {
  const colors = variant === 'warning'
    ? 'bg-amber-50 dark:bg-amber-900/20 border-amber-300 dark:border-amber-700 text-amber-800 dark:text-amber-200'
    : 'bg-blue-50 dark:bg-blue-900/20 border-blue-300 dark:border-blue-700 text-blue-800 dark:text-blue-200';
  return <div className={`mt-6 p-4 rounded-xl border ${colors} text-sm`}>{children}</div>;
}

function IconStyleCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600">
      <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-1">{title}</h4>
      <p className="text-xs text-slate-500 dark:text-slate-400">{description}</p>
    </div>
  );
}

function BoldItem({ bold, text }: { bold: string; text: string }) {
  return <><strong className="text-slate-800 dark:text-slate-200">{bold}</strong> — {text}</>;
}

// --- Main Component ---

export function Guide() {
  const { lang } = useParams();
  const navigate = useNavigate();
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const scrolled = useScrolled(50);
  const [activeSection, setActiveSection] = useState(sectionIds[0]);
  const [tocOpen, setTocOpen] = useState(false);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  const validLanguages: Language[] = ['en', 'de', 'es', 'fr', 'it', 'ja', 'zh-Hans', 'zh-Hant', 'ar', 'ru', 'nl', 'tr', 'sv', 'da', 'ko', 'nb'];
  const currentLang: Language = (lang && validLanguages.includes(lang as Language)) ? lang as Language : 'en';

  useEffect(() => {
    if (lang && !validLanguages.includes(lang as Language)) {
      navigate('/en/guide', { replace: true });
    }
  }, [lang]);

  const t = translations[currentLang] || translations.en;
  const g = getGuideTranslation(currentLang);

  const handleLanguageChange = (newLang: Language) => {
    navigate(`/${newLang}/guide`);
  };

  const scrollToSection = (sectionId: string) => {
    const el = sectionRefs.current[sectionId];
    if (el) {
      const headerOffset = 100;
      const elementPosition = el.getBoundingClientRect().top;
      const currentScroll = document.body.scrollTop || document.documentElement.scrollTop || window.scrollY;
      const offsetPosition = currentScroll + elementPosition - headerOffset;
      document.body.scrollTop = offsetPosition;
      document.documentElement.scrollTop = offsetPosition;
      try { window.scrollTo({ top: offsetPosition, behavior: 'smooth' }); } catch {}
    }
    setTocOpen(false);
  };

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    sectionIds.forEach((id) => {
      const el = sectionRefs.current[id];
      if (!el) return;
      const observer = new IntersectionObserver(
        (entries) => { entries.forEach((entry) => { if (entry.isIntersecting) setActiveSection(id); }); },
        { rootMargin: '-120px 0px -60% 0px', threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  useEffect(() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    try { window.scrollTo({ top: 0 }); } catch {}
  }, []);

  const setRef = (id: string) => (el: HTMLElement | null) => { sectionRefs.current[id] = el; };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-950 transition-colors duration-300 overflow-x-hidden" style={{ maxWidth: '100vw' }}>
      <Header scrolled={scrolled} currentLang={currentLang} isDarkMode={isDarkMode} onToggleDarkMode={toggleDarkMode} onLanguageChange={handleLanguageChange} badge={t.headerBadge}>
        <LanguageSelector currentLang={currentLang} onLanguageChange={handleLanguageChange} />
      </Header>

      {/* Hero */}
      <section className="relative pt-28 sm:pt-36 pb-10 sm:pb-14 px-4 sm:px-6">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-400/15 dark:bg-blue-600/10 rounded-full blur-3xl" />
          <div className="absolute top-20 -left-40 w-96 h-96 bg-purple-400/15 dark:bg-purple-600/10 rounded-full blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-sm font-medium mb-6">
              <BookOpen className="w-4 h-4" />
              <span>{g.versionLabel} v1.0.671</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl mb-4 text-slate-900 dark:text-white">{g.pageTitle}</h1>
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">{g.pageSubtitle}</p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-16 sm:pb-20">
        <div className="flex gap-8 lg:gap-12 relative">
          {/* Desktop Sidebar TOC */}
          <aside className="hidden lg:block w-72 flex-shrink-0">
            <div className="sticky top-24">
              <nav className="bg-white dark:bg-slate-800/80 rounded-2xl border border-slate-200 dark:border-slate-700 p-4 shadow-sm backdrop-blur-sm max-h-[calc(100vh-120px)] overflow-y-auto">
                <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider px-3 mb-3">{g.tocTitle}</h3>
                <ul className="space-y-0.5">
                  {sectionIds.map((id, i) => (
                    <li key={id}>
                      <button onClick={() => scrollToSection(id)} className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm transition-all text-left ${activeSection === id ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-medium' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700/50 hover:text-slate-900 dark:hover:text-white'}`}>
                        <span className={`flex-shrink-0 ${activeSection === id ? 'text-blue-500' : 'text-slate-400 dark:text-slate-500'}`}>{sectionIcons[i]}</span>
                        <span className="truncate">{i + 1}. {g.sectionTitles[i]}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </aside>

          {/* Mobile TOC */}
          <div className="lg:hidden fixed bottom-6 right-6 z-30">
            <button onClick={() => setTocOpen(!tocOpen)} className="w-14 h-14 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-full shadow-xl flex items-center justify-center hover:scale-110 transition-transform" aria-label={g.tocTitle}>
              {tocOpen ? <X className="w-6 h-6" /> : <BookOpen className="w-6 h-6" />}
            </button>
          </div>
          {tocOpen && (
            <>
              <div className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-30" onClick={() => setTocOpen(false)} />
              <motion.div initial={{ y: '100%' }} animate={{ y: 0 }} className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white dark:bg-slate-800 rounded-t-3xl shadow-2xl max-h-[70vh] overflow-y-auto p-6">
                <div className="w-12 h-1.5 bg-slate-300 dark:bg-slate-600 rounded-full mx-auto mb-4" />
                <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3">{g.tocTitle}</h3>
                <ul className="space-y-0.5">
                  {sectionIds.map((id, i) => (
                    <li key={id}>
                      <button onClick={() => scrollToSection(id)} className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg text-sm transition-all text-left min-h-[44px] ${activeSection === id ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-medium' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700/50'}`}>
                        <span className={activeSection === id ? 'text-blue-500' : 'text-slate-400'}>{sectionIcons[i]}</span>
                        <span>{i + 1}. {g.sectionTitles[i]}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </>
          )}

          {/* Content */}
          <main className="flex-1 min-w-0">
            <div className="space-y-12 sm:space-y-16">

              {/* S1: Getting Started */}
              <section ref={setRef('getting-started')} id="getting-started">
                <SectionHeading number={1} title={g.s1.title} icon={sectionIconsLg[0]} sectionLabel={g.sectionLabel} />
                <GuideCard>
                  <p>{g.s1.intro}</p>
                  <h3 className="text-lg text-slate-900 dark:text-white mt-8 mb-3">{g.s1.firstLaunchTitle}</h3>
                  <p className="mb-4">{g.s1.firstLaunchIntro}</p>
                  <ol className="list-decimal list-inside space-y-2 text-slate-600 dark:text-slate-400">
                    {g.s1.firstLaunchSteps.map(([bold, desc], i) => <li key={i}><BoldItem bold={bold} text={desc} /></li>)}
                  </ol>
                  <Callout>{g.s1.firstLaunchCallout}</Callout>
                  <h3 className="text-lg text-slate-900 dark:text-white mt-8 mb-3">{g.s1.launchAtLoginTitle}</h3>
                  <p>{g.s1.launchAtLoginText}</p>
                </GuideCard>
              </section>

              {/* S2: Menu Bar Icon */}
              <section ref={setRef('menu-bar-icon')} id="menu-bar-icon">
                <SectionHeading number={2} title={g.s2.title} icon={sectionIconsLg[1]} sectionLabel={g.sectionLabel} />
                <GuideCard>
                  <p className="mb-4">{g.s2.intro}</p>
                  <h3 className="text-lg text-slate-900 dark:text-white mt-6 mb-3">{g.s2.iconStylesTitle}</h3>
                  <div className="grid sm:grid-cols-2 gap-3 my-4">
                    {g.s2.iconStyles.map(([title, desc], i) => <IconStyleCard key={i} title={title} description={desc} />)}
                  </div>
                  <h3 className="text-lg text-slate-900 dark:text-white mt-8 mb-3">{g.s2.levelMeterTitle}</h3>
                  <p className="mb-2">{g.s2.levelMeterIntro}</p>
                  <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-400">
                    {g.s2.levelMeterDetails.map(([bold, desc], i) => <li key={i}><BoldItem bold={bold} text={desc} /></li>)}
                  </ul>
                  <h3 className="text-lg text-slate-900 dark:text-white mt-8 mb-3">{g.s2.additionalTitle}</h3>
                  <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-400">
                    {g.s2.additionalItems.map(([bold, desc], i) => <li key={i}><BoldItem bold={bold} text={desc} /></li>)}
                  </ul>
                </GuideCard>
              </section>

              {/* S3: Main Popup Window */}
              <section ref={setRef('main-popup-window')} id="main-popup-window">
                <SectionHeading number={3} title={g.s3.title} icon={sectionIconsLg[2]} sectionLabel={g.sectionLabel} />
                <GuideCard>
                  <p className="mb-6">{g.s3.intro}</p>
                  <h3 className="text-lg text-slate-900 dark:text-white mb-3">{g.s3.masterVolumeTitle}</h3>
                  <p className="mb-4">{g.s3.masterVolumeIntro}</p>
                  <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-400 mb-6">
                    {g.s3.masterVolumeItems.map(([bold, desc], i) => (
                      <li key={i}><BoldItem bold={bold} text={desc} />{i === 2 && <ProBadge />}</li>
                    ))}
                  </ul>
                  <h3 className="text-lg text-slate-900 dark:text-white mb-3">{g.s3.searchSortTitle}</h3>
                  <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-400 mb-6">
                    {g.s3.searchSortItems.map(([bold, desc], i) => <li key={i}><BoldItem bold={bold} text={desc} /></li>)}
                  </ul>
                  <h3 className="text-lg text-slate-900 dark:text-white mb-3">{g.s3.profilePickerTitle}</h3>
                  <p className="mb-6">{g.s3.profilePickerText}</p>
                  <h3 className="text-lg text-slate-900 dark:text-white mb-3">{g.s3.appListTitle}</h3>
                  <p className="mb-2">{g.s3.appListIntro}</p>
                  <ul className="list-disc list-inside space-y-1 text-slate-600 dark:text-slate-400 mb-6">
                    {g.s3.appListItems.map((item, i) => <li key={i}>{i === 0 && <span className="inline-block w-2.5 h-2.5 bg-green-500 rounded-full align-middle mx-1" />}{item}</li>)}
                  </ul>
                  <h3 className="text-lg text-slate-900 dark:text-white mb-3">{g.s3.systemProcessesTitle}</h3>
                  <p className="mb-6">{g.s3.systemProcessesText}</p>
                  <h3 className="text-lg text-slate-900 dark:text-white mb-3">{g.s3.secondaryDevicesTitle}</h3>
                  <p className="mb-6">{g.s3.secondaryDevicesText}</p>
                  <h3 className="text-lg text-slate-900 dark:text-white mb-3">{g.s3.footerTitle}</h3>
                  <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-400">
                    {g.s3.footerItems.map(([bold, desc], i) => <li key={i}><BoldItem bold={bold} text={desc} /></li>)}
                  </ul>
                </GuideCard>
              </section>

              {/* S4: Per-App Volume Control */}
              <section ref={setRef('per-app-volume-control')} id="per-app-volume-control">
                <SectionHeading number={4} title={g.s4.title} icon={sectionIconsLg[3]} sectionLabel={g.sectionLabel} />
                <GuideCard>
                  <p className="mb-4">{g.s4.intro}</p>
                  <GuideTable headers={g.s4.tableHeaders} rows={g.s4.tableRows} />
                  <h3 className="text-lg text-slate-900 dark:text-white mt-8 mb-3">{g.s4.howItWorksTitle}</h3>
                  <p className="mb-4">{g.s4.howItWorksText}</p>
                  <Callout variant="warning">{g.s4.freeTierCallout}</Callout>
                </GuideCard>
              </section>

              {/* S5: Per-App Audio Routing */}
              <section ref={setRef('per-app-audio-routing')} id="per-app-audio-routing">
                <SectionHeading number={5} title={g.s5.title} icon={sectionIconsLg[4]} sectionLabel={g.sectionLabel} />
                <GuideCard>
                  <p className="mb-4">{g.s5.intro}</p>
                  <h3 className="text-lg text-slate-900 dark:text-white mt-6 mb-3">{g.s5.devicePickerTitle}</h3>
                  <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-400">
                    {g.s5.devicePickerItems.map(([bold, desc], i) => <li key={i}><BoldItem bold={bold} text={desc} /></li>)}
                  </ul>
                  <Callout>{g.s5.callout}</Callout>
                </GuideCard>
              </section>

              {/* S6: Per-App Equalizer */}
              <section ref={setRef('per-app-equalizer')} id="per-app-equalizer">
                <SectionHeading number={6} title={g.s6.title} icon={sectionIconsLg[5]} sectionLabel={g.sectionLabel} />
                <GuideCard>
                  <p className="mb-4">{g.s6.intro}</p>
                  <h3 className="text-lg text-slate-900 dark:text-white mt-6 mb-3">{g.s6.controlsTitle}</h3>
                  <GuideTable headers={g.s6.tableHeaders} rows={g.s6.tableRows} />
                  <h3 className="text-lg text-slate-900 dark:text-white mt-8 mb-3">{g.s6.customProfilesTitle}<ProBadge /></h3>
                  <p className="mb-4">{g.s6.customProfilesText}</p>
                  <h3 className="text-lg text-slate-900 dark:text-white mt-8 mb-3">{g.s6.eqSettingsTitle}</h3>
                  <p>{g.s6.eqSettingsText}</p>
                </GuideCard>
              </section>

              {/* S7: Focus Mode */}
              <section ref={setRef('focus-mode')} id="focus-mode">
                <SectionHeading number={7} title={g.s7.title} icon={sectionIconsLg[6]} sectionLabel={g.sectionLabel} />
                <GuideCard>
                  <p className="mb-4">{g.s7.intro}</p>
                  <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-400 mb-4">
                    {g.s7.activateItems.map((item, i) => <li key={i}>{item}</li>)}
                  </ul>
                  <p>{g.s7.activeText}</p>
                  <Callout>{g.s7.callout}</Callout>
                </GuideCard>
              </section>

              {/* S8: Audio Normalizer */}
              <section ref={setRef('audio-normalizer')} id="audio-normalizer">
                <SectionHeading number={8} title={g.s8.title} icon={sectionIconsLg[7]} sectionLabel={g.sectionLabel} />
                <GuideCard>
                  <p className="mb-4">{g.s8.intro}<ProBadge /></p>
                  <p className="mb-4">{g.s8.activateText}</p>
                  <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-400">
                    {g.s8.indicatorItems.map((item, i) => <li key={i}>{item}</li>)}
                  </ul>
                </GuideCard>
              </section>

              {/* S9: Profiles */}
              <section ref={setRef('profiles')} id="profiles">
                <SectionHeading number={9} title={g.s9.title} icon={sectionIconsLg[8]} sectionLabel={g.sectionLabel} />
                <GuideCard>
                  <p className="mb-6">{g.s9.intro}</p>
                  <h3 className="text-lg text-slate-900 dark:text-white mb-3">{g.s9.creatingTitle}</h3>
                  <ol className="list-decimal list-inside space-y-2 text-slate-600 dark:text-slate-400 mb-6">
                    {g.s9.creatingSteps.map((step, i) => <li key={i}>{step}</li>)}
                  </ol>
                  <h3 className="text-lg text-slate-900 dark:text-white mb-3">{g.s9.activatingTitle}</h3>
                  <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-400 mb-6">
                    {g.s9.activatingItems.map((item, i) => <li key={i}>{item}</li>)}
                  </ul>
                  <h3 className="text-lg text-slate-900 dark:text-white mb-3">{g.s9.autoSaveTitle}</h3>
                  <p className="mb-6">{g.s9.autoSaveText}</p>
                  <h3 className="text-lg text-slate-900 dark:text-white mb-3">{g.s9.editingTitle}</h3>
                  <p className="mb-4">{g.s9.editingIntro}</p>
                  <ul className="list-disc list-inside space-y-1 text-slate-600 dark:text-slate-400 mb-6">
                    {g.s9.editingItems.map((item, i) => <li key={i}>{item}</li>)}
                  </ul>
                  <Callout variant="warning">{g.s9.limitsCallout}</Callout>
                </GuideCard>
              </section>

              {/* S10: Secondary Devices */}
              <section ref={setRef('secondary-devices')} id="secondary-devices">
                <SectionHeading number={10} title={g.s10.title} icon={sectionIconsLg[9]} sectionLabel={g.sectionLabel} />
                <GuideCard>
                  <p className="mb-4">{g.s10.intro}</p>
                  <p className="mb-4">{g.s10.rowIntro}</p>
                  <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-400">
                    {g.s10.rowItems.map((item, i) => <li key={i}>{item}</li>)}
                  </ul>
                  <Callout>{g.s10.callout}</Callout>
                </GuideCard>
              </section>

              {/* S11: Keyboard Shortcuts */}
              <section ref={setRef('keyboard-shortcuts')} id="keyboard-shortcuts">
                <SectionHeading number={11} title={g.s11.title} icon={sectionIconsLg[10]} sectionLabel={g.sectionLabel} />
                <GuideCard>
                  <p className="mb-4">{g.s11.intro}</p>
                  <h3 className="text-lg text-slate-900 dark:text-white mb-3">{g.s11.defaultTitle}</h3>
                  <GuideTable headers={g.s11.tableHeaders} rows={g.s11.tableRows} />
                  <h3 className="text-lg text-slate-900 dark:text-white mt-8 mb-3">{g.s11.customizingTitle}</h3>
                  <p>{g.s11.customizingText}</p>
                </GuideCard>
              </section>

              {/* S12: Siri & Shortcuts */}
              <section ref={setRef('siri-and-shortcuts')} id="siri-and-shortcuts">
                <SectionHeading number={12} title={g.s12.title} icon={sectionIconsLg[11]} sectionLabel={g.sectionLabel} />
                <GuideCard>
                  <p className="mb-4">{g.s12.intro}</p>
                  <GuideTable headers={g.s12.tableHeaders} rows={g.s12.tableRows} />
                </GuideCard>
              </section>

              {/* S13: Settings */}
              <section ref={setRef('settings')} id="settings">
                <SectionHeading number={13} title={g.s13.title} icon={sectionIconsLg[12]} sectionLabel={g.sectionLabel} />
                <GuideCard>
                  <p className="mb-6">{g.s13.intro}</p>
                  <h3 className="text-lg text-slate-900 dark:text-white mb-3">{g.s13.generalTitle}</h3>
                  <GuideTable headers={g.s13.generalHeaders} rows={g.s13.generalRows} />
                  <h3 className="text-lg text-slate-900 dark:text-white mt-8 mb-3">{g.s13.appVisibilityTitle}</h3>
                  <p className="mb-4">{g.s13.appVisibilityIntro}</p>
                  <ul className="list-disc list-inside space-y-1 text-slate-600 dark:text-slate-400 mb-6">
                    {g.s13.appVisibilityItems.map((item, i) => <li key={i}>{item}</li>)}
                  </ul>
                  <Callout>{g.s13.appVisibilityCallout}</Callout>
                  <h3 className="text-lg text-slate-900 dark:text-white mt-8 mb-3">{g.s13.deviceVisibilityTitle}</h3>
                  <p className="mb-4">{g.s13.deviceVisibilityIntro}</p>
                  <ul className="list-disc list-inside space-y-1 text-slate-600 dark:text-slate-400 mb-6">
                    {g.s13.deviceVisibilityItems.map((item, i) => <li key={i}>{item}</li>)}
                  </ul>
                  <h3 className="text-lg text-slate-900 dark:text-white mt-8 mb-3">{g.s13.systemTitle}</h3>
                  <GuideTable headers={g.s13.systemHeaders} rows={g.s13.systemRows} />
                  <h3 className="text-lg text-slate-900 dark:text-white mt-8 mb-3">{g.s13.aboutTitle}</h3>
                  <ul className="list-disc list-inside space-y-1 text-slate-600 dark:text-slate-400">
                    {g.s13.aboutItems.map((item, i) => <li key={i}>{item}</li>)}
                  </ul>
                </GuideCard>
              </section>

              {/* S14: Audio Health Monitor */}
              <section ref={setRef('audio-health-monitor')} id="audio-health-monitor">
                <SectionHeading number={14} title={g.s14.title} icon={sectionIconsLg[13]} sectionLabel={g.sectionLabel} />
                <GuideCard>
                  <p className="mb-4">{g.s14.intro}</p>
                  <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-400 mb-6">
                    {g.s14.checkItems.map(([bold, desc], i) => <li key={i}><BoldItem bold={bold} text={desc} /></li>)}
                  </ul>
                  <p className="mb-4">{g.s14.repairText}</p>
                  <h3 className="text-lg text-slate-900 dark:text-white mt-8 mb-3">{g.s14.cleanupTitle}</h3>
                  <p>{g.s14.cleanupText}</p>
                </GuideCard>
              </section>

              {/* S15: Free vs Pro */}
              <section ref={setRef('free-vs-pro')} id="free-vs-pro">
                <SectionHeading number={15} title={g.s15.title} icon={sectionIconsLg[14]} sectionLabel={g.sectionLabel} />
                <GuideCard>
                  <GuideTable headers={g.s15.tableHeaders} rows={g.s15.tableRows} />
                  <p className="mt-4 text-slate-600 dark:text-slate-400">{g.s15.upgradeText}</p>
                </GuideCard>
              </section>

              {/* S16: Troubleshooting */}
              <section ref={setRef('troubleshooting')} id="troubleshooting">
                <SectionHeading number={16} title={g.s16.title} icon={sectionIconsLg[15]} sectionLabel={g.sectionLabel} />
                <GuideCard>
                  <p className="mb-4">{g.s16.intro}</p>
                  <a href={`/${currentLang}/troubleshooting`} className="inline-flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all shadow-md hover:shadow-lg hover:scale-105 text-sm font-medium">
                    <ExternalLink className="w-4 h-4" />
                    <span>{g.s16.buttonText}</span>
                  </a>
                  <div className="mt-6 space-y-4">
                    <p className="text-slate-600 dark:text-slate-400">{g.s16.topicsIntro}</p>
                    <ul className="list-disc list-inside space-y-1 text-slate-600 dark:text-slate-400">
                      {g.s16.topics.map((topic, i) => <li key={i}>{topic}</li>)}
                    </ul>
                  </div>
                </GuideCard>
              </section>

            </div>
          </main>
        </div>
      </div>

      <Footer currentLang={currentLang} />
    </div>
  );
}