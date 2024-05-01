"use client";
import Link from "next/link";
import React from "react";
import Particles from "./components/particles";

const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      
      
      <nav className="my-16 animate-fade-in">
        
        <ul className="flex items-center justify-center gap-8">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-lg font-semibold duration-500 text-white hover:text-opacity-80 hover:scale-110 relative"
              style={{ textShadow: '3px 3px 8px rgba(0,0,0,0.6)' }}
              onMouseEnter={e => {
                const padding = 10; // Padding of 10 pixels around the element
                const rect = e.currentTarget.getBoundingClientRect();
                const lightbox = document.getElementById('lightbox');
                if (lightbox) {
                  lightbox.style.width = `${rect.width + padding * 2}px`; // Add padding to both sides
                  lightbox.style.height = `${rect.height + padding * 2}px`; // Add padding to top and bottom
                  lightbox.style.top = `${rect.top + window.scrollY - padding}px`; // Adjust top position to accommodate padding
                  lightbox.style.left = `${rect.left + window.scrollX - padding}px`; // Adjust left position to accommodate padding
                  lightbox.style.opacity = '1';
                }
              }}
              
              onMouseLeave={() => {
                const lightbox = document.getElementById('lightbox');
                if (lightbox) {
                  lightbox.style.opacity = '0';
                }
              }}
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      // You might need to adjust the Particles component to accept color
      />
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      
      <h1 className="z-10 text-4xl text-transparent duration-1000 bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-400 cursor-default animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap">
        Shriram Pawar
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 text-center animate-fade-in">
        <h2 className="text-xl text-white " style={{ textShadow: '2px 2px 10px rgba(0,0,0,0.5)' }}>
          I build AI solutions for Go-To-Market (GTM) teams
        </h2>
      </div>
      <div id="lightbox" style={{
        position: 'absolute',
        background: 'rgba(255, 255, 255, 0.2)',
        borderRadius: '10px',
        transition: 'all 0.3s ease',
        opacity: '0',
        pointerEvents: 'none' // Prevent lightbox from capturing mouse events
      }} />
    </div>
  );
}
