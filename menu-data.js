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
    { cat: "sandwiches", sub: "fried", name: "سندويش كريسبي", ingredients: "مايونيز - خس - مخلل - قطع كريسبي", price: 350, img: "/images/sandwich-meat.webp" },
    { cat: "sandwiches", sub: "fried", name: "سندويش اسكالوب", ingredients: "مايونيز - خس - مخلل - كول سلو - شرائح اسكالوب", price: 350, img: "/images/sandwich-meat.webp" },
    { cat: "sandwiches", sub: "fried", name: "سندويش زنجر", ingredients: "مايونيز - خس - مخلل - قطع دجاج - روستو - صوص حار - ذرة - قطع كريسبي", price: 350, img: "/images/sandwich-meat.webp" },
    { cat: "sandwiches", sub: "fried", name: "سندويش تشكن فلاي", ingredients: "مايونيز - خس - صوص الكوكتيل - سلامي - باربكيو - شيدر - قطع كريسبي", price: 400, img: "/images/sandwich-meat.webp" },
    { cat: "sandwiches", sub: "fried", name: "سندويش سوبريم", ingredients: "مايونيز - خس - كول سلو - ذرة - روستو - قشقوان - صوص الكوكتيل - قطع كريسبي", price: 400, img: "/images/sandwich-meat.webp" },
    { cat: "sandwiches", sub: "fried", name: "سندويش روما", ingredients: "قطع كريسبي - هوت دوغ - شيدر - قشقوان - بشميل - ذرة - مايونيز - خس", price: 450, img: "/images/sandwich-meat.webp" },
    { cat: "sandwiches", sub: "fried", name: "سندويش كرانشي", ingredients: "قطع كريسبي - مايونيز - خس - ذرة - روستو - قشقوان", price: 400, img: "/images/sandwich-meat.webp" },
    { cat: "sandwiches", sub: "fried", name: "سندويش كوردون", ingredients: " مايونيز - بطاطا - فطر - قشقوان - بشميل -شرائح اسكالوب", price: 400, img: "/images/sandwich-meat.webp" },
    { cat: "sandwiches", sub: "fried", name: "سندويش دراغون", ingredients: "مايونيز - خس - روستو - شيدر - هالبينو - سبايسي - قطع كريسبي", price: 400, img: "/images/sandwich-meat.webp" },
    { cat: "sandwiches", sub: "fried", name: "سندويش تشيللو", ingredients: "قطع كريسبي - فليفلة - بصل - مكس تشيز - صوص سبايسي - مايونيز - خس - مخلل - ذرة ", price: 450, img: "/images/sandwich-meat.webp" },
    { cat: "sandwiches", sub: "fried", name: "سندويش بطاطا", ingredients: "كتشب - مايونيز - كول سلو", price: 150, img: "/images/sandwich-meat.webp" },
    { cat: "sandwiches", sub: "fried", name: "سندويش بطاطا مع جبنة", ingredients: "ذرة - مايونيز - كول سلو - قشقوان", price: 200, img: "/images/sandwich-meat.webp" },

    /* ---------- سندويشات: مشوي ---------- */
    { cat: "sandwiches", sub: "grilled", name: "سندويش فرانشيسكو", ingredients: "مايونيز - مخلل - قطع دجاج مشوية - فطر - قشقوان - صوص الشيف - ذرة", price: 400, img: "/images/sandwich-meat.webp" },
    { cat: "sandwiches", sub: "grilled", name: "سندويش فاهيتا", ingredients: "مايونيز - مخلل - فليفلة - ذرة - جزر - بصل - صوص HP - فطر - قشقوان - قطع دجاج مشوية", price: 400, img: "/images/sandwich-meat.webp" },
    { cat: "sandwiches", sub: "grilled", name: "سندويش ماليزيا", ingredients: "مايونيز - مخلل - فطر - هوت دوغ - فليفلة - ذرة - صوص بوفلو - قشقوان - قطع دجاج مشوية", price: 400, img: "/images/sandwich-meat.webp" },
    { cat: "sandwiches", sub: "grilled", name: "سندويش طوكيو", ingredients: "مايونيز - مخلل - فطر - هوت دوغ - سلامي - باربكيو - قشقوان - فليفلة - قطع دجاج مشوية", price: 400, img: "/images/sandwich-meat.webp" },
    { cat: "sandwiches", sub: "grilled", name: "سندويش تشكن مشروم", ingredients: "مايونيز - مخلل - بصل - فطر - قشقوان - باربكيو - قطع دجاج مشوية", price: 400, img: "/images/sandwich-meat.webp" },
    { cat: "sandwiches", sub: "grilled", name: "سندويش مكسيكي", ingredients: "مايونيز - مخلل - بصل - فليفلة - ذرة - سبايسي - فطر - قشقوان - قطع دجاج مشوية", price: 400, img: "/images/sandwich-meat.webp" },
    { cat: "sandwiches", sub: "grilled", name: "سندويش فانتازيا", ingredients: "كريم ثوم - مخلل - بصل - ذرة - باربكيو - قشقوان - قطع دجاج مشوية", price: 400, img: "/images/sandwich-meat.webp" },

    { cat: "sandwiches", sub: "grilled", name: "سندويش تشكن ساب", ingredients: "كريم ثوم - خس - ذرة - قشقوان - دجاج ناعم", price: 400, img: "/images/sandwich-meat.webp" },
    { cat: "sandwiches", sub: "grilled", name: "سندويش ماغنوم", ingredients: "مايونيز - مخلل - فطر - فليفلة - خردل - سلامي - قشقوان - قطع دجاج مشوية", price: 400, img: "/images/sandwich-meat.webp" },
    { cat: "sandwiches", sub: "grilled", name: "سندويش شيش كلاسيك", ingredients: "مايونيز - مخلل - كول سلو - قطع دجاج مشوية - بطاطا", price: 350, img: "/images/sandwich-meat.webp" },
    { cat: "sandwiches", sub: "grilled", name: "سندويش شيش مع جبنة", ingredients: "مايونيز - مخلل - كول سلو - قشقوان - قطع دجاج مشوية - بطاطا", price: 400, img: "/images/sandwich-meat.webp" },
    { cat: "sandwiches", sub: "grilled", name: "سندويش برغر دجاج كلاسيك", ingredients: "مايونيز - مخلل - كول سلو - كتشب - خس - بطاطا", price: 300, img: "/images/sandwich-meat.webp" },
    { cat: "sandwiches", sub: "grilled", name: "سندويش برغر دجاج مع جبنة", ingredients: "مايونيز - مخلل - كول سلو - كتشب - خس - بطاطا - شيدر", price: 350, img: "/images/sandwich-meat.webp" },
    { cat: "sandwiches", sub: "grilled", name: "سندويش برغر دجاج مع بيض", ingredients: "مايونيز - مخلل - كول سلو - كتشب - خس - بطاطا - بيض", price: 350, img: "/images/sandwich-meat.webp" },
    { cat: "sandwiches", sub: "grilled", name: "سندويش برغر دجاج كامل", ingredients: "مايونيز - مخلل - كول سلو - كتشب - خس - بطاطا - بيض - شيدر", price: 400, img: "/images/sandwich-meat.webp" },
    { cat: "sandwiches", sub: "grilled", name: "سندويش تشكن سبسيال", ingredients: "مايونيز - خس - سلامي - شيدر - باربكيور - ذرة - قطع دجاج مشوية", price: 400, img: "/images/sandwich-meat.webp" },
    { cat: "sandwiches", sub: "grilled", name: "سندويش شاورما سمون", ingredients: "كريم ثوم - مخلل - دبس رمان - صوص حار - قطع دجاج مشوية", price: 250, img: "/images/sandwich-meat.webp" },
    
   

    /* ---------- سندويشات: لحمة ---------- */
    { cat: "sandwiches", sub: "meat", name: "سندويش برجر لحمة كلاسيك", ingredients: "مايونيز - مخلل - كول سلو - خس", price: 400, img: "/images/sandwich-meat.webp" },
    { cat: "sandwiches", sub: "meat", name: "سندويش برجر لحمة مع بيض", ingredients: "مايونيز - مخلل - كول سلو - خس - بيض", price: 450, img: "/images/sandwich-meat.webp" },
    { cat: "sandwiches", sub: "meat", name: "سندويش برجر لحمة مع جبنة", ingredients: "مايونيز - مخلل - كول سلو - خس - شيدر", price: 450, img: "/images/sandwich-meat.webp" },
    { cat: "sandwiches", sub: "meat", name: "سندويش برجر لحمة كامل", ingredients: "مايونيز - مخلل - كول سلو - خس - بيض - شيدر", price: 500, img: "/images/sandwich-meat.webp" },
    { cat: "sandwiches", sub: "meat", name: "سندويش سجق", ingredients: "سجق(لحم غنم) - مخلل", price: 350, img: "/images/sandwich-meat.webp" },
    { cat: "sandwiches", sub: "meat", name: "سندويش توشكا", ingredients: "سجق(لحم غنم) - قشقوان", price: 400, img: "/images/sandwich-meat.webp" },

    /* ---------- وجبات: شخص ---------- */

    // مقلية
    { cat: "meals", sub: "single", sub2: "single-fried", name: "وجبة شخصية كريسبي", ingredients: "4 قطع كريسبي - كول سلو - بطاطا - مايونيز - كتشب حلو - كتشب حد - خبزة  ", price: 550, img: "/images/sandwich-meat.webp" },
    { cat: "meals", sub: "single", sub2: "single-fried", name: "وجبة شخصية اسكالوب", ingredients: "4 قطع اسكالوب - كول سلو - بطاطا - مايونيز - كتشب حلو - كتشب حد - خبزة  ", price: 550, img: "/images/sandwich-meat.webp" },
    { cat: "meals", sub: "single", sub2: "single-fried", name: "وجبة شخصية زنجر", ingredients: "3 قطع زنجر(سبايسي - روستو - ذرة) - كول سلو - بطاطا - مايونيز - كتشب حلو - كتشب حد - خبزة  ", price: 550, img: "/images/sandwich-meat.webp" },
    { cat: "meals", sub: "single", sub2: "single-fried", name: "وجبة شخصية سوبريم", ingredients: " قطعتين سوبريم(روستو - ذرة) - كول سلو - بطاطا - مايونيز - سوسيرة كوكتيل - كتشب حلو - كتشب حد - خبزة  ", price: 650, img: "/images/sandwich-meat.webp" },
    { cat: "meals", sub: "single", sub2: "single-fried", name: "وجبة شخصية كرانشي", ingredients: "3 قطع كرانشي(ذرة - روستو - قشقوان) - كول سلو - بطاطا - مايونيز - كتشب حلو - كتشب حد - خبزة  ", price: 650, img: "/images/sandwich-meat.webp" },
    { cat: "meals", sub: "single", sub2: "single-fried", name: "وجبة شخصية تشيللو", ingredients: "3 قطع تشيللو(فليفلة - بصل - مكس تشيز - صوص بوفلو - ذرة) - كول سلو - بطاطا - مايونيز - كتشب حلو - كتشب حد - خبزة  ", price: 650, img: "/images/sandwich-meat.webp" },
    { cat: "meals", sub: "single", sub2: "single-fried", name: "وجبة شخصية دراغون", ingredients: "3 قطع دراغون(روستو - شيدر - هالبينو - سبايسي) - كول سلو - بطاطا - مايونيز - كتشب حلو - كتشب حد - خبزة  ", price: 650, img: "/images/sandwich-meat.webp" },
    { cat: "meals", sub: "single", sub2: "single-fried", name: "وجبة شخصية تشكن فلاي", ingredients: "3 قطع تشكن فلاي(صوص الكوكتيل - سلامي - باربكيو - شيدر) - كول سلو - بطاطا - مايونيز - كتشب حلو - كتشب حد - خبزة  ", price: 650, img: "/images/sandwich-meat.webp" },
    { cat: "meals", sub: "single", sub2: "single-fried", name: "وجبة شخصية روما", ingredients: "3 قطع روما(هوت دوغ - شيدر - قشقوان - بشميل - ذرة) - كول سلو - بطاطا - مايونيز - كتشب حلو - كتشب حد - خبزة  ", price: 650, img: "/images/sandwich-meat.webp" },

    // مشوية
    { cat: "meals", sub: "single", sub2: "single-grilled", name: "وجبة شخصية طوكيو", ingredients: "قطع دجاج مشوية(فطر - هوت دوغ - سلامي - باربكيو - قشقوان - فليفلة) - كول سلو - بطاطا - مايونيز - كتشب حلو - كتشب حد - خبزة", price: 650, img: "/images/sandwich-meat.webp" },
    { cat: "meals", sub: "single", sub2: "single-grilled", name: "وجبة شخصية ماليزيا", ingredients: "قطع دجاج مشوية(فطر - هوت دوغ - فليفلة - ذرة - صوص بوفلو - قشقوان) - كول سلو - بطاطا - مايونيز - كتشب حلو - كتشب حد - خبزة", price: 650, img: "/images/sandwich-meat.webp" },
    { cat: "meals", sub: "single", sub2: "single-grilled", name: "وجبة شخصية فاهيتا", ingredients: "قطع دجاج مشوية(فليفلة - ذرة - جزر - بصل - صوص HP - فطر - قشقوان) - كول سلو - بطاطا - مايونيز - كتشب حلو - كتشب حد - خبزة", price: 650, img: "/images/sandwich-meat.webp" },
    { cat: "meals", sub: "single", sub2: "single-grilled", name: "وجبة شخصية ماغنوم", ingredients: "قطع دجاج مشوية(فطر - فليفلة - خردل - سلامي - قشقوان) - كول سلو - بطاطا - مايونيز - كتشب حلو - كتشب حد - خبزة", price: 650, img: "/images/sandwich-meat.webp" },
    { cat: "meals", sub: "single", sub2: "single-grilled", name: "وجبة شخصية تشكن مشروم", ingredients: "قطع دجاج مشوية(بصل - فطر - قشقوان - باربكيو) - كول سلو - بطاطا - مايونيز - كتشب حلو - كتشب حد - خبزة", price: 650, img: "/images/sandwich-meat.webp" },
    { cat: "meals", sub: "single", sub2: "single-grilled", name: "وجبة شخصية فرانشيسكو", ingredients: "قطع دجاج مشوية(ذرة - فطر - قشقوان - صوص الشيف) - كول سلو - بطاطا - مايونيز - كتشب حلو - كتشب حد - خبزة", price: 650, img: "/images/sandwich-meat.webp" },
    { cat: "meals", sub: "single", sub2: "single-grilled", name: "وجبة شخصية فانتازيا", ingredients: "قطع دجاج مشوية(بصل - ذرة - باربكيو - قشقوان) - كول سلو - بطاطا - كريم ثوم - كتشب حلو - كتشب حد - خبزة", price: 650, img: "/images/sandwich-meat.webp" },
    { cat: "meals", sub: "single", sub2: "single-grilled", name: "وجبة شخصية شيش كلاسيك", ingredients: "سيخين شيش - كول سلو - بطاطا - مايونيز - كتشب حلو - كتشب حد - خبزة", price: 550, img: "/images/sandwich-meat.webp" },
    { cat: "meals", sub: "single", sub2: "single-grilled", name: "وجبة شخصية شيش مع جبنة", ingredients: "سيخين شيش(قشقوان) - كول سلو - بطاطا - مايونيز - كتشب حلو - كتشب حد - خبزة", price: 650, img: "/images/sandwich-meat.webp" },
    { cat: "meals", sub: "single", sub2: "single-grilled", name: "وجبة شخصية مكسيكي", ingredients: "قطع دجاج مشوية(بصل - فليفلة - ذرة - سبايسي - فطر - قشقوان) - كول سلو - بطاطا - مايونيز - كتشب حلو - كتشب حد - خبزة", price: 650, img: "/images/sandwich-meat.webp" },
    { cat: "meals", sub: "single", sub2: "single-grilled", name: "وجبة شخصية شرحات كريمة", ingredients: "قطع دجاج مشوية(كريمة - فطر - فليفلة - صوص الشيف) - كول سلو - بطاطا - مايونيز - كتشب حلو - كتشب حد - خبزة", price: 650, img: "/images/sandwich-meat.webp" },
    { cat: "meals", sub: "single", sub2: "single-grilled", name: "وجبة شخصية شاورما", ingredients: "سندويش عربي(كريم ثوم - دبس رمان - مخلل - حد) - معكرونة - بطاطا - كريم ثوم ", price: 500, img: "/images/sandwich-meat.webp" },






    /* ---------- وجبات: شخصين ---------- */

    // مقلية
    { cat: "meals", sub: "duo", sub2: "duo-fried", name: "وجبة شخصين كريسبي", ingredients: "6 قطع كريسبي - كول سلو - بطاطا - معكرونة - سوسيرة مايونيز عدد 2 - كتشب حلو عدد 2 - كتشب حد - خبزة  ", price: 750, img: "/images/sandwich-meat.webp" },
    { cat: "meals", sub: "duo", sub2: "duo-fried", name: "وجبة شخصين اسكالوب", ingredients: "6 قطع اسكالوب - كول سلو - بطاطا -  معكرونة - سوسيرة مايونيز عدد2  - كتشب حلو عدد 2 - كتشب حد - خبزة  ", price: 750, img: "/images/sandwich-meat.webp" },
    { cat: "meals", sub: "duo", sub2: "duo-fried", name: "وجبة شخصين زنجر", ingredients: "5 قطع زنجر(سبايسي - روستو - ذرة) - كول سلو - بطاطا - معكرونة - سوسيرة مايونيز عدد 2 - كتشب حلو عدد 2 - كتشب حد - خبزة  ", price: 800, img: "/images/sandwich-meat.webp" },
    { cat: "meals", sub: "duo", sub2: "duo-fried", name: "وجبة شخصين سوبريم", ingredients: "4 قطع سوبريم(روستو - ذرة) - كول سلو - بطاطا - معكرونة - سوسيرة مايونيز عدد 2 - سوسيرة كوكتيل - كتشب حلو عدد 2 - كتشب حد - خبزة  ", price: 900, img: "/images/sandwich-meat.webp" },
    { cat: "meals", sub: "duo", sub2: "duo-fried", name: "وجبة شخصين كرانشي", ingredients: "5 قطع كرانشي(ذرة - روستو - قشقوان) - كول سلو - بطاطا - معكرونة - سوسيرة مايونيز عدد 2 - كتشب حلو عدد 2 - كتشب حد - خبزة  ", price: 900, img: "/images/sandwich-meat.webp" },
    { cat: "meals", sub: "duo", sub2: "duo-fried", name: "وجبة شخصين تشيللو", ingredients: "5 قطع تشيللو(فليفلة - بصل - مكس تشيز - صوص بوفلو - ذرة) - كول سلو - بطاطا -  معكرونة - سوسيرة مايونيز عدد 2 - كتشب حلو عدد 2 - كتشب حد - خبزة  ", price: 900, img: "/images/sandwich-meat.webp" },
    { cat: "meals", sub: "duo", sub2: "duo-fried", name: "وجبة شخصين دراغون", ingredients: "5 قطع دراغون(روستو - شيدر - هالبينو - سبايسي) - كول سلو - بطاطا - معكرونة - سوسيرة مايونيز عدد 2  - كتشب حلو عدد 2 - كتشب حد - خبزة  ", price: 850, img: "/images/sandwich-meat.webp" },
    { cat: "meals", sub: "duo", sub2: "duo-fried", name: "وجبة شخصين تشكن فلاي", ingredients: "5 قطع تشكن فلاي(صوص الكوكتيل - سلامي - باربكيو - شيدر) - كول سلو - بطاطا - معكرونة - سوسيرة مايونيز عدد 2 - كتشب حلو عدد 2 - كتشب حد - خبزة  ", price: 850, img: "/images/sandwich-meat.webp" },
    { cat: "meals", sub: "duo", sub2: "duo-fried", name: "وجبة شخصين روما", ingredients: "5 قطع روما(هوت دوغ - شيدر - قشقوان - بشميل - ذرة) - كول سلو - بطاطا - معكرونة - سوسيرة مايونيز عدد 2 - كتشب حلو عدد 2 - كتشب حد - خبزة  ", price: 1000, img: "/images/sandwich-meat.webp" },
    { cat: "meals", sub: "duo", sub2: "duo-fried", name: "وجبة شخصين كوردون", ingredients: " صدر دجاج محشي(قشقوان - روستو - فطر) - بشميل - كول سلو - بطاطا - معكرونة - سوسيرة مايونيز عدد 2 - كتشب حلو عدد 2 - كتشب حد - خبزة  ", price: 1000, img: "/images/sandwich-meat.webp" },

    // مشوية


    { cat: "meals", sub: "duo", sub2: "duo-grilled", name: "وجبة شخصين طوكيو", ingredients: "قطع دجاج مشوية(فطر - هوت دوغ - سلامي - باربكيو - قشقوان - فليفلة) - كول سلو - بطاطا - معكرونة - سوسيرة مايونيز عدد 2 - كتشب حلو عدد 2 - كتشب حد - خبزة", price: 850, img: "/images/sandwich-meat.webp" },
    { cat: "meals", sub: "duo", sub2: "duo-grilled", name: "وجبة شخصين ماليزيا", ingredients: "قطع دجاج مشوية(فطر - هوت دوغ - فليفلة - ذرة - صوص بوفلو - قشقوان) - كول سلو - بطاطا - معكرونة - سوسيرة مايونيز عدد 2 - كتشب حلو عدد 2 - كتشب حد - خبزة", price: 850, img: "/images/sandwich-meat.webp" },
    { cat: "meals", sub: "duo", sub2: "duo-grilled", name: "وجبة شخصين فاهيتا", ingredients: "قطع دجاج مشوية(فليفلة - ذرة - جزر - بصل - صوص HP - فطر - قشقوان) - كول سلو - بطاطا - معكرونة - سوسيرة مايونيز عدد 2 - كتشب حلو عدد 2 - كتشب حد - خبزة", price: 850, img: "/images/sandwich-meat.webp" },
    { cat: "meals", sub: "duo", sub2: "duo-grilled", name: "وجبة شخصين ماغنوم", ingredients: "قطع دجاج مشوية(فطر - فليفلة - خردل - سلامي - قشقوان) - كول سلو - بطاطا - معكرونة - سوسيرة مايونيز عدد 2 - كتشب حلو عدد 2 - كتشب حد - خبزة", price: 850, img: "/images/sandwich-meat.webp" },
    { cat: "meals", sub: "duo", sub2: "duo-grilled", name: "وجبة شخصين تشكن مشروم", ingredients: "قطع دجاج مشوية(بصل - فطر - قشقوان - باربكيو) - كول سلو - بطاطا - معكرونة - سوسيرة مايونيز عدد 2 - كتشب حلو عدد 2 - كتشب حد - خبزة", price: 850, img: "/images/sandwich-meat.webp" },
    { cat: "meals", sub: "duo", sub2: "duo-grilled", name: "وجبة شخصين فرانشيسكو", ingredients: "قطع دجاج مشوية(ذرة - فطر - قشقوان - صوص الشيف) - كول سلو - بطاطا - معكرونة - سوسيرة مايونيز عدد 2 - كتشب حلو عدد 2 - كتشب حد - خبزة", price: 850, img: "/images/sandwich-meat.webp" },
    { cat: "meals", sub: "duo", sub2: "duo-grilled", name: "وجبة شخصين فانتازيا", ingredients: "قطع دجاج مشوية(بصل - ذرة - باربكيو - قشقوان) - كول سلو - بطاطا - معكرونة - سوسيرة كريم ثوم عدد 2 - كتشب حلو عدد 2 - كتشب حد - خبزة", price: 850, img: "/images/sandwich-meat.webp" },
    { cat: "meals", sub: "duo", sub2: "duo-grilled", name: "وجبة شخصين شيش كلاسيك", ingredients: "4 اسياخ شيش - كول سلو - بطاطا - معكرونة - سوسيرة مايونيز عدد 2 - كتشب حلو عدد 2 - كتشب حد - خبزة", price: 750, img: "/images/sandwich-meat.webp" },
    { cat: "meals", sub: "duo", sub2: "duo-grilled", name: "وجبة شخصين شيش مع جبنة", ingredients: "4 اسياخ شيش(قشقوان) - كول سلو - بطاطا - معكرونة - سوسيرة مايونيز عدد 2 - كتشب حلو عدد 2 - كتشب حد - خبزة", price: 800, img: "/images/sandwich-meat.webp" },
    { cat: "meals", sub: "duo", sub2: "duo-grilled", name: "وجبة شخصين مكسيكي", ingredients: "قطع دجاج مشوية(بصل - فليفلة - ذرة - سبايسي - فطر - قشقوان) - كول سلو - بطاطا - معكرونة - سوسيرة مايونيز عدد 2 - كتشب حلو عدد 2 - كتشب حد - خبزة", price: 850, img: "/images/sandwich-meat.webp" },
    { cat: "meals", sub: "duo", sub2: "duo-grilled", name: "وجبة شخصين شرحات كريمة", ingredients: "قطع دجاج مشوية(كريمة - فطر - فليفلة - صوص الشيف) - كول سلو - بطاطا - معكرونة - سوسيرة مايونيز عدد 2 - كتشب حلو عدد 2 - كتشب حد - خبزة", price: 1000, img: "/images/sandwich-meat.webp" },


    /* ---------- وجبات: جامبو ---------- */
    { cat: "meals", sub: "jumbo", name: "وجبة جامبو كريسبي", ingredients: "12 قطعة كريسبي - اكسترا بطاطا - ميونيز 200غ - كول سلو 200غ", price: 1250, img: "/images/sandwich-meat.webp" },
    { cat: "meals", sub: "jumbo", name: "وجبة جامبو سكالوب", ingredients: "12 قطعة اسكالوب - اكسترا بطاطا - ميونيز 200غ - كول سلو 200غ", price: 1250, img: "/images/sandwich-meat.webp" },
    { cat: "meals", sub: "jumbo", name: "وجبة جامبو زنجر", ingredients: "12 قطعة زنجر(سبايسي) - اكسترا بطاطا - ميونيز 200غ - كول سلو 200غ - روستو - ذرة", price: 1400, img: "/images/sandwich-meat.webp" },

    /* ---------- سلطات ---------- */
    { cat: "salads", name: "سلطة سيزر ", ingredients: "خس - صوص سيزر - دجاج - ميني توست - جبنة موزريلا", price: 400, img: "/images/sandwich-meat.webp" },
    { cat: "salads", name: "سلطة ذرة", ingredients: "صوص الشيف - مخلل - فطر", price: 250, img: "/images/sandwich-meat.webp" },
    { cat: "salads", name: "سلطة  كول سلو علبة 200غ", ingredients: "ملفوف - جزر - ميونيز", price: 150, img: "/images/sandwich-meat.webp" },
    { cat: "salads", name: "سلطة  كول سلو صحن 500غ", ingredients: "ملفوف - جزر - ميونيز", price: 200, img: "/images/sandwich-meat.webp" },
    { cat: "salads", name: " سلطة معكرونا باردة علبة صغيرة", ingredients: "جزر - فليفلة - صوص كوكتيل", price: 150, img: "/images/sandwich-meat.webp" },
    { cat: "salads", name: " سلطة معكرونا باردة علبة كبيرة", ingredients: "جزر - فليفلة - صوص كوكتيل", price: 200, img: "/images/sandwich-meat.webp" },

    /* ---------- مقبلات ---------- */
    { cat: "appetizers", name: "علبة بطاطا", ingredients: "بطاطا مقرمشة ذهبية ", price: 150, img: "/images/sandwich-meat.webp" },
    { cat: "appetizers", name: "صحن بطاطا", ingredients: "بطاطا مقرمشة ذهبية ", price: 250, img: "/images/sandwich-meat.webp" },
    { cat: "appetizers", name: "مرفق وجبة", ingredients: "معكرونة - مايونيز - كول سلو - بطاطا", price: 350, img: "/images/sandwich-meat.webp" },


    /* ---------- إضافات ---------- */
    { cat: "extras", name: "مايونيز", ingredients: "200غ", price: 100, img: "/images/sandwich-meat.webp" },
    { cat: "extras", name: "مايونيز", ingredients: "500غ", price: 200, img: "/images/sandwich-meat.webp" },
    { cat: "extras", name: "سوسيرة مايونيز", ingredients: "40غ", price: 20, img: "/images/sandwich-meat.webp" },
    { cat: "extras", name: "سوسيرة باربكيو", ingredients: "40غ", price: 30, img: "/images/sandwich-meat.webp" },
    { cat: "extras", name: "سوسيرة بوفالو", ingredients: "40غ", price: 40, img: "/images/sandwich-meat.webp" },
    { cat: "extras", name: "سوسيرة شطة", ingredients: "40غ", price: 20, img: "/images/sandwich-meat.webp" },
    { cat: "extras", name: "سوسيرة هالبينو", ingredients: "40غ", price: 20, img: "/images/sandwich-meat.webp" },
  ],
};
