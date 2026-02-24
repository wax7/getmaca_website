import React, { useEffect } from 'react';
import { DocumentHead } from '../components/DocumentHead';
import { Header } from '../components/Header';
import { useDarkMode } from '../hooks/useDarkMode';
import { useScrolled } from '../hooks/useScrolled';
import { Link } from 'react-router';
import { ArrowLeft } from 'lucide-react';

export function History() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const scrolled = useScrolled(50);

  useEffect(() => {
    // Scroll to top on mount (iframe compatible)
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    try { window.scrollTo(0, 0); } catch {}
  }, []);

  return (
    <>
      <DocumentHead />

      {/* Header */}
      <Header
        scrolled={scrolled}
        currentLang="en"
        isDarkMode={isDarkMode}
        onToggleDarkMode={toggleDarkMode}
        badge="📜 Version History"
      >
        <div className="flex items-center gap-3">
          <Link
            to="/en"
            className="flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-xl transition-colors text-slate-700 dark:text-slate-300 text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
        </div>
      </Header>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-5xl">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              Version History
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              For the latest version, visit us on the{' '}
              <a 
                href="https://apps.apple.com/us/app/maca-master-audio-control/id6759258773"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                App Store
              </a>
              .
            </p>
          </div>

          {/* Version Timeline */}
          <div className="space-y-12">
            {/* Version 1.0.664 Build 064 */}
            <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
                    Version 1.0.664 Build 064
                  </h2>
                  <p className="text-slate-600 dark:text-slate-400">
                    Bluetooth Volume Fix • February 21, 2026
                  </p>
                </div>
                <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-4 py-2 rounded-full text-sm font-semibold">
                  Latest
                </span>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-green-600 dark:text-green-400 font-bold mt-1">✓</span>
                  <div>
                    <strong className="text-slate-900 dark:text-white">Fixed:</strong>
                    <span className="text-slate-700 dark:text-slate-300"> Volume no longer jumps to 100% when a Bluetooth speaker reconnects</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-600 dark:text-green-400 font-bold mt-1">✓</span>
                  <div>
                    <strong className="text-slate-900 dark:text-white">Fixed:</strong>
                    <span className="text-slate-700 dark:text-slate-300"> Master volume now syncs correctly when the default output device changes</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 font-bold mt-1">↑</span>
                  <div>
                    <strong className="text-slate-900 dark:text-white">Improved:</strong>
                    <span className="text-slate-700 dark:text-slate-300"> Bluetooth devices now work seamlessly with saved volume settings</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Version 1.0.664 Build 063 */}
            <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
              <div className="mb-6">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
                  Version 1.0.664 Build 063
                </h2>
                <p className="text-slate-600 dark:text-slate-400">
                  App Store Ready • February 2026
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-green-600 dark:text-green-400 font-bold mt-1">✓</span>
                  <div>
                    <strong className="text-slate-900 dark:text-white">Fixed:</strong>
                    <span className="text-slate-700 dark:text-slate-300"> Missing language setting for Italian (translations existed but weren't enabled)</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 font-bold mt-1">↑</span>
                  <div>
                    <strong className="text-slate-900 dark:text-white">Improved:</strong>
                    <span className="text-slate-700 dark:text-slate-300"> Permissions and privacy descriptions are now correct for App Store</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Version 1.0.664 Build 062 */}
            <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
              <div className="mb-6">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
                  Version 1.0.664 Build 062
                </h2>
                <p className="text-slate-600 dark:text-slate-400">
                  Better App Detection • February 2026
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 font-bold mt-1">↑</span>
                  <div>
                    <strong className="text-slate-900 dark:text-white">Improved:</strong>
                    <span className="text-slate-700 dark:text-slate-300"> App name recognition is now case-insensitive</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-purple-600 dark:text-purple-400 font-bold mt-1">★</span>
                  <div>
                    <strong className="text-slate-900 dark:text-white">Added:</strong>
                    <span className="text-slate-700 dark:text-slate-300"> Support for 40+ popular apps (Chrome, Firefox, Spotify, Discord, Zoom, VLC, Steam, and more)</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 font-bold mt-1">↑</span>
                  <div>
                    <strong className="text-slate-900 dark:text-white">Improved:</strong>
                    <span className="text-slate-700 dark:text-slate-300"> Apps are now recognized and classified more reliably</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Version 1.0.664 Build 061 */}
            <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
              <div className="mb-6">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
                  Version 1.0.664 Build 061
                </h2>
                <p className="text-slate-600 dark:text-slate-400">
                  Safari and Other Apps Fix • February 2026
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-green-600 dark:text-green-400 font-bold mt-1">✓</span>
                  <div>
                    <strong className="text-slate-900 dark:text-white">Fixed:</strong>
                    <span className="text-slate-700 dark:text-slate-300"> Safari is no longer misidentified as a system service</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-600 dark:text-green-400 font-bold mt-1">✓</span>
                  <div>
                    <strong className="text-slate-900 dark:text-white">Fixed:</strong>
                    <span className="text-slate-700 dark:text-slate-300"> Other popular Apple apps (News, Podcasts, Books, GarageBand) now work correctly</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 font-bold mt-1">↑</span>
                  <div>
                    <strong className="text-slate-900 dark:text-white">Improved:</strong>
                    <span className="text-slate-700 dark:text-slate-300"> 50+ Apple apps are now classified correctly</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Version 1.0.664 Build 060 */}
            <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
              <div className="mb-6">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
                  Version 1.0.664 Build 060
                </h2>
                <p className="text-slate-600 dark:text-slate-400">
                  Notifications and Dock Icon • February 2026
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-purple-600 dark:text-purple-400 font-bold mt-1">★</span>
                  <div>
                    <strong className="text-slate-900 dark:text-white">New:</strong>
                    <span className="text-slate-700 dark:text-slate-300"> Notifications can be turned on and off in Settings</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-600 dark:text-green-400 font-bold mt-1">✓</span>
                  <div>
                    <strong className="text-slate-900 dark:text-white">Fixed:</strong>
                    <span className="text-slate-700 dark:text-slate-300"> Dock icon now disappears correctly when all windows are closed</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 font-bold mt-1">↑</span>
                  <div>
                    <strong className="text-slate-900 dark:text-white">Improved:</strong>
                    <span className="text-slate-700 dark:text-slate-300"> Fewer unwanted notifications (off by default)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Version 1.0.664 Build 058 */}
            <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
              <div className="mb-6">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
                  Version 1.0.664 Build 058
                </h2>
                <p className="text-slate-600 dark:text-slate-400">
                  Volume and EQ Windows • February 2026
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-green-600 dark:text-green-400 font-bold mt-1">✓</span>
                  <div>
                    <strong className="text-slate-900 dark:text-white">Fixed:</strong>
                    <span className="text-slate-700 dark:text-slate-300"> Maximum volume slider is now true original loudness with no hidden boost</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-600 dark:text-green-400 font-bold mt-1">✓</span>
                  <div>
                    <strong className="text-slate-900 dark:text-white">Fixed:</strong>
                    <span className="text-slate-700 dark:text-slate-300"> EQ windows now reliably appear in front of other windows</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 font-bold mt-1">↑</span>
                  <div>
                    <strong className="text-slate-900 dark:text-white">Improved:</strong>
                    <span className="text-slate-700 dark:text-slate-300"> Volume is now consistent and predictable</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Version 1.0.664 Build 057 */}
            <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
              <div className="mb-6">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
                  Version 1.0.664 Build 057
                </h2>
                <p className="text-slate-600 dark:text-slate-400">
                  Permissions and Privacy • February 2026
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 font-bold mt-1">↑</span>
                  <div>
                    <strong className="text-slate-900 dark:text-white">Improved:</strong>
                    <span className="text-slate-700 dark:text-slate-300"> Clear explanation of why MACA needs each permission</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 font-bold mt-1">↑</span>
                  <div>
                    <strong className="text-slate-900 dark:text-white">Improved:</strong>
                    <span className="text-slate-700 dark:text-slate-300"> Audio is only processed in real time — never recorded or stored</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-purple-600 dark:text-purple-400 font-bold mt-1">★</span>
                  <div>
                    <strong className="text-slate-900 dark:text-white">New:</strong>
                    <span className="text-slate-700 dark:text-slate-300"> Setup explains all permissions in simple language</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 font-bold mt-1">↑</span>
                  <div>
                    <strong className="text-slate-900 dark:text-white">Support:</strong>
                    <span className="text-slate-700 dark:text-slate-300"> All 9 languages (English, German, French, Spanish, Italian, Japanese, Korean, Chinese)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Version 1.0.664 — Routing and Profiles */}
            <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
              <div className="mb-6">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
                  Version 1.0.664
                </h2>
                <p className="text-slate-600 dark:text-slate-400">
                  Routing and Profiles • February 2026
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-green-600 dark:text-green-400 font-bold mt-1">✓</span>
                  <div>
                    <strong className="text-slate-900 dark:text-white">Fixed:</strong>
                    <span className="text-slate-700 dark:text-slate-300"> Per-app output routing works again (recurring IOProc queue bug)</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-600 dark:text-green-400 font-bold mt-1">✓</span>
                  <div>
                    <strong className="text-slate-900 dark:text-white">Fixed:</strong>
                    <span className="text-slate-700 dark:text-slate-300"> Drift compensation restored for cross-device routing (AirPods, USB DAC)</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-600 dark:text-green-400 font-bold mt-1">✓</span>
                  <div>
                    <strong className="text-slate-900 dark:text-white">Fixed:</strong>
                    <span className="text-slate-700 dark:text-slate-300"> Deactivating a profile now correctly restores the previous output device per app</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 font-bold mt-1">↑</span>
                  <div>
                    <strong className="text-slate-900 dark:text-white">Improved:</strong>
                    <span className="text-slate-700 dark:text-slate-300"> Full audio state (volume, mute, output device) is cached before profile activation</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 font-bold mt-1">↑</span>
                  <div>
                    <strong className="text-slate-900 dark:text-white">Improved:</strong>
                    <span className="text-slate-700 dark:text-slate-300"> Future-proof IOProc fallback chain (audioQueue → fresh per-instance queue → stuck)</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 font-bold mt-1">↑</span>
                  <div>
                    <strong className="text-slate-900 dark:text-white">Improved:</strong>
                    <span className="text-slate-700 dark:text-slate-300"> Aggregate device validation and Float32 format verification after creation</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 font-bold mt-1">↑</span>
                  <div>
                    <strong className="text-slate-900 dark:text-white">Improved:</strong>
                    <span className="text-slate-700 dark:text-slate-300"> Wall-clock based fade timeout (works at any sample rate)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Version 1.0.663 */}
            <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
              <div className="mb-6">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
                  Version 1.0.663
                </h2>
                <p className="text-slate-600 dark:text-slate-400">
                  macOS 26.3 Compatibility & Onboarding • February 2026
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-green-600 dark:text-green-400 font-bold mt-1">✓</span>
                  <div>
                    <strong className="text-slate-900 dark:text-white">Fixed:</strong>
                    <span className="text-slate-700 dark:text-slate-300"> Audio control works again on macOS 26.3 (Tahoe)</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-600 dark:text-green-400 font-bold mt-1">✓</span>
                  <div>
                    <strong className="text-slate-900 dark:text-white">Fixed:</strong>
                    <span className="text-slate-700 dark:text-slate-300"> Audio profiles now apply correctly when the app starts</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 font-bold mt-1">↑</span>
                  <div>
                    <strong className="text-slate-900 dark:text-white">Improved:</strong>
                    <span className="text-slate-700 dark:text-slate-300"> First-launch setup is easier to read and works more reliably</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 font-bold mt-1">↑</span>
                  <div>
                    <strong className="text-slate-900 dark:text-white">Improved:</strong>
                    <span className="text-slate-700 dark:text-slate-300"> Input Monitoring settings open immediately when requested</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 font-bold mt-1">↑</span>
                  <div>
                    <strong className="text-slate-900 dark:text-white">Improved:</strong>
                    <span className="text-slate-700 dark:text-slate-300"> App Store compliance and stability hardening</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 font-bold mt-1">↑</span>
                  <div>
                    <strong className="text-slate-900 dark:text-white">Improved:</strong>
                    <span className="text-slate-700 dark:text-slate-300"> Onboarding with step-by-step permission setup in 8 languages</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Version 1.0.604 */}
            <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
              <div className="mb-6">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
                  Version 1.0.604
                </h2>
                <p className="text-slate-600 dark:text-slate-400">
                  Bluetooth Reliability & App Store Polish • February 2026
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-green-600 dark:text-green-400 font-bold mt-1">✓</span>
                  <div>
                    <strong className="text-slate-900 dark:text-white">Fixed:</strong>
                    <span className="text-slate-700 dark:text-slate-300"> Bluetooth disconnect no longer kills audio for other apps</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-600 dark:text-green-400 font-bold mt-1">✓</span>
                  <div>
                    <strong className="text-slate-900 dark:text-white">Fixed:</strong>
                    <span className="text-slate-700 dark:text-slate-300"> Bluetooth reconnect now routes audio correctly (not just UI update)</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-600 dark:text-green-400 font-bold mt-1">✓</span>
                  <div>
                    <strong className="text-slate-900 dark:text-white">Fixed:</strong>
                    <span className="text-slate-700 dark:text-slate-300"> Recovery loop for audio devices is now properly controlled</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 font-bold mt-1">↑</span>
                  <div>
                    <strong className="text-slate-900 dark:text-white">Improved:</strong>
                    <span className="text-slate-700 dark:text-slate-300"> More stable Bluetooth auto-reconnect and fallback behavior</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 font-bold mt-1">↑</span>
                  <div>
                    <strong className="text-slate-900 dark:text-white">Improved:</strong>
                    <span className="text-slate-700 dark:text-slate-300"> Profile device picker shows all available devices</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Version 1.0.543 */}
            <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
              <div className="mb-6">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
                  Version 1.0.543
                </h2>
                <p className="text-slate-600 dark:text-slate-400">
                  Liquid Glass Design & Performance • January 2026
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-purple-600 dark:text-purple-400 font-bold mt-1">★</span>
                  <div>
                    <strong className="text-slate-900 dark:text-white">New:</strong>
                    <span className="text-slate-700 dark:text-slate-300"> Full macOS 26 Liquid Glass design — translucent cards like Apple's Control Center</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 font-bold mt-1">↑</span>
                  <div>
                    <strong className="text-slate-900 dark:text-white">Improved:</strong>
                    <span className="text-slate-700 dark:text-slate-300"> CPU usage reduced from 27% to under 3% in idle</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 font-bold mt-1">↑</span>
                  <div>
                    <strong className="text-slate-900 dark:text-white">Improved:</strong>
                    <span className="text-slate-700 dark:text-slate-300"> GPU-accelerated equalizer with minimal resource usage</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 font-bold mt-1">↑</span>
                  <div>
                    <strong className="text-slate-900 dark:text-white">Improved:</strong>
                    <span className="text-slate-700 dark:text-slate-300"> Hardware-accelerated volume sliders (40% less CPU)</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 font-bold mt-1">↑</span>
                  <div>
                    <strong className="text-slate-900 dark:text-white">Improved:</strong>
                    <span className="text-slate-700 dark:text-slate-300"> Equalizer window uses almost no CPU when hidden</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Version 1.0.427 */}
            <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
              <div className="mb-6">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
                  Version 1.0.427
                </h2>
                <p className="text-slate-600 dark:text-slate-400">
                  Equalizer & Profiles • January 2026
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-purple-600 dark:text-purple-400 font-bold mt-1">★</span>
                  <div>
                    <strong className="text-slate-900 dark:text-white">New:</strong>
                    <span className="text-slate-700 dark:text-slate-300"> 10-band per-app equalizer with real-time VU meters</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-purple-600 dark:text-purple-400 font-bold mt-1">★</span>
                  <div>
                    <strong className="text-slate-900 dark:text-white">New:</strong>
                    <span className="text-slate-700 dark:text-slate-300"> Save EQ settings to profiles</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-purple-600 dark:text-purple-400 font-bold mt-1">★</span>
                  <div>
                    <strong className="text-slate-900 dark:text-white">New:</strong>
                    <span className="text-slate-700 dark:text-slate-300"> Custom EQ presets in the quick picker</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-purple-600 dark:text-purple-400 font-bold mt-1">★</span>
                  <div>
                    <strong className="text-slate-900 dark:text-white">New:</strong>
                    <span className="text-slate-700 dark:text-slate-300"> Save changes back to the active profile automatically</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 font-bold mt-1">↑</span>
                  <div>
                    <strong className="text-slate-900 dark:text-white">Improved:</strong>
                    <span className="text-slate-700 dark:text-slate-300"> Profile create and edit flow simplified</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Version 1.0.282 */}
            <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
              <div className="mb-6">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
                  Version 1.0.282
                </h2>
                <p className="text-slate-600 dark:text-slate-400">
                  App Store Compliance • January 2026
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 font-bold mt-1">↑</span>
                  <div>
                    <strong className="text-slate-900 dark:text-white">Improved:</strong>
                    <span className="text-slate-700 dark:text-slate-300"> Code quality and security review completed</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 font-bold mt-1">↑</span>
                  <div>
                    <strong className="text-slate-900 dark:text-white">Improved:</strong>
                    <span className="text-slate-700 dark:text-slate-300"> Privacy policy link added</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 font-bold mt-1">↑</span>
                  <div>
                    <strong className="text-slate-900 dark:text-white">Improved:</strong>
                    <span className="text-slate-700 dark:text-slate-300"> All localization cleaned up and verified</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-600 dark:text-green-400 font-bold mt-1">✓</span>
                  <div>
                    <strong className="text-slate-900 dark:text-white">Fixed:</strong>
                    <span className="text-slate-700 dark:text-slate-300"> Login item sync with macOS System Settings</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-red-600 dark:text-red-400 font-bold mt-1">✗</span>
                  <div>
                    <strong className="text-slate-900 dark:text-white">Removed:</strong>
                    <span className="text-slate-700 dark:text-slate-300"> Fake features cleaned out (only real features advertised)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Version 1.0.225 */}
            <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
              <div className="mb-6">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
                  Version 1.0.225
                </h2>
                <p className="text-slate-600 dark:text-slate-400">
                  Per-App Routing & Smart Features • January 27, 2026
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-purple-600 dark:text-purple-400 font-bold mt-1">★</span>
                  <div>
                    <strong className="text-slate-900 dark:text-white">New:</strong>
                    <span className="text-slate-700 dark:text-slate-300"> Route each app to a different output device — no driver needed!</span>
                    <div className="text-sm text-slate-600 dark:text-slate-400 mt-1 ml-6">
                      Example: Brave → AirPods, Safari → Speakers, Discord → Headset
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-purple-600 dark:text-purple-400 font-bold mt-1">★</span>
                  <div>
                    <strong className="text-slate-900 dark:text-white">New:</strong>
                    <span className="text-slate-700 dark:text-slate-300"> Repair history — see when MACA automatically fixed audio issues</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-purple-600 dark:text-purple-400 font-bold mt-1">★</span>
                  <div>
                    <strong className="text-slate-900 dark:text-white">New:</strong>
                    <span className="text-slate-700 dark:text-slate-300"> App search now shows previously active apps with an "Open" button</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 font-bold mt-1">↑</span>
                  <div>
                    <strong className="text-slate-900 dark:text-white">Improved:</strong>
                    <span className="text-slate-700 dark:text-slate-300"> Better detection of Safari, Music, News, and other built-in macOS apps</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-orange-600 dark:text-orange-400 font-bold mt-1">⚠</span>
                  <div>
                    <strong className="text-slate-900 dark:text-white">Changed:</strong>
                    <span className="text-slate-700 dark:text-slate-300"> AirPlay routing is now system-wide only (per-app AirPlay was unreliable)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Version 1.0.191 */}
            <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
              <div className="mb-6">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
                  Version 1.0.191
                </h2>
                <p className="text-slate-600 dark:text-slate-400">
                  AirPlay, Bluetooth & Widgets • January 22–23, 2026
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-purple-600 dark:text-purple-400 font-bold mt-1">★</span>
                  <div>
                    <strong className="text-slate-900 dark:text-white">New:</strong>
                    <span className="text-slate-700 dark:text-slate-300"> Built-in AirPlay button to connect HomePod, Apple TV, and more</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-purple-600 dark:text-purple-400 font-bold mt-1">★</span>
                  <div>
                    <strong className="text-slate-900 dark:text-white">New:</strong>
                    <span className="text-slate-700 dark:text-slate-300"> Bluetooth device support (AirPods, AirPods Pro/Max, Beats, etc.)</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-purple-600 dark:text-purple-400 font-bold mt-1">★</span>
                  <div>
                    <strong className="text-slate-900 dark:text-white">New:</strong>
                    <span className="text-slate-700 dark:text-slate-300"> Devices grouped by type — built-in, Bluetooth, and AirPlay</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-purple-600 dark:text-purple-400 font-bold mt-1">★</span>
                  <div>
                    <strong className="text-slate-900 dark:text-white">New:</strong>
                    <span className="text-slate-700 dark:text-slate-300"> Widgets settings tab with setup instructions</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-600 dark:text-green-400 font-bold mt-1">✓</span>
                  <div>
                    <strong className="text-slate-900 dark:text-white">Fixed:</strong>
                    <span className="text-slate-700 dark:text-slate-300"> Mute now works reliably</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-600 dark:text-green-400 font-bold mt-1">✓</span>
                  <div>
                    <strong className="text-slate-900 dark:text-white">Fixed:</strong>
                    <span className="text-slate-700 dark:text-slate-300"> Master Mute and Focus Mute no longer conflict with each other</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Version 1.0.121 - Initial Release */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-3xl shadow-xl p-8 border-2 border-blue-200 dark:border-blue-700">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
                    Version 1.0.121
                  </h2>
                  <p className="text-slate-600 dark:text-slate-400">
                    Initial Release • January 9, 2026
                  </p>
                </div>
                <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-semibold">
                  Launch
                </span>
              </div>

              {/* What MACA Does */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  What MACA Does
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <span className="text-purple-600 dark:text-purple-400 mt-1">•</span>
                    <span className="text-slate-700 dark:text-slate-300">
                      <strong>Per-app volume control</strong> — adjust the volume of each app individually
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-600 dark:text-purple-400 mt-1">•</span>
                    <span className="text-slate-700 dark:text-slate-300">
                      <strong>Per-app mute</strong> — silence specific apps without affecting others
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-600 dark:text-purple-400 mt-1">•</span>
                    <span className="text-slate-700 dark:text-slate-300">
                      <strong>Output device selection</strong> — quickly switch your Mac's audio output
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-600 dark:text-purple-400 mt-1">•</span>
                    <span className="text-slate-700 dark:text-slate-300">
                      <strong>AirPlay support</strong> — see and use AirPlay devices
                    </span>
                  </li>
                </ul>
              </div>

              {/* Pro Features */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  Pro Features (In-App Purchase)
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 dark:text-amber-400 mt-1">★</span>
                    <span className="text-slate-700 dark:text-slate-300">
                      Unlimited apps (Free: 3 apps)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 dark:text-amber-400 mt-1">★</span>
                    <span className="text-slate-700 dark:text-slate-300">
                      Unlimited audio profiles (Free: 1 profile)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 dark:text-amber-400 mt-1">★</span>
                    <span className="text-slate-700 dark:text-slate-300">
                      Audio normalizer for consistent volume levels
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 dark:text-amber-400 mt-1">★</span>
                    <span className="text-slate-700 dark:text-slate-300">
                      Custom keyboard shortcuts
                    </span>
                  </li>
                </ul>
              </div>

              {/* Audio Profiles */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  Audio Profiles
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                    <span className="text-slate-700 dark:text-slate-300">
                      Save your preferred volume setup and restore it anytime
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                    <span className="text-slate-700 dark:text-slate-300">
                      Switch profiles with a keyboard shortcut
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                    <span className="text-slate-700 dark:text-slate-300">
                      Built-in presets: Default, Gaming, Work, Music
                    </span>
                  </li>
                </ul>
              </div>

              {/* Design */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  Design
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 dark:text-green-400 mt-1">•</span>
                    <span className="text-slate-700 dark:text-slate-300">
                      Native macOS 26 glass design
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 dark:text-green-400 mt-1">•</span>
                    <span className="text-slate-700 dark:text-slate-300">
                      Lives in your menu bar — always one click away
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 dark:text-green-400 mt-1">•</span>
                    <span className="text-slate-700 dark:text-slate-300">
                      Dark Mode support
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 dark:text-green-400 mt-1">•</span>
                    <span className="text-slate-700 dark:text-slate-300">
                      Quick search to find any app
                    </span>
                  </li>
                </ul>
              </div>

              {/* Languages */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  Languages
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  English, Deutsch, Français, Español, 日本語, 한국어, 简体中文, 繁體中文
                </p>
              </div>

              {/* Keyboard Shortcuts */}
              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  Keyboard Shortcuts
                </h3>
                <div className="bg-white dark:bg-slate-700/50 rounded-xl p-4 overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b border-slate-200 dark:border-slate-600">
                        <th className="pb-3 pr-6 text-slate-900 dark:text-white font-semibold">Shortcut</th>
                        <th className="pb-3 text-slate-900 dark:text-white font-semibold">Action</th>
                      </tr>
                    </thead>
                    <tbody className="text-slate-700 dark:text-slate-300">
                      <tr className="border-b border-slate-100 dark:border-slate-700">
                        <td className="py-3 pr-6 font-mono text-sm">⌥⌘M</td>
                        <td className="py-3">Open/close MACA</td>
                      </tr>
                      <tr className="border-b border-slate-100 dark:border-slate-700">
                        <td className="py-3 pr-6 font-mono text-sm">⌥⌘0</td>
                        <td className="py-3">Mute all apps</td>
                      </tr>
                      <tr className="border-b border-slate-100 dark:border-slate-700">
                        <td className="py-3 pr-6 font-mono text-sm">⌥⌘↑</td>
                        <td className="py-3">Volume up</td>
                      </tr>
                      <tr className="border-b border-slate-100 dark:border-slate-700">
                        <td className="py-3 pr-6 font-mono text-sm">⌥⌘↓</td>
                        <td className="py-3">Volume down</td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-6 font-mono text-sm">⌥⌘P</td>
                        <td className="py-3">Switch profile (Pro)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* Footer CTA */}
          <div className="mt-16 text-center">
            <a
              href="https://apps.apple.com/us/app/maca-master-audio-control/id6759258773"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-8 py-4 rounded-2xl text-lg font-semibold transition-all shadow-lg hover:shadow-xl"
            >
              <span>Download on the App Store</span>
              <span className="text-2xl">→</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}