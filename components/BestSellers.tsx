"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Heart, ShoppingBag } from "lucide-react";

const BEST_SELLERS = [
  {
    id: "p001",
    title: "Kayali Vanilla | 28 (Studio Alternative)",
    brand: "Akiki Private Collection",
    price_usd: 15.0,
    size: "100ml",
    image_url: "/product.png",
    tags: ["Best Seller", "Vanilla", "Warm Spice"],
  },
  {
    id: "p002",
    title: "French Breeze - Gold Edition",
    brand: "French Breeze",
    price_usd: 10.0,
    size: "100ml",
    image_url: "/product.png",
    tags: ["Signature", "Fresh", "Unisex"],
  },
  {
    id: "p003",
    title: "Burberry Her (Studio Alternative)",
    brand: "Akiki Private Collection",
    price_usd: 12.0,
    size: "100ml",
    image_url: "/product.png",
    tags: ["Most Requested", "Fruity", "Floral"],
  },
  {
    id: "p004",
    title: "Tom Ford Tobacco Vanille (Alternative)",
    brand: "Akiki Private Collection",
    price_usd: 15.0,
    size: "100ml",
    image_url: "/product.png",
    tags: ["Niche", "Winter", "Spicy"],
  },
  {
    id: "p005",
    title: "Lattafa Khamrah",
    brand: "Lattafa",
    price_usd: 15.0,
    size: "100ml",
    image_url: "/product.png",
    tags: ["Gourmand", "Sweet"],
  },
];

export default function BestSellers() {
  const carouselRef = useRef<HTMLDivElement>(null);

  // كود التشغيل التلقائي (Auto-play) للكاروسيل
  useEffect(() => {
    // يعمل فقط إذا كانت الشاشة صغيرة (أصغر من 1024px أي ليست لابتوب)
    const isMobile = window.innerWidth < 1024;

    if (!isMobile) return;

    const interval = setInterval(() => {
      if (carouselRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;

        // إذا وصل لآخر الكاروسيل، يرجع للأول، وإلا بيكمل سحب للمنتج اللي بعده
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          carouselRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          carouselRef.current.scrollBy({
            left: clientWidth / 2,
            behavior: "smooth",
          });
        }
      }
    }, 3000); // 3000 = 3 ثواني (تقدر تغيرها)

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* عنوان القسم */}
        <div className="mb-10 text-center">
          <h2 className="text-2xl md:text-3xl bold text-zinc-900 tracking-tight uppercase">
            Best Sellers
          </h2>
          <div className="w-12 h-0.5 bg-[#C8A97E] mx-auto mt-4" />
        </div>

        {/* 
            الكاروسيل:
            تم ربطه بـ ref={carouselRef} ليعمل الـ Auto-play
        */}
        <div
          ref={carouselRef}
          className="flex lg:grid lg:grid-cols-5 gap-4 md:gap-6 overflow-x-auto lg:overflow-visible snap-x snap-mandatory pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] scroll-smooth"
        >
          {BEST_SELLERS.map((product) => (
            <div
              key={product.id}
              /* 
                 التعديل الأهم هنا: 
                 w-[calc(50%-8px)] flex-none = بيجبر الكرت ياخد 50% من الشاشة ناقص 8px (اللي هي نص الفراغ gap-4)
                 lg:w-auto = عشان يرجع كرت عادي على اللابتوب
              */
              className="group flex flex-col bg-white relative w-[calc(50%-8px)] flex-none lg:w-auto snap-start"
            >
              <div className="relative aspect-[4/5] bg-zinc-100 overflow-hidden mb-4">
                <Link href={`/product/${product.id}`}>
                  <img
                    src={product.image_url}
                    alt={product.title}
                    className="object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </Link>

                {product.tags && product.tags.length > 0 && (
                  <div className="absolute top-2 left-2 bg-zinc-950 text-white text-[9px] md:text-[10px] uppercase tracking-wider px-2 py-1 medium shadow-sm">
                    {product.tags[0]}
                  </div>
                )}

                <button
                  className="absolute top-2 right-2 p-1.5 md:p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-sm text-zinc-400 hover:text-[#C8A97E] transition-colors duration-300"
                  aria-label="Add to wishlist"
                >
                  <Heart size={16} strokeWidth={2} />
                </button>
              </div>

              <div className="flex flex-col flex-1 px-1">
                <span className="text-[10px] md:text-xs text-zinc-500 uppercase tracking-widest medium mb-1.5">
                  {product.brand}
                </span>

                <Link href={`/product/${product.id}`}>
                  <h3 className="text-sm md:text-base text-zinc-900 medium leading-tight line-clamp-2 hover:text-[#C8A97E] transition-colors">
                    {product.title}
                  </h3>
                </Link>

                <div className="mt-2 mb-4">
                  <span className="text-base md:text-lg bold text-zinc-900">
                    ${product.price_usd.toFixed(2)}
                  </span>
                </div>

                <button className="mt-auto w-full bg-zinc-950 text-white py-2.5 md:py-3 text-xs md:text-sm tracking-[0.1em] uppercase medium hover:bg-[#C8A97E] transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-md">
                  <ShoppingBag size={16} strokeWidth={1.5} />
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/shop"
            className="px-10 py-3 bg-transparent text-zinc-900 text-xs md:text-sm tracking-[0.15em] uppercase border border-zinc-300 hover:border-[#C8A97E] hover:text-[#C8A97E] transition-all duration-300 medium"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}
