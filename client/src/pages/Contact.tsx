import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react';

export default function Contact() {
  const { t } = useTranslation();

  return (
    <div className="pt-24 pb-20 bg-cream min-h-screen pattern-bg">
      <div className="container">
        <div className="text-center mb-12 animate-in slide-in-from-bottom duration-700">
          <h1 className="font-heading text-5xl md:text-7xl text-charcoal mb-6 drop-shadow-sm">
            {t('contact.title')}
          </h1>
          <p className="text-xl max-w-2xl mx-auto text-gray-600 font-medium">
            {t('contact.get_in_touch')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8 animate-in slide-in-from-left duration-700 delay-200">
            <Card className="bg-white border-2 border-charcoal shadow-[8px_8px_0px_0px_var(--teal)] overflow-hidden">
              <CardContent className="p-8 space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-saffron rounded-full flex items-center justify-center border-2 border-charcoal shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] shrink-0">
                    <MapPin className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-heading text-2xl text-charcoal mb-2">{t('contact.address')}</h3>
                    <p className="text-gray-600 font-medium text-lg">
                      Avenue de l'Armée 130<br />
                      1040 Etterbeek, Brussels
                    </p>
                    <a 
                      href="https://maps.app.goo.gl/ChaiAndThali" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary font-bold hover:underline mt-2 inline-block"
                    >
                      {t('contact.get_directions')}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-teal rounded-full flex items-center justify-center border-2 border-charcoal shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] shrink-0">
                    <Phone className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-heading text-2xl text-charcoal mb-2">{t('contact.phone')}</h3>
                    <a href="tel:+32474892741" className="text-gray-600 font-medium text-lg hover:text-primary transition-colors">
                      +32 474 892 741
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-marigold rounded-full flex items-center justify-center border-2 border-charcoal shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] shrink-0">
                    <Mail className="text-charcoal w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-heading text-2xl text-charcoal mb-2">{t('contact.email')}</h3>
                    <a href="mailto:chaiandthali@europe.com" className="text-gray-600 font-medium text-lg hover:text-primary transition-colors">
                      chaiandthali@europe.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-charcoal rounded-full flex items-center justify-center border-2 border-charcoal shadow-[2px_2px_0px_0px_rgba(0,0,0,0.5)] shrink-0">
                    <Clock className="text-white w-6 h-6" />
                  </div>
                  <div className="w-full">
                    <h3 className="font-heading text-2xl text-charcoal mb-2">{t('contact.hours')}</h3>
                    <ul className="space-y-2 text-gray-600 font-medium w-full">
                      <li className="flex justify-between border-b border-dashed border-gray-300 pb-1">
                        <span>Mon - Thu</span>
                        <span className="text-marigold font-bold text-shadow-sm bg-charcoal px-2 rounded">12:00 - 16:00, 18:00 - 21:30</span>
                      </li>
                      <li className="flex justify-between border-b border-dashed border-gray-300 pb-1">
                        <span>Fri</span>
                        <span className="text-marigold font-bold text-shadow-sm bg-charcoal px-2 rounded">12:00 - 16:00, 18:00 - 22:00</span>
                      </li>
                      <li className="flex justify-between border-b border-dashed border-gray-300 pb-1">
                        <span>Sat</span>
                        <span className="text-marigold font-bold text-shadow-sm bg-charcoal px-2 rounded">12:00 - 15:45, 18:00 - 22:00</span>
                      </li>
                      <li className="flex justify-between pt-1">
                        <span>Sun</span>
                        <span className="text-marigold font-bold text-shadow-sm bg-charcoal px-2 rounded">12:00 - 16:00, 18:00 - 21:30</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-center gap-6">
              <a href="https://www.instagram.com/chaiandthali/" target="_blank" rel="noopener noreferrer">
                <Button className="bg-white text-charcoal hover:bg-primary hover:text-white border-2 border-charcoal shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all rounded-full w-16 h-16 p-0">
                  <Instagram size={32} />
                </Button>
              </a>
              <a href="https://www.facebook.com/chaiandthali" target="_blank" rel="noopener noreferrer">
                <Button className="bg-white text-charcoal hover:bg-primary hover:text-white border-2 border-charcoal shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all rounded-full w-16 h-16 p-0">
                  <Facebook size={32} />
                </Button>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-in slide-in-from-right duration-700 delay-200">
            <Card className="bg-white border-2 border-charcoal shadow-[8px_8px_0px_0px_var(--saffron)] h-full">
              <CardContent className="p-8">
                <h3 className="font-heading text-3xl text-charcoal mb-6">{t('contact.send_message')}</h3>
                <form className="space-y-6">
                  <div className="space-y-2">
                    <label className="font-bold text-charcoal">{t('contact.name')}</label>
                    <Input className="border-2 border-charcoal focus:ring-2 focus:ring-primary bg-cream" />
                  </div>
                  <div className="space-y-2">
                    <label className="font-bold text-charcoal">{t('contact.email')}</label>
                    <Input type="email" className="border-2 border-charcoal focus:ring-2 focus:ring-primary bg-cream" />
                  </div>
                  <div className="space-y-2">
                    <label className="font-bold text-charcoal">{t('contact.subject')}</label>
                    <Input className="border-2 border-charcoal focus:ring-2 focus:ring-primary bg-cream" />
                  </div>
                  <div className="space-y-2">
                    <label className="font-bold text-charcoal">{t('contact.message')}</label>
                    <Textarea className="min-h-[150px] border-2 border-charcoal focus:ring-2 focus:ring-primary bg-cream" />
                  </div>
                  <Button className="w-full bg-charcoal text-white hover:bg-primary font-bold text-lg py-6 border-2 border-transparent hover:border-charcoal shadow-[4px_4px_0px_0px_var(--marigold)] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_var(--marigold)] transition-all">
                    {t('contact.send_btn')}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
