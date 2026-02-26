import { useParams, useNavigate } from 'react-router';
import { useEffect, useMemo, useState } from 'react';
import { motion } from 'motion/react';
import { FileText } from 'lucide-react';
import { type Language, translations } from '../locales/translations';
import { Header } from '../components/Header';
import { LanguageSelector } from '../components/LanguageSelector';
import { useDarkMode } from '../hooks/useDarkMode';
import { useScrolled } from '../hooks/useScrolled';
import { Footer } from '../components/Footer';

export function Imprint() {
  const { lang } = useParams();
  const navigate = useNavigate();
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const scrolled = useScrolled(50);
  
  // Validate language and default to 'en' if invalid
  const validLanguages: Language[] = ['en', 'de', 'es', 'fr', 'it', 'pt', 'ja', 'zh'];
  const requestedLang = lang as Language;
  
  // Always use a valid language, fallback to 'en'
  const currentLang: Language = (lang && validLanguages.includes(requestedLang)) ? requestedLang : 'en';
  
  // If no lang parameter at all, redirect immediately
  useEffect(() => {
    if (!lang) {
      navigate('/en/imprint', { replace: true });
    } else if (!validLanguages.includes(requestedLang)) {
      navigate('/en/imprint', { replace: true });
    }
  }, [lang, requestedLang, navigate]);

  const handleLanguageChange = (newLang: Language) => {
    navigate(`/${newLang}/imprint`);
  };
  
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
  if (!t || !t.imprint || !t.imprint.title) {
    return (
      <div className={`min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-950 flex items-center justify-center`}>
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-slate-600 dark:text-slate-400">Loading translations...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-950 transition-colors duration-300`}>
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
      <div className="pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-3 mb-4">
              <FileText className="w-12 h-12 text-blue-600 dark:text-blue-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {t.imprint.title}
            </h1>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white dark:bg-slate-800 rounded-2xl sm:rounded-3xl shadow-xl p-4 sm:p-6 md:p-8 lg:p-12 border border-slate-200 dark:border-slate-700"
          >
            <div className="space-y-8 text-slate-700 dark:text-slate-300">
              <section>
                <h2 className="text-2xl mb-4 text-slate-900 dark:text-slate-100">{t.imprint.owner}</h2>
                <p className="leading-relaxed">
                  AMX Mediensysteme<br />
                  Inh. Dirk Wenk
                </p>
              </section>

              <section>
                <h2 className="text-2xl mb-4 text-slate-900 dark:text-slate-100">{t.imprint.address}</h2>
                <p className="leading-relaxed">
                  Remigiusstr. 63<br />
                  41747 Viersen<br />
                  Germany
                </p>
              </section>

              <section>
                <h2 className="text-2xl mb-4 text-slate-900 dark:text-slate-100">{t.imprint.contact}</h2>
                <p className="leading-relaxed">
                  Email: <a href="mailto:Support@getmaca.de" className="text-blue-600 hover:text-blue-700 underline">Support@getmaca.de</a>
                </p>
              </section>

              <section>
                <h2 className="text-2xl mb-4 text-slate-900 dark:text-slate-100">{t.imprint.responsible}</h2>
                <p className="leading-relaxed">
                  Dirk Wenk
                </p>
              </section>

              <section className="pt-8 border-t border-slate-200 dark:border-slate-700">
                <p className="text-sm text-slate-600 leading-relaxed dark:text-slate-400">
                  {t.imprint.disclaimer}
                </p>
              </section>

              <section className="pt-4">
                <h2 className="text-2xl mb-4 text-slate-900 dark:text-slate-100">
                  {currentLang === 'de' ? 'App Store Konformität' :
                   currentLang === 'es' ? 'Conformidad con App Store' :
                   currentLang === 'fr' ? 'Conformité App Store' :
                   currentLang === 'it' ? 'Conformità App Store' :
                   currentLang === 'pt' ? 'Conformidade App Store' :
                   currentLang === 'ja' ? 'App Store準拠' :
                   currentLang === 'zh' ? 'App Store合规' :
                   'App Store Compliance'}
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed dark:text-slate-400">
                  {currentLang === 'de' ? 'MACA - Audio Mixer ist im Apple App Store erhältlich und entspricht allen Anforderungen der Apple Developer Program License Agreement. Diese Anwendung sammelt, speichert oder überträgt keine personenbezogenen Daten. Die gesamte Audioverarbeitung erfolgt lokal auf Ihrem Gerät.' :
                   currentLang === 'es' ? 'MACA - Audio Mixer está disponible en el Apple App Store y cumple con todos los requisitos del Apple Developer Program License Agreement. Esta aplicación no recopila, almacena ni transmite datos de identificación personal. Todo el procesamiento de audio se realiza localmente en su dispositivo.' :
                   currentLang === 'fr' ? 'MACA - Audio Mixer est disponible sur l\'Apple App Store et respecte toutes les exigences du contrat de licence du programme Apple Developer. Cette application ne collecte, ne stocke ni ne transmet aucune donnée personnelle. Tout le traitement audio est effectué localement sur votre appareil.' :
                   currentLang === 'it' ? 'MACA - Audio Mixer è disponibile sull\'Apple App Store e rispetta tutti i requisiti dell\'Apple Developer Program License Agreement. Questa applicazione non raccoglie, archivia o trasmette dati di identificazione personale. L\'elaborazione audio avviene interamente sul dispositivo.' :
                   currentLang === 'pt' ? 'MACA - Audio Mixer está disponível na Apple App Store e está em conformidade com todos os requisitos do Apple Developer Program License Agreement. Este aplicativo não coleta, armazena ou transmite dados de identificação pessoal. Todo o processamento de áudio é realizado localmente no seu dispositivo.' :
                   currentLang === 'ja' ? 'MACA - Audio MixerはApple App Storeで入手可能で、Apple Developer Program License Agreementのすべての要件に準拠しています。このアプリケーションは、個人を特定できる情報を収集、保存、または送信しません。すべてのオーディオ処理はデバイス上でローカルに実行されます。' :
                   currentLang === 'zh' ? 'MACA - Audio Mixer可在Apple App Store上获取，并符合Apple Developer Program License Agreement的所有要求。此应用程序不收集、存储或传输任何个人身份信息。所有音频处理均在您的设备上本地执行。' :
                   'MACA - Audio Mixer is available on the Apple App Store and complies with all Apple Developer Program License Agreement requirements. This application does not collect, store, or transmit any personally identifiable information. All audio processing is performed locally on your device.'}
                </p>
              </section>

              <section className="pt-4">
                <h2 className="text-2xl mb-4 text-slate-900 dark:text-slate-100">
                  {currentLang === 'de' ? 'Verbraucherrechte' :
                   currentLang === 'es' ? 'Derechos del Consumidor' :
                   currentLang === 'fr' ? 'Droits des Consommateurs' :
                   currentLang === 'it' ? 'Diritti dei Consumatori' :
                   currentLang === 'pt' ? 'Direitos do Consumidor' :
                   currentLang === 'ja' ? '消費者の権利' :
                   currentLang === 'zh' ? '消费者权利' :
                   'Consumer Rights'}
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed dark:text-slate-400">
                  {currentLang === 'de' ? 'EU-Verbraucher haben das Recht, innerhalb von 14 Tagen ohne Angabe von Gründen vom Kauf zurückzutreten. Gemäß den App Store-Richtlinien von Apple werden Rückerstattungen direkt über Apple abgewickelt. Für Rückerstattungsanfragen wenden Sie sich bitte an den Apple Support oder besuchen Sie reportaproblem.apple.com.' :
                   currentLang === 'es' ? 'Los consumidores de la UE tienen derecho a desistir de esta compra en un plazo de 14 días sin necesidad de justificación. De acuerdo con las políticas del App Store de Apple, las devoluciones se gestionan directamente a través de Apple. Para solicitudes de reembolso, contacte con el soporte de Apple o visite reportaproblem.apple.com.' :
                   currentLang === 'fr' ? 'Les consommateurs de l\'UE ont le droit de se rétracter de cet achat dans un délai de 14 jours sans avoir à donner de motif. Conformément aux politiques de l\'App Store d\'Apple, les remboursements sont gérés directement par Apple. Pour les demandes de remboursement, veuillez contacter le support Apple ou visiter reportaproblem.apple.com.' :
                   currentLang === 'it' ? 'I consumatori dell\'UE hanno il diritto di recedere dall\'acquisto entro 14 giorni senza fornire alcuna motivazione. In conformità con le politiche dell\'App Store di Apple, i rimborsi vengono gestiti direttamente tramite Apple. Per le richieste di rimborso, contattare il supporto Apple o visitare reportaproblem.apple.com.' :
                   currentLang === 'pt' ? 'Os consumidores da UE têm o direito de desistir desta compra no prazo de 14 dias sem apresentar qualquer motivo. De acordo com as políticas da App Store da Apple, os reembolsos são tratados diretamente pela Apple. Para pedidos de reembolso, contacte o Suporte da Apple ou visite reportaproblem.apple.com.' :
                   currentLang === 'ja' ? 'EU消費者は、理由を問わず14日以内にこの購入から撤回する権利があります。AppleのApp Storeポリシーに従い、払い戻しはAppleを通じて直接処理されます。払い戻しの要求については、Appleサポートに連絡するか、reportaproblem.apple.comをご覧ください。' :
                   currentLang === 'zh' ? '欧盟消费者有权在14天内无需说明任何理由撤销此次购买。根据Apple App Store政策，退款直接通过Apple处理。如需退款请求，请联系Apple支持或访问reportaproblem.apple.com。' :
                   'EU consumers have the right to withdraw from this purchase within 14 days without giving any reason. In accordance with Apple\'s App Store policies, refunds are handled directly through Apple. For refund requests, please contact Apple Support or visit reportaproblem.apple.com.'}
                </p>
              </section>

              <section className="pt-4">
                <h2 className="text-2xl mb-4 text-slate-900 dark:text-slate-100">
                  {currentLang === 'de' ? 'Urheberrechtshinweis' :
                   currentLang === 'es' ? 'Aviso de Copyright' :
                   currentLang === 'fr' ? 'Avis de Droit d\'Auteur' :
                   currentLang === 'it' ? 'Avviso di Copyright' :
                   currentLang === 'pt' ? 'Aviso de Direitos Autorais' :
                   currentLang === 'ja' ? '著作権表示' :
                   currentLang === 'zh' ? '版权声明' :
                   'Copyright Notice'}
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed dark:text-slate-400">
                  © 2026 AMX Mediensysteme. {currentLang === 'de' ? 'Alle Rechte vorbehalten.' :
                   currentLang === 'es' ? 'Todos los derechos reservados.' :
                   currentLang === 'fr' ? 'Tous droits réservés.' :
                   currentLang === 'it' ? 'Tutti i diritti riservati.' :
                   currentLang === 'pt' ? 'Todos os direitos reservados.' :
                   currentLang === 'ja' ? '全著作権所有。' :
                   currentLang === 'zh' ? '版权所有。' :
                   'All rights reserved.'} MACA {currentLang === 'de' ? 'und das MACA-Logo sind Markenzeichen von AMX Mediensysteme. macOS, Mac und Apple Silicon sind Markenzeichen von Apple Inc., eingetragen in den USA und anderen Ländern.' :
                   currentLang === 'es' ? 'y el logotipo de MACA son marcas comerciales de AMX Mediensysteme. macOS, Mac y Apple Silicon son marcas comerciales de Apple Inc., registradas en EE.UU. y otros países.' :
                   currentLang === 'fr' ? 'et le logo MACA sont des marques déposées d\'AMX Mediensysteme. macOS, Mac et Apple Silicon sont des marques déposées d\'Apple Inc., enregistrées aux États-Unis et dans d\'autres pays.' :
                   currentLang === 'it' ? 'e il logo MACA sono marchi di AMX Mediensysteme. macOS, Mac e Apple Silicon sono marchi di Apple Inc., registrati negli Stati Uniti e in altri paesi.' :
                   currentLang === 'pt' ? 'e o logotipo MACA são marcas registradas da AMX Mediensysteme. macOS, Mac e Apple Silicon são marcas registradas da Apple Inc., registradas nos EUA e em outros países.' :
                   currentLang === 'ja' ? 'およびMACAロゴはAMX Mediensystemeの商標です。macOS、Mac、Apple SiliconはApple Inc.の商標であり、米国およびその他の国で登録されています。' :
                   currentLang === 'zh' ? '和MACA标志是AMX Mediensysteme的商标。macOS、Mac和Apple Silicon是Apple Inc.的商标，在美国和其他国家/地区注册。' :
                   'and the MACA logo are trademarks of AMX Mediensysteme. macOS, Mac, and Apple Silicon are trademarks of Apple Inc., registered in the U.S. and other countries.'}
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </div>
      </main>

      {/* Footer */}
      <Footer currentLang={currentLang} />
    </div>
  );
}