import { useState } from "react";
import { Arrow } from "../assets/icons/icons";
import { fade, imageVariants } from "../utils/animatedVariants";
import { AnimatePresence } from "framer-motion";
import Slider from "./Slider";
import heroData from "../data/heroData";
import AnimatedComponent from "./AnimatedComponent";

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const { title, content, desktopImg, mobileImg } = heroData[currentIndex];

  return (
    <div className="lg:grid lg:grid-cols-12 lg:items-center">
      <div className="relative lg:col-span-7">
        <div className="aspect-ratio-sm lg:aspect-ratio relative overflow-hidden bg-black bg-opacity-60">
          <AnimatePresence>
            <picture>
              <source srcSet={desktopImg} media="(min-width: 1024px)" />
              <AnimatedComponent
                key={currentIndex}
                tag="img"
                variants={imageVariants}
                src={mobileImg}
                alt=""
                className="absolute inset-0 w-full"
              />
            </picture>
          </AnimatePresence>
        </div>
        <div className="absolute bottom-0 right-0 lg:-right-[11.15rem] xl:-right-40">
          <Slider data={heroData} setCurrentIndex={setCurrentIndex} />
        </div>
      </div>

      <div className=" px-8 py-[3.7rem] md:pt-9 lg:col-span-5 lg:pb-[5.1rem] lg:text-left xl:px-9 xl:pt-[3.9rem] 2lg:px-5">
        <AnimatedComponent tag="div" key={currentIndex} variants={fade}>
          <h1 className="text-[2.3rem] font-bold leading-[2.4rem] tracking-[-0.02em] xl:px-16 xl:text-[2.9rem] xl:leading-none xl:tracking-[-0.04em]">
            {title}
          </h1>
          <p className="py-3 leading-[1.4rem] lg:pb-4 lg:pt-5">{content}</p>
        </AnimatedComponent>

        <div>
          <a
            href="#"
            className="flex items-center gap-5 pb-2.5 pt-6 font-semibold uppercase tracking-[0.8em] transition-all duration-500 hover:tracking-normal md:justify-center lg:justify-start lg:pt-0.5 xl:px-16">
            Shop now <img src={Arrow} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}
