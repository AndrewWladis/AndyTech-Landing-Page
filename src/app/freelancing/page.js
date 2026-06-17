"use client";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

const services = [
  {
    label: "Web apps",
    title: "Dashboards, portals, and product sites that feel finished.",
    detail: "Next.js builds with crisp flows, useful states, and copy that does not sound like it came from a template.",
    stack: ["React", "Next.js", "APIs", "Auth"],
    color: "#ff3a7e",
  },
  {
    label: "Mobile MVPs",
    title: "Small-screen ideas turned into something people can actually tap.",
    detail: "Expo and React Native builds for prototypes, pilots, and focused first releases.",
    stack: ["React Native", "Expo", "iOS", "Android"],
    color: "#00e6ff",
  },
  {
    label: "Backends",
    title: "APIs, data models, and boring parts that quietly hold up.",
    detail: "Server work that favors clear contracts, sane data, and fewer mysteries when traffic shows up.",
    stack: ["Node.js", "Python", "Firebase", "SQL"],
    color: "#d7ff4f",
  },
  {
    label: "Rescues",
    title: "Messy builds cleaned up without turning your roadmap inside out.",
    detail: "Performance passes, UI polish, bug hunts, release prep, and technical debt that needs a direct hit.",
    stack: ["Audits", "Refactors", "Launches", "QA"],
    color: "#ffe600",
  },
];

const proofIcons = [
  { src: "/pillowbook.png", alt: "Pillowbook app icon" },
  { src: "/swiftie.png", alt: "Swiftie Swipe app icon" },
  { src: "/dunkrank.png", alt: "Dunk Rank app icon" },
  { src: "/bondsai.png", alt: "BondsAI app icon" },
  { src: "/token.png", alt: "Token app icon" },
];

const reasons = [
  "You need the first usable version, not six weeks of theater.",
  "Your current product works, but it looks and feels too timid.",
  "You have a workflow people do by hand and want software to take the weight.",
  "You want a builder who can move from interface to API without a handoff circus.",
];

const process = [
  {
    step: "Scope the actual job",
    body: "We shrink the idea down to the behavior that matters most and decide what deserves to ship first.",
  },
  {
    step: "Build where users feel it",
    body: "The interface, data, and edge cases move together so the product gets real quickly.",
  },
  {
    step: "Polish before handoff",
    body: "States, mobile layout, copy, release details, and the little rough edges get attention before launch.",
  },
];

