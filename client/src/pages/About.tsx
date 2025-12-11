import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <div className="bg-teal text-cream py-20 relative overflow-hidden">
        <div className="container relative z-10 text-center">
          <h1 className="font-heading text-5xl md:text-7xl text-white drop-shadow-[4px_4px_0px_var(--charcoal)] mb-4">
            {t('about.title')}
          </h1>
        </div>
      </div>

      <div className="container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl border-2 border-charcoal shadow-[8px_8px_0px_0px_var(--saffron)] transform rotate-1">
              <h2 className="font-heading text-3xl text-charcoal mb-4">Our Story</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                {t('about.desc1')}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t('about.desc2')}
              </p>
            </div>

            <div className="bg-charcoal p-8 rounded-2xl border-2 border-charcoal shadow-[8px_8px_0px_0px_var(--marigold)] transform -rotate-1 text-white">
              <h2 className="font-heading text-3xl text-saffron mb-4">Our Mission</h2>
              <p className="text-lg leading-relaxed">
                To celebrate the vibrant tapestry of Indian food by offering dishes prepared with time-honored recipes, fresh ingredients, and a touch of passion.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-marigold rounded-full blur-3xl opacity-20 animate-pulse"></div>
            <div className="grid grid-cols-2 gap-4 relative z-10">
              <img 
                src="/images/community-eating.png" 
                alt="Community" 
                className="rounded-xl border-2 border-charcoal shadow-[6px_6px_0px_0px_var(--charcoal)] transform hover:scale-105 transition-transform duration-500"
              />
              <img 
                src="/images/chai-samosa-art.png" 
                alt="Food" 
                className="rounded-xl border-2 border-charcoal shadow-[6px_6px_0px_0px_var(--charcoal)] transform translate-y-8 hover:scale-105 transition-transform duration-500"
              />
              <img 
                src="/images/thali-feast.png" 
                alt="Thali" 
                className="rounded-xl border-2 border-charcoal shadow-[6px_6px_0px_0px_var(--charcoal)] col-span-2 transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
