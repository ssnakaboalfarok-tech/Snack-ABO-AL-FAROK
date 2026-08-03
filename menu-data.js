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
        { id: "single", name: "وجبة شخص", subs2: [
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
    { cat: "sandwiches", sub: "fried", name: "سندويش كريسبي", ingredients: "مايونيز - خس - مخلل - قطع كريسبي", price: 35000, img: "/images/sandwich-fried.png" },
    { cat: "sandwiches", sub: "fried", name: "سندويش اسكالوب", ingredients: "مايونيز - خس - مخلل - كول سلو - شرائح سكالوب", price: 35000, img: "/images/sandwich-fried.png" },
    { cat: "sandwiches", sub: "fried", name: "سندويش زنجر", ingredients: "مايونيز - خس - مخلل - قطع دجاج - روستو - صوص حار - ذرة", price: 35000, img: "/images/sandwich-fried.png" },
    { cat: "sandwiches", sub: "fried", name: "سندويش تشكن فلاي", ingredients: "مايونيز - خس - صوص الكوكتيل - سلامي - باربكيو - شيدر", price: 40000, img: "/images/sandwich-fried.png" },
    { cat: "sandwiches", sub: "fried", name: "سندويش سوبريم", ingredients: "مايونيز - خس - سلطة - مخلل - ذرة - روسنو - قشقوان - صوص الكوكتيل", price: 40000, img: "/images/sandwich-fried.png" },
    { cat: "sandwiches", sub: "fried", name: "سندويش روما", ingredients: "قطعتين كريسبي - مايونيز - خس - ذرة - روستو - قشقوان", price: 45000, img: "/images/sandwich-fried.png" },
    { cat: "sandwiches", sub: "fried", name: "سندويش كرانشي", ingredients: "قطعتين كريسبي - مايونيز - خس - ذرة - روستو - قشقوان", price: 40000, img: "/images/sandwich-fried.png" },
    { cat: "sandwiches", sub: "fried", name: "سندويش كوردون", ingredients: "مايونيز - بطاطا - فطر - صوص الشيف", price: 40000, img: "/images/sandwich-fried.png" },
    { cat: "sandwiches", sub: "fried", name: "سندويش دراغون", ingredients: "مايونيز - خس - ذرة - روستو - شيدر - هالبينو - سبايسي", price: 40000, img: "/images/sandwich-fried.png" },
    { cat: "sandwiches", sub: "fried", name: "سندويش تشيللو", ingredients: "قطعتين كريسبي - فليفلة - بصل - مكس تشيز - صوص بوفلو - مايونيز - خس - مخلل - ذرة - صوص الشيف ", price: 45000, img: "/images/sandwich-fried.png" },
    { cat: "sandwiches", sub: "fried", name: "سندويش بطاطا", ingredients: "كتشب - مايونيز - سلطة", price: 15000, img: "/images/sandwich-fried.png" },
    { cat: "sandwiches", sub: "fried", name: "سندويش بطاطا مع جبنة", ingredients: "كتشب - مايونيز - سلطة - قشقوان", price: 20000, img: "/images/sandwich-fried.png" },

    /* ---------- سندويشات: مشوي ---------- */
    { cat: "sandwiches", sub: "grilled", name: "سندويش فرانشيسكو", ingredients: "مايونيز - مخلل - فطر - قشقوان - صوص الشيف", price: 40000, img: "/images/sandwich-grilled.png" },
    { cat: "sandwiches", sub: "grilled", name: "سندويش فاهيتا", ingredients: "مايونيز - مخلل - فليفلة - ذرة - جزر - بصل - صوص HP - فطر - قشقوان", price: 40000, img: "/images/sandwich-grilled.png" },
    { cat: "sandwiches", sub: "grilled", name: "سندويش ماليزيا", ingredients: "مايونيز - مخلل - فطر - هوت دوغ - فليفلة - ذرة - صوص بوفلو - قشقوان", price: 40000, img: "/images/sandwich-grilled.png" },
    { cat: "sandwiches", sub: "grilled", name: "سندويش طوكيو", ingredients: "مايونيز - مخلل - فطر - هوت دوغ - سلامي - باربكيو - قشقوان", price: 40000, img: "/images/sandwich-grilled.png" },
    { cat: "sandwiches", sub: "grilled", name: "سندويش تشكن مشروم", ingredients: "مايونيز - مخلل - بصل - فطر - قشقوان", price: 40000, img: "/images/sandwich-grilled.png" },
    { cat: "sandwiches", sub: "grilled", name: "سندويش مكسيكي", ingredients: "مايونيز - مخلل - بصل - فليفلة - ذرة - صوص حار - فطر - قشقوان", price: 40000, img: "/images/sandwich-grilled.png" },
    { cat: "sandwiches", sub: "grilled", name: "سندويش فانتازيا", ingredients: "كريم ثوم - مخلل - بصل - ذرة - باربكيو - قشقوان", price: 40000, img: "/images/sandwich-grilled.png" },
    { cat: "sandwiches", sub: "grilled", name: "سندويش ماغنوم", ingredients: "مايونيز - نخلل - فطر - فليفلة - خردل - سلامي - قشقوان", price: 40000, img: "/images/sandwich-grilled.png" },
    { cat: "sandwiches", sub: "grilled", name: "سندويش شيش", ingredients: "مايونيز - مخلل - سلطة ", price: 35000, img: "/images/sandwich-grilled.png" },
    { cat: "sandwiches", sub: "grilled", name: "سندويش شيش مع جبنة", ingredients: "مايونيز - مخلل - سلطة - قشقوان", price: 40000, img: "/images/sandwich-grilled.png" },
    { cat: "sandwiches", sub: "grilled", name: "سندويش برغر جاج كلاسيك", ingredients: "مايونيز - مخلل - سلطة - كتشب - خس - بطاطا", price: 30000, img: "/images/sandwich-grilled.png" },
    { cat: "sandwiches", sub: "grilled", name: " سندويش برغر جاج مع جبنة", ingredients: "مايونيز - مخلل - سلطة - كتشب - خس - بطاطا - شيدر", price: 35000, img: "/images/sandwich-grilled.png" },
    { cat: "sandwiches", sub: "grilled", name: "سندويش برغر جاج مع بيض", ingredients: "مايونيز - مخلل - سلطة - كتشب - خس - بطاطا - بيض", price: 35000, img: "/images/sandwich-grilled.png" },
    { cat: "sandwiches", sub: "grilled", name: "سندويش برغر جاج كامل", ingredients: "مايونيز - مخلل - سلطة - كتشب - خس - بطاطا - بيض - شيدر", price: 35000, img: "/images/sandwich-grilled.png" },
    { cat: "sandwiches", sub: "grilled", name: "سندويش تشكن سبسيال", ingredients: "مايونيز - خس - سلامي - شيدر - باربكيور - ذرة - صوص كوكتيل", price: 40000, img: "/images/sandwich-grilled.png" },
    { cat: "sandwiches", sub: "grilled", name: "سندويش شاورما سمون", ingredients: "كريم ثوم - مخلل - دبس رمان - صوص حار", price: 25000, img: "/images/sandwich-grilled.png" },
    
   

    /* ---------- سندويشات: لحمة ---------- */
    { cat: "sandwiches", sub: "meat", name: "سندويش برجر لحمة", ingredients: "مايونيز - مخلل - سلطة", price: 40000, img: "/images/sandwich-meat.png" },
    { cat: "sandwiches", sub: "meat", name: "سندويش سجق", ingredients: "سجق(لحم غنم) - مخلل", price: 35000, img: "/images/sandwich-meat.png" },
    { cat: "sandwiches", sub: "meat", name: "سندويش توشكا", ingredients: "سجق(لحم غنم) - قشقوان", price: 40000, img: "/images/sandwich-meat.png" },

    /* ---------- وجبات: شخص ---------- */
    { cat: "meals", sub: "single", sub2: "single-fried", name: "وجبة شخص مقلية", ingredients: "سندويش مقلي + بطاطا + مشروب غازي", price: 40000, img: "/images/meal-single.png" },
    { cat: "meals", sub: "single", sub2: "single-grilled", name: "وجبة شخص مشوية", ingredients: "سندويش مشوي + بطاطا + مشروب غازي", price: 42000, img: "/images/meal-single.png" },

    /* ---------- وجبات: شخصين ---------- */
    { cat: "meals", sub: "duo", sub2: "duo-fried", name: "وجبة شخصين مقلية", ingredients: "سندويشان مقليان + بطاطا كبيرة + مشروبان", price: 75000, img: "/images/meal-duo.png" },
    { cat: "meals", sub: "duo", sub2: "duo-grilled", name: "وجبة شخصين مشوية", ingredients: "سندويشان مشويان + بطاطا كبيرة + مشروبان", price: 78000, img: "/images/meal-duo.png" },

    /* ---------- وجبات: جامبو ---------- */
    { cat: "meals", sub: "jumbo", name: "وجبة جامبو كريسبي", ingredients: "12 قطعة - اكسترا بطاطا - ميونيز 200غ - كول سلو 200غ", price: 125000, img: "/images/meal-jumbo.png" },
    { cat: "meals", sub: "jumbo", name: "وجبة جامبو سكالوب", ingredients: "12 قطعة - اكسترا بطاطا - ميونيز 200غ - كول سلو 200غ", price: 125000, img: "/images/meal-jumbo.png" },
    { cat: "meals", sub: "jumbo", name: "وجبة جامبو زنجر", ingredients: "12 قطعة - اكسترا بطاطا - ميونيز 200غ - كول سلو 200غ - روستو - ذرة", price: 140000, img: "/images/meal-jumbo.png" },

    /* ---------- سلطات ---------- */
    { cat: "salads", name: "سلطة سيزر ", ingredients: "خس - صوص سيزر - دجاج - ميني توست - جبنة موزريلا", price: 40000, img: "/images/salad.png" },
    { cat: "salads", name: "سلطة ذرة", ingredients: "صوص الشيف - مخلل - فطر", price: 25000, img: "/images/salad.png" },
    { cat: "salads", name: "سلطة  كول سلو علبة 200غ", ingredients: "ملفوف - جزر - ميونيز", price: 15000, img: "/images/salad.png" },
    { cat: "salads", name: "سلطة  كول سلو صحن 500غ", ingredients: "ملفوف - جزر - ميونيز", price: 20000, img: "/images/salad.png" },
    { cat: "salads", name: " سلطة معكرونا علبة 200غ", ingredients: "جزر - فليفلة - صوص كوكتيل", price: 15000, img: "/images/salad.png" },
    { cat: "salads", name: " سلطة معكرونا علبة 500غ", ingredients: "جزر - فليفلة - صوص كوكتيل", price: 20000, img: "/images/salad.png" },

    /* ---------- مقبلات ---------- */
    { cat: "appetizers", name: "علبة بطاطا", ingredients: "بطاطا مقرمشة ذهبية ", price: 15000, img: "/images/appetizer.png" },
    { cat: "appetizers", name: "صحن بطاطا", ingredients: "بطاطا مقرمشة ذهبية ", price: 25000, img: "/images/appetizer.png" },
    { cat: "appetizers", name: "مرفق وجبة", ingredients: "معكرونة - مايونيز - كول سلو - بطاطا", price: 35000, img: "/images/appetizer.png" },


    /* ---------- إضافات ---------- */
    { cat: "extras", name: "مايونيز", ingredients: "200غ", price: 10000, img: "/images/extras.png" },
    { cat: "extras", name: "مايونيز", ingredients: "500غ", price: 20000, img: "/images/extras.png" },
    { cat: "extras", name: "سوسيرة مايونيز", ingredients: "40غ", price: 2000, img: "/images/extras.png" },
    { cat: "extras", name: "سوسيرة باربكيو", ingredients: "40غ", price: 3000, img: "/images/extras.png" },
    { cat: "extras", name: "سوسيرة بوفالو", ingredients: "40غ", price: 4000, img: "/images/extras.png" },
    { cat: "extras", name: "سوسيرة شطة", ingredients: "40غ", price: 2000, img: "/images/extras.png" },
    { cat: "extras", name: "سوسيرة هالبينو", ingredients: "40غ", price: 2000, img: "/images/extras.png" },
  ],
};