export default function Freelancing() {
  return (
    <div className="site-shell">
      <Navbar />

      <main>
        <section className="relative overflow-hidden px-4 py-12 sm:px-6 lg:px-8">
          <div className="stripe-fill absolute left-0 top-28 h-28 w-full border-y border-white/20 opacity-60" />

          <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="reveal-in">
              <div className="mb-6 flex gap-2 lg:hidden" aria-label="Shipped AndyTech apps">
                {proofIcons.map((icon) => (
                  <Image
                    key={icon.src}
                    src={icon.src}
                    alt={icon.alt}
                    width={56}
                    height={56}
                    className="h-12 w-12 rounded-lg border border-white/20 object-cover shadow-[4px_4px_0_rgba(0,0,0,0.55)]"
                    priority
                  />
                ))}
              </div>
              <h1 className="brand-shadow text-6xl font-black leading-none text-white md:text-7xl">
                Ship the thing. Skip the fog.
              </h1>
              <p className="mt-7 max-w-2xl text-lg font-semibold leading-8 text-white/72">
                AndyTech builds web and mobile software for people who need momentum: a sharper interface, a working MVP, a cleaner backend, or a product that finally feels ready to show.
              </p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a href="mailto:awladis@andytech.it.com" className="slab-button px-6 py-3">
                  Email the studio
                  <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none">
                    <path d="M4 5h16v14H4zM4 7l8 6 8-6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <Link href="/mobile-products" className="slab-button slab-button-dark px-6 py-3">
                  See shipped apps
                  <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="reveal-in stagger-2 neo-card relative hidden overflow-hidden p-6 lg:block">
              <div className="grid gap-4">
                <div className="flex items-center justify-between border-b border-white/15 pb-5">
                  <p className="text-sm font-black uppercase text-white/58">Proof board</p>
                  <p className="text-sm font-black text-[#d7ff4f]">20,000+ downloads</p>
                </div>

                <div className="grid grid-cols-5 gap-3">
                  {proofIcons.map((icon, index) => (
                    <div
                      key={icon.src}
                      className={`scan-panel relative aspect-square overflow-hidden border border-white/20 bg-white/8 p-1 float-${index % 2 === 0 ? "one" : "two"}`}
                    >
                      <Image
                        src={icon.src}
                        alt={icon.alt}
                        width={96}
                        height={96}
                        className="h-full w-full rounded-md object-cover"
                        priority={index < 3}
                      />
                    </div>
                  ))}
                </div>

                <div className="mt-5 grid gap-3">
                  {["Prototype", "Polish", "Launch"].map((item, index) => (
                    <div key={item} className="flex items-center justify-between border border-white/15 bg-black/35 px-4 py-3">
                      <span className="font-black text-white">{item}</span>
                      <span className="font-mono text-sm font-black text-white/44">0{index + 1}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="ticker">
          <div className="ticker-track">
            {[...reasons, ...reasons].map((reason, index) => (
              <span key={`${reason}-${index}`}>{reason}</span>
            ))}
          </div>
        </div>

        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-4xl">
              <p className="mb-3 text-sm font-black uppercase text-[#ff3a7e]">What to bring</p>
              <h2 className="text-5xl font-black leading-none text-white md:text-7xl">
                A half-clear idea is enough. The work makes it sharper.
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {services.map((service, index) => (
                <div
                  key={service.label}
                  className={`neo-card tilt-card reveal-in stagger-${(index % 4) + 1} overflow-hidden p-6`}
                >
                  <div className="mb-7 flex items-center justify-between gap-4">
                    <span className="rounded-md px-3 py-1 text-xs font-black uppercase text-black" style={{ background: service.color }}>
                      {service.label}
                    </span>
                    <span className="font-mono text-sm font-black text-white/38">0{index + 1}</span>
                  </div>
                  <h3 className="text-3xl font-black leading-tight text-white">{service.title}</h3>
                  <p className="mt-4 text-base font-semibold leading-7 text-white/68">{service.detail}</p>
                  <div className="mt-7 flex flex-wrap gap-2">
                    {service.stack.map((item) => (
                      <span key={item} className="rounded-md border border-white/18 bg-white/8 px-3 py-2 text-xs font-black uppercase text-white/72">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="neo-card bg-[#00e6ff] p-8 text-black">
              <p className="text-sm font-black uppercase">How projects move</p>
              <h2 className="mt-5 text-5xl font-black leading-none md:text-7xl">
                Clear scope. Fast loops. No mystery status.
              </h2>
            </div>

            <div className="grid gap-6">
              {process.map((item, index) => (
                <div key={item.step} className={`neo-card reveal-in stagger-${index + 1} grid gap-5 p-6 md:grid-cols-[7rem_1fr]`}>
                  <p className="font-mono text-4xl font-black text-[#ffe600]">0{index + 1}</p>
                  <div>
                    <h3 className="text-2xl font-black text-white">{item.step}</h3>
                    <p className="mt-3 text-base font-semibold leading-7 text-white/68">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl border-y border-white/20 py-12">
            <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="mb-4 text-sm font-black uppercase text-[#d7ff4f]">Ready when the idea is</p>
                <h2 className="max-w-3xl text-5xl font-black leading-none text-white md:text-7xl">
                  Send the messy version. That is usually the honest one.
                </h2>
              </div>
              <a href="mailto:awladis@andytech.it.com" className="slab-button px-6 py-3">
                awladis@andytech.it.com
                <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none">
                  <path d="M4 5h16v14H4zM4 7l8 6 8-6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/20 px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 text-sm font-bold text-white/58 md:flex-row md:items-center md:justify-between">
          <p>Freelance web and mobile builds by AndyTech.</p>
          <p>&copy; 2026 AndyTech, Inc.</p>
        </div>
      </footer>
    </div>
  );
}
