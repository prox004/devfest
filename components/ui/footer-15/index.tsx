"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FaXTwitter,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaGithub,
  FaFacebook,
  FaArrowRight,
  FaCheck,
  FaEnvelope,
} from "react-icons/fa6";

const SOCIAL_LINKS = [
  {
    name: "Twitter / X",
    href: "https://x.com/gdgkolkata",
    icon: FaXTwitter,
    hoverColor: "hover:text-zinc-100 hover:bg-zinc-800",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/gdgkolkata/",
    icon: FaLinkedin,
    hoverColor: "hover:text-[#4285F4] hover:bg-[#4285F4]/10",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/gdgkolkata/",
    icon: FaInstagram,
    hoverColor: "hover:text-[#EA4335] hover:bg-[#EA4335]/10",
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@GDGKolkata",
    icon: FaYoutube,
    hoverColor: "hover:text-[#EA4335] hover:bg-[#EA4335]/10",
  },
  {
    name: "GitHub",
    href: "https://github.com/gdgkolkata",
    icon: FaGithub,
    hoverColor: "hover:text-zinc-100 hover:bg-zinc-800",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/gdgkolkata/",
    icon: FaFacebook,
    hoverColor: "hover:text-[#4285F4] hover:bg-[#4285F4]/10",
  },
];

const FOOTER_NAV = [
  {
    title: "Event",
    links: [
      { label: "Overview", href: "/#overview" },
      { label: "Mystery Speakers", href: "/#speakers" },
      { label: "Our Team", href: "/team" },
      { label: "FAQ", href: "/#faq" },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "GDG Kolkata", href: "https://gdg.community.dev/gdg-kolkata/" },
      { label: "Women Techmakers", href: "https://devfestkolkata.in" },
      { label: "Google Developers", href: "https://developers.google.com" },
      { label: "Become Volunteer", href: "https://devfestkolkata.in" },
    ],
  },
  {
    title: "Guidelines",
    links: [
      { label: "Code of Conduct", href: "https://devfestkolkata.in" },
      { label: "Community Terms", href: "https://devfestkolkata.in" },
      { label: "Privacy Policy", href: "https://devfestkolkata.in" },
    ],
  },
];

export function Footer15() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  const brandChars = "DevFest Kolkata ‘26".split("");

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 pb-4 pt-12">
      <footer className="w-full overflow-hidden rounded-3xl sm:rounded-4xl bg-[#1e1e1e] text-zinc-100 font-sans shadow-2xl border border-zinc-800">
        {/* Main Content Area */}
        <div className="max-w-7xl mx-auto px-6 pt-12 pb-8 sm:px-10 sm:pt-16 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
            {/* 1. Brand & Socials Column (4 cols) */}
            <div className="lg:col-span-4 flex flex-col gap-5">
              {/* Logo */}
              <div className="flex items-center gap-3">
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
                  <span className="text-lg font-bold tracking-tight text-white leading-tight">
                    DevFest <span className="text-[#EA4335]">Kolkata</span>
                  </span>
                  <span className="text-[10px] text-zinc-400 font-medium tracking-wider uppercase">
                    GDG Kolkata ‘26
                  </span>
                </div>
              </div>

              <p className="text-sm leading-relaxed text-zinc-400 font-normal">
                Eastern India’s flagship annual developer conference powered by
                Google Developer Group Kolkata and Women Techmakers. Uniting builders,
                creators, and leaders.
              </p>

              {/* All GDG Kolkata Social Links */}
              <div className="pt-2">
                <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-3">
                  Connect with GDG Kolkata
                </p>
                <div className="flex flex-wrap items-center gap-2">
                  {SOCIAL_LINKS.map((item) => {
                    const Icon = item.icon;
                    return (
                      <a
                        key={item.name}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`size-9 rounded-xl border border-zinc-700/80 bg-zinc-800/80 text-zinc-300 flex items-center justify-center transition-all duration-200 hover:scale-105 shadow-xs ${item.hoverColor}`}
                        title={item.name}
                        aria-label={item.name}
                      >
                        <Icon className="size-4" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* 2. Navigation Columns (4 cols) */}
            <div className="lg:col-span-4 grid grid-cols-2 sm:grid-cols-3 gap-6">
              {FOOTER_NAV.map((section) => (
                <div key={section.title} className="flex flex-col gap-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-200">
                    {section.title}
                  </h4>
                  <ul className="flex flex-col gap-2.5">
                    {section.links.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          className="text-sm text-zinc-400 hover:text-white transition-colors duration-150"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* 3. Mailing List / Newsletter Form (4 cols) */}
            <div id="register" className="lg:col-span-4 flex flex-col gap-4 bg-zinc-900/90 rounded-2xl p-6 border border-zinc-800 shadow-inner scroll-mt-28">
              <div className="flex items-center gap-2">
                <div className="size-8 rounded-lg bg-[#EA4335]/15 text-[#EA4335] flex items-center justify-center">
                  <FaEnvelope className="size-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white tracking-tight">
                    DevFest Dispatch
                  </h4>
                  <p className="text-xs text-zinc-400">
                    Never miss a drop or announcement
                  </p>
                </div>
              </div>

              <p className="text-xs text-zinc-400 leading-relaxed">
                Subscribe to get mystery speaker reveals, ticket announcements,
                and workshop registration links sent straight to your inbox.
              </p>

              {subscribed ? (
                <div className="flex items-center gap-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 p-3 text-emerald-400 text-xs font-medium animate-in fade-in duration-300">
                  <FaCheck className="size-4 shrink-0 text-emerald-400" />
                  <span>You&apos;re subscribed! Stay tuned for speaker & ticket drops.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col gap-2.5">
                  <div className="relative">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address..."
                      className="w-full rounded-xl bg-zinc-950 border border-zinc-700/80 px-4 py-2.5 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-[#4285F4] focus:ring-1 focus:ring-[#4285F4] transition-all"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#EA4335] hover:bg-[#d93025] px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all duration-200 hover:shadow-lg active:scale-[0.98]"
                  >
                    <span>Join Mailing List</span>
                    <FaArrowRight className="size-3" />
                  </button>
                  <span className="text-[10px] text-zinc-500 text-center">
                    No spam. Unsubscribe anytime.
                  </span>
                </form>
              )}
            </div>
          </div>

          {/* Bottom Huge Display Brand Strip */}
          <div className="mt-14 pt-8 border-t border-zinc-800/80 flex flex-col items-center justify-center select-none overflow-hidden">
            <div
              className="flex flex-nowrap items-end justify-center whitespace-nowrap text-zinc-500/40 hover:text-zinc-400/80 transition-colors duration-300 tracking-tight font-black text-[7.5vw] md:text-[6.5vw] lg:text-[5.5vw] leading-none select-none max-w-full"
              aria-label="DevFest Kolkata ‘26"
            >
              {brandChars.map((char, index) => (
                <span
                  key={`${char}-${index}`}
                  className="inline-block transition-transform duration-200 hover:-translate-y-2 hover:text-zinc-200"
                  style={{
                    width: char === " " ? "0.3em" : undefined,
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </div>

            {/* Bottom Credits & Copyright */}
            <div className="w-full mt-6 pt-4 border-t border-zinc-800/50 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-400">
              <p>
                © 2026 Google Developer Group Kolkata. All rights reserved.
              </p>
              <div className="flex items-center gap-4">
                <Link href="/#overview" className="hover:text-zinc-200 transition-colors">
                  Back to Top ↑
                </Link>
                <span>•</span>
                <span className="text-zinc-400">Made with ❤️ for Developers</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer15;
