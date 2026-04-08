"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import NavItem from "./NavItem";
import { menuData } from "@/lib/data";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 50);

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"} ${isScrolled ? "bg-white border-b border-gray-200 text-gray-900" : "bg-transparent text-white"}`}>
      {/* Main Navbar */}
      <div className="flex justify-between items-center px-4 md:px-8 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <Link href="/main" className="flex items-center gap-3 group shrink-0">
          <div className="w-10 h-10 bg-red-600 rounded flex items-center justify-center font-bold text-lg text-white group-hover:bg-red-500 transition-colors">S</div>
          <div className="flex flex-col">
            <span className="font-bold text-lg leading-tight tracking-wide">SMA Negri 1</span>
            <span className="font-bold text-lg leading-tight tracking-wide">Bangunrejo</span>
          </div>
        </Link>

        {/* Desktop Menu & Login Button */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-1 items-center text-sm font-semibold">
            {menuData.map((item, i) => (
              <NavItem key={i} menu={item} />
            ))}
          </div>

          {/* Login Button Desktop */}
          <Link href="#login" className={`px-6 py-2 border-2 rounded-full text-sm font-bold transition-all duration-300 hover:text-blue-900 hover:border-blue-900 ${isScrolled ? "border-black text-black" : "border-white text-white"}`}>
            Login
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-2xl p-2 focus:outline-none" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white text-gray-800 absolute top-full w-full border-t border-gray-200 shadow-xl max-h-[85vh] overflow-y-auto flex flex-col">
          <div className="grow">
            {menuData.map((item, i) => (
              <div key={i} className="border-b border-gray-100">
                <Link href={item.href} className="block px-6 py-4 font-bold text-gray-800 hover:text-red-500">
                  {item.title}
                </Link>
                {item.subItems && (
                  <div className="bg-gray-50 px-6 pb-4 flex flex-col gap-2">
                    {item.subItems.map((sub, idx) => (
                      <Link key={idx} href={sub.href} className="text-sm text-gray-600 py-2 pl-4 border-l-2 border-red-500 hover:text-red-500">
                        {sub.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Login Button Mobile */}
          <div className="p-6 border-t border-gray-200 bg-gray-50">
            <Link href="#login" className="block w-full text-center border-2 border-red-600 text-red-600 py-2 rounded-md font-bold hover:bg-red-600 hover:text-white transition-colors">
              Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
