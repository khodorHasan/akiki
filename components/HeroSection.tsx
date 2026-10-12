import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      {/* الصورة الخلفية */}
      <img
        src="/Hero.jpg"
        alt="Akiki Perfumes Collection"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />

      {/* التراكب المظلم */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80 z-10" />

      {/* المحتوى */}
      <div className="relative z-20 max-w-4xl mx-auto px-4 text-center text-white flex flex-col items-center justify-center h-full pt-16">
        <h1 className="text-2xl sm:text-3xl md:text-5xl bold tracking-tight leading-[1.1] mb-8 max-w-3xl drop-shadow-lg">
          AKIKI - THE ESSENCE OF LUXURY
        </h1>

        {/* الأزرار */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-center">
          <Link
            href="/about"
            className="w-full sm:w-auto px-10 py-3.5 bg-white text-zinc-950 text-xs md:text-sm tracking-[0.15em] uppercase hover:bg-[#C8A97E] hover:text-white hover:border-[#C8A97E] border border-white transition-all duration-300 bold shadow-lg"
          >
            SHOP BY BRAND
          </Link>
          <Link
            href="/location"
            className="w-full sm:w-auto px-10 py-3.5 bg-transparent text-white text-xs md:text-sm tracking-[0.15em] uppercase border border-white/60 hover:border-[#C8A97E] hover:text-[#C8A97E] transition-all duration-300 medium"
          >
            OUR LOCATION
          </Link>
        </div>
      </div>
    </section>
  );
}
