interface Quote {
  body: string;
  initials: string;
  name: string;
  role: string;
  accent: string;
}

const QUOTES: readonly Quote[] = [
  {
    body: "DevFest Kolkata is where ideas turn into momentum. One day, one stage, and you walk out with a whole new roadmap for your craft.",
    initials: "SD",
    name: "Saumik Das",
    role: "Attendee · Android '25",
    accent: "#4285F4",
  },
  {
    body: "The codelabs were hands-on from minute one. I went from theory to a deployed app before lunch.",
    initials: "PN",
    name: "Priya Nair",
    role: "Flutter dev · GDG Kochi",
    accent: "#EA4335",
  },
  {
    body: "Real engineers from Google sharing failures, not just wins. That honesty is rare and worth the trip alone.",
    initials: "AR",
    name: "Arjun Reddy",
    role: "Cloud engineer · Hyderabad",
    accent: "#FBBC05",
  },
  {
    body: "I came for the talks and stayed for the community. Kolkata's dev scene is genuinely special.",
    initials: "MM",
    name: "Meghna Mukherjee",
    role: "UX designer · Kolkata",
    accent: "#34A853",
  },
  {
    body: "Walked into the mentorship booth with a broken architecture and left with a blueprint. Incredibly practical.",
    initials: "RK",
    name: "Rahul Khanna",
    role: "Startup founder · Kolkata",
    accent: "#4285F4",
  },
  {
    body: "The networking alone is worth it. I found my next team in the hallway between sessions.",
    initials: "AB",
    name: "Ananya Basu",
    role: "Backend dev · GDG Kolkata",
    accent: "#EA4335",
  },
];

export default function TestimonialSection() {
  return (
    <section className="relative w-full bg-[#FEF7E0] py-20 sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
        <div className="flex max-w-2xl flex-col gap-5">
          <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-zinc-400">
            <span className="size-1.5 rounded-full bg-[#4285F4]" />
            <span className="size-1.5 rounded-full bg-[#EA4335]" />
            <span className="size-1.5 rounded-full bg-[#FBBC05]" />
            <span className="size-1.5 rounded-full bg-[#34A853]" />
          </span>
          <h2 className="font-medium text-4xl leading-[1.04] tracking-tight text-zinc-900 sm:text-5xl">
            What people are <span className="italic">actually</span> saying.
          </h2>
          <p className="text-base text-zinc-500 sm:text-lg">
            Notes from developers and designers who lived the DevFest experience.
          </p>
        </div>

        <div className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
          {QUOTES.map((q) => (
            <figure
              key={q.name}
              className="break-inside-avoid rounded-2xl border border-zinc-100 bg-white p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
            >
              <blockquote>
                <p className="text-sm leading-relaxed text-zinc-700">{q.body}</p>
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <div
                  className="inline-flex size-9 items-center justify-center rounded-full font-mono text-xs font-medium text-white"
                  style={{ backgroundColor: q.accent }}
                >
                  {q.initials}
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold tracking-[-0.01em] text-zinc-900">
                    {q.name}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-zinc-400">
                    {q.role}
                  </span>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}