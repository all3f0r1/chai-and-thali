import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Globe } from 'lucide-react';
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
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-heading text-xl border-2 border-charcoal group-hover:rotate-12 transition-transform">
                CT
              </div>
              <span className={`font-heading text-2xl tracking-wide ${isScrolled ? 'text-foreground' : 'text-foreground md:text-white md:text-shadow-pop'}`}>
                Chai & Thali
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <span 
                  className={`font-medium text-lg cursor-pointer hover:text-primary transition-colors relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full ${
                    location === item.path ? 'text-primary after:w-full' : isScrolled ? 'text-foreground' : 'text-white'
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            ))}
            
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleLanguage}
              className={isScrolled ? 'text-foreground' : 'text-white hover:text-primary hover:bg-white/10'}
            >
              <Globe className="h-5 w-5" />
              <span className="sr-only">Switch Language</span>
            </Button>

            <Button 
              className="bg-primary text-white font-bold hover:bg-primary/90 box-shadow-pop hover:box-shadow-pop-hover transition-all border-2 border-charcoal"
            >
              {t('nav.order')}
            </Button>
          </nav>

          {/* Mobile Nav */}
          <div className="flex items-center gap-4 md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleLanguage}
              className={isScrolled ? 'text-foreground' : 'text-foreground'}
            >
              <Globe className="h-5 w-5" />
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
                  <Button className="w-full bg-primary text-white font-bold text-xl py-6 box-shadow-pop border-2 border-charcoal mt-4">
                    {t('nav.order')}
                  </Button>
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
              {/* Social Icons Placeholder */}
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                <span className="font-bold">IG</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                <span className="font-bold">FB</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-heading text-xl text-white">{t('contact.title')}</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Avenue de l'Armée 130</li>
              <li>1040 Etterbeek, Brussels</li>
              <li>+32 474 892 741</li>
              <li>chaiandthali@europe.com</li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-heading text-xl text-white">{t('contact.hours')}</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex justify-between">
                <span>Mon - Thu</span>
                <span>12:00 - 22:00</span>
              </li>
              <li className="flex justify-between text-primary font-bold">
                <span>Fri - Sat</span>
                <span>12:00 - 23:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sun</span>
                <span>12:00 - 22:00</span>
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
