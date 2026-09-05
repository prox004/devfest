"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaXmark, FaArrowRight } from "react-icons/fa6";

const NAV_LINKS = [
  { name: "Overview", href: "/#overview" },
  { name: "Speakers", href: "/#speakers" },
  { name: "Highlights", href: "/#highlights" },
  { name: "Team", href: "/#team" },
  { name: "FAQ", href: "/#faq" },
];

const MARQUEE_ITEMS = [
  "Eastern India’s Biggest Tech Conference",
  "DevFest Kolkata ‘26",
  "GDG Kolkata",
  "Eastern India’s Biggest Tech Conference",
  "DevFest Kolkata ‘26",
  "GDG Kolkata",
  "Eastern India’s Biggest Tech Conference",
  "DevFest Kolkata ‘26",
  "GDG Kolkata",
];

export default function DevFestHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className="relative w-full h-[100svh] min-h-[580px] max-h-[1100px] overflow-hidden bg-white text-zinc-900 flex flex-col justify-between"
      id="overview"
    >
      {/* ── 1. STICKY / FLOATING RESPONSIVE NAVBAR ───────────────────────── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-white/75 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.05),inset_0_1px_0_rgba(255,255,255,0.8)] border-b border-zinc-200/60 py-2.5 sm:py-3"
          : "bg-transparent border-b border-transparent shadow-none py-4 sm:py-5"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand / Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            {/* GDG Brackets Logo Mark */}
            <div className="flex items-center gap-1 font-bold text-lg select-none">
              <span className="text-[#4285F4] text-xl font-mono">&lt;</span>
              <span className="flex items-center gap-0.5">
                <span className="size-2 rounded-full bg-[#EA4335]" />
                <span className="size-2 rounded-full bg-[#FBBC05]" />
                <span className="size-2 rounded-full bg-[#34A853]" />
              </span>
              <span className="text-[#4285F4] text-xl font-mono">&gt;</span>
            </div>

            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-bold tracking-tight text-zinc-900 leading-tight">
                DevFest <span className="text-[#cf7011]">Kolkata</span>
              </span>
              <span className="text-[10px] text-zinc-500 font-medium tracking-wider uppercase">
                GDG Kolkata ‘26
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 rounded-full text-sm font-medium text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100/80 transition-all duration-150"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action Button & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#register"
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-[#922521] px-5 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#7a1e1b] hover:shadow-md hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Get Tickets</span>
              <FaArrowRight className="text-xs transition-transform group-hover:translate-x-0.5" />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-zinc-700 hover:text-zinc-950 hover:bg-zinc-100 transition-colors"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <FaXmark className="size-5" /> : <FaBars className="size-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="md:hidden bg-white/95 backdrop-blur-lg border-b border-zinc-200 px-6 py-5 shadow-lg"
            >
              <div className="flex flex-col gap-3">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-3 py-2 rounded-lg text-base font-medium text-zinc-700 hover:bg-zinc-50 hover:text-[#cf7011] transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
                <div className="pt-3 border-t border-zinc-100">
                  <a
                    href="#register"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-[#922521] px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#7a1e1b] transition-colors"
                  >
                    <span>Get Tickets</span>
                    <FaArrowRight className="text-xs" />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* ── 2. MAIN HERO SECTION (FROM FIGMA DESKTOP - 1) ───────────────── */}
      <div className="relative w-full h-full flex flex-col justify-between pt-16 sm:pt-20 pb-0">
        {/* Heritage Sketch Background */}
        <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
          <div className="relative w-full h-full opacity-65 sm:opacity-75">
            <Image
              src="/kolkata-sketch-bg.png"
              alt="Kolkata Heritage Sketch"
              fill
              priority
              className="object-cover object-center"
              sizes="100vw"
            />
          </div>
          {/* Subtle gradient vignette to blend into page & soften text contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/40 to-white/90" />
        </div>

        {/* Hero Content Center */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 flex flex-col items-center justify-center text-center my-auto py-2 sm:py-6">
          {/* Badge: GDG Kolkata Presents */}

          {/* Main Title: DevFest কলকাতা */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.96, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="mt-3 sm:mt-5 flex flex-wrap items-center justify-center gap-x-3 sm:gap-x-6 md:gap-x-7 text-3xl sm:text-6xl md:text-7xl lg:text-[88px] xl:text-[104px] font-black tracking-tight leading-none select-none"
          >
            <span className="text-[#ea4335] drop-shadow-xs">DevFest</span>
            <span className="font-bengali text-zinc-950 font-bold drop-shadow-xs">
              কলকাতা
            </span>
          </motion.h1>

          {/* Subtitle: Kolkata's biggest tech festival */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
            className="mt-2 sm:mt-3 text-base sm:text-xl md:text-2xl font-medium text-[#922521] tracking-tight"
          >
            GDG Kolkata presents Kolkata&apos;s biggest tech festival.
          </motion.p>

          {/* Two Hero CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45, ease: "easeOut" }}
            className="mt-4 sm:mt-5 flex flex-wrap items-center justify-center gap-3 sm:gap-4 pointer-events-auto z-20"
          >
            {/* Primary CTA: Register Now */}
            <a
              href="#register"
              className="group inline-flex items-center gap-2.5 rounded-full bg-zinc-700 px-6 sm:px-7 py-2.5 sm:py-3 text-sm sm:text-base font-semibold text-white transition-all duration-200 hover:bg-[#7a1e1b] hover:shadow-[0_6px_22px_rgba(146,37,33,0.45)] hover:scale-[1.03] active:scale-[0.98]"
            >
              <span>Register Now</span>
              <FaArrowRight className="text-xs transition-transform duration-200 group-hover:translate-x-1" />
            </a>

            {/* Secondary CTA: Explore Speakers */}
            <a
              href="#speakers"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-300/90 bg-white/80 backdrop-blur-md px-6 sm:px-7 py-2.5 sm:py-3 text-sm sm:text-base font-semibold text-zinc-800 shadow-xs transition-all duration-200 hover:bg-white hover:border-zinc-400 hover:shadow-md hover:scale-[1.03] active:scale-[0.98]"
            >
              <span>Explore Speakers</span>
            </a>
          </motion.div>
        </div>

        {/* ── 3. HERITAGE TRAM, OVERHEAD WIRE & MARQUEE BOX (IN HERO ONLY) ── */}
        <div className="relative z-10 w-full overflow-x-clip shrink-0">
          {/* The Overhead Electric Tram Wire */}
          <div className="w-full border-t border-zinc-400/80 relative" />

          {/* Tram Bay: Positioned directly between the overhead wire and marquee box */}
          <div className="relative w-full h-[95px] sm:h-[120px] md:h-[145px] lg:h-[160px]">
            {/* Kolkata Heritage Tram: travels left-to-right, exits, waits off-screen, then re-enters naturally */}
            <div className="animate-tram absolute bottom-0 left-0 h-full w-auto pointer-events-auto z-10 cursor-pointer">
              {/* Subtle vintage suspension sway / rhythmic vibration on tracks */}
              <div className="animate-tram-sway h-full flex items-end">
                <Image
                  src="/kolkata-tram.png"
                  alt="Heritage Kolkata Tram"
                  width={417}
                  height={161}
                  className="h-full w-auto object-contain object-bottom drop-shadow-sm select-none"
                  priority
                />
              </div>
            </div>
          </div>

          {/* ── 4. TICKER / MARQUEE BANNER STRIP (WHEELS ALIGNED ON TOP EDGE) ── */}
          <div className="relative w-full bg-[#2e2e2e] text-[#e9e9e9] py-2.5 sm:py-3.5 overflow-hidden border-t-2 border-zinc-600/90 shadow-inner select-none">
            <div className="animate-marquee flex items-center whitespace-nowrap">
              {MARQUEE_ITEMS.concat(MARQUEE_ITEMS).map((item, index) => (
                <div key={index} className="flex items-center gap-4 sm:gap-6 px-3 sm:px-5">
                  <span className="text-xs sm:text-sm md:text-base font-semibold tracking-wide text-zinc-200">
                    {item}
                  </span>
                  {/* Diamond Rotated Bullet from Figma */}
                  <div className="size-2 sm:size-2.5 bg-[#d9d9d9] rotate-45 shrink-0 opacity-80" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
