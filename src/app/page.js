"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";

const productProof = [
  {
    name: "Pillowbook",
    kicker: "Dream decoder",
    icon: "/pillowbook.png",
    color: "#ff8f3a",
  },
  {
    name: "Swiftie Swipe",
    kicker: "Daily Swiftie trivia game",
    icon: "/swiftie.png",
    color: "#ff3a7e",
  },
  {
    name: "Dunk Rank",
    kicker: "Sports ranking based on pickup games",
    icon: "/dunkrank.png",
    color: "#d7ff4f",
  },
  {
    name: "BondsAI",
    kicker: "Track and learn bonds",
    icon: "/bondsai.png",
    color: "#00e6ff",
  },
  {
    name: "Token",
    kicker: "Learn money",
    icon: "/token.png",
    color: "#ffe600",
  },
];

const clientWork = [
  {
    name: "Careers in Code",
    url: "https://careersincode.org/",
    description: "A public-facing site for a Central NY coding bootcamp, built to move students, partners, mentors, and employers toward the right next step.",
  },
  {
    name: "Alpha Epsilon Pi · ASU",
    url: "https://asuaepi.netlify.app/",
    description: "A fast chapter presence for ASU AEPi with an about story, campus identity, and a lightweight merch showcase.",
  },
];

const services = [
  {
    title: "Websites that sell the next step",
    body: "Landing pages, nonprofit sites, chapter sites, portfolios, and product pages with sharp copy, real hierarchy, and mobile polish.",
  },
  {
    title: "Apps and MVPs that feel usable fast",
    body: "React Native, Expo, and web app builds for focused ideas that need to become something people can tap, test, and share.",
  },
  {
    title: "UI rebuilds with a pulse",
    body: "Turn plain, AI-looking screens into bold interfaces with motion, better states, cleaner flows, and language that sounds human.",
  },
  {
    title: "Launch cleanup and rescue work",
    body: "Fix the rough edges before a launch: layout bugs, responsiveness, copy, performance, release prep, and handoff details.",
  },
];

