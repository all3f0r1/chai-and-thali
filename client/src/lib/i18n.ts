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
        title: "Indulge the swaad of India",
        subtitle: "Authentic Indian Street Food in Brussels",
        cta: "View Menu",
        secondary_cta: "Order Now"
      },
      features: {
        authentic: {
          title: "Authentic Taste",
          desc: "Real Indian swaad, made by Indians with traditional recipes."
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
        chai: "Masala Chai",
        note: "Note: Curries change daily. Vegan & Gluten-free options available."
      },
      about: {
        title: "Bringing India to Your Table",
        desc1: "At Chai and Thali, we're here to redefine your Indian dining experience. We're not just another Indian restaurant. We're the change you've been waiting for.",
        desc2: "A cozy spot to chill with friends, where you can sip on a hot chai and munch on crispy pakoras, just like back in India."
      },
      contact: {
        title: "Visit Us",
        address: "Avenue de l'Armée 130, 1040 Etterbeek, Brussels",
        phone: "Phone",
        email: "Email",
        hours: "Opening Hours",
        follow: "Follow Us"
      },
      footer: {
        rights: "All rights reserved."
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
        title: "Savourez le swaad de l'Inde",
        subtitle: "Street Food Indienne Authentique à Bruxelles",
        cta: "Voir le Menu",
        secondary_cta: "Commander"
      },
      features: {
        authentic: {
          title: "Goût Authentique",
          desc: "Vrai swaad indien, fait par des Indiens avec des recettes traditionnelles."
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
        chai: "Masala Chai",
        note: "Note : Les currys changent tous les jours. Options végétaliennes et sans gluten disponibles."
      },
      about: {
        title: "L'Inde à Votre Table",
        desc1: "Chez Chai and Thali, nous sommes là pour redéfinir votre expérience culinaire indienne. Nous ne sommes pas juste un autre restaurant indien. Nous sommes le changement que vous attendiez.",
        desc2: "Un endroit confortable pour se détendre entre amis, siroter un chai chaud et grignoter des pakoras croustillants, comme en Inde."
      },
      contact: {
        title: "Nous Rendre Visite",
        address: "Avenue de l'Armée 130, 1040 Etterbeek, Bruxelles",
        phone: "Téléphone",
        email: "Email",
        hours: "Heures d'Ouverture",
        follow: "Suivez-nous"
      },
      footer: {
        rights: "Tous droits réservés."
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
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
