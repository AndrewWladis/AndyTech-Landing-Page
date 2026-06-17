"use client";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

const products = [
  {
    name: "Pillowbook",
    category: "Dream decoder",
    description: "A dream journal and decoder for capturing what happened overnight and turning it into something worth exploring.",
    hook: "Wake up with something to inspect.",
    icon: "/pillowbook.png",
    link: "https://apps.apple.com/us/app/pillowbook-dream-decoder/id6775021552",
    color: "#ff8f3a",
  },
  {
    name: "Swiftie Swipe",
    category: "Daily fan game",
    description: "A Taylor Swift challenge app built around fast choices, streak pressure, and fan knowledge that goes deeper than the obvious hits.",
    hook: "Streaks, speed, fandom receipts.",
    icon: "/swiftie.png",
    link: "https://apps.apple.com/us/app/swiftie-swipe/id6479224086",
    color: "#ff3a7e",
  },
  {
    name: "Dunk Rank",
    category: "Sports utility",
    description: "A 1v1 basketball tracker for friend groups that want rankings without arguing over who remembers the score correctly.",
    hook: "Every matchup leaves a paper trail.",
    icon: "/dunkrank.png",
    link: "https://apps.apple.com/us/app/dunk-rank/id6448699695",
    color: "#d7ff4f",
  },
  {
    name: "BondsAI",
    category: "Relationship insight",
    description: "An AI companion for understanding relationships, reading emotional patterns, and finding better ways to connect.",
    hook: "Make the invisible parts easier to talk about.",
    icon: "/bondsai.png",
    link: "https://apps.apple.com/us/app/bonds-ai/id6767971558",
    color: "#00e6ff",
  },
  {
    name: "Token",
    category: "Money learning",
    description: "A personal finance learning app that makes money concepts feel visual, approachable, and easier to remember.",
    hook: "Finance, minus the locked door.",
    icon: "/token.png",
    link: "https://apps.apple.com/us/app/token-learn-money/id6777829905",
    color: "#ffe600",
  },
];

const beats = [
  "Narrow loops",
  "Fast feedback",
  "Social proof",
  "Daily reasons to reopen",
  "Clean App Store paths",
  "No sleepy templates",
];

export default function MobileProducts() {
  return (
    <div className="site-shell">
      <Navbar />

      <main>
        <section className="relative overflow-hidden px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
          <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div className="reveal-in">
              <h1 className="brand-shadow text-6xl font-black leading-none text-white md:text-8xl">
                The app shelf has teeth.
              </h1>
              <p className="mt-7 max-w-2xl text-lg font-semibold leading-8 text-white/72">
                These are small products with loud loops: quick to understand, fun to reopen, and specific enough to avoid feeling like every other app pitch.
              </p>
            </div>

            <div className="reveal-in stagger-2 grid grid-cols-5 items-end gap-3">
              {products.map((product, index) => (
                <a
                  key={product.name}
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neo-card scan-panel group relative min-h-[180px] overflow-hidden p-3 transition-transform duration-300 hover:-translate-y-3 sm:min-h-[310px]"
                  style={{ boxShadow: `7px 7px 0 ${product.color}` }}
                >
                  <div className="absolute inset-x-0 bottom-0 h-1/2 opacity-70" style={{ background: product.color }} />
                  <Image
                    src={product.icon}
                    alt={`${product.name} app icon`}
                    width={128}
                    height={128}
                    className="relative z-10 mx-auto h-16 w-16 rounded-lg object-cover shadow-[6px_6px_0_rgba(0,0,0,0.45)] transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110 sm:h-24 sm:w-24"
                    style={{ marginTop: index % 2 === 0 ? "1rem" : "3rem" }}
                    priority={index < 3}
                  />
                  <span className="absolute bottom-3 left-3 right-3 z-10 hidden text-xs font-black uppercase leading-4 text-black sm:block">
                    {product.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <div className="ticker">
          <div className="ticker-track">
            {[...beats, ...beats, ...beats].map((beat, index) => (
              <span key={`${beat}-${index}`}>{beat}</span>
            ))}
          </div>
        </div>

        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="mb-3 text-sm font-black uppercase text-[#00e6ff]">Live on the App Store</p>
                <h2 className="max-w-3xl text-5xl font-black leading-none text-white md:text-7xl">
                  Five products, five different reasons to tap again.
                </h2>
              </div>
              <Link href="/freelancing" className="slab-button slab-button-dark w-full px-6 py-3 sm:w-auto">
                Need one built?
                <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              {products.map((product, index) => (
                <a
                  key={product.name}
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`neo-card tilt-card reveal-in stagger-${(index % 4) + 1} grid gap-6 overflow-hidden p-5 sm:grid-cols-[8rem_1fr] sm:p-6`}
                >
                  <div
                    className="flex min-h-32 items-center justify-center border border-white/20"
                    style={{ background: product.color }}
                  >
                    <Image
                      src={product.icon}
                      alt={`${product.name} app icon`}
                      width={112}
                      height={112}
                      className="h-24 w-24 rounded-lg object-cover shadow-[7px_7px_0_rgba(0,0,0,0.5)]"
                    />
                  </div>
                  <div className="flex flex-col">
                    <div className="mb-5 flex flex-wrap items-center gap-3">
                      <span className="rounded-md border border-white/20 px-3 py-1 text-xs font-black uppercase text-white/64">
                        {product.category}
                      </span>
                      <span className="font-mono text-xs font-black text-white/38">0{index + 1}</span>
                    </div>
                    <h3 className="text-3xl font-black text-white">{product.name}</h3>
                    <p className="mt-3 text-base font-semibold leading-7 text-white/70">{product.description}</p>
                    <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                      <p className="font-black text-white">{product.hook}</p>
                      <span className="inline-flex items-center gap-2 text-sm font-black uppercase text-white">
                        Open
                        <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="none">
                          <path d="M7 17L17 7M9 7h8v8" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
            <div className="neo-card bg-[#d7ff4f] p-7 text-black">
              <p className="text-sm font-black uppercase">Pattern</p>
              <h2 className="mt-5 text-4xl font-black leading-none">Small screen, sharp promise.</h2>
            </div>
            <div className="neo-card p-7">
              <p className="text-sm font-black uppercase text-[#ff3a7e]">The apps are not trying to do everything.</p>
              <p className="mt-5 text-2xl font-black leading-tight text-white">
                They pick one behavior, give it a scoreboard, and make the next tap obvious.
              </p>
            </div>
            <div className="neo-card p-7">
              <p className="text-sm font-black uppercase text-[#00e6ff]">That restraint is the edge.</p>
              <p className="mt-5 text-2xl font-black leading-tight text-white">
                Less clutter. More momentum. A product people can explain in one sentence.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/20 px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 text-sm font-bold text-white/58 md:flex-row md:items-center md:justify-between">
          <p>AndyTech mobile products are live on the App Store.</p>
          <p>&copy; 2026 AndyTech, Inc.</p>
        </div>
      </footer>
    </div>
  );
}
