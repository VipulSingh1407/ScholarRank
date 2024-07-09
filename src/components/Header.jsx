import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { FaChevronDown } from "react-icons/fa";
import scholarrank from "../assets/collaboration/scholarrank.png";
import { navigation } from "../constants";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";

const Header = () => {
  const { pathname } = useLocation(); // Use pathname instead of hash
  const [openNavigation, setOpenNavigation] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  let timeoutId = null;

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleDropdownEnter = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutId = null;
    }
    setDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    timeoutId = setTimeout(() => {
      setDropdownOpen(false);
    }, 300); // Increase the delay to 300ms
  };

  const handleClick = () => {
    if (!openNavigation) return;
    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <div className={`fixed top-0 left-0 w-full z-50 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"}`}>
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a className="block w-[12rem] xl:mr-8" href="/">
          <img src={scholarrank} width={190} height={40} alt="ScholarRank" />
        </a>

        <nav className={`${openNavigation ? "flex" : "hidden"} fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}>
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <div key={item.id} className="relative group" onMouseEnter={item.id === "0" ? handleDropdownEnter : null} onMouseLeave={item.id === "0" ? handleDropdownLeave : null}>
                {item.subItems && item.id === "0" ? (
                  <div>
                    <a href={item.url} onClick={handleClick} className={`block relative font-code text-4xl uppercase text-n-1 transition-colors hover:text-caribbeangreen-100 px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-base lg:font-semibold ${pathname === item.url ? "z-2 lg:text-caribbeangreen-100" : "lg:text-n-1/50"} lg:leading-5 lg:hover:text-blue xl:px-12 flex items-center`}>
                      {item.title}
                      <FaChevronDown className={`ml-2 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
                    </a>
                    {dropdownOpen && (
                      <div className="absolute left-0 w-64 bg-n-8 shadow-md mt-2 group-hover:block">
                        {item.subItems.map((subItem) => (
                          <div key={subItem.id} className="px-4 py-2 border-b border-n-6">
                            <a href={subItem.url} className={`block text-n-1 hover:text-caribbeangreen-100 ${pathname === subItem.url ? "text-caribbeangreen-100" : ""}`} onClick={handleClick}>
                              <div className="font-semibold">{subItem.title}</div>
                              <div className="text-sm text-n-4">{subItem.description}</div>
                            </a>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a href={item.url} onClick={handleClick} className={`block relative font-code text-4xl uppercase text-n-1 transition-colors hover:text-caribbeangreen-100 ${item.onlyMobile ? "lg:hidden" : ""} px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-base lg:font-semibold ${pathname === item.url ? "z-2 lg:text-caribbeangreen-100" : "lg:text-n-1/50"} lg:leading-5 lg:hover:text-blue xl:px-12`}>
                    {item.title}
                  </a>
                )}
              </div>
            ))}
          </div>

          <HamburgerMenu />
        </nav>

        <a href="/signup" className="button hidden mr-8 text-sm text-n-1/50 transition-colors hover:text-n-1 lg:block">
          Sign Up
        </a>
        <Button className="hidden lg:flex text-sm" href="./signin">
          Log in
        </Button>

        <Button className="ml-auto lg:hidden" px="px-3" onClick={toggleNavigation}>
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
