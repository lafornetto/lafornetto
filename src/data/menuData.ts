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
  items: MenuItem[];
};

export const menuCategories: MenuCategory[] = [
  {
    title: {
      sv: "Pizzor",
      en: "Pizzas",
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
          sv: "Inbakad pizza med skinka och räkor",
          en: "Folded pizza with ham and shrimp",
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
        name: { sv: "Kycklingkebrulle", en: "Chicken kebab roll" },
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
];