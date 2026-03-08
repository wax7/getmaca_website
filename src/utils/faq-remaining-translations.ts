import { FAQContent } from './faq-content-translations';

export const arFaqContent: FAQContent = {
  pageTitle: 'MACA — الأسئلة الشائعة',
  tableOfContents: 'جدول المحتويات',
  categories: [
    {
      id: 'البداية',
      title: 'البداية',
      items: [
        {
          question: 'ما هو MACA؟',
          answer: 'MACA (Master Audio Control App) هو أداة في شريط القوائم لنظام macOS تتيح لك التحكم في الصوت لكل تطبيق. بدلاً من ضبط مستوى صوت النظام فقط، يمكنك تعيين مستويات صوت فردية لكل تطبيق يعمل على جهاز Mac الخاص بك — مثالي للمبدعين والعاملين عن بُعد ومتعددي المهام.'
        },
        {
          question: 'كيف أقوم بتثبيت MACA؟',
          answer: 'قم بتنزيل التطبيق من Mac App Store. يتم تثبيت MACA كتطبيق في شريط القوائم ويعمل بشكل غير ملحوظ في الخلفية. عند التشغيل الأول، سيتم إرشادك خلال إعداد أذونات الصوت.'
        },
        {
          question: 'هل يحتاج MACA إلى إعدادات خاصة؟',
          answer: 'يتطلب MACA إذن الوصول الأساسي للصوت (لالتقاط مستويات الصوت لكل تطبيق) وإذن مراقبة الإدخال الاختياري (لاختصارات لوحة المفاتيح العامة). سيُطلب منك منح هذه الأذونات أثناء الإعداد الأولي.'
        },
        {
          question: 'هل يمكنني استخدام MACA على إصدارات macOS القديمة؟',
          answer: 'يتطلب MACA نظام macOS 15 (Sequoia) أو أحدث. نوصي باستخدام macOS 26+ للحصول على أفضل تجربة وجميع الميزات.'
        }
      ]
    },
    {
      id: 'الميزات-الأساسية',
      title: 'الميزات الأساسية',
      items: [
        {
          question: 'ما الذي يمكنني التحكم فيه في MACA؟',
          answer: 'يمكنك التحكم في: مستوى الصوت لكل تطبيق (تعيين مستوى صوت فريد 0-100%+ لكل تطبيق قيد التشغيل)، كتم الصوت لكل تطبيق (كتم صوت التطبيقات الفردية فوراً)، توجيه الصوت لكل تطبيق (إرسال الصوت من أي تطبيق إلى سماعة أو سماعات رأس مختلفة)، مستوى الصوت الرئيسي (ضبط مستوى صوت النظام بسرعة من شريط القوائم)، وتبديل الأجهزة (تغيير جهاز إخراج الصوت الافتراضي).'
        },
        {
          question: 'مع أي تطبيقات يعمل MACA؟',
          answer: 'يعمل MACA مع أي تطبيق يُخرج صوتاً إلى نظامك — بما في ذلك Music/Spotify/Apple Music/YouTube Music وZoom/Teams/Discord/Google Meet وSafari/Chrome/Firefox والأدوات المهنية (DAWs، تحرير الفيديو، برامج البث) والألعاب وتطبيقات الترفيه.'
        },
        {
          question: 'هل يمكنني التحكم في صوت التطبيقات المتوقفة مؤقتاً؟',
          answer: 'نعم. يمكنك ضبط مستوى الصوت وحالة كتم الصوت لأي تطبيق بغض النظر عما إذا كان يعمل حالياً أو غير نشط.'
        },
        {
          question: 'هل يستخدم MACA برامج تشغيل خاصة أو امتدادات النواة؟',
          answer: 'لا. يستخدم MACA فقط واجهات برمجة تطبيقات الصوت الأصلية لنظام macOS (Core Audio Taps)، مما يجعله متوافقاً تماماً مع App Store وآمناً. لا حاجة لتعديلات النظام منخفضة المستوى.'
        }
      ]
    },
    {
      id: 'إدارة-الصوت',
      title: 'إدارة الصوت',
      items: [
        {
          question: 'كيف أوجه الصوت من تطبيق إلى جهاز محدد؟',
          answer: 'انقر على زر الجهاز بجانب التطبيق في قائمة MACA. تعرض القائمة المنسدلة جميع أجهزة الصوت المتاحة: السماعات/سماعات الرأس المدمجة، أجهزة Bluetooth (AirPods، سماعات الرأس، السماعات)، والإعداد الافتراضي للنظام. اختر جهازاً وسيتم توجيه جميع الأصوات من ذلك التطبيق إليه فوراً.'
        },
        {
          question: 'هل يمكن لعدة تطبيقات الإخراج إلى أجهزة مختلفة في وقت واحد؟',
          answer: 'بالتأكيد. هذه إحدى الميزات الأساسية لـ MACA. يمكن للتطبيق A التشغيل عبر سماعات Bluetooth بينما يُشغل التطبيق B عبر السماعات في نفس الوقت.'
        },
        {
          question: 'ماذا يحدث إذا تم فصل جهاز صوتي؟',
          answer: 'يحفظ MACA التوجيه المفضل لديك. إذا تم فصل جهاز Bluetooth الخاص بك، يعود الصوت تلقائياً إلى جهاز الإخراج الافتراضي للنظام. عند إعادة توصيل الجهاز، يستعيد MACA التوجيه الأصلي للتطبيقات المتأثرة.'
        },
        {
          question: 'كيف يعمل التحكم في مستوى الصوت الرئيسي؟',
          answer: 'يقوم شريط التمرير الرئيسي في شريط القوائم بضبط مستوى صوت النظام — تماماً مثل التحكم في مستوى صوت macOS، ولكن في قائمة MACA لسهولة الوصول.'
        }
      ]
    },
    {
      id: 'الملفات-الشخصية',
      title: 'الملفات الشخصية والإعدادات المسبقة',
      items: [
        {
          question: 'ما هي ملفات الصوت الشخصية؟',
          answer: 'تتيح لك ملفات الصوت الشخصية حفظ واستدعاء إعدادات الصوت المعقدة بسرعة. أمثلة: "الألعاب" (رفع صوت اللعبة، Spotify منخفض، Discord عند 50%)، "التسجيل" (كتم الموسيقى والبودكاست والمتصفح؛ Discord فقط نشط)، "وقت متأخر من الليل" (خفض الصوت؛ التوجيه إلى سماعات الرأس). أنشئ ملفات شخصية بإعداد مستويات الصوت/التوجيه المطلوبة ثم احفظها. قم بالتبديل بين الملفات الشخصية من شريط القوائم بنقرة واحدة.'
        },
        {
          question: 'كم عدد الملفات الشخصية التي يمكنني حفظها؟',
          answer: 'المجاني: بدون ملفات شخصية. Pro: ملفات شخصية غير محدودة.'
        },
        {
          question: 'هل يمكن أن تتضمن الملفات الشخصية إعدادات صوت مثل إعدادات المعادل المسبقة؟',
          answer: 'نعم (Pro). عند حفظ ملف شخصي، يمكن أن يتضمن إعدادات EQ مسبقة لتطبيقات محددة. عند تفعيل الملف الشخصي، يتم تطبيق إعدادات EQ المحفوظة تلقائياً.'
        },
        {
          question: 'هل يمكنني إعادة تسمية أو حذف الملفات الشخصية؟',
          answer: 'نعم. افتح الإعدادات → الملفات الشخصية ويمكنك تحرير أو إعادة تسمية أو حذف جميع الملفات الشخصية المحفوظة.'
        }
      ]
    },
    {
      id: 'المعادل',
      title: 'المعادل (EQ)',
      items: [
        {
          question: 'هل يحتوي MACA على معادل؟',
          answer: 'نعم. يتضمن MACA معادلاً بارامترياً بـ 10 نطاقات وفقاً لمعايير التردد ISO 216. افتح نافذة EQ من شريط القوائم أو انقر نقراً مزدوجاً على تطبيق.'
        },
        {
          question: 'ماذا يمكنني فعله بالمعادل؟',
          answer: 'يمكنك: ضبط EQ لكل تطبيق (تعديل صوت كل تطبيق بشكل فردي، مثل جعل Spotify أكثر دفئاً، وYouTube Music أكثر سطوعاً)، استخدام الإعدادات المسبقة (اختر من إعدادات EQ المدمجة مثل دافئ، ساطع، تعزيز الباس، بوب صوتي)، إنشاء ملفات شخصية مخصصة، استخدام عرض الطيف في الوقت الفعلي، وعرض تصور الذروة.'
        },
        {
          question: 'هل يمكنني رؤية ما يفعله المعادل في الوقت الفعلي؟',
          answer: 'نعم. يعرض محلل الطيف في نافذة EQ رسماً بيانياً في الوقت الفعلي للترددات في الصوت مع نطاقات مرمزة بالألوان ومؤشرات الذروة.'
        },
        {
          question: 'ما هي ميزات EQ المتاحة في المجاني مقابل Pro؟',
          answer: 'المجاني: EQ ISO بـ 10 نطاقات مع إعدادات مسبقة وملفات شخصية أساسية. Pro: تحكم كامل في EQ البارامتري (الكسب، التردد، Q) + ملفات شخصية مخصصة غير محدودة + معدّل أكثر قوة.'
        },
        {
          question: 'ما هو "معدّل الصوت"؟',
          answer: 'يقوم معدّل الصوت (Pro) بضبط مستويات كل تطبيق تلقائياً لمنع ارتفاعات أو انخفاضات مفاجئة في مستوى الصوت بين التطبيقات. مفيد عند التبديل بين البودكاست الهادئ والألعاب الصاخبة.'
        }
      ]
    },
    {
      id: 'مجاني-مقابل-pro',
      title: 'المجاني مقابل Pro',
      items: [
        {
          question: 'لماذا يوجد حد 3 تطبيقات في الإصدار المجاني؟',
          answer: 'تم تصميم الإصدار المجاني لتعريفك بـ MACA مع حالات الاستخدام الأكثر شيوعاً (مثل Zoom + Spotify + لعبة). يشجع حد 3 تطبيقات المستخدمين المحترفين على الترقية إلى Pro لإدارة العديد من التطبيقات في وقت واحد.'
        },
        {
          question: 'ماذا لو كنت بحاجة للتحكم في أكثر من 3 تطبيقات؟',
          answer: 'قم بالترقية إلى MACA Pro الذي يفتح التحكم غير المحدود في التطبيقات. يمكنك إدارة إعداد الصوت بالكامل دون قيود.'
        },
        {
          question: 'هل يمكنني مزامنة ميزات Pro عبر أجهزة Mac متعددة؟',
          answer: 'إذا كنت تستخدم المشاركة العائلية، يتم مشاركة ترخيص Pro عبر iCloud. شراء Pro واحد ينطبق على حسابك على جميع أجهزة Mac الشخصية.'
        },
        {
          question: 'كم يكلف Pro؟',
          answer: 'يتم تحديد الأسعار في macOS App Store. تحقق من قائمة التطبيق للحصول على الأسعار الحالية في منطقتك.'
        }
      ]
    },
    {
      id: 'المساعدة-واستكشاف-الأخطاء',
      title: 'المساعدة واستكشاف الأخطاء',
      items: [
        {
          question: 'MACA لا يعرض أي تطبيقات للتحكم.',
          answer: 'أعد تشغيل التطبيق. تحقق من أن الصوت يعمل فعلاً في تطبيق آخر. تحقق من أن MACA لديه إذن للوصول إلى الصوت: إعدادات النظام → الخصوصية والأمان → إدخال الصوت.'
        },
        {
          question: 'صوت التطبيق يستمر في العودة إلى الجهاز الافتراضي.',
          answer: 'يمكن أن يحدث هذا إذا: بدأ التطبيق للتو (قد يحتاج MACA لحظة للتفعيل)، أو قام تطبيق آخر أو النظام بتغيير جهاز الصوت. حاول إعادة اختيار الجهاز يدوياً في قائمة MACA.'
        },
        {
          question: 'عارض المعادل لا يظهر أي نشاط.',
          answer: 'تأكد من تشغيل الصوت في ذلك التطبيق. يتم تحديث المحلل في الوقت الفعلي، لذلك لن يظهر الصوت الصامت شيئاً. إذا لم يعمل بعد، أغلق نافذة EQ وأعد فتحها.'
        },
        {
          question: 'اختصارات لوحة المفاتيح للملفات الشخصية لا تعمل.',
          answer: 'تحقق ضمن الإعدادات → اختصارات لوحة المفاتيح من أن الاختصار مفعّل ومعيّن لتركيبة مفاتيح فريدة. تحقق من منح إذن مراقبة الإدخال: إعدادات النظام → الخصوصية والأمان.'
        },
        {
          question: 'وصلت عن طريق الخطأ إلى الحد (3 تطبيقات في المجاني). ماذا الآن؟',
          answer: 'لديك خياران: أعد تشغيل التطبيق لتحديث قائمة التطبيقات قيد التشغيل، أو قم بالترقية إلى Pro لفتح التحكم غير المحدود في التطبيقات.'
        },
        {
          question: 'هل يمكنني التحكم في الصوت في التطبيقات في الخلفية؟',
          answer: 'نعم. يتحكم MACA في أي تطبيق يُخرج صوتاً — سواء كان في المقدمة أو الخلفية.'
        },
        {
          question: 'هل يعمل MACA مع واجهات الصوت USB الخارجية؟',
          answer: 'بالتأكيد. جميع أجهزة الصوت التي يتعرف عليها macOS (واجهات USB، محولات DAC الخارجية، إلخ) تظهر في قائمة أجهزة MACA.'
        },
        {
          question: 'كيف أقدم ملاحظات أو أبلغ عن خطأ؟',
          answer: 'تواصل معنا على support@getmaca.de. نقدر تقارير الأخطاء وطلبات الميزات وملاحظات الاستخدام.'
        }
      ]
    }
  ],
  technicalStandards: {
    title: 'المعايير التقنية',
    sections: {
      equalizer: {
        title: 'المعادل (EQ)',
        items: [
          'نطاقات تردد ISO 216: 10 نطاقات تردد أوكتاف وفقاً للمعيار الدولي',
          'نطاق التردد: 31 هرتز إلى 16 كيلوهرتز (يغطي نطاق الصوت المسموع)',
          'التحكم البارامتري (Pro): الكسب، تردد المركز، عامل Q وفقاً لـ IEC 60268-17'
        ]
      },
      audioAnalysis: {
        title: 'تحليل الصوت',
        items: [
          'FFT (تحويل فورييه السريع): تحليل الطيف في الوقت الفعلي وفقاً لمعايير IEC',
          'قياس الذروة: قياس VU القياسي IEC 60268-17 مع احتفاظ بالذروة لمدة 2-3 ثوانٍ',
          'كشف القصاصة: كشف تلقائي للتحميل الزائد (0 dBFS)'
        ]
      },
      normalization: {
        title: 'التطبيع (Pro)',
        items: [
          'معدّل الصوت: يعتمد على معيار LUFS (LKFS وفقاً لـ ITU-R BS.1770-4)',
          'القيمة المستهدفة: -16 LUFS (متوافق مع منصات البث)'
        ]
      },
      audioLevels: {
        title: 'معايير مستوى الصوت',
        items: [
          'مقياس dB: ديسيبل (20×Log10 من النسبة)',
          'مستوى الصوت الرئيسي: 0 dB (الإعداد الافتراضي للنظام)، نطاق +/- لموازنة المستوى',
          'عتبة القصاصة: 0 dBFS (الحد الأقصى الرقمي)'
        ]
      }
    }
  }
};

