import { useState } from "react";
import { Hamburger, Close } from "../assets/icons/icons";
import { fadeY } from "../utils/animatedVariants";
import Logo from "../assets/images/logo.svg";
import AnimatedComponent from "./AnimatedComponent";

export default function Header() {
  const links = ["Home", "Shop", "About", "Contact"];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <AnimatedComponent tag="header" variants={fadeY} className="absolute top-0 z-10 w-full">
      <nav className="flex justify-start gap-28 px-6 py-12 sm:gap-32 md:gap-56 md:pl-32 lg:items-center lg:gap-14 lg:px-[4.1rem] lg:py-[3.65rem]">
        <button className="relative z-10 w-5 lg:hidden" aria-label="Menu Button" onClick={toggleMenu}>
          {isMenuOpen ? <img src={Close} alt="" /> : <img src={Hamburger} alt="" />}
        </button>
        <a href="#" aria-label="Room">
          <img src={Logo} alt="Room" className="md:w-16 md:pt-0.5 lg:w-28" />
        </a>
        {isMenuOpen && <div className="fixed inset-0 -z-10 bg-black bg-opacity-50" onClick={toggleMenu}></div>}
        <ul
          className={`absolute left-0 flex w-full justify-end gap-8 bg-white px-[1.3rem] pb-10 pt-[2.85rem] transition-all duration-700 md:justify-center lg:relative lg:justify-start lg:bg-transparent lg:p-0
           ${isMenuOpen ? "top-0" : "-top-32 lg:top-0"}`}>
          {links.map((link, index) => (
            <li key={index} className="line relative font-semibold lowercase lg:text-white">
              <a href="#">{link}</a>
            </li>
          ))}
        </ul>
      </nav>
    </AnimatedComponent>
  );
}
