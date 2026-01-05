import React from 'react';
import Link from 'next/link';

// Tekrar eden Buton Bileşeni (Kolay düzenleme için)
const PrimaryButton = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <button className={`px-6 py-3 font-semibold rounded-full transition-colors ${className} bg-emerald-600 text-white hover:bg-emerald-700`}>
    {children}
  </button>
);

const SecondaryButton = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <button className={`px-6 py-3 font-semibold rounded-full border-2 transition-colors ${className} border-emerald-600 text-emerald-600 hover:bg-emerald-50`}>
    {children}
  </button>
);

// Görsel Yer Tutucu Bileşeni
const ImagePlaceholder = ({ text }: { text: string }) => (
  <div className="w-full h-full min-h-[300px] md:min-h-[500px] bg-gray-200 rounded-2xl flex items-center justify-center text-gray-500 font-bold text-xl border-2 border-dashed border-gray-300 p-4 text-center">
    [Görsel Alanı: {text}]
  </div>
);

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">
      
      {/* --- NAVBAR --- */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100 p-4 md:px-8 flex justify-between items-center">
        <div className="text-2xl font-extrabold tracking-tighter text-emerald-800">
          PLENTY CLONE.
        </div>
        {/* Desktop Menu Links */}
        <div className="hidden md:flex space-x-8 font-medium text-gray-600">
          <Link href="#" className="hover:text-emerald-600">Nasıl Çalışır</Link>
          <Link href="#" className="hover:text-emerald-600">Ürünler</Link>
          <Link href="#" className="hover:text-emerald-600">Etki</Link>
          <Link href="#" className="hover:text-emerald-600">Hakkımızda</Link>
        </div>
        <PrimaryButton className="hidden md:block py-2 text-sm">
          İletişime Geç
        </PrimaryButton>
        {/* Mobile Menu Icon Placeholder */}
        <div className="md:hidden text-gray-600">[Menu]</div>
      </nav>

      {/* --- HERO SECTION (Ana Manşet) --- */}
      <section className="pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto flex flex-col items-center text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight leading-tight">
          Taze gıdanın <br className="hidden md:block"/>
          <span className="text-emerald-600">geleceğini</span> yetiştiriyoruz.
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mb-10 leading-relaxed">
          Daha az kaynak kullanarak, yılın 365 günü, yerel ve inanılmaz lezzetli ürünler üreten dikey çiftlikler inşa ediyoruz.
        </p>
        <div className="flex flex-col md:flex-row gap-4">
          <PrimaryButton>Çiftliklerimizi Keşfet</PrimaryButton>
          <SecondaryButton>Ürünleri Gör</SecondaryButton>
        </div>
      </section>

      {/* --- FULL WIDTH IMAGE BANNER PLACEHOLDER --- */}
      <section className="w-full h-[60vh] bg-gray-100 flex items-center justify-center text-3xl font-bold text-gray-400 border-y border-gray-200">
        [Devasa Kahraman Görseli Alanı - Hero Banner]
      </section>


      {/* --- CONTENT SECTION 1 (Metin Sol, Görsel Sağ) --- */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <h2 className="text-4xl font-bold leading-tight">
            Gezegen için daha iyi bir yol.
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Geleneksel tarıma göre %95 daha az su ve %99 daha az arazi kullanıyoruz. Pestisit yok, GDO yok, sadece saf ve temiz gıda var. Kapalı alan dikey çiftliklerimiz hava koşullarından bağımsızdır.
          </p>
          <div className="pt-4">
            <Link href="#" className="text-emerald-600 font-bold hover:underline text-lg">
              Sürdürülebilirlik Raporunu Oku &rarr;
            </Link>
          </div>
        </div>
        <div className="aspect-square md:aspect-auto h-full">
          <ImagePlaceholder text="Dikey Çiftlik İç Görünümü" />
        </div>
      </section>

      {/* --- CONTENT SECTION 2 (Görsel Sol, Metin Sağ) --- */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center bg-gray-50 rounded-3xl">
         {/* Mobileda görsel üstte olsun diye order-last md:order-first kullanıyoruz */}
        <div className="aspect-square md:aspect-auto h-full order-last md:order-first">
          <ImagePlaceholder text="Taze Ürün Paketi ve Lezzet" />
        </div>
        <div className="space-y-6 order-first md:order-last">
          <h2 className="text-4xl font-bold leading-tight">
            Daha önce tatmadığınız tazelik.
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Tarladan sofraya haftalar süren yolculukları unutun. Bizim ürünlerimiz hasat edildikten saatler sonra market raflarında yerini alır. Çıtır, lezzetli ve besin değeri yüksek.
          </p>
           <div className="pt-4">
             <PrimaryButton>Mağazaları Bul</PrimaryButton>
          </div>
        </div>
      </section>


       {/* --- GRID FEATURES SECTION --- */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-16">Neden Biz?</h2>
        <div className="grid md:grid-cols-3 gap-12">
          {/* Feature 1 */}
          <div className="flex flex-col items-center space-y-4">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 font-bold text-2xl">
              %95
            </div>
            <h3 className="text-xl font-bold">Daha Az Su</h3>
            <p className="text-gray-600">Geleneksel tarıma kıyasla su tüketimini minimize ediyoruz.</p>
          </div>
           {/* Feature 2 */}
          <div className="flex flex-col items-center space-y-4">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 font-bold text-2xl">
              365
            </div>
            <h3 className="text-xl font-bold">Gün Üretim</h3>
            <p className="text-gray-600">Mevsimlerden bağımsız, yılın her günü taze hasat.</p>
          </div>
           {/* Feature 3 */}
          <div className="flex flex-col items-center space-y-4">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 font-bold text-2xl">
              0
            </div>
            <h3 className="text-xl font-bold">Pestisit</h3>
            <p className="text-gray-600">Hiçbir kimyasal ilaç kullanmadan temiz gıda üretiyoruz.</p>
          </div>
        </div>
      </section>


      {/* --- FOOTER --- */}
      <footer className="bg-gray-900 text-white py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
             <div className="text-2xl font-extrabold tracking-tighter text-white mb-4">
              PLENTY CLONE.
            </div>
            <p className="text-gray-400 text-sm">
              Geleceğin tarımını bugünden inşa ediyoruz.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Şirket</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="#" className="hover:text-white">Hakkımızda</Link></li>
              <li><Link href="#" className="hover:text-white">Kariyer</Link></li>
              <li><Link href="#" className="hover:text-white">Basın</Link></li>
            </ul>
          </div>
           <div>
            <h4 className="font-bold mb-4">Ürünler</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="#" className="hover:text-white">Yeşillikler</Link></li>
              <li><Link href="#" className="hover:text-white">Domatesler</Link></li>
              <li><Link href="#" className="hover:text-white">Mağaza Bul</Link></li>
            </ul>
          </div>
           <div>
            <h4 className="font-bold mb-4">İletişim</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="#" className="hover:text-white">Bize Ulaşın</Link></li>
              <li><Link href="#" className="hover:text-white">Sıkça Sorulanlar</Link></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          © 2025 Plenty Clone. Tüm hakları saklıdır. Bu bir test çalışmasıdır.
        </div>
      </footer>

    </main>
  );
}