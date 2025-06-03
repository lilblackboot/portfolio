'use client';
import React from 'react';
import { Montserrat } from 'next/font/google';
import Link from 'next/link';
import { useState } from 'react';
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
});


export default function Home() {
 const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Blogs', href: '/blogs' },
    { name: 'Contact', href: '#contact' },
  ];
 const [menuOpen, setMenuOpen] = useState(false);

  return (
   <>
   {/* Hamburger Dropdown Menu */}
      <div className="fixed top-8 right-8 z-50">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="relative z-50 p-3 rounded-full bg-black/80 hover:bg-gray-800 transition-colors group"
          aria-label="Toggle menu"
        >
          <div className="flex flex-col gap-1.5">
            <span className={`block w-6 h-0.5 bg-yellow-400 transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-yellow-400 transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-yellow-400 transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>
        {/* Dropdown Menu */}
        <div className={`absolute right-0 mt-4 w-48 py-2 bg-black/90 backdrop-blur-sm border border-yellow-400/20 rounded-xl shadow-xl transition-all duration-300 ${
          menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
        } ${montserrat.className}`}>
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="block px-4 py-2 text-gray-200 hover:text-yellow-400 hover:bg-gray-800/50 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>
        {/* Overlay to close menu when clicking outside */}
        {menuOpen && (
          <div
            className="fixed inset-0 z-40"
            onClick={() => setMenuOpen(false)}
          />
        )}
      </div>
   </>
  );
}