export default function Home() {
  const [downloadCount, setDownloadCount] = useState(0);

  useEffect(() => {
    const targetCount = 20000;
    const duration = 1700;
    let frameId;
    let startTime;

    const tick = (time) => {
      if (!startTime) startTime = time;
      const progress = Math.min((time - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDownloadCount(Math.round(targetCount * eased));

      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      }
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <div className="site-shell">
      <Navbar />

      <main>
        <section id="home" className="relative overflow-hidden px-4 pb-12 pt-10 sm:px-6 lg:min-h-[640px] lg:px-8">
          <div className="stripe-fill absolute bottom-8 left-0 h-28 w-full border-y border-white/20 opacity-45" />

          <div className="relative mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-[1.02fr_0.98fr]">
            <div className="reveal-in relative z-10 max-w-4xl">
              <div className="mb-6 flex gap-2 lg:hidden" aria-label="Selected work icons">
                {productProof.map((product) => (
                  <Image
                    key={product.name}
                    src={product.icon}
                    alt={`${product.name} app icon`}
                    width={56}
                    height={56}
                    className="h-12 w-12 rounded-lg border border-white/20 object-cover shadow-[4px_4px_0_rgba(0,0,0,0.55)]"
                    priority
                  />
                ))}
              </div>

              <h1 className="brand-shadow text-6xl font-black leading-none text-white md:text-7xl lg:text-8xl">
Sites and apps that deliver              
</h1>

              <p className="mt-6 max-w-2xl text-lg font-semibold leading-8 text-white/78 md:text-xl">
                I’m Andy Wladis. I build bold websites, mobile MVPs, and software interfaces for clients that need a serious product in front of users.
              </p>

              <div className="mt-7 flex flex-col gap-4 sm:flex-row">
                <a href="#work" className="slab-button slab-button-dark px-6 py-3">
                  See work
                  <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <a href="#contact" className="slab-button px-6 py-3">
                  Start a project
                  <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none">
                    <path d="M4 5h16v14H4zM4 7l8 6 8-6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>

              <div className="mt-9 grid max-w-xl grid-cols-1 border border-white/20 bg-black/50">
                <div className="border-r border-white/20 p-4">
                  <p className="text-2xl font-black text-white sm:text-3xl md:text-4xl">{downloadCount.toLocaleString()}+</p>
                  <p className="mt-1 text-[0.62rem] font-black uppercase text-white/58 sm:text-xs">app downloads</p>
                </div>
              </div>
            </div>

            <div className="reveal-in stagger-2 relative hidden lg:block lg:min-h-[540px]" aria-label="Freelance proof icons">
              <div className="spin-slow absolute left-1/2 top-1/2 h-[29rem] w-[29rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/30" />
              <div className="absolute left-1/2 top-1/2 grid -translate-x-1/2 -translate-y-1/2 grid-cols-3 gap-5">
                {productProof.map((product, index) => (
                  <div
                    key={product.name}
                    className={`neo-card scan-panel grid h-28 w-28 place-items-center p-3 float-${index % 2 === 0 ? "one" : "two"} ${index === 4 ? "col-start-2" : ""}`}
                    style={{ boxShadow: `8px 8px 0 ${product.color}` }}
                  >
                    <Image
                      src={product.icon}
                      alt={`${product.name} app icon`}
                      width={96}
                      height={96}
                      className="h-full w-full rounded-md object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>


        <section id="work" className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <h2 className="max-w-3xl text-5xl font-black leading-none text-white md:text-7xl">
                  Previous freelance projects + <br />my mobile product lineup
                </h2>
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              {clientWork.map((project, index) => (
                <a
                  key={project.name}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`neo-card tilt-card reveal-in stagger-${index + 1} flex min-h-[260px] flex-col overflow-hidden p-5`}
                >
                  <h3 className="text-3xl font-black leading-none text-white md:text-4xl">{project.name}</h3>
                  <p className="mt-4 flex-1 text-sm font-semibold leading-6 text-white/68">{project.description}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-black uppercase text-white">
                    Visit site
                    <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="none">
                      <path d="M7 17L17 7M9 7h8v8" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </a>
              ))}
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-5">
              {productProof.map((product, index) => (
                <div key={product.name} className={`neo-card reveal-in stagger-${(index % 4) + 1} p-4`}>
                  <Image
                    src={product.icon}
                    alt={`${product.name} app icon`}
                    width={72}
                    height={72}
                    className="h-16 w-16 rounded-lg object-cover shadow-[5px_5px_0_rgba(0,0,0,0.55)]"
                  />
                  <h3 className="mt-5 text-lg font-black text-white">{product.name}</h3>
                  <p className="mt-2 text-xs font-black uppercase text-white/48">{product.kicker}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl border-y border-white/20 py-12">
            <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
              <div className="max-w-3xl">
                <h2 className="text-5xl font-black leading-none text-white md:text-7xl">
                  Request a meeting.
                </h2>
                <p className="mt-6 text-lg font-semibold leading-8 text-white/70">
                  Send the rough idea, timeline, and what kind of help you need. I’ll follow up so we can find a good time to talk through it.
                </p>
              </div>

              <div className="grid gap-5">
                <form
                  action="https://formspree.io/f/xqeoodpv"
                  method="POST"
                  className="neo-card no-shine grid gap-5 p-5 sm:p-6"
                >
                  <input type="hidden" name="_subject" value="New AndyTech meeting request" />
                  <input type="text" name="_gotcha" tabIndex="-1" autoComplete="off" className="hidden" />

                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className="grid gap-2 text-sm font-black uppercase text-white/64">
                      Name
                      <input
                        type="text"
                        name="name"
                        required
                        autoComplete="name"
                        className="min-h-12 rounded-md border border-white/20 bg-black/55 px-4 py-3 text-base font-bold normal-case text-white outline-none transition-colors placeholder:text-white/28 focus:border-[#00e6ff]"
                        placeholder="Your name"
                      />
                    </label>

                    <label className="grid gap-2 text-sm font-black uppercase text-white/64">
                      Email
                      <input
                        type="email"
                        name="email"
                        required
                        autoComplete="email"
                        className="min-h-12 rounded-md border border-white/20 bg-black/55 px-4 py-3 text-base font-bold normal-case text-white outline-none transition-colors placeholder:text-white/28 focus:border-[#00e6ff]"
                        placeholder="you@example.com"
                      />
                    </label>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className="grid gap-2 text-sm font-black uppercase text-white/64">
                      Project type
                      <select
                        name="project_type"
                        required
                        defaultValue=""
                        className="min-h-12 rounded-md border border-white/20 bg-black/55 px-4 py-3 text-base font-bold normal-case text-white outline-none transition-colors focus:border-[#00e6ff]"
                      >
                        <option value="" disabled>Pick one</option>
                        <option>Website</option>
                        <option>Mobile app or MVP</option>
                        <option>UI redesign</option>
                        <option>Bug fix or launch cleanup</option>
                        <option>Not sure yet</option>
                      </select>
                    </label>

                    <label className="grid gap-2 text-sm font-black uppercase text-white/64">
                      Timeline
                      <input
                        type="text"
                        name="timeline"
                        className="min-h-12 rounded-md border border-white/20 bg-black/55 px-4 py-3 text-base font-bold normal-case text-white outline-none transition-colors placeholder:text-white/28 focus:border-[#00e6ff]"
                        placeholder="ASAP, this month, flexible..."
                      />
                    </label>
                  </div>

                  <label className="grid gap-2 text-sm font-black uppercase text-white/64">
                    Best times to meet
                    <input
                      type="text"
                      name="meeting_times"
                      className="min-h-12 rounded-md border border-white/20 bg-black/55 px-4 py-3 text-base font-bold normal-case text-white outline-none transition-colors placeholder:text-white/28 focus:border-[#00e6ff]"
                      placeholder="Weekday afternoons, Friday morning, etc."
                    />
                  </label>

                  <label className="grid gap-2 text-sm font-black uppercase text-white/64">
                    What are we building?
                    <textarea
                      name="message"
                      required
                      rows="5"
                      className="min-h-36 resize-y rounded-md border border-white/20 bg-black/55 px-4 py-3 text-base font-bold normal-case leading-7 text-white outline-none transition-colors placeholder:text-white/28 focus:border-[#00e6ff]"
                      placeholder="A few sentences is perfect. What exists now, what needs to change, and what would make this project a win?"
                    />
                  </label>

                  <button type="submit" className="slab-button px-6 py-3">
                    Send request
                    <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </form>

                <a href="mailto:awladis@andytech.it.com" className="slab-button slab-button-dark justify-self-start px-6 py-3 sm:justify-self-end">
                  awladis@andytech.it.com
                  <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none">
                    <path d="M4 5h16v14H4zM4 7l8 6 8-6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/20 px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 text-sm font-bold text-white/58 md:flex-row md:items-center md:justify-between">
          <p>Freelance websites, apps, and product interfaces by AndyTech.</p>
          <p>&copy; 2026 AndyTech, Inc.</p>
        </div>
      </footer>
    </div>
  );
}