export const ruFaqContent: FAQContent = {
  pageTitle: 'MACA — Часто задаваемые вопросы',
  tableOfContents: 'Содержание',
  categories: [
    {
      id: 'начало-работы',
      title: 'Начало работы',
      items: [
        { question: 'Что такое MACA?', answer: 'MACA (Master Audio Control App) — это утилита в строке меню macOS, которая позволяет управлять звуком для каждого приложения отдельно. Вместо регулировки общей громкости системы вы можете установить индивидуальную громкость для каждого запущенного приложения на Mac — идеально для творческих профессионалов, удалённых работников и многозадачных пользователей.' },
        { question: 'Как установить MACA?', answer: 'Загрузите приложение из Mac App Store. MACA устанавливается как приложение в строке меню и работает незаметно в фоновом режиме. При первом запуске вам будет предложено настроить разрешения на доступ к аудио.' },
        { question: 'Нужны ли MACA специальные настройки?', answer: 'MACA требует базовое разрешение на доступ к аудио (для считывания уровней звука каждого приложения) и, опционально, разрешение на мониторинг ввода (для глобальных горячих клавиш). Вам будет предложено предоставить эти разрешения при первом запуске.' },
        { question: 'Могу ли я использовать MACA на старых версиях macOS?', answer: 'MACA требует macOS 15 (Sequoia) или новее. Мы рекомендуем macOS 26+ для лучшего опыта и всех функций.' }
      ]
    },
    {
      id: 'основные-функции',
      title: 'Основные функции',
      items: [
        { question: 'Чем можно управлять в MACA?', answer: 'Вы можете управлять: громкостью каждого приложения (установить уникальный уровень 0–100%+ для каждого запущенного приложения), отключением звука для каждого приложения (мгновенно отключить звук отдельных приложений), маршрутизацией аудио для каждого приложения (отправить звук от любого приложения на другой динамик или наушники), общей громкостью (быстро настроить системную громкость из строки меню) и переключением устройств (изменить устройство вывода звука по умолчанию).' },
        { question: 'С какими приложениями работает MACA?', answer: 'MACA работает с любым приложением, которое выводит звук в систему — включая Music/Spotify/Apple Music/YouTube Music, Zoom/Teams/Discord/Google Meet, Safari/Chrome/Firefox, профессиональные инструменты (DAW, видеоредакторы, стриминговое ПО), игры и развлекательные приложения.' },
        { question: 'Могу ли я управлять звуком приостановленных приложений?', answer: 'Да. Вы можете регулировать громкость и состояние отключения звука для любого приложения, независимо от того, воспроизводит ли оно звук или неактивно.' },
        { question: 'Использует ли MACA специальные драйверы или расширения ядра?', answer: 'Нет. MACA использует только встроенные API аудио macOS (Core Audio Taps), что делает его полностью совместимым с App Store и безопасным. Никаких низкоуровневых модификаций системы не требуется.' }
      ]
    },
    {
      id: 'управление-аудио',
      title: 'Управление аудио',
      items: [
        { question: 'Как направить звук от приложения на определённое устройство?', answer: 'Нажмите кнопку устройства рядом с приложением в меню MACA. В выпадающем списке отображаются все доступные аудиоустройства: встроенные динамики/наушники, Bluetooth-устройства (AirPods, гарнитуры, колонки) и системное устройство по умолчанию. Выберите устройство, и весь звук от этого приложения будет немедленно направлен туда.' },
        { question: 'Могут ли несколько приложений одновременно выводить звук на разные устройства?', answer: 'Безусловно. Это одна из ключевых функций MACA. Приложение A может воспроизводить через Bluetooth-наушники, а приложение B — через динамики одновременно.' },
        { question: 'Что происходит при отключении аудиоустройства?', answer: 'MACA сохраняет ваши предпочтения маршрутизации. При отключении Bluetooth-устройства звук автоматически переключается на системное устройство по умолчанию. При повторном подключении MACA восстанавливает исходную маршрутизацию для затронутых приложений.' },
        { question: 'Как работает регулировка общей громкости?', answer: 'Главный ползунок в строке меню регулирует системную громкость — так же, как регулятор громкости macOS, но в меню MACA для удобного доступа.' }
      ]
    },
    {
      id: 'профили-пресеты',
      title: 'Профили и пресеты',
      items: [
        { question: 'Что такое аудиопрофили?', answer: 'Аудиопрофили позволяют сохранять и быстро вызывать сложные аудионастройки. Примеры: «Игры» (громкость игры повышена, Spotify тихо, Discord на 50%), «Запись» (музыка, подкасты и браузер отключены; активен только Discord), «Поздний вечер» (громкость снижена; направлено на наушники). Создайте профили, настроив нужные уровни громкости/маршрутизацию, затем сохраните их. Переключайтесь между профилями из строки меню одним кликом.' },
        { question: 'Сколько профилей можно сохранить?', answer: 'Бесплатно: без профилей. Pro: неограниченное количество профилей.' },
        { question: 'Могут ли профили включать настройки эквалайзера?', answer: 'Да (Pro). При сохранении профиля он может включать пресеты EQ для определённых приложений. При активации профиля сохранённые настройки EQ применяются автоматически.' },
        { question: 'Можно ли переименовать или удалить профили?', answer: 'Да. Откройте Настройки → Профили, и вы сможете редактировать, переименовывать или удалять все сохранённые профили.' }
      ]
    },
    {
      id: 'эквалайзер',
      title: 'Эквалайзер (EQ)',
      items: [
        { question: 'Есть ли в MACA эквалайзер?', answer: 'Да. MACA включает 10-полосный параметрический эквалайзер по стандарту частот ISO 216. Откройте окно EQ из строки меню или дважды щёлкните по приложению.' },
        { question: 'Что можно делать с эквалайзером?', answer: 'Вы можете: настраивать EQ для каждого приложения (индивидуально настроить звучание, например, сделать Spotify теплее, YouTube Music ярче), использовать пресеты (Тёплый, Яркий, Усиление басов, Поп-вокал), создавать пользовательские профили, использовать отображение спектра в реальном времени и просматривать визуализацию пиковых значений.' },
        { question: 'Можно ли видеть работу эквалайзера в реальном времени?', answer: 'Да. Анализатор спектра в окне EQ показывает график частот аудио в реальном времени с цветовой маркировкой полос и индикаторами пиков.' },
        { question: 'Какие функции EQ доступны в бесплатной версии и в Pro?', answer: 'Бесплатно: 10-полосный ISO EQ с пресетами и базовыми профилями. Pro: полный параметрический контроль EQ (усиление, частота, Q) + неограниченные пользовательские профили + более мощный нормализатор.' },
        { question: 'Что такое «Нормализатор аудио»?', answer: 'Нормализатор аудио (Pro) автоматически регулирует уровни каждого приложения, чтобы предотвратить резкие скачки или падения громкости между приложениями. Полезно при переключении между тихими подкастами и громкими играми.' }
      ]
    },
    {
      id: 'бесплатно-vs-pro',
      title: 'Бесплатно vs. Pro',
      items: [
        { question: 'Почему в бесплатной версии ограничение на 3 приложения?', answer: 'Бесплатная версия создана для знакомства с MACA на самых распространённых сценариях (например, Zoom + Spotify + игра). Ограничение на 3 приложения стимулирует опытных пользователей перейти на Pro для управления множеством приложений одновременно.' },
        { question: 'Что если мне нужно управлять более чем 3 приложениями?', answer: 'Перейдите на MACA Pro, который открывает неограниченное управление приложениями. Вы сможете управлять всей аудионастройкой без ограничений.' },
        { question: 'Можно ли синхронизировать Pro между несколькими Mac?', answer: 'При использовании семейного доступа лицензия Pro распространяется через iCloud. Одна покупка Pro действует для вашего аккаунта на всех личных Mac.' },
        { question: 'Сколько стоит Pro?', answer: 'Цены устанавливаются в macOS App Store. Проверьте страницу приложения для актуальных цен в вашем регионе.' }
      ]
    },
    {
      id: 'помощь-устранение-неполадок',
      title: 'Помощь и устранение неполадок',
      items: [
        { question: 'MACA не показывает приложения для управления.', answer: 'Перезапустите приложение. Убедитесь, что звук действительно воспроизводится в другом приложении. Проверьте, что MACA имеет разрешение на доступ к аудио: Системные настройки → Конфиденциальность и безопасность → Аудиовход.' },
        { question: 'Звук приложения постоянно переключается на устройство по умолчанию.', answer: 'Это может происходить, если: приложение только что запустилось (MACA может потребоваться момент для активации), другое приложение или ОС изменили системное аудиоустройство. Попробуйте вручную выбрать устройство в меню MACA.' },
        { question: 'Визуализатор EQ не показывает активность.', answer: 'Убедитесь, что в этом приложении воспроизводится звук. Анализатор обновляется в реальном времени, поэтому тишина не будет отображаться. Если всё ещё не работает, закройте окно EQ и откройте его заново.' },
        { question: 'Горячие клавиши для профилей не работают.', answer: 'Проверьте в Настройки → Горячие клавиши, что ваше сочетание включено и установлена уникальная комбинация клавиш. Убедитесь, что предоставлено разрешение на мониторинг ввода: Системные настройки → Конфиденциальность и безопасность.' },
        { question: 'Я случайно достиг лимита (3 приложения в бесплатной версии). Что теперь?', answer: 'У вас два варианта: перезапустите приложение для обновления списка запущенных приложений или перейдите на Pro для неограниченного управления.' },
        { question: 'Можно ли управлять звуком фоновых приложений?', answer: 'Да. MACA управляет любым приложением с аудиовыводом — будь то на переднем плане или в фоновом режиме.' },
        { question: 'Работает ли MACA с внешними USB-аудиоинтерфейсами?', answer: 'Безусловно. Все аудиоустройства, распознаваемые macOS (USB-интерфейсы, внешние ЦАП и т.д.), отображаются в списке устройств MACA.' },
        { question: 'Как оставить отзыв или сообщить об ошибке?', answer: 'Свяжитесь с нами по адресу support@getmaca.de. Мы ценим отчёты об ошибках, запросы на функции и отзывы об использовании.' }
      ]
    }
  ],
  technicalStandards: {
    title: 'Технические стандарты',
    sections: {
      equalizer: { title: 'Эквалайзер (EQ)', items: ['Частотные полосы ISO 216: 10 октавных частотных полос по международному стандарту', 'Диапазон частот: от 31 Гц до 16 кГц (покрывает слышимый диапазон)', 'Параметрическое управление (Pro): усиление, центральная частота, добротность Q по IEC 60268-17'] },
      audioAnalysis: { title: 'Анализ аудио', items: ['БПФ (быстрое преобразование Фурье): анализ спектра в реальном времени по стандартам IEC', 'Измерение пиков: стандартное измерение VU по IEC 60268-17 с удержанием пика 2–3 секунды', 'Обнаружение клиппинга: автоматическое обнаружение перегрузки (0 dBFS)'] },
      normalization: { title: 'Нормализация (Pro)', items: ['Нормализатор аудио: основан на стандарте LUFS (LKFS по ITU-R BS.1770-4)', 'Целевое значение: -16 LUFS (совместимо со стриминговыми платформами)'] },
      audioLevels: { title: 'Стандарты уровней аудио', items: ['Шкала дБ: децибел (20×Log10 отношения)', 'Общая громкость: 0 дБ (системное значение по умолчанию), диапазон +/- для балансировки', 'Порог клиппинга: 0 dBFS (цифровой максимум)'] }
    }
  }
};

