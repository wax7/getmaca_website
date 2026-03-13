/* Terms of Use view component – MACA – 2026-03-12 */
import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { FileText, ArrowLeft } from 'lucide-react';
import { type Language } from '../locales/translations';
import { Header } from './Header';
import { LanguageSelector } from './LanguageSelector';
import { useDarkMode } from '../hooks/useDarkMode';
import { useScrolled } from '../hooks/useScrolled';
import { useValidatedLang } from '../hooks/useValidatedLang';
import { Footer } from './Footer';

interface TermsSection {
  title: string;
  content: string;
}

interface TermsContent {
  title: string;
  subtitle: string;
  backToHome: string;
  sections: TermsSection[];
}

const termsData: Record<string, TermsContent> = {
  en: {
    title: 'Terms of Use',
    subtitle: 'Last updated: February 20, 2026',
    backToHome: 'Back to Home',
    sections: [
      { title: '1. Acceptance of Terms', content: 'By accessing this website, you accept these Terms of Use. This website is purely informational and promotional for the MACA app. No purchases are made through this website.' },
      { title: '2. Purpose of This Website', content: 'This website provides information about MACA (Master Audio Control App) for macOS. All purchases and downloads occur exclusively through the Apple App Store, which has its own terms and conditions.' },
      { title: '3. No Data Collection', content: 'This website does not collect, store, or transmit personal data. We only use local browser storage for your preferences (language, dark mode, cookie consent). No analytics, no tracking, no accounts.' },
      { title: '4. External References', content: 'This website contains references to the Apple App Store. When you follow these references, you leave our website and are subject to Apple\'s terms and privacy policy. We are not responsible for external content.' },
      { title: '5. Intellectual Property', content: 'All content on this website, including text, images, logos, and design, is owned by AMX Mediensysteme and protected by copyright laws. The MACA name and logo are trademarks.' },
      { title: '6. Disclaimer', content: 'This website and its content are provided "as is" without warranties. We do not guarantee uninterrupted availability or error-free operation. Information about the app is subject to change.' },
      { title: '7. Limitation of Liability', content: 'AMX Mediensysteme is not liable for any damages arising from the use of this website, except in cases of intent or gross negligence.' },
      { title: '8. Changes', content: 'We reserve the right to modify these terms at any time. Continued use of the website after changes constitutes acceptance.' },
      { title: '9. Applicable Law', content: 'These Terms are governed by German law. For consumers in the EU, mandatory consumer protection laws of your country apply.' },
      { title: '10. Contact', content: 'Questions about these terms? Contact us through the information provided in our Imprint.' }
    ]
  },
  de: {
    title: 'Nutzungsbedingungen',
    subtitle: 'Stand: 20. Februar 2026',
    backToHome: 'Zurück zur Startseite',
    sections: [
      { title: '1. Geltungsbereich', content: 'Mit dem Besuch dieser Website akzeptieren Sie diese Nutzungsbedingungen. Diese Website dient ausschließlich der Information und Bewerbung der MACA App. Es werden keine Käufe über diese Website abgewickelt.' },
      { title: '2. Zweck der Website', content: 'Diese Website informiert über MACA (Master Audio Control App) für macOS. Alle Käufe und Downloads erfolgen ausschließlich über den Apple App Store, der eigene Geschäftsbedingungen hat.' },
      { title: '3. Keine Datensammlung', content: 'Diese Website sammelt, speichert oder überträgt keine personenbezogenen Daten. Wir nutzen nur lokalen Browser-Speicher für Ihre Präferenzen (Sprache, Dark Mode, Cookie-Zustimmung). Kein Analytics, kein Tracking, keine Accounts.' },
      { title: '4. Externe Verweise', content: 'Diese Website enthält Verweise zum Apple App Store. Beim Klick verlassen Sie unsere Website und unterliegen Apples Bedingungen und Datenschutzrichtlinien. Wir sind nicht für externe Inhalte verantwortlich.' },
      { title: '5. Urheberrecht', content: 'Alle Inhalte dieser Website, einschließlich Texte, Bilder, Logos und Design, sind Eigentum von AMX Mediensysteme und urheberrechtlich geschützt. MACA Name und Logo sind Markenzeichen.' },
      { title: '6. Haftungsausschluss', content: 'Diese Website wird "wie besehen" ohne Garantien bereitgestellt. Wir garantieren keine ununterbrochene Verfügbarkeit oder fehlerfreien Betrieb. Informationen über die App können sich ändern.' },
      { title: '7. Haftungsbeschränkung', content: 'AMX Mediensysteme haftet nicht für Schäden aus der Nutzung dieser Website, außer bei Vorsatz oder grober Fahrlässigkeit.' },
      { title: '8. Änderungen', content: 'Wir behalten uns vor, diese Bedingungen jederzeit zu ändern. Die fortgesetzte Nutzung nach Änderungen gilt als Zustimmung.' },
      { title: '9. Anwendbares Recht', content: 'Diese Bedingungen unterliegen deutschem Recht. Für Verbraucher in der EU gelten zwingende Verbraucherschutzgesetze ihres Landes.' },
      { title: '10. Kontakt', content: 'Fragen zu diesen Bedingungen? Kontaktieren Sie uns über die im Impressum angegebenen Daten.' }
    ]
  },
  fr: {
    title: 'Conditions d\'Utilisation',
    subtitle: 'Dernière mise à jour: 20 février 2026',
    backToHome: 'Retour à l\'Accueil',
    sections: [
      { title: '1. Acceptation', content: 'En visitant ce site, vous acceptez ces conditions. Ce site est purement informatif pour l\'app MACA. Aucun achat n\'est effectué via ce site.' },
      { title: '2. But du Site', content: 'Ce site fournit des informations sur MACA pour macOS. Tous les achats se font exclusivement via l\'Apple App Store avec ses propres conditions.' },
      { title: '3. Pas de Collecte de Données', content: 'Ce site ne collecte aucune donnée personnelle. Nous utilisons uniquement le stockage local pour vos préférences. Pas d\'analytics, pas de tracking.' },
      { title: '4. Références Externes', content: 'Ce site contient des références vers l\'App Store. En cliquant, vous quittez notre site et êtes soumis aux conditions d\'Apple.' },
      { title: '5. Propriété Intellectuelle', content: 'Tout le contenu est la propriété d\'AMX Mediensysteme et protégé par le droit d\'auteur.' },
      { title: '6. Clause de non-responsabilité', content: 'Ce site est fourni « en l\'état » sans garantie.' },
      { title: '7. Limitation de responsabilité', content: 'AMX Mediensysteme n\'est pas responsable des dommages, sauf en cas de faute intentionnelle ou de négligence grave.' },
      { title: '8. Modifications', content: 'Nous nous réservons le droit de modifier ces conditions à tout moment.' },
      { title: '9. Droit applicable', content: 'Ces conditions sont régies par le droit allemand.' },
      { title: '10. Contact', content: 'Contactez-nous via les informations fournies dans nos mentions légales.' }
    ]
  },
  es: {
    title: 'Términos de Uso',
    subtitle: 'Última actualización: 20 de febrero de 2026',
    backToHome: 'Volver a Inicio',
    sections: [
      { title: '1. Aceptación', content: 'Al visitar este sitio, acepta estos términos. Este sitio es puramente informativo para la app MACA.' },
      { title: '2. Propósito del Sitio', content: 'Este sitio proporciona información sobre MACA para macOS. Todas las compras se realizan a través del Apple App Store.' },
      { title: '3. Sin Recopilación de Datos', content: 'Este sitio no recopila datos personales.' },
      { title: '4. Referencias Externas', content: 'Este sitio contiene referencias a la App Store.' },
      { title: '5. Propiedad Intelectual', content: 'Todo el contenido es propiedad de AMX Mediensysteme y está protegido por derechos de autor.' },
      { title: '6. Descargo de responsabilidad', content: 'Este sitio se proporciona "tal cual" sin garantías.' },
      { title: '7. Limitación de responsabilidad', content: 'AMX Mediensysteme no es responsable de los daños, excepto en casos de dolo o negligencia grave.' },
      { title: '8. Cambios', content: 'Nos reservamos el derecho de modificar estos términos en cualquier momento.' },
      { title: '9. Ley aplicable', content: 'Estos términos se rigen por la ley alemana.' },
      { title: '10. Contacto', content: 'Contáctenos a través de la información proporcionada en nuestro aviso legal.' }
    ]
  },
  it: {
    title: 'Termini d\'Uso',
    subtitle: 'Ultimo aggiornamento: 20 febbraio 2026',
    backToHome: 'Torna alla Home',
    sections: [
      { title: '1. Accettazione', content: 'Visitando questo sito, accetti questi termini.' },
      { title: '2. Scopo del Sito', content: 'Questo sito fornisce informazioni su MACA per macOS.' },
      { title: '3. Nessuna Raccolta Dati', content: 'Questo sito non raccoglie dati personali.' },
      { title: '4. Riferimenti Esterni', content: 'Questo sito contiene riferimenti all\'App Store.' },
      { title: '5. Proprietà Intellettuale', content: 'Tutti i contenuti sono di proprietà di AMX Mediensysteme.' },
      { title: '6. Esclusione di responsabilità', content: 'Questo sito è fornito "così come è" senza garanzie.' },
      { title: '7. Limitazione di responsabilità', content: 'AMX Mediensysteme non è responsabile per danni, salvo dolo o colpa grave.' },
      { title: '8. Modifiche', content: 'Ci riserviamo il diritto di modificare questi termini in qualsiasi momento.' },
      { title: '9. Legge applicabile', content: 'Questi termini sono disciplinati dal diritto tedesco.' },
      { title: '10. Contatti', content: 'Contattaci tramite le informazioni nelle nostre note legali.' }
    ]
  },
  ja: {
    title: '利用規約',
    subtitle: '最終更新日: 2026年2月20日',
    backToHome: 'ホームに戻る',
    sections: [
      { title: '1. 利用規約の同意', content: 'このウェブサイトにアクセスすることで、これらの利用規約に同意します。' },
      { title: '2. このウェブサイトの目的', content: 'macOS用のMACA（Master Audio Control App）についての情報を提供します。' },
      { title: '3. データ収集なし', content: 'このウェブサイトは、個人データを収集、保存、または送信しません。' },
      { title: '4. 外部参照', content: 'Apple App Storeへの参照が含まれています。' },
      { title: '5. 知的財産権', content: 'すべてのコンテンツはAMX Mediensystemeの所有物です。' },
      { title: '6. 免責声明', content: 'このウェブサイトは保証なしで「現状」で提供されます。' },
      { title: '7. 責任の限界', content: '故意または重大な過失を除き責任を負いません。' },
      { title: '8. 変更', content: 'これらの規約をいつでも変更する権利を保持します。' },
      { title: '9. 適用法', content: 'これらの規約はドイツ法に基づいています。' },
      { title: '10. 連絡先', content: 'インプリントの情報を通じてお問い合わせください。' }
    ]
  },
  'zh-Hans': {
    title: '使用条款',
    subtitle: '最后更新日期: 2026年2月20日',
    backToHome: '返回首页',
    sections: [
      { title: '1. 接受条款', content: '通过访问此网站，您接受这些使用条款。' },
      { title: '2. 该网站的目的', content: '该网站提供有关macOS的MACA的信息。' },
      { title: '3. 不收集数据', content: '该网站不收集、存储或传输个人数据。' },
      { title: '4. 外部引用', content: '该网站包含指向Apple App Store的引用。' },
      { title: '5. 知识产权', content: '所有内容均属于AMX Mediensysteme。' },
      { title: '6. 免责声明', content: '该网站按"现状"提供，不附带任何保证。' },
      { title: '7. 责任限制', content: '除故意或重大过失外不承担责任。' },
      { title: '8. 修改', content: '我们保留随时修改这些条款的权利。' },
      { title: '9. 适用法律', content: '这些条款受德国法律管辖。' },
      { title: '10. 联系我们', content: '请通过印鉴中的信息联系我们。' }
    ]
  },
  'zh-Hant': {
    title: '使用條款',
    subtitle: '最後更新日期: 2026年2月20日',
    backToHome: '返回首頁',
    sections: [
      { title: '1. 接受條款', content: '通過訪問此網站，您接受這些使用條款。' },
      { title: '2. 該網站的目的', content: '該網站提供有關macOS的MACA的信息。' },
      { title: '3. 不收集數據', content: '該網站不收集、存儲或傳輸個人數據。' },
      { title: '4. 外部引用', content: '該網站包含指向Apple App Store的引用。' },
      { title: '5. 知識產權', content: '所有內容均屬於AMX Mediensysteme。' },
      { title: '6. 免責聲明', content: '該網站按「現狀」提供，不附帶任何保證。' },
      { title: '7. 責任限制', content: '除故意或重大過失外不承擔責任。' },
      { title: '8. 修改', content: '我們保留隨時修改這些條款的權利。' },
      { title: '9. 適用法律', content: '這些條款受德國法律管轄。' },
      { title: '10. 聯繫我們', content: '請通過印鑑中的信息聯繫我們。' }
    ]
  },
  ar: {
    title: 'شروط الاستخدام',
    subtitle: 'آخر تحديث: 20 فبراير 2026',
    backToHome: 'العودة للرئيسية',
    sections: [
      { title: '1. قبول الشروط', content: 'بزيارتك لهذا الموقع، فإنك تقبل شروط الاستخدام هذه.' },
      { title: '2. الغرض من الموقع', content: 'يوفر هذا الموقع معلومات حول MACA لنظام macOS.' },
      { title: '3. عدم جمع البيانات', content: 'لا يجمع هذا الموقع بيانات شخصية.' },
      { title: '4. المراجع الخارجية', content: 'يحتوي هذا الموقع على مراجع إلى Apple App Store.' },
      { title: '5. الملكية الفكرية', content: 'جميع المحتويات مملوكة لـ AMX Mediensysteme.' },
      { title: '6. إخلاء المسؤولية', content: 'يُقدَّم هذا الموقع "كما هو" بدون ضمانات.' },
      { title: '7. تحديد المسؤولية', content: 'غير مسؤولة عن الأضرار باستثناء القصد أو الإهمال الجسيم.' },
      { title: '8. التغييرات', content: 'نحتفظ بالحق في تعديل هذه الشروط في أي وقت.' },
      { title: '9. القانون المطبق', content: 'تخضع هذه الشروط للقانون الألماني.' },
      { title: '10. الاتصال', content: 'تواصل معنا عبر المعلومات في بياناتنا القانونية.' }
    ]
  },
  ru: {
    title: 'Условия использования',
    subtitle: 'Последнее обновление: 20 февраля 2026',
    backToHome: 'На главную',
    sections: [
      { title: '1. Принятие условий', content: 'Посещая этот веб-сайт, вы принимаете настоящие Условия использования.' },
      { title: '2. Назначение сайта', content: 'Этот веб-сайт предоставляет информацию о MACA для macOS.' },
      { title: '3. Отсутствие сбора данных', content: 'Этот веб-сайт не собирает персональные данные.' },
      { title: '4. Внешние ссылки', content: 'Этот веб-сайт содержит ссылки на Apple App Store.' },
      { title: '5. Интеллектуальная собственность', content: 'Весь контент является собственностью AMX Mediensysteme.' },
      { title: '6. Отказ от гарантий', content: 'Этот веб-сайт предоставляется «как есть» без гарантий.' },
      { title: '7. Ограничение ответственности', content: 'Не несёт ответственности за исключением умысла или грубой небрежности.' },
      { title: '8. Изменения', content: 'Мы оставляем за собой право изменять эти условия в любое время.' },
      { title: '9. Применимое право', content: 'Эти условия регулируются законодательством Германии.' },
      { title: '10. Контакт', content: 'Свяжитесь с нами через информацию в нашем импрессуме.' }
    ]
  },
  nl: {
    title: 'Gebruiksvoorwaarden',
    subtitle: 'Laatst bijgewerkt: 20 februari 2026',
    backToHome: 'Terug naar startpagina',
    sections: [
      { title: '1. Acceptatie', content: 'Door deze website te bezoeken, accepteert u deze Gebruiksvoorwaarden.' },
      { title: '2. Doel van de website', content: 'Deze website biedt informatie over MACA voor macOS.' },
      { title: '3. Geen gegevensverzameling', content: 'Deze website verzamelt geen persoonlijke gegevens.' },
      { title: '4. Externe verwijzingen', content: 'Deze website bevat verwijzingen naar de Apple App Store.' },
      { title: '5. Intellectueel eigendom', content: 'Alle inhoud is eigendom van AMX Mediensysteme.' },
      { title: '6. Disclaimer', content: 'Deze website wordt "zoals ze is" aangeboden zonder garanties.' },
      { title: '7. Beperking van aansprakelijkheid', content: 'Niet aansprakelijk behalve bij opzet of grove nalatigheid.' },
      { title: '8. Wijzigingen', content: 'We behouden ons het recht voor deze voorwaarden te wijzigen.' },
      { title: '9. Toepasselijk recht', content: 'Deze voorwaarden worden beheerst door het Duitse recht.' },
      { title: '10. Contact', content: 'Neem contact op via de informatie in ons colofon.' }
    ]
  },
  tr: {
    title: 'Kullanım Koşulları',
    subtitle: 'Son güncelleme: 20 Şubat 2026',
    backToHome: 'Ana sayfaya dön',
    sections: [
      { title: '1. Koşulların Kabulü', content: 'Bu web sitesini ziyaret ederek bu Kullanım Koşullarını kabul etmiş olursunuz.' },
      { title: '2. Web Sitesinin Amacı', content: 'Bu web sitesi macOS için MACA hakkında bilgi sağlar.' },
      { title: '3. Veri Toplama Yok', content: 'Bu web sitesi kişisel veri toplamaz.' },
      { title: '4. Harici Referanslar', content: 'Bu web sitesi Apple App Store referansları içerir.' },
      { title: '5. Fikri Mülkiyet', content: 'Tüm içerik AMX Mediensysteme\'ye aittir.' },
      { title: '6. Sorumluluk Reddi', content: 'Bu web sitesi garanti olmaksızın "olduğu gibi" sağlanmaktadır.' },
      { title: '7. Sorumluluk Sınırlaması', content: 'Kasıt veya ağır ihmal dışında zararlardan sorumlu değildir.' },
      { title: '8. Değişiklikler', content: 'Bu koşulları herhangi bir zamanda değiştirme hakkımızı saklı tutarız.' },
      { title: '9. Uygulanacak Hukuk', content: 'Bu koşullar Alman hukukuna tabidir.' },
      { title: '10. İletişim', content: 'Yasal bilgilerimizde verilen iletişim bilgileri üzerinden bize ulaşın.' }
    ]
  },
  sv: {
    title: 'Användarvillkor',
    subtitle: 'Senast uppdaterad: 20 februari 2026',
    backToHome: 'Tillbaka till startsidan',
    sections: [
      { title: '1. Godkännande', content: 'Genom att besöka denna webbplats godkänner du dessa Användarvillkor.' },
      { title: '2. Webbplatsens syfte', content: 'Denna webbplats tillhandahåller information om MACA för macOS.' },
      { title: '3. Ingen datainsamling', content: 'Denna webbplats samlar inte in personuppgifter.' },
      { title: '4. Externa referenser', content: 'Denna webbplats innehåller referenser till Apple App Store.' },
      { title: '5. Immateriella rättigheter', content: 'Allt innehåll ägs av AMX Mediensysteme.' },
      { title: '6. Ansvarsfriskrivning', content: 'Denna webbplats tillhandahålls "som den är" utan garantier.' },
      { title: '7. Ansvarsbegränsning', content: 'Ansvarar inte för skador utom vid uppsåt eller grov vårdslöshet.' },
      { title: '8. Ändringar', content: 'Vi förbehåller oss rätten att ändra dessa villkor.' },
      { title: '9. Tillämplig lag', content: 'Dessa villkor regleras av tysk lag.' },
      { title: '10. Kontakt', content: 'Kontakta oss via informationen i vårt impressum.' }
    ]
  },
  da: {
    title: 'Brugervilkår',
    subtitle: 'Sidst opdateret: 20. februar 2026',
    backToHome: 'Tilbage til forsiden',
    sections: [
      { title: '1. Accepter vilkårene', content: 'Ved at besøge denne hjemmeside accepterer du disse brugervilkår.' },
      { title: '2. Formålet med hjemmesiden', content: 'Denne hjemmeside giver information om MACA for macOS.' },
      { title: '3. Ingen datasamling', content: 'Denne hjemmeside indsamler ikke personlige data.' },
      { title: '4. Eksterne referencer', content: 'Denne hjemmeside indeholder referencer til Apple App Store.' },
      { title: '5. Intellektuel ejendom', content: 'Alt indhold ejes af AMX Mediensysteme.' },
      { title: '6. Ansvarsfraskrivning', content: 'Denne hjemmeside leveres "som den er" uden garantier.' },
      { title: '7. Ansvarsbegrænsning', content: 'Ikke ansvarlig for skader undtagen ved vilje eller alvorlig uopmærksomhed.' },
      { title: '8. Ændringer', content: 'Vi beholder os retten til at ændre disse vilkår.' },
      { title: '9. Anvendeligt lov', content: 'Disse vilkår reguleres af tysk lov.' },
      { title: '10. Kontakt', content: 'Kontakt os via informationen i vores imprint.' }
    ]
  },
  ko: {
    title: '이용 약관',
    subtitle: '마지막 업데이트: 2026년 2월 20일',
    backToHome: '홈으로 돌아가기',
    sections: [
      { title: '1. 약관 동의', content: '이 웹사이트에 방문하여 이러한 이용 약관에 동의합니다.' },
      { title: '2. 웹사이트의 목적', content: '이 웹사이트는 macOS용 MACA에 대한 정보를 제공합니다.' },
      { title: '3. 데이터 수집 없음', content: '이 웹사이트는 개인 데이터를 수집하지 않습니다.' },
      { title: '4. 외부 참조', content: '이 웹사이트에는 Apple App Store 참조가 포함되어 있습니다.' },
      { title: '5. 지적 재산권', content: '모든 콘텐츠는 AMX Mediensysteme 소유입니다.' },
      { title: '6. 면책 조항', content: '이 웹사이트는 보증 없이 "있는 그대로" 제공됩니다.' },
      { title: '7. 책임 제한', content: '의도 또는 중대한 과실이 없는 한 책임지지 않습니다.' },
      { title: '8. 변경 사항', content: '이러한 약관을 언제든지 변경할 수 있습니다.' },
      { title: '9. 적용 법률', content: '이 약관은 독일 법률에 따라 관리됩니다.' },
      { title: '10. 연락처', content: '인프린트의 정보를 통해 연락해 주세요.' }
    ]
  },
  nb: {
    title: 'Bruksvilkår',
    subtitle: 'Sist oppdatert: 20. februar 2026',
    backToHome: 'Tilbake til hjemmesiden',
    sections: [
      { title: '1. Godkjenning av vilkår', content: 'Ved å besøke denne nettsiden godkjenner du disse bruksvilkårene.' },
      { title: '2. Formålet med nettsiden', content: 'Denne nettsiden gir informasjon om MACA for macOS.' },
      { title: '3. Ingen datainsamling', content: 'Denne nettsiden samler ikke inn personlige data.' },
      { title: '4. Eksterne referanser', content: 'Denne nettsiden inneholder referanser til Apple App Store.' },
      { title: '5. Intellektuell eiendom', content: 'Alt innhold eies av AMX Mediensysteme.' },
      { title: '6. Ansvarsfraskrivning', content: 'Denne nettsiden leveres "som den er" uten garantier.' },
      { title: '7. Ansvarsbegrensning', content: 'Ikke ansvarlig for skader unntatt ved vilje eller alvorlig uoppmerksomhet.' },
      { title: '8. Endringer', content: 'Vi beholder oss retten til å endre disse vilkårene.' },
      { title: '9. Anvendelig lov', content: 'Disse vilkårene reguleres av tysk lov.' },
      { title: '10. Kontakt', content: 'Kontakt oss via informasjonen i vårt imprint.' }
    ]
  }
};

