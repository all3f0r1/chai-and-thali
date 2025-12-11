import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  const { t, i18n } = useTranslation();
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'fr' : 'en';
    i18n.changeLanguage(newLang);
  };

  const navItems = [
    { label: t('nav.home'), path: '/' },
    { label: t('nav.menu'), path: '/menu' },
    { label: t('nav.about'), path: '/about' },
    { label: t('nav.contact'), path: '/contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background font-body overflow-x-hidden">
      {/* Navigation */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-md py-2' : 'bg-transparent py-4'
        }`}
      >
        <div className="container flex items-center justify-between">
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer group">
              <img 
                src="/images/logo.png" 
                alt="Chai and Thali Logo" 
                className="h-20 w-auto group-hover:scale-105 transition-transform drop-shadow-md"
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <span 
                  className={`font-medium text-lg cursor-pointer hover:text-primary transition-colors relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full ${
                    location === item.path ? 'text-primary after:w-full' : isScrolled ? 'text-foreground' : 'text-white text-shadow-sm'
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            ))}
            
            <Button 
              variant="ghost" 
              onClick={toggleLanguage}
              className={`font-bold text-lg ${isScrolled ? 'text-foreground' : 'text-white hover:text-primary hover:bg-white/10 text-shadow-sm'}`}
            >
              {i18n.language === 'en' ? '🇫🇷 FR' : '🇬🇧 EN'}
            </Button>

            <div className="flex gap-2">
              <a href="https://deliveroo.be/en/menu/brussels/etterbeek/chai-and-thali" target="_blank" rel="noopener noreferrer">
                <Button className="bg-[#00CCBC] hover:bg-[#00b3a6] text-white font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all border-2 border-black px-3 h-12">
                  <img src="/images/deliveroo-logo.png" alt="Deliveroo" className="h-8 w-auto filter brightness-0 invert" />
                </Button>
              </a>
              <a href="https://www.ubereats.com/be/store/chai-and-thali/UNw2A8spT72JXkS3h9g89Q?diningMode=PICKUP" target="_blank" rel="noopener noreferrer">
                <Button className="bg-[#06C167] hover:bg-[#05a357] text-white font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all border-2 border-black px-3 h-12">
                  <img src="/images/ubereats-logo.png" alt="Uber Eats" className="h-8 w-auto filter brightness-0 invert" />
                </Button>
              </a>
            </div>
          </nav>

          {/* Mobile Nav */}
          <div className="flex items-center gap-4 md:hidden">
            <Button 
              variant="ghost" 
              onClick={toggleLanguage}
              className={isScrolled ? 'text-foreground' : 'text-white text-shadow-sm'}
            >
              {i18n.language === 'en' ? '🇫🇷 FR' : '🇬🇧 EN'}
            </Button>
            
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="border-2 border-charcoal bg-white text-charcoal">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent className="bg-cream border-l-4 border-primary">
                <div className="flex flex-col gap-8 mt-10">
                  {navItems.map((item) => (
                    <Link key={item.path} href={item.path}>
                      <span className={`font-heading text-3xl cursor-pointer hover:text-primary transition-colors ${location === item.path ? 'text-primary' : 'text-foreground'}`}>
                        {item.label}
                      </span>
                    </Link>
                  ))}
                  <div className="flex gap-4 mt-4 justify-center">
                    <a href="https://deliveroo.be/en/menu/brussels/etterbeek/chai-and-thali" target="_blank" rel="noopener noreferrer" className="w-1/2">
                      <Button className="w-full bg-[#00CCBC] hover:bg-[#00b3a6] text-white font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border-2 border-black h-14">
                        <img src="/images/deliveroo-logo.png" alt="Deliveroo" className="h-8 w-auto mx-auto filter brightness-0 invert" />
                      </Button>
                    </a>
                    <a href="https://www.ubereats.com/be/store/chai-and-thali/UNw2A8spT72JXkS3h9g89Q?diningMode=PICKUP" target="_blank" rel="noopener noreferrer" className="w-1/2">
                      <Button className="w-full bg-[#06C167] hover:bg-[#05a357] text-white font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border-2 border-black h-14">
                        <img src="/images/ubereats-logo.png" alt="Uber Eats" className="h-8 w-auto mx-auto filter brightness-0 invert" />
                      </Button>
                    </a>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-0">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-charcoal text-cream py-12 border-t-8 border-accent relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-pattern-dots opacity-10"></div>
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10">
          <div className="space-y-4">
            <h3 className="font-heading text-3xl text-primary">Chai & Thali</h3>
            <p className="text-gray-300 max-w-xs">
              {t('features.authentic.desc')}
            </p>
            <div className="flex gap-4 pt-2">
              <a href="https://www.instagram.com/chaiandthali/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors cursor-pointer text-white border border-white/20 hover:border-primary shadow-[2px_2px_0px_0px_rgba(0,0,0,0.5)] hover:translate-y-[1px] hover:shadow-none">
                <span className="font-bold">IG</span>
              </a>
              <a href="https://www.facebook.com/people/Chai-and-Thali/100083066976868/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors cursor-pointer text-white border border-white/20 hover:border-primary shadow-[2px_2px_0px_0px_rgba(0,0,0,0.5)] hover:translate-y-[1px] hover:shadow-none">
                <span className="font-bold">FB</span>
              </a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-heading text-xl text-white">{t('contact.title')}</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Avenue de l'Armée 130</li>
              <li>1040 Etterbeek, Brussels</li>
              <li>
                <a href="tel:+32474892741" className="hover:text-primary transition-colors">+32 474 892 741</a>
              </li>
              <li>
                <a href="mailto:chaiandthali@europe.com" className="hover:text-primary transition-colors">chaiandthali@europe.com</a>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-heading text-xl text-white">{t('contact.hours')}</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex justify-between">
                <span>{t('contact.days.mon_thu')}</span>
                <span>12:00 - 16:00, 18:00 - 21:30</span>
              </li>
              <li className="flex justify-between text-primary font-bold">
                <span>{t('contact.days.fri')}</span>
                <span>12:00 - 16:00, 18:00 - 22:00</span>
              </li>
              <li className="flex justify-between text-primary font-bold">
                <span>{t('contact.days.sat')}</span>
                <span>12:00 - 15:45, 18:00 - 22:00</span>
              </li>
              <li className="flex justify-between">
                <span>{t('contact.days.sun')}</span>
                <span>12:00 - 16:00, 18:00 - 21:30</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="container mt-12 pt-8 border-t border-white/10 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Chai and Thali. {t('footer.rights')}</p>
        </div>
      </footer>
    </div>
  );
}