export const nlFaqContent: FAQContent = {
  pageTitle: 'MACA — Veelgestelde vragen',
  tableOfContents: 'Inhoudsopgave',
  categories: [
    {
      id: 'aan-de-slag',
      title: 'Aan de slag',
      items: [
        { question: 'Wat is MACA?', answer: 'MACA (Master Audio Control App) is een macOS-menubalkprogramma waarmee je audio per app kunt bedienen. In plaats van alleen het systeemvolume aan te passen, kun je individuele volumes instellen voor elke app die op je Mac draait — perfect voor creatievelingen, thuiswerkers en multitaskers.' },
        { question: 'Hoe installeer ik MACA?', answer: 'Download de app uit de Mac App Store. MACA wordt geïnstalleerd als een menubalk-app en draait discreet op de achtergrond. Bij de eerste keer opstarten word je begeleid bij het instellen van audiomachtigingen.' },
        { question: 'Heeft MACA speciale instellingen nodig?', answer: 'MACA vereist basale audio-toegangsmachtiging (om audioniveaus per app vast te leggen) en optioneel invoermonitoringmachtiging (voor globale sneltoetsen). Je wordt gevraagd deze machtigingen te verlenen tijdens het instellen.' },
        { question: 'Kan ik MACA gebruiken op oudere macOS-versies?', answer: 'MACA vereist macOS 15 (Sequoia) of nieuwer. We raden macOS 26+ aan voor de beste ervaring en alle functies.' }
      ]
    },
    {
      id: 'kernfuncties',
      title: 'Kernfuncties',
      items: [
        { question: 'Wat kan ik bedienen in MACA?', answer: 'Je kunt bedienen: volume per app (stel een uniek volumeniveau 0–100%+ in voor elke draaiende app), dempen per app (demp individuele apps direct), audiorouting per app (stuur audio van elke app naar een andere speaker of koptelefoon), mastervolume (pas snel het systeemvolume aan vanuit de menubalk) en apparaatwisseling (verander je standaard audio-uitvoerapparaat).' },
        { question: 'Met welke apps werkt MACA?', answer: 'MACA werkt met elke app die audio uitvoert naar je systeem — inclusief Music/Spotify/Apple Music/YouTube Music, Zoom/Teams/Discord/Google Meet, Safari/Chrome/Firefox, professionele tools (DAW\'s, videobewerking, streamingsoftware), games en entertainment-apps.' },
        { question: 'Kan ik audio bedienen voor gepauzeerde apps?', answer: 'Ja. Je kunt volume en dempstatus aanpassen voor elke app, ongeacht of deze momenteel afspeelt of inactief is.' },
        { question: 'Gebruikt MACA speciale drivers of kernel-extensies?', answer: 'Nee. MACA gebruikt alleen native macOS audio-API\'s (Core Audio Taps), waardoor het volledig App Store-compatibel en veilig is. Geen low-level systeemwijzigingen nodig.' }
      ]
    },
    {
      id: 'audiobeheer',
      title: 'Audiobeheer',
      items: [
        { question: 'Hoe routeer ik audio van een app naar een specifiek apparaat?', answer: 'Klik op de apparaatknop naast een app in het MACA-menu. Een dropdown toont alle beschikbare audioapparaten: ingebouwde speakers/koptelefoon, Bluetooth-apparaten (AirPods, headsets, speakers) en systeemstandaard. Selecteer een apparaat en alle audio van die app wordt daar direct naartoe gerouteerd.' },
        { question: 'Kunnen meerdere apps tegelijk naar verschillende apparaten uitvoeren?', answer: 'Absoluut. Dit is een van de kernfuncties van MACA. App A kan via Bluetooth-koptelefoon afspelen terwijl App B tegelijkertijd via je speakers afspeelt.' },
        { question: 'Wat gebeurt er als een audioapparaat wordt losgekoppeld?', answer: 'MACA slaat je voorkeurrouting op. Als je Bluetooth-apparaat wordt losgekoppeld, schakelt de audio automatisch over naar je standaard systeemuitvoer. Wanneer het apparaat opnieuw verbindt, herstelt MACA de oorspronkelijke routing voor getroffen apps.' },
        { question: 'Hoe werkt de mastervolumeregeling?', answer: 'De master-schuifregelaar in de menubalk past je systeemvolume aan — net als de macOS-volumeregeling, maar in het MACA-menu voor gemakkelijker toegang.' }
      ]
    },
    {
      id: 'profielen-presets',
      title: 'Profielen en presets',
      items: [
        { question: 'Wat zijn audioprofielen?', answer: 'Audioprofielen laten je complexe audio-instellingen opslaan en snel oproepen. Voorbeelden: "Gaming" (spelvolume verhoogd, Spotify stil, Discord op 50%), "Opname" (muziek, podcasts en browser gedempt; alleen Discord actief), "Late avond" (volume verlaagd; gerouteerd naar koptelefoon). Maak profielen door gewenste volumes/routing in te stellen en sla ze dan op. Wissel tussen profielen vanuit de menubalk met één klik.' },
        { question: 'Hoeveel profielen kan ik opslaan?', answer: 'Gratis: geen profielen. Pro: onbeperkte profielen.' },
        { question: 'Kunnen profielen audio-instellingen bevatten zoals equalizer-presets?', answer: 'Ja (Pro). Wanneer je een profiel opslaat, kan het EQ-presets voor specifieke apps bevatten. Bij activering van het profiel worden de opgeslagen EQ-instellingen automatisch toegepast.' },
        { question: 'Kan ik profielen hernoemen of verwijderen?', answer: 'Ja. Open Instellingen → Profielen en je kunt alle opgeslagen profielen bewerken, hernoemen of verwijderen.' }
      ]
    },
    {
      id: 'equalizer',
      title: 'Equalizer (EQ)',
      items: [
        { question: 'Heeft MACA een equalizer?', answer: 'Ja. MACA bevat een 10-bands parametrische equalizer volgens ISO 216-frequentiestandaarden. Open het EQ-venster vanuit de menubalk of dubbelklik op een app.' },
        { question: 'Wat kan ik met de EQ doen?', answer: 'Je kunt: EQ per app aanpassen (stem het geluid van elke app individueel af, bijv. Spotify warmer maken, YouTube Music helderder), presets gebruiken (kies uit ingebouwde EQ-presets zoals Warm, Helder, Basversterking, Vocal Pop), aangepaste profielen maken, real-time spectrumweergave gebruiken en piekwaarde-visualisatie bekijken.' },
        { question: 'Kan ik zien wat de EQ in real-time doet?', answer: 'Ja. De spectrumanalyser in het EQ-venster toont een real-time grafiek van frequenties in de audio met kleurgecodeerde banden en piekindicatoren.' },
        { question: 'Welke EQ-functies zijn beschikbaar in Gratis vs. Pro?', answer: 'Gratis: 10-bands ISO EQ met presets en basisprofielen. Pro: volledige parametrische EQ-bediening (gain, frequentie, Q) + onbeperkte aangepaste profielen + krachtigere normalizer.' },
        { question: 'Wat is de "Audio Normalizer"?', answer: 'De Audio Normalizer (Pro) past automatisch niveaus per app aan om plotselinge volumepieken of -dalen tussen apps te voorkomen. Handig bij het wisselen tussen stille podcasts en luide games.' }
      ]
    },
    {
      id: 'gratis-vs-pro',
      title: 'Gratis vs. Pro',
      items: [
        { question: 'Waarom is er een limiet van 3 apps in de gratis versie?', answer: 'De gratis versie is ontworpen om je kennis te laten maken met MACA voor de meest voorkomende gebruiksscenario\'s (bijv. Zoom + Spotify + game). De limiet van 3 apps moedigt power users aan om te upgraden naar Pro voor het beheren van veel apps tegelijk.' },
        { question: 'Wat als ik meer dan 3 apps moet bedienen?', answer: 'Upgrade naar MACA Pro, dat onbeperkte app-bediening ontgrendelt. Je kunt je volledige audio-setup beheren zonder beperkingen.' },
        { question: 'Kan ik Pro-functies synchroniseren over meerdere Macs?', answer: 'Als je Delen met gezin gebruikt, wordt de Pro-licentie gedeeld via iCloud. Eén Pro-aankoop geldt voor je account op al je persoonlijke Macs.' },
        { question: 'Hoeveel kost Pro?', answer: 'De prijs wordt vastgesteld in de macOS App Store. Bekijk de app-vermelding voor actuele prijzen in jouw regio.' }
      ]
    },
    {
      id: 'hulp-probleemoplossing',
      title: 'Hulp en probleemoplossing',
      items: [
        { question: 'MACA toont geen apps om te bedienen.', answer: 'Herstart de app. Controleer of er daadwerkelijk audio wordt afgespeeld in een andere app. Controleer of MACA toestemming heeft voor audiomachtiging: Systeeminstellingen → Privacy en beveiliging → Audio-invoer.' },
        { question: 'Audio van een app schakelt steeds terug naar het standaardapparaat.', answer: 'Dit kan voorkomen als: de app net is gestart (MACA heeft mogelijk even nodig om te activeren), een andere app of het besturingssysteem het systeemaudioapparaat heeft gewijzigd. Probeer het apparaat handmatig opnieuw te selecteren in het MACA-menu.' },
        { question: 'De EQ-visualiser toont geen activiteit.', answer: 'Zorg ervoor dat er audio wordt afgespeeld in die app. De analyser wordt in real-time bijgewerkt, dus stil audio wordt niet weergegeven. Als het nog steeds niet werkt, sluit het EQ-venster en open het opnieuw.' },
        { question: 'Sneltoetsen voor profielen werken niet.', answer: 'Controleer onder Instellingen → Sneltoetsen of je sneltoets is ingeschakeld en ingesteld op een unieke toetsencombinatie. Controleer of invoermonitoringmachtiging is verleend: Systeeminstellingen → Privacy en beveiliging.' },
        { question: 'Ik heb per ongeluk mijn limiet bereikt (3 apps in Gratis). Wat nu?', answer: 'Je hebt twee opties: herstart de app om de lijst met draaiende apps te vernieuwen, of upgrade naar Pro voor onbeperkte app-bediening.' },
        { question: 'Kan ik audio bedienen in achtergrond-apps?', answer: 'Ja. MACA bedient elke app met audio-uitvoer — of deze nu op de voorgrond of achtergrond draait.' },
        { question: 'Werkt MACA met externe USB-audio-interfaces?', answer: 'Absoluut. Alle audioapparaten die macOS herkent (USB-interfaces, externe DAC\'s, enz.) verschijnen in de apparatenlijst van MACA.' },
        { question: 'Hoe geef ik feedback of meld ik een bug?', answer: 'Neem contact met ons op via support@getmaca.de. We waarderen bugrapporten, functieverzoeken en gebruiksfeedback.' }
      ]
    }
  ],
  technicalStandards: {
    title: 'Technische standaarden',
    sections: {
      equalizer: { title: 'Equalizer (EQ)', items: ['ISO 216 frequentiebanden: 10 octaaf-frequentiebanden volgens internationale standaard', 'Frequentiebereik: 31 Hz tot 16 kHz (dekt het hoorbare audiobereik)', 'Parametrische bediening (Pro): Gain, centrumfrequentie, Q-factor volgens IEC 60268-17'] },
      audioAnalysis: { title: 'Audio-analyse', items: ['FFT (Fast Fourier Transform): real-time spectrumanalyse volgens IEC-standaarden', 'Piekwaarde-meting: standaard IEC 60268-17 VU-meting met piekwaarde-vasthouden voor 2–3 seconden', 'Clipping-detectie: automatische overbelastingsdetectie (0 dBFS)'] },
      normalization: { title: 'Normalisatie (Pro)', items: ['Audio Normalizer: gebaseerd op LUFS-standaard (LKFS volgens ITU-R BS.1770-4)', 'Doelwaarde: -16 LUFS (compatibel met streamingplatforms)'] },
      audioLevels: { title: 'Audioniveau-standaarden', items: ['dB-schaal: decibel (20×Log10 van verhouding)', 'Mastervolume: 0 dB (systeemstandaard), +/- bereik voor niveaubalancering', 'Clipping-drempel: 0 dBFS (digitaal maximum)'] }
    }
  }
};

