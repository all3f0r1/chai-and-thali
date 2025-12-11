import { useTranslation } from 'react-i18next';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Info, Utensils } from 'lucide-react';

export default function Menu() {
  const { t } = useTranslation();

  const menuCategories = [
    {
      id: "street_adventure",
      title: t('menu.street_adventure'),
      items: [
        { name: "Chai and Samosa", price: "3.50€", desc: "Thé au lait accompagné d'un triangle croustillant composé de légumes (pomme de terre, petits pois...)" },
        { name: "Chole Bhature", price: "6.99€", desc: "Un plat traditionnel du Punjab composé de pois chiches épicés cuits dans une sauce savoureuse, accompagnés de bhature, de grandes galettes de pain frits et moelleux." },
        { name: "Vada Pav", price: "4.99€", desc: "Il se compose d'une galette de pommes de terre épicée (vada), placée entre deux moitiés d'un petit pain moelleux (pav). Le tout est accompagné de chutneys." },
        { name: "Pav Bhaji", price: "4.99€", desc: "Un plat populaire de la street food de Mumbai composé de pains beurrés et légèrement grillés." },
        { name: "Onion Bhaji", price: "4.50€", desc: "Des rondelles d'oignons finement hachées, mélangées à une pâte épicée, puis frites jusqu'à obtenir une texture croustillante" },
        { name: "Momos", price: "4.99€", desc: "De délicieuses bouchées vapeur d'origine himalayenne, farcies de légumes épicés, servies avec une sauce piquante." },
        { name: "Idli & Sambar", price: "4.99€", desc: "Riz parfumé cuit avec du paneer (fromage indien) de petits gâteaux de riz vapeur, légers et moelleux, servis avec un curry épicé de lentilles (sambar)" },
        { name: "Dosa Plain", price: "4.99€", desc: "Une crêpe salé dosa garnie de pommes de terre épicées enroulée et servie avec des chutneys et du sambar." },
        { name: "Dosa Masala", price: "4.99€", desc: "Une crêpe fine et croustillante, faite de pâte de riz et de lentilles fermentées, servie avec des chutneys et du sambar pour un goût authentique du sud de l'Inde" },
        { name: "Khaman Dokhla", price: "3.50€", desc: "Un gâteau salé léger et moelleux à base de farine de pois chiches, cuit à la vapeur et assaisonné de coriandre." },
        { name: "Cheese Paav Bhaji", price: "5.99€", desc: "Mélange de légumes mijotés dans une sauce riche et épicée, garni d'une généreuse couche de fromage fondant, et du pain moelleux grillés au beurre." },
        { name: "Mumbai Sandwich", price: "4.99€", desc: "Ce sandwich généreusement garni comprend des couches de légumes croquants, des pommes de, terre épicées chutneys ,... le tout grillé avec du beurre" },
        { name: "Borivali ki Dabeli", price: "4.99€", desc: "Cette Dabeli de Borivali est un pain farci d'un mélange sucré-salé de pommes de terre épicées, chutney,..." },
        { name: "Mix Pakoda", price: "4.5€", desc: "Assortiment croustillant de beignets de légumes savamment épicés, frits, idéal avec un bon Chai." },
        { name: "Cheese Vada Pav", price: "5.50€", desc: "Vada Pav avec fromage." },
        { name: "Extra Pav", price: "1.55€", desc: "Pav supplémentaire" }
      ]
    },
    {
      id: "chaat",
      title: t('menu.chaat'),
      items: [
        { name: "Pani Puri", price: "3.99€", desc: "Des petites boules croustillantes servies avec et l'eau aromatisée et piquante." },
        { name: "Pani Puri Chaat", price: "4.99€", desc: "Une version revisitée du classique pani puri, garni de pommes de terre, pois chiches, épices et chutneys sucrés et épicés." },
        { name: "Aloo Tikki Chaat", price: "4.99€", desc: "Des galettes de pommes de terre croustillantes servies avec du yaourt, des chutneys sucrés et épicés, garnies de coriandre" },
        { name: "Chole Samosa", price: "4.99€", desc: "Un samosa croustillant brisé et recouvert de de curry de pois chiches, yaourt et chutneys. Des saveurs épicées, sucrées et acidulées." },
        { name: "Chaat", price: "4.99€", desc: "Des galettes de farine croustillantes garnies de pommes de terre, yaourt, chutneys et épices. Une explosion de saveurs sucrées, épicées." },
        { name: "Samosa Chaat", price: "4.99€", desc: "Un samosa garni de chutneys, yaourt et d'épices. Une combinaison de croquant et de crémeux." },
        { name: "Papedi Chaat", price: "4.99€", desc: "Un mélange croustillant de riz soufflé, légumes frais, chutneys épicés et sucré, garni de coriandre. Un encas populaire et léger." },
        { name: "Bhel Puri", price: "3.99€", desc: "Une salade croustillante et légère, préparée avec du riz soufflé (murmura), des morceaux de puri (galettes fines croustillantes), des légumes frais et chutney." }
      ]
    },
    {
      id: "thali",
      title: t('menu.thali'),
      items: [
        { 
          name: "THALI COMPLET", 
          price: "8.99€", 
          desc: "RIZ, NAAN, 3 PLATS AU CHOIX, RAITA, SALADES ET 1 DESSERT",
          highlight: true
        },
        { name: "Choley", price: "", desc: "Un curry de pois chiches, mijoté dans une sauce riche et parfumée aux épices." },
        { name: "Dal Makani", price: "", desc: "Un curry crémeux de lentilles noires et de haricots rouges mijotés lentement avec des épices et du beurre." },
        { name: "Rajma", price: "", desc: "Des haricots rouges mijotés dans une sauce épicée et crémeuse." },
        { name: "Aloo gobhi", price: "", desc: "Un mélange de pommes de terre et de chou-fleur épicé, sauté avec du gingembre et de l'ail." },
        { name: "Dal Tadka", price: "", desc: "Des lentilles jaunes cuites avec des épices et agrémentées d'un tadka (assaisonnement), de cumin et de l'ail." },
        { name: "Palak Paneer", price: "", desc: "Un curry d'épinards onctueux avec des cubes de paneer (fromage indien)." },
        { name: "Paneer Makani", price: "", desc: "Des cubes de paneer dans une sauce riche et crémeuse à base de tomates, beurre et épices." },
        { name: "Mix Vegetables", price: "", desc: "Un mélange coloré de légumes sautés et mijotés avec des épices indiennes." }
      ]
    },
    {
      id: "simple_dishes",
      title: t('menu.simple_dishes'),
      items: [
        { name: "Choley/Riz ou naan", price: "6.50€", desc: "Un curry de pois chiches épicé, mijoté dans une sauce riche et parfumée aux épices." },
        { name: "Dal Makani/Riz ou naan", price: "6.50€", desc: "Un curry crémeux de lentilles noires et de haricots rouges, cuit lentement avec des épices, du beurre et de la crème." },
        { name: "Rajma/Riz ou naan", price: "6.50€", desc: "Des haricots rouges mijotés dans une sauce épicée et crémeuse." },
        { name: "Aloo gobhi/Riz ou naan", price: "6.50€", desc: "Un mélange de pommes de terre et de chou-fleur épicé, sauté avec du gingembre, de l'ail et des épices." },
        { name: "Dal Tadka/Riz ou naan", price: "6.50€", desc: "Des lentilles jaunes cuites avec des épices et agrémentées d'un tadka de cumin, ail et piment." },
        { name: "Palak Paneer/Riz ou naan", price: "6.50€", desc: "Un curry d'épinards onctueux avec des cubes de paneer (fromage indien), assaisonné d'épices." },
        { name: "Paneer Makani/Riz ou naan", price: "6.50€", desc: "Des cubes de paneer dans une sauce riche et crémeuse à base de tomates, beurre et épices. Un plat doux et idéal avec un naan." },
        { name: "Mix Vegetables/ naan", price: "6.50€", desc: "Un mélange coloré de légumes sautés et mijotés avec des épices indiennes." },
        { name: "Paneer Biryani", price: "8.99€", desc: "Riz parfumé cuit avec du paneer (fromage indien) mariné dans des épices et herbes fraîches." },
        { name: "Veg Biryani", price: "7.99€", desc: "Une version végétarienne de la Biryani. Riz parfumé cuit avec un mélange de légumes et des épices" }
      ]
    },
    {
      id: "drinks",
      title: t('menu.drinks'),
      items: [
        { name: "Chai épicé", price: "1.90€", desc: "" },
        { name: "Matcha Latte", price: "4.50€", desc: "" },
        { name: "Chai Latte", price: "3.50€", desc: "" },
        { name: "Mango Lassi", price: "4.50€", desc: "" },
        { name: "Thandai", price: "5.99€", desc: "" },
        { name: "Jaljeera", price: "3.5€", desc: "" },
        { name: "Coca-Cola/Zero", price: "2€", desc: "" },
        { name: "Fanta/Zero", price: "2€", desc: "" },
        { name: "Sprite/Zero", price: "2€", desc: "" },
        { name: "Spa water/eau", price: "2€", desc: "" },
        { name: "Eau gazeuse/eau", price: "2€", desc: "" }
      ]
    },
    {
      id: "alcohol",
      title: t('menu.alcohol'),
      items: [
        { name: "Cobra Beer 33cl", price: "3.85€", desc: "" },
        { name: "KingFisher beer", price: "3.85€", desc: "" },
        { name: "Jupiler 33cl", price: "1.95€", desc: "" },
        { name: "Jupiler 50cl", price: "2.95€", desc: "" },
        { name: "Carlsberg", price: "2.95€", desc: "" },
        { name: "Duvel", price: "3.50€", desc: "" },
        { name: "Kriek", price: "3.50€", desc: "" }
      ]
    },
    {
      id: "desserts",
      title: t('menu.desserts'),
      items: [
        { name: "Gulab Jamun", price: "", desc: "" },
        { name: "Ladoo", price: "", desc: "" },
        { name: "Burfi", price: "", desc: "" },
        { name: "Kala Jamun", price: "", desc: "" },
        { name: "Rasgulla", price: "", desc: "" }
      ]
    }
  ];

  return (
    <div className="pt-24 pb-20 bg-cream min-h-screen">
      <div className="container">
        <div className="text-center mb-12 animate-in slide-in-from-bottom duration-700">
          <Badge className="bg-marigold text-charcoal border-2 border-charcoal px-4 py-1 text-sm font-bold uppercase tracking-wider mb-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            Authentic Flavors
          </Badge>
          <h1 className="font-heading text-5xl md:text-7xl text-charcoal mb-6 drop-shadow-sm">
            {t('menu.title')}
          </h1>
          
          <Alert className="max-w-3xl mx-auto bg-white border-2 border-charcoal shadow-[4px_4px_0px_0px_var(--teal)]">
            <Info className="h-5 w-5 text-teal" />
            <AlertDescription className="text-charcoal font-medium text-left ml-2">
              {t('menu.note')}
              <br/>
              <span className="font-bold text-primary mt-2 block">{t('menu.price_note')}</span>
            </AlertDescription>
          </Alert>
        </div>

        <Tabs defaultValue="street_adventure" className="w-full">
          <div className="flex justify-center mb-12 overflow-x-auto pb-4">
            <TabsList className="bg-white border-2 border-charcoal p-2 h-auto flex-wrap justify-center gap-2 shadow-[6px_6px_0px_0px_rgba(0,0,0,0.1)] rounded-xl">
              {menuCategories.map((category) => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="font-heading text-lg px-6 py-2 data-[state=active]:bg-primary data-[state=active]:text-white rounded-lg transition-all"
                >
                  {category.title}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {menuCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="animate-in fade-in duration-500">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item, index) => (
                  <Card 
                    key={index} 
                    className={`bg-white border-2 border-charcoal overflow-hidden hover:-translate-y-1 transition-transform duration-300 ${item.highlight ? 'shadow-[8px_8px_0px_0px_var(--saffron)] ring-2 ring-saffron ring-offset-2' : 'shadow-[6px_6px_0px_0px_rgba(0,0,0,0.1)]'}`}
                  >
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-heading text-2xl text-charcoal">{item.name}</h3>
                        {item.price && (
                          <span className="font-bold text-xl text-primary bg-primary/10 px-2 py-1 rounded border border-primary/20">
                            {item.price}
                          </span>
                        )}
                      </div>
                      {item.desc && (
                        <p className="text-charcoal/80 font-medium text-sm mb-4 flex-grow">
                          {item.desc}
                        </p>
                      )}
                      <div className="mt-auto pt-4 border-t border-gray-100 flex justify-between items-center">
                        <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                          {t('menu.add_to_order')}
                        </span>
                        <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-400">
                          <Utensils className="w-4 h-4" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
}
