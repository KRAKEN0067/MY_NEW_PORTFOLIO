import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMobileMenu = () => {
    const menu = document.getElementById("mobileMenu");
    setIsOpen(!isOpen);
    if (!isOpen) {
      menu.classList.remove("max-h-0");
      menu.classList.add("max-h-96", "py-4", "flex");
    } else {
      menu.classList.remove("max-h-96", "py-4", "flex");
      menu.classList.add("max-h-0");
    }
  };

  const navlinks = [
    { name: "Home", href: "#Home" },
    { name: "About", href: "#About" },
    { name: "Skills", href: "#Skills" },
    { name: "Projects", href: "#Projects" },
    { name: "Contact", href: "#Contact" },
  ];

  return (
    <header className="fixed w-full z-50 flex flex-col items-center backdrop-blur-sm p-4 text-white">
      <nav className="hidden md:block">
        <ul className="flex space-x-10 md:space-x-15 lg:space-x-20">
          {navlinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-xl relative inline-block group"
              >
                <span className="hover:text-green-600 transition-colors duration-300 pb-2">
                  {link.name}
                </span>
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <button
        className="md:hidden self-end"
        onClick={toggleMobileMenu}
        aria-label="Toggle Menu"
      >
        <div className="w-6 h-6 relative">
          <span className={`absolute w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${
            isOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'
          }`}></span>
          <span className={`absolute w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${
            isOpen ? 'opacity-0' : 'opacity-100'
          }`}></span>
          <span className={`absolute w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${
            isOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'
          }`}></span>
        </div>
      </button>

      <div
        id="mobileMenu"
        className="md:hidden flex-col items-center space-y-4 text-lg transition-all duration-300 overflow-hidden max-h-0"
      >
        {navlinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="hover:text-green-500 transition-colors duration-300"
            onClick={() => toggleMobileMenu()}
          >
            {link.name}
          </a>
        ))}
      </div>
    </header>
  );
};

export default Header;
