import { useTranslation } from 'react-i18next';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

export default function Menu() {
  const { t } = useTranslation();

  const menuCategories = [
    {
      id: 'street_adventure',
      title: t('menu.street_adventure'),
      color: 'var(--saffron)',
      items: [
        { name: 'Chai and Samosa', price: '3.50€', desc: 'Thé au lait accompagné d\'un triangle croustillant composé de légumes (pomme de terre, petits pois...)' },
        { name: 'Chole Bhature', price: '6.99€', desc: 'Un plat traditionnel du Punjab composé de pois chiches épicés cuits dans une sauce savoureuse, accompagnés de bhature.' },
        { name: 'Vada Pav', price: '4.99€', desc: 'Un plat populaire de la street food de Mumbai composé de pains beurrés et légèrement grillés.' },
        { name: 'Onion Bhaji', price: '4.50€', desc: 'Des rondelles d\'oignons finement hachées, mélangées à une pâte épicée, puis frites.' },
        { name: 'Momos', price: '4.99€', desc: 'De délicieuses bouchées vapeur d\'origine himalayenne, farcies de légumes épicés.' },
        { name: 'Idli & Sambar', price: '4.99€', desc: 'Un classique du Sud, petits gâteaux de riz vapeur servis avec un curry épicé de lentilles.' },
        { name: 'Dosa Plain', price: '4.99€', desc: 'Une crêpe salé dosa garnie de pommes de terre épicées enroulée et servie avec des chutneys.' },
        { name: 'Dosa Masala', price: '4.99€', desc: 'Une crêpe fine et croustillante, faite de pâte de riz et de lentilles fermentées.' },
        { name: 'Khaman Dokhla', price: '3.50€', desc: 'Un gâteau salé léger et moelleux à base de farine de pois chiches, cuit à la vapeur.' },
        { name: 'Cheese Paav Bhaji', price: '5.99€', desc: 'Mélange de légumes mijotés dans une sauce riche et épicée, garni de fromage fondant.' },
        { name: 'Mumbai Sandwich', price: '4.99€', desc: 'Couches de légumes croquants, pommes de terre épicées, chutneys, grillé avec du beurre.' },
        { name: 'Borivali ki Dabeli', price: '4.99€', desc: 'Pain farci d\'un mélange sucré-salé de pommes de terre épicées, chutney...' },
      ]
    },
    {
      id: 'chaat',
      title: t('menu.chaat'),
      color: 'var(--teal)',
      items: [
        { name: 'Pani Puri', price: '3.99€', desc: 'Des petites boules croustillantes servies avec eau aromatisée et piquante.' },
        { name: 'Pani Puri Chaat', price: '4.99€', desc: 'Version revisitée garnie de pommes de terre, pois chiches, épices et chutneys.' },
        { name: 'Aloo Tikki Chaat', price: '4.99€', desc: 'Galettes de pommes de terre croustillantes servies avec du yaourt et chutneys.' },
        { name: 'Chole Samosa', price: '4.99€', desc: 'Un samosa croustillant brisé et recouvert de curry de pois chiches, yaourt et chutneys.' },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-cream pattern-bg pb-20">
      {/* Header */}
      <div className="bg-charcoal text-cream py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/images/hero-bg.png')] bg-cover bg-center"></div>
        <div className="container relative z-10 text-center">
          <h1 className="font-heading text-5xl md:text-7xl text-saffron drop-shadow-[4px_4px_0px_rgba(255,255,255,0.2)] mb-4">
            {t('menu.title')}
          </h1>
          <p className="text-xl max-w-2xl mx-auto text-gray-300">
            {t('features.authentic.desc')}
          </p>
        </div>
      </div>

      <div className="container mt-12">
        {/* Note Banner */}
        <div className="bg-marigold border-2 border-charcoal p-4 rounded-lg shadow-[4px_4px_0px_0px_var(--charcoal)] mb-12 text-center transform -rotate-1">
          <p className="font-bold text-charcoal text-lg">
            ⚠️ {t('menu.note')}
          </p>
        </div>

        {/* Menu Categories */}
        <div className="space-y-16">
          {menuCategories.map((category) => (
            <div key={category.id} className="relative">
              <div className="flex items-center gap-4 mb-8">
                <h2 
                  className="font-heading text-4xl md:text-5xl text-charcoal relative z-10 px-4 py-2 inline-block transform -rotate-2"
                  style={{ backgroundColor: category.color, color: 'white', textShadow: '2px 2px 0px black' }}
                >
                  {category.title}
                </h2>
                <div className="h-1 bg-charcoal flex-grow rounded-full opacity-20"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item, index) => (
                  <Card 
                    key={index} 
                    className="bg-white border-2 border-charcoal shadow-[6px_6px_0px_0px_rgba(0,0,0,0.1)] hover:shadow-[8px_8px_0px_0px_var(--charcoal)] hover:-translate-y-1 transition-all duration-300 group overflow-hidden"
                  >
                    <CardContent className="p-6 h-full flex flex-col">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-heading text-xl text-charcoal group-hover:text-primary transition-colors">
                          {item.name}
                        </h3>
                        <Badge className="bg-charcoal text-white font-bold text-md px-3 py-1">
                          {item.price}
                        </Badge>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                        {item.desc}
                      </p>
                      <div className="mt-4 pt-4 border-t border-dashed border-gray-300 flex justify-end">
                        <button className="text-xs font-bold uppercase tracking-wider text-primary hover:underline">
                          Add to Order +
                        </button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
