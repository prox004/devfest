"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { Marquee } from "@/demos/ui/marquee";

const teamMembers = [
  {
    image:
      "https://cdn.21st.dev/assets/mirror/f4/f43137dada970ee6a29a0497d1f699d54b92e5381350eaa66dc827e3ffb11645.jpg",
    name: "Patrick Stewart",
    role: "CEO - Founder",
  },
  {
    image:
      "https://cdn.21st.dev/assets/mirror/d5/d549c11c16ad2335895c39339d1a4307b648b24a6baae68662246cf9bd37ac13.jpg",
    name: "Alena Rosser",
    role: "Director of Content",
  },
  {
    image:
      "https://cdn.21st.dev/assets/mirror/e0/e058437411e954b747056a494f26349751828f12c2137a883e5aebbd1fcf5eef.jpg",
    name: "Fletch Skinner",
    role: "Tech Manager",
  },
  {
    image:
      "https://cdn.21st.dev/assets/mirror/45/45ba21cbafae178989cd3652799f42123a80e0ac44065ac00cbb265ea948bc41.jpg",
    name: "Marc Spector",
    role: "Director of Content",
  },
  {
    image:
      "https://cdn.21st.dev/assets/mirror/90/904d97602d25b1b5ef0f4058abad6d8185d8cebd0750771404a934a44dd537fb.jpg",
    name: "Natalia Skinner",
    role: "Cnippet Researcher",
  },
  {
    image:
      "https://cdn.21st.dev/assets/mirror/3b/3b6a929c98b85177bcc2eb4606a71b7487011128756dbf0adda24e803ca70ed7.jpg",
    name: "David Kim",
    role: "Engineering Lead",
  },
];

export default function TeamSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const dragState = useRef({
    isDragging: false,
    pointerId: 0,
    startX: 0,
    lastX: 0,
    dx: 0,
    lastMoveAt: 0,
  });

  const setPaused = (paused: boolean) => {
    const track = trackRef.current;
    if (!track) return;
    track.classList.toggle("marquee-paused", paused);
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    if (e.pointerType === "mouse" && e.button !== 0) return;
    const track = trackRef.current;
    if (!track) return;
    // Stop native image drag so the gesture reaches our horizontal sweep
    if ((e.target as HTMLElement).closest("img")) {
      e.preventDefault();
    }
    track.setPointerCapture(e.pointerId);
    dragState.current = {
      isDragging: true,
      pointerId: e.pointerId,
      startX: e.clientX,
      lastX: e.clientX,
      dx: 0,
      lastMoveAt: 0,
    };
    setPaused(true);
    track.classList.add("marquee-dragging");
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    const state = dragState.current;
    if (!state.isDragging || e.pointerId !== state.pointerId) return;
    const dx = e.clientX - state.startX;
    state.dx = dx;
    state.lastMoveAt = performance.now();
    // Move the track to follow the pointer
    if (trackRef.current) {
      trackRef.current.style.setProperty(
        "--marquee-drag",
        `${dx}px`
      );
    }
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    const state = dragState.current;
    if (!state.isDragging || e.pointerId !== state.pointerId) return;
    state.isDragging = false;
    const track = trackRef.current;
    if (track) {
      if (track.hasPointerCapture(e.pointerId)) track.releasePointerCapture(e.pointerId);
      track.classList.remove("marquee-dragging");
      track.style.removeProperty("--marquee-drag");
      setPaused(false);
    }
  };

  const handlePointerCancel = (e: React.PointerEvent) => handlePointerUp(e);

  const handleDragStart = (e: React.DragEvent) => {
    e.preventDefault();
  };

  return (
    <section id="team" className="relative w-full overflow-hidden bg-[#E6F4EA] py-12 md:py-24 dark:bg-background">

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mx-auto mb-16 flex max-w-5xl flex-col items-center px-6 text-center lg:px-0">

          <h1 className="relative mb-4 font-medium text-4xl text-zinc-700 tracking-tight sm:text-5xl">
            Powerhouse Of GDG Kolkata
          </h1>
          <p className="max-w-2xl text-neutral-600 dark:text-neutral-400">
            Meet the incredible minds behind DevFest Kolkata - the dream team
            dedicated to making this year&apos;s event unforgettable.
          </p>
        </div>

        <div className="relative w-full">
          <div className="pointer-events-none absolute top-0 left-0 z-10 h-full w-32 bg-gradient-to-r from-[#E6F4EA] to-transparent dark:from-background" />
          <div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-32 bg-gradient-to-l from-[#E6F4EA] to-transparent dark:from-background" />

          <div
            ref={trackRef}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerCancel}
            onDragStart={handleDragStart}
            className="marquee-track cursor-grab active:cursor-grabbing touch-pan-y select-none"
          >
          <Marquee className="[--gap:1.5rem]" pauseOnHover>
            {teamMembers.map((member) => (
              <div
                className="group flex w-64 shrink-0 flex-col"
                key={member.name}
              >
                <div className="relative h-92 w-full overflow-hidden rounded-2xl bg-neutral-100 dark:bg-neutral-800">
                  <Image
                    alt={member.name}
                    className="h-full w-full object-cover select-none grayscale transition-all duration-300 hover:grayscale-0"
                    draggable={false}
                    fill
                    sizes="(max-width: 768px) 100vw, 256px"
                    src={member.image}
                  />
                  <div className="absolute bottom-0 w-full rounded-lg bg-neutral-100/85 p-3 backdrop-blur-xs dark:bg-neutral-800/80">
                    <h3 className="font-semibold text-neutral-900 dark:text-neutral-100">
                      {member.name}
                    </h3>
                    <p className="text-neutral-600 text-sm dark:text-neutral-400">
                      {member.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Marquee>
          </div>
        </div>

      </div>
    </section>
  );
}
