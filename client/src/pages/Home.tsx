import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Star, Clock, MapPin, Utensils, Quote } from 'lucide-react';
import { Link } from 'wouter';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

export default function Home() {
  const { t } = useTranslation();

  const handleOrderClick = () => {
    window.open('https://deliveroo.be/en/menu/brussels/etterbeek/chai-and-thali', '_blank');
  };

  const reviews = [
    {
      name: "J W",
      rating: 5,
      text: "Simply exceptional! So many delicious options, most of which I have never even heard of! And every plate is a work of art. I highly recommend the Papedi Chaat and the Thali, but everything here is fantastic!",
      date: "2 months ago"
    },
    {
      name: "Hetvi Chheda",
      rating: 4,
      text: "An affordable place in Thieffry. It's pretty close to the metro station. The food is good with several options. The food was pretty fresh and they can customise the chillies for all chaat.",
      date: "6 months ago"
    },
    {
      name: "Royal Indian Restaurant",
      rating: 5,
      text: "Food and service was very nice. We thought everything was tasty too. The veggie combo plate was perfect to split for two, which also came with warm Naan bread.",
      date: "Updated Dec 2025"
    }
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-teal">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-bg.png" 
            alt="Mumbai Street Food" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-teal/80 via-teal/60 to-cream"></div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 w-32 h-32 bg-marigold rounded-full blur-3xl opacity-60 animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-saffron rounded-full blur-3xl opacity-60 animate-pulse delay-700"></div>

        <div className="container relative z-10 pt-20 pb-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center lg:text-left animate-in slide-in-from-left duration-1000">
            <Badge className="bg-marigold text-charcoal hover:bg-marigold/90 border-2 border-charcoal px-4 py-1 text-sm font-bold uppercase tracking-wider shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-[-2deg]">
              #1 Street Food in Brussels
            </Badge>
            
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl text-cream drop-shadow-[4px_4px_0px_rgba(0,0,0,1)] leading-tight">
              {t('hero.title')}
            </h1>
            
            <p className="font-body text-xl md:text-2xl text-cream/90 max-w-lg mx-auto lg:mx-0 font-medium drop-shadow-md">
              {t('hero.subtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Link href="/menu">
                <Button className="bg-saffron text-white text-lg px-8 py-6 rounded-lg font-bold border-2 border-charcoal shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
                  {t('hero.cta')} <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button 
                onClick={handleOrderClick}
                variant="outline" 
                className="bg-white text-charcoal text-lg px-8 py-6 rounded-lg font-bold border-2 border-charcoal shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
              >
                {t('hero.secondary_cta')}
              </Button>
            </div>
            
            <div className="pt-4">
              <p className="text-marigold font-heading text-xl animate-pulse">
                ✨ {t('hero.catering')} ✨
              </p>
            </div>
          </div>
          
          <div className="relative hidden lg:block animate-in slide-in-from-right duration-1000 delay-300">
            <div className="relative z-10 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <img 
                src="/images/chai-samosa-art.png" 
                alt="Chai and Samosa Art" 
                className="w-full max-w-md mx-auto rounded-2xl border-4 border-charcoal shadow-[12px_12px_0px_0px_var(--marigold)]"
              />
            </div>
            {/* Floating Elements */}
            <div className="absolute -top-10 -right-10 bg-white p-4 rounded-full border-2 border-charcoal shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-12 animate-bounce duration-[3000ms]">
              <span className="font-heading text-2xl text-primary">64%</span>
              <span className="block font-bold text-xs uppercase">Cheaper</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-cream pattern-bg">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <Card className="bg-white border-2 border-charcoal shadow-[8px_8px_0px_0px_var(--teal)] hover:-translate-y-2 transition-transform duration-300 overflow-hidden group">
              <CardContent className="p-8 flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 bg-teal/20 rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                  <Star className="w-8 h-8 text-teal" />
                </div>
                <h3 className="font-heading text-2xl text-charcoal">{t('features.authentic.title')}</h3>
                <p className="text-charcoal/80 font-medium">
                  {t('features.authentic.desc')}
                </p>
              </CardContent>
            </Card>

            {/* Feature 2 */}
            <Card className="bg-white border-2 border-charcoal shadow-[8px_8px_0px_0px_var(--saffron)] hover:-translate-y-2 transition-transform duration-300 overflow-hidden group">
              <CardContent className="p-8 flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 bg-saffron/20 rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                  <Utensils className="w-8 h-8 text-saffron" />
                </div>
                <h3 className="font-heading text-2xl text-charcoal">{t('features.affordable.title')}</h3>
                <p className="text-charcoal/80 font-medium">
                  {t('features.affordable.desc')}
                </p>
              </CardContent>
            </Card>

            {/* Feature 3 */}
            <Card className="bg-white border-2 border-charcoal shadow-[8px_8px_0px_0px_var(--marigold)] hover:-translate-y-2 transition-transform duration-300 overflow-hidden group">
              <CardContent className="p-8 flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 bg-marigold/20 rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                  <Clock className="w-8 h-8 text-charcoal" />
                </div>
                <h3 className="font-heading text-2xl text-charcoal">{t('features.fresh.title')}</h3>
                <p className="text-charcoal/80 font-medium">
                  {t('features.fresh.desc')}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Menu Preview Section */}
      <section className="py-24 bg-charcoal text-cream relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-teal/10 skew-x-12 transform origin-top-right"></div>
        
        <div className="container relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="space-y-4">
              <Badge className="bg-saffron text-white border-none px-3 py-1 text-sm font-bold uppercase tracking-wider">
                Taste the Magic
              </Badge>
              <h2 className="font-heading text-4xl md:text-6xl text-white">
                {t('menu.title')}
              </h2>
            </div>
            <Link href="/menu">
              <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-charcoal transition-colors text-lg px-6 py-4 rounded-full">
                {t('hero.cta')} <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Menu Item 1 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-marigold rounded-xl transform rotate-3 group-hover:rotate-6 transition-transform"></div>
              <div className="relative bg-white p-6 rounded-xl border-2 border-charcoal h-full flex flex-col">
                <div className="h-40 bg-gray-100 rounded-lg mb-4 overflow-hidden border border-charcoal">
                  <img src="/images/chai-samosa-art.png" alt="Chai" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h3 className="font-heading text-xl text-charcoal mb-2">Masala Chai</h3>
                <p className="text-charcoal/80 text-sm mb-4 flex-grow font-medium">Authentic spiced tea brewed to perfection.</p>
                <div className="flex justify-between items-center mt-auto">
                  <span className="font-bold text-lg text-primary">€1.90</span>
                  <div className="w-8 h-8 bg-charcoal rounded-full flex items-center justify-center text-white group-hover:bg-primary transition-colors">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>

            {/* Menu Item 2 */}
            <div className="group relative mt-8 md:mt-0">
              <div className="absolute inset-0 bg-teal rounded-xl transform -rotate-2 group-hover:-rotate-4 transition-transform"></div>
              <div className="relative bg-white p-6 rounded-xl border-2 border-charcoal h-full flex flex-col">
                <div className="h-40 bg-gray-100 rounded-lg mb-4 overflow-hidden border border-charcoal">
                  <img src="/images/thali-feast.png" alt="Thali" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h3 className="font-heading text-xl text-charcoal mb-2">Special Thali</h3>
                <p className="text-charcoal/80 text-sm mb-4 flex-grow font-medium">Complete meal with rice, roti, dal, and curries.</p>
                <div className="flex justify-between items-center mt-auto">
                  <span className="font-bold text-lg text-primary">€8.99</span>
                  <div className="w-8 h-8 bg-charcoal rounded-full flex items-center justify-center text-white group-hover:bg-primary transition-colors">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>

            {/* Menu Item 3 */}
            <div className="group relative mt-8 lg:mt-0">
              <div className="absolute inset-0 bg-saffron rounded-xl transform rotate-2 group-hover:rotate-4 transition-transform"></div>
              <div className="relative bg-white p-6 rounded-xl border-2 border-charcoal h-full flex flex-col">
                <div className="h-40 bg-gray-100 rounded-lg mb-4 overflow-hidden border border-charcoal">
                  <img src="/images/community-eating.png" alt="Vada Pav" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h3 className="font-heading text-xl text-charcoal mb-2">Vada Pav</h3>
                <p className="text-charcoal/80 text-sm mb-4 flex-grow font-medium">The Indian burger - spicy potato fritter in a bun.</p>
                <div className="flex justify-between items-center mt-auto">
                  <span className="font-bold text-lg text-primary">€4.99</span>
                  <div className="w-8 h-8 bg-charcoal rounded-full flex items-center justify-center text-white group-hover:bg-primary transition-colors">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>

            {/* Menu Item 4 */}
            <div className="group relative mt-8 lg:mt-0">
              <div className="absolute inset-0 bg-marigold rounded-xl transform -rotate-3 group-hover:-rotate-6 transition-transform"></div>
              <div className="relative bg-white p-6 rounded-xl border-2 border-charcoal h-full flex flex-col">
                <div className="h-40 bg-gray-100 rounded-lg mb-4 overflow-hidden border border-charcoal">
                  <img src="/images/chai-samosa-art.png" alt="Samosa" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h3 className="font-heading text-xl text-charcoal mb-2">Samosa Chaat</h3>
                <p className="text-charcoal/80 text-sm mb-4 flex-grow font-medium">Crushed samosa topped with chutneys and yogurt.</p>
                <div className="flex justify-between items-center mt-auto">
                  <span className="font-bold text-lg text-primary">€4.99</span>
                  <div className="w-8 h-8 bg-charcoal rounded-full flex items-center justify-center text-white group-hover:bg-primary transition-colors">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-saffron relative">
        <div className="container">
          <h2 className="font-heading text-4xl md:text-5xl text-charcoal text-center mb-12">
            {t('reviews.title')}
          </h2>
          
          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              {reviews.map((review, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2 p-4">
                  <div className="bg-white p-8 rounded-2xl border-2 border-charcoal shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)] h-full flex flex-col relative">
                    <Quote className="absolute top-4 right-4 w-10 h-10 text-marigold/30" />
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-5 h-5 ${i < review.rating ? 'text-marigold fill-marigold' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                    <p className="text-charcoal/80 font-medium italic mb-6 flex-grow">"{review.text}"</p>
                    <div className="mt-auto">
                      <p className="font-heading text-xl text-charcoal">{review.name}</p>
                      <p className="text-sm text-gray-500">{review.date}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 md:-left-12 bg-white border-2 border-charcoal hover:bg-marigold" />
            <CarouselNext className="right-0 md:-right-12 bg-white border-2 border-charcoal hover:bg-marigold" />
          </Carousel>
        </div>
      </section>

      {/* Location Section with Static Map */}
      <section className="py-20 bg-cream">
        <div className="container text-center max-w-6xl mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl text-charcoal mb-12">
            {t('contact.title')}
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex flex-col items-center p-6 bg-white rounded-xl border-2 border-charcoal shadow-[4px_4px_0px_0px_var(--teal)]">
                <MapPin className="w-10 h-10 text-teal mb-4" />
                <h3 className="font-heading text-xl mb-2">Address</h3>
                <p className="text-charcoal/80 font-medium">Avenue de l'Armée 130<br/>1040 Etterbeek, Brussels</p>
              </div>
              
              <div className="flex flex-col items-center p-6 bg-white rounded-xl border-2 border-charcoal shadow-[4px_4px_0px_0px_var(--saffron)]">
                <Clock className="w-10 h-10 text-saffron mb-4" />
                <h3 className="font-heading text-xl mb-2">Hours</h3>
                <div className="text-charcoal/80 font-medium space-y-1">
                  <p>Mon - Thu: 12:00 - 16:00, 18:00 - 21:30</p>
                  <p className="text-primary font-bold">Fri: 12:00 - 16:00, 18:00 - 22:00</p>
                  <p className="text-primary font-bold">Sat: 12:00 - 15:45, 18:00 - 22:00</p>
                  <p>Sun: 12:00 - 16:00, 18:00 - 21:30</p>
                </div>
              </div>
              
              <div className="flex flex-col items-center p-6 bg-white rounded-xl border-2 border-charcoal shadow-[4px_4px_0px_0px_var(--marigold)]">
                <Utensils className="w-10 h-10 text-marigold mb-4" />
                <h3 className="font-heading text-xl mb-2">Contact</h3>
                <p className="text-charcoal/80 font-medium">+32 474 892 741<br/>chaiandthali@europe.com</p>
              </div>
            </div>

            <div className="h-full min-h-[400px] rounded-2xl border-4 border-charcoal shadow-[12px_12px_0px_0px_var(--charcoal)] overflow-hidden relative group">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2519.567688457856!2d4.400139315745484!3d50.83356667953014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3c5141bcf7333%3A0xa7c93de3511bef9d!2sChai%20and%20Thali!5e0!3m2!1sen!2sbe!4v1678901234567!5m2!1sen!2sbe" 
                width="100%" 
                height="100%" 
                style={{ border: 0, minHeight: '400px' }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale group-hover:grayscale-0 transition-all duration-500"
              ></iframe>
              <div className="absolute inset-0 pointer-events-none border-4 border-white/20 rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
