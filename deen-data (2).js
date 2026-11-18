// اسمع دين - داتا جديدة
// أي حقل id فاضي: الصق فيه كود الفيديو من رابط يوتيوب (الجزء بعد v=) أو من youtu.be/
// زرار "افتح في يوتيوب" بيشتغل دايمًا من q لحد ما تحط id.

const yt = (q) => "https://www.youtube.com/results?search_query=" + encodeURIComponent(q);

// الشيوخ المعتمدين فقط
const SHEIKHS = [
  { key: "amgad",   name: "أمجد سمير" },
  { key: "amer",    name: "أحمد عامر" },
  { key: "arabi",   name: "أحمد العربي" },
  { key: "monem",   name: "أحمد عبد المنعم" },
  { key: "ghaleez", name: "محمد الغليظ" },
  { key: "ali",     name: "علي قاسم" },
  { key: "samir",   name: "سمير مصطفى" },
  { key: "sherif",  name: "شريف علي" },
  { key: "wakeel",  name: "عبد الوكيل القاضي" },
  { key: "ghafoor", name: "عبد الغفور" }
].map(s => ({
  ...s,
  channelId: "",                        // اكتب channelId الصح هنا لو عايز دقة
  channelUrl: yt(s.name),
  shortsQuery: s.name + " شورتس",
  photo: "photos/" + s.key + ".jpg"     // صورتك الأصلية لو رفعتها في فولدر photos
}));