export function TermsView() {
  const currentLang = useValidatedLang('terms');
  const nav = useNavigate();
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const scrolled = useScrolled(50);

  const handleLanguageChange = (newLang: Language) => {
    nav('/' + newLang + '/terms');
  };

  const content = termsData[currentLang] || termsData.en;
  const sections = content.sections;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-950 transition-colors duration-300">
      <Header
        scrolled={scrolled}
        currentLang={currentLang}
        isDarkMode={isDarkMode}
        onToggleDarkMode={toggleDarkMode}
        onLanguageChange={handleLanguageChange}
        badge={'📋 ' + content.title}
      >
        <LanguageSelector
          currentLang={currentLang}
          onLanguageChange={handleLanguageChange}
        />
      </Header>

      <main id="main-content">
        <section className="relative pt-32 pb-12 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <button
              onClick={() => nav('/' + currentLang)}
              className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:gap-3 transition-all mb-8 cursor-pointer bg-transparent border-none p-0"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>{content.backToHome}</span>
            </button>

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
                  <h1 className="text-3xl sm:text-4xl text-slate-900 dark:text-white">
                    {content.title}
                  </h1>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                    {content.subtitle}
                  </p>
                </div>
              </div>

              <div className="prose prose-slate dark:prose-invert max-w-none">
                {sections.map((section, idx) => (
                  <div key={section.title + '-' + String(idx)} className="mb-8">
                    <h2 className="text-xl text-slate-900 dark:text-white mb-3">
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
                  &copy; {new Date().getFullYear()} AMX Mediensysteme.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer currentLang={currentLang} />
    </div>
  );
}

export default TermsView;