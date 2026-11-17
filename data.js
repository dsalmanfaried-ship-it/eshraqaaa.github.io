// بيانات اسمع دين — url = فيديو/قائمة تشغيل يوتيوب، q = كلمات بحث (درس لسه ملوش فيديو)، short = مقطع قصير، g = رقم القسم لو مختلف عن قسم الشيخ
const DATA = {
 "groups": [
  [
   0,
   "شباب"
  ],
  [
   1,
   "دعاة ومحاضرون"
  ],
  [
   2,
   "تلاوات"
  ],
  [
   3,
   "منوّعات"
  ]
 ],
 "scholars": [
  {
   "name": "دكتور أحمد العربي",
   "g": 0,
   "sections": [
    {
     "title": "تزكية وإيمان",
     "videos": [
      {
       "title": "كيف نصل إلى القلب السليم؟",
       "url": "https://www.youtube.com/watch?v=ZWraKKwNfpE"
      },
      {
       "title": "الأخلاء يومئذ بعضهم لبعض عدو إلا المتقين",
       "url": "https://www.youtube.com/watch?v=xwywIkJF6HE"
      },
      {
       "title": "هذا هو القلب — مقطع مؤثر",
       "url": "https://www.youtube.com/watch?v=sAbgN3H32bw"
      },
      {
       "title": "لمثل هذا فأعدوا",
       "url": "https://www.youtube.com/watch?v=ZRFrXCvydog",
       "short": 1
      },
      {
       "title": "فاهم 38 — اعتزال إبراهيم عليه السلام",
       "url": "https://www.youtube.com/watch?v=si994Z9BAr8"
      }
     ]
    },
    {
     "title": "القرآن",
     "videos": [
      {
       "title": "أنا صاحبك القرآن.. كيف يكون القرآن صاحبي؟",
       "url": "https://www.youtube.com/watch?v=lkX6mcCD3CI"
      },
      {
       "title": "فاهم 37 — عن القرآن الكريم",
       "url": "https://www.youtube.com/watch?v=hK-9Be0prrA"
      },
      {
       "title": "هذا هو القرآن — مقطع رائع",
       "url": "https://www.youtube.com/watch?v=XC-JV2342ic"
      },
      {
       "title": "تأثير القرآن",
       "url": "https://www.youtube.com/watch?v=8jlOpkjCNzM",
       "short": 1
      },
      {
       "title": "كذلك لنثبت به فؤادك",
       "url": "https://www.youtube.com/watch?v=ssao8w-8_Pg",
       "short": 1
      }
     ]
    },
    {
     "title": "الصلاة",
     "videos": [
      {
       "title": "فاهم 36 — أول ما يحاسب به العبد الصلاة",
       "url": "https://www.youtube.com/watch?v=63_AOCldyXo"
      },
      {
       "title": "ماذا أريد من رمضان؟",
       "url": "https://www.youtube.com/watch?v=9TjlLsX9iA0"
      }
     ]
    },
    {
     "title": "الدعاء",
     "videos": [
      {
       "title": "دعاء يذيب قساوة القلب",
       "url": "https://www.youtube.com/watch?v=ZFXEXTRhOTQ",
       "short": 1
      },
      {
       "title": "نفر إليك منا فاعف عنا",
       "url": "https://www.youtube.com/watch?v=dTiPXjPwj-4",
       "short": 1
      },
      {
       "title": "أنت أحق من ذُكر",
       "url": "https://www.youtube.com/watch?v=U6L4ZeIuCu4",
       "short": 1
      },
      {
       "title": "مناجاة الله عز وجل والأُنس به",
       "url": "https://www.youtube.com/watch?v=Tr9eZ-M6mUk"
      }
     ]
    },
    {
     "title": "رقائق",
     "videos": [
      {
       "title": "الإخلاص لله",
       "q": "أحمد العربي الإخلاص لله",
       "g": 3
      },
      {
       "title": "الصبر",
       "q": "أحمد العربي الصبر",
       "g": 3
      },
      {
       "title": "الشكر",
       "q": "أحمد العربي الشكر",
       "g": 3
      },
      {
       "title": "التوكل على الله",
       "q": "أحمد العربي التوكل على الله",
       "g": 3
      },
      {
       "title": "خطبة وموعظة",
       "q": "أحمد العربي خطبة وموعظة",
       "g": 3
      },
      {
       "title": "دروس ومحاضرات",
       "q": "أحمد العربي دروس ومحاضرات",
       "g": 3
      },
      {
       "title": "الاستغفار",
       "q": "أحمد العربي الاستغفار",
       "g": 3
      }
     ]
    },
    {
     "title": "أسرة وأخلاق",
     "videos": [
      {
       "title": "الصدق",
       "q": "أحمد العربي الصدق",
       "g": 3
      },
      {
       "title": "حسن الخلق",
       "q": "أحمد العربي حسن الخلق",
       "g": 3
      }
     ]
    },
    {
     "title": "فقه",
     "videos": [
      {
       "title": "الخشوع في الصلاة",
       "q": "أحمد العربي الخشوع في الصلاة",
       "g": 3
      },
      {
       "title": "أحكام الزكاة",
       "q": "أحمد العربي أحكام الزكاة",
       "g": 3
      }
     ]
    }
   ]
  },
  {
   "name": "أمجد سمير",
   "g": 0,
   "sections": [
    {
     "title": "تزكية وإيمان",
     "videos": [
      {
       "title": "اجعل يقينك قوياً.. يريك الله المعجزات",
       "url": "https://www.youtube.com/watch?v=AjipD2d2rWo"
      },
      {
       "title": "حقيقة الدنيا؟",
       "url": "https://www.youtube.com/watch?v=pqOdVMSO_xE"
      },
      {
       "title": "كيف تهرب من ظلمات الدنيا؟",
       "url": "https://www.youtube.com/watch?v=TlAzTpwh2Cw"
      },
      {
       "title": "من هم الصالحين؟",
       "url": "https://www.youtube.com/watch?v=e0yMlaICASA"
      },
      {
       "title": "كيف سرقت المقارنة سعادتك دون أن تشعر؟",
       "url": "https://www.youtube.com/watch?v=5uMX_lW1Myw"
      },
      {
       "title": "سبب الخمول والكسل والتشتت وإدمان التليفون",
       "url": "https://www.youtube.com/watch?v=YcT0yM_fHeU"
      },
      {
       "title": "كيف يوازن المسلم بين العمل والعبادة؟",
       "url": "https://www.youtube.com/watch?v=b5_sznU0Pm4"
      },
      {
       "title": "ليلة رأس السنة",
       "url": "https://www.youtube.com/watch?v=EC4esPiVeVw"
      }
     ]
    },
    {
     "title": "التوبة",
     "videos": [
      {
       "title": "قصة توبتي",
       "url": "https://www.youtube.com/watch?v=X18eDcft4G4"
      },
      {
       "title": "رسالة لكل من أرهقته العودة للمعاصي بعد التوبة",
       "url": "https://www.youtube.com/watch?v=LELh3kHmyTw"
      },
      {
       "title": "كلمتين هيطمنوك ويريحوا قلبك",
       "url": "https://www.youtube.com/watch?v=kwRY_bleW2w"
      }
     ]
    },
    {
     "title": "الصلاة",
     "videos": [
      {
       "title": "أسرار الصلاة",
       "url": "https://www.youtube.com/watch?v=1473X0E1Cqk"
      }
     ]
    },
    {
     "title": "قصص",
     "videos": [
      {
       "title": "قصة غريبة",
       "url": "https://www.youtube.com/watch?v=Rmp0Azp7OAo",
       "short": 1
      },
      {
       "title": "تأملات في قصة أصحاب السبت",
       "url": "https://www.youtube.com/watch?v=wyXbLGlynbQ"
      },
      {
       "title": "واجه الدنيا بقلب لا يخاف — أبو ذر الغفاري",
       "url": "https://www.youtube.com/watch?v=lsZrPXB7VsE"
      },
      {
       "title": "قصة سليمان عليه السلام مع الهدهد",
       "url": "https://www.youtube.com/watch?v=oThH4gXdW0k"
      }
     ]
    }
   ]
  },
  {
   "name": "سمير مصطفى",
   "g": 0,
   "sections": [
    {
     "title": "التوبة",
     "videos": [
      {
       "title": "من يسألني فأعطيه؟ ومن يتوب اليوم فأغفر له؟",
       "url": "https://www.youtube.com/watch?v=GhCy5yqHhd4"
      },
      {
       "title": "موعظة تهز القلوب",
       "url": "https://www.youtube.com/watch?v=090VEfM9LOw"
      },
      {
       "title": "أحسن الظن بالله ولا تستسلم",
       "url": "https://www.youtube.com/watch?v=jrffu7M7Uk0"
      },
      {
       "title": "كيف نتخفف من ذنوبنا؟",
       "url": "https://www.youtube.com/watch?v=S5_3QUFkZV0"
      }
     ]
    },
    {
     "title": "قصص",
     "videos": [
      {
       "title": "مسجد الصحابة — وصية راهب",
       "url": "https://www.youtube.com/watch?v=m6S4vPy0P54"
      },
      {
       "title": "أبصر طريقك ج1",
       "url": "https://www.youtube.com/watch?v=y2ZDAIyxzNM"
      }
     ]
    },
    {
     "title": "الموت والآخرة",
     "videos": [
      {
       "title": "من مشاعر الموت وألم الفراق",
       "url": "https://www.youtube.com/watch?v=oUFSYNcNEMU"
      },
      {
       "title": "خطبة النذير العريان (ذكر الموت)",
       "url": "https://www.youtube.com/watch?v=bhFBiMrQA2o"
      }
     ]
    },
    {
     "title": "الصلاة",
     "videos": [
      {
       "title": "اقف انتباه",
       "url": "https://www.youtube.com/watch?v=-FSkQOm1PDA"
      },
      {
       "title": "ستعشق الصلاة — الخشوع وقوة التوحيد",
       "url": "https://www.youtube.com/watch?v=TInVMFxX2PI"
      }
     ]
    }
   ]
  },
  {
   "name": "الشيخ محمد الغليظ",
   "g": 0,
   "sections": [
    {
     "title": "القرآن",
     "videos": [
      {
       "title": "القرآن — مقطع مؤثر",
       "url": "https://www.youtube.com/watch?v=gtKC6Xa_RnU"
      },
      {
       "title": "كل يوم آية (18)",
       "url": "https://www.youtube.com/watch?v=yhgqGgXTbfI"
      }
     ]
    },
    {
     "title": "التوبة",
     "videos": [
      {
       "title": "مهما وقعت أو انتكست افتكر إنه يبدأ ويعيد",
       "url": "https://www.youtube.com/watch?v=NnvG_Ahz-Vk"
      },
      {
       "title": "مشكلته في الدين المؤثر في الحياة",
       "url": "https://www.youtube.com/watch?v=uGWRj9-N3BU"
      },
      {
       "title": "من أين أبدأ؟ (1)",
       "url": "https://www.youtube.com/watch?v=Bgjz1VxODjY"
      }
     ]
    },
    {
     "title": "الصلاة",
     "videos": [
      {
       "title": "إنها الصلاة — أستحي من الله",
       "url": "https://www.youtube.com/watch?v=mH1RMAhwDa8"
      },
      {
       "title": "لو مبتصليش أو بتقطع في الصلاة",
       "url": "https://www.youtube.com/watch?v=LUhi8GoeBGw"
      }
     ]
    },
    {
     "title": "الدعاء",
     "videos": [
      {
       "title": "روشتة ابن القيم لاستجابة الدعاء",
       "url": "https://www.youtube.com/watch?v=wvU6jCXKdv4"
      },
      {
       "title": "أنا مش لوحدي — معك الملك",
       "url": "https://www.youtube.com/watch?v=S_FXjpy2FVk"
      },
      {
       "title": "دعاء فيه كل اللي نفسك فيه",
       "url": "https://www.youtube.com/watch?v=7zwh51ysJts"
      }
     ]
    },
    {
     "title": "أسرة وزواج",
     "videos": [
      {
       "title": "هل مبدأ حقي وحقك ينفع في الزواج؟",
       "url": "https://www.youtube.com/watch?v=PkOmS0EYEhw"
      },
      {
       "title": "نصيحة لكل زوجة صاحب رسالة حقيقية",
       "url": "https://www.youtube.com/watch?v=VBWZMrxkJxk"
      },
      {
       "title": "إيه صفات الزوج الصالح؟",
       "url": "https://www.youtube.com/watch?v=dlByIzPPRR0"
      }
     ]
    },
    {
     "title": "قصص",
     "videos": [
      {
       "title": "بيده الأمر — قصة مع مادة السيوتيكال",
       "url": "https://www.youtube.com/watch?v=3m3Nb7O7vgs"
      },
      {
       "title": "الله يراك — قصة هادفة",
       "url": "https://www.youtube.com/watch?v=fl5gzROdu0Q"
      },
      {
       "title": "مفيش تاني",
       "url": "https://www.youtube.com/watch?v=MRfO8IfuFE8"
      }
     ]
    },
    {
     "title": "قوائم تشغيل",
     "videos": [
      {
       "title": "فيديوهات مميزة للشيخ محمد الغليظ",
       "url": "https://www.youtube.com/playlist?list=PL2Sst6o2QU5ShcUdVN6WmSOeCF1ijGfLb"
      }
     ]
    }
   ]
  },
  {
   "name": "ياسر ممدوح",
   "g": 0,
   "sections": [
    {
     "title": "أسرة وزواج",
     "videos": [
      {
       "title": "خش هتجيبك!",
       "url": "https://www.youtube.com/watch?v=M7ZqHNnTQs0"
      },
      {
       "title": "اتطلقتي يا فالحة",
       "url": "https://www.youtube.com/watch?v=34_Bj67N6Fk"
      },
      {
       "title": "الخديعة",
       "url": "https://www.youtube.com/watch?v=mIA00ifqbSg",
       "short": 1
      },
      {
       "title": "مش مقتنعة بالحجاب",
       "url": "https://www.youtube.com/watch?v=qm-63nnpA6g"
      }
     ]
    },
    {
     "title": "إيمان وعقيدة",
     "videos": [
      {
       "title": "بدأت أشك في الدين",
       "url": "https://www.youtube.com/watch?v=RIaaFH6d6tA"
      },
      {
       "title": "لو بصلي بس!",
       "url": "https://www.youtube.com/watch?v=byJfW3Wb5ms"
      },
      {
       "title": "العكاك والملاك",
       "url": "https://www.youtube.com/watch?v=OY5uHXTnCxQ"
      },
      {
       "title": "هو ده قرآن؟؟",
       "url": "https://www.youtube.com/watch?v=O--nWTmxNd4"
      },
      {
       "title": "الذين يظنون أنهم ملاقوا ربهم",
       "url": "https://www.youtube.com/watch?v=xNufizcaMFQ",
       "short": 1
      }
     ]
    },
    {
     "title": "قصص",
     "videos": [
      {
       "title": "تعرف يعني إيه ست بجد — السيدة عائشة",
       "url": "https://www.youtube.com/watch?v=zT4PXuZJdxw"
      }
     ]
    },
    {
     "title": "قوائم تشغيل",
     "videos": [
      {
       "title": "فيديو الجمعة — كل الحلقات",
       "url": "https://www.youtube.com/playlist?list=PLVdjsGOClzyHqLF_bgbxdPxAKHpGdkqx2"
      }
     ]
    }
   ]
  },
  {
   "name": "حازم شومان",
   "g": 0,
   "sections": [
    {
     "title": "تزكية وإيمان",
     "videos": [
      {
       "title": "أسباب النجاح في الدنيا والدين — طريقة تفكيرك",
       "url": "https://www.youtube.com/watch?v=-pmRKYcbFI4"
      },
      {
       "title": "أكتر فيديو تحفيزي ممكن تشوفه",
       "url": "https://www.youtube.com/watch?v=J71rHj7gyCU",
       "short": 1
      },
      {
       "title": "حزنك وهم",
       "url": "https://www.youtube.com/watch?v=4t3_HOTG0JY"
      },
      {
       "title": "حقيقة الدنيا",
       "url": "https://www.youtube.com/watch?v=DFCrbwzTp4Q"
      },
      {
       "title": "الثقة في الله",
       "url": "https://www.youtube.com/watch?v=5VQUEPuDYok"
      }
     ]
    },
    {
     "title": "قصص",
     "videos": [
      {
       "title": "﴿وينقلب إلى أهله مسرورًا﴾ — قصة أبي سلمة وأم سلمة",
       "url": "https://www.youtube.com/watch?v=Mw_xZ101Xps"
      },
      {
       "title": "شفيعًا لأصحابه — حكاية آية",
       "url": "https://www.youtube.com/watch?v=RcIs_XYBDws"
      },
      {
       "title": "قصة مؤثرة في فضل قراءة القرآن",
       "url": "https://www.youtube.com/watch?v=lJivOl23G6U"
      },
      {
       "title": "عجائب الصلاة على رسول الله ﷺ — ج2",
       "url": "https://www.youtube.com/watch?v=wcroQmXWtGM"
      }
     ]
    },
    {
     "title": "التوبة",
     "videos": [
      {
       "title": "والله هنقدر نتوب يا شباب",
       "url": "https://www.youtube.com/watch?v=-63VeI1gKXg"
      },
      {
       "title": "مهما بعدت — الرجوع إلى الله",
       "url": "https://www.youtube.com/watch?v=nCNooKzdfA0"
      },
      {
       "title": "فيديو تحفيزي عن التوبة والندم",
       "url": "https://www.youtube.com/watch?v=2JkQUvroXRc"
      },
      {
       "title": "التوبة — مقطع جميل",
       "url": "https://www.youtube.com/watch?v=YZebJPi9Qo8"
      }
     ]
    },
    {
     "title": "أسرة وزواج",
     "videos": [
      {
       "title": "الفجوة بين الآباء والأبناء",
       "url": "https://www.youtube.com/watch?v=l9j708-JDIE"
      },
      {
       "title": "كلمة مؤثرة عن الحياة الزوجية",
       "url": "https://www.youtube.com/watch?v=lVVahYXUlsU"
      }
     ]
    },
    {
     "title": "قوائم تشغيل",
     "videos": [
      {
       "title": "مقاطع الصلاة",
       "url": "https://www.youtube.com/playlist?list=PLVPp4tYPys9O-Vlcp8dnmaShe6eZ2Y3Uq"
      },
      {
       "title": "خطب الجمعة",
       "url": "https://www.youtube.com/playlist?list=PLVPp4tYPys9MxsCWyA5z60h55qMTheKjz"
      }
     ]
    }
   ]
  },
  {
   "name": "شريف علي",
   "g": 0,
   "sections": [
    {
     "title": "تزكية وإيمان",
     "videos": [
      {
       "title": "٥- ثمرات الخوف",
       "url": "https://www.youtube.com/watch?v=mQxALzCnlNU"
      },
      {
       "title": "٢٦- حُب الدنيا",
       "url": "https://www.youtube.com/watch?v=xtBD4GoaYtE"
      },
      {
       "title": "٧- الذكر يدفع الهم والغم",
       "url": "https://www.youtube.com/watch?v=2VHpBxoBwNE"
      },
      {
       "title": "مُعاملة الكريم",
       "url": "https://www.youtube.com/watch?v=_8q-7fyCyyU"
      },
      {
       "title": "لا تفتحه!",
       "url": "https://www.youtube.com/watch?v=jXgwAEfAsVw"
      },
      {
       "title": "أين المفر…؟",
       "url": "https://www.youtube.com/watch?v=VZbnsz1M8Es"
      },
      {
       "title": "﴿ثُمَّ يَتُوبُونَ مِن قَرِيبٍ﴾",
       "url": "https://www.youtube.com/watch?v=yLGZvdlggWY"
      },
      {
       "title": "علمني نوحٌ عليه السلام",
       "url": "https://www.youtube.com/watch?v=dKxkqEFYuUU"
      },
      {
       "title": "شفاء القلب في زمن الفتن — من سورة يوسف",
       "url": "https://www.youtube.com/watch?v=StsGAgA37fY"
      }
     ]
    },
    {
     "title": "القرآن",
     "videos": [
      {
       "title": "﴿قَدْ أَفْلَحَ الْمُؤْمِنُونَ﴾",
       "url": "https://www.youtube.com/watch?v=kUcfwqp_2gg"
      }
     ]
    },
    {
     "title": "التوبة",
     "videos": [
      {
       "title": "نعمة التوبة — تخيّل حياتك بلا توبة",
       "url": "https://www.youtube.com/watch?v=oZ6Paggql-A"
      },
      {
       "title": "رسالة لكل من أرهقته ذنوب الخلوات",
       "url": "https://www.youtube.com/watch?v=DXlyygjcRA8"
      }
     ]
    }
   ]
  },
  {
   "name": "عبد العزيز الطريفي",
   "g": 0,
   "sections": [
    {
     "title": "تزكية وإيمان",
     "videos": [
      {
       "title": "الصحابة.. الجيل الذي غيّر العالم",
       "url": "https://www.youtube.com/watch?v=-2nKpmmaS6I"
      },
      {
       "title": "الدنيا ليست لك (الابتلاء)",
       "url": "https://www.youtube.com/watch?v=M4JC2uvYBYs"
      }
     ]
    },
    {
     "title": "الصلاة",
     "videos": [
      {
       "title": "كيف تحافظ على الصلاة؟",
       "url": "https://www.youtube.com/watch?v=z9MMPhdIe2U"
      },
      {
       "title": "المحافظة على الصلاة",
       "url": "https://www.youtube.com/watch?v=RmdjSW8_Rl4"
      },
      {
       "title": "حكم تارك الصلاة",
       "url": "https://www.youtube.com/watch?v=feF28UkkJLs"
      }
     ]
    },
    {
     "title": "إيمان وعقيدة",
     "videos": [
      {
       "title": "الإيمان قول وعمل واعتقاد",
       "url": "https://www.youtube.com/watch?v=eNPCx1VXzuw"
      },
      {
       "title": "الزيغ موجود في القلب قبل النظر",
       "url": "https://www.youtube.com/watch?v=HzJZxOiBN20"
      },
      {
       "title": "الصراع بين الكفر والإيمان",
       "url": "https://www.youtube.com/watch?v=o9NEC6ijrSw",
       "short": 1
      }
     ]
    }
   ]
  },
  {
   "name": "الدكتور عمرو خالد",
   "g": 1,
   "sections": [
    {
     "title": "قصص الأنبياء",
     "videos": [
      {
       "title": "قصة سيدنا صالح في 6 مشاهد",
       "url": "https://www.youtube.com/watch?v=BUP0XEH3VTI"
      },
      {
       "title": "قصة نوح عليه السلام: الصبر وحب الناس",
       "url": "https://www.youtube.com/watch?v=TCFv79OOeR0"
      },
      {
       "title": "قصة سيدنا إبراهيم مع أبيه",
       "url": "https://www.youtube.com/watch?v=kxAHJhqPAFY"
      },
      {
       "title": "قصة نوح: مشاهد من الطوفان",
       "url": "https://www.youtube.com/watch?v=_K32nsRuIrE"
      },
      {
       "title": "قصة حب آدم وحواء في 7 خطوات",
       "url": "https://www.youtube.com/watch?v=M-mqNh5Mssc"
      },
      {
       "title": "معجزات الله مع آدم ونوح وإبراهيم وصالح وهود",
       "url": "https://www.youtube.com/watch?v=mVr4D1i4iDw"
      },
      {
       "title": "قصة نوح عليه السلام (ج1)",
       "url": "https://www.youtube.com/watch?v=it-2et_8prA"
      },
      {
       "title": "خلق آدم في 7 خطوات",
       "url": "https://www.youtube.com/watch?v=VmUzRRX5l-o"
      },
      {
       "title": "قصة آدم عليه السلام (ج1)",
       "url": "https://www.youtube.com/watch?v=4QPxDDa56TM"
      },
      {
       "title": "قصص الأنبياء",
       "q": "عمرو خالد قصص الأنبياء"
      }
     ]
    },
    {
     "title": "سيرة",
     "videos": [
      {
       "title": "قصص الصحابة",
       "q": "عمرو خالد قصص الصحابة"
      }
     ]
    },
    {
     "title": "رقائق",
     "videos": [
      {
       "title": "كيف تحب الله",
       "q": "عمرو خالد كيف تحب الله"
      },
      {
       "title": "السكينة والطمأنينة",
       "q": "عمرو خالد السكينة والطمأنينة"
      },
      {
       "title": "تجديد الإيمان",
       "q": "عمرو خالد تجديد الإيمان"
      },
      {
       "title": "الأمل بعد اليأس",
       "q": "عمرو خالد الأمل بعد اليأس"
      },
      {
       "title": "الإخلاص لله",
       "q": "عمرو خالد الإخلاص لله"
      }
     ]
    },
    {
     "title": "أسرة وأخلاق",
     "videos": [
      {
       "title": "الصدق",
       "q": "عمرو خالد الصدق"
      }
     ]
    }
   ]
  },
  {
   "name": "الشيخ مصطفى حسني",
   "g": 1,
   "sections": [
    {
     "title": "رقائق",
     "videos": [
      {
       "title": "التفاؤل وحسن الظن بالله",
       "q": "مصطفى حسني التفاؤل وحسن الظن بالله"
      },
      {
       "title": "الرضا بالقدر",
       "q": "مصطفى حسني الرضا بالقدر"
      },
      {
       "title": "البداية من جديد",
       "q": "مصطفى حسني البداية من جديد"
      },
      {
       "title": "حب الله",
       "q": "مصطفى حسني حب الله"
      },
      {
       "title": "الثقة بالله",
       "q": "مصطفى حسني الثقة بالله"
      },
      {
       "title": "الإخلاص لله",
       "q": "مصطفى حسني الإخلاص لله"
      }
     ]
    },
    {
     "title": "أسرة وأخلاق",
     "videos": [
      {
       "title": "الصدق",
       "q": "مصطفى حسني الصدق"
      }
     ]
    }
   ]
  },
  {
   "name": "الشيخ محمد حسان",
   "g": 1,
   "sections": [
    {
     "title": "سيرة",
     "videos": [
      {
       "title": "مراحل تدوين السيرة النبوية (حلقة 7)",
       "url": "https://www.youtube.com/watch?v=U37g4Gitd6E"
      },
      {
       "title": "كيف وصلت إلينا السيرة النبوية (حلقة 3)",
       "url": "https://www.youtube.com/watch?v=Tkey2mfnTjc"
      },
      {
       "title": "السيرة النبوية (1): من هو صاحب السيرة؟",
       "url": "https://www.youtube.com/watch?v=MPl8tjef11M"
      },
      {
       "title": "السيرة النبوية (8): حضانة النبي ﷺ",
       "url": "https://www.youtube.com/watch?v=mAX3ILvQa7E"
      },
      {
       "title": "السيرة النبوية (11): زواج النبي ﷺ بخديجة",
       "url": "https://www.youtube.com/watch?v=qe1f6iL6qu4"
      },
      {
       "title": "السيرة النبوية (33): حصار شعب أبي طالب",
       "url": "https://www.youtube.com/watch?v=p-_Aj8TWpFg"
      },
      {
       "title": "الجيل القرآني الفريد (لقاء 17)",
       "url": "https://www.youtube.com/watch?v=hdv0geUWE0Q"
      },
      {
       "title": "وفاة الرسول ﷺ (الدرس 209)",
       "url": "https://www.youtube.com/watch?v=sJ3nis0GeTM"
      },
      {
       "title": "كان وعداً كريماً وبشارة صادقة ﷺ",
       "url": "https://www.youtube.com/watch?v=1c5SEI8namg"
      },
      {
       "title": "سيرة النبي ﷺ",
       "q": "محمد حسان سيرة النبي ﷺ"
      },
      {
       "title": "أخلاق النبي ﷺ",
       "q": "محمد حسان أخلاق النبي ﷺ"
      },
      {
       "title": "قصص الصحابة",
       "q": "محمد حسان قصص الصحابة"
      }
     ]
    },
    {
     "title": "رقائق",
     "videos": [
      {
       "title": "التوبة إلى الله",
       "q": "محمد حسان التوبة إلى الله"
      },
      {
       "title": "سكرات الموت",
       "q": "محمد حسان سكرات الموت"
      },
      {
       "title": "أهوال يوم القيامة",
       "q": "محمد حسان أهوال يوم القيامة"
      },
      {
       "title": "الإخلاص لله",
       "q": "محمد حسان الإخلاص لله"
      }
     ]
    },
    {
     "title": "فقه",
     "videos": [
      {
       "title": "فضل الصلاة",
       "q": "محمد حسان فضل الصلاة"
      }
     ]
    },
    {
     "title": "أسرة وأخلاق",
     "videos": [
      {
       "title": "بر الوالدين",
       "q": "محمد حسان بر الوالدين"
      },
      {
       "title": "حقوق الزوجين",
       "q": "محمد حسان حقوق الزوجين"
      },
      {
       "title": "الصدق",
       "q": "محمد حسان الصدق"
      }
     ]
    }
   ]
  },
  {
   "name": "الشيخ محمد متولي الشعراوي",
   "g": 1,
   "sections": [
    {
     "title": "تفسير",
     "videos": [
      {
       "title": "تفسير سورة الكهف (84–87) – الحلقة 13",
       "url": "https://www.youtube.com/watch?v=rbAf-GnhvUQ"
      },
      {
       "title": "تفسير سورة الكهف (102–110) – الحلقة 15",
       "url": "https://www.youtube.com/watch?v=4kDrNZZMM3w"
      },
      {
       "title": "تفسير سورة الكهف (12–21) – الحلقة 3",
       "url": "https://www.youtube.com/watch?v=OjwJadvZ9CA"
      },
      {
       "title": "تفسير سورة الكهف (40–46) – الحلقة 8",
       "url": "https://www.youtube.com/watch?v=RDXaUE4D7jQ"
      },
      {
       "title": "تفسير سورة الكهف – الآيات 39–46",
       "url": "https://www.youtube.com/watch?v=e3PupPDmVsw"
      },
      {
       "title": "تفسير سورة الكهف – الآيات 54–63",
       "url": "https://www.youtube.com/watch?v=TFONfQ4mzf4"
      },
      {
       "title": "تفسير سورة الكهف – الآيات 83–87",
       "url": "https://www.youtube.com/watch?v=98GXT_QH_co"
      },
      {
       "title": "تفسير سورة الكهف كاملة",
       "url": "https://www.youtube.com/watch?v=v8RngNifd2A"
      },
      {
       "title": "تفسير سورة الفاتحة",
       "q": "محمد متولي الشعراوي تفسير سورة الفاتحة"
      },
      {
       "title": "تفسير سورة الكهف",
       "q": "محمد متولي الشعراوي تفسير سورة الكهف"
      },
      {
       "title": "تفسير سورة يوسف",
       "q": "محمد متولي الشعراوي تفسير سورة يوسف"
      }
     ]
    },
    {
     "title": "قصص الأنبياء",
     "videos": [
      {
       "title": "قصة سيدنا إبراهيم عليه السلام",
       "q": "محمد متولي الشعراوي قصة سيدنا إبراهيم عليه السلام"
      },
      {
       "title": "قصة سيدنا موسى عليه السلام",
       "q": "محمد متولي الشعراوي قصة سيدنا موسى عليه السلام"
      }
     ]
    },
    {
     "title": "رقائق",
     "videos": [
      {
       "title": "الصبر على البلاء",
       "q": "محمد متولي الشعراوي الصبر على البلاء"
      },
      {
       "title": "الرزق والتوكل على الله",
       "q": "محمد متولي الشعراوي الرزق والتوكل على الله"
      },
      {
       "title": "خواطر عن الصلاة",
       "q": "محمد متولي الشعراوي خواطر عن الصلاة"
      },
      {
       "title": "الإخلاص لله",
       "q": "محمد متولي الشعراوي الإخلاص لله"
      }
     ]
    },
    {
     "title": "سيرة",
     "videos": [
      {
       "title": "الإسراء والمعراج",
       "q": "محمد متولي الشعراوي الإسراء والمعراج"
      }
     ]
    },
    {
     "title": "فقه",
     "videos": [
      {
       "title": "خواطر عن الحج",
       "q": "محمد متولي الشعراوي خواطر عن الحج"
      }
     ]
    },
    {
     "title": "أسرة وأخلاق",
     "videos": [
      {
       "title": "الصدق",
       "q": "محمد متولي الشعراوي الصدق"
      },
      {
       "title": "حسن الخلق",
       "q": "محمد متولي الشعراوي حسن الخلق"
      }
     ]
    }
   ]
  },
  {
   "name": "الشيخ إياد قنيبي",
   "g": 1,
   "sections": [
    {
     "title": "عقيدة",
     "videos": [
      {
       "title": "الرد على الإلحاد",
       "q": "إياد قنيبي الرد على الإلحاد"
      },
      {
       "title": "الأسئلة الوجودية والإيمان",
       "q": "إياد قنيبي الأسئلة الوجودية والإيمان"
      }
     ]
    },
    {
     "title": "تفسير",
     "videos": [
      {
       "title": "تدبر القرآن",
       "q": "إياد قنيبي تدبر القرآن"
      }
     ]
    },
    {
     "title": "رقائق",
     "videos": [
      {
       "title": "الإخلاص لله",
       "q": "إياد قنيبي الإخلاص لله"
      }
     ]
    },
    {
     "title": "أسرة وأخلاق",
     "videos": [
      {
       "title": "الصدق",
       "q": "إياد قنيبي الصدق"
      },
      {
       "title": "حسن الخلق",
       "q": "إياد قنيبي حسن الخلق"
      }
     ]
    }
   ]
  },
  {
   "name": "الشيخ خالد الجندي",
   "g": 1,
   "sections": [
    {
     "title": "تفسير",
     "videos": [
      {
       "title": "خواطر قرآنية",
       "q": "خالد الجندي خواطر قرآنية"
      }
     ]
    },
    {
     "title": "عقيدة",
     "videos": [
      {
       "title": "شرح الأسماء الحسنى",
       "q": "خالد الجندي شرح الأسماء الحسنى"
      }
     ]
    },
    {
     "title": "أسرة وأخلاق",
     "videos": [
      {
       "title": "أحاديث في الأخلاق",
       "q": "خالد الجندي أحاديث في الأخلاق"
      },
      {
       "title": "الصدق",
       "q": "خالد الجندي الصدق"
      },
      {
       "title": "حسن الخلق",
       "q": "خالد الجندي حسن الخلق"
      }
     ]
    },
    {
     "title": "فقه",
     "videos": [
      {
       "title": "فقه المعاملات",
       "q": "خالد الجندي فقه المعاملات"
      }
     ]
    },
    {
     "title": "رقائق",
     "videos": [
      {
       "title": "الإخلاص لله",
       "q": "خالد الجندي الإخلاص لله"
      }
     ]
    }
   ]
  },
  {
   "name": "الشيخ نبيل العوضي",
   "g": 1,
   "sections": [
    {
     "title": "سيرة",
     "videos": [
      {
       "title": "السيرة النبوية",
       "q": "نبيل العوضي السيرة النبوية"
      },
      {
       "title": "قصص الصحابة",
       "q": "نبيل العوضي قصص الصحابة"
      }
     ]
    },
    {
     "title": "أسرة وأخلاق",
     "videos": [
      {
       "title": "أخلاق المسلم",
       "q": "نبيل العوضي أخلاق المسلم"
      },
      {
       "title": "الصدق",
       "q": "نبيل العوضي الصدق"
      }
     ]
    },
    {
     "title": "رقائق",
     "videos": [
      {
       "title": "قصص التائبين",
       "q": "نبيل العوضي قصص التائبين"
      },
      {
       "title": "الإخلاص لله",
       "q": "نبيل العوضي الإخلاص لله"
      }
     ]
    }
   ]
  },
  {
   "name": "الشيخ عمر عبد الكافي",
   "g": 1,
   "sections": [
    {
     "title": "رقائق",
     "videos": [
      {
       "title": "عذاب القبر",
       "q": "عمر عبد الكافي عذاب القبر"
      },
      {
       "title": "قصص التائبين",
       "q": "عمر عبد الكافي قصص التائبين"
      },
      {
       "title": "الجنة والنار",
       "q": "عمر عبد الكافي الجنة والنار"
      },
      {
       "title": "الإخلاص لله",
       "q": "عمر عبد الكافي الإخلاص لله"
      }
     ]
    },
    {
     "title": "قصص الأنبياء",
     "videos": [
      {
       "title": "قصة يوسف عليه السلام",
       "q": "عمر عبد الكافي قصة يوسف عليه السلام"
      }
     ]
    },
    {
     "title": "أسرة وأخلاق",
     "videos": [
      {
       "title": "الصدق",
       "q": "عمر عبد الكافي الصدق"
      }
     ]
    }
   ]
  },
  {
   "name": "الشيخ محمد العريفي",
   "g": 1,
   "sections": [
    {
     "title": "رقائق",
     "videos": [
      {
       "title": "استمتع بحياتك",
       "q": "محمد العريفي استمتع بحياتك"
      },
      {
       "title": "الإخلاص لله",
       "q": "محمد العريفي الإخلاص لله"
      }
     ]
    },
    {
     "title": "فقه",
     "videos": [
      {
       "title": "أسرار الصلاة",
       "q": "محمد العريفي أسرار الصلاة"
      }
     ]
    },
    {
     "title": "سيرة",
     "videos": [
      {
       "title": "قصص الصحابة",
       "q": "محمد العريفي قصص الصحابة"
      }
     ]
    },
    {
     "title": "أسرة وأخلاق",
     "videos": [
      {
       "title": "الصدق",
       "q": "محمد العريفي الصدق"
      }
     ]
    }
   ]
  },
  {
   "name": "الدكتور محمد راتب النابلسي",
   "g": 1,
   "sections": [
    {
     "title": "فقه",
     "videos": [
      {
       "title": "فقه الأولويات",
       "url": "https://www.youtube.com/watch?v=850dQvFrLcs"
      }
     ]
    },
    {
     "title": "أسرة وأخلاق",
     "videos": [
      {
       "title": "حجاب المرأة",
       "url": "https://www.youtube.com/watch?v=N_dL2FzyTqA"
      },
      {
       "title": "الأخلاق الإسلامية",
       "q": "محمد راتب النابلسي الأخلاق الإسلامية"
      },
      {
       "title": "تربية الأبناء في الإسلام",
       "q": "محمد راتب النابلسي تربية الأبناء في الإسلام"
      },
      {
       "title": "الصدق",
       "q": "محمد راتب النابلسي الصدق"
      }
     ]
    },
    {
     "title": "رقائق",
     "videos": [
      {
       "title": "أحداث ما بعد الموت",
       "url": "https://www.youtube.com/watch?v=ra25trzfacM"
      },
      {
       "title": "ما يحدث للإنسان قبل الموت بأربعين يوماً",
       "url": "https://www.youtube.com/watch?v=O5GMeA4nMh8"
      },
      {
       "title": "بالعلم والإيمان تنهض الأوطان",
       "url": "https://www.youtube.com/watch?v=cQvzyUXQvxk"
      },
      {
       "title": "رمضان نقطة تحول",
       "url": "https://www.youtube.com/watch?v=N1i3F5Bexxg"
      },
      {
       "title": "أنواع الصبر",
       "q": "محمد راتب النابلسي أنواع الصبر"
      },
      {
       "title": "الإخلاص لله",
       "q": "محمد راتب النابلسي الإخلاص لله"
      }
     ]
    },
    {
     "title": "سيرة",
     "videos": [
      {
       "title": "الهجرة النبوية",
       "url": "https://www.youtube.com/watch?v=9s-eN4bcwos"
      },
      {
       "title": "السيرة النبوية",
       "q": "محمد راتب النابلسي السيرة النبوية"
      }
     ]
    },
    {
     "title": "عقيدة",
     "videos": [
      {
       "title": "الإعجاز العلمي في القرآن",
       "q": "محمد راتب النابلسي الإعجاز العلمي في القرآن"
      },
      {
       "title": "أسماء الله الحسنى",
       "q": "محمد راتب النابلسي أسماء الله الحسنى"
      },
      {
       "title": "الإيمان والتوحيد",
       "q": "محمد راتب النابلسي الإيمان والتوحيد"
      }
     ]
    }
   ]
  },
  {
   "name": "الدكتور طارق السويدان",
   "g": 1,
   "sections": [
    {
     "title": "سيرة",
     "videos": [
      {
       "title": "السيرة النبوية",
       "q": "طارق السويدان السيرة النبوية"
      }
     ]
    },
    {
     "title": "قصص الأنبياء",
     "videos": [
      {
       "title": "قصص الأنبياء",
       "q": "طارق السويدان قصص الأنبياء"
      }
     ]
    },
    {
     "title": "رقائق",
     "videos": [
      {
       "title": "الإخلاص لله",
       "q": "طارق السويدان الإخلاص لله"
      }
     ]
    },
    {
     "title": "أسرة وأخلاق",
     "videos": [
      {
       "title": "الصدق",
       "q": "طارق السويدان الصدق"
      }
     ]
    }
   ]
  },
  {
   "name": "الدكتور راغب السرجاني",
   "g": 1,
   "sections": [
    {
     "title": "سيرة",
     "videos": [
      {
       "title": "قصة الإسلام",
       "q": "راغب السرجاني قصة الإسلام"
      }
     ]
    },
    {
     "title": "قصص الأنبياء",
     "videos": [
      {
       "title": "قصص الأنبياء",
       "q": "راغب السرجاني قصص الأنبياء"
      }
     ]
    },
    {
     "title": "رقائق",
     "videos": [
      {
       "title": "الإخلاص لله",
       "q": "راغب السرجاني الإخلاص لله"
      }
     ]
    },
    {
     "title": "أسرة وأخلاق",
     "videos": [
      {
       "title": "الصدق",
       "q": "راغب السرجاني الصدق"
      }
     ]
    }
   ]
  },
  {
   "name": "الشيخ صالح المغامسي",
   "g": 1,
   "sections": [
    {
     "title": "تفسير",
     "videos": [
      {
       "title": "تفسير جزء عم",
       "q": "صالح المغامسي تفسير جزء عم"
      },
      {
       "title": "تفسير سورة الكهف",
       "q": "صالح المغامسي تفسير سورة الكهف"
      }
     ]
    },
    {
     "title": "قصص الأنبياء",
     "videos": [
      {
       "title": "قصص القرآن",
       "q": "صالح المغامسي قصص القرآن"
      }
     ]
    },
    {
     "title": "رقائق",
     "videos": [
      {
       "title": "الإخلاص لله",
       "q": "صالح المغامسي الإخلاص لله"
      }
     ]
    },
    {
     "title": "أسرة وأخلاق",
     "videos": [
      {
       "title": "الصدق",
       "q": "صالح المغامسي الصدق"
      }
     ]
    }
   ]
  },
  {
   "name": "الشيخ سلمان العودة",
   "g": 1,
   "sections": [
    {
     "title": "قصص الأنبياء",
     "videos": [
      {
       "title": "قصص الأنبياء",
       "q": "سلمان العودة قصص الأنبياء"
      }
     ]
    },
    {
     "title": "تفسير",
     "videos": [
      {
       "title": "تدبر القرآن",
       "q": "سلمان العودة تدبر القرآن"
      }
     ]
    },
    {
     "title": "رقائق",
     "videos": [
      {
       "title": "الإخلاص لله",
       "q": "سلمان العودة الإخلاص لله"
      }
     ]
    },
    {
     "title": "أسرة وأخلاق",
     "videos": [
      {
       "title": "الصدق",
       "q": "سلمان العودة الصدق"
      }
     ]
    }
   ]
  },
  {
   "name": "الشيخ خالد الراشد",
   "g": 1,
   "sections": [
    {
     "title": "رقائق",
     "videos": [
      {
       "title": "التوبة وحلاوة الإيمان",
       "q": "خالد الراشد التوبة وحلاوة الإيمان"
      },
      {
       "title": "الإخلاص لله",
       "q": "خالد الراشد الإخلاص لله"
      }
     ]
    },
    {
     "title": "فقه",
     "videos": [
      {
       "title": "الخشوع في الصلاة",
       "q": "خالد الراشد الخشوع في الصلاة"
      }
     ]
    },
    {
     "title": "أسرة وأخلاق",
     "videos": [
      {
       "title": "الصدق",
       "q": "خالد الراشد الصدق"
      }
     ]
    }
   ]
  },
  {
   "name": "الشيخ عائض القرني",
   "g": 1,
   "sections": [
    {
     "title": "رقائق",
     "videos": [
      {
       "title": "لا تحزن",
       "q": "عائض القرني لا تحزن"
      },
      {
       "title": "السعادة الحقيقية",
       "q": "عائض القرني السعادة الحقيقية"
      },
      {
       "title": "الإخلاص لله",
       "q": "عائض القرني الإخلاص لله"
      }
     ]
    },
    {
     "title": "أسرة وأخلاق",
     "videos": [
      {
       "title": "الصدق",
       "q": "عائض القرني الصدق"
      },
      {
       "title": "حسن الخلق",
       "q": "عائض القرني حسن الخلق"
      }
     ]
    }
   ]
  },
  {
   "name": "الدكتور عثمان الخميس",
   "g": 1,
   "sections": [
    {
     "title": "سيرة",
     "videos": [
      {
       "title": "التاريخ الإسلامي",
       "q": "عثمان الخميس التاريخ الإسلامي"
      },
      {
       "title": "سيرة الصحابة",
       "q": "عثمان الخميس سيرة الصحابة"
      }
     ]
    },
    {
     "title": "رقائق",
     "videos": [
      {
       "title": "الإخلاص لله",
       "q": "عثمان الخميس الإخلاص لله"
      }
     ]
    },
    {
     "title": "أسرة وأخلاق",
     "videos": [
      {
       "title": "الصدق",
       "q": "عثمان الخميس الصدق"
      }
     ]
    }
   ]
  },
  {
   "name": "الشيخ محمود المصري (أبو عمار)",
   "g": 1,
   "sections": [
    {
     "title": "سيرة",
     "videos": [
      {
       "title": "قصص الصحابة",
       "q": "محمود المصري (أبو عمار) قصص الصحابة"
      }
     ]
    },
    {
     "title": "قصص الأنبياء",
     "videos": [
      {
       "title": "قصص الأنبياء",
       "q": "محمود المصري (أبو عمار) قصص الأنبياء"
      }
     ]
    },
    {
     "title": "رقائق",
     "videos": [
      {
       "title": "الإخلاص لله",
       "q": "محمود المصري (أبو عمار) الإخلاص لله"
      }
     ]
    },
    {
     "title": "أسرة وأخلاق",
     "videos": [
      {
       "title": "الصدق",
       "q": "محمود المصري (أبو عمار) الصدق"
      }
     ]
    }
   ]
  },
  {
   "name": "الشيخ عبد الحميد كشك",
   "g": 1,
   "sections": [
    {
     "title": "فقه",
     "videos": [
      {
       "title": "خطبة عيد الفطر",
       "url": "https://www.youtube.com/watch?v=JQqDiTAc4xU"
      },
      {
       "title": "خطبة عيد الأضحى",
       "url": "https://www.youtube.com/watch?v=kPrPYEc6CU8"
      }
     ]
    },
    {
     "title": "سيرة",
     "videos": [
      {
       "title": "خطبة عاشوراء: استشهاد الحسين",
       "url": "https://www.youtube.com/watch?v=7woQzv4baV0"
      },
      {
       "title": "دار الندوة وهجرة الرسول ﷺ",
       "url": "https://www.youtube.com/watch?v=RnGOdpchqug"
      },
      {
       "title": "من دروس الهجرة",
       "url": "https://www.youtube.com/watch?v=Ojd9iLKZk3o"
      }
     ]
    },
    {
     "title": "رقائق",
     "videos": [
      {
       "title": "خطبة الموت",
       "url": "https://www.youtube.com/watch?v=MtiKSw4fcDE"
      },
      {
       "title": "أعظم عمل تتقرب به إلى الله",
       "url": "https://www.youtube.com/watch?v=sZkPGprW12s"
      },
      {
       "title": "سفينة النجاة",
       "url": "https://www.youtube.com/watch?v=aKRiXGisbfE"
      },
      {
       "title": "أجمل وأقوى خطب الشيخ كشك",
       "url": "https://www.youtube.com/watch?v=QyW18GfEuns"
      },
      {
       "title": "الإخلاص لله",
       "q": "عبد الحميد كشك الإخلاص لله"
      },
      {
       "title": "الصبر",
       "q": "عبد الحميد كشك الصبر"
      },
      {
       "title": "الشكر",
       "q": "عبد الحميد كشك الشكر"
      },
      {
       "title": "التوكل على الله",
       "q": "عبد الحميد كشك التوكل على الله"
      },
      {
       "title": "خطبة وموعظة",
       "q": "عبد الحميد كشك خطبة وموعظة"
      },
      {
       "title": "دروس ومحاضرات",
       "q": "عبد الحميد كشك دروس ومحاضرات"
      },
      {
       "title": "الاستغفار",
       "q": "عبد الحميد كشك الاستغفار"
      }
     ]
    },
    {
     "title": "قصص الأنبياء",
     "videos": [
      {
       "title": "مدرسة أيوب عليه السلام",
       "url": "https://www.youtube.com/watch?v=FpZHnltukcQ"
      }
     ]
    },
    {
     "title": "أسرة وأخلاق",
     "videos": [
      {
       "title": "الصدق",
       "q": "عبد الحميد كشك الصدق"
      },
      {
       "title": "حسن الخلق",
       "q": "عبد الحميد كشك حسن الخلق"
      }
     ]
    }
   ]
  },
  {
   "name": "الشيخ أبو إسحاق الحويني",
   "g": 1,
   "sections": [
    {
     "title": "سيرة",
     "videos": [
      {
       "title": "قصص السلف",
       "q": "أبو إسحاق الحويني قصص السلف"
      }
     ]
    },
    {
     "title": "حديث",
     "videos": [
      {
       "title": "شرح الأحاديث",
       "q": "أبو إسحاق الحويني شرح الأحاديث"
      }
     ]
    },
    {
     "title": "رقائق",
     "videos": [
      {
       "title": "الإخلاص لله",
       "q": "أبو إسحاق الحويني الإخلاص لله"
      }
     ]
    },
    {
     "title": "أسرة وأخلاق",
     "videos": [
      {
       "title": "الصدق",
       "q": "أبو إسحاق الحويني الصدق"
      }
     ]
    }
   ]
  },
  {
   "name": "الشيخ محمد الغزالي",
   "g": 1,
   "sections": [
    {
     "title": "أسرة وأخلاق",
     "videos": [
      {
       "title": "خلق المسلم",
       "q": "محمد الغزالي خلق المسلم"
      },
      {
       "title": "الصدق",
       "q": "محمد الغزالي الصدق"
      },
      {
       "title": "حسن الخلق",
       "q": "محمد الغزالي حسن الخلق"
      }
     ]
    },
    {
     "title": "رقائق",
     "videos": [
      {
       "title": "الإخلاص لله",
       "q": "محمد الغزالي الإخلاص لله"
      }
     ]
    }
   ]
  },
  {
   "name": "الشيخ ابن عثيمين",
   "g": 1,
   "sections": [
    {
     "title": "حديث",
     "videos": [
      {
       "title": "شرح صحيح مسلم: المساجد ومواضع الصلاة (11)",
       "url": "https://www.youtube.com/watch?v=KQXp4ypQfg0"
      },
      {
       "title": "شرح حديث: لا تزال طائفة من أمتي ظاهرين على الحق",
       "url": "https://www.youtube.com/watch?v=CBGK7OY6BgE"
      },
      {
       "title": "شرح البيقونية: البيت الثالث",
       "url": "https://www.youtube.com/watch?v=pJWMyr8tzwg"
      },
      {
       "title": "شرح البيقونية: أقسام علم الحديث",
       "url": "https://www.youtube.com/watch?v=WOtLT2ySaGA"
      },
      {
       "title": "شرح رياض الصالحين",
       "q": "ابن عثيمين شرح رياض الصالحين"
      },
      {
       "title": "شرح الأربعين النووية",
       "q": "ابن عثيمين شرح الأربعين النووية"
      },
      {
       "title": "شرح بلوغ المرام",
       "q": "ابن عثيمين شرح بلوغ المرام"
      }
     ]
    },
    {
     "title": "عقيدة",
     "videos": [
      {
       "title": "شرح كشف الشبهات – الشريط الأول",
       "url": "https://www.youtube.com/watch?v=XOyvbjhRMig"
      },
      {
       "title": "لقاء 180: شرح تفصيلي لمعنى الإيمان",
       "url": "https://www.youtube.com/watch?v=Ao0qLR0nw0U"
      },
      {
       "title": "لقاء 174: مختصر شرح أركان الإيمان",
       "url": "https://www.youtube.com/watch?v=d2pxp2edCGQ"
      },
      {
       "title": "شرح كتاب التوحيد",
       "q": "ابن عثيمين شرح كتاب التوحيد"
      },
      {
       "title": "شرح الأصول الثلاثة",
       "q": "ابن عثيمين شرح الأصول الثلاثة"
      },
      {
       "title": "شرح العقيدة الواسطية",
       "q": "ابن عثيمين شرح العقيدة الواسطية"
      }
     ]
    },
    {
     "title": "فقه",
     "videos": [
      {
       "title": "لقاء الباب المفتوح",
       "q": "ابن عثيمين لقاء الباب المفتوح"
      },
      {
       "title": "أحكام الزكاة",
       "q": "ابن عثيمين أحكام الزكاة"
      }
     ]
    },
    {
     "title": "رقائق",
     "videos": [
      {
       "title": "الإخلاص لله",
       "q": "ابن عثيمين الإخلاص لله"
      }
     ]
    },
    {
     "title": "أسرة وأخلاق",
     "videos": [
      {
       "title": "الصدق",
       "q": "ابن عثيمين الصدق"
      }
     ]
    }
   ]
  },
  {
   "name": "الشيخ ابن باز",
   "g": 1,
   "sections": [
    {
     "title": "فقه",
     "videos": [
      {
       "title": "فتاوى نور على الدرب",
       "q": "ابن باز فتاوى نور على الدرب"
      },
      {
       "title": "أحكام الصلاة",
       "q": "ابن باز أحكام الصلاة"
      },
      {
       "title": "أحكام الصيام",
       "q": "ابن باز أحكام الصيام"
      },
      {
       "title": "أحكام الحج والعمرة",
       "q": "ابن باز أحكام الحج والعمرة"
      }
     ]
    },
    {
     "title": "رقائق",
     "videos": [
      {
       "title": "الإخلاص لله",
       "q": "ابن باز الإخلاص لله"
      }
     ]
    },
    {
     "title": "أسرة وأخلاق",
     "videos": [
      {
       "title": "الصدق",
       "q": "ابن باز الصدق"
      }
     ]
    }
   ]
  },
  {
   "name": "الشيخ الألباني",
   "g": 1,
   "sections": [
    {
     "title": "فقه",
     "videos": [
      {
       "title": "صفة صلاة النبي ﷺ",
       "q": "الألباني صفة صلاة النبي ﷺ"
      },
      {
       "title": "سلسلة الهدى والنور",
       "q": "الألباني سلسلة الهدى والنور"
      }
     ]
    },
    {
     "title": "عقيدة",
     "videos": [
      {
       "title": "منهج السلف",
       "q": "الألباني منهج السلف"
      }
     ]
    },
    {
     "title": "رقائق",
     "videos": [
      {
       "title": "الإخلاص لله",
       "q": "الألباني الإخلاص لله"
      }
     ]
    },
    {
     "title": "أسرة وأخلاق",
     "videos": [
      {
       "title": "الصدق",
       "q": "الألباني الصدق"
      },
      {
       "title": "حسن الخلق",
       "q": "الألباني حسن الخلق"
      }
     ]
    }
   ]
  },
  {
   "name": "الشيخ محمد صالح المنجد",
   "g": 1,
   "sections": [
    {
     "title": "أسرة وأخلاق",
     "videos": [
      {
       "title": "فتاوى وأحكام الأسرة",
       "q": "محمد صالح المنجد فتاوى وأحكام الأسرة"
      },
      {
       "title": "الصدق",
       "q": "محمد صالح المنجد الصدق"
      }
     ]
    },
    {
     "title": "فقه",
     "videos": [
      {
       "title": "سلسلة الأحكام الفقهية",
       "q": "محمد صالح المنجد سلسلة الأحكام الفقهية"
      }
     ]
    },
    {
     "title": "رقائق",
     "videos": [
      {
       "title": "الإخلاص لله",
       "q": "محمد صالح المنجد الإخلاص لله"
      }
     ]
    }
   ]
  },
  {
   "name": "الشيخ أحمد ديدات",
   "g": 1,
   "sections": [
    {
     "title": "رقائق",
     "videos": [
      {
       "title": "الإخلاص لله",
       "q": "أحمد ديدات الإخلاص لله"
      },
      {
       "title": "الصبر",
       "q": "أحمد ديدات الصبر"
      },
      {
       "title": "الشكر",
       "q": "أحمد ديدات الشكر"
      },
      {
       "title": "التوكل على الله",
       "q": "أحمد ديدات التوكل على الله"
      },
      {
       "title": "خطبة وموعظة",
       "q": "أحمد ديدات خطبة وموعظة"
      },
      {
       "title": "دروس ومحاضرات",
       "q": "أحمد ديدات دروس ومحاضرات"
      },
      {
       "title": "الاستغفار",
       "q": "أحمد ديدات الاستغفار"
      }
     ]
    },
    {
     "title": "أسرة وأخلاق",
     "videos": [
      {
       "title": "الصدق",
       "q": "أحمد ديدات الصدق"
      },
      {
       "title": "حسن الخلق",
       "q": "أحمد ديدات حسن الخلق"
      }
     ]
    }
   ]
  },
  {
   "name": "الحبيب علي الجفري",
   "g": 1,
   "sections": [
    {
     "title": "رقائق",
     "videos": [
      {
       "title": "الإخلاص لله",
       "q": "الحبيب علي الجفري الإخلاص لله"
      },
      {
       "title": "الصبر",
       "q": "الحبيب علي الجفري الصبر"
      },
      {
       "title": "الشكر",
       "q": "الحبيب علي الجفري الشكر"
      },
      {
       "title": "التوكل على الله",
       "q": "الحبيب علي الجفري التوكل على الله"
      },
      {
       "title": "خطبة وموعظة",
       "q": "الحبيب علي الجفري خطبة وموعظة"
      },
      {
       "title": "دروس ومحاضرات",
       "q": "الحبيب علي الجفري دروس ومحاضرات"
      },
      {
       "title": "الاستغفار",
       "q": "الحبيب علي الجفري الاستغفار"
      }
     ]
    },
    {
     "title": "أسرة وأخلاق",
     "videos": [
      {
       "title": "الصدق",
       "q": "الحبيب علي الجفري الصدق"
      },
      {
       "title": "حسن الخلق",
       "q": "الحبيب علي الجفري حسن الخلق"
      }
     ]
    },
    {
     "title": "فقه",
     "videos": [
      {
       "title": "الخشوع في الصلاة",
       "q": "الحبيب علي الجفري الخشوع في الصلاة"
      }
     ]
    }
   ]
  },
  {
   "name": "القارئ عبد الباسط عبد الصمد",
   "g": 2,
   "sections": [
    {
     "title": "تلاوات",
     "videos": [
      {
       "title": "سورة يس",
       "url": "https://www.youtube.com/watch?v=dyUWjQs9mis"
      },
      {
       "title": "سورة يس كاملة",
       "url": "https://www.youtube.com/watch?v=XIVW9BlfXaI"
      },
      {
       "title": "سورة الواقعة كاملة",
       "url": "https://www.youtube.com/watch?v=_99UN40NcY8"
      },
      {
       "title": "سورة البقرة",
       "url": "https://www.youtube.com/watch?v=tQsRG23FIsw"
      },
      {
       "title": "خواتيم البقرة والإخلاص والمعوذتان",
       "url": "https://www.youtube.com/watch?v=RGEfxnAnvc0"
      },
      {
       "title": "سورتا يس والواقعة",
       "url": "https://www.youtube.com/watch?v=urAkpzVvgUs"
      },
      {
       "title": "سورة هود كاملة",
       "url": "https://www.youtube.com/watch?v=zhLp6DmfCWQ"
      },
      {
       "title": "سورة البقرة (تلاوة خاشعة)",
       "url": "https://www.youtube.com/watch?v=iEKq_UJ78fA"
      },
      {
       "title": "يس والرحمن والواقعة والملك",
       "url": "https://www.youtube.com/watch?v=WOehfo590cg"
      },
      {
       "title": "تلاوة سورة طه",
       "q": "عبد الباسط عبد الصمد تلاوة سورة طه"
      },
      {
       "title": "تلاوة سورة يوسف",
       "q": "عبد الباسط عبد الصمد تلاوة سورة يوسف"
      },
      {
       "title": "تلاوة سورة مريم",
       "q": "عبد الباسط عبد الصمد تلاوة سورة مريم"
      },
      {
       "title": "تلاوة سورة ياسين",
       "q": "عبد الباسط عبد الصمد تلاوة سورة ياسين"
      },
      {
       "title": "تلاوة سورة الملك",
       "q": "عبد الباسط عبد الصمد تلاوة سورة الملك"
      }
     ]
    }
   ]
  },
  {
   "name": "القارئ محمود خليل الحصري",
   "g": 2,
   "sections": [
    {
     "title": "تلاوات",
     "videos": [
      {
       "title": "تلاوة سورة الزمر",
       "url": "https://www.youtube.com/watch?v=Vv-lMJvP8bI"
      },
      {
       "title": "تلاوة تهدئ النفس وتطمئن الروح",
       "url": "https://www.youtube.com/watch?v=qLdzHcktdX4"
      },
      {
       "title": "تلاوة خاشعة تملأ القلب نوراً",
       "url": "https://www.youtube.com/watch?v=LhssDCbxFh4"
      },
      {
       "title": "تلاوة الراحة والسكينة",
       "url": "https://www.youtube.com/watch?v=Jb336fCcb00"
      },
      {
       "title": "قرآن الصباح",
       "url": "https://www.youtube.com/watch?v=or0-fjmNnPw"
      },
      {
       "title": "إن شعرت بالضيق استمع بقلبك",
       "url": "https://www.youtube.com/watch?v=7sW9REArg5A"
      },
      {
       "title": "تلاوة تملأ القلوب نوراً وسكينة",
       "url": "https://www.youtube.com/watch?v=fpdVPNGETS8"
      },
      {
       "title": "تلاوة هادئة لمن ضاق صدره",
       "url": "https://www.youtube.com/watch?v=QzBPIvEz3Rs"
      },
      {
       "title": "تلاوة سورة الفاتحة وقصار السور",
       "q": "محمود خليل الحصري تلاوة سورة الفاتحة وقصار السور"
      },
      {
       "title": "تلاوة سورة البقرة",
       "q": "محمود خليل الحصري تلاوة سورة البقرة"
      },
      {
       "title": "تلاوة سورة ياسين",
       "q": "محمود خليل الحصري تلاوة سورة ياسين"
      },
      {
       "title": "تلاوة سورة الملك",
       "q": "محمود خليل الحصري تلاوة سورة الملك"
      }
     ]
    }
   ]
  },
  {
   "name": "القارئ مشاري العفاسي",
   "g": 2,
   "sections": [
    {
     "title": "تلاوات",
     "videos": [
      {
       "title": "تلاوة سورة البقرة",
       "q": "مشاري العفاسي تلاوة سورة البقرة"
      },
      {
       "title": "تلاوة سورة الكهف",
       "q": "مشاري العفاسي تلاوة سورة الكهف"
      },
      {
       "title": "تلاوة سورة الرحمن",
       "q": "مشاري العفاسي تلاوة سورة الرحمن"
      },
      {
       "title": "تلاوة سورة ياسين",
       "q": "مشاري العفاسي تلاوة سورة ياسين"
      },
      {
       "title": "تلاوة سورة الملك",
       "q": "مشاري العفاسي تلاوة سورة الملك"
      }
     ]
    }
   ]
  },
  {
   "name": "القارئ محمد صديق المنشاوي",
   "g": 2,
   "sections": [
    {
     "title": "تلاوات",
     "videos": [
      {
       "title": "تلاوة سورة الإسراء",
       "q": "محمد صديق المنشاوي تلاوة سورة الإسراء"
      },
      {
       "title": "تلاوة سورة الرحمن",
       "q": "محمد صديق المنشاوي تلاوة سورة الرحمن"
      },
      {
       "title": "تلاوة سورة ياسين",
       "q": "محمد صديق المنشاوي تلاوة سورة ياسين"
      },
      {
       "title": "تلاوة سورة الملك",
       "q": "محمد صديق المنشاوي تلاوة سورة الملك"
      }
     ]
    }
   ]
  },
  {
   "name": "القارئ ماهر المعيقلي",
   "g": 2,
   "sections": [
    {
     "title": "تلاوات",
     "videos": [
      {
       "title": "تلاوة سورة مريم",
       "q": "ماهر المعيقلي تلاوة سورة مريم"
      },
      {
       "title": "تلاوة سورة يوسف",
       "q": "ماهر المعيقلي تلاوة سورة يوسف"
      },
      {
       "title": "تلاوة سورة ياسين",
       "q": "ماهر المعيقلي تلاوة سورة ياسين"
      },
      {
       "title": "تلاوة سورة الملك",
       "q": "ماهر المعيقلي تلاوة سورة الملك"
      }
     ]
    }
   ]
  },
  {
   "name": "القارئ سعد الغامدي",
   "g": 2,
   "sections": [
    {
     "title": "تلاوات",
     "videos": [
      {
       "title": "تلاوة سورة الكهف",
       "q": "سعد الغامدي تلاوة سورة الكهف"
      },
      {
       "title": "أذكار الصباح والمساء",
       "q": "سعد الغامدي أذكار الصباح والمساء"
      },
      {
       "title": "تلاوة سورة ياسين",
       "q": "سعد الغامدي تلاوة سورة ياسين"
      },
      {
       "title": "تلاوة سورة الملك",
       "q": "سعد الغامدي تلاوة سورة الملك"
      }
     ]
    }
   ]
  },
  {
   "name": "القارئ ياسر الدوسري",
   "g": 2,
   "sections": [
    {
     "title": "تلاوات",
     "videos": [
      {
       "title": "تلاوة سورة الإنسان",
       "q": "ياسر الدوسري تلاوة سورة الإنسان"
      },
      {
       "title": "تلاوة سورة الكهف",
       "q": "ياسر الدوسري تلاوة سورة الكهف"
      },
      {
       "title": "تلاوة سورة ياسين",
       "q": "ياسر الدوسري تلاوة سورة ياسين"
      },
      {
       "title": "تلاوة سورة الملك",
       "q": "ياسر الدوسري تلاوة سورة الملك"
      }
     ]
    }
   ]
  },
  {
   "name": "القارئ محمد رفعت",
   "g": 2,
   "sections": [
    {
     "title": "تلاوات",
     "videos": [
      {
       "title": "تلاوة سورة ياسين",
       "q": "محمد رفعت تلاوة سورة ياسين"
      },
      {
       "title": "تلاوة سورة الملك",
       "q": "محمد رفعت تلاوة سورة الملك"
      },
      {
       "title": "تلاوة سورة الواقعة",
       "q": "محمد رفعت تلاوة سورة الواقعة"
      },
      {
       "title": "تلاوة سورة الكهف",
       "q": "محمد رفعت تلاوة سورة الكهف"
      },
      {
       "title": "تلاوة سورة مريم",
       "q": "محمد رفعت تلاوة سورة مريم"
      },
      {
       "title": "تلاوة سورة طه",
       "q": "محمد رفعت تلاوة سورة طه"
      }
     ]
    }
   ]
  },
  {
   "name": "القارئ مصطفى إسماعيل",
   "g": 2,
   "sections": [
    {
     "title": "تلاوات",
     "videos": [
      {
       "title": "تلاوة سورة ياسين",
       "q": "مصطفى إسماعيل تلاوة سورة ياسين"
      },
      {
       "title": "تلاوة سورة الملك",
       "q": "مصطفى إسماعيل تلاوة سورة الملك"
      },
      {
       "title": "تلاوة سورة الواقعة",
       "q": "مصطفى إسماعيل تلاوة سورة الواقعة"
      },
      {
       "title": "تلاوة سورة الكهف",
       "q": "مصطفى إسماعيل تلاوة سورة الكهف"
      },
      {
       "title": "تلاوة سورة مريم",
       "q": "مصطفى إسماعيل تلاوة سورة مريم"
      },
      {
       "title": "تلاوة سورة طه",
       "q": "مصطفى إسماعيل تلاوة سورة طه"
      }
     ]
    }
   ]
  },
  {
   "name": "القارئ عبد الرحمن السديس",
   "g": 2,
   "sections": [
    {
     "title": "تلاوات",
     "videos": [
      {
       "title": "تلاوة سورة ياسين",
       "q": "عبد الرحمن السديس تلاوة سورة ياسين"
      },
      {
       "title": "تلاوة سورة الملك",
       "q": "عبد الرحمن السديس تلاوة سورة الملك"
      },
      {
       "title": "تلاوة سورة الواقعة",
       "q": "عبد الرحمن السديس تلاوة سورة الواقعة"
      },
      {
       "title": "تلاوة سورة الكهف",
       "q": "عبد الرحمن السديس تلاوة سورة الكهف"
      },
      {
       "title": "تلاوة سورة مريم",
       "q": "عبد الرحمن السديس تلاوة سورة مريم"
      },
      {
       "title": "تلاوة سورة طه",
       "q": "عبد الرحمن السديس تلاوة سورة طه"
      }
     ]
    }
   ]
  },
  {
   "name": "القارئ سعود الشريم",
   "g": 2,
   "sections": [
    {
     "title": "تلاوات",
     "videos": [
      {
       "title": "تلاوة سورة ياسين",
       "q": "سعود الشريم تلاوة سورة ياسين"
      },
      {
       "title": "تلاوة سورة الملك",
       "q": "سعود الشريم تلاوة سورة الملك"
      },
      {
       "title": "تلاوة سورة الواقعة",
       "q": "سعود الشريم تلاوة سورة الواقعة"
      },
      {
       "title": "تلاوة سورة الكهف",
       "q": "سعود الشريم تلاوة سورة الكهف"
      },
      {
       "title": "تلاوة سورة مريم",
       "q": "سعود الشريم تلاوة سورة مريم"
      },
      {
       "title": "تلاوة سورة طه",
       "q": "سعود الشريم تلاوة سورة طه"
      }
     ]
    }
   ]
  },
  {
   "name": "القارئ ناصر القطامي",
   "g": 2,
   "sections": [
    {
     "title": "تلاوات",
     "videos": [
      {
       "title": "تلاوة سورة ياسين",
       "q": "ناصر القطامي تلاوة سورة ياسين"
      },
      {
       "title": "تلاوة سورة الملك",
       "q": "ناصر القطامي تلاوة سورة الملك"
      },
      {
       "title": "تلاوة سورة الواقعة",
       "q": "ناصر القطامي تلاوة سورة الواقعة"
      },
      {
       "title": "تلاوة سورة الكهف",
       "q": "ناصر القطامي تلاوة سورة الكهف"
      },
      {
       "title": "تلاوة سورة مريم",
       "q": "ناصر القطامي تلاوة سورة مريم"
      }
     ]
    }
   ]
  },
  {
   "name": "القارئ أحمد العجمي",
   "g": 2,
   "sections": [
    {
     "title": "تلاوات",
     "videos": [
      {
       "title": "تلاوة سورة ياسين",
       "q": "أحمد العجمي تلاوة سورة ياسين"
      },
      {
       "title": "تلاوة سورة الملك",
       "q": "أحمد العجمي تلاوة سورة الملك"
      },
      {
       "title": "تلاوة سورة الواقعة",
       "q": "أحمد العجمي تلاوة سورة الواقعة"
      },
      {
       "title": "تلاوة سورة الكهف",
       "q": "أحمد العجمي تلاوة سورة الكهف"
      },
      {
       "title": "تلاوة سورة مريم",
       "q": "أحمد العجمي تلاوة سورة مريم"
      }
     ]
    }
   ]
  },
  {
   "name": "الشيخ محمد عبده",
   "g": 3,
   "sections": [
    {
     "title": "رقائق",
     "videos": [
      {
       "title": "الإخلاص لله",
       "q": "محمد عبده الإخلاص لله"
      },
      {
       "title": "الصبر",
       "q": "محمد عبده الصبر"
      },
      {
       "title": "الشكر",
       "q": "محمد عبده الشكر"
      },
      {
       "title": "التوكل على الله",
       "q": "محمد عبده التوكل على الله"
      },
      {
       "title": "خطبة وموعظة",
       "q": "محمد عبده خطبة وموعظة"
      },
      {
       "title": "دروس ومحاضرات",
       "q": "محمد عبده دروس ومحاضرات"
      },
      {
       "title": "الاستغفار",
       "q": "محمد عبده الاستغفار"
      }
     ]
    },
    {
     "title": "أسرة وأخلاق",
     "videos": [
      {
       "title": "الصدق",
       "q": "محمد عبده الصدق"
      },
      {
       "title": "حسن الخلق",
       "q": "محمد عبده حسن الخلق"
      }
     ]
    },
    {
     "title": "فقه",
     "videos": [
      {
       "title": "الخشوع في الصلاة",
       "q": "محمد عبده الخشوع في الصلاة"
      },
      {
       "title": "أحكام الزكاة",
       "q": "محمد عبده أحكام الزكاة"
      }
     ]
    }
   ]
  },
  {
   "name": "الشيخ أحمد نصر",
   "g": 3,
   "sections": [
    {
     "title": "رقائق",
     "videos": [
      {
       "title": "الإخلاص لله",
       "q": "أحمد نصر الإخلاص لله"
      },
      {
       "title": "الصبر",
       "q": "أحمد نصر الصبر"
      },
      {
       "title": "الشكر",
       "q": "أحمد نصر الشكر"
      },
      {
       "title": "التوكل على الله",
       "q": "أحمد نصر التوكل على الله"
      },
      {
       "title": "خطبة وموعظة",
       "q": "أحمد نصر خطبة وموعظة"
      },
      {
       "title": "دروس ومحاضرات",
       "q": "أحمد نصر دروس ومحاضرات"
      },
      {
       "title": "الاستغفار",
       "q": "أحمد نصر الاستغفار"
      }
     ]
    },
    {
     "title": "أسرة وأخلاق",
     "videos": [
      {
       "title": "الصدق",
       "q": "أحمد نصر الصدق"
      },
      {
       "title": "حسن الخلق",
       "q": "أحمد نصر حسن الخلق"
      }
     ]
    },
    {
     "title": "فقه",
     "videos": [
      {
       "title": "الخشوع في الصلاة",
       "q": "أحمد نصر الخشوع في الصلاة"
      }
     ]
    }
   ]
  },
  {
   "name": "الشيخ النفيس",
   "g": 3,
   "sections": [
    {
     "title": "رقائق",
     "videos": [
      {
       "title": "الإخلاص لله",
       "q": "النفيس الإخلاص لله"
      },
      {
       "title": "الصبر",
       "q": "النفيس الصبر"
      },
      {
       "title": "الشكر",
       "q": "النفيس الشكر"
      },
      {
       "title": "التوكل على الله",
       "q": "النفيس التوكل على الله"
      },
      {
       "title": "خطبة وموعظة",
       "q": "النفيس خطبة وموعظة"
      },
      {
       "title": "دروس ومحاضرات",
       "q": "النفيس دروس ومحاضرات"
      },
      {
       "title": "الاستغفار",
       "q": "النفيس الاستغفار"
      }
     ]
    },
    {
     "title": "أسرة وأخلاق",
     "videos": [
      {
       "title": "الصدق",
       "q": "النفيس الصدق"
      },
      {
       "title": "حسن الخلق",
       "q": "النفيس حسن الخلق"
      }
     ]
    },
    {
     "title": "فقه",
     "videos": [
      {
       "title": "الخشوع في الصلاة",
       "q": "النفيس الخشوع في الصلاة"
      }
     ]
    }
   ]
  },
  {
   "name": "الشيخ الأواني",
   "g": 3,
   "sections": [
    {
     "title": "رقائق",
     "videos": [
      {
       "title": "الإخلاص لله",
       "q": "الأواني الإخلاص لله"
      },
      {
       "title": "الصبر",
       "q": "الأواني الصبر"
      },
      {
       "title": "الشكر",
       "q": "الأواني الشكر"
      },
      {
       "title": "التوكل على الله",
       "q": "الأواني التوكل على الله"
      },
      {
       "title": "خطبة وموعظة",
       "q": "الأواني خطبة وموعظة"
      },
      {
       "title": "دروس ومحاضرات",
       "q": "الأواني دروس ومحاضرات"
      },
      {
       "title": "الاستغفار",
       "q": "الأواني الاستغفار"
      }
     ]
    },
    {
     "title": "أسرة وأخلاق",
     "videos": [
      {
       "title": "الصدق",
       "q": "الأواني الصدق"
      },
      {
       "title": "حسن الخلق",
       "q": "الأواني حسن الخلق"
      }
     ]
    },
    {
     "title": "فقه",
     "videos": [
      {
       "title": "الخشوع في الصلاة",
       "q": "الأواني الخشوع في الصلاة"
      }
     ]
    }
   ]
  },
  {
   "name": "الشيخ القرافي",
   "g": 3,
   "sections": [
    {
     "title": "رقائق",
     "videos": [
      {
       "title": "الإخلاص لله",
       "q": "القرافي الإخلاص لله"
      },
      {
       "title": "الصبر",
       "q": "القرافي الصبر"
      },
      {
       "title": "الشكر",
       "q": "القرافي الشكر"
      },
      {
       "title": "التوكل على الله",
       "q": "القرافي التوكل على الله"
      },
      {
       "title": "خطبة وموعظة",
       "q": "القرافي خطبة وموعظة"
      },
      {
       "title": "دروس ومحاضرات",
       "q": "القرافي دروس ومحاضرات"
      },
      {
       "title": "الاستغفار",
       "q": "القرافي الاستغفار"
      }
     ]
    },
    {
     "title": "أسرة وأخلاق",
     "videos": [
      {
       "title": "الصدق",
       "q": "القرافي الصدق"
      },
      {
       "title": "حسن الخلق",
       "q": "القرافي حسن الخلق"
      }
     ]
    },
    {
     "title": "فقه",
     "videos": [
      {
       "title": "الخشوع في الصلاة",
       "q": "القرافي الخشوع في الصلاة"
      }
     ]
    }
   ]
  }
 ]
};
