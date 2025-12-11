import { useTranslation } from 'react-i18next';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Info } from 'lucide-react';

export default function Menu() {
  const { t } = useTranslation();

  const menuCategories = [
    {
      id: "street_adventure",
      title: t('menu.street_adventure'),
      items: [
        { key: "chai_samosa", price: "3.50€" },
        { key: "chole_bhature", price: "6.99€" },
        { key: "vada_pav", price: "4.99€" },
        { key: "pav_bhaji", price: "4.99€" },
        { key: "onion_bhaji", price: "4.50€" },
        { key: "momos", price: "4.99€" },
        { key: "idli_sambar", price: "4.99€" },
        { key: "dosa_plain", price: "4.99€" },
        { key: "dosa_masala", price: "4.99€" },
        { key: "khaman_dokhla", price: "3.50€" },
        { key: "cheese_paav_bhaji", price: "5.99€" },
        { key: "mumbai_sandwich", price: "4.99€" },
        { key: "borivali_dabeli", price: "4.99€" },
        { key: "mix_pakoda", price: "4.5€" },
        { key: "cheese_vada_pav", price: "5.50€" },
        { key: "extra_pav", price: "1.55€" }
      ]
    },
    {
      id: "chaat",
      title: t('menu.chaat'),
      items: [
        { key: "pani_puri", price: "3.99€" },
        { key: "pani_puri_chaat", price: "4.99€" },
        { key: "aloo_tikki_chaat", price: "4.99€" },
        { key: "chole_samosa", price: "4.99€" },
        { key: "chaat_item", price: "4.99€" },
        { key: "samosa_chaat", price: "4.99€" },
        { key: "papedi_chaat", price: "4.99€" },
        { key: "bhel_puri", price: "3.99€" }
      ]
    },
    {
      id: "thali",
      title: t('menu.thali'),
      items: [
        { key: "thali_complet", price: "8.99€", highlight: true },
        { key: "choley", price: "" },
        { key: "dal_makani", price: "" },
        { key: "rajma", price: "" },
        { key: "aloo_gobhi", price: "" },
        { key: "dal_tadka", price: "" },
        { key: "palak_paneer", price: "" },
        { key: "paneer_makani", price: "" },
        { key: "mix_vegetables", price: "" }
      ]
    },
    {
      id: "simple_dishes",
      title: t('menu.simple_dishes'),
      items: [
        { key: "choley_rice", price: "6.50€" },
        { key: "dal_makani_rice", price: "6.50€" },
        { key: "rajma_rice", price: "6.50€" },
        { key: "aloo_gobhi_rice", price: "6.50€" },
        { key: "dal_tadka_rice", price: "6.50€" },
        { key: "palak_paneer_rice", price: "6.50€" },
        { key: "paneer_makani_rice", price: "6.50€" },
        { key: "mix_vegetables_naan", price: "6.50€" },
        { key: "paneer_biryani", price: "8.99€" },
        { key: "veg_biryani", price: "7.99€" }
      ]
    },
    {
      id: "drinks",
      title: t('menu.drinks'),
      items: [
        { key: "chai_epice", price: "1.90€" },
        { key: "matcha_latte", price: "4.50€" },
        { key: "chai_latte", price: "3.50€" },
        { key: "mango_lassi", price: "4.50€" },
        { key: "thandai", price: "5.99€" },
        { key: "jaljeera", price: "3.5€" },
        { key: "coca", price: "2€" },
        { key: "fanta", price: "2€" },
        { key: "sprite", price: "2€" },
        { key: "spa", price: "2€" },
        { key: "sparkling", price: "2€" }
      ]
    },
    {
      id: "alcohol",
      title: t('menu.alcohol'),
      items: [
        { key: "cobra", price: "3.85€" },
        { key: "kingfisher", price: "3.85€" },
        { key: "jupiler33", price: "1.95€" },
        { key: "jupiler50", price: "2.95€" },
        { key: "carlsberg", price: "2.95€" },
        { key: "duvel", price: "3.50€" },
        { key: "kriek", price: "3.50€" }
      ]
    },
    {
      id: "desserts",
      title: t('menu.desserts'),
      items: [
        { key: "gulab_jamun", price: "" },
        { key: "ladoo", price: "" },
        { key: "burfi", price: "" },
        { key: "kala_jamun", price: "" },
        { key: "rasgulla", price: "" }
      ]
    }
  ];

  return (
    <div className="pt-24 pb-20 bg-cream min-h-screen">
      <div className="container">
        <div className="text-center mb-12 animate-in slide-in-from-bottom duration-700">
          <Badge className="bg-marigold text-charcoal border-2 border-charcoal px-4 py-1 text-sm font-bold uppercase tracking-wider mb-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            {t('menu.authentic_flavors')}
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
          <div className="flex justify-center mb-12 overflow-x-auto pb-4 px-4">
            <TabsList className="bg-white border-2 border-charcoal p-2 h-auto flex flex-wrap justify-center gap-2 shadow-[6px_6px_0px_0px_rgba(0,0,0,0.1)] rounded-xl w-full md:w-auto min-h-[60px]">
              {menuCategories.map((category) => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="font-heading text-base md:text-lg px-4 py-2 data-[state=active]:bg-primary data-[state=active]:text-white rounded-lg transition-all flex-grow md:flex-grow-0 whitespace-nowrap"
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
                        <h3 className="font-heading text-2xl text-charcoal">{t(`menu.items.${item.key}.name`)}</h3>
                        {item.price && (
                          <span className="font-bold text-xl text-primary bg-primary/10 px-2 py-1 rounded border border-primary/20 whitespace-nowrap ml-2">
                            {item.price}
                          </span>
                        )}
                      </div>
                      {t(`menu.items.${item.key}.desc`, { defaultValue: '' }) && (
                        <p className="text-charcoal/80 font-medium text-sm mb-4 flex-grow">
                          {t(`menu.items.${item.key}.desc`)}
                        </p>
                      )}
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
