export type MenuItem = {
  name: string;
  description: string;
  price: string;
};

export type MenuCategory = {
  title: string;
  items: MenuItem[];
};

export const menuCategories: MenuCategory[] = [
  
    {
        title: "Pizzor",
        items: [
            { name: "Margherita", description: "Tomatsås och ost", price: "110 kr" },
            { name: "Vesuvio", description: "Skinka", price: "115 kr" },
            { name: "Al Tonno", description: "Lök, tonfisk", price: "120 kr" },
            { name: "Hawaii", description: "Skinka, ananas", price: "120 kr" },
            { name: "Capricciosa", description: "Skinka, champinjoner", price: "120 kr" },
            { name: "Bussola", description: "Skinka, räkor", price: "125 kr" },
            { name: "Opera", description: "Skinka, tonfisk", price: "120 kr" },
            { name: "Orientale", description: "Lök, köttfärs", price: "120 kr" },
            { name: "Calzone", description: "Inbakad pizza med skinka", price: "120 kr" },
            { name: "Calzone Special", description: "Inbakad pizza med skinka och räkor", price: "125 kr" },
            { name: "Florida", description: "Skinka, ananas, banan, curry", price: "125 kr" },
            { name: "Gudfader", description: "Skinka, champinjoner, räkor", price: "125 kr" },
            { name: "Mafioso", description: "Köttfärs, ägg, tabasco", price: "120 kr" },
            { name: "Verona", description: "Bacon, lök, paprika, vitlök", price: "120 kr" },
            { name: "Al Capone", description: "Skinka, salami", price: "120 kr" },
            { name: "Ceasar", description: "Skinka, lök, gorgonzola", price: "125 kr" },
            { name: "Azteka", description: "Skinka, jalapeño, vitlökssås, tacomix, tacosås", price: "125 kr" },
            { name: "Vegetariana", description: "Champinjoner, paprika, lök, feferoni, oliver, tomat, ananas, kronärtskocka, rucola", price: "130 kr" },
            { name: "Toscana", description: "Salami, bacon, lök, ägg", price: "130 kr" },
            { name: "Disco", description: "Skinka, räkor, köttfärs", price: "130 kr" },
            { name: "Tredagi", description: "Räkor, musslor, tonfisk, rucola", price: "130 kr" },
            { name: "Quattro Stagione", description: "Räkor, musslor, skinka, champinjoner, oliver, kronärtskocka", price: "130 kr" },
            { name: "Indiana", description: "Kyckling, ananas, banan, curry", price: "135 kr" },
            { name: "Kyckling", description: "Kyckling, banan, curry, jordnötter", price: "135 kr" },
            { name: "Pepperoni", description: "Pepperonikorv, skivad jalapeño, rucola, riven grana padano", price: "135 kr" },
            { name: "Oscar", description: "Fläskfilé, paprika, champinjoner, bearnaisesås", price: "135 kr" },
            { name: "Gorgonzola", description: "Fläskfilé, lök, gorgonzola", price: "135 kr" },
            { name: "Morsan", description: "Skinka, lök, tomater, vitlök, gorgonzola", price: "135 kr" },
            { name: "Mexikana", description: "Köttfärs, lök, vitlök, tacokryddmix, jalapeño, tacosås, vitlökssås", price: "135 kr" },
            { name: "Cheese Pizza", description: "Ost, salladsost, gorgonzola, riven grana padano och rucola", price: "135 kr" },
            { name: "Grekisk Pizza", description: "Fläskfilé, tomater, lök, champinjoner, salladsost, oliver, feferoni, tzatziki", price: "135 kr" },
            { name: "La Fornetto Special", description: "Fläskfilé, lök, paprika, tomater, bearnaisesås", price: "135 kr" },
            { name: "Ciao Ciao", description: "Halvinbakad pizza med fläskfilé, lök, paprika, tomater, champinjoner och bearnaisesås", price: "135 kr" },
            { name: "Husets Special", description: "Fläskfilé, skinka, champinjoner, bearnaisesås", price: "135 kr" },
            { name: "Kocken Special", description: "Fläskfilé, jalapeño, vitlök, champinjoner, tomater, bearnaisesås", price: "135 kr" },
            { name: "Tacopizza", description: "Köttfärs, tacosås, guacamole, tacokryddmix, tacochips och vitlökssås", price: "135 kr" },
            { name: "Dubbel Calzone", description: "Dubbelinbakad pizza med skinka, räkor och champinjoner", price: "135 kr" },
            { name: "Kebabpizza", description: "Kebabkött, rödlök, tomater, feferoni, isbergssallad och kebabsås", price: "145 kr" },
            { name: "Älvkarleby", description: "Halvinbakad pizza med oxfilé, svamp, färska tomater, pressad vitlök och bearnaisesås", price: "145 kr" },
            { name: "Acapulco", description: "Oxfilé, lök, vitlök, champinjoner, jalapeño, tacosås, vitlökssås", price: "145 kr" },
            { name: "Amigo", description: "Köttfärs, tacosås, jalapeño, vitlökssås", price: "S 160 kr / M 220 kr / L 310 kr" },
            { name: "Chicago", description: "Fläskfilé, champinjoner, lök, paprika, bearnaisesås", price: "S 160 kr / M 220 kr / L 310 kr" },
        ],
        
    },
        {
            title: "Kebabrätter",
            items: [
                {
                name: "Kebabtallrik",
                description: "Pommes eller ris, kebabkött, isbergssallad, rödlök, tomater, feferoni",
                price: "125 kr",
                },
                {
                name: "Kebabrulle",
                description: "Färskbakat bröd, kebab, tomater, feferoni, isbergssallad, rödlök",
                price: "125 kr",
                },
                {
                name: "Kebabskrovmål",
                description: "Med bröd och pommes",
                price: "135 kr",
                },
                {
                name: "Kebab med bröd",
                description: "Kebabkött i färskbakat bröd, isbergssallad, rödlök, tomater, feferoni",
                price: "120 kr",
                },
            ],
            },
            {
            title: "Kycklingkebab",
            items: [
                {
                name: "Kycklingtallrik",
                description: "Pommes eller ris, isbergssallad, rödlök, tomater, feferoni, kycklingkebab",
                price: "130 kr",
                },
                {
                name: "Kycklingkebrulle",
                description: "Färskbakat bröd, kycklingkebab, tomater, feferoni, isbergssallad, rödlök",
                price: "130 kr",
                },
                {
                name: "Kyckling med bröd",
                description: "Kycklingkebabkött i färskbakat bröd, isbergssallad, rödlök, tomater, feferoni",
                price: "120 kr",
                },
                {
                name: "Kycklingkebabskrovmål",
                description: "Med bröd och pommes",
                price: "135 kr",
                },
            ],
            },
            {
            title: "Falafel",
            items: [
                {
                name: "Falafeltallrik",
                description: "Pommes eller ris, isbergssallad, tomat, gurka, lök, feferoni",
                price: "125 kr",
                },
                {
                name: "Falafelrulle",
                description: "Färskbakat bröd, isbergssallad, rödlök, tomat, gurka, feferoni",
                price: "125 kr",
                },
                {
                name: "Falafelskrovmål",
                description: "Med bröd och pommes",
                price: "135 kr",
                },
            ],
            },
            {
            title: "Pasta",
            items: [
                {
                name: "Ox-/Fläskfilépasta",
                description: "Champinjoner, gräddsås",
                price: "169 kr",
                },
                {
                name: "Kycklingpasta",
                description: "Kyckling, paprika, lök, currysås",
                price: "165 kr",
                },
                {
                name: "Vegetarisk pasta",
                description: "Stekta grönsaker, tomat, gräddsås",
                price: "160 kr",
                },
                {
                name: "Pasta Carbonara",
                description: "Bacon, lök, äggula, gräddsås",
                price: "150 kr",
                },
            ],
        
        
    },
];