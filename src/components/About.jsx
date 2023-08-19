import React from "react";
import Dark from "../assets/images/image-about-dark.jpg";
import Light from "../assets/images/image-about-light.jpg";

export default function About() {
  return (
    <div className="lg:flex lg:items-start">
      <img src={Dark} alt="" className="about-img lg:w-[30.5%] " />
      <div className="px-8 pb-10 pt-12 lg:w-1/2 lg:pb-0 lg:pt-12 lg:text-left xl:pt-[3.9rem] 2lg:px-0 2lg:pt-8">
        <h2 className="text-[0.88rem] font-bold uppercase tracking-[0.42em] lg:pl-4 lg:text-base">
          About our furniture
        </h2>
        <p className="pt-4 lg:px-4 lg:pt-2.5">
          Our multifunctional collection blends design and function to suit your individual taste. Make each
          room unique, or pick a cohesive theme that best express your interests and what inspires you. Find
          the furniture pieces you need, from traditional to contemporary styles or anything in between.
          Product specialists are available to help you create your dream space.
        </p>
      </div>
      <img src={Light} alt="" className="about-img lg:w-[32%]" />
    </div>
  );
}