// صورة بديلة: حرف الاسم داخل دايرة ذهبية (مش صورة شخص)
const avatarFallback = (name) => "data:image/svg+xml;utf8," + encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="#0b0f0d"/><circle cx="50" cy="50" r="46" fill="none" stroke="#d4af37" stroke-width="3"/><text x="50" y="64" font-size="44" text-anchor="middle" fill="#d4af37" font-family="sans-serif">${(name || "؟").trim().charAt(0)}</text></svg>`);

// رد على اللي مش لاقي عنده فيديوهات من الشيخ: ترتيب الاقتراحات
const RECOMMEND_RULE = { fromFavorite: 0.6, fromOthers: 0.4 };

// الأقسام. كل فيديو: عنوان، شيخ، q للبحث، id (فاضي لحد ما تملاه)
const CATEGORIES = [
  { key: "taweba", name: "التوبة", icon: "🤍", videos: [
    { title: "ازاي ترجع بعد ما تقع", sheikh: "amgad", q: "أمجد سمير التوبة بعد الذنب", id: "" },
    { title: "الله بيفرح بتوبتك", sheikh: "amer", q: "أحمد عامر التوبة", id: "" },
    { title: "لو رجعت للذنب تاني", sheikh: "arabi", q: "أحمد العربي الرجوع للذنب", id: "" },
    { title: "باب التوبة مفتوح", sheikh: "monem", q: "أحمد عبد المنعم التوبة", id: "" },
    { title: "لحظة الضعف", sheikh: "ghaleez", q: "محمد الغليظ التوبة", id: "" },
    { title: "ماتيأسش من رحمة ربنا", sheikh: "ali", q: "علي قاسم التوبة", id: "" },
    { title: "الندم الصادق", sheikh: "samir", q: "سمير مصطفى التوبة", id: "" },
    { title: "ابدأ من جديد", sheikh: "sherif", q: "شريف علي التوبة", id: "" },
    { title: "رجوع صادق", sheikh: "ghafoor", q: "عبد الغفور التوبة", id: "" },
    { title: "ربنا غفور رحيم", sheikh: "ghafoor", q: "عبد الغفور المغفرة", id: "" },
    { title: "ازاي أبدأ صح", sheikh: "ghafoor", q: "عبد الغفور بداية جديدة", id: "" }
  ]},
  { key: "zaka", name: "ذكاء", icon: "🧠", videos: [
    { title: "فهم الدين بعقلك", sheikh: "amer", q: "أحمد عامر الشباب والدين", id: "" },
    { title: "ردود على الشبهات", sheikh: "samir", q: "سمير مصطفى شبهات", id: "" },
    { title: "ليه ربنا خلقنا", sheikh: "monem", q: "أحمد عبد المنعم الحكمة من الخلق", id: "" },
    { title: "الإيمان واليقين", sheikh: "sherif", q: "شريف علي الإيمان", id: "" },
    { title: "فهم القرآن", sheikh: "ghafoor", q: "عبد الغفور تدبر القرآن", id: "" },
    { title: "اسأل واتعلم", sheikh: "ghafoor", q: "عبد الغفور أسئلة شباب", id: "" }
  ]},
  { key: "weak", name: "وقت الضعف", icon: "🔥", videos: [
    { title: "لما الكسل يغلبك", sheikh: "amgad", q: "أمجد سمير الكسل والفتور", id: "" },
    { title: "الفتور بعد الطاعة", sheikh: "amer", q: "أحمد عامر الفتور", id: "" },
    { title: "الانتكاسة مش النهاية", sheikh: "arabi", q: "أحمد العربي الانتكاسة", id: "" },
    { title: "اتغلب على الشهوة", sheikh: "ali", q: "علي قاسم الشهوة", id: "" },
    { title: "الصحبة الصالحة", sheikh: "ghaleez", q: "محمد الغليظ الصحبة", id: "" },
    { title: "الثبات على الطاعة", sheikh: "monem", q: "أحمد عبد المنعم الثبات", id: "" },
    { title: "ازاي تكمل بعد الوقوع", sheikh: "samir", q: "سمير مصطفى الفتور", id: "" },
    { title: "لما تضعف", sheikh: "ghafoor", q: "عبد الغفور الفتور", id: "" },
    { title: "ثبات القلب", sheikh: "ghafoor", q: "عبد الغفور الثبات", id: "" },
    { title: "قوّي إيمانك", sheikh: "ghafoor", q: "عبد الغفور زيادة الإيمان", id: "" }
  ]}
];

// قصص مؤثرة: scene = وصف المشهد المرسوم لو مفيش فيديو
const STORIES = [
  { key: "qatel100", title: "قاتل المئة نفس", source: "حديث صحيح (البخاري ومسلم)", icon: "🌅",
    text: "رجل قتل تسعة وتسعين نفسًا، وسأل عن أعلم أهل الأرض فدلّوه على راهب فقال له: ليس لك توبة، فقتله فأكمل مئة. ثم سأل عالمًا فقال له: ومن يحول بينك وبين التوبة؟ اخرج من أرض السوء إلى أرض أهلها صالحون. مشى الرجل ومات في الطريق، فاختصم فيه ملائكة الرحمة وملائكة العذاب، فقيسَ ما بين الأرضين فوُجد أقرب إلى الأرض التي قصدها، فقبضته ملائكة الرحمة.",
    lesson: "مهما كان ذنبك، الصدق في الرجوع وتغيير البيئة أول الطريق.",
    scene: "رجل يمشي في صحراء باتجاه شروق الشمس وخلفه ظل أسود يبتعد", q: "قصة قاتل المئة نفس", id: "" },
  { key: "cave3", title: "أصحاب الغار", source: "حديث صحيح (البخاري ومسلم)", icon: "🪨",
    text: "ثلاثة دخلوا غارًا فانطبقت عليهم صخرة. دعا كل واحد منهم بعمل خالص لله: الأول ببرّه بوالديه، والثاني بعفّته عن الحرام وهو قادر عليه، والثالث بأمانته في أجر أجير. في كل دعوة تحرّكت الصخرة قليلًا حتى انفرجت وخرجوا.",
    lesson: "ثباتك على ترك الحرام وأنت قادر عليه عمل بيفرّج الله به كربك.",
    scene: "ثلاثة ظلال داخل غار وصخرة كبيرة تتحرك ويدخل منها ضوء", q: "قصة أصحاب الغار", id: "" },
  { key: "yunus", title: "يونس في بطن الحوت", source: "القرآن (الأنبياء 87-88)", icon: "🐋",
    text: "ذهب يونس عليه السلام مغاضبًا فالتقمه الحوت، فنادى في الظلمات: لا إله إلا أنت سبحانك إني كنت من الظالمين. فاستجاب الله له ونجّاه من الغم.",
    lesson: "حتى في أظلم لحظة، الاعتراف والرجوع لله بينجّي.",
    scene: "ظلمة بحر عميق وضوء صغير داخل بطن حوت ورجل ساجد", q: "قصة سيدنا يونس", id: "" },
  { key: "sea", title: "انشقاق البحر", source: "القرآن (الشعراء 61-66)", icon: "🌊",
    text: "لما لحق فرعون بموسى وقومه وصاروا بين البحر والجيش، قال أصحاب موسى: إنا لمدركون. قال موسى: كلا إن معي ربي سيهدين. فأوحى الله له أن اضرب بعصاك البحر فانفلق، وكان كل فرق كالطود العظيم.",
    lesson: "لما تحس إن الطريق مقفول، ثق إن ربنا معاك.",
    scene: "رجل بعصا وأمامه بحر انشق إلى جدارين عاليين وطريق في المنتصف", q: "قصة انشقاق البحر موسى", id: "" },
  { key: "adam", title: "آدم والتوبة", source: "القرآن (الأعراف 23)", icon: "🍃",
    text: "أخطأ آدم وزوجه فقالا: ربنا ظلمنا أنفسنا وإن لم تغفر لنا وترحمنا لنكونن من الخاسرين. فتاب الله عليهما.",
    lesson: "الفرق بين آدم وإبليس: آدم اعترف ورجع، وإبليس عاند.",
    scene: "رجل وامرأة وسط أشجار ويدين مرفوعتين للسماء", q: "قصة توبة آدم", id: "" },
  { key: "dog", title: "الرجل والكلب", source: "حديث صحيح (البخاري)", icon: "💧",
    text: "رجل رأى كلبًا يلهث من العطش، فنزل بئرًا وملأ خفّه ماءً وسقاه، فشكر الله له فغفر له.",
    lesson: "عمل صغير بإخلاص ممكن يغيّر مصيرك.",
    scene: "رجل على حافة بئر يسقي كلبًا من خفّه", q: "قصة الرجل الذي سقى الكلب", id: "" },
  { key: "kaab", title: "كعب بن مالك وتوبة الخمسين ليلة", source: "حديث صحيح (البخاري ومسلم) + التوبة 118", icon: "🌙",
    text: "تخلّف كعب بن مالك عن غزوة تبوك بغير عذر، فقاطعه الناس خمسين ليلة وضاقت عليه الأرض بما رحبت. صدق مع النبي ﷺ ولم يكذب كما كذب غيره، ثم نزل القرآن بقبول توبته.",
    lesson: "الصدق مع الله والناس مفتاح التوبة حتى لو كان صعب.",
    scene: "رجل وحده على جبل ليلًا والقمر فوقه وسماء مفتوحة", q: "قصة كعب بن مالك توبة", id: "" },
  { key: "yusuf", title: "يوسف والثبات أمام الفتنة", source: "القرآن (يوسف 23-24)", icon: "🛡️",
    text: "راودته امرأة العزيز وغلّقت الأبواب وقالت: هيت لك. قال: معاذ الله، إنه ربي أحسن مثواي. فصرف الله عنه السوء والفحشاء.",
    lesson: "الهروب من مكان الفتنة وتذكّر فضل الله عليك أقوى سلاح.",
    scene: "شاب يجري ناحية باب مفتوح ونور خارج منه وأبواب مغلقة خلفه", q: "قصة يوسف والثبات امام الفتنة", id: "" },
  { key: "thalatha", title: "الثلاثة الذين ابتلاهم الله", source: "حديث صحيح (البخاري ومسلم)", icon: "⏳",
    text: "أبرص وأقرع وأعمى اختبرهم الله بملك جاءهم بالشفاء والمال. الأعمى شكر ونسب النعمة لله فبقيت له، وغيره جحد فعاد لحاله.",
    lesson: "الشكر يحفظ النعمة والجحود بيضيّعها.",
    scene: "ثلاث شخصيات ويد من نور تلمس واحدًا وتغادر الباقين", q: "قصة الأبرص والأقرع والأعمى", id: "" },,
  { key: "kahf", title: "أصحاب الكهف", source: "القرآن (الكهف 10-13)", icon: "🕯️",
    text: "فتية شباب آمنوا بربهم وسط مجتمع كله شرك، فهربوا بدينهم إلى الكهف وقالوا: ربنا آتنا من لدنك رحمة وهيّئ لنا من أمرنا رشدًا. فزادهم الله هدى وحفظهم.",
    lesson: "الثبات على الدين وأنت شاب وسط ضغط الناس بيستاهل كل التعب.",
    scene: "ثلاثة شباب داخل كهف ونور أخضر هادئ ونجوم من فتحة الكهف", q: "قصة أصحاب الكهف", id: "" },
  { key: "ibrahim", title: "إبراهيم والنار", source: "القرآن (الأنبياء 68-69)", icon: "🔥",
    text: "ألقاه قومه في النار لأنه كسر أصنامهم، فقال الله: يا نار كوني بردًا وسلامًا على إبراهيم.",
    lesson: "اللي مع الله ما يخافش من أي نار.",
    scene: "رجل واقف وسط لهب يتحول إلى ورود وضوء أزرق", q: "قصة إبراهيم والنار", id: "" },
  { key: "ghulam", title: "الغلام والراهب", source: "حديث صحيح (مسلم)", icon: "🏹",
    text: "غلام آمن بالله وصبر على الابتلاء حتى دلّ الملك على طريقة قتله وهي أن يقول: بسم الله رب الغلام. فآمن الناس كلهم.",
    lesson: "ثباتك ممكن يكون سبب هداية ناس كتير.",
    scene: "غلام على تلة وسهم وحشد ناس يرفعون أيديهم للسماء", q: "قصة الغلام والراهب", id: "" },
];

// خطوات التوبة (حلول)
const TAWBA_STEPS = [
  { n: 1, title: "أقلع فورًا", text: "قوم من مكان الذنب وغيّر المكان أو الجهاز." },
  { n: 2, title: "اندم بصدق", text: "حسّ بالأسف من قلبك، مش بس بلسانك." },
  { n: 3, title: "اعزم ما ترجعش", text: "انوِ ما تعودش، ولو وقعت ابدأ من تاني." },
  { n: 4, title: "اتبع السيئة بحسنة", text: "صلاة ركعتين أو صدقة بعد الذنب مباشرة." },
  { n: 5, title: "اقطع الأسباب", text: "امسح اللي بيجرّك، واصحب ناس تفكّرك بربنا." },
  { n: 6, title: "ارجع الحقوق", text: "لو فيه حق لحد، رجّعه أو اطلب السماح." }
];

// رسائل لحظة الانتكاسة: تظهر بعشوائية
const RELAPSE_MESSAGES = [
  { text: "قُلْ يَا عِبَادِيَ الَّذِينَ أَسْرَفُوا عَلَىٰ أَنفُسِهِمْ لَا تَقْنَطُوا مِن رَّحْمَةِ اللَّهِ", ref: "الزمر 53" },
  { text: "كل ابن آدم خطّاء، وخير الخطّائين التوّابون", ref: "حديث حسن (الترمذي وابن ماجه)" },
  { text: "التائب من الذنب كمن لا ذنب له", ref: "حديث حسن (ابن ماجه)" },
  { text: "وَالَّذِينَ إِذَا فَعَلُوا فَاحِشَةً أَوْ ظَلَمُوا أَنفُسَهُمْ ذَكَرُوا اللَّهَ فَاسْتَغْفَرُوا لِذُنُوبِهِمْ", ref: "آل عمران 135" },
  { text: "اتبع السيئة الحسنة تمحها", ref: "حديث حسن (الترمذي)" },
  { text: "إِنَّ الْحَسَنَاتِ يُذْهِبْنَ السَّيِّئَاتِ", ref: "هود 114" },
  { text: "وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا", ref: "الطلاق 2" },
  { text: "فَإِنَّ مَعَ الْعُسْرِ يُسْرًا، إِنَّ مَعَ الْعُسْرِ يُسْرًا", ref: "الشرح 5-6" },
  { text: "أحب الأعمال إلى الله أدومها وإن قلّ", ref: "متفق عليه" },
  { text: "يا ابن آدم إنك ما دعوتني ورجوتني غفرت لك على ما كان منك ولا أبالي", ref: "حديث حسن (الترمذي)" }
];

// أدعية وأذكار لوقت الضعف
const DUAS = [
  { title: "سيد الاستغفار", text: "اللهم أنت ربي لا إله إلا أنت، خلقتني وأنا عبدك، وأنا على عهدك ووعدك ما استطعت، أعوذ بك من شر ما صنعت، أبوء لك بنعمتك علي، وأبوء بذنبي فاغفر لي فإنه لا يغفر الذنوب إلا أنت", ref: "البخاري" },
  { title: "دعاء يونس", text: "لا إله إلا أنت سبحانك إني كنت من الظالمين", ref: "الأنبياء 87" },
  { title: "دعاء آدم", text: "ربنا ظلمنا أنفسنا وإن لم تغفر لنا وترحمنا لنكونن من الخاسرين", ref: "الأعراف 23" },
  { title: "تثبيت القلب", text: "يا مقلّب القلوب ثبّت قلبي على دينك", ref: "الترمذي" },
  { title: "من الكسل", text: "اللهم إني أعوذ بك من العجز والكسل", ref: "البخاري ومسلم" }
];

// "اعمل دلوقتي": خطوات سريعة في لحظة الضعف
const QUICK_ACTIONS = [
  { icon: "🚿", text: "قوم اتوضّى فورًا" },
  { icon: "🕌", text: "صلّ ركعتين" },
  { icon: "📿", text: "استغفر مئة مرة" },
  { icon: "🚶", text: "غيّر مكانك واخرج من الأوضة" },
  { icon: "📞", text: "كلّم صاحب صالح" },
  { icon: "💧", text: "اشرب مية وامشي خمس دقايق" }
];

// ===== الشورتس =====
// كل شورت: sheikh + topic + title + q (بحث) + id (كود الفيديو من الرابط، فاضي لحد ما تملاه)
// لو id اتملى، الفيديو بيتفتح جوه التطبيق عن طريق embed (رابط جاهز في الحقل)
const SHORT_TOPICS = ["توبة", "فتور", "شباب", "ذكاء", "قصص", "صلاة", "غض بصر", "أمل"];

const _sh = (sheikh, topic, title) => ({
  sheikh, topic, title,
  q: SHEIKHS.find(x => x.key === sheikh).name + " " + title + " شورتس",
  id: ""
});

const SHORTS = [
  _sh("amgad", "توبة", "ازاي ترجع بعد الذنب"), _sh("amgad", "فتور", "لما تحس إنك مش قادر"), _sh("amgad", "شباب", "نصيحة للشباب"),
  _sh("amer", "توبة", "ربنا بيقبل توبتك"), _sh("amer", "فتور", "الفتور بعد رمضان"), _sh("amer", "ذكاء", "تفكر في خلق الله"),
  _sh("arabi", "توبة", "الرجوع بعد الانتكاسة"), _sh("arabi", "قصص", "قصة مؤثرة"), _sh("arabi", "أمل", "ماتيأسش"),
  _sh("monem", "توبة", "باب التوبة مفتوح"), _sh("monem", "ذكاء", "الحكمة من الابتلاء"), _sh("monem", "صلاة", "الخشوع في الصلاة"),
  _sh("ghaleez", "شباب", "كلمة للشباب"), _sh("ghaleez", "توبة", "لحظة الضعف"), _sh("ghaleez", "غض بصر", "غض البصر"),
  _sh("ali", "توبة", "ماتقنطش من رحمة ربنا"), _sh("ali", "غض بصر", "علاج الشهوة"), _sh("ali", "أمل", "فرج قريب"),
  _sh("samir", "قصص", "قصص للتأثر"), _sh("samir", "توبة", "الندم الصادق"), _sh("samir", "فتور", "ازاي تكمل"),
  _sh("sherif", "ذكاء", "الإيمان واليقين"), _sh("sherif", "شباب", "الشاب والدين"), _sh("sherif", "توبة", "ابدأ من جديد"),
  _sh("ghafoor", "توبة", "باب الرجوع"), _sh("ghafoor", "فتور", "لما تضعف"), _sh("ghafoor", "شباب", "للشباب"),
  _sh("ghafoor", "ذكاء", "تدبر وفهم"), _sh("ghafoor", "قصص", "قصة وعبرة"), _sh("ghafoor", "صلاة", "الصلاة"),
  _sh("ghafoor", "غض بصر", "طهارة النظر"), _sh("ghafoor", "أمل", "رحمة ربنا"),
  _sh("wakeel", "توبة", "التوبة"), _sh("wakeel", "شباب", "كلمة للشباب"), _sh("wakeel", "أمل", "الأمل في الله")
];

// رابط التشغيل جوه التطبيق + رابط الصورة المصغرة (بيشتغلوا لما id يتملى)
const shortEmbed = (id) => id ? "https://www.youtube.com/embed/" + id + "?autoplay=1&playsinline=1&rel=0&modestbranding=1&loop=1&playlist=" + id : "";
const shortThumb = (id) => id ? "https://i.ytimg.com/vi/" + id + "/hqdefault.jpg" : "";
const shortOpenExternal = (sh) => sh.id ? "https://www.youtube.com/shorts/" + sh.id : yt(sh.q);

// فلترة: اختار شيخ أو موضوع، والمفضل أول
const shortsFor = ({ sheikh, topic, favorite } = {}) => SHORTS
  .filter(x => (!sheikh || x.sheikh === sheikh) && (!topic || x.topic === topic))
  .sort((a, b) => (b.sheikh === favorite) - (a.sheikh === favorite));

// ===== مصادر إضافية (يوتيوب / تيك توك / إنستجرام / تليجرام / أي موقع) =====
// الصق هنا حسابات كل شيخ لما تعرفها (من غير @). فاضي = بيستخدم البحث.
const ACCOUNTS = {
  amgad:   { youtube: "", tiktok: "", instagram: "", telegram: "" },
  amer:    { youtube: "", tiktok: "", instagram: "", telegram: "" },
  arabi:   { youtube: "", tiktok: "", instagram: "", telegram: "" },
  monem:   { youtube: "", tiktok: "", instagram: "", telegram: "" },
  ghaleez: { youtube: "", tiktok: "", instagram: "", telegram: "" },
  ali:     { youtube: "", tiktok: "", instagram: "", telegram: "" },
  samir:   { youtube: "", tiktok: "", instagram: "", telegram: "" },
  sherif:  { youtube: "", tiktok: "", instagram: "", telegram: "" },
  wakeel:  { youtube: "", tiktok: "", instagram: "", telegram: "" },
  ghafoor: { youtube: "", tiktok: "", instagram: "", telegram: "" }
};

// أي عنصر: { platform, ref }  ref = كود الفيديو/البوست حسب المنصة
//  youtube:   كود الفيديو (بعد v= أو shorts/)
//  tiktok:    رقم الفيديو (الأرقام الطويلة في آخر الرابط)
//  instagram: كود الريل أو البوست (بعد /reel/ أو /p/)
//  telegram:  "اسمالقناة/رقمالبوست"
//  web:       رابط كامل لأي صفحة
// الدالة دي بترجع رابط يتفتح جوه التطبيق (iframe) لكل منصة.
const inAppUrl = (it) => {
  if (!it || !it.ref) return "";
  switch (it.platform || "youtube") {
    case "youtube":   return "https://www.youtube.com/embed/" + it.ref + "?autoplay=1&playsinline=1&rel=0&modestbranding=1";
    case "tiktok":    return "https://www.tiktok.com/embed/v2/" + it.ref;
    case "instagram": return "https://www.instagram.com/" + (it.kind || "reel") + "/" + it.ref + "/embed";
    case "telegram":  return "https://t.me/" + it.ref + "?embed=1&mode=tme";
    case "playlist":  return "https://www.youtube.com/embed/videoseries?list=" + it.ref + "&autoplay=1&playsinline=1&rel=0";
    case "web":       return it.ref; // بيشتغل بس لو الموقع مسموح يتفتح داخل iframe
    default:          return "";
  }
};

// رابط البحث لما ref لسه فاضي (بيتفتح برا لحد ما تملاه)
const searchUrl = (it) => {
  const q = encodeURIComponent(it.q || it.title || "");
  switch (it.platform || "youtube") {
    case "tiktok":    return "https://www.tiktok.com/search?q=" + q;
    case "instagram": return "https://www.google.com/search?q=" + q + "+site%3Ainstagram.com";
    case "telegram":  return "https://www.google.com/search?q=" + q + "+site%3At.me";
    case "web":       return "https://www.google.com/search?q=" + q;
    default:          return "https://www.youtube.com/results?search_query=" + q;
  }
};
const openTarget = (it) => ({ inApp: inAppUrl(it), fallback: searchUrl(it) });

// ===== فيديوهات إضافية =====
const _v = (sheikh, title, topic) => ({
  title, sheikh, topic, platform: "youtube", ref: "",
  q: SHEIKHS.find(x => x.key === sheikh).name + " " + title
});

const EXTRA_VIDEOS = [
  // سمير مصطفى: فيديوهات كتير
  ...["قصص التوابين", "كيف تتوب من الذنب المتكرر", "الصبر على البلاء", "أمل بعد اليأس", "قصص الصحابة للشباب",
      "قصة يوسف", "قصة موسى", "قصة إبراهيم", "قصة أيوب", "قصة يونس", "الرزق والتوكل", "بر الوالدين",
      "الخشوع في الصلاة", "قيام الليل", "الدعاء المستجاب", "الصحبة الصالحة", "علاج الفتور", "تربية النفس"]
    .map(t => _v("samir", t, "samir")),
  ..."توبة|فتور|شباب|قصص|صلاة".split("|").flatMap(t => [_v("amgad", t + " (1)", t), _v("amgad", t + " (2)", t)]),
  ..."توبة|فتور|شباب|قصص|صلاة".split("|").flatMap(t => [_v("sherif", t + " (1)", t), _v("sherif", t + " (2)", t)]),
  ..."توبة|فتور|شباب|قصص|صلاة".split("|").flatMap(t => [_v("arabi", t + " (1)", t), _v("arabi", t + " (2)", t)]),
  ..."توبة|فتور|شباب|قصص|صلاة".split("|").flatMap(t => [_v("amer", t + " (1)", t), _v("amer", t + " (2)", t)]),
  ..."توبة|فتور|شباب|قصص|صلاة".split("|").flatMap(t => [_v("wakeel", t + " (1)", t), _v("wakeel", t + " (2)", t)]),
  ..."توبة|فتور|شباب|قصص|صلاة".split("|").flatMap(t => [_v("ghaleez", t + " (1)", t), _v("ghaleez", t + " (2)", t)])
];

// ===== شورتس إضافية من منصات مختلفة =====
const _sx = (platform, sheikh, topic, title) => ({
  platform, sheikh, topic, title, ref: "",
  q: SHEIKHS.find(x => x.key === sheikh).name + " " + title
});
const PLATFORMS = ["youtube", "tiktok", "instagram", "telegram"];
const SHORT_TITLES = ["كلمة قصيرة", "موعظة", "نصيحة", "سؤال وجواب", "قصة سريعة", "تذكير"];

const EXTRA_SHORTS = [];
SHEIKHS.forEach(sh => {
  const n = sh.key === "samir" ? 4 : 2; // سمير مصطفى أكتر
  PLATFORMS.forEach(pl => {
    for (let i = 0; i < n; i++) {
      const t = SHORT_TITLES[(i + PLATFORMS.indexOf(pl)) % SHORT_TITLES.length];
      EXTRA_SHORTS.push(_sx(pl, sh.key, SHORT_TOPICS[(i + PLATFORMS.indexOf(pl)) % SHORT_TOPICS.length], t));
    }
  });
});

// كل الشورتس (القديمة + الإضافية) في قائمة واحدة، المفضل أول
const allShorts = ({ sheikh, topic, platform, favorite } = {}) =>
  [...SHORTS.map(x => ({ platform: "youtube", ref: x.id || "", ...x })), ...EXTRA_SHORTS]
    .filter(x => (!sheikh || x.sheikh === sheikh) && (!topic || x.topic === topic) && (!platform || x.platform === platform))
    .sort((a, b) => (b.sheikh === favorite) - (a.sheikh === favorite));

// الشيوخ الأساسيين (للترتيب والتوصيات)
const CORE_SHEIKHS = ["amgad", "sherif", "arabi", "amer", "samir", "wakeel", "ghaleez"];

// ===== داتا حقيقية (اتجمعت من نتائج بحث، ومش متجرّبة جوه تطبيقك) =====
// بعض الفيديوهات ممكن صاحبها يمنع التضمين، ساعتها هتفتح برا تلقائي.
const REAL_CHANNELS = {
  samir:   { channelId: "UCch6Y4YgssEzMa4Q5zw4xjw", youtube: "samirmoustafa" },
  arabi:   { channelId: "UCyc-c-r8RTLNsp1Uv2DNrSg" },
  amgad:   { channelId: "UCoFflcHXUS78RlNMQJDbNGw", youtube: "amgad_samir", telegram: "amgadsamir" },
  amer:    { channelId: "UCAPzspa_3QnQwk56Sv-qm-Q" },
  ghaleez: { youtube: "mohelghaleez" }
};
Object.entries(REAL_CHANNELS).forEach(([k, v]) => {
  const sh = SHEIKHS.find(x => x.key === k); if (sh && v.channelId) sh.channelId = v.channelId;
  if (ACCOUNTS[k]) Object.assign(ACCOUNTS[k], { youtube: v.youtube || ACCOUNTS[k].youtube, telegram: v.telegram || ACCOUNTS[k].telegram });
});

const _r = (sheikh, title, ref, extra = {}) => ({ sheikh, title, ref, platform: "youtube", q: title, ...extra });

const REAL_VIDEOS = [
  // سمير مصطفى
  _r("samir", "شرح صحيح مسلم: كتاب التوبة (المجلس الأول)", "RqX11tiPuTg", { topic: "توبة" }),
  _r("samir", "قصة توبة شاب أسرف على نفسه", "7pXT3EA5oqQ", { topic: "قصص" }),
  _r("samir", "التوبة (يوم عرفة)", "6evB0hHEUxw", { topic: "توبة" }),
  _r("samir", "التوبة", "IlZCJ5za_i0", { topic: "توبة" }),
  _r("samir", "الصدق في إرادة التوبة", "vE_E3IC61Go", { topic: "توبة" }),
  _r("samir", "من يسألني فأعطيه؟ ومن يتوب اليوم فأغفر له؟", "GhCy5yqHhd4", { topic: "أمل" }),
  _r("samir", "متى تقف بالباب؟ (موعظة عن التوبة)", "HmiDAZnY2ms", { topic: "توبة" }),
  // أحمد العربي (سلسلة فاهم)
  _r("arabi", "فاهم 36: أول ما يحاسب به العبد الصلاة", "63_AOCldyXo", { topic: "صلاة" }),
  _r("arabi", "فاهم 37: القرآن", "hK-9Be0prrA", { topic: "ذكاء" }),
  _r("arabi", "فاهم 38: الاعتزال", "si994Z9BAr8", { topic: "فتور" }),
  _r("arabi", "كيف نصل إلى القلب السليم؟", "ZWraKKwNfpE", { topic: "فتور" }),
  // شريف علي وأحمد عامر
  _r("sherif", "التوبة: بودكاست وعي (مع أحمد عامر)", "uL2grlrvSdI", { topic: "توبة", also: "amer" }),
  // أمجد سمير (من قناته على تليجرام)
  _r("amgad", "فيديو من قناة أمجد سمير", "9RaJ8Ln-IQQ", { topic: "شباب" }),
  _r("amgad", "فيديو من قناة أمجد سمير", "SG0OTWDOYbY", { topic: "شباب" }),
  _r("amgad", "فيديو من قناة أمجد سمير", "f0AHyAhNulc", { topic: "شباب" }),
  _r("amgad", "عقلٌ سليم: كيف نفكر وقت الأزمات؟", "dATujS_41YU", { topic: "ذكاء" }),
  // محمد الغليظ
  _r("ghaleez", "القرآن: مقطع مؤثر", "gtKC6Xa_RnU", { topic: "قصص" }),
  _r("ghaleez", "كلمة مؤثرة (بث مباشر)", "06_UhSRTxEg", { topic: "شباب" })
];

const REAL_SHORTS = [
  _r("amgad", "شورت من قناة أمجد سمير", "juZ-w5Lb-rY", { topic: "شباب" }),
  _r("amgad", "شورت من قناة أمجد سمير", "3H7_G_hnLeE", { topic: "توبة" }),
  _r("amgad", "شورت من قناة أمجد سمير", "Hxz9g5Z6MMg", { topic: "ذكاء" }),
  _r("amgad", "شورت من قناة أمجد سمير", "YNwIV93Knx0", { topic: "فتور" }),
  _r("ghaleez", "أول خطبة للشيخ محمد الغليظ", "odBtR8KfDFw", { topic: "شباب" })
];

// ===== تعبئة الأماكن الفاضية تلقائيًا (من غير مفتاح) =====
// أي شيخ عنده channelId: بنشغّل قائمة فيديوهاته الكاملة وقائمة شورتساته جوه التطبيق.
const playlistItems = () => SHEIKHS.filter(x => x.channelId).flatMap(x => ([
  { sheikh: x.key, platform: "playlist", ref: "UU" + x.channelId.slice(2),   title: "كل فيديوهات " + x.name, topic: "عام", q: x.name, kind: "videos" },
  { sheikh: x.key, platform: "playlist", ref: "UUSH" + x.channelId.slice(2), title: "شورتس " + x.name,       topic: "عام", q: x.name, kind: "shorts" }
]));

// الأولوية: عنصر حقيقي قابل للتشغيل > قائمة الشيخ > (آخر حاجة) بحث
// playable:true بيمنع ظهور القمر المستني (عناصر من غير ref)
const shortsQueue = ({ sheikh, topic, platform, favorite, playable = true } = {}) => {
  const base = [...REAL_SHORTS, ...SHORTS.filter(x => x.id).map(x => ({ platform: "youtube", ref: x.id, ...x })),
                ...playlistItems().filter(x => x.kind === "shorts"), ...EXTRA_SHORTS, ...SHORTS.filter(x => !x.id)];
  const seen = new Set();
  return base
    .filter(x => (!playable || x.ref))
    .filter(x => (!sheikh || x.sheikh === sheikh || x.also === sheikh) && (!topic || x.topic === topic || x.topic === "عام") && (!platform || x.platform === platform))
    .filter(x => { const k = x.platform + ":" + x.ref + ":" + x.title; if (x.ref && seen.has(k)) return false; seen.add(k); return true; })
    .sort((a, b) => (b.sheikh === favorite) - (a.sheikh === favorite));
};
const videosQueue = ({ sheikh, topic, favorite, playable = true } = {}) =>
  [...REAL_VIDEOS, ...playlistItems().filter(x => x.kind === "videos"), ...EXTRA_VIDEOS]
    .filter(x => (!playable || x.ref))
    .filter(x => (!sheikh || x.sheikh === sheikh || x.also === sheikh) && (!topic || x.topic === topic || x.topic === "عام"))
    .sort((a, b) => (b.sheikh === favorite) - (a.sheikh === favorite));

// ===== تسريع الشورتس =====
// المشكلة: تحميل مشغّل كامل لكل شورت بيبطّأ. الحل: صورة مصغرة فورية + تحميل المشغّل لما تضغط + تجهيز اللي بعده.
const SHORTS_PERF = {
  thumbFirst: true,   // اعرض shortThumb(ref) الأول، وحمّل iframe لما المستخدم يوقف عليه
  preloadAhead: 1,    // جهّز شورت واحد بس قدّام
  keepMounted: 2,     // ما تسيبش غير 2 iframe شغالين في نفس الوقت
  nocookieHost: "https://www.youtube-nocookie.com/embed/", // أخف وأسرع في التحميل
  lazy: true          // loading="lazy" على كل iframe
};
const fastEmbed = (it) => it && it.platform === "youtube" && it.ref
  ? SHORTS_PERF.nocookieHost + it.ref + "?autoplay=1&playsinline=1&rel=0&modestbranding=1&loop=1&playlist=" + it.ref
  : inAppUrl(it);

// ===== الواجهة الرئيسية: الدواير + الاقتراحات (داتا بس) =====
// الأولوية في الوش: أحمد العربي، أمجد سمير، سمير مصطفى (الوزن = نصيبه من الاقتراحات)
const HOME_PRIORITY = { arabi: 3, amgad: 3, samir: 3 };   // الباقي وزنه 1
const HOME_TOP_SHARE = 0.7;                                // 70% من الاقتراحات للتلاتة دول

// ألوان الدواير لو مفيش صورة (نفس فكرة الدواير الملونة بحرف الاسم في التصميم التاني)
const CIRCLE_COLORS = {
  arabi:   ["#c9a227", "#7a5c00"], amgad:   ["#1f8a5b", "#0d4a30"], samir:   ["#3b5bdb", "#1b2a6b"],
  amer:    ["#a33b6b", "#5a1a38"], sherif:  ["#d9701f", "#6b3208"], ghaleez: ["#2b8aa8", "#0f3f50"],
  ali:     ["#7a4bb8", "#3b1f60"], monem:   ["#5b8f2a", "#2a4510"], wakeel:  ["#b8453b", "#5c1c16"],
  ghafoor: ["#3f7f8f", "#173e48"]
};

// صورة الدايرة: صورة مصغرة من أول فيديو حقيقي للشيخ، وإلا صورته المرفوعة، وإلا حرف ملون
const circleImage = (key) => {
  const v = [...REAL_VIDEOS, ...REAL_SHORTS].find(x => x.sheikh === key && x.ref);
  if (v) return shortThumb(v.ref);
  const sh = SHEIKHS.find(x => x.key === key);
  return sh ? sh.photo : "";
};
const circleFallback = (key) => {
  const sh = SHEIKHS.find(x => x.key === key) || { name: "؟" };
  const c = CIRCLE_COLORS[key] || ["#c9a227", "#5c4a00"];
  return { gradient: `linear-gradient(135deg, ${c[0]}, ${c[1]})`, letter: sh.name.trim().charAt(0) };
};

// ترتيب الدواير: الكل، المفضل (بنجمة)، التلاتة الأساسيين، وبعدهم الباقي
const homeCircles = (favorite) => {
  const top = Object.keys(HOME_PRIORITY);
  const order = [...new Set([favorite, ...top, ...SHEIKHS.map(x => x.key)].filter(Boolean))];
  return [{ key: "all", name: "الكل", icon: "✦" }].concat(order.map(k => ({
    key: k,
    name: SHEIKHS.find(x => x.key === k).name,
    image: circleImage(k),
    fallback: circleFallback(k),
    star: k === favorite
  })));
};

// اقتراحات الوش: بتوزّع بالتبادل (واحد من كل شيخ) عشان ما يطلعش شيخ واحد ورا بعض
const homeFeed = ({ favorite, count = 24 } = {}) => {
  const w = (k) => (HOME_PRIORITY[k] || 1) + (k === favorite ? 2 : 0);
  const keys = SHEIKHS.map(x => x.key);
  const pool = {};
  keys.forEach(k => { pool[k] = [...videosQueue({ sheikh: k }), ...shortsQueue({ sheikh: k })].filter(x => x.ref); });
  const out = [], used = {};
  let guard = 0;
  while (out.length < count && guard++ < count * 20) {
    const top = keys.filter(k => HOME_PRIORITY[k] || k === favorite);
    const rest = keys.filter(k => !top.includes(k));
    const group = Math.random() < HOME_TOP_SHARE || !rest.length ? top : rest;
    const bag = group.flatMap(k => Array(w(k)).fill(k));
    const k = bag[Math.floor(Math.random() * bag.length)];
    const i = used[k] || 0;
    if (pool[k] && pool[k][i]) { out.push(pool[k][i]); used[k] = i + 1; }
    else if (group === top && top.every(t => !pool[t] || (used[t] || 0) >= pool[t].length)) break;
  }
  return out;
};

// ===== جلب تلقائي من يوتيوب (داتا بس، من غير واجهة) =====
// حط مفتاحك في YT_KEY

const YT_KEY = ""; // مفتاح YouTube Data API v3 (قيّده بدومين موقعك من Google Cloud)
const YT_TTL = 24 * 60 * 60 * 1000; // الكاش يوم كامل عشان الكوتا

const YT = {
  api: "https://www.googleapis.com/youtube/v3/",

  // كاش في المتصفح
  _get(k) {
    try {
      const o = JSON.parse(localStorage.getItem("yt:" + k));
      return o && Date.now() - o.t < YT_TTL ? o.v : null;
    } catch (e) { return null; }
  },
  _set(k, v) {
    try { localStorage.setItem("yt:" + k, JSON.stringify({ t: Date.now(), v })); } catch (e) {}
  },
  async _call(path, params) {
    if (!YT_KEY) throw new Error("no-key");
    const u = new URL(this.api + path);
    Object.entries({ ...params, key: YT_KEY }).forEach(([a, b]) => u.searchParams.set(a, b));
    const r = await fetch(u);
    if (!r.ok) throw new Error("yt-" + r.status);
    return r.json();
  },

  // لو كتبت channelId في SHEIKHS بإيدك يتقدم على البحث (أدق)
  async resolveChannel(sheikh) {
    if (sheikh.channelId) return sheikh.channelId;
    const c = this._get("ch:" + sheikh.key);
    if (c) return c;
    const d = await this._call("search", { part: "snippet", type: "channel", q: sheikh.name, maxResults: 1 });
    const id = d.items && d.items[0] && d.items[0].snippet.channelId;
    if (id) this._set("ch:" + sheikh.key, id);
    return id || "";
  },

  // بيانات الشيخ: اسم، وصف، صورة، بانر، مشتركين، عدد فيديوهات، مشاهدات، تاريخ، بلد، روابط
  async getInfo(sheikh) {
    const c = this._get("info:" + sheikh.key);
    if (c) return c;
    const id = await this.resolveChannel(sheikh);
    if (!id) return null;
    const d = await this._call("channels", { part: "snippet,statistics,brandingSettings", id });
    const x = d.items && d.items[0];
    if (!x) return null;
    const info = {
      channelId: id,
      title: x.snippet.title,
      description: x.snippet.description,
      avatar: (x.snippet.thumbnails.high || x.snippet.thumbnails.default).url,
      banner: x.brandingSettings && x.brandingSettings.image ? x.brandingSettings.image.bannerExternalUrl : "",
      country: x.snippet.country || "",
      since: x.snippet.publishedAt ? x.snippet.publishedAt.slice(0, 10) : "",
      subs: x.statistics.hiddenSubscriberCount ? null : +x.statistics.subscriberCount,
      videos: +x.statistics.videoCount,
      views: +x.statistics.viewCount,
      url: "https://www.youtube.com/channel/" + id
    };
    this._set("info:" + sheikh.key, info);
    return info;
  },

  _items(list) {
    return (list.items || []).map(i => ({
      id: i.contentDetails ? i.contentDetails.videoId : i.snippet.resourceId.videoId,
      title: i.snippet.title,
      thumb: (i.snippet.thumbnails.medium || i.snippet.thumbnails.default || {}).url || "",
      date: (i.contentDetails && i.contentDetails.videoPublishedAt || i.snippet.publishedAt || "").slice(0, 10)
    }));
  },

  // صورة الشيخ: صورة القناة الرسمية من يوتيوب لو فيه مفتاح، وإلا صورتك المرفوعة، وإلا حرف ذهبي
  async getPhoto(sheikh) {
    try {
      const info = await this.getInfo(sheikh);
      if (info && info.avatar) return info.avatar;
    } catch (e) {}
    return sheikh.photo || avatarFallback(sheikh.name);
  },

  // آخر فيديوهات الشيخ (قائمة الرفع UU + بقية الـ id)
  async getVideos(sheikh, max = 20) {
    const k = "vid:" + sheikh.key;
    const c = this._get(k);
    if (c) return c;
    const id = await this.resolveChannel(sheikh);
    if (!id) return [];
    const d = await this._call("playlistItems", { part: "snippet,contentDetails", playlistId: "UU" + id.slice(2), maxResults: max });
    const v = this._items(d);
    this._set(k, v);
    return v;
  },

  // شورتس الشيخ (قائمة UUSH)
  async getShorts(sheikh, max = 15) {
    const k = "sh:" + sheikh.key;
    const c = this._get(k);
    if (c) return c;
    const id = await this.resolveChannel(sheikh);
    if (!id) return [];
    const d = await this._call("playlistItems", { part: "snippet,contentDetails", playlistId: "UUSH" + id.slice(2), maxResults: max });
    const v = this._items(d).map(s => ({ ...s, sheikh: sheikh.key }));
    this._set(k, v);
    return v;
  },

  // شورتس من كل الشيوخ مخلوطة، المفضل أكتر
  async shortsFeed(favoriteKey, total = 40) {
    const lists = await Promise.all(SHEIKHS.map(s => this.getShorts(s).catch(() => [])));
    const fav = [], rest = [];
    lists.flat().forEach(v => (v.sheikh === favoriteKey ? fav : rest).push(v));
    const shuffle = a => a.sort(() => Math.random() - 0.5);
    const nFav = Math.round(total * RECOMMEND_RULE.fromFavorite);
    return shuffle([...shuffle(fav).slice(0, nFav), ...shuffle(rest).slice(0, total - nFav)]);
  },

  // رابط التشغيل جوه التطبيق: استخدمه في مشغّلك الحالي (بدون أي عنصر واجهة جديد)
  embedUrl(videoId) {
    return `https://www.youtube.com/embed/${videoId}?autoplay=1&playsinline=1&rel=0&modestbranding=1`;
  },

  // لو مفيش مفتاح بس عندك channelId: تشغيل قائمة الرفع كلها جوه التطبيق من غير API
  embedUploads(channelId) {
    return `https://www.youtube.com/embed/videoseries?list=UU${channelId.slice(2)}`;
  }
};

// مثال استخدام:
//   const s = SHEIKHS.find(x => x.key === "amer");
//   const info = await YT.getInfo(s);        // بيانات الشيخ
//   const vids = await YT.getVideos(s);      // فيديوهاته
//   const feed = await YT.shortsFeed("amer"); // زرار الجلب التلقائي
//   YT.embedUrl(feed[0].id)                  // حطه في المشغّل الموجود