export const trFaqContent: FAQContent = {
  pageTitle: 'MACA — Sık Sorulan Sorular',
  tableOfContents: 'İçindekiler',
  categories: [
    {
      id: 'baslarken',
      title: 'Başlarken',
      items: [
        { question: 'MACA nedir?', answer: 'MACA (Master Audio Control App), macOS menü çubuğunda çalışan ve her uygulama için ayrı ayrı ses kontrolü yapmanıza olanak tanıyan bir yardımcı programdır. Sadece sistem sesini ayarlamak yerine, Mac\'inizde çalışan her uygulama için ayrı ses seviyeleri belirleyebilirsiniz — içerik üreticileri, uzaktan çalışanlar ve çoklu görev yapanlar için idealdir.' },
        { question: 'MACA\'yı nasıl kurarım?', answer: 'Uygulamayı Mac App Store\'dan indirin. MACA, menü çubuğu uygulaması olarak kurulur ve arka planda sessizce çalışır. İlk başlatmada ses izinlerini ayarlama konusunda yönlendirileceksiniz.' },
        { question: 'MACA özel ayarlara ihtiyaç duyar mı?', answer: 'MACA, temel ses erişim izni (uygulama başına ses seviyelerini yakalamak için) ve isteğe bağlı giriş izleme izni (global klavye kısayolları için) gerektirir. Kurulum sırasında bu izinleri vermeniz istenecektir.' },
        { question: 'MACA\'yı eski macOS sürümlerinde kullanabilir miyim?', answer: 'MACA, macOS 15 (Sequoia) veya daha yeni sürüm gerektirir. En iyi deneyim ve tüm özellikler için macOS 26+ öneriyoruz.' }
      ]
    },
    {
      id: 'temel-ozellikler',
      title: 'Temel Özellikler',
      items: [
        { question: 'MACA\'da neyi kontrol edebilirim?', answer: 'Kontrol edebileceğiniz: Uygulama başına ses (her çalışan uygulama için 0–100%+ benzersiz ses seviyesi ayarlayın), uygulama başına sessize alma (tek tek uygulamaları anında sessize alın), uygulama başına ses yönlendirme (herhangi bir uygulamanın sesini farklı bir hoparlöre veya kulaklığa gönderin), ana ses (menü çubuğundan sistem genelindeki sesi hızlıca ayarlayın) ve cihaz değiştirme (varsayılan ses çıkış cihazınızı değiştirin).' },
        { question: 'MACA hangi uygulamalarla çalışır?', answer: 'MACA, sisteminize ses çıkışı yapan herhangi bir uygulamayla çalışır — Music/Spotify/Apple Music/YouTube Music, Zoom/Teams/Discord/Google Meet, Safari/Chrome/Firefox, profesyonel araçlar (DAW\'lar, video düzenleme, yayın yazılımı), oyunlar ve eğlence uygulamaları dahil.' },
        { question: 'Duraklatılmış uygulamaların sesini kontrol edebilir miyim?', answer: 'Evet. Herhangi bir uygulamanın ses seviyesini ve sessize alma durumunu, o anda çalıyor olsun ya da olmasın, ayarlayabilirsiniz.' },
        { question: 'MACA özel sürücüler veya çekirdek uzantıları kullanır mı?', answer: 'Hayır. MACA yalnızca yerel macOS ses API\'lerini (Core Audio Taps) kullanır, bu da onu tamamen App Store uyumlu ve güvenli kılar. Düşük seviyeli sistem değişikliklerine gerek yoktur.' }
      ]
    },
    {
      id: 'ses-yonetimi',
      title: 'Ses Yönetimi',
      items: [
        { question: 'Bir uygulamanın sesini belirli bir cihaza nasıl yönlendiririm?', answer: 'MACA menüsünde bir uygulamanın yanındaki cihaz düğmesine tıklayın. Açılır menü tüm kullanılabilir ses cihazlarını gösterir: dahili hoparlörler/kulaklıklar, Bluetooth cihazları (AirPods, kulaklıklar, hoparlörler) ve sistem varsayılanı. Bir cihaz seçin ve o uygulamadaki tüm ses hemen oraya yönlendirilecektir.' },
        { question: 'Birden fazla uygulama aynı anda farklı cihazlara ses çıkışı yapabilir mi?', answer: 'Kesinlikle. Bu, MACA\'nın temel özelliklerinden biridir. Uygulama A Bluetooth kulaklıkla çalarken Uygulama B aynı anda hoparlörlerden çalabilir.' },
        { question: 'Bir ses cihazı bağlantısı kesilirse ne olur?', answer: 'MACA tercih ettiğiniz yönlendirmeyi kaydeder. Bluetooth cihazınızın bağlantısı kesilirse, ses otomatik olarak sistem varsayılan çıkış cihazına geri döner. Cihaz yeniden bağlandığında, MACA etkilenen uygulamalar için orijinal yönlendirmeyi geri yükler.' },
        { question: 'Ana ses kontrolü nasıl çalışır?', answer: 'Menü çubuğundaki ana kaydırıcı sistem sesinizi ayarlar — macOS ses kontrolü gibi, ancak daha kolay erişim için MACA menüsünde.' }
      ]
    },
    {
      id: 'profiller-on-ayarlar',
      title: 'Profiller ve Ön Ayarlar',
      items: [
        { question: 'Ses profilleri nedir?', answer: 'Ses profilleri, karmaşık ses kurulumlarını kaydetmenize ve hızlıca geri çağırmanıza olanak tanır. Örnekler: "Oyun" (oyun sesi artırılmış, Spotify sessiz, Discord %50), "Kayıt" (müzik, podcast\'ler ve tarayıcı sessize alınmış; yalnızca Discord aktif), "Gece Geç" (ses azaltılmış; kulaklığa yönlendirilmiş). İstenen ses/yönlendirme ayarlarını yaparak profiller oluşturun, ardından kaydedin. Menü çubuğundan tek tıklamayla profiller arasında geçiş yapın.' },
        { question: 'Kaç profil kaydedebilirim?', answer: 'Ücretsiz: Profil yok. Pro: Sınırsız profil.' },
        { question: 'Profiller ekolayzır ön ayarları gibi ses ayarlarını içerebilir mi?', answer: 'Evet (Pro). Bir profil kaydettiğinizde, belirli uygulamalar için EQ ön ayarlarını içerebilir. Profili etkinleştirdiğinizde, kaydedilen EQ ayarları otomatik olarak uygulanır.' },
        { question: 'Profilleri yeniden adlandırabilir veya silebilir miyim?', answer: 'Evet. Ayarlar → Profiller\'i açın ve tüm kayıtlı profilleri düzenleyebilir, yeniden adlandırabilir veya silebilirsiniz.' }
      ]
    },
    {
      id: 'ekolayzer',
      title: 'Ekolayzır (EQ)',
      items: [
        { question: 'MACA\'da ekolayzır var mı?', answer: 'Evet. MACA, ISO 216 frekans standartlarına uygun 10 bantlı parametrik ekolayzır içerir. EQ penceresini menü çubuğundan açın veya bir uygulamaya çift tıklayın.' },
        { question: 'EQ ile ne yapabilirim?', answer: 'Yapabilecekleriniz: uygulama başına EQ ayarlama (her uygulamanın sesini ayrı ayrı ayarlayın, örn. Spotify\'ı daha sıcak, YouTube Music\'i daha parlak yapın), ön ayarları kullanma (Sıcak, Parlak, Bas Güçlendirme, Vokal Pop gibi yerleşik EQ ön ayarlarından seçin), özel profiller oluşturma, gerçek zamanlı spektrum gösterimi ve tepe tutma görselleştirmesi.' },
        { question: 'EQ\'nun gerçek zamanlı olarak ne yaptığını görebilir miyim?', answer: 'Evet. EQ penceresindeki spektrum analizi, sesin frekanslarının renk kodlu bantlar ve tepe göstergeleriyle gerçek zamanlı bir grafiğini gösterir.' },
        { question: 'Ücretsiz ve Pro\'da hangi EQ özellikleri mevcut?', answer: 'Ücretsiz: Ön ayarlar ve temel profillerle 10 bantlı ISO EQ. Pro: Tam parametrik EQ kontrolü (kazanç, frekans, Q) + sınırsız özel profiller + daha güçlü normalleştirici.' },
        { question: '"Ses Normalleştirici" nedir?', answer: 'Ses Normalleştirici (Pro), uygulamalar arasında ani ses artışlarını veya düşüşlerini önlemek için uygulama başına seviyeleri otomatik olarak ayarlar. Sessiz podcast\'ler ile yüksek sesli oyunlar arasında geçiş yaparken kullanışlıdır.' }
      ]
    },
    {
      id: 'ucretsiz-vs-pro',
      title: 'Ücretsiz vs. Pro',
      items: [
        { question: 'Ücretsiz sürümde neden 3 uygulama sınırı var?', answer: 'Ücretsiz sürüm, sizi en yaygın kullanım senaryolarıyla (örn. Zoom + Spotify + oyun) MACA ile tanıştırmak için tasarlanmıştır. 3 uygulama sınırı, güçlü kullanıcıları birçok uygulamayı aynı anda yönetmek için Pro\'ya yükseltmeye teşvik eder.' },
        { question: '3\'ten fazla uygulamayı kontrol etmem gerekirse ne olur?', answer: 'Sınırsız uygulama kontrolünü açan MACA Pro\'ya yükseltin. Tüm ses kurulumunuzu kısıtlama olmadan yönetebilirsiniz.' },
        { question: 'Pro özelliklerini birden fazla Mac\'te senkronize edebilir miyim?', answer: 'Aile Paylaşımı kullanıyorsanız, Pro lisansı iCloud üzerinden paylaşılır. Tek bir Pro satın alımı, tüm kişisel Mac\'lerinizde hesabınız için geçerlidir.' },
        { question: 'Pro ne kadara mal olur?', answer: 'Fiyatlandırma macOS App Store\'da belirlenir. Bölgenizdeki güncel fiyatlar için uygulama listesini kontrol edin.' }
      ]
    },
    {
      id: 'yardim-sorun-giderme',
      title: 'Yardım ve Sorun Giderme',
      items: [
        { question: 'MACA kontrol edilecek uygulama göstermiyor.', answer: 'Uygulamayı yeniden başlatın. Başka bir uygulamada gerçekten ses çaldığından emin olun. MACA\'nın ses erişim iznine sahip olduğunu kontrol edin: Sistem Ayarları → Gizlilik ve Güvenlik → Ses Girişi.' },
        { question: 'Bir uygulamanın sesi sürekli varsayılan cihaza geri dönüyor.', answer: 'Bu şu durumlarda olabilir: uygulama henüz başlatıldıysa (MACA\'nın etkinleştirmesi biraz zaman alabilir), başka bir uygulama veya işletim sistemi sistem ses cihazını değiştirdiyse. MACA menüsünde cihazı manuel olarak yeniden seçmeyi deneyin.' },
        { question: 'EQ görselleştirici hiçbir aktivite göstermiyor.', answer: 'O uygulamada ses çaldığından emin olun. Analiz gerçek zamanlı güncellenir, bu nedenle sessiz ses hiçbir şey göstermez. Hâlâ çalışmıyorsa, EQ penceresini kapatıp yeniden açın.' },
        { question: 'Profiller için klavye kısayolları çalışmıyor.', answer: 'Ayarlar → Klavye Kısayolları altında kısayolunuzun etkin olduğunu ve benzersiz bir tuş kombinasyonuna ayarlandığını kontrol edin. Giriş izleme izninin verildiğini doğrulayın: Sistem Ayarları → Gizlilik ve Güvenlik.' },
        { question: 'Yanlışlıkla sınırıma ulaştım (Ücretsiz\'de 3 uygulama). Şimdi ne olacak?', answer: 'İki seçeneğiniz var: çalışan uygulama listesini yenilemek için uygulamayı yeniden başlatın veya sınırsız uygulama kontrolü için Pro\'ya yükseltin.' },
        { question: 'Arka plan uygulamalarındaki sesi kontrol edebilir miyim?', answer: 'Evet. MACA, ses çıkışı olan herhangi bir uygulamayı kontrol eder — ön planda veya arka planda olsun.' },
        { question: 'MACA harici USB ses arabirimleriyle çalışır mı?', answer: 'Kesinlikle. macOS\'un tanıdığı tüm ses cihazları (USB arabirimleri, harici DAC\'lar vb.) MACA\'nın cihaz listesinde görünür.' },
        { question: 'Nasıl geri bildirim verebilir veya hata bildirebilirim?', answer: 'Bize support@getmaca.de adresinden ulaşın. Hata raporları, özellik istekleri ve kullanım geri bildirimleri için teşekkür ederiz.' }
      ]
    }
  ],
  technicalStandards: {
    title: 'Teknik Standartlar',
    sections: {
      equalizer: { title: 'Ekolayzır (EQ)', items: ['ISO 216 Frekans Bantları: Uluslararası standarda göre 10 oktav frekans bandı', 'Frekans Aralığı: 31 Hz\'den 16 kHz\'e (duyulabilir ses aralığını kapsar)', 'Parametrik Kontrol (Pro): Kazanç, merkez frekansı, Q faktörü IEC 60268-17\'ye göre'] },
      audioAnalysis: { title: 'Ses Analizi', items: ['FFT (Hızlı Fourier Dönüşümü): IEC standartlarına göre gerçek zamanlı spektrum analizi', 'Tepe Tutma Ölçümü: 2–3 saniye tepe tutma ile standart IEC 60268-17 VU ölçümü', 'Kırpma Algılama: Otomatik aşırı yüklenme algılama (0 dBFS)'] },
      normalization: { title: 'Normalleştirme (Pro)', items: ['Ses Normalleştirici: LUFS standardına dayalı (ITU-R BS.1770-4\'e göre LKFS)', 'Hedef Değer: -16 LUFS (yayın platformlarıyla uyumlu)'] },
      audioLevels: { title: 'Ses Seviyesi Standartları', items: ['dB Ölçeği: Desibel (oranın 20×Log10\'u)', 'Ana Ses: 0 dB (sistem varsayılanı), seviye dengeleme için +/- aralık', 'Kırpma Eşiği: 0 dBFS (dijital maksimum)'] }
    }
  }
};

