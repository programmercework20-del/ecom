import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Banner from "../component/banner/Banner";
import Cursul from "./banner/Cursul";

// Images
import cat1 from "../assets/IMG_9274.PNG";
import cat2 from "../assets/IMG_9281.PNG";
// import promo from "/image/mini-banner.jpg";

const Home = () => {
  const [blur, setBlur] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const value = Math.min(window.scrollY / 80, 8);
          setBlur(value);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const promo = '/images/mini-banner.png';

  return (
    <>
      {/* HERO */}
      <div
        className="relative w-full overflow-hidden"
        style={{ filter: `blur(${blur}px)` }}
      >
        <Banner />
      </div>

      {/* NEW ARRIVALS */}
      <section className="relative z-10 -mt-24 bg-gradient-to-b from-gray-100 to-white rounded-t-3xl shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif italic text-center mb-12 text-gray-800">
            New Arrivals
          </h1>
          <Cursul />
        </div>
      </section>

      {/* SHOP BY CATEGORY */}
      <section className="py-14 bg-gray-50">
        <h2 className="text-3xl sm:text-4xl font-serif text-center mb-10">
          Shop By Category
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 sm:px-6 max-w-7xl mx-auto">
          <CategoryCard
            image={cat1}
            title="Linen Blend"
            link="/collection?category=Linen%20Blend"
          />
          <CategoryCard
            image={cat2}
            title="Striped"
            link="/collection?category=Striped"
          />
        </div>
      </section>

      {/* TOP PICKS */}
      {/* <section className="py-14 bg-white">
        <h2 className="text-3xl sm:text-4xl font-serif text-center mb-10">
          Top Picks
        </h2>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Cursul />
        </div>
      </section> */}

      {/* PROMOTIONAL BANNER */}
<section className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
  <div
    className="
      relative 
      w-full 
      max-w-7xl 
      mx-auto
      aspect-[16/7] 
      sm:aspect-[16/6] 
      md:aspect-[21/9]
      rounded-2xl 
      overflow-hidden 
      shadow-2xl
      bg-cover 
      bg-center
    "
    style={{
      backgroundImage:
        `url(${promo})`,
    }}
  >
    {/* Overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/40 to-transparent" />

    {/* Content */}
    <div className="absolute inset-y-0 left-6 sm:left-12 flex flex-col justify-center text-white max-w-md">
      <h3 className="text-xl sm:text-3xl md:text-4xl tracking-widest font-light italic">
        LINEN FITS
      </h3>

      <p className="text-lg sm:text-2xl md:text-3xl tracking-widest font-light italic mt-2">
        NEW STYLES ADDED
      </p>

      <Link to="/collection" className="mt-6">
        <button className="px-7 py-3 rounded-full bg-amber-700 hover:bg-amber-800 transition text-sm tracking-widest font-semibold shadow-lg">
          SHOP NOW
        </button>
      </Link>
    </div>
  </div>
</section>

    </>
  );
};

/* Category Card Component */
const CategoryCard = ({ image, title, link }) => (
  <Link
    to={link}
    className="group relative overflow-hidden rounded-xl shadow-md"
  >
    <img
      src={image}
      alt={title}
      className="w-full h-[240px] sm:h-[300px] object-cover group-hover:scale-105 transition-transform duration-500"
    />
    <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
      <span className="text-white text-xl font-semibold tracking-wide">
        {title}
      </span>
    </div>
  </Link>
);

export default Home;
