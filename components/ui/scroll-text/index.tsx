"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Exactly 4 key highlights matching the 4 GDG colors
const GDG_KEYWORDS: Record<string, { color: string; bg: string }> = {
  developers: { color: "#ffffff", bg: "#4285F4" }, // Google Blue
  community: { color: "#ffffff", bg: "#EA4335" },  // Google Red
  future: { color: "#ffffff", bg: "#34A853" },     // Google Green
  innovation: { color: "#202124", bg: "#FBBC05" }, // Google Yellow
};

export default function ScrollTextSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!containerRef.current || !textContainerRef.current) return;

      const words = Array.from(
        textContainerRef.current.querySelectorAll<HTMLDivElement>(".scroll-word")
      );
      const totalWords = words.length;

      // Soft neutral highlight background for unhighlighted words
      const wordHighlightBgColor = "235, 235, 235";

      ScrollTrigger.create({
        trigger: containerRef.current,
        pin: true,
        pinSpacing: true,
        start: "top top",
        end: `+=${window.innerHeight * 2.5}`,
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;

          words.forEach((word, index) => {
            const wordText = word.querySelector<HTMLSpanElement>("span");
            if (!wordText) return;

            if (progress <= 0.7) {
              const progressTarget = 0.7;
              const revealProgress = Math.min(1, progress / progressTarget);

              const overlapWords = 14;
              const totalAnimationLength = 1 + overlapWords / totalWords;

              const wordStart = index / totalWords;
              const wordEnd = wordStart + overlapWords / totalWords;

              const timelineScale =
                1 /
                Math.min(
                  totalAnimationLength,
                  1 + (totalWords - 1) / totalWords + overlapWords / totalWords
                );

              const adjustedStart = wordStart * timelineScale;
              const adjustedEnd = wordEnd * timelineScale;
              const duration = adjustedEnd - adjustedStart;

              const wordProgress =
                revealProgress <= adjustedStart
                  ? 0
                  : revealProgress >= adjustedEnd
                    ? 1
                    : (revealProgress - adjustedStart) / duration;

              word.style.opacity = `${wordProgress}`;

              const backgroundFadeStart =
                wordProgress >= 0.88 ? (wordProgress - 0.88) / 0.12 : 0;
              const backgroundOpacity = Math.max(0, 1 - backgroundFadeStart);
              word.style.backgroundColor = `rgba(${wordHighlightBgColor}, ${backgroundOpacity})`;

              const textRevealThreshold = 0.88;
              const textRevealProgress =
                wordProgress >= textRevealThreshold
                  ? (wordProgress - textRevealThreshold) / (1 - textRevealThreshold)
                  : 0;
              wordText.style.opacity = `${Math.pow(textRevealProgress, 0.5)}`;
            } else {
              const reverseProgress = (progress - 0.7) / 0.3;
              word.style.opacity = "1";
              const targetTextOpacity = 1;

              const reverseOverlapWords = 5;
              const reverseWordStart = index / totalWords;
              const reverseWordEnd =
                reverseWordStart + reverseOverlapWords / totalWords;

              const reverseTimelineScale =
                1 /
                Math.max(
                  1,
                  (totalWords - 1) / totalWords + reverseOverlapWords / totalWords
                );

              const reverseAdjustedStart = reverseWordStart * reverseTimelineScale;
              const reverseAdjustedEnd = reverseWordEnd * reverseTimelineScale;
              const reverseDuration = reverseAdjustedEnd - reverseAdjustedStart;

              const reverseWordProgress =
                reverseProgress <= reverseAdjustedStart
                  ? 0
                  : reverseProgress >= reverseAdjustedEnd
                    ? 1
                    : (reverseProgress - reverseAdjustedStart) / reverseDuration;

              if (reverseWordProgress > 0) {
                wordText.style.opacity = `${targetTextOpacity * (1 - reverseWordProgress)}`;
                word.style.backgroundColor = `rgba(${wordHighlightBgColor}, ${reverseWordProgress})`;
              } else {
                wordText.style.opacity = `${targetTextOpacity}`;
                word.style.backgroundColor = `rgba(${wordHighlightBgColor}, 0)`;
              }
            }
          });
        },
      });
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, []);

  const paragraphs = [
    "DevFest Kolkata is a space for developers and designers who build with intent. It is where bold ideas turn into living technology, powered by community and creative vision.",
    "We believe the future of technology starts with passion and shared knowledge. Google Developer Groups Kolkata connects you with the innovation that shapes tomorrow.",
  ];

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[100svh] bg-white text-zinc-900 flex items-center justify-center px-6 sm:px-12 md:px-16 overflow-hidden select-none"
    >
      <div className="w-full max-w-4xl mx-auto flex flex-col items-center justify-center text-center">
        {/* Animated text container */}
        <div ref={textContainerRef} className="anime-text w-full max-w-4xl">
          {paragraphs.map((para, pIndex) => (
            <p
              key={pIndex}
              className="text-lg sm:text-2xl md:text-3xl lg:text-[2.5rem] font-medium leading-[1.1] text-zinc-900 mb-5 last:mb-0 text-center text-pretty"
              style={{
                fontFamily:
                  'var(--font-google-sans-display, "Google Sans Display", "Google Sans", "Product Sans", sans-serif)',
              }}
            >
              {para.split(/\s+/).map((word, wIndex) => {
                const cleanWord = word.toLowerCase().replace(/[.,!?;:"]/g, "");
                const highlight = GDG_KEYWORDS[cleanWord];

                return (
                  <span
                    key={wIndex}
                    className={`scroll-word inline-block relative mx-[0.18em] my-[0.05em] px-1 py-0.5 rounded-md transition-colors will-change-[background-color,opacity] opacity-0 ${highlight ? "keyword-wrapper mx-[0.25em]" : ""
                      }`}
                  >
                    <span
                      className={`inline-block relative opacity-0 ${highlight
                        ? "px-3 py-0.5 rounded-full font-semibold"
                        : ""
                        }`}
                      style={
                        highlight
                          ? {
                            backgroundColor: highlight.bg,
                            color: highlight.color,
                          }
                          : undefined
                      }
                    >
                      {word}
                    </span>
                  </span>
                );
              })}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
