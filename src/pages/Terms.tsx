import { useParams, useNavigate, Link } from 'react-router';
import { useEffect } from 'react';
import { motion } from 'motion/react';
import { FileText, ArrowLeft } from 'lucide-react';
import { type Language } from '../locales/translations';
import { Header } from '../components/Header';
import { LanguageSelector } from '../components/LanguageSelector';
import { useDarkMode } from '../hooks/useDarkMode';
import { useScrolled } from '../hooks/useScrolled';

export function Terms() {
  const { lang } = useParams();
  const navigate = useNavigate();
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const scrolled = useScrolled(50);

  const validLanguages: Language[] = ['en', 'de', 'es', 'fr', 'it', 'pt', 'ja', 'zh'];
  const requestedLang = lang as Language;
  const currentLang: Language = (lang && validLanguages.includes(requestedLang)) ? requestedLang : 'en';

  useEffect(() => {
    if (!lang || !validLanguages.includes(requestedLang)) {
      navigate('/en/terms', { replace: true });
    }
  }, [lang, requestedLang, navigate]);

  const handleLanguageChange = (newLang: Language) => {
    navigate(`/${newLang}/terms`);
  };

  const content = {
    en: {
      title: 'Terms of Use',
      subtitle: 'Last updated: February 20, 2026',
      backToHome: 'Back to Home',
      sections: [
        {
          title: '1. Acceptance of Terms',
          content: 'By accessing this website, you accept these Terms of Use. This website is purely informational and promotional for the MACA app. No purchases are made through this website.'
        },
        {
          title: '2. Purpose of This Website',
          content: 'This website provides information about MACA (Master Audio Control App) for macOS. All purchases and downloads occur exclusively through the Apple App Store, which has its own terms and conditions.'
        },
        {
          title: '3. No Data Collection',
          content: 'This website does not collect, store, or transmit personal data. We only use local browser storage for your preferences (language, dark mode, cookie consent). No analytics, no tracking, no accounts.'
        },
        {
          title: '4. External Links',
          content: 'This website contains links to the Apple App Store. When you click these links, you leave our website and are subject to Apple\'s terms and privacy policy. We are not responsible for external content.'
        },
        {
          title: '5. Intellectual Property',
          content: 'All content on this website, including text, images, logos, and design, is owned by AMX Mediensysteme and protected by copyright laws. The MACA name and logo are trademarks.'
        },
        {
          title: '6. Disclaimer',
          content: 'This website and its content are provided "as is" without warranties. We do not guarantee uninterrupted availability or error-free operation. Information about the app is subject to change.'
        },
        {
          title: '7. Limitation of Liability',
          content: 'AMX Mediensysteme is not liable for any damages arising from the use of this website, except in cases of intent or gross negligence.'
        },
        {
          title: '8. Changes',
          content: 'We reserve the right to modify these terms at any time. Continued use of the website after changes constitutes acceptance.'
        },
        {
          title: '9. Applicable Law',
          content: 'These Terms are governed by German law. For consumers in the EU, mandatory consumer protection laws of your country apply.'
        },
        {
          title: '10. Contact',
          content: 'Questions about these terms? Contact us through the information provided in our Imprint.'
        }
      ]
    },
    de: {
      title: 'Nutzungsbedingungen',
      subtitle: 'Stand: 20. Februar 2026',
      backToHome: 'Zurück zur Startseite',
      sections: [
        {
          title: '1. Geltungsbereich',
          content: 'Mit dem Besuch dieser Website akzeptieren Sie diese Nutzungsbedingungen. Diese Website dient ausschließlich der Information und Bewerbung der MACA App. Es werden keine Käufe über diese Website abgewickelt.'
        },
        {
          title: '2. Zweck der Website',
          content: 'Diese Website informiert über MACA (Master Audio Control App) für macOS. Alle Käufe und Downloads erfolgen ausschließlich über den Apple App Store, der eigene Geschäftsbedingungen hat.'
        },
        {
          title: '3. Keine Datensammlung',
          content: 'Diese Website sammelt, speichert oder überträgt keine personenbezogenen Daten. Wir nutzen nur lokalen Browser-Speicher für Ihre Präferenzen (Sprache, Dark Mode, Cookie-Zustimmung). Kein Analytics, kein Tracking, keine Accounts.'
        },
        {
          title: '4. Externe Links',
          content: 'Diese Website enthält Links zum Apple App Store. Beim Klick verlassen Sie unsere Website und unterliegen Apples Bedingungen und Datenschutzrichtlinien. Wir sind nicht für externe Inhalte verantwortlich.'
        },
        {
          title: '5. Urheberrecht',
          content: 'Alle Inhalte dieser Website, einschließlich Texte, Bilder, Logos und Design, sind Eigentum von AMX Mediensysteme und urheberrechtlich geschützt. MACA Name und Logo sind Markenzeichen.'
        },
        {
          title: '6. Haftungsausschluss',
          content: 'Diese Website wird "wie besehen" ohne Garantien bereitgestellt. Wir garantieren keine ununterbrochene Verfügbarkeit oder fehlerfreien Betrieb. Informationen über die App können sich ändern.'
        },
        {
          title: '7. Haftungsbeschränkung',
          content: 'AMX Mediensysteme haftet nicht für Schäden aus der Nutzung dieser Website, außer bei Vorsatz oder grober Fahrlässigkeit.'
        },
        {
          title: '8. Änderungen',
          content: 'Wir behalten uns vor, diese Bedingungen jederzeit zu ändern. Die fortgesetzte Nutzung nach Änderungen gilt als Zustimmung.'
        },
        {
          title: '9. Anwendbares Recht',
          content: 'Diese Bedingungen unterliegen deutschem Recht. Für Verbraucher in der EU gelten zwingende Verbraucherschutzgesetze ihres Landes.'
        },
        {
          title: '10. Kontakt',
          content: 'Fragen zu diesen Bedingungen? Kontaktieren Sie uns über die im Impressum angegebenen Daten.'
        }
      ]
    },
    fr: {
      title: 'Conditions d\'Utilisation',
      subtitle: 'Dernière mise à jour: 20 février 2026',
      backToHome: 'Retour à l\'Accueil',
      sections: [
        {
          title: '1. Acceptation',
          content: 'En visitant ce site, vous acceptez ces conditions. Ce site est purement informatif pour l\'app MACA. Aucun achat n\'est effectué via ce site.'
        },
        {
          title: '2. But du Site',
          content: 'Ce site fournit des informations sur MACA pour macOS. Tous les achats se font exclusivement via l\'Apple App Store avec ses propres conditions.'
        },
        {
          title: '3. Pas de Collecte de Données',
          content: 'Ce site ne collecte aucune donnée personnelle. Nous utilisons uniquement le stockage local pour vos préférences. Pas d\'analytics, pas de tracking.'
        },
        {
          title: '4. Liens Externes',
          content: 'Ce site contient des liens vers l\'App Store. En cliquant, vous quittez notre site et êtes soumis aux conditions d\'Apple.'
        },
        {
          title: '5. Propriété Intellectuelle',
          content: 'Tout le contenu est la propriété d\'AMX Mediensysteme et protégé par le droit d\'auteur.'
        }
      ]
    },
    es: {
      title: 'Términos de Uso',
      subtitle: 'Última actualización: 20 de febrero de 2026',
      backToHome: 'Volver a Inicio',
      sections: [
        {
          title: '1. Aceptación',
          content: 'Al visitar este sitio, acepta estos términos. Este sitio es puramente informativo para la app MACA. No se realizan compras a través de este sitio.'
        },
        {
          title: '2. Propósito del Sitio',
          content: 'Este sitio proporciona información sobre MACA para macOS. Todas las compras se realizan exclusivamente a través del Apple App Store con sus propios términos.'
        },
        {
          title: '3. Sin Recopilación de Datos',
          content: 'Este sitio no recopila datos personales. Solo usamos almacenamiento local para sus preferencias. Sin analytics, sin tracking.'
        },
        {
          title: '4. Enlaces Externos',
          content: 'Este sitio contiene enlaces a la App Store. Al hacer clic, sale de nuestro sitio y está sujeto a las condiciones de Apple.'
        },
        {
          title: '5. Propiedad Intelectual',
          content: 'Todo el contenido es propiedad de AMX Mediensysteme y está protegido por derechos de autor.'
        }
      ]
    },
    it: {
      title: 'Termini d\'Uso',
      subtitle: 'Ultimo aggiornamento: 20 febbraio 2026',
      backToHome: 'Torna alla Home',
      sections: [
        {
          title: '1. Accettazione',
          content: 'Visitando questo sito, accetti questi termini. Questo sito è puramente informativo per l\'app MACA. Nessun acquisto viene effettuato tramite questo sito.'
        },
        {
          title: '2. Scopo del Sito',
          content: 'Questo sito fornisce informazioni su MACA per macOS. Tutti gli acquisti avvengono esclusivamente tramite Apple App Store con i propri termini.'
        },
        {
          title: '3. Nessuna Raccolta Dati',
          content: 'Questo sito non raccoglie dati personali. Utilizziamo solo l\'archiviazione locale per le preferenze. Nessun analytics, nessun tracking.'
        },
        {
          title: '4. Link Esterni',
          content: 'Questo sito contiene link all\'App Store. Cliccando, lasci il nostro sito e sei soggetto alle condizioni di Apple.'
        },
        {
          title: '5. Proprietà Intellettuale',
          content: 'Tutti i contenuti sono di proprietà di AMX Mediensysteme e protetti da copyright.'
        }
      ]
    },
    pt: {
      title: 'Termos de Uso',
      subtitle: 'Última atualização: 20 de fevereiro de 2026',
      backToHome: 'Voltar ao Início',
      sections: [
        {
          title: '1. Aceitação',
          content: 'Ao visitar este site, você aceita estes termos. Este site é puramente informativo para o app MACA. Nenhuma compra é feita através deste site.'
        },
        {
          title: '2. Propósito do Site',
          content: 'Este site fornece informações sobre MACA para macOS. Todas as compras ocorrem exclusivamente através da Apple App Store com seus próprios termos.'
        },
        {
          title: '3. Sem Coleta de Dados',
          content: 'Este site não coleta dados pessoais. Usamos apenas armazenamento local para preferências. Sem analytics, sem rastreamento.'
        },
        {
          title: '4. Links Externos',
          content: 'Este site contém links para a App Store. Ao clicar, você sai do nosso site e está sujeito aos termos da Apple.'
        },
        {
          title: '5. Propriedade Intelectual',
          content: 'Todo o conteúdo é propriedade da AMX Mediensysteme e protegido por direitos autorais.'
        }
      ]
    },
    ja: {
      title: '利用規約',
      subtitle: '最終更新日: 2026年2月20日',
      backToHome: 'ホームに戻る',
      sections: [
        {
          title: '1. 利用規約の同意',
          content: 'このウェブサイトにアクセスすることで、これらの利用規約に同意します。このウェブサイトは、MACAアプリの情報提供と宣伝用です。このウェブサイトを通じて購入は行われません。'
        },
        {
          title: '2. このウェブサイトの目的',
          content: 'このウェブサイトは、macOS用のMACA（Master Audio Control App）についての情報を提供します。すべての購入とダウンロードは、独自の利用規約を持つApple App Storeを通じてのみ行われます。'
        },
        {
          title: '3. データ収集のない',
          content: 'このウェブサイトは、個人データを収集、保存、または送信しません。私たちは、あなたの好み（言語、ダークモード、クッキーの同意）のためにのみローカルブラウザストレージを使用します。分析、追跡、アカウントはありません。'
        },
        {
          title: '4. 外部リンク',
          content: 'このウェブサイトには、Apple App Storeへのリンクが含まれています。これらのリンクをクリックすると、私たちのウェブサイトを離れてAppleの利用規約とプライバシーポリシーに従います。私たちは外部コンテンツについて責任を負いません。'
        },
        {
          title: '5. 知的財産権',
          content: 'このウェブサイト上のすべてのコンテンツ、テキスト、画像、ロゴ、デザインは、AMX Mediensystemeの所有物であり、著作権法によって保護されています。MACAの名前とロゴは商標です。'
        },
        {
          title: '6. 免責声明',
          content: 'このウェブサイトとそのコンテンツは、保証なしで提供されます。「現状」で提供されます。私たちは、中断のない利用やエラーのない動作を保証しません。アプリに関する情報は変更される可能性があります。'
        },
        {
          title: '7. 責任の限界',
          content: 'AMX Mediensystemeは、このウェブサイトの利用による損失について責任を負いません。ただし、故意または重大な過失を除きます。'
        },
        {
          title: '8. 変更',
          content: '私たちは、これらの規約をいつでも変更する権利を保持します。変更後のウェブサイトの継続的な利用は、その変更への同意を意味します。'
        },
        {
          title: '9. 適用される法',
          content: 'これらの規約は、ドイツ法に基づいています。EUの消費者については、その国の消費者保護法が適用されます。'
        },
        {
          title: '10. 連絡先',
          content: 'これらの規約に関する質問は、私たちのインプリントで提供されている情報を通じてお問い合わせください。'
        }
      ]
    },
    zh: {
      title: '使用条款',
      subtitle: '最后更新日期: 2026年2月20日',
      backToHome: '返回首页',
      sections: [
        {
          title: '1. 接受条款',
          content: '通过访问此网站，您接受这些使用条款。此网站仅用于提供和宣传MACA应用程序的信息。不通过此网站进行任何购买。'
        },
        {
          title: '2. 该网站的目的',
          content: '该网站提供有关macOS的MACA（Master Audio Control App）的信息。所有购买和下载均仅通过具有自己条款和条件的Apple App Store进行。'
        },
        {
          title: '3. 不收集数据',
          content: '该网站不收集、存储或传输个人数据。我们仅使用本地浏览器存储来保存您的偏好（语言、暗模式、Cookie同意）。没有分析、没有跟踪、没有账户。'
        },
        {
          title: '4. 外部链接',
          content: '该网站包含指向Apple App Store的链接。点击这些链接时，您将离开我们的网站，并受Apple的条款和隐私政策的约束。我们不对外部内容负责。'
        },
        {
          title: '5. 知识产权',
          content: '该网站上的所有内容，包括文本、图像、标志和设计，均属于AMX Mediensysteme，并受版权法保护。MACA名称和标志是商标。'
        },
        {
          title: '6. 免责声明',
          content: '该网站及其内容按“现状”提供，不附带任何保证。我们不保证不间断的可用性或无错误的操作。有关应用程序的信息可能会更改。'
        },
        {
          title: '7. 责任限制',
          content: 'AMX Mediensysteme不对使用此网站造成的任何损害负责，除非存在故意或重大过失。'
        },
        {
          title: '8. 修改',
          content: '我们保留随时修改这些条款的权利。继续使用网站即表示接受修改。'
        },
        {
          title: '9. 适用法律',
          content: '这些条款受德国法律管辖。对于欧盟消费者，适用其国家的强制性消费者保护法律。'
        },
        {
          title: '10. 联系我们',
          content: '有关这些条款的问题？请通过我们在印鉴中提供的信息联系我们。'
        }
      ]
    }
  };

  const t = content[currentLang] || content.en;
  const sections = t.sections.length > 0 ? t.sections : content.en.sections;

  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-950 transition-colors duration-300 ${isDarkMode ? 'dark' : ''}`}>
      <Header 
        scrolled={scrolled} 
        currentLang={currentLang}
        isDarkMode={isDarkMode}
        onToggleDarkMode={toggleDarkMode}
        onLanguageChange={handleLanguageChange}
        badge="📋 Terms of Service"
      >
        <LanguageSelector 
          currentLang={currentLang} 
          onLanguageChange={handleLanguageChange} 
        />
      </Header>

      <section className="relative pt-32 pb-12 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <Link
            to={`/${currentLang}`}
            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:gap-3 transition-all mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>{t.backToHome}</span>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-2xl shadow-2xl p-6 sm:p-12 border border-slate-200 dark:border-slate-700"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center">
                <FileText className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
                  {t.title}
                </h1>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                  {t.subtitle}
                </p>
              </div>
            </div>

            <div className="prose prose-slate dark:prose-invert max-w-none">
              {sections.map((section, index) => (
                <div key={index} className="mb-8">
                  <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                    {section.title}
                  </h2>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700">
              <p className="text-sm text-slate-500 dark:text-slate-400 text-center">
                © {new Date().getFullYear()} AMX Mediensysteme. All rights reserved.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}