'use client'; // Animasyonlar için bu satır zorunludur

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

// --- ANİMASYON BİLEŞENİ ---
const ScrollReveal = ({
  children,
  direction = 'up', // 'left', 'right', 'up' olabilir
  className = ''
}: {
  children: React.ReactNode,
  direction?: 'left' | 'right' | 'up',
  className?: string
}) => {

  const variants = {
    hidden: {
      opacity: 0,
      x: direction === 'left' ? -100 : direction === 'right' ? 100 : 0,
      y: direction === 'up' ? 50 : 0
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// --- YARDIMCI BİLEŞENLER ---

const PrimaryButton = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <button className={`px-6 py-3 font-semibold rounded-full transition-transform hover:scale-105 active:scale-95 ${className} bg-emerald-600 text-white hover:bg-emerald-700`}>
    {children}
  </button>
);

const SecondaryButton = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <button className={`px-6 py-3 font-semibold rounded-full border-2 transition-transform hover:scale-105 active:scale-95 ${className} border-emerald-600 text-emerald-600 hover:bg-emerald-50`}>
    {children}
  </button>
);

const ImagePlaceholder = ({ text }: { text: string }) => (
  <div className="w-full h-full min-h-[300px] md:min-h-[500px] bg-gray-200 rounded-2xl flex items-center justify-center text-gray-500 font-bold text-xl border-2 border-dashed border-gray-300 p-4 text-center shadow-inner">
    [Görsel Alanı: {text}]
  </div>
);

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans overflow-x-hidden">

      {/* --- NAVBAR --- */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100 p-4 md:px-8 flex justify-between items-center transition-all duration-300">

        {/* --- LOGO ALANI --- */}
        {/* 'public' klasörüne 'logo.png' adında bir dosya koymalısınız. */}
        <Link href="/" className="flex items-center cursor-pointer">
          <img
            src="/logo.png" // Public klasöründen çeker
            alt="Mavruz Tarım Logo"
            className="h-10 md:h-12 w-auto object-contain" // Yüksekliği sınırladık, genişlik orantılı
            // Logo dosyası yoksa geçici olarak gri kutu görünmesi için style (Sonra silebilirsiniz):
            style={{ minWidth: '120px', background: '#e5e7eb' }}
            onError={(e) => { e.currentTarget.style.display = 'flex'; e.currentTarget.style.justifyContent = 'center'; e.currentTarget.style.alignItems = 'center'; e.currentTarget.innerText = 'LOGO YOK'; }}
          />
        </Link>

        <div className="hidden md:flex space-x-8 font-medium text-gray-600">
          <Link href="#" className="hover:text-emerald-600 transition-colors">Nasıl Çalışır</Link>
          <Link href="#" className="hover:text-emerald-600 transition-colors">Ürünler</Link>
          <Link href="#" className="hover:text-emerald-600 transition-colors">Etki</Link>
          <Link href="#" className="hover:text-emerald-600 transition-colors">Hakkımızda</Link>
        </div>
        <PrimaryButton className="hidden md:block py-2 text-sm">
          İletişime Geç
        </PrimaryButton>
        <div className="md:hidden text-gray-600 cursor-pointer">
          {/* Mobil Menu İkonu (Basit çizgi) */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="pt-36 md:pt-40 pb-20 px-4 md:px-8 max-w-7xl mx-auto flex flex-col items-center text-center">
        <ScrollReveal direction="up">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight leading-tight">
            Taze gıdanın <br className="hidden md:block" />
            <span className="text-emerald-600">geleceğini</span> yetiştiriyoruz.
          </h1>
        </ScrollReveal>

        <ScrollReveal direction="up" className="delay-100">
          <p className="text-xl text-gray-600 max-w-2xl mb-10 leading-relaxed mx-auto">
            Mavruz Tarım olarak, daha az kaynak kullanarak, yılın 365 günü, yerel ve inanılmaz lezzetli ürünler üreten dikey çiftlikler inşa ediyoruz.
          </p>
        </ScrollReveal>

        <ScrollReveal direction="up" className="flex flex-col md:flex-row gap-4">
          <PrimaryButton>Çiftliklerimizi Keşfet</PrimaryButton>
          <SecondaryButton>Ürünleri Gör</SecondaryButton>
        </ScrollReveal>
      </section>

      {/* --- FULL WIDTH IMAGE BANNER --- */}
      <ScrollReveal direction="up">
        <section className="w-full h-[60vh] bg-gray-100 flex items-center justify-center text-3xl font-bold text-gray-400 border-y border-gray-200">
          [Mavruz Tarım - Ana Görsel Alanı]
        </section>
      </ScrollReveal>

      {/* --- CONTENT SECTION 1 --- */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center overflow-hidden">
        <ScrollReveal direction="left" className="space-y-6">
          <h2 className="text-4xl font-bold leading-tight">
            Gezegen için daha iyi bir yol.
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Geleneksel tarıma göre %95 daha az su ve %99 daha az arazi kullanıyoruz. Pestisit yok, GDO yok, sadece saf ve temiz gıda var. Mavruz Tarım kapalı alan dikey çiftlikleri hava koşullarından bağımsızdır.
          </p>
          <div className="pt-4">
            <Link href="#" className="text-emerald-600 font-bold hover:underline text-lg">
              Sürdürülebilirlik Raporunu Oku &rarr;
            </Link>
          </div>
        </ScrollReveal>
        <ScrollReveal direction="right" className="aspect-square md:aspect-auto h-full">
          <ImagePlaceholder text="Mavruz Tarım Üretim Tesisi" />
        </ScrollReveal>
      </section>

      {/* --- CONTENT SECTION 2 --- */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center bg-gray-50 rounded-3xl overflow-hidden">
        <ScrollReveal direction="left" className="aspect-square md:aspect-auto h-full order-last md:order-first">
          <ImagePlaceholder text="Taze Ürün Paketi" />
        </ScrollReveal>
        <ScrollReveal direction="right" className="space-y-6 order-first md:order-last">
          <h2 className="text-4xl font-bold leading-tight">
            Daha önce tatmadığınız tazelik.
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Tarladan sofraya haftalar süren yolculukları unutun. Bizim ürünlerimiz hasat edildikten saatler sonra market raflarında yerini alır. Çıtır, lezzetli ve besin değeri yüksek.
          </p>
          <div className="pt-4">
            <PrimaryButton>Mağazaları Bul</PrimaryButton>
          </div>
        </ScrollReveal>
      </section>

      {/* --- GRID FEATURES SECTION --- */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto text-center">
        <ScrollReveal direction="up">
          <h2 className="text-4xl font-bold mb-16">Neden Mavruz Tarım?</h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Feature 1 */}
          <ScrollReveal direction="up" className="flex flex-col items-center space-y-4">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 font-bold text-2xl transition-transform hover:rotate-12">
              %95
            </div>
            <h3 className="text-xl font-bold">Daha Az Su</h3>
            <p className="text-gray-600">Geleneksel tarıma kıyasla su tüketimini minimize ediyoruz.</p>
          </ScrollReveal>
          {/* Feature 2 */}
          <ScrollReveal direction="up" className="flex flex-col items-center space-y-4">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 font-bold text-2xl transition-transform hover:rotate-12">
              365
            </div>
            <h3 className="text-xl font-bold">Gün Üretim</h3>
            <p className="text-gray-600">Mevsimlerden bağımsız, yılın her günü taze hasat.</p>
          </ScrollReveal>
          {/* Feature 3 */}
          <ScrollReveal direction="up" className="flex flex-col items-center space-y-4">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 font-bold text-2xl transition-transform hover:rotate-12">
              0
            </div>
            <h3 className="text-xl font-bold">Pestisit</h3>
            <p className="text-gray-600">Hiçbir kimyasal ilaç kullanmadan temiz gıda üretiyoruz.</p>
          </ScrollReveal>
        </div>
      </section>


      {/* --- FOOTER --- */}
      <footer className="bg-gray-900 text-white py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="text-2xl font-extrabold tracking-tighter text-white mb-4">
              MAVRUZ TARIM.
            </div>
            <p className="text-gray-400 text-sm">
              Geleceğin tarımını bugünden inşa ediyoruz.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Şirket</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="#" className="hover:text-white transition-colors">Hakkımızda</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Kariyer</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Basın</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Ürünler</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="#" className="hover:text-white transition-colors">Yeşillikler</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Domatesler</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Mağaza Bul</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">İletişim</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="#" className="hover:text-white transition-colors">Bize Ulaşın</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Sıkça Sorulanlar</Link></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          © 2025 Mavruz Tarım. Tüm hakları saklıdır.
        </div>
      </footer>

    </main>
  );
}