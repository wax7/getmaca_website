import { useParams, useNavigate, Link } from 'react-router';
import { useEffect } from 'react';
import { motion } from 'motion/react';
import { FileText, ArrowLeft } from 'lucide-react';
import { type Language } from '../locales/translations';
import { Header } from '../components/Header';
import { LanguageSelector } from '../components/LanguageSelector';
import { useDarkMode } from '../hooks/useDarkMode';
import { useScrolled } from '../hooks/useScrolled';
import { Footer } from '../components/Footer';

export function Terms() {
  const { lang } = useParams();
  const navigate = useNavigate();
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const scrolled = useScrolled(50);

  const validLanguages: Language[] = ['en', 'de', 'es', 'fr', 'it', 'ja', 'zh-Hans', 'zh-Hant', 'ar', 'ru', 'nl', 'tr', 'sv', 'da', 'ko', 'nb'];
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
          content: 'Ce site ne collecte aucune donnée personnelle. Nous utilisons uniquement le stockage local pour vos préférences (langue, mode sombre, consentement). Pas d\'analytics, pas de tracking.'
        },
        {
          title: '4. Liens Externes',
          content: 'Ce site contient des liens vers l\'App Store. En cliquant, vous quittez notre site et êtes soumis aux conditions d\'Apple. Nous ne sommes pas responsables du contenu externe.'
        },
        {
          title: '5. Propriété Intellectuelle',
          content: 'Tout le contenu de ce site, y compris les textes, images, logos et design, est la propriété d\'AMX Mediensysteme et protégé par le droit d\'auteur. Le nom et le logo MACA sont des marques déposées.'
        },
        {
          title: '6. Clause de non-responsabilité',
          content: 'Ce site et son contenu sont fournis « en l\'état » sans garantie. Nous ne garantissons pas une disponibilité ininterrompue ou un fonctionnement sans erreur. Les informations relatives à l\'application sont susceptibles d\'être modifiées.'
        },
        {
          title: '7. Limitation de responsabilité',
          content: 'AMX Mediensysteme n\'est pas responsable des dommages résultant de l\'utilisation de ce site, sauf en cas de faute intentionnelle ou de négligence grave.'
        },
        {
          title: '8. Modifications',
          content: 'Nous nous réservons le droit de modifier ces conditions à tout moment. La poursuite de l\'utilisation du site après les modifications vaut acceptation.'
        },
        {
          title: '9. Droit applicable',
          content: 'Ces conditions sont régies par le droit allemand. Pour les consommateurs de l\'UE, les lois impératives de protection des consommateurs de leur pays s\'appliquent.'
        },
        {
          title: '10. Contact',
          content: 'Des questions sur ces conditions ? Contactez-nous via les informations fournies dans nos mentions légales.'
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
          content: 'Este sitio no recopila datos personales. Solo usamos almacenamiento local para sus preferencias (idioma, modo oscuro, consentimiento). Sin analytics, sin tracking.'
        },
        {
          title: '4. Enlaces Externos',
          content: 'Este sitio contiene enlaces a la App Store. Al hacer clic, sale de nuestro sitio y está sujeto a las condiciones de Apple. No somos responsables del contenido externo.'
        },
        {
          title: '5. Propiedad Intelectual',
          content: 'Todo el contenido de este sitio, incluyendo textos, imágenes, logotipos y diseño, es propiedad de AMX Mediensysteme y está protegido por derechos de autor. El nombre y logotipo de MACA son marcas registradas.'
        },
        {
          title: '6. Descargo de responsabilidad',
          content: 'Este sitio web y su contenido se proporcionan "tal cual" sin garantías. No garantizamos disponibilidad ininterrumpida ni funcionamiento libre de errores. La información sobre la aplicación está sujeta a cambios.'
        },
        {
          title: '7. Limitación de responsabilidad',
          content: 'AMX Mediensysteme no es responsable de los daños derivados del uso de este sitio web, excepto en casos de dolo o negligencia grave.'
        },
        {
          title: '8. Cambios',
          content: 'Nos reservamos el derecho de modificar estos términos en cualquier momento. El uso continuo del sitio web después de los cambios constituye aceptación.'
        },
        {
          title: '9. Ley aplicable',
          content: 'Estos términos se rigen por la ley alemana. Para los consumidores en la UE, se aplican las leyes obligatorias de protección al consumidor de su país.'
        },
        {
          title: '10. Contacto',
          content: '¿Preguntas sobre estos términos? Contáctenos a través de la información proporcionada en nuestro aviso legal.'
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
          content: 'Questo sito non raccoglie dati personali. Utilizziamo solo l\'archiviazione locale per le preferenze (lingua, modalità scura, consenso). Nessun analytics, nessun tracking.'
        },
        {
          title: '4. Link Esterni',
          content: 'Questo sito contiene link all\'App Store. Cliccando, lasci il nostro sito e sei soggetto alle condizioni di Apple. Non siamo responsabili del contenuto esterno.'
        },
        {
          title: '5. Proprietà Intellettuale',
          content: 'Tutti i contenuti di questo sito, inclusi testi, immagini, loghi e design, sono di proprietà di AMX Mediensysteme e protetti da copyright. Il nome e il logo MACA sono marchi registrati.'
        },
        {
          title: '6. Esclusione di responsabilità',
          content: 'Questo sito web e i suoi contenuti sono forniti "così come sono" senza garanzie. Non garantiamo disponibilità ininterrotta o funzionamento privo di errori. Le informazioni sull\'app sono soggette a modifiche.'
        },
        {
          title: '7. Limitazione di responsabilità',
          content: 'AMX Mediensysteme non è responsabile per eventuali danni derivanti dall\'uso di questo sito web, salvo in caso di dolo o colpa grave.'
        },
        {
          title: '8. Modifiche',
          content: 'Ci riserviamo il diritto di modificare questi termini in qualsiasi momento. L\'uso continuo del sito dopo le modifiche costituisce accettazione.'
        },
        {
          title: '9. Legge applicabile',
          content: 'Questi termini sono disciplinati dal diritto tedesco. Per i consumatori nell\'UE si applicano le leggi obbligatorie sulla protezione dei consumatori del proprio paese.'
        },
        {
          title: '10. Contatti',
          content: 'Domande su questi termini? Contattaci tramite le informazioni fornite nelle nostre note legali.'
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
    'zh-Hans': {
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
    },
    'zh-Hant': {
      title: '使用條款',
      subtitle: '最後更新日期: 2026年2月20日',
      backToHome: '返回首頁',
      sections: [
        {
          title: '1. 接受條款',
          content: '通過訪問此網站，您接受這些使用條款。此網站僅用於提供和宣傳MACA應用程序的信息。不通過此網站進行任何購買。'
        },
        {
          title: '2. 該網站的目的',
          content: '該網站提供有關macOS的MACA（Master Audio Control App）的信息。所有購買和下載均僅通過具有自己條款和條件的Apple App Store進行。'
        },
        {
          title: '3. 不收集數據',
          content: '該網站不收集、存儲或傳輸個人數據。我們僅使用本地瀏覽器存儲來保存您的偏好（語言、暗模式、Cookie同意）。沒有分析、沒有追蹤、沒有賬戶。'
        },
        {
          title: '4. 外部鏈接',
          content: '該網站包含指向Apple App Store的鏈接。點擊這些鏈接時，您將離開我們的網站，並受Apple的條款和隱私政策的約束。我們不對外部內容負責。'
        },
        {
          title: '5. 知識產權',
          content: '該網站上的所有內容，包括文本、圖像、標誌和設計，均屬於AMX Mediensysteme，並受版權法保護。MACA名稱和標誌是商標。'
        },
        {
          title: '6. 免責聲明',
          content: '該網站及其內容按「現狀」提供，不附帶任何保證。我們不保證無間斷的可用性或無錯誤的操作。有關應用程序的信息可能會更改。'
        },
        {
          title: '7. 責任限制',
          content: 'AMX Mediensysteme不對使用此網站造成的任何損失負責，除非存在故意或重大過失。'
        },
        {
          title: '8. 修改',
          content: '我們保留隨時修改這些條款的權利。繼續使用網站即表示接受修改。'
        },
        {
          title: '9. 適用法律',
          content: '這些條款受德國法律管轄。對於歐盟消費者，適用其國家的強制性消費者保護法律。'
        },
        {
          title: '10. 聯繫我們',
          content: '有關這些條款的問題？請通過我們在印鑑中提供的信息聯繫我們。'
        }
      ]
    },
    ar: {
      title: 'شروط الاستخدام',
      subtitle: 'آخر تحديث: 20 فبراير 2026',
      backToHome: 'العودة للرئيسية',
      sections: [
        { title: '1. قبول الشروط', content: 'بزيارتك لهذا الموقع، فإنك تقبل شروط الاستخدام هذه. هذا الموقع مخصص للمعلومات والترويج لتطبيق MACA فقط. لا تتم أي عمليات شراء عبر هذا الموقع.' },
        { title: '2. الغرض من الموقع', content: 'يوفر هذا الموقع معلومات حول MACA (Master Audio Control App) لنظام macOS. تتم جميع عمليات الشراء والتنزيل حصريًا عبر Apple App Store.' },
        { title: '3. عدم جمع البيانات', content: 'لا يجمع هذا الموقع أو يخزن أو ينقل بيانات شخصية. نستخدم فقط التخزين المحلي للمتصفح لتفضيلاتك.' },
        { title: '4. الروابط الخارجية', content: 'يحتوي هذا الموقع على روابط إلى Apple App Store. عند النقر عليها، تغادر موقعنا وتخضع لشروط Apple.' },
        { title: '5. الملكية الفكرية', content: 'جميع المحتويات على هذا الموقع مملوكة لـ AMX Mediensysteme ومحمية بقوانين حقوق النشر.' },
        { title: '6. إخلاء المسؤولية', content: 'يُقدَّم هذا الموقع ومحتوياته "كما هو" بدون ضمانات. لا نضمن التوفر المستمر أو التشغيل الخالي من الأخطاء.' },
        { title: '7. تحديد المسؤولية', content: 'AMX Mediensysteme غير مسؤولة عن أي أضرار ناتجة عن استخدام هذا الموقع، باستثناء حالات القصد أو الإهمال الجسيم.' },
        { title: '8. التغييرات', content: 'نحتفظ بالحق في تعديل هذه الشروط في أي وقت. الاستمرار في استخدام الموقع بعد التغييرات يعني القبول.' },
        { title: '9. القانون المطبق', content: 'تخضع هذه الشروط للقانون الألماني. بالنسبة للمستهلكين في الاتحاد الأوروبي، تنطبق قوانين حماية المستهلك الإلزامية في بلدهم.' },
        { title: '10. الاتصال', content: 'أسئلة حول هذه الشروط؟ تواصل معنا عبر المعلومات المقدمة في بياناتنا القانونية.' }
      ]
    },
    ru: {
      title: 'Условия использования',
      subtitle: 'Последнее обновление: 20 февраля 2026',
      backToHome: 'На главную',
      sections: [
        { title: '1. Принятие условий', content: 'Посещая этот веб-сайт, вы принимаете настоящие Условия использования. Этот веб-сайт носит исключительно информационный и рекламный характер для приложения MACA. Покупки через этот веб-сайт не осуществляются.' },
        { title: '2. Назначение сайта', content: 'Этот веб-сайт предоставляет информацию о MACA (Master Audio Control App) для macOS. Все покупки и загрузки осуществляются исключительно через Apple App Store.' },
        { title: '3. Отсутствие сбора данных', content: 'Этот веб-сайт не собирает, не хранит и не передаёт персональные данные. Мы используем только локальное хранилище браузера для ваших предпочтений.' },
        { title: '4. Внешние ссылки', content: 'Этот веб-сайт содержит ссылки на Apple App Store. При нажатии вы покидаете наш сайт и подчиняетесь условиям Apple.' },
        { title: '5. Интеллектуальная собственность', content: 'Весь контент на этом сайте является собственностью AMX Mediensysteme и защищён авторским правом.' },
        { title: '6. Отказ от гарантий', content: 'Этот веб-сайт и его содержимое предоставляются «как есть» без гарантий. Мы не гарантируем бесперебойную доступность или безошибочную работу.' },
        { title: '7. Ограничение ответственности', content: 'AMX Mediensysteme не несёт ответственности за убытки, возникшие в результате использования этого сайта, за исключением случаев умысла или грубой небрежности.' },
        { title: '8. Изменения', content: 'Мы оставляем за собой право изменять эти условия в любое время. Продолжение использования сайта после изменений означает принятие.' },
        { title: '9. Применимое право', content: 'Эти условия регулируются законодательством Германии. Для потребителей в ЕС применяются обязательные законы о защите прав потребителей их страны.' },
        { title: '10. Контакт', content: 'Вопросы по этим условиям? Свяжитесь с нами через информацию, указанную в нашем импрессуме.' }
      ]
    },
    nl: {
      title: 'Gebruiksvoorwaarden',
      subtitle: 'Laatst bijgewerkt: 20 februari 2026',
      backToHome: 'Terug naar startpagina',
      sections: [
        { title: '1. Acceptatie', content: 'Door deze website te bezoeken, accepteert u deze Gebruiksvoorwaarden. Deze website is puur informatief en promotioneel voor de MACA-app. Er worden geen aankopen gedaan via deze website.' },
        { title: '2. Doel van de website', content: 'Deze website biedt informatie over MACA (Master Audio Control App) voor macOS. Alle aankopen en downloads vinden uitsluitend plaats via de Apple App Store.' },
        { title: '3. Geen gegevensverzameling', content: 'Deze website verzamelt, bewaart of verzendt geen persoonlijke gegevens. We gebruiken alleen lokale browseropslag voor uw voorkeuren.' },
        { title: '4. Externe links', content: 'Deze website bevat links naar de Apple App Store. Door te klikken verlaat u onze website en bent u onderworpen aan de voorwaarden van Apple.' },
        { title: '5. Intellectueel eigendom', content: 'Alle inhoud op deze website is eigendom van AMX Mediensysteme en beschermd door auteursrechtwetten.' },
        { title: '6. Disclaimer', content: 'Deze website en de inhoud ervan worden "zoals ze zijn" aangeboden zonder garanties. We garanderen geen ononderbroken beschikbaarheid of foutloze werking.' },
        { title: '7. Beperking van aansprakelijkheid', content: 'AMX Mediensysteme is niet aansprakelijk voor schade voortvloeiend uit het gebruik van deze website, behalve in geval van opzet of grove nalatigheid.' },
        { title: '8. Wijzigingen', content: 'We behouden ons het recht voor om deze voorwaarden op elk moment te wijzigen. Voortgezet gebruik na wijzigingen betekent acceptatie.' },
        { title: '9. Toepasselijk recht', content: 'Deze voorwaarden worden beheerst door het Duitse recht. Voor consumenten in de EU gelden de dwingende consumentenbeschermingswetten van hun land.' },
        { title: '10. Contact', content: 'Vragen over deze voorwaarden? Neem contact met ons op via de informatie in ons colofon.' }
      ]
    },
    tr: {
      title: 'Kullanım Koşulları',
      subtitle: 'Son güncelleme: 20 Şubat 2026',
      backToHome: 'Ana sayfaya dön',
      sections: [
        { title: '1. Koşulların Kabulü', content: 'Bu web sitesini ziyaret ederek bu Kullanım Koşullarını kabul etmiş olursunuz. Bu web sitesi yalnızca MACA uygulaması için bilgi ve tanıtım amaçlıdır. Bu web sitesi üzerinden satın alma yapılmaz.' },
        { title: '2. Web Sitesinin Amacı', content: 'Bu web sitesi macOS için MACA (Master Audio Control App) hakkında bilgi sağlar. Tüm satın almalar ve indirmeler yalnızca Apple App Store üzerinden gerçekleşir.' },
        { title: '3. Veri Toplama Yok', content: 'Bu web sitesi kişisel veri toplamaz, saklamaz veya iletmez. Yalnızca tercihleriniz için yerel tarayıcı depolaması kullanıyoruz.' },
        { title: '4. Harici Bağlantılar', content: 'Bu web sitesi Apple App Store bağlantıları içerir. Tıkladığınızda web sitemizi terk edersiniz ve Apple koşullarına tabi olursunuz.' },
        { title: '5. Fikri Mülkiyet', content: 'Bu web sitesindeki tüm içerik AMX Mediensysteme\'ye aittir ve telif hakkı yasalarıyla korunmaktadır.' },
        { title: '6. Sorumluluk Reddi', content: 'Bu web sitesi ve içeriği garanti olmaksızın "olduğu gibi" sağlanmaktadır. Kesintisiz kullanılabilirlik veya hatasız çalışma garanti edilmez.' },
        { title: '7. Sorumluluk Sınırlaması', content: 'AMX Mediensysteme, kasıt veya ağır ihmal durumları dışında bu web sitesinin kullanımından kaynaklanan zararlardan sorumlu değildir.' },
        { title: '8. Değişiklikler', content: 'Bu koşulları herhangi bir zamanda değiştirme hakkımızı saklı tutarız. Değişikliklerden sonra web sitesinin kullanılmaya devam edilmesi kabul anlamına gelir.' },
        { title: '9. Uygulanacak Hukuk', content: 'Bu koşullar Alman hukukuna tabidir. AB\'deki tüketiciler için ülkelerinin zorunlu tüketici koruma yasaları geçerlidir.' },
        { title: '10. İletişim', content: 'Bu koşullarla ilgili sorularınız mı var? Yasal bilgilerimizde verilen iletişim bilgileri üzerinden bize ulaşın.' }
      ]
    },
    sv: {
      title: 'Användarvillkor',
      subtitle: 'Senast uppdaterad: 20 februari 2026',
      backToHome: 'Tillbaka till startsidan',
      sections: [
        { title: '1. Godkännande', content: 'Genom att besöka denna webbplats godkänner du dessa Användarvillkor. Denna webbplats är enbart informativ och marknadsföring för MACA-appen. Inga köp görs via denna webbplats.' },
        { title: '2. Webbplatsens syfte', content: 'Denna webbplats tillhandahåller information om MACA (Master Audio Control App) för macOS. Alla köp och nedladdningar sker uteslutande via Apple App Store.' },
        { title: '3. Ingen datainsamling', content: 'Denna webbplats samlar inte in, lagrar eller överför personuppgifter. Vi använder bara lokal webbläsarlagring för dina preferenser.' },
        { title: '4. Externa länkar', content: 'Denna webbplats innehåller länkar till Apple App Store. När du klickar lämnar du vår webbplats och omfattas av Apples villkor.' },
        { title: '5. Immateriella rättigheter', content: 'Allt innehåll på denna webbplats ägs av AMX Mediensysteme och skyddas av upphovsrätten.' },
        { title: '6. Ansvarsfriskrivning', content: 'Denna webbplats och dess innehåll tillhandahålls "som de är" utan garantier. Vi garanterar inte oavbruten tillgänglighet eller felfri drift.' },
        { title: '7. Ansvarsbegränsning', content: 'AMX Mediensysteme ansvarar inte för skador som uppstår genom användning av denna webbplats, utom vid uppsåt eller grov vårdslöshet.' },
        { title: '8. Ändringar', content: 'Vi förbehåller oss rätten att ändra dessa villkor när som helst. Fortsatt användning av webbplatsen efter ändringar utgör godkännande.' },
        { title: '9. Tillämplig lag', content: 'Dessa villkor regleras av tysk lag. För konsumenter inom EU gäller de tvingande konsumentskyddslagarna i deras land.' },
        { title: '10. Kontakt', content: 'Frågor om dessa villkor? Kontakta oss via informationen i vårt impressum.' }
      ]
    },
    da: {
      title: 'Brugervilkår',
      subtitle: 'Sidst opdateret: 20. februar 2026',
      backToHome: 'Tilbage til forsiden',
      sections: [
        { title: '1. Accepter vilkårene', content: 'Ved at besøge denne hjemmeside accepterer du disse brugervilkår. Denne hjemmeside er udelukkende informativ og markedsførende for MACA-appen. Der foregår ingen køb via denne hjemmeside.' },
        { title: '2. Formålet med hjemmesiden', content: 'Denne hjemmeside giver information om MACA (Master Audio Control App) for macOS. Alle køb og downloads foregår eksklusivt gennem Apple App Store.' },
        { title: '3. Ingen datasamling', content: 'Denne hjemmeside indsamler ikke, gemmer eller overfører personlige data. Vi bruger kun lokal browserlagring til dine præferencer.' },
        { title: '4. Eksterne links', content: 'Denne hjemmeside indeholder links til Apple App Store. Ved at klikke forlader du vores hjemmeside og er underlagt Apples vilkår.' },
        { title: '5. Intellektuel ejendom', content: 'Alt indhold på denne hjemmeside ejes af AMX Mediensysteme og er beskyttet af ophavsret.' },
        { title: '6. Ansvarsfraskrivning', content: 'Denne hjemmeside og dens indhold leveres "som den er" uden garantier. Vi garanterer ikke kontinuerlig tilgængelighed eller fejlfri drift.' },
        { title: '7. Ansvarsbegrænsning', content: 'AMX Mediensysteme er ikke ansvarlig for skader opstået af brug af denne hjemmeside, undtagen ved vilje eller alvorlig uopmærksomhed.' },
        { title: '8. Ændringer', content: 'Vi beholder os retten til at ændre disse vilkår når som helst. Fortsat brug af hjemmesiden efter ændringer betyder accepterelse.' },
        { title: '9. Anvendeligt lov', content: 'Disse vilkår reguleres af tysk lov. For forbrugere i EU gælder de obligatoriske forbrugerskyttelseslove i deres land.' },
        { title: '10. Kontakt', content: 'Spørgsmål om disse vilkår? Kontakt os via informationen i vores imprint.' }
      ]
    },
    ko: {
      title: '이용 약관',
      subtitle: '마지막 업데이트: 2026년 2월 20일',
      backToHome: '홈으로 돌아가기',
      sections: [
        { title: '1. 약관 동의', content: '이 웹사이트에 방문하여 이러한 이용 약관에 동의합니다. 이 웹사이트는 MACA 앱에 대한 정보 제공 및 홍보용입니다. 이 웹사이트를 통해 구매가 이루어지지 않습니다.' },
        { title: '2. 웹사이트의 목적', content: '이 웹사이트는 macOS용 MACA (Master Audio Control App)에 대한 정보를 제공합니다. 모든 구매 및 다운로드는 Apple App Store를 통해 이루어집니다.' },
        { title: '3. 데이터 수집 없음', content: '이 웹사이트는 개인 데이터를 수집, 저장 또는 전송하지 않습니다. 우리는 로컬 브라우저 저장소를 사용하여 선호도(언어, 다크 모드, 쿠키 동의)만 저장합니다. 분석, 추적, 계정 없음.' },
        { title: '4. 외부 링크', content: '이 웹사이트에는 Apple App Store 링크가 포함되어 있습니다. 클릭하면 우리 웹사이트를 떠나 Apple의 이용 약관과 개인정보 보호 정책에 따라야 합니다. 우리는 외부 콘텐츠에 대한 책임이 없습니다.' },
        { title: '5. 지적 재산권', content: '이 웹사이트의 모든 콘텐츠(텍스트, 이미지, 로고, 디자인)는 AMX Mediensysteme 소유이며 저작권법으로 보호됩니다. MACA 이름과 로고는 상표입니다.' },
        { title: '6. 면책 조항', content: '이 웹사이트 및 콘텐츠는 보증 없이 "있는 그대로" 제공됩니다. 우리는 중단 없는 이용 또는 오류 없는 작동을 보장하지 않습니다. 앱에 대한 정보는 변경될 수 있습니다.' },
        { title: '7. 책임 제한', content: 'AMX Mediensysteme는 의도 또는 중대한 과실이 없는 한 이 웹사이트의 이용으로 인한 모든 손해에 대해 책임지지 않습니다.' },
        { title: '8. 변경 사항', content: '우리는 이러한 약관을 언제든지 변경할 수 있는 권리를 보유하고 있습니다. 변경 후 웹사이트를 계속 사용하면 동의를 의미합니다.' },
        { title: '9. 적용 가능한 법률', content: '이 약관은 독일 법률에 따라 관리됩니다. EU 소비자에게는 해당 국가의 소비자 보호 법률이 적용됩니다.' },
        { title: '10. 연락처', content: '이 약관에 대한 질문이 있으시면 인프린트에 제공된 정보를 통해 연락해 주세요.' }
      ]
    },
    nb: {
      title: 'Bruksvilkår',
      subtitle: 'Sist oppdatert: 20. februar 2026',
      backToHome: 'Tilbake til hjemmesiden',
      sections: [
        { title: '1. Godkjenning av vilkår', content: 'Ved å besøke denne nettsiden godkjenner du disse bruksvilkårene. Denne nettsiden er eneste informasjonell og markedsføringsmessig for MACA-appen. Ingen kjøp gjøres gjennom denne nettsiden.' },
        { title: '2. Formålet med nettsiden', content: 'Denne nettsiden gir informasjon om MACA (Master Audio Control App) for macOS. Alle kjøp og nedlastinger skjer eksklusivt gjennom Apple App Store.' },
        { title: '3. Ingen datainsamling', content: 'Denne nettsiden samlar ikke inn, lagrer eller overfører personlige data. Vi bruker bare lokal nettleserlagring for dine preferanser.' },
        { title: '4. Eksterne lenker', content: 'Denne nettsiden inneholder lenker til Apple App Store. Ved å klikke forlater du vår nettside og er underlagt Apples vilkår.' },
        { title: '5. Intellektuell eiendom', content: 'Alt innhold på denne nettsiden eies av AMX Mediensysteme og er beskyttet av ophavsrett.' },
        { title: '6. Ansvarsfraskrivning', content: 'Denne nettsiden og dens innhold leveres "som den er" uten garantier. Vi garanterer ikke kontinuerlig tilgjengelighet eller feilfri drift.' },
        { title: '7. Ansvarsbegrensning', content: 'AMX Mediensysteme er ikke ansvarlig for skader som oppstår gjennom bruk av denne nettsiden, unntatt ved vilje eller alvorlig uoppmerksomhet.' },
        { title: '8. Endringer', content: 'Vi beholder oss retten til å endre disse vilkårene når som helst. Fortsatt bruk av nettsiden etter endringer betyr godkjenning.' },
        { title: '9. Anvendelig lov', content: 'Disse vilkårene reguleres av tysk lov. For forbrukere i EU gælder de obligatoriske forbrukerskyttelseslove i deres land.' },
        { title: '10. Kontakt', content: 'Spørsmål om disse vilkårene? Kontakt oss via informasjonen i vårt imprint.' }
      ]
    }
  };

  const t = content[currentLang] || content.en;
  const sections = t.sections.length > 0 ? t.sections : content.en.sections;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-950 transition-colors duration-300">
      <Header 
        scrolled={scrolled} 
        currentLang={currentLang}
        isDarkMode={isDarkMode}
        onToggleDarkMode={toggleDarkMode}
        onLanguageChange={handleLanguageChange}
        badge={currentLang === 'de' ? '📋 Nutzungsbedingungen' :
               currentLang === 'es' ? '📋 Términos de Uso' :
               currentLang === 'fr' ? '📋 Conditions d\'Utilisation' :
               currentLang === 'it' ? '📋 Termini d\'Uso' :
               currentLang === 'ja' ? '📋 利用規約' :
               currentLang === 'zh-Hans' ? '📋 使用条款' :
               currentLang === 'zh-Hant' ? '📋 使用條款' :
               '📋 Terms of Service'}
      >
        <LanguageSelector 
          currentLang={currentLang} 
          onLanguageChange={handleLanguageChange} 
        />
      </Header>

      <main id="main-content">
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
                &copy; {new Date().getFullYear()} AMX Mediensysteme.{' '}
                {currentLang === 'de' ? 'Alle Rechte vorbehalten.' :
                 currentLang === 'es' ? 'Todos los derechos reservados.' :
                 currentLang === 'fr' ? 'Tous droits réservés.' :
                 currentLang === 'it' ? 'Tutti i diritti riservati.' :
                 currentLang === 'ja' ? '全著作権所有。' :
                 currentLang === 'zh-Hans' ? '版权所有。' :
                 currentLang === 'zh-Hant' ? '版權所有。' :
                 'All rights reserved.'}
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      </main>

      {/* Footer */}
      <Footer currentLang={currentLang} />
    </div>
  );
}