export type Language = "sv" | "en";

export type TranslatedText = {
  sv: string;
  en: string;
};

export type MenuItem = {
  name: TranslatedText;
  description: TranslatedText;
  price: string;
};

export type MenuCategory = {
  title: TranslatedText;
  intro?: TranslatedText;
  items: MenuItem[];
};

export const menuCategories: MenuCategory[] = [
  {
    title: {
      sv: "Pizzor",
      en: "Pizzas",
    },
    intro: {
      sv: "Alla pizzor innehåller tomatsås och ost. Familjepizza är 30 kr billigare än tre vanliga pizzor. Barnpizza -10 kr. Glutenfria alternativ +40 kr.",
      en: "All pizzas include tomato sauce and cheese. A family pizza is 30 SEK cheaper than three regular pizzas. Kids pizza -10 SEK. Gluten-free options +40 SEK.",
    },
    items: [
      {
        name: { sv: "Margherita", en: "Margherita" },
        description: { sv: "Tomatsås och ost", en: "Tomato sauce and cheese" },
        price: "110 kr",
      },
      {
        name: { sv: "Vesuvio", en: "Vesuvio" },
        description: { sv: "Skinka", en: "Ham" },
        price: "115 kr",
      },
      { name: { sv: "Al Funghi", en: "Al Funghi" }, 
        description: { sv: "Ost, Champinjoner", en: "Cheese, Mushrooms" }, 
        price: "115 kr" },
      {
        name: { sv: "Al Tonno", en: "Al Tonno" },
        description: { sv: "Lök, tonfisk", en: "Onion, tuna" },
        price: "120 kr",
      },
      {
        name: { sv: "Hawaii", en: "Hawaii" },
        description: { sv: "Skinka, ananas", en: "Ham, pineapple" },
        price: "120 kr",
      },
      {
        name: { sv: "Capricciosa", en: "Capricciosa" },
        description: { sv: "Skinka, champinjoner", en: "Ham, mushrooms" },
        price: "120 kr",
      },
      {
        name: { sv: "Bussola", en: "Bussola" },
        description: { sv: "Skinka, räkor", en: "Ham, shrimp" },
        price: "125 kr",
      },
      {
        name: { sv: "Opera", en: "Opera" },
        description: { sv: "Skinka, tonfisk", en: "Ham, tuna" },
        price: "120 kr",
      },
      {
        name: { sv: "Orientale", en: "Orientale" },
        description: { sv: "Lök, köttfärs", en: "Onion, minced meat" },
        price: "120 kr",
      },
      {
        name: { sv: "Calzone", en: "Calzone" },
        description: {
          sv: "Inbakad pizza med skinka",
          en: "Folded pizza with ham",
        },
        price: "120 kr",
      },
      {
        name: { sv: "Calzone Special", en: "Calzone Special" },
        description: {
          sv: "Inbakad pizza med skinka, räkor och champinjoner",
          en: "Folded pizza with ham, shrimp and mushrooms",
        },
        price: "125 kr",
      },
      {
        name: { sv: "Florida", en: "Florida" },
        description: {
          sv: "Skinka, ananas, banan, curry",
          en: "Ham, pineapple, banana, curry",
        },
        price: "125 kr",
      },
      {
        name: { sv: "Gudfader", en: "Godfather" },
        description: {
          sv: "Skinka, champinjoner, räkor",
          en: "Ham, mushrooms, shrimp",
        },
        price: "125 kr",
      },
      {
        name: { sv: "Mafioso", en: "Mafioso" },
        description: {
          sv: "Köttfärs, ägg, tabasco",
          en: "Minced meat, egg, tabasco",
        },
        price: "120 kr",
      },
      {
        name: { sv: "Verona", en: "Verona" },
        description: {
          sv: "Bacon, lök, paprika, vitlök",
          en: "Bacon, onion, bell pepper, garlic",
        },
        price: "120 kr",
      },
      {
        name: { sv: "Al Capone", en: "Al Capone" },
        description: {
          sv: "Skinka, salami",
          en: "Ham, salami",
        },
        price: "120 kr",
      },
      {
        name: { sv: "Ceasar", en: "Caesar" },
        description: {
          sv: "Skinka, lök, gorgonzola",
          en: "Ham, onion, gorgonzola",
        },
        price: "125 kr",
      },
      {
        name: { sv: "Azteka", en: "Azteka" },
        description: {
          sv: "Skinka, jalapeño, vitlökssås, tacomix, tacosås",
          en: "Ham, jalapeño, garlic sauce, taco mix, taco sauce",
        },
        price: "125 kr",
      },
      {
        name: { sv: "Vegetariana", en: "Vegetariana" },
        description: {
          sv: "Champinjoner, paprika, lök, feferoni, oliver, tomat, ananas, kronärtskocka, rucola",
          en: "Mushrooms, bell pepper, onion, pepperoni peppers, olives, tomato, pineapple, artichoke, arugula",
        },
        price: "130 kr",
      },
      {
        name: { sv: "Toscana", en: "Toscana" },
        description: {
          sv: "Salami, bacon, lök, ägg",
          en: "Salami, bacon, onion, egg",
        },
        price: "130 kr",
      },
      {
        name: { sv: "Disco", en: "Disco" },
        description: {
          sv: "Skinka, räkor, köttfärs",
          en: "Ham, shrimp, minced meat",
        },
        price: "130 kr",
      },
      {
        name: { sv: "Tredagi", en: "Tredagi" },
        description: {
          sv: "Räkor, musslor, tonfisk, rucola",
          en: "Shrimp, mussels, tuna, arugula",
        },
        price: "130 kr",
      },
      {
        name: { sv: "Quattro Stagione", en: "Quattro Stagione" },
        description: {
          sv: "Räkor, musslor, skinka, champinjoner, oliver, kronärtskocka",
          en: "Shrimp, mussels, ham, mushrooms, olives, artichoke",
        },
        price: "130 kr",
      },
      {
        name: { sv: "Indiana", en: "Indiana" },
        description: {
          sv: "Kyckling, ananas, banan, curry",
          en: "Chicken, pineapple, banana, curry",
        },
        price: "135 kr",
      },
      {
        name: { sv: "Kyckling", en: "Chicken" },
        description: {
          sv: "Kyckling, banan, curry, jordnötter",
          en: "Chicken, banana, curry, peanuts",
        },
        price: "135 kr",
      },
      {
        name: { sv: "Pepperoni", en: "Pepperoni" },
        description: {
          sv: "Pepperonikorv, skivad jalapeño, rucola, riven grana padano",
          en: "Pepperoni sausage, sliced jalapeño, arugula, grated Grana Padano",
        },
        price: "135 kr",
      },
      {
        name: { sv: "Oscar", en: "Oscar" },
        description: {
          sv: "Fläskfilé, paprika, champinjoner, bearnaisesås",
          en: "Pork tenderloin, bell pepper, mushrooms, béarnaise sauce",
        },
        price: "135 kr",
      },
      {
        name: { sv: "Gorgonzola", en: "Gorgonzola" },
        description: {
          sv: "Fläskfilé, lök, gorgonzola",
          en: "Pork tenderloin, onion, gorgonzola",
        },
        price: "135 kr",
      },
      {
        name: { sv: "Morsan", en: "Morsan" },
        description: {
          sv: "Skinka, lök, tomater, vitlök, gorgonzola",
          en: "Ham, onion, tomatoes, garlic, gorgonzola",
        },
        price: "135 kr",
      },
      {
        name: { sv: "Mexikana", en: "Mexikana" },
        description: {
          sv: "Köttfärs, lök, vitlök, tacokryddmix, jalapeño, tacosås, vitlökssås",
          en: "Minced meat, onion, garlic, taco seasoning mix, jalapeño, taco sauce, garlic sauce",
        },
        price: "135 kr",
      },
      {
        name: { sv: "Cheese Pizza", en: "Cheese Pizza" },
        description: {
          sv: "Ost, salladsost, gorgonzola, riven grana padano och rucola",
          en: "Cheese, salad cheese, gorgonzola, grated Grana Padano and arugula",
        },
        price: "135 kr",
      },
      {
        name: { sv: "Grekisk Pizza", en: "Greek Pizza" },
        description: {
          sv: "Fläskfilé, tomater, lök, champinjoner, salladsost, oliver, feferoni, tzatziki",
          en: "Pork tenderloin, tomatoes, onion, mushrooms, salad cheese, olives, pepperoni peppers, tzatziki",
        },
        price: "135 kr",
      },
      {
        name: { sv: "La Fornetto Special", en: "La Fornetto Special" },
        description: {
          sv: "Fläskfilé, lök, paprika, tomater, bearnaisesås",
          en: "Pork tenderloin, onion, bell pepper, tomatoes, béarnaise sauce",
        },
        price: "135 kr",
      },
      {
        name: { sv: "Ciao Ciao", en: "Ciao Ciao" },
        description: {
          sv: "Halvinbakad pizza med fläskfilé, lök, paprika, tomater, champinjoner och bearnaisesås",
          en: "Half-folded pizza with pork tenderloin, onion, bell pepper, tomatoes, mushrooms and béarnaise sauce",
        },
        price: "135 kr",
      },
      {
        name: { sv: "Husets Special", en: "House Special" },
        description: {
          sv: "Fläskfilé, skinka, champinjoner, bearnaisesås",
          en: "Pork tenderloin, ham, mushrooms, béarnaise sauce",
        },
        price: "135 kr",
      },
      {
        name: { sv: "Kocken Special", en: "Chef's Special" },
        description: {
          sv: "Fläskfilé, jalapeño, vitlök, champinjoner, tomater, bearnaisesås",
          en: "Pork tenderloin, jalapeño, garlic, mushrooms, tomatoes, béarnaise sauce",
        },
        price: "135 kr",
      },
      {
        name: { sv: "Tacopizza", en: "Taco Pizza" },
        description: {
          sv: "Köttfärs, tacosås, guacamole, tacokryddmix, tacochips och vitlökssås",
          en: "Minced meat, taco sauce, guacamole, taco seasoning mix, taco chips and garlic sauce",
        },
        price: "135 kr",
      },
      {
        name: { sv: "Dubbel Calzone", en: "Double Calzone" },
        description: {
          sv: "Dubbelinbakad pizza med skinka, räkor och champinjoner",
          en: "Double-folded pizza with ham, shrimp and mushrooms",
        },
        price: "135 kr",
      },
      {
        name: { sv: "Kebabpizza", en: "Kebab Pizza" },
        description: {
          sv: "Kebabkött, rödlök, tomater, feferoni, isbergssallad och kebabsås",
          en: "Kebab meat, red onion, tomatoes, pepperoni peppers, iceberg lettuce and kebab sauce",
        },
        price: "145 kr",
      },
      {
        name: { sv: "Älvkarleby", en: "Älvkarleby" },
        description: {
          sv: "Halvinbakad pizza med oxfilé, svamp, färska tomater, pressad vitlök och bearnaisesås",
          en: "Half-folded pizza with beef tenderloin, mushrooms, fresh tomatoes, pressed garlic and béarnaise sauce",
        },
        price: "145 kr",
      },
      {
        name: { sv: "Acapulco", en: "Acapulco" },
        description: {
          sv: "Oxfilé, lök, vitlök, champinjoner, jalapeño, tacosås, vitlökssås",
          en: "Beef tenderloin, onion, garlic, mushrooms, jalapeño, taco sauce, garlic sauce",
        },
        price: "145 kr",
      },
      {
        name: { sv: "Amigo", en: "Amigo" },
        description: {
          sv: "Köttfärs, tacosås, jalapeño, vitlökssås",
          en: "Minced meat, taco sauce, jalapeño, garlic sauce",
        },
        price: "S 160 kr / M 220 kr / L 310 kr",
      },
      {
        name: { sv: "Chicago", en: "Chicago" },
        description: {
          sv: "Fläskfilé, champinjoner, lök, paprika, bearnaisesås",
          en: "Pork tenderloin, mushrooms, onion, bell pepper, béarnaise sauce",
        },
        price: "S 160 kr / M 220 kr / L 310 kr",
      },
    ],
  },
  {
    title: {
      sv: "Kebabrätter",
      en: "Kebab dishes",
    },
    intro: {
      sv: "Välj mellan vitlök, mild, stark eller blandad sås.",
      en: "Choose between garlic, mild, hot or mixed sauce.",
    },
    items: [
      {
        name: { sv: "Kebabtallrik", en: "Kebab plate" },
        description: {
          sv: "Pommes eller ris, kebabkött, isbergssallad, rödlök, tomater, feferoni",
          en: "Fries or rice, kebab meat, iceberg lettuce, red onion, tomatoes, pepperoni peppers",
        },
        price: "125 kr",
      },
      {
        name: { sv: "Kebabrulle", en: "Kebab roll" },
        description: {
          sv: "Färskbakat bröd, kebab, tomater, feferoni, isbergssallad, rödlök",
          en: "Freshly baked bread, kebab, tomatoes, pepperoni peppers, iceberg lettuce, red onion",
        },
        price: "125 kr",
      },
      {
        name: { sv: "Kebabskrovmål", en: "Kebab burger meal" },
        description: {
          sv: "Med bröd och pommes",
          en: "With bread and fries",
        },
        price: "135 kr",
      },
      {
        name: { sv: "Kebab med bröd", en: "Kebab with bread" },
        description: {
          sv: "Kebabkött i färskbakat bröd, isbergssallad, rödlök, tomater, feferoni",
          en: "Kebab meat in freshly baked bread, iceberg lettuce, red onion, tomatoes, pepperoni peppers",
        },
        price: "120 kr",
      },
    ],
  },
  {
    title: {
      sv: "Kycklingkebab",
      en: "Chicken kebab",
    },
    intro: {
      sv: "Välj mellan vitlök, mild, stark eller blandad sås.",
      en: "Choose between garlic, mild, hot or mixed sauce.",
    },
    items: [
      {
        name: { sv: "Kycklingtallrik", en: "Chicken kebab plate" },
        description: {
          sv: "Pommes eller ris, isbergssallad, rödlök, tomater, feferoni, kycklingkebab",
          en: "Fries or rice, iceberg lettuce, red onion, tomatoes, pepperoni peppers, chicken kebab",
        },
        price: "130 kr",
      },
      {
        name: { sv: "Kycklingkebabrulle", en: "Chicken kebab roll" },
        description: {
          sv: "Färskbakat bröd, kycklingkebab, tomater, feferoni, isbergssallad, rödlök",
          en: "Freshly baked bread, chicken kebab, tomatoes, pepperoni peppers, iceberg lettuce, red onion",
        },
        price: "130 kr",
      },
      {
        name: { sv: "Kyckling med bröd", en: "Chicken kebab with bread" },
        description: {
          sv: "Kycklingkebabkött i färskbakat bröd, isbergssallad, rödlök, tomater, feferoni",
          en: "Chicken kebab meat in freshly baked bread, iceberg lettuce, red onion, tomatoes, pepperoni peppers",
        },
        price: "120 kr",
      },
      {
        name: { sv: "Kycklingkebabskrovmål", en: "Chicken kebab burger meal" },
        description: {
          sv: "Med bröd och pommes",
          en: "With bread and fries",
        },
        price: "135 kr",
      },
    ],
  },
  {
    title: {
      sv: "Falafel",
      en: "Falafel",
    },
    intro: {
      sv: "Välj mellan vitlök, mild, stark eller blandad sås.",
      en: "Choose between garlic, mild, hot or mixed sauce.",
    },
    items: [
      {
        name: { sv: "Falafeltallrik", en: "Falafel plate" },
        description: {
          sv: "Pommes eller ris, isbergssallad, tomat, gurka, lök, feferoni",
          en: "Fries or rice, iceberg lettuce, tomato, cucumber, onion, pepperoni peppers",
        },
        price: "125 kr",
      },
      {
        name: { sv: "Falafelrulle", en: "Falafel roll" },
        description: {
          sv: "Färskbakat bröd, isbergssallad, rödlök, tomat, gurka, feferoni",
          en: "Freshly baked bread, iceberg lettuce, red onion, tomato, cucumber, pepperoni peppers",
        },
        price: "125 kr",
      },
      {
        name: { sv: "Falafelskrovmål", en: "Falafel burger meal" },
        description: {
          sv: "Med bröd och pommes",
          en: "With bread and fries",
        },
        price: "135 kr",
      },
    ],
  },
  {
    title: {
      sv: "Pasta",
      en: "Pasta",
    },
    intro: {
      sv: "Serveras med ruccola och riven Grana Padano.",
      en: "Served with rocket and grated Grana Padano.",
    },
    items: [
      {
        name: { sv: "Ox-/Fläskfilépasta", en: "Beef/Pork tenderloin pasta" },
        description: {
          sv: "Champinjoner, gräddsås",
          en: "Mushrooms, cream sauce",
        },
        price: "169 kr",
      },
      {
        name: { sv: "Kycklingpasta", en: "Chicken pasta" },
        description: {
          sv: "Kyckling, paprika, lök, currysås",
          en: "Chicken, bell pepper, onion, curry sauce",
        },
        price: "165 kr",
      },
      {
        name: { sv: "Vegetarisk pasta", en: "Vegetarian pasta" },
        description: {
          sv: "Stekta grönsaker, tomat, gräddsås",
          en: "Fried vegetables, tomato, cream sauce",
        },
        price: "160 kr",
      },
      {
        name: { sv: "Pasta Carbonara", en: "Pasta Carbonara" },
        description: {
          sv: "Bacon, lök, äggula, gräddsås",
          en: "Bacon, onion, egg yolk, cream sauce",
        },
        price: "150 kr",
      },
    ],
  },
  {
    title: {
      sv: "Sallader",
      en: "Salads",
    },
    intro: {
      sv: "Alla sallader innehåller isbergssallad, tomater, gurka, dressing, bröd och ruccola.",
      en: "All salads include iceberg lettuce, tomatoes, cucumber, dressing, bread and rocket.",
    },
    items: [
      {
        name: { sv: "Ost & skinksallad", en: "Cheese & ham salad" },
        description: {
          sv: "Ost, skinka, ananas och ägg.",
          en: "Cheese, ham, pineapple and egg.",
        },
        price: "130 kr",
      },
      {
        name: { sv: "Tonfisksallad", en: "Tuna salad" },
        description: {
          sv: "Tonfisk, rödlök, ägg och citron.",
          en: "Tuna, red onion, egg and lemon.",
        },
        price: "130 kr",
      },
      {
        name: { sv: "Kycklingsallad", en: "Chicken salad" },
        description: {
          sv: "Kycklingfilé, ananas och rödlök.",
          en: "Chicken fillet, pineapple and red onion.",
        },
        price: "130 kr",
      },
      {
        name: { sv: "Räksallad", en: "Shrimp salad" },
        description: {
          sv: "Räkor, ägg, citron, dill och oliver.",
          en: "Shrimp, egg, lemon, dill and olives.",
        },
        price: "130 kr",
      },
      {
        name: { sv: "Grekisk sallad", en: "Greek salad" },
        description: {
          sv: "Salladsost, oliver, feferoni, rödlök, paprika och citron.",
          en: "Salad cheese, olives, pepperoni peppers, red onion, bell pepper and lemon.",
        },
        price: "130 kr",
      },
      {
        name: { sv: "Kebabsallad", en: "Kebab salad" },
        description: {
          sv: "Kebabkött, rödlök och feferoni.",
          en: "Kebab meat, red onion and pepperoni peppers.",
        },
        price: "130 kr",
      },
    ],
  },
    {
    title: {
      sv: "Grillrätter",
      en: "Grill dishes",
    },
    intro: {
      sv: "Välj mellan kokt potatis, klyftpotatis, pommes eller ris.",
      en: "Choose between boiled potatoes, potato wedges, fries or rice.",
    },
    items: [
      {
        name: { sv: "Superstar", en: "Superstar" },
        description: {
          sv: "150 g hamburgare med bröd, hamburgedressing, sallad, lök, tomat och ketchup.",
          en: "150 g hamburger with bread, hamburger dressing, lettuce, onion, tomato and ketchup",
        },
        price: "90 kr",
      },
      {
        name: { sv: "Bigstar", en: "Bigstar" },
        description: {
          sv: "90 g hamburgare med bröd, sallad, lök, tomat och ketchup.",
          en: "90 g hamburger with bread, lettuce, onion, tomato and ketchup.",
        },
        price: "80 kr",
      },
      {
        name: { sv: "Big Meal", en: "Big Meal" },
        description: {
          sv: "90 g hamburgare med bröd, pommes och 33 cl dryck.",
          en: "90 g hamburger with bread, fries and a 33 cl drink.",
        },
        price: "125 kr",
      },
      {
        name: { sv: "Super Meal", en: "Super Meal" },
        description: {
          sv: "150 g hamburgare med bröd, pommes och 33 cl dryck.",
          en: "150 g hamburger with bread, fries and a 33 cl drink.",
        },
        price: "139 kr",
      },
      {
        name: { sv: "Kycklingspett", en: "Chicken skewers" },
        description: {
          sv: "Tzatziki och tomatsås.",
          en: "Tzatziki and tomato sauce.",
        },
        price: "159 kr",
      },
      {
        name: { sv: "Schnitzel", en: "Schnitzel" },
        description: {
          sv: "Pommes och bearnaisesås.",
          en: "Fries and béarnaise sauce.",
        },
        price: "130 kr",
      },
      {
        name: { sv: "Chicken nuggets", en: "Chicken nuggets" },
        description: {
          sv: "Med pommes och valfri sås.",
          en: "With fries and a sauce of your choice.",
        },
        price: "110 kr",
      },
      {
        name: { sv: "Fish and chips", en: "Fish and chips" },
        description: {
          sv: "Friterad fiskfilé med pommes och valfri sås.",
          en: "Fried fish fillet with fries and a sauce of your choice.",
        },
        price: "130 kr",
      },
      {
        name: { sv: "Rödspätta", en: "Plaice" },
        description: {
          sv: "Med remouladsås och kokt potatis.",
          en: "With remoulade sauce and boiled potatoes.",
        },
        price: "130 kr",
      },
      {
        name: { sv: "Oxfilé", en: "Beef fillet" },
        description: {
          sv: "Champinjoner, sparris och bearnaisesås.",
          en: "Mushrooms, asparagus and béarnaise sauce.",
        },
        price: "259 kr",
      },
      {
        name: { sv: "Filé Black White", en: "Fillet Black White" },
        description: {
          sv: "Stekta grönsaker med bearnaisesås.",
          en: "Fried vegetables with béarnaise sauce.",
        },
        price: "249 kr",
      },
      {
        name: { sv: "Plankstek – oxfilé", en: "Plank steak – beef fillet" },
        description: {
          sv: "Med rödvinssås och bearnaisesås.",
          en: "With red wine sauce and béarnaise sauce.",
        },
        price: "285 kr",
      },
      {
        name: { sv: "Plankstek – fläskfilé", en: "Plank steak – pork fillet" },
        description: {
          sv: "Med rödvinssås och bearnaisesås.",
          en: "With red wine sauce and béarnaise sauce.",
        },
        price: "275 kr",
      },
      {
        name: { sv: "Husets kycklingfilé", en: "House chicken fillet" },
        description: {
          sv: "Med pommes och bearnaisesås.",
          en: "With fries and béarnaise sauce.",
        },
        price: "149 kr",
      },
      {
        name: { sv: "Lövstek", en: "Minute steak" },
        description: {
          sv: "Med bearnaisesås.",
          en: "With béarnaise sauce.",
        },
        price: "130 kr",
      },
    ],
  },
    {
    title: {
      sv: "Barnrätter",
      en: "Kids meals",
    },
    items: [
      {
        name: { sv: "45 g hamburgare", en: "45 g hamburger" },
        description: {
          sv: "Med bröd och 33 cl dryck.",
          en: "With bread and a 33 cl drink.",
        },
        price: "95 kr",
      },
      {
        name: { sv: "Pannkaka", en: "Pancakes" },
        description: {
          sv: "Med sylt, grädde och 33 cl dryck.",
          en: "With jam, whipped cream and a 33 cl drink.",
        },
        price: "95 kr",
      },
      {
        name: { sv: "Chicken nuggets", en: "Chicken nuggets" },
        description: {
          sv: "Med pommes och 33 cl dryck.",
          en: "With fries and a 33 cl drink.",
        },
        price: "95 kr",
      },
    ],
  },
  {
    title: {
      sv: "Förrätter",
      en: "Starters",
    },
    items: [
      {
        name: { sv: "Vitlöksbröd", en: "Garlic bread" },
        description: {
          sv: "",
          en: "",
        },
        price: "70 kr",
      },
      {
        name: { sv: "Friterat blomkål", en: "Fried cauliflower" },
        description: {
          sv: "Med vitlökssås.",
          en: "With garlic sauce.",
        },
        price: "75 kr",
      },
      {
        name: { sv: "Friterade haricots", en: "Fried haricots" },
        description: {
          sv: "Med vitlökssås.",
          en: "With garlic sauce.",
        },
        price: "75 kr",
      },
    ],
  },
  {
    title: {
      sv: "Efterrätter",
      en: "Desserts",
    },
    items: [
      {
        name: { sv: "Glasscoupe med sås", en: "Ice cream sundae with sauce" },
        description: {
          sv: "",
          en: "",
        },
        price: "75 kr",
      },
      {
        name: { sv: "Banana split", en: "Banana split" },
        description: {
          sv: "",
          en: "",
        },
        price: "79 kr",
      },
      {
        name: { sv: "Äppelpaj", en: "Apple pie" },
        description: {
          sv: "",
          en: "",
        },
        price: "70 kr",
      },
    ],
  },
  {
    title: {
      sv: "Tillbehör",
      en: "Extras",
    },
    items: [
      {
        name: { sv: "Pizzasallad", en: "Pizza salad" },
        description: {
          sv: "",
          en: "",
        },
        price: "20 kr",
      },
      {
        name: { sv: "Dressing", en: "Dressing" },
        description: {
          sv: "",
          en: "",
        },
        price: "20 kr",
      },
      {
        name: { sv: "Extra pålägg", en: "Extra toppings" },
        description: {
          sv: "",
          en: "",
        },
        price: "15–40 kr",
      },
      {
        name: { sv: "Pizzabröd", en: "Pizza bread" },
        description: {
          sv: "",
          en: "",
        },
        price: "20 kr",
      },
      {
        name: { sv: "Pommes", en: "Fries" },
        description: {
          sv: "",
          en: "",
        },
        price: "60 kr",
      },
    ],
  },
];