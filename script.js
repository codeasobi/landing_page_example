// year
document.getElementById('year').textContent = new Date().getFullYear();

// multi-language
const I18N = {
    'zh-TW': {
        brand: 'Nordic Home',
        'nav.features': '探索風格',
        'nav.collections': '精選空間',
        'nav.testimonials': '心得見證',
        'nav.about': '關於我',
        'nav.contact': '聯絡',
        'hero.title': '以北歐美學，營造溫暖而有秩序的家',
        'hero.subtitle': '留白、自然材質與柔和光感，形塑你理想的生活場景。',
        'hero.cta': '免費諮詢與設計提案',
        'features.title': '北歐風的三個關鍵價值',
        'features.natural.title': '自然材質',
        'features.natural.desc': '選用木質、亞麻與中性色調，帶來放鬆與平衡。',
        'features.function.title': '機能至上',
        'features.function.desc': '簡潔線條與收納規劃，兼顧美感與日常實用。',
        'features.light.title': '舒適光感',
        'features.light.desc': '大量自然光與柔霧燈具，營造溫暖氛圍。',
        'collections.title': '生活情境精選',
        'collections.living': '客廳：留白與木質，安靜的談天角落',
        'collections.bedroom': '臥室：棉麻觸感，深度睡眠的儀式',
        'collections.dining': '餐廳：簡約餐桌，讓日常更有溫度',
        'testimonials.title': '使用者心得',
        'testimonials.1': '設計師以極簡手法整理動線，我家小孩也更好收納了！',
        'testimonials.2': '材質與光線真的有差，回家就像在北歐度假。',
        'about.title': '關於我',
        'about.body': '專注北歐風格空間策劃與視覺整合，將自然、機能與光線帶進每一個日常角落。',
        'cta.title': '需要設計建議嗎？',
        'cta.desc': '留下聯絡方式，3 個工作天內給你初步提案。',
        'cta.submit': '送出需求',
        'footer.backTop': '回到頂部'
    },
    'en': {
        brand: 'Nordic Home',
        'nav.features': 'Style',
        'nav.collections': 'Collections',
        'nav.testimonials': 'Testimonials',
        'nav.about': 'About',
        'nav.contact': 'Contact',
        'hero.title': 'Warm minimalism inspired by Nordic aesthetics',
        'hero.subtitle': 'Natural materials and soft light to shape your ideal life.',
        'hero.cta': 'Free Consultation & Design Brief',
        'features.title': 'Three Essentials of Nordic Style',
        'features.natural.title': 'Natural Materials',
        'features.natural.desc': 'Wood, linen and neutrals for balance and calm.',
        'features.function.title': 'Function First',
        'features.function.desc': 'Clean lines with smart storage for everyday use.',
        'features.light.title': 'Comfortable Light',
        'features.light.desc': 'Daylight and soft lamps for a warm ambience.',
        'collections.title': 'Curated Scenes',
        'collections.living': 'Living: Wood and whites for quiet conversations',
        'collections.bedroom': 'Bedroom: Linen textures for deep sleep',
        'collections.dining': 'Dining: Simple table, warmer daily meals',
        'testimonials.title': 'What Clients Say',
        'testimonials.1': 'Minimal planning improved our flow and storage—kids tidy up easier!',
        'testimonials.2': 'Materials and lighting changed everything—it feels like a Nordic retreat.',
        'about.title': 'About Me',
        'about.body': 'Focused on Nordic interiors blending nature, function and light into daily life.',
        'cta.title': 'Need Design Advice?',
        'cta.desc': 'Leave your contact, get a first brief within 3 business days.',
        'cta.submit': 'Send Request',
        'footer.backTop': 'Back to top'
    },
    'ja': {
        brand: 'Nordic Home',
        'nav.features': 'スタイル',
        'nav.collections': 'コレクション',
        'nav.testimonials': 'お客様の声',
        'nav.about': '私たちについて',
        'nav.contact': 'お問い合わせ',
        'hero.title': '北欧美学で、あたたかく整う暮らしへ',
        'hero.subtitle': '自然素材と柔らかな光で、理想の生活シーンを形に。',
        'hero.cta': '無料相談・デザインブリーフ',
        'features.title': '北欧スタイルの3つの要素',
        'features.natural.title': '自然素材',
        'features.natural.desc': '木材・リネン・ニュートラルカラーで心地よさを。',
        'features.function.title': '機能性',
        'features.function.desc': '無駄のないラインと収納で、日常に寄り添う。',
        'features.light.title': '光の心地よさ',
        'features.light.desc': '自然光と柔らかな灯りで温もりを演出。',
        'collections.title': 'シーン別セレクション',
        'collections.living': 'リビング：木と白で落ち着く会話の空間',
        'collections.bedroom': 'ベッドルーム：リネンの肌触りで深い眠りへ',
        'collections.dining': 'ダイニング：シンプルな食卓で日常が豊かに',
        'testimonials.title': 'お客様の声',
        'testimonials.1': '最小限の計画で動線と収納が改善。子どもも片付けやすい！',
        'testimonials.2': '素材と光で家が別世界に。北欧のリトリートのよう。',
        'about.title': '私について',
        'about.body': '自然・機能・光を調和させる北欧インテリアを提案します。',
        'cta.title': 'デザインのご相談は？',
        'cta.desc': 'ご連絡先をお知らせください。3営業日以内にご提案します。',
        'cta.submit': '送信',
        'footer.backTop': 'トップへ戻る'
    }
};


// change language
const langButtons = document.querySelectorAll('.lang-btn');
langButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
        const lang = btn.getAttribute('data-lang');
        langButtons.forEach(function (b) { b.classList.remove('lang-btn--active'); });
        btn.classList.add('lang-btn--active');
        applyI18n(lang);
    });
});

function applyI18n(lang) {
    const dict = I18N[lang] || I18N['zh-TW'];
    document.querySelectorAll('[data-i18n]')
        .forEach(function (el) {
            const key = el.getAttribute('data-i18n');
            if (key && dict[key]) {
                el.textContent = dict[key];
            }
        });
}

// scroll smoothly
document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
        const target = document.querySelector(a.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
})