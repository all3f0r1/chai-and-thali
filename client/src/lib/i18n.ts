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
        title: "Indulge the taste of India",
        subtitle: "Authentic Indian Street Food in Brussels",
        cta: "View Menu",
        secondary_cta: "Order Now",
        catering: "✨ We also offer Catering Services for your events! ✨"
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
        street_adventure: "Street Adventure",
        chaat: "Chaat Corner",
        thali: "Thali Specials",
        drinks: "Drinks",
        alcohol: "Beer & Alcohol",
        simple_dishes: "Simple Dishes",
        desserts: "Desserts",
        note: "Please note that we make different curries everyday to keep our promise of freshness. All items may not be available everyday, to stay informed, follow us on Instagram :)",
        price_note: "NOTE : Sweet price are variable",
        add_to_order: "Available in store"
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
        send_btn: "Send Message"
      },
      footer: {
        rights: "All rights reserved."
      },
      reviews: {
        title: "What Our Customers Say"
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
        title: "Savourez le goût de l'Inde",
        subtitle: "Street Food Indienne Authentique à Bruxelles",
        cta: "Voir le Menu",
        secondary_cta: "Commander",
        catering: "✨ Nous proposons également un service traiteur pour vos événements ! ✨"
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
        street_adventure: "Aventure de Rue",
        chaat: "Coin Chaat",
        thali: "Spécialités Thali",
        drinks: "Boissons",
        alcohol: "Bière et Alcool",
        simple_dishes: "Plats Simples",
        desserts: "Desserts",
        note: "Veuillez noter que nous préparons des currys différents chaque jour pour tenir notre promesse de fraîcheur. Tous les articles peuvent ne pas être disponibles tous les jours, pour rester informé, suivez-nous sur Instagram :)",
        price_note: "NOTE : Les prix des douceurs sont variables",
        add_to_order: "Disponible en magasin"
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
        send_btn: "Envoyer le message"
      },
      footer: {
        rights: "Tous droits réservés."
      },
      reviews: {
        title: "Ce que disent nos clients"
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
