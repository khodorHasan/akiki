import Link from "next/link";

const CATEGORIES = [
  {
    title: "Kayali",
    image: "/assets/Categories/Kayali.jpg",
    href: "/category/kayali",
  },
  {
    title: "French Breeze",
    image: "/assets/Categories/French Breeze.jpg",
    href: "/category/french-breeze",
  },
  {
    title: "Burberry",
    image: "/assets/Categories/Burberry Her.jpg",
    href: "/category/burberry",
  },
  {
    title: "Gucci",
    image: "/assets/Categories/Gucci.jpg",
    href: "/category/gucci",
  },
  {
    title: "Tom Ford",
    image: "/assets/Categories/Tom Ford.jpg",
    href: "/category/tom-ford",
  },
  {
    title: "Lattafa & Arabic",
    image: "/assets/Categories/Lattafa.jpg",
    href: "/category/lattafa-and-arabic-niche",
  },
];

export default function CategoryGrid() {
  return (
    <section className="w-full py-8 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-2xl md:text-3xl bold text-zinc-900 tracking-tight">
            Shop by Brand
          </h2>
          <div className="w-12 h-0.5 bg-[#C8A97E] mx-auto mt-4" />{" "}
          {/* خط زينة باللون الأساسي */}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-6 gap-3 md:gap-4">
          {CATEGORIES.map((category, index) => (
            <Link
              key={index}
              href={category.href}
              className="group relative block w-full overflow-hidden rounded-base bg-zinc-100 aspect-[3/4] border border-transparent hover:border-[#C8A97E]/30 transition-colors duration-300"
            >
              <img
                src={category.image}
                alt={category.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />

              {/* تدرج لوني أغمق قليلاً لتوضيح النص المتوسط */}
              <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:bg-black/50" />

              {/* العنوان: تم توسيطه بالكامل وتكبير حجمه */}
              <div className="absolute inset-0 flex items-end justify-center p-4 text-center">
                <h3 className="text-white medium text-sm sm:text-base md:text-lg tracking-wide drop-shadow-md group-hover:text-[#C8A97E] transition-colors duration-300">
                  {category.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