export const svFaqContent: FAQContent = {
  pageTitle: 'MACA — Vanliga frågor',
  tableOfContents: 'Innehållsförteckning',
  categories: [
    {
      id: 'komma-igang',
      title: 'Komma igång',
      items: [
        { question: 'Vad är MACA?', answer: 'MACA (Master Audio Control App) är ett macOS-menyradsverktyg som låter dig styra ljud per app. Istället för att bara justera systemvolymen kan du ställa in individuella volymer för varje app som körs på din Mac — perfekt för kreatörer, distansarbetare och multitaskers.' },
        { question: 'Hur installerar jag MACA?', answer: 'Ladda ner appen från Mac App Store. MACA installeras som en menyrad-app och körs diskret i bakgrunden. Vid första start guidas du genom att konfigurera ljudbehörigheter.' },
        { question: 'Behöver MACA speciella inställningar?', answer: 'MACA kräver grundläggande ljudåtkomstbehörighet (för att fånga ljudnivåer per app) och valfritt behörighet för ingångsövervakning (för globala kortkommandon). Du uppmanas att bevilja dessa behörigheter vid installationen.' },
        { question: 'Kan jag använda MACA på äldre macOS-versioner?', answer: 'MACA kräver macOS 15 (Sequoia) eller nyare. Vi rekommenderar macOS 26+ för bästa upplevelse och alla funktioner.' }
      ]
    },
    {
      id: 'huvudfunktioner',
      title: 'Huvudfunktioner',
      items: [
        { question: 'Vad kan jag styra i MACA?', answer: 'Du kan styra: volym per app (ställ in en unik volymnivå 0–100%+ för varje körande app), ljud av per app (stäng av enskilda appar direkt), ljuddirigering per app (skicka ljud från vilken app som helst till en annan högtalare eller hörlurar), mastervolym (justera snabbt systemvolymen från menyraden) och enhetsväxling (ändra din standardljudutgångsenhet).' },
        { question: 'Vilka appar fungerar MACA med?', answer: 'MACA fungerar med alla appar som matar ut ljud till ditt system — inklusive Music/Spotify/Apple Music/YouTube Music, Zoom/Teams/Discord/Google Meet, Safari/Chrome/Firefox, professionella verktyg (DAW:er, videoredigering, streamingprogramvara), spel och underhållningsappar.' },
        { question: 'Kan jag styra ljud för pausade appar?', answer: 'Ja. Du kan justera volym och ljud av-status för alla appar oavsett om de spelar eller är inaktiva.' },
        { question: 'Använder MACA speciella drivrutiner eller kärntillägg?', answer: 'Nej. MACA använder bara inbyggda macOS-ljud-API:er (Core Audio Taps), vilket gör det helt App Store-kompatibelt och säkert. Inga systemnivåändringar krävs.' }
      ]
    },
    {
      id: 'ljudhantering',
      title: 'Ljudhantering',
      items: [
        { question: 'Hur dirigerar jag ljud från en app till en specifik enhet?', answer: 'Klicka på enhetsknappen bredvid en app i MACA-menyn. En rullgardinsmeny visar alla tillgängliga ljudenheter: inbyggda högtalare/hörlurar, Bluetooth-enheter (AirPods, headset, högtalare) och systemstandard. Välj en enhet och allt ljud från den appen dirigeras dit omedelbart.' },
        { question: 'Kan flera appar mata ut till olika enheter samtidigt?', answer: 'Absolut. Detta är en av MACAs kärnfunktioner. App A kan spela via Bluetooth-hörlurar medan App B spelar via dina högtalare samtidigt.' },
        { question: 'Vad händer om en ljudenhet kopplas bort?', answer: 'MACA sparar din föredragna dirigering. Om din Bluetooth-enhet kopplas bort växlar ljudet automatiskt till din systemstandardutgång. När enheten återansluts återställer MACA den ursprungliga dirigeringen för berörda appar.' },
        { question: 'Hur fungerar mastervolymkontrollen?', answer: 'Masterreglaget i menyraden justerar din systemvolym — precis som macOS volymkontroll, men i MACA-menyn för enklare åtkomst.' }
      ]
    },
    {
      id: 'profiler-forinstellningar',
      title: 'Profiler och förinställningar',
      items: [
        { question: 'Vad är ljudprofiler?', answer: 'Ljudprofiler låter dig spara och snabbt återkalla komplexa ljudinställningar. Exempel: "Gaming" (spelvolym höjd, Spotify tyst, Discord på 50%), "Inspelning" (musik, podcasts och webbläsare avstängda; bara Discord aktiv), "Sen kväll" (volym sänkt; dirigerad till hörlurar). Skapa profiler genom att ställa in önskade volymer/dirigeringar och spara dem sedan. Växla mellan profiler från menyraden med ett klick.' },
        { question: 'Hur många profiler kan jag spara?', answer: 'Gratis: inga profiler. Pro: obegränsade profiler.' },
        { question: 'Kan profiler innehålla ljudinställningar som EQ-förinställningar?', answer: 'Ja (Pro). När du sparar en profil kan den innehålla EQ-förinställningar för specifika appar. När du aktiverar profilen tillämpas de sparade EQ-inställningarna automatiskt.' },
        { question: 'Kan jag byta namn på eller ta bort profiler?', answer: 'Ja. Öppna Inställningar → Profiler och du kan redigera, byta namn på eller ta bort alla sparade profiler.' }
      ]
    },
    {
      id: 'equalizer',
      title: 'Equalizer (EQ)',
      items: [
        { question: 'Har MACA en equalizer?', answer: 'Ja. MACA inkluderar en 10-bands parametrisk equalizer enligt ISO 216-frekvensstandarder. Öppna EQ-fönstret från menyraden eller dubbelklicka på en app.' },
        { question: 'Vad kan jag göra med EQ:n?', answer: 'Du kan: justera EQ per app (finjustera varje apps ljud individuellt, t.ex. göra Spotify varmare, YouTube Music ljusare), använda förinställningar (välj bland inbyggda EQ-förinställningar som Varm, Ljus, Basförstärkning, Vokal Pop), skapa anpassade profiler, använda realtidsspektrumvisning och visa toppvärdesvisualisering.' },
        { question: 'Kan jag se vad EQ:n gör i realtid?', answer: 'Ja. Spektrumanalysatorn i EQ-fönstret visar en realtidsgraf av frekvenserna i ljudet med färgkodade band och toppindikatorer.' },
        { question: 'Vilka EQ-funktioner finns i Gratis vs. Pro?', answer: 'Gratis: 10-bands ISO EQ med förinställningar och grundprofiler. Pro: Full parametrisk EQ-kontroll (gain, frekvens, Q) + obegränsade anpassade profiler + kraftfullare normaliserare.' },
        { question: 'Vad är "Ljudnormaliseraren"?', answer: 'Ljudnormaliseraren (Pro) justerar automatiskt nivåer per app för att förhindra plötsliga volymtoppar eller -fall mellan appar. Användbart när du växlar mellan tysta podcasts och högljudda spel.' }
      ]
    },
    {
      id: 'gratis-vs-pro',
      title: 'Gratis vs. Pro',
      items: [
        { question: 'Varför finns det en gräns på 3 appar i gratisversionen?', answer: 'Gratisversionen är utformad för att introducera dig till MACA med de vanligaste användningsfallen (t.ex. Zoom + Spotify + spel). Gränsen på 3 appar uppmuntrar avancerade användare att uppgradera till Pro för att hantera många appar samtidigt.' },
        { question: 'Vad om jag behöver styra fler än 3 appar?', answer: 'Uppgradera till MACA Pro som låser upp obegränsad appkontroll. Du kan hantera hela din ljudinställning utan begränsningar.' },
        { question: 'Kan jag synkronisera Pro-funktioner mellan flera Mac-datorer?', answer: 'Om du använder Familjedelning delas Pro-licensen via iCloud. Ett enda Pro-köp gäller för ditt konto på alla personliga Mac-datorer.' },
        { question: 'Hur mycket kostar Pro?', answer: 'Prissättningen bestäms i macOS App Store. Kontrollera applistningen för aktuella priser i din region.' }
      ]
    },
    {
      id: 'hjalp-felsokning',
      title: 'Hjälp och felsökning',
      items: [
        { question: 'MACA visar inga appar att styra.', answer: 'Starta om appen. Kontrollera att ljud faktiskt spelas i en annan app. Kontrollera att MACA har behörighet att komma åt ljud: Systeminställningar → Integritet och säkerhet → Ljudingång.' },
        { question: 'Ljud från en app växlar hela tiden tillbaka till standardenheten.', answer: 'Detta kan inträffa om: appen just startades (MACA kan behöva ett ögonblick för att aktiveras), en annan app eller OS ändrade systemljudenheten. Försök att manuellt välja enheten igen i MACA-menyn.' },
        { question: 'EQ-visualiseraren visar ingen aktivitet.', answer: 'Se till att ljud spelas i den appen. Analysatorn uppdateras i realtid, så tyst ljud visar inget. Om det fortfarande inte fungerar, stäng EQ-fönstret och öppna det igen.' },
        { question: 'Kortkommandon för profiler fungerar inte.', answer: 'Kontrollera under Inställningar → Kortkommandon att ditt kortkommando är aktiverat och inställt på en unik tangentkombination. Verifiera att behörighet för ingångsövervakning har beviljats: Systeminställningar → Integritet och säkerhet.' },
        { question: 'Jag nådde av misstag min gräns (3 appar i Gratis). Vad nu?', answer: 'Du har två alternativ: starta om appen för att uppdatera listan över körande appar, eller uppgradera till Pro för obegränsad appkontroll.' },
        { question: 'Kan jag styra ljud i bakgrundsappar?', answer: 'Ja. MACA styr alla appar med ljudutgång — oavsett om de är i förgrunden eller bakgrunden.' },
        { question: 'Fungerar MACA med externa USB-ljudgränssnitt?', answer: 'Absolut. Alla ljudenheter som macOS känner igen (USB-gränssnitt, externa DAC:ar osv.) visas i MACAs enhetslista.' },
        { question: 'Hur ger jag feedback eller rapporterar en bugg?', answer: 'Kontakta oss på support@getmaca.de. Vi uppskattar buggrapporter, funktionsförfrågningar och användningsfeedback.' }
      ]
    }
  ],
  technicalStandards: {
    title: 'Tekniska standarder',
    sections: {
      equalizer: { title: 'Equalizer (EQ)', items: ['ISO 216-frekvensband: 10 oktavfrekvensband enligt internationell standard', 'Frekvensområde: 31 Hz till 16 kHz (täcker det hörbara ljudområdet)', 'Parametrisk kontroll (Pro): Gain, centerfrekvens, Q-faktor enligt IEC 60268-17'] },
      audioAnalysis: { title: 'Ljudanalys', items: ['FFT (snabb Fouriertransform): realtidsspektrumanalys enligt IEC-standarder', 'Toppvärdemätning: standard IEC 60268-17 VU-mätning med toppvärde-hållning i 2–3 sekunder', 'Klippningsdetektering: automatisk överbelastningsdetektering (0 dBFS)'] },
      normalization: { title: 'Normalisering (Pro)', items: ['Ljudnormaliserare: baserad på LUFS-standard (LKFS enligt ITU-R BS.1770-4)', 'Målvärde: -16 LUFS (kompatibelt med streamingplattformar)'] },
      audioLevels: { title: 'Ljudnivåstandarder', items: ['dB-skala: decibel (20×Log10 av förhållandet)', 'Mastervolym: 0 dB (systemstandard), +/- intervall för nivåbalansering', 'Klippningströskel: 0 dBFS (digitalt maximum)'] }
    }
  }
};
