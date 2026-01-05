import React from "react";
import image from'../../src/assets/IMG_9274.PNG'
import image2 from'../../src/assets/IMG_9281.PNG'
import image3 from'../../src/assets/IMG_9283.PNG'
const About = () => {
  return (
   <> <div className="w-full px-5 md:px-20 py-10">
      {/* Section 1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-5">ABOUT HUSSAIN STUDIO</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            Welcome to HUSSAIN STUDIO – a clothing brand built on simplicity, style, and
            everyday comfort.
          </p>
          <p className="text-gray-700 leading-relaxed mb-3">
            We’re all about timeless pieces that feel good, look great, and
            never go out of trend. Think classic fits, clean cuts, and versatile
            styles you can wear anytime, anywhere.
          </p>
          <p className="text-gray-700 leading-relaxed mb-3">
            At HUSSAIN STUDIO, we believe in doing more with less — creating minimal
            menswear that speaks for itself.
          </p>
          <p className="text-gray-700 leading-relaxed mb-3">
            No loud logos, just quiet confidence. This is your go-to for
            effortless style, made to last.
          </p>

            <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-5">WHY WE STARTED</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            I’ve always loved wearing minimal, classic outfits — styles that are
            clean, timeless, and effortless. Over time, I realized that so many
            of us naturally gravitate towards neutral fashion because it just
            works.
          </p>
          <p className="text-gray-700 leading-relaxed mb-3">
            It’s simple, it’s stylish, and honestly, it never goes out of trend.
          </p>
          <p className="text-gray-700 leading-relaxed mb-3">
            Starting a clothing brand had been on my mind for a long time, and
            this felt like the perfect moment to finally make it happen.
          </p>
          <p className="text-gray-700 leading-relaxed">
            HUSSAIN is my way of sharing my personal style with all of you —
            creating everyday pieces that help every guy look sharp, feel
            confident, and stay timeless.
          </p>
        </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src={image}
            alt="About KSUNCH"
            className="rounded-2xl shadow-lg w-full max-w-md"
          />
        </div>
      </div>

      {/* Section 2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-20">
        {/* Left Image */}
        <div className="flex justify-center order-1 md:order-none">
          <img
            src={image2}
            alt="KSUNCH Style"
            className="rounded-2xl shadow-lg w-full max-w-md"
          />
        </div>

        {/* Right Content */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-5">
Brand Essence
</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            HUSSAIN STUDIO is the embodiment of timeless simplicity.
Rooted in minimalism, designed for everyday confidence, and driven by the belief that style should be effortless.
We create classic menswear pieces that go beyond trends – for the modern man who values quality, comfort, and quiet sophistication.
          </p>
           <h2 className="text-2xl md:text-3xl font-bold mb-5">
Design Approach
</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
           At HUSSAIN STUDIO, less is always more.
Our design philosophy is rooted in minimalism, versatility, and timeless appeal. Every piece is thoughtfully crafted to offer clean lines, neutral tones, and classic fits — styles that never go out of fashion and can be worn year after year.
          </p>
          <p className="text-gray-700 leading-relaxed mb-3">
         We don’t follow trends. We create everyday staples that feel fresh, refined, and effortlessly stylish.
          </p>
          <p className="text-gray-700 leading-relaxed">
          From the cut of the collar to the choice of fabric, every detail is carefully considered to bring comfort, elegance, and confidence into your everyday wardrobe.
          </p>
          
        </div>
        
      </div>
      
    </div>
<div className="w-full px-5 md:px-20 py-10">
      {/* Section 1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-5">Message from the owner</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
           A Message from the Founder
Hi, I’m FUZAIL – the face behind HUSSAIN STUDIO.
This brand started with a simple idea: to create timeless, minimal menswear that I genuinely love to wear and that I know many of you do too. I’ve always believed in clean, classic styles that don’t scream for attention but quietly speak confidence.
          </p>
          <p className="text-gray-700 leading-relaxed mb-3">
         HUSSAIN STUDIO is more than just clothing — it’s a reflection of my personal style and a dream l’ve had for a long time. My goal is to make every guy feel effortlessly stylish, comfortable, and confident in what he wears.
          </p>
          <p className="text-gray-700 leading-relaxed mb-3">
         Thank you for being part of this journey. Can’t wait for you to wear HUSSAIN STUDIO and make it your own.
          </p>
          <h1 className="text-gray-700 leading-relaxed mb-3">
           – FUZAIL HUSSAIN <br />
Founder, HUSSAIN STUDIO
          </h1>

            
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src={image3}
            alt="About KSUNCH"
            className="rounded-2xl shadow-lg w-full max-w-md"
          />
        </div>
      </div>
      </div>
</>

  );
};

export default About;
