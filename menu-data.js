/* ================= MENU DATA =================
   Structure supports up to two levels of sub-filtering.
   Categories: سندويشات، وجبات، سلطات، مقبلات، إضافات
============================================== */
window.MENU = {
  categories: [
    {
      id: "sandwiches",
      name: "السندويش",
      // has sub level 1
      subs: [
        { id: "fried", name: "سندويش مقلي" },
        { id: "grilled", name: "سندويش مشوي" },
        { id: "meat", name: "سندويش لحمة" },
      ],
    },
    {
      id: "meals",
      name: "وجبات",
      subs: [
        { id: "single", name: "وجبة شخصية", subs2: [
          { id: "single-fried", name: "وجبات مقلية" },
          { id: "single-grilled", name: "وجبات مشوية" },
        ]},
        { id: "duo", name: "وجبة شخصين", subs2: [
          { id: "duo-fried", name: "وجبات مقلية" },
          { id: "duo-grilled", name: "وجبات مشوية" },
        ]},
        { id: "jumbo", name: "وجبة جامبو" },
      ],
    },
    { id: "salads", name: "سلطات" },
    { id: "appetizers", name: "مقبلات" },
    { id: "extras", name: "إضافات" },
  ],

  items: [
    /* ---------- سندويشات: مقلي ---------- */
    { cat: "sandwiches", sub: "fried", name: "سندويش كريسبي", ingredients: "مايونيز - خس - مخلل - قطع كريسبي - كول سلو", price: 350, img: "images/كريسبي.webp" },
    { cat: "sandwiches", sub: "fried", name: "سندويش اسكالوب", ingredients: "مايونيز - خس - مخلل - كول سلو - شرائح اسكالوب", price: 350, img: "/images/اسكالوب.webp" },
    { cat: "sandwiches", sub: "fried", name: "سندويش زنجر", ingredients: "مايونيز - خس - مخلل - قطع دجاج - روستو - صوص حار - ذرة - قطع كريسبي - كول سلو", price: 350, img: "/images/زنجر.webp" },
    { cat: "sandwiches", sub: "fried", name: "سندويش تشكن فلاي", ingredients: "مايونيز - خس - صوص الكوكتيل - سلامي - باربكيو - شيدر - قطع كريسبي - كول سلو", price: 400, img: "/images/تشكن فلاي.webp" },
    { cat: "sandwiches", sub: "fried", name: "سندويش سوبريم", ingredients: "مايونيز - خس - كول سلو - ذرة - روستو - قشقوان - صوص الكوكتيل - قطع كريسبي", price: 400, img: "/images/سوبريم.webp" },
    { cat: "sandwiches", sub: "fried", name: "سندويش روما", ingredients: "قطع كريسبي - هوت دوغ - شيدر - قشقوان - بشميل - ذرة - مايونيز - خس", price: 450, img: "/images/روما.webp" },
    { cat: "sandwiches", sub: "fried", name: "سندويش كرانشي", ingredients: "قطع كريسبي - مايونيز - خس - ذرة - روستو - قشقوان - كول سلو", price: 400, img: "/images/كرانشي.webp" },
    { cat: "sandwiches", sub: "fried", name: "سندويش كوردون", ingredients: " مايونيز - بطاطا - فطر - قشقوان - بشميل -شرائح اسكالوب", price: 400, img: "/images/كوردون.webp" },
    { cat: "sandwiches", sub: "fried", name: "سندويش دراغون", ingredients: "مايونيز - خس - روستو - شيدر - هالبينو - سبايسي - قطع كريسبي - كول سلو", price: 400, img: "/images/دراغون.webp" },
    { cat: "sandwiches", sub: "fried", name: "سندويش تشيلو", ingredients: "قطع كريسبي - فليفلة - بصل - مكس تشيز - صوص سبايسي - مايونيز - خس - مخلل - ذرة - كول سلو", price: 450, img: "/images/تشيلو.webp" },
    { cat: "sandwiches", sub: "fried", name: "سندويش بطاطا", ingredients: "كتشب - مايونيز - كول سلو", price: 150, img: "/images/بطاطا.webp" },
    { cat: "sandwiches", sub: "fried", name: "سندويش بطاطا مع جبنة", ingredients: "ذرة - مايونيز - كول سلو - قشقوان", price: 200, img: "/images/بطاطا تشيز.webp" },

    /* ---------- سندويشات: مشوي ---------- */
    { cat: "sandwiches", sub: "grilled", name: "سندويش فرانشيسكو", ingredients: "مايونيز - مخلل - قطع دجاج مشوية - فطر - قشقوان - صوص الشيف - ذرة", price: 400, img: "/images/فرانشيسكو.webp" },
    { cat: "sandwiches", sub: "grilled", name: "سندويش فاهيتا", ingredients: "مايونيز - مخلل - فليفلة - ذرة - جزر - بصل - صوص HP - فطر - قشقوان - قطع دجاج مشوية", price: 400, img: "/images/فاهيتا.webp" },
    { cat: "sandwiches", sub: "grilled", name: "سندويش ماليزيا", ingredients: "مايونيز - مخلل - فطر - هوت دوغ - فليفلة - ذرة - صوص بوفلو - قشقوان - قطع دجاج مشوية", price: 400, img: "/images/ماليزيا.webp" },
    { cat: "sandwiches", sub: "grilled", name: "سندويش طوكيو", ingredients: "مايونيز - مخلل - فطر - هوت دوغ - سلامي - باربكيو - قشقوان - فليفلة - قطع دجاج مشوية", price: 400, img: "/images/طوكيو.webp" },
    { cat: "sandwiches", sub: "grilled", name: "سندويش تشكن مشروم", ingredients: "مايونيز - مخلل - بصل - فطر - قشقوان - باربكيو - قطع دجاج مشوية", price: 400, img: "/images/تشكن مشروم.webp" },
    { cat: "sandwiches", sub: "grilled", name: "سندويش مكسيكي", ingredients: "مايونيز - مخلل - بصل - فليفلة - ذرة - سبايسي - فطر - قشقوان - قطع دجاج مشوية", price: 400, img: "/images/مكسيكي.webp" },
    { cat: "sandwiches", sub: "grilled", name: "سندويش فانتازيا", ingredients: "كريم ثوم - مخلل - بصل - ذرة - باربكيو - قشقوان - قطع دجاج مشوية", price: 400, img: "/images/فانتازيا.webp" },
    { cat: "sandwiches", sub: "grilled", name: "سندويش فيلدلفيا", ingredients: "فطر - فليفلة - بصل - صوص HP - مايونيز - مخلل - قشقوان", price: 400, img: "/images/فيلدلفيا.webp" },
    { cat: "sandwiches", sub: "grilled", name: "سندويش تشكن ساب", ingredients: "كريم ثوم - خس - ذرة - قشقوان - دجاج ناعم", price: 400, img: "/images/standar.webp" },
    { cat: "sandwiches", sub: "grilled", name: "سندويش ماغنوم", ingredients: "مايونيز - مخلل - فطر - فليفلة - خردل - سلامي - قشقوان - قطع دجاج مشوية", price: 400, img: "/images/ماغنوم.webp" },
    { cat: "sandwiches", sub: "grilled", name: "سندويش شيش كلاسيك", ingredients: "مايونيز - مخلل - كول سلو - قطع دجاج مشوية - بطاطا", price: 350, img: "/images/شيش.webp" },
    { cat: "sandwiches", sub: "grilled", name: "سندويش شيش مع جبنة", ingredients: "مايونيز - مخلل - كول سلو - قشقوان - قطع دجاج مشوية - بطاطا", price: 400, img: "/images/شيش.webp" },
    { cat: "sandwiches", sub: "grilled", name: "سندويش برغر دجاج كلاسيك", ingredients: "مايونيز - مخلل - كول سلو - كتشب - خس - بطاطا", price: 300, img: "/images/برغر كلاسيك.webp" },
    { cat: "sandwiches", sub: "grilled", name: "سندويش برغر دجاج مع جبنة", ingredients: "مايونيز - مخلل - كول سلو - كتشب - خس - بطاطا - شيدر", price: 350, img: "/images/برغر كلاسيك.webp" },
    { cat: "sandwiches", sub: "grilled", name: "سندويش برغر دجاج مع بيض", ingredients: "مايونيز - مخلل - كول سلو - كتشب - خس - بطاطا - بيض", price: 350, img: "/images/برغر كلاسيك.webp" },
    { cat: "sandwiches", sub: "grilled", name: "سندويش برغر دجاج كامل", ingredients: "مايونيز - مخلل - كول سلو - كتشب - خس - بطاطا - بيض - شيدر", price: 400, img: "/images/برغر كلاسيك.webp" },
    // { cat: "sandwiches", sub: "grilled", name: "سندويش تشكن سبسيال", ingredients: "مايونيز - خس - سلامي - شيدر - باربكيور - ذرة - قطع دجاج مشوية", price: 400, img: "/images/sandwich-meat.webp" },
    { cat: "sandwiches", sub: "grilled", name: "سندويش شاورما صمون", ingredients: "كريم ثوم - مخلل - دبس رمان - صوص حار - قطع دجاج مشوية", price: 250, img: "/images/شاورما.webp" },
    
   

    /* ---------- سندويشات: لحمة ---------- */
    { cat: "sandwiches", sub: "meat", name: "سندويش برجر لحمة كلاسيك", ingredients: "مايونيز - مخلل - كول سلو - خس", price: 400, img: "/images/برغر لحمة.webp" },
    { cat: "sandwiches", sub: "meat", name: "سندويش برجر لحمة مع بيض", ingredients: "مايونيز - مخلل - كول سلو - خس - بيض", price: 450, img: "/images/برغر لحمة.webp" },
    { cat: "sandwiches", sub: "meat", name: "سندويش برجر لحمة مع جبنة", ingredients: "مايونيز - مخلل - كول سلو - خس - شيدر", price: 450, img: "/images/برغر لحمة.webp" },
    { cat: "sandwiches", sub: "meat", name: "سندويش برجر لحمة كامل", ingredients: "مايونيز - مخلل - كول سلو - خس - بيض - شيدر", price: 500, img: "/images/برغر لحمة.webp" },
    { cat: "sandwiches", sub: "meat", name: "سندويش سجق", ingredients: "سجق(لحم غنم) - مخلل", price: 350, img: "/images/سجق.webp" },
    { cat: "sandwiches", sub: "meat", name: "سندويش توشكا", ingredients: "سجق(لحم غنم) - قشقوان", price: 400, img: "/images/سجق.webp" },

    /* ---------- وجبات: شخص ---------- */

    // مقلية
    { cat: "meals", sub: "single", sub2: "single-fried", name: "وجبة شخصية كريسبي", ingredients: "4 قطع كريسبي - كول سلو - بطاطا - مايونيز - كتشب حلو - كتشب حد - خبزة  ", price: 550, img: "/images/شخصية كريسبي.webp" },
    { cat: "meals", sub: "single", sub2: "single-fried", name: "وجبة شخصية اسكالوب", ingredients: "4 قطع اسكالوب - كول سلو - بطاطا - مايونيز - كتشب حلو - كتشب حد - خبزة  ", price: 550, img: "/images/شخصية اسكالوب.webp" },
    { cat: "meals", sub: "single", sub2: "single-fried", name: "وجبة شخصية زنجر", ingredients: "3 قطع زنجر(سبايسي - روستو - ذرة) - كول سلو - بطاطا - مايونيز - كتشب حلو - كتشب حد - خبزة  ", price: 550, img: "/images/شخصية زنجر.webp" },
    { cat: "meals", sub: "single", sub2: "single-fried", name: "وجبة شخصية سوبريم", ingredients: " قطعتين سوبريم(روستو - ذرة) - كول سلو - بطاطا - مايونيز - سوسيرة كوكتيل - كتشب حلو - كتشب حد - خبزة  ", price: 650, img: "/images/شخصية سوبريم.webp" },
    { cat: "meals", sub: "single", sub2: "single-fried", name: "وجبة شخصية كرانشي", ingredients: "3 قطع كرانشي(ذرة - روستو - قشقوان) - كول سلو - بطاطا - مايونيز - كتشب حلو - كتشب حد - خبزة  ", price: 650, img: "/images/شخصية كرانشي.webp" },
    { cat: "meals", sub: "single", sub2: "single-fried", name: "وجبة شخصية تشيلو", ingredients: "3 قطع تشيلو(فليفلة - بصل - مكس تشيز - صوص بوفلو - ذرة) - كول سلو - بطاطا - مايونيز - كتشب حلو - كتشب حد - خبزة  ", price: 650, img: "/images/شخصية تشيلو.webp" },
    { cat: "meals", sub: "single", sub2: "single-fried", name: "وجبة شخصية دراغون", ingredients: "3 قطع دراغون(روستو - شيدر - هالبينو - سبايسي) - كول سلو - بطاطا - مايونيز - كتشب حلو - كتشب حد - خبزة  ", price: 650, img: "/images/شخصية دراغون.webp" },
    { cat: "meals", sub: "single", sub2: "single-fried", name: "وجبة شخصية تشكن فلاي", ingredients: "3 قطع تشكن فلاي(صوص الكوكتيل - سلامي - باربكيو - شيدر) - كول سلو - بطاطا - مايونيز - كتشب حلو - كتشب حد - خبزة  ", price: 650, img: "/images/شخصية تشكن فلاي.webp" },
    { cat: "meals", sub: "single", sub2: "single-fried", name: "وجبة شخصية روما", ingredients: "3 قطع روما(هوت دوغ - شيدر - قشقوان - بشميل - ذرة) - كول سلو - بطاطا - مايونيز - كتشب حلو - كتشب حد - خبزة  ", price: 650, img: "/images/شخصية روما.webp" },

    // مشوية
    { cat: "meals", sub: "single", sub2: "single-grilled", name: "وجبة شخصية طوكيو", ingredients: "قطع دجاج مشوية(فطر - هوت دوغ - سلامي - باربكيو - قشقوان - فليفلة) - كول سلو - بطاطا - مايونيز - كتشب حلو - كتشب حد - خبزة", price: 650, img: "/images/شخصية طوكيو.webp" },
    { cat: "meals", sub: "single", sub2: "single-grilled", name: "وجبة شخصية فيلدلفيا", ingredients: "قطع دجاج مشوية(فطر - فليفلة - بصل - صوص HP - قشقوان) - كول سلو - بطاطا - مايونيز - كتشب حلو - كتشب حد - خبزة", price: 650, img: "/images/شخصية فيلدلفيا.webp" },
    { cat: "meals", sub: "single", sub2: "single-grilled", name: "وجبة شخصية ماليزيا", ingredients: "قطع دجاج مشوية(فطر - هوت دوغ - فليفلة - ذرة - صوص بوفلو - قشقوان) - كول سلو - بطاطا - مايونيز - كتشب حلو - كتشب حد - خبزة", price: 650, img: "/images/شخصية ماليزيا.webp" },
    { cat: "meals", sub: "single", sub2: "single-grilled", name: "وجبة شخصية فاهيتا", ingredients: "قطع دجاج مشوية(فليفلة - ذرة - جزر - بصل - صوص HP - فطر - قشقوان) - كول سلو - بطاطا - مايونيز - كتشب حلو - كتشب حد - خبزة", price: 650, img: "/images/شخصية فاهيتا.webp" },
    { cat: "meals", sub: "single", sub2: "single-grilled", name: "وجبة شخصية ماغنوم", ingredients: "قطع دجاج مشوية(فطر - فليفلة - خردل - سلامي - قشقوان) - كول سلو - بطاطا - مايونيز - كتشب حلو - كتشب حد - خبزة", price: 650, img: "/images/شخصية ماغنوم.webp" },
    { cat: "meals", sub: "single", sub2: "single-grilled", name: "وجبة شخصية تشكن مشروم", ingredients: "قطع دجاج مشوية(بصل - فطر - قشقوان - باربكيو) - كول سلو - بطاطا - مايونيز - كتشب حلو - كتشب حد - خبزة", price: 650, img: "/images/شخصية تشكن مشروم.webp" },
    { cat: "meals", sub: "single", sub2: "single-grilled", name: "وجبة شخصية فرانشيسكو", ingredients: "قطع دجاج مشوية(ذرة - فطر - قشقوان - صوص الشيف) - كول سلو - بطاطا - مايونيز - كتشب حلو - كتشب حد - خبزة", price: 650, img: "/images/شخصية فرانشيسكو.webp" },
    { cat: "meals", sub: "single", sub2: "single-grilled", name: "وجبة شخصية فانتازيا", ingredients: "قطع دجاج مشوية(بصل - ذرة - باربكيو - قشقوان) - كول سلو - بطاطا - كريم ثوم - كتشب حلو - كتشب حد - خبزة", price: 650, img: "/images/شخصية فانتازيا.webp" },
    { cat: "meals", sub: "single", sub2: "single-grilled", name: "وجبة شخصية شيش كلاسيك", ingredients: "سيخين شيش - كول سلو - بطاطا - مايونيز - كتشب حلو - كتشب حد - خبزة", price: 550, img: "/images/شخصية شيش.webp" },
    { cat: "meals", sub: "single", sub2: "single-grilled", name: "وجبة شخصية شيش مع جبنة", ingredients: "سيخين شيش(قشقوان) - كول سلو - بطاطا - مايونيز - كتشب حلو - كتشب حد - خبزة", price: 650, img: "/images/شخصية شيش.webp" },
    { cat: "meals", sub: "single", sub2: "single-grilled", name: "وجبة شخصية مكسيكي", ingredients: "قطع دجاج مشوية(بصل - فليفلة - ذرة - سبايسي - فطر - قشقوان) - كول سلو - بطاطا - مايونيز - كتشب حلو - كتشب حد - خبزة", price: 650, img: "/images/شخصية مكسيكي.webp" },
    { cat: "meals", sub: "single", sub2: "single-grilled", name: "وجبة شخصية شرحات كريمة", ingredients: "قطع دجاج مشوية(كريمة - فطر - فليفلة - صوص الشيف) - كول سلو - بطاطا - مايونيز - كتشب حلو - كتشب حد - خبزة", price: 650, img: "/images/شخصية شرحات كريمة.webp" },
    { cat: "meals", sub: "single", sub2: "single-grilled", name: "وجبة شخصية شاورما", ingredients: "سندويش عربي(كريم ثوم - دبس رمان - مخلل - حد) - معكرونة - بطاطا - كريم ثوم ", price: 500, img: "/images/شخصية شاورما.webp" },






    /* ---------- وجبات: شخصين ---------- */

    // مقلية
    { cat: "meals", sub: "duo", sub2: "duo-fried", name: "وجبة شخصين كريسبي", ingredients: "6 قطع كريسبي - كول سلو - بطاطا - معكرونة - سوسيرة مايونيز عدد 2 - كتشب حلو عدد 2 - كتشب حد - خبزة  ", price: 750, img: "/images/شخصين كريسبي.webp" },
    { cat: "meals", sub: "duo", sub2: "duo-fried", name: "وجبة شخصين اسكالوب", ingredients: "6 قطع اسكالوب - كول سلو - بطاطا -  معكرونة - سوسيرة مايونيز عدد2  - كتشب حلو عدد 2 - كتشب حد - خبزة  ", price: 750, img: "/images/شخصين اسكالوب.webp" },
    { cat: "meals", sub: "duo", sub2: "duo-fried", name: "وجبة شخصين زنجر", ingredients: "5 قطع زنجر(سبايسي - روستو - ذرة) - كول سلو - بطاطا - معكرونة - سوسيرة مايونيز عدد 2 - كتشب حلو عدد 2 - كتشب حد - خبزة  ", price: 800, img: "/images/شخصين زنجر.webp" },
    { cat: "meals", sub: "duo", sub2: "duo-fried", name: "وجبة شخصين سوبريم", ingredients: "4 قطع سوبريم(روستو - ذرة) - كول سلو - بطاطا - معكرونة - سوسيرة مايونيز عدد 2 - سوسيرة كوكتيل - كتشب حلو عدد 2 - كتشب حد - خبزة  ", price: 900, img: "/images/شخصين سوبريم.webp" },
    { cat: "meals", sub: "duo", sub2: "duo-fried", name: "وجبة شخصين كرانشي", ingredients: "5 قطع كرانشي(ذرة - روستو - قشقوان) - كول سلو - بطاطا - معكرونة - سوسيرة مايونيز عدد 2 - كتشب حلو عدد 2 - كتشب حد - خبزة  ", price: 900, img: "/images/شخصين كرانشي.webp" },
    { cat: "meals", sub: "duo", sub2: "duo-fried", name: "وجبة شخصين تشيلو", ingredients: "5 قطع تشيلو(فليفلة - بصل - مكس تشيز - صوص بوفلو - ذرة) - كول سلو - بطاطا -  معكرونة - سوسيرة مايونيز عدد 2 - كتشب حلو عدد 2 - كتشب حد - خبزة  ", price: 900, img: "/images/شخصين تشيلو.webp" },
    { cat: "meals", sub: "duo", sub2: "duo-fried", name: "وجبة شخصين دراغون", ingredients: "5 قطع دراغون(روستو - شيدر - هالبينو - سبايسي) - كول سلو - بطاطا - معكرونة - سوسيرة مايونيز عدد 2  - كتشب حلو عدد 2 - كتشب حد - خبزة  ", price: 850, img: "/images/شخصين دراغون.webp" },
    { cat: "meals", sub: "duo", sub2: "duo-fried", name: "وجبة شخصين تشكن فلاي", ingredients: "5 قطع تشكن فلاي(صوص الكوكتيل - سلامي - باربكيو - شيدر) - كول سلو - بطاطا - معكرونة - سوسيرة مايونيز عدد 2 - كتشب حلو عدد 2 - كتشب حد - خبزة  ", price: 850, img: "/images/شخصين تشكن فلاي.webp" },
    { cat: "meals", sub: "duo", sub2: "duo-fried", name: "وجبة شخصين روما", ingredients: "5 قطع روما(هوت دوغ - شيدر - قشقوان - بشميل - ذرة) - كول سلو - بطاطا - معكرونة - سوسيرة مايونيز عدد 2 - كتشب حلو عدد 2 - كتشب حد - خبزة  ", price: 1000, img: "/images/شخصين روما.webp" },
    { cat: "meals", sub: "duo", sub2: "duo-fried", name: "وجبة شخصين كوردون", ingredients: " صدر دجاج محشي(قشقوان - روستو - فطر) - بشميل - كول سلو - بطاطا - معكرونة - سوسيرة مايونيز عدد 2 - كتشب حلو عدد 2 - كتشب حد - خبزة  ", price: 1000, img: "/images/شخصين كوردون.webp" },

    // مشوية


    { cat: "meals", sub: "duo", sub2: "duo-grilled", name: "وجبة شخصين طوكيو", ingredients: "قطع دجاج مشوية(فطر - هوت دوغ - سلامي - باربكيو - قشقوان - فليفلة) - كول سلو - بطاطا - معكرونة - سوسيرة مايونيز عدد 2 - كتشب حلو عدد 2 - كتشب حد - خبزة", price: 850, img: "/images/شخصين طوكيو.webp" },
    { cat: "meals", sub: "duo", sub2: "duo-grilled", name: "وجبة شخصين فيلدلفيا", ingredients: "قطع دجاج مشوية(فطر - فليفلة - بصل - صوص HP - قشقوان) - كول سلو - بطاطا - معكرونة - سوسيرة مايونيز عدد 2 - كتشب حلو عدد 2 - كتشب حد - خبزة", price: 850, img: "/images/شخصين فيلدلفيا.webp" },
    { cat: "meals", sub: "duo", sub2: "duo-grilled", name: "وجبة شخصين ماليزيا", ingredients: "قطع دجاج مشوية(فطر - هوت دوغ - فليفلة - ذرة - صوص بوفلو - قشقوان) - كول سلو - بطاطا - معكرونة - سوسيرة مايونيز عدد 2 - كتشب حلو عدد 2 - كتشب حد - خبزة", price: 850, img: "/images/شخصين ماليزيا.webp" },
    { cat: "meals", sub: "duo", sub2: "duo-grilled", name: "وجبة شخصين فاهيتا", ingredients: "قطع دجاج مشوية(فليفلة - ذرة - جزر - بصل - صوص HP - فطر - قشقوان) - كول سلو - بطاطا - معكرونة - سوسيرة مايونيز عدد 2 - كتشب حلو عدد 2 - كتشب حد - خبزة", price: 850, img: "/images/شخصين فاهيتا.webp" },
    { cat: "meals", sub: "duo", sub2: "duo-grilled", name: "وجبة شخصين ماغنوم", ingredients: "قطع دجاج مشوية(فطر - فليفلة - خردل - سلامي - قشقوان) - كول سلو - بطاطا - معكرونة - سوسيرة مايونيز عدد 2 - كتشب حلو عدد 2 - كتشب حد - خبزة", price: 850, img: "/images/شخصين ماغنوم.webp" },
    { cat: "meals", sub: "duo", sub2: "duo-grilled", name: "وجبة شخصين تشكن مشروم", ingredients: "قطع دجاج مشوية(بصل - فطر - قشقوان - باربكيو) - كول سلو - بطاطا - معكرونة - سوسيرة مايونيز عدد 2 - كتشب حلو عدد 2 - كتشب حد - خبزة", price: 850, img: "/images/شخصين تشكن مشروم.webp" },
    { cat: "meals", sub: "duo", sub2: "duo-grilled", name: "وجبة شخصين فرانشيسكو", ingredients: "قطع دجاج مشوية(ذرة - فطر - قشقوان - صوص الشيف) - كول سلو - بطاطا - معكرونة - سوسيرة مايونيز عدد 2 - كتشب حلو عدد 2 - كتشب حد - خبزة", price: 850, img: "/images/شخصين فرانشيسكو.webp" },
    { cat: "meals", sub: "duo", sub2: "duo-grilled", name: "وجبة شخصين فانتازيا", ingredients: "قطع دجاج مشوية(بصل - ذرة - باربكيو - قشقوان) - كول سلو - بطاطا - معكرونة - سوسيرة كريم ثوم عدد 2 - كتشب حلو عدد 2 - كتشب حد - خبزة", price: 850, img: "/images/شخصين فانتازيا.webp" },
    { cat: "meals", sub: "duo", sub2: "duo-grilled", name: "وجبة شخصين شيش كلاسيك", ingredients: "4 اسياخ شيش - كول سلو - بطاطا - معكرونة - سوسيرة مايونيز عدد 2 - كتشب حلو عدد 2 - كتشب حد - خبزة", price: 750, img: "/images/شخصين شيش.webp" },
    { cat: "meals", sub: "duo", sub2: "duo-grilled", name: "وجبة شخصين شيش مع جبنة", ingredients: "4 اسياخ شيش(قشقوان) - كول سلو - بطاطا - معكرونة - سوسيرة مايونيز عدد 2 - كتشب حلو عدد 2 - كتشب حد - خبزة", price: 800, img: "/images/شخصين شيش.webp" },
    { cat: "meals", sub: "duo", sub2: "duo-grilled", name: "وجبة شخصين مكسيكي", ingredients: "قطع دجاج مشوية(بصل - فليفلة - ذرة - سبايسي - فطر - قشقوان) - كول سلو - بطاطا - معكرونة - سوسيرة مايونيز عدد 2 - كتشب حلو عدد 2 - كتشب حد - خبزة", price: 850, img: "/images/شخصين مكسيكي.webp" },
    { cat: "meals", sub: "duo", sub2: "duo-grilled", name: "وجبة شخصين شرحات كريمة", ingredients: "قطع دجاج مشوية(كريمة - فطر - فليفلة - صوص الشيف) - كول سلو - بطاطا - معكرونة - سوسيرة مايونيز عدد 2 - كتشب حلو عدد 2 - كتشب حد - خبزة", price: 1000, img: "/images/شخصين شرحات كريمة.webp" },


    /* ---------- وجبات: جامبو ---------- */
    { cat: "meals", sub: "jumbo", name: "وجبة جامبو كريسبي", ingredients: "10 قطع كريسبي - اكسترا بطاطا - مايونيز - كول سلو ", price: 1000, img: "/images/جامبو كريسبي.webp" },
    { cat: "meals", sub: "jumbo", name: "وجبة جامبو اسكالوب", ingredients: "10 قطع اسكالوب - اكسترا بطاطا - مايونيز - كول سلو ", price: 1000, img: "/images/جامبو اسكالوب.webp" },
    { cat: "meals", sub: "jumbo", name: "وجبة جامبو زنجر", ingredients: "10 قطع زنجر(سبايسي - ذرة) - اكسترا بطاطا - مايونيز - كول سلو ", price: 1000, img: "/images/جامبو زنجر.webp" },
    { cat: "meals", sub: "jumbo", name: "وجبة جامبو سوبريم ميني", ingredients: "8 قطع سوبريم ميني - اكسترا بطاطا - مايونيز - كول سلو ", price: 1000, img: "/images/جامبو سوبريم.webp" },

    /* ---------- سلطات ---------- */
    { cat: "salads", name: "سلطة سيزر ", ingredients: "خس - صوص سيزر - دجاج - ميني توست - جبنة موزريلا", price: 400, img: "/images/سلطة سيزر.webp" },
    { cat: "salads", name: "سلطة ذرة", ingredients: "صوص الشيف - مخلل - فطر", price: 250, img: "/images/سلطة ذرة.webp" },
    { cat: "salads", name: "سلطة  كول سلو علبة 200غ", ingredients: "ملفوف - جزر - مايونيز", price: 150, img: "/images/علبة كول سلو.webp" },
    { cat: "salads", name: "سلطة  كول سلو صحن 500غ", ingredients: "ملفوف - جزر - مايونيز", price: 200, img: "/images/صحن كول سلو.webp" },
    { cat: "salads", name: " سلطة معكرونة باردة علبة صغيرة", ingredients: "جزر - فليفلة - صوص كوكتيل", price: 150, img: "/images/علبة معكرونة.webp" },
    { cat: "salads", name: " سلطة معكرونة باردة علبة كبيرة", ingredients: "جزر - فليفلة - صوص كوكتيل", price: 200, img: "/images/صحن معكرونة.webp" },

    /* ---------- مقبلات ---------- */
    { cat: "appetizers", name: "علبة بطاطا", ingredients: "بطاطا مقرمشة ذهبية ", price: 150, img: "/images/علبة بطاطا.webp" },
    { cat: "appetizers", name: "صحن بطاطا", ingredients: "بطاطا مقرمشة ذهبية ", price: 250, img: "/images/صحن بطاطا.webp" },
    { cat: "appetizers", name: "مرفق وجبة", ingredients: "معكرونة - مايونيز - كول سلو - بطاطا", price: 350, img: "/images/مرفق وجبة.webp" },


    /* ---------- إضافات ---------- */
    { cat: "extras", name: "مايونيز", ingredients: "200غ", price: 100, img: "/images/علبة مايونيز.webp" },
    { cat: "extras", name: "مايونيز", ingredients: "500غ", price: 200, img: "/images/علبة مايونيز.webp" },
    { cat: "extras", name: "سوسيرة مايونيز", ingredients: "40غ", price: 20, img: "/images/سوسيرة مايونيز.webp" },
    { cat: "extras", name: "سوسيرة باربكيو", ingredients: "40غ", price: 30, img: "/images/سوسيرة باربكيو.webp" },
    { cat: "extras", name: "سوسيرة بوفالو", ingredients: "40غ", price: 40, img: "/images/سوسيرة بوفالو.webp" },
    { cat: "extras", name: "سوسيرة شطة", ingredients: "40غ", price: 20, img: "/images/سوسيرة شطة.webp" },
    { cat: "extras", name: "سوسيرة كول سلو", ingredients: "40غ", price: 20, img: "/images/سوسيرة كول سلو.webp" },
    { cat: "extras", name: "سوسيرة هالبينو", ingredients: "40غ", price: 20, img: "/images/سوسيرة هالبينو.webp" },
  ],
};
