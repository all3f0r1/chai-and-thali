import { useTranslation } from 'react-i18next';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Home() {
  const { t } = useTranslation();
  const [currentReview, setCurrentReview] = useState(0);

  const reviews = [
    {
      name: "Sarah M.",
      rating: 5,
      textKey: "reviews.items.0",
      dateKey: "reviews.time.weeks_ago",
      count: 2
    },
    {
      name: "Jean-Pierre D.",
      rating: 5,
      textKey: "reviews.items.1",
      dateKey: "reviews.time.month_ago",
      count: 1
    },
    {
      name: "Priya K.",
      rating: 5,
      textKey: "reviews.items.2",
      dateKey: "reviews.time.weeks_ago",
      count: 3
    },
    {
      name: "Marc L.",
      rating: 4,
      textKey: "reviews.items.3",
      dateKey: "reviews.time.months_ago",
      count: 2
    },
    {
      name: "Elena R.",
      rating: 5,
      textKey: "reviews.items.4",
      dateKey: "reviews.time.week_ago",
      count: 1
    }
  ];

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  // Auto-scroll reviews
  useEffect(() => {
    const interval = setInterval(nextReview, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-bg-pop.png" 
            alt="Indian Street Food Art" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-teal/80 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-cream"></div>
        </div>

        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left space-y-6 animate-in slide-in-from-left duration-700">
            <Badge className="bg-marigold text-charcoal border-2 border-charcoal px-4 py-2 text-lg font-bold uppercase tracking-wider shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform -rotate-2">
              {t('hero.badge')}
            </Badge>
            
            <h1 className="font-heading text-6xl md:text-8xl text-white drop-shadow-[4px_4px_0px_#000] leading-tight">
              {t('hero.title')}
            </h1>
            
            <p className="font-body text-xl md:text-2xl text-white font-medium drop-shadow-md max-w-xl mx-auto lg:mx-0">
              {t('hero.subtitle')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Link href="/menu">
                <Button className="bg-saffron hover:bg-orange-600 text-white text-xl px-8 py-6 rounded-lg font-bold border-2 border-charcoal shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all h-auto">
                  {t('hero.cta_menu')}
                </Button>
              </Link>
              
              <div className="flex gap-2">
                <a href="https://deliveroo.be/en/menu/brussels/etterbeek/chai-and-thali" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-[#00CCBC] hover:bg-[#00b3a6] text-white px-4 py-6 rounded-lg font-bold border-2 border-charcoal shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all h-auto">
                    <img src="/images/deliveroo-logo.png" alt="Deliveroo" className="h-8 w-auto filter brightness-0 invert" />
                  </Button>
                </a>
                <a href="https://www.ubereats.com/be/store/chai-and-thali/UNw2A8spT72JXkS3h9g89Q?diningMode=PICKUP" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-[#06C167] hover:bg-[#05a357] text-white px-4 py-6 rounded-lg font-bold border-2 border-charcoal shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all h-auto">
                    <img src="/images/ubereats-logo.png" alt="Uber Eats" className="h-8 w-auto filter brightness-0 invert" />
                  </Button>
                </a>
              </div>
            </div>

            <div className="pt-4 space-y-2">
              <p className="font-hand text-2xl text-marigold font-bold animate-pulse drop-shadow-md bg-charcoal/50 inline-block px-4 py-2 rounded-lg transform rotate-1">
                {t('hero.catering')}
              </p>
              <div className="block lg:hidden">
                <p className="font-bold text-white bg-primary/80 inline-block px-3 py-1 rounded border border-white/20 shadow-sm">
                  {t('hero.cheaper')}
                </p>
              </div>
            </div>
          </div>

          <div className="hidden lg:block relative animate-in slide-in-from-right duration-700">
            <div className="relative z-10 transform hover:scale-105 transition-transform duration-500">
              <img 
                src="/images/logo.png" 
                alt="Chai and Thali Logo" 
                className="w-full max-w-md mx-auto drop-shadow-2xl"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-marigold rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-saffron rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-cream pattern-bg">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { key: 'authentic', icon: '🌶️', color: 'bg-saffron' },
              { key: 'fresh', icon: '🥬', color: 'bg-teal' },
              { key: 'affordable', icon: '💰', color: 'bg-marigold' }
            ].map((feature) => (
              <Card key={feature.key} className="border-2 border-charcoal shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 transition-transform duration-300 bg-white overflow-hidden group">
                <CardContent className="p-8 text-center">
                  <div className={`w-20 h-20 mx-auto ${feature.color} rounded-full flex items-center justify-center text-4xl mb-6 border-2 border-charcoal shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:scale-110 transition-transform`}>
                    {feature.icon}
                  </div>
                  <h3 className="font-heading text-2xl mb-4 text-charcoal">{t(`features.${feature.key}.title`)}</h3>
                  <p className="text-gray-600 font-medium">{t(`features.${feature.key}.desc`)}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-teal text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/menu-icon-pop.png')] opacity-5 bg-repeat space-x-4"></div>
        <div className="container relative z-10">
          <h2 className="font-heading text-4xl md:text-6xl text-center mb-12 text-white drop-shadow-[4px_4px_0px_#000]">
            {t('reviews.title')}
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-white text-charcoal p-8 md:p-12 rounded-2xl border-4 border-charcoal shadow-[12px_12px_0px_0px_var(--marigold)]">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-marigold text-charcoal px-6 py-2 rounded-full border-2 border-charcoal font-bold shadow-[2px_2px_0px_0px_#000]">
                {t('reviews.google_rating')}
              </div>
              
              <div className="flex justify-center mb-6 text-saffron">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={32} fill={i < reviews[currentReview].rating ? "currentColor" : "none"} />
                ))}
              </div>
              
              <p className="font-heading text-2xl md:text-3xl text-center mb-8 leading-relaxed">
                "{t(reviews[currentReview].textKey)}"
              </p>
              
              <div className="text-center">
                <p className="font-bold text-xl">{reviews[currentReview].name}</p>
                <p className="text-gray-500 text-sm">{t(reviews[currentReview].dateKey, { count: reviews[currentReview].count })}</p>
              </div>

              <button 
                onClick={prevReview}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-charcoal text-white p-2 rounded-full hover:bg-primary transition-colors"
              >
                <ChevronLeft size={24} />
              </button>
              
              <button 
                onClick={nextReview}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-charcoal text-white p-2 rounded-full hover:bg-primary transition-colors"
              >
                <ChevronRight size={24} />
              </button>
            </div>
            
            <div className="flex justify-center gap-2 mt-8">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentReview(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentReview ? 'bg-marigold w-8' : 'bg-white/50 hover:bg-white'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-0 border-t-4 border-charcoal">
        <div className="w-full h-[400px] relative bg-gray-200">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2519.537784666666!2d4.4007883!3d50.8336336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3c52433406321%3A0x6543883072674457!2sChai%20and%20Thali!5e0!3m2!1sen!2sbe!4v1700000000000!5m2!1sen!2sbe" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="eager" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Chai and Thali Location"
          ></iframe>
          <div className="absolute bottom-4 right-4 bg-white p-4 rounded-lg border-2 border-charcoal shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] max-w-xs">
            <div className="flex items-start gap-3">
              <MapPin className="text-primary mt-1 shrink-0" />
              <div>
                <h4 className="font-bold text-charcoal">Chai and Thali</h4>
                <p className="text-sm text-gray-600">Avenue de l'Armée 130, 1040 Etterbeek</p>
                <a 
                  href="https://maps.app.goo.gl/ChaiAndThali" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary text-sm font-bold hover:underline mt-1 block"
                >
                  {t('contact.get_directions')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
