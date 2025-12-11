import { useTranslation } from 'react-i18next';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function Contact() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-cream pattern-bg">
      {/* Header */}
      <div className="bg-marigold text-charcoal py-20 relative overflow-hidden border-b-4 border-charcoal">
        <div className="container relative z-10 text-center">
          <h1 className="font-heading text-5xl md:text-7xl text-charcoal drop-shadow-[2px_2px_0px_white] mb-4">
            {t('contact.title')}
          </h1>
        </div>
      </div>

      <div className="container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl border-2 border-charcoal shadow-[8px_8px_0px_0px_var(--teal)]">
              <h2 className="font-heading text-3xl text-charcoal mb-6">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-teal/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-teal" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Address</h3>
                    <p className="text-gray-600">Avenue de l'Armée 130<br/>1040 Etterbeek, Brussels</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-saffron/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-saffron" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Phone</h3>
                    <p className="text-gray-600">+32 474 892 741</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-marigold/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-charcoal" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Email</h3>
                    <p className="text-gray-600">chaiandthali@europe.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t-2 border-dashed border-gray-200">
                <h3 className="font-bold text-lg mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a href="https://www.instagram.com/chaiandthali/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-charcoal text-white rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a href="#" className="w-12 h-12 bg-charcoal text-white rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                    <Facebook className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-charcoal text-white p-8 rounded-2xl border-2 border-charcoal shadow-[8px_8px_0px_0px_var(--saffron)]">
              <div className="flex items-center gap-4 mb-6">
                <Clock className="w-8 h-8 text-saffron" />
                <h2 className="font-heading text-3xl text-white">Opening Hours</h2>
              </div>
              <ul className="space-y-4 text-lg">
                <li className="flex justify-between border-b border-white/10 pb-2">
                  <span>Monday - Thursday</span>
                  <span>12:00 - 22:00</span>
                </li>
                <li className="flex justify-between border-b border-white/10 pb-2 text-saffron font-bold">
                  <span>Friday - Saturday</span>
                  <span>12:00 - 23:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday</span>
                  <span>12:00 - 22:00</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl border-2 border-charcoal shadow-[8px_8px_0px_0px_var(--marigold)] h-fit">
            <h2 className="font-heading text-3xl text-charcoal mb-6">Send us a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-bold text-sm uppercase tracking-wider">Name</label>
                  <Input placeholder="Your name" className="border-2 border-gray-300 focus:border-teal h-12" />
                </div>
                <div className="space-y-2">
                  <label className="font-bold text-sm uppercase tracking-wider">Email</label>
                  <Input placeholder="Your email" type="email" className="border-2 border-gray-300 focus:border-teal h-12" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="font-bold text-sm uppercase tracking-wider">Subject</label>
                <Input placeholder="What is this about?" className="border-2 border-gray-300 focus:border-teal h-12" />
              </div>
              
              <div className="space-y-2">
                <label className="font-bold text-sm uppercase tracking-wider">Message</label>
                <Textarea placeholder="Tell us everything..." className="border-2 border-gray-300 focus:border-teal min-h-[150px]" />
              </div>
              
              <Button className="w-full bg-teal text-white font-bold text-lg py-6 hover:bg-teal/90 border-2 border-charcoal shadow-[4px_4px_0px_0px_var(--charcoal)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_var(--charcoal)] transition-all">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
