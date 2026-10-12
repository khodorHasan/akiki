"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, Heart, ShoppingBag, X, User } from "lucide-react";

interface SearchResult {
  id: string;
  title: string;
  price: number;
  discount_price: number | null;
  images: string[] | null;
}

interface NavbarProps {
  promoText?: string | null;
  isMini?: boolean;
}

const BRANDS = [
  "Kayali",
  "French Breeze",
  "Burberry",
  "Gucci",
  "Tom Ford",
  "Lattafa & Arabic Niche",
];

export default function Navbar({
  promoText = "",
  isMini = false,
}: NavbarProps) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [searchLoading, setSearchLoading] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Promo Bar (اختياري، يختفي عند النزول لدمج الـ Navbar) */}
      {!isScrolled && promoText && (
        <div className="w-full bg-[#C8A97E]/90 text-white text-center py-2 px-4 text-xs medium tracking-wide fixed top-0 z-50">
          {promoText}
        </div>
      )}

      {/* Main Header */}
      <header
        className={`z-40 w-full transition-all duration-300 fixed flex flex-col ${
          promoText && !isScrolled ? "top-8" : "top-0"
        } ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-zinc-200"
            : "bg-transparent border-b border-white/10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex items-center justify-between h-14 md:h-20 gap-4">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group shrink-0">
              <img
                src="/Logo.png"
                alt="Akiki Perfumes Logo"
                className={`h-10 md:h-12 w-auto object-contain transition-all duration-300 group-hover:scale-105 ${
                  !isScrolled ? "brightness-0 invert drop-shadow-md" : ""
                }`}
              />
            </Link>

            {/* Desktop Navigation */}
            {!isMini && (
              <nav className="hidden md:flex items-center justify-center gap-6 flex-1">
                {BRANDS.map((brand, idx) => (
                  <Link
                    key={idx}
                    href={`/category/${brand.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "and")}`}
                    className={`text-[13px] medium transition-colors ${
                      isScrolled
                        ? "text-zinc-600 hover:text-[#C8A97E]"
                        : "text-white/80 hover:text-white drop-shadow-sm"
                    }`}
                  >
                    {brand}
                  </Link>
                ))}
              </nav>
            )}

            {/* Actions */}
            <div className="flex items-center justify-end gap-5 shrink-0">
              <button
                onClick={() => setSearchOpen(true)}
                className={`hidden md:flex transition-colors ${
                  isScrolled
                    ? "text-zinc-500 hover:text-[#C8A97E]"
                    : "text-white/90 hover:text-white"
                }`}
              >
                <Search size={22} strokeWidth={1.5} />
              </button>

              <Link
                href="/favorites"
                className={`relative transition-colors ${
                  isScrolled
                    ? "text-zinc-500 hover:text-[#C8A97E]"
                    : "text-white/90 hover:text-white"
                }`}
              >
                <Heart size={22} strokeWidth={1.5} />
              </Link>

              <Link
                href="/cart"
                className={`relative transition-colors ${
                  isScrolled
                    ? "text-zinc-500 hover:text-[#C8A97E]"
                    : "text-white/90 hover:text-white"
                }`}
              >
                <ShoppingBag size={22} strokeWidth={1.5} />
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
