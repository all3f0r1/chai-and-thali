import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      nav: {
        home: "Home",
        menu: "Menu",
        about: "About Us",
        contact: "Contact",
        order: "Order Online"
      },
      hero: {
        badge: "#1 Street Food in Brussels",
        title: "Indulge the taste of India",
        subtitle: "Authentic Indian Street Food in Brussels",
        cta_menu: "View Menu",
        secondary_cta: "Order Now",
        catering: "✨ We also offer Catering Services for your events! ✨",
        cheaper: "64% Cheaper than average"
      },
      features: {
        authentic: {
          title: "Authentic Taste",
          desc: "Real Indian flavors, made by Indians with traditional recipes."
        },
        affordable: {
          title: "Unbeatable Prices",
          desc: "Maximum taste at the lowest price. 64% cheaper than others."
        },
        fresh: {
          title: "Fresh Daily",
          desc: "Different curries every day to keep our promise of freshness."
        }
      },
      menu: {
        title: "Our Street Food Menu",
        authentic_flavors: "Authentic Flavors",
        street_adventure: "Street Adventure",
        chaat: "Chaat Corner",
        thali: "Thali Specials",
        drinks: "Drinks",
        alcohol: "Beer & Alcohol",
        simple_dishes: "Simple Dishes",
        desserts: "Desserts",
        note: "Please note that we make different curries everyday to keep our promise of freshness. All items may not be available everyday, to stay informed, follow us on Instagram :)",
        price_note: "NOTE : Sweet price are variable",
        add_to_order: "Available in store",
        items: {
          chai_samosa: { name: "Chai and Samosa", desc: "Milk tea accompanied by a crispy triangle filled with vegetables (potato, peas...)" },
          chole_bhature: { name: "Chole Bhature", desc: "A traditional Punjabi dish of spicy chickpeas cooked in a savory sauce, served with bhature, large fried and fluffy breads." },
          vada_pav: { name: "Vada Pav", desc: "It consists of a spicy potato patty (vada), placed between two halves of a soft bun (pav). Served with chutneys." },
          pav_bhaji: { name: "Pav Bhaji", desc: "A popular Mumbai street food dish consisting of buttered and lightly toasted breads." },
          onion_bhaji: { name: "Onion Bhaji", desc: "Finely chopped onion rings, mixed with a spicy batter, then fried until crispy." },
          momos: { name: "Momos", desc: "Delicious steamed dumplings of Himalayan origin, filled with spicy vegetables, served with a spicy sauce." },
          idli_sambar: { name: "Idli & Sambar", desc: "Fragrant rice cooked with paneer (Indian cheese), small steamed rice cakes, light and fluffy, served with a spicy lentil curry (sambar)." },
          dosa_plain: { name: "Dosa Plain", desc: "A salty dosa crepe filled with spicy potatoes rolled and served with chutneys and sambar." },
          dosa_masala: { name: "Dosa Masala", desc: "A thin and crispy crepe, made from fermented rice and lentil batter, served with chutneys and sambar for an authentic South Indian taste." },
          khaman_dokhla: { name: "Khaman Dokhla", desc: "A light and fluffy savory cake made from chickpea flour, steamed and seasoned with coriander." },
          cheese_paav_bhaji: { name: "Cheese Paav Bhaji", desc: "Mix of vegetables simmered in a rich and spicy sauce, topped with a generous layer of melting cheese, and soft grilled buttered bread." },
          mumbai_sandwich: { name: "Mumbai Sandwich", desc: "This generously filled sandwich includes layers of crunchy vegetables, spicy potatoes, chutneys... all grilled with butter." },
          borivali_dabeli: { name: "Borivali ki Dabeli", desc: "This Borivali Dabeli is a bun stuffed with a sweet and savory mixture of spicy potatoes, chutney..." },
          mix_pakoda: { name: "Mix Pakoda", desc: "Crispy assortment of expertly spiced vegetable fritters, fried, ideal with a good Chai." },
          cheese_vada_pav: { name: "Cheese Vada Pav", desc: "Vada Pav with cheese." },
          extra_pav: { name: "Extra Pav", desc: "Extra Pav." },
          pani_puri: { name: "Pani Puri", desc: "Small crispy balls served with flavored and spicy water." },
          pani_puri_chaat: { name: "Pani Puri Chaat", desc: "A revisited version of the classic pani puri, topped with potatoes, chickpeas, spices and sweet and spicy chutneys." },
          aloo_tikki_chaat: { name: "Aloo Tikki Chaat", desc: "Crispy potato patties served with yogurt, sweet and spicy chutneys, garnished with coriander." },
          chole_samosa: { name: "Chole Samosa", desc: "A crushed crispy samosa covered with chickpea curry, yogurt and chutneys. Spicy, sweet and tangy flavors." },
          chaat_item: { name: "Chaat", desc: "Crispy flour patties topped with potatoes, yogurt, chutneys and spices. An explosion of sweet, spicy flavors." },
          samosa_chaat: { name: "Samosa Chaat", desc: "A samosa topped with chutneys, yogurt and spices. A combination of crunchy and creamy." },
          papedi_chaat: { name: "Papedi Chaat", desc: "A crispy mix of puffed rice, fresh vegetables, spicy and sweet chutneys, garnished with coriander. A popular and light snack." },
          bhel_puri: { name: "Bhel Puri", desc: "A crispy and light salad, prepared with puffed rice (murmura), pieces of puri (thin crispy patties), fresh vegetables and chutney." },
          thali_complet: { name: "COMPLETE THALI", desc: "RICE, NAAN, 3 DISHES OF YOUR CHOICE, RAITA, SALADS AND 1 DESSERT" },
          choley: { name: "Choley", desc: "A chickpea curry, simmered in a rich sauce fragrant with spices." },
          dal_makani: { name: "Dal Makani", desc: "A creamy curry of black lentils and red kidney beans simmered slowly with spices and butter." },
          rajma: { name: "Rajma", desc: "Red kidney beans simmered in a spicy and creamy sauce." },
          aloo_gobhi: { name: "Aloo gobhi", desc: "A mix of potatoes and cauliflower spiced, sautéed with ginger and garlic." },
          dal_tadka: { name: "Dal Tadka", desc: "Yellow lentils cooked with spices and garnished with a tadka (seasoning) of cumin and garlic." },
          palak_paneer: { name: "Palak Paneer", desc: "A creamy spinach curry with cubes of paneer (Indian cheese)." },
          paneer_makani: { name: "Paneer Makani", desc: "Cubes of paneer in a rich and creamy sauce based on tomatoes, butter and spices." },
          mix_vegetables: { name: "Mix Vegetables", desc: "A colorful mix of vegetables sautéed and simmered with Indian spices." },
          choley_rice: { name: "Choley/Rice or naan", desc: "A spicy chickpea curry, simmered in a rich sauce fragrant with spices." },
          dal_makani_rice: { name: "Dal Makani/Rice or naan", desc: "A creamy curry of black lentils and red kidney beans, cooked slowly with spices, butter and cream." },
          rajma_rice: { name: "Rajma/Rice or naan", desc: "Red kidney beans simmered in a spicy and creamy sauce." },
          aloo_gobhi_rice: { name: "Aloo gobhi/Rice or naan", desc: "A mix of potatoes and cauliflower spiced, sautéed with ginger, garlic and spices." },
          dal_tadka_rice: { name: "Dal Tadka/Rice or naan", desc: "Yellow lentils cooked with spices and garnished with a tadka of cumin, garlic and chili." },
          palak_paneer_rice: { name: "Palak Paneer/Rice or naan", desc: "A creamy spinach curry with cubes of paneer (Indian cheese), seasoned with spices." },
          paneer_makani_rice: { name: "Paneer Makani/Rice or naan", desc: "Cubes of paneer in a rich and creamy sauce based on tomatoes, butter and spices. A mild dish ideal with a naan." },
          mix_vegetables_naan: { name: "Mix Vegetables/ naan", desc: "A colorful mix of vegetables sautéed and simmered with Indian spices." },
          paneer_biryani: { name: "Paneer Biryani", desc: "Fragrant rice cooked with paneer (Indian cheese) marinated in spices and fresh herbs." },
          veg_biryani: { name: "Veg Biryani", desc: "A vegetarian version of Biryani. Fragrant rice cooked with a mix of vegetables and spices." },
          chai_epice: { name: "Spicy Chai" },
          matcha_latte: { name: "Matcha Latte" },
          chai_latte: { name: "Chai Latte" },
          mango_lassi: { name: "Mango Lassi" },
          thandai: { name: "Thandai" },
          jaljeera: { name: "Jaljeera" },
          coca: { name: "Coca-Cola/Zero" },
          fanta: { name: "Fanta/Zero" },
          sprite: { name: "Sprite/Zero" },
          spa: { name: "Spa water" },
          sparkling: { name: "Sparkling water" },
          cobra: { name: "Cobra Beer 33cl" },
          kingfisher: { name: "KingFisher beer" },
          jupiler33: { name: "Jupiler 33cl" },
          jupiler50: { name: "Jupiler 50cl" },
          carlsberg: { name: "Carlsberg" },
          duvel: { name: "Duvel" },
          kriek: { name: "Kriek" },
          gulab_jamun: { name: "Gulab Jamun" },
          ladoo: { name: "Ladoo" },
          burfi: { name: "Burfi" },
          kala_jamun: { name: "Kala Jamun" },
          rasgulla: { name: "Rasgulla" }
        }
      },
      about: {
        title: "Bringing India to Your Table",
        desc1: "At Chai and Thali, we're here to redefine your Indian dining experience. We're not just another Indian restaurant. We're the change you've been waiting for.",
        desc2: "A cozy spot to chill with friends, where you can sip on a hot chai and munch on crispy pakoras, just like back in India.",
        mission: "Our Mission",
        mission_desc: "To celebrate the vibrant tapestry of Indian food by offering dishes prepared with time-honored recipes, fresh ingredients, and a touch of passion.",
        story: "Our Story",
        read_story: "Read Our Story"
      },
      contact: {
        title: "Visit Us",
        address: "Avenue de l'Armée 130, 1040 Etterbeek, Brussels",
        phone: "Phone",
        email: "Email",
        hours: "Opening Hours",
        follow: "Follow Us",
        get_in_touch: "Get in Touch",
        send_message: "Send us a Message",
        name: "Name",
        subject: "Subject",
        message: "Message",
        send_btn: "Send Message",
        get_directions: "Get Directions",
        days: {
          mon_thu: "Mon - Thu",
          fri: "Fri",
          sat: "Sat",
          sun: "Sun",
          sat_sun: "Sat - Sun",
          mon_fri: "Mon - Fri"
        }
      },
      footer: {
        rights: "All rights reserved."
      },
      reviews: {
        title: "What Our Customers Say",
        google_rating: "4.8/5 on Google",
        time: {
          weeks_ago: "{{count}} weeks ago",
          month_ago: "{{count}} month ago",
          months_ago: "{{count}} months ago",
          week_ago: "{{count}} week ago"
        },
        items: {
          0: "The best Indian street food in Brussels! The Vada Pav reminds me of Mumbai.",
          1: "Incredible discovery. The flavors are authentic and the service is impeccable.",
          2: "Finally, authentic chaat in Belgium! The Pani Puri is spot on.",
          3: "Very good value for money. Portions are generous and spicy just right.",
          4: "A hidden gem in Etterbeek. The Thali is a must-try!"
        }
      }
    }
  },
  fr: {
    translation: {
      nav: {
        home: "Accueil",
        menu: "Menu",
        about: "À Propos",
        contact: "Contact",
        order: "Commander"
      },
      hero: {
        badge: "#1 Street Food à Bruxelles",
        title: "Savourez le goût de l'Inde",
        subtitle: "Street Food Indienne Authentique à Bruxelles",
        cta_menu: "Voir le Menu",
        secondary_cta: "Commander",
        catering: "✨ Nous proposons également un service traiteur pour vos événements ! ✨",
        cheaper: "64% Moins cher que la moyenne"
      },
      features: {
        authentic: {
          title: "Goût Authentique",
          desc: "Vraies saveurs indiennes, faites par des Indiens avec des recettes traditionnelles."
        },
        affordable: {
          title: "Prix Imbattables",
          desc: "Un goût maximum au prix le plus bas. 64% moins cher que les autres."
        },
        fresh: {
          title: "Frais Chaque Jour",
          desc: "Des currys différents chaque jour pour tenir notre promesse de fraîcheur."
        }
      },
      menu: {
        title: "Notre Menu Street Food",
        authentic_flavors: "Saveurs Authentiques",
        street_adventure: "Aventure de Rue",
        chaat: "Coin Chaat",
        thali: "Spécialités Thali",
        drinks: "Boissons",
        alcohol: "Bière et Alcool",
        simple_dishes: "Plats Simples",
        desserts: "Desserts",
        note: "Veuillez noter que nous préparons des currys différents chaque jour pour tenir notre promesse de fraîcheur. Tous les articles peuvent ne pas être disponibles tous les jours, pour rester informé, suivez-nous sur Instagram :)",
        price_note: "NOTE : Les prix des douceurs sont variables",
        add_to_order: "Disponible en magasin",
        items: {
          chai_samosa: { name: "Chai et Samosa", desc: "Thé au lait accompagné d'un triangle croustillant composé de légumes (pomme de terre, petits pois...)" },
          chole_bhature: { name: "Chole Bhature", desc: "Un plat traditionnel du Punjab composé de pois chiches épicés cuits dans une sauce savoureuse, accompagnés de bhature, de grandes galettes de pain frits et moelleux." },
          vada_pav: { name: "Vada Pav", desc: "Il se compose d'une galette de pommes de terre épicée (vada), placée entre deux moitiés d'un petit pain moelleux (pav). Le tout est accompagné de chutneys." },
          pav_bhaji: { name: "Pav Bhaji", desc: "Un plat populaire de la street food de Mumbai composé de pains beurrés et légèrement grillés." },
          onion_bhaji: { name: "Onion Bhaji", desc: "Des rondelles d'oignons finement hachées, mélangées à une pâte épicée, puis frites jusqu'à obtenir une texture croustillante" },
          momos: { name: "Momos", desc: "De délicieuses bouchées vapeur d'origine himalayenne, farcies de légumes épicés, servies avec une sauce piquante." },
          idli_sambar: { name: "Idli & Sambar", desc: "Riz parfumé cuit avec du paneer (fromage indien) de petits gâteaux de riz vapeur, légers et moelleux, servis avec un curry épicé de lentilles (sambar)" },
          dosa_plain: { name: "Dosa Plain", desc: "Une crêpe salé dosa garnie de pommes de terre épicées enroulée et servie avec des chutneys et du sambar." },
          dosa_masala: { name: "Dosa Masala", desc: "Une crêpe fine et croustillante, faite de pâte de riz et de lentilles fermentées, servie avec des chutneys et du sambar pour un goût authentique du sud de l'Inde" },
          khaman_dokhla: { name: "Khaman Dokhla", desc: "Un gâteau salé léger et moelleux à base de farine de pois chiches, cuit à la vapeur et assaisonné de coriandre." },
          cheese_paav_bhaji: { name: "Cheese Paav Bhaji", desc: "Mélange de légumes mijotés dans une sauce riche et épicée, garni d'une généreuse couche de fromage fondant, et du pain moelleux grillés au beurre." },
          mumbai_sandwich: { name: "Mumbai Sandwich", desc: "Ce sandwich généreusement garni comprend des couches de légumes croquants, des pommes de, terre épicées chutneys ,... le tout grillé avec du beurre" },
          borivali_dabeli: { name: "Borivali ki Dabeli", desc: "Cette Dabeli de Borivali est un pain farci d'un mélange sucré-salé de pommes de terre épicées, chutney,..." },
          mix_pakoda: { name: "Mix Pakoda", desc: "Assortiment croustillant de beignets de légumes savamment épicés, frits, idéal avec un bon Chai." },
          cheese_vada_pav: { name: "Cheese Vada Pav", desc: "Vada Pav avec fromage." },
          extra_pav: { name: "Extra Pav", desc: "Pav supplémentaire" },
          pani_puri: { name: "Pani Puri", desc: "Des petites boules croustillantes servies avec et l'eau aromatisée et piquante." },
          pani_puri_chaat: { name: "Pani Puri Chaat", desc: "Une version revisitée du classique pani puri, garni de pommes de terre, pois chiches, épices et chutneys sucrés et épicés." },
          aloo_tikki_chaat: { name: "Aloo Tikki Chaat", desc: "Des galettes de pommes de terre croustillantes servies avec du yaourt, des chutneys sucrés et épicés, garnies de coriandre" },
          chole_samosa: { name: "Chole Samosa", desc: "Un samosa croustillant brisé et recouvert de de curry de pois chiches, yaourt et chutneys. Des saveurs épicées, sucrées et acidulées." },
          chaat_item: { name: "Chaat", desc: "Des galettes de farine croustillantes garnies de pommes de terre, yaourt, chutneys et épices. Une explosion de saveurs sucrées, épicées." },
          samosa_chaat: { name: "Samosa Chaat", desc: "Un samosa garni de chutneys, yaourt et d'épices. Une combinaison de croquant et de crémeux." },
          papedi_chaat: { name: "Papedi Chaat", desc: "Un mélange croustillant de riz soufflé, légumes frais, chutneys épicés et sucré, garni de coriandre. Un encas populaire et léger." },
          bhel_puri: { name: "Bhel Puri", desc: "Une salade croustillante et légère, préparée avec du riz soufflé (murmura), des morceaux de puri (galettes fines croustillantes), des légumes frais et chutney." },
          thali_complet: { name: "THALI COMPLET", desc: "RIZ, NAAN, 3 PLATS AU CHOIX, RAITA, SALADES ET 1 DESSERT" },
          choley: { name: "Choley", desc: "Un curry de pois chiches, mijoté dans une sauce riche et parfumée aux épices." },
          dal_makani: { name: "Dal Makani", desc: "Un curry crémeux de lentilles noires et de haricots rouges mijotés lentement avec des épices et du beurre." },
          rajma: { name: "Rajma", desc: "Des haricots rouges mijotés dans une sauce épicée et crémeuse." },
          aloo_gobhi: { name: "Aloo gobhi", desc: "Un mélange de pommes de terre et de chou-fleur épicé, sauté avec du gingembre et de l'ail." },
          dal_tadka: { name: "Dal Tadka", desc: "Des lentilles jaunes cuites avec des épices et agrémentées d'un tadka (assaisonnement), de cumin et de l'ail." },
          palak_paneer: { name: "Palak Paneer", desc: "Un curry d'épinards onctueux avec des cubes de paneer (fromage indien)." },
          paneer_makani: { name: "Paneer Makani", desc: "Des cubes de paneer dans une sauce riche et crémeuse à base de tomates, beurre et épices." },
          mix_vegetables: { name: "Mix Vegetables", desc: "Un mélange coloré de légumes sautés et mijotés avec des épices indiennes." },
          choley_rice: { name: "Choley/Riz ou naan", desc: "Un curry de pois chiches épicé, mijoté dans une sauce riche et parfumée aux épices." },
          dal_makani_rice: { name: "Dal Makani/Riz ou naan", desc: "Un curry crémeux de lentilles noires et de haricots rouges, cuit lentement avec des épices, du beurre et de la crème." },
          rajma_rice: { name: "Rajma/Riz ou naan", desc: "Des haricots rouges mijotés dans une sauce épicée et crémeuse." },
          aloo_gobhi_rice: { name: "Aloo gobhi/Riz ou naan", desc: "Un mélange de pommes de terre et de chou-fleur épicé, sauté avec du gingembre, de l'ail et des épices." },
          dal_tadka_rice: { name: "Dal Tadka/Riz ou naan", desc: "Des lentilles jaunes cuites avec des épices et agrémentées d'un tadka de cumin, ail et piment." },
          palak_paneer_rice: { name: "Palak Paneer/Riz ou naan", desc: "Un curry d'épinards onctueux avec des cubes de paneer (fromage indien), assaisonné d'épices." },
          paneer_makani_rice: { name: "Paneer Makani/Riz ou naan", desc: "Des cubes de paneer dans une sauce riche et crémeuse à base de tomates, beurre et épices. Un plat doux et idéal avec un naan." },
          mix_vegetables_naan: { name: "Mix Vegetables/ naan", desc: "Un mélange coloré de légumes sautés et mijotés avec des épices indiennes." },
          paneer_biryani: { name: "Paneer Biryani", desc: "Riz parfumé cuit avec du paneer (fromage indien) mariné dans des épices et herbes fraîches." },
          veg_biryani: { name: "Veg Biryani", desc: "Une version végétarienne de la Biryani. Riz parfumé cuit avec un mélange de légumes et des épices" },
          chai_epice: { name: "Chai épicé" },
          matcha_latte: { name: "Matcha Latte" },
          chai_latte: { name: "Chai Latte" },
          mango_lassi: { name: "Mango Lassi" },
          thandai: { name: "Thandai" },
          jaljeera: { name: "Jaljeera" },
          coca: { name: "Coca-Cola/Zero" },
          fanta: { name: "Fanta/Zero" },
          sprite: { name: "Sprite/Zero" },
          spa: { name: "Spa water/eau" },
          sparkling: { name: "Eau gazeuse/eau" },
          cobra: { name: "Cobra Beer 33cl" },
          kingfisher: { name: "KingFisher beer" },
          jupiler33: { name: "Jupiler 33cl" },
          jupiler50: { name: "Jupiler 50cl" },
          carlsberg: { name: "Carlsberg" },
          duvel: { name: "Duvel" },
          kriek: { name: "Kriek" },
          gulab_jamun: { name: "Gulab Jamun" },
          ladoo: { name: "Ladoo" },
          burfi: { name: "Burfi" },
          kala_jamun: { name: "Kala Jamun" },
          rasgulla: { name: "Rasgulla" }
        }
      },
      about: {
        title: "L'Inde à Votre Table",
        desc1: "Chez Chai and Thali, nous sommes là pour redéfinir votre expérience culinaire indienne. Nous ne sommes pas juste un autre restaurant indien. Nous sommes le changement que vous attendiez.",
        desc2: "Un endroit confortable pour se détendre entre amis, siroter un chai chaud et grignoter des pakoras croustillants, comme en Inde.",
        mission: "Notre Mission",
        mission_desc: "Célébrer la tapisserie vibrante de la cuisine indienne en proposant des plats préparés avec des recettes ancestrales, des ingrédients frais et une touche de passion.",
        story: "Notre Histoire",
        read_story: "Lire Notre Histoire"
      },
      contact: {
        title: "Nous Rendre Visite",
        address: "Avenue de l'Armée 130, 1040 Etterbeek, Bruxelles",
        phone: "Téléphone",
        email: "Email",
        hours: "Heures d'Ouverture",
        follow: "Suivez-nous",
        get_in_touch: "Contactez-nous",
        send_message: "Envoyez-nous un message",
        name: "Nom",
        subject: "Sujet",
        message: "Message",
        send_btn: "Envoyer le message",
        get_directions: "Itinéraire",
        days: {
          mon_thu: "Lun - Jeu",
          fri: "Ven",
          sat: "Sam",
          sun: "Dim",
          sat_sun: "Sam - Dim",
          mon_fri: "Lun - Ven"
        }
      },
      footer: {
        rights: "Tous droits réservés."
      },
      reviews: {
        title: "Ce que disent nos clients",
        google_rating: "4.8/5 sur Google",
        time: {
          weeks_ago: "il y a {{count}} semaines",
          month_ago: "il y a {{count}} mois",
          months_ago: "il y a {{count}} mois",
          week_ago: "il y a {{count}} semaine"
        },
        items: {
          0: "La meilleure street food indienne à Bruxelles ! Le Vada Pav me rappelle Mumbai.",
          1: "Incroyable découverte. Les saveurs sont authentiques et le service est impeccable.",
          2: "Enfin du vrai chaat en Belgique ! Le Pani Puri est parfait.",
          3: "Très bon rapport qualité-prix. Les portions sont généreuses et épicées comme il faut.",
          4: "Une perle cachée à Etterbeek. Le Thali est incontournable !"
        }
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    lng: 'en', // Force default language to English
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
