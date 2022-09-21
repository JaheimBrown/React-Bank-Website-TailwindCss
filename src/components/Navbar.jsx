import { useState } from "react";

import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      {/* LOGO */}
      <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />

      {/* NAV-LINKS */}
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((item, index) => (
          <li
            key={item.id}
            className={`font-poppins text-white text-[16px] cursor-pointer font-normal ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            }`}
          >
            <a href={`#${item.id}`}>{item.title}</a>
          </li>
        ))}
      </ul>

      {/* Mobile-Menu-Icon */}
      <div className="sm:hidden flex justify-center items-center">
            <img src={toggle ? close : menu} alt="menu" className="w-[28px] h-[28px] object-contain cursor-pointer"  onClick={()=>setToggle((prev) => !prev)}/>
      </div>

      {/* Mobile-menu */}
      <div className={`${toggle ? 'flex' : 'hidden'} py-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar` }>
      <ul className="list-none justify-end items-center flex flex-col flex-1">
        {navLinks.map((item, index) => (
          <li
            key={item.id}
            className={`font-poppins text-white text-[16px] cursor-pointer font-normal ${
              index === navLinks.length - 1 ? "mb-0" : "mb-4"
            }`}
          >
            <a href={`#${item.id}`}>{item.title}</a>
          </li>
        ))}
      </ul>
      </div>
    </nav>
  );
};

export default Navbar;
