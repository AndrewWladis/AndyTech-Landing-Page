"use client";
import Image from "next/image";
import Navbar from "@/components/Navbar";

const productProof = [
  {
    name: "Pillowbook",
    kicker: "Dream decoder",
    icon: "/pillowbook.png",
    color: "#ff8f3a",
    url: "https://apps.apple.com/us/app/pillowbook-dream-decoder/id6775021552",
  },
  {
    name: "Swiftie Swipe",
    kicker: "Daily Swiftie trivia game",
    icon: "/swiftie.png",
    color: "#ff3a7e",
    url: "https://apps.apple.com/us/app/swiftie-swipe/id6479224086",
  },
  {
    name: "Dunk Rank",
    kicker: "Sports ranking based on pickup games",
    icon: "/dunkrank.png",
    color: "#d7ff4f",
    url: "https://apps.apple.com/us/app/dunk-rank/id6448699695",
  },
  {
    name: "BondsAI",
    kicker: "Track and learn bonds",
    icon: "/bondsai.png",
    color: "#00e6ff",
    url: "https://apps.apple.com/us/app/bonds-ai/id6767971558",
  },
  {
    name: "Token",
    kicker: "Learn money",
    icon: "/token.png",
    color: "#ffe600",
    url: "https://apps.apple.com/us/app/token-learn-money/id6777829905",
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

export default function Home() {
  return (
    <div className="site-shell">
      <Navbar />

      <main>
        <section id="home" className="relative overflow-hidden px-4 py-14 sm:px-6 lg:px-8 lg:py-20 xl:min-h-[560px]">
          <div className="relative mx-auto max-w-7xl">
            <div className="reveal-in relative z-10 max-w-3xl">
              <h1 className="text-5xl font-black leading-[0.95] text-white sm:text-6xl xl:text-7xl">
                Websites, apps, and UI polish for real projects.
              </h1>

              <p className="mt-6 max-w-2xl text-lg font-semibold leading-8 text-white/75">
                I’m Andy Wladis, a software engineer who specializes in web and mobile development. I help businesses, nonprofits, and small teams turn their ideas into websites and mobile apps to firmly establish their digital presence.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
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
                <a
                  key={product.name}
                  href={product.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`neo-card no-shine app-card reveal-in stagger-${(index % 4) + 1} p-4`}
                  style={{ "--app-accent": product.color }}
                >
                  <Image
                    src={product.icon}
                    alt={`${product.name} app icon`}
                    width={72}
                    height={72}
                    className="h-16 w-16 rounded-lg object-cover shadow-[5px_5px_0_rgba(0,0,0,0.55)]"
                  />
                  <h3 className="mt-5 text-lg font-black text-white">{product.name}</h3>
                  <p className="mt-2 text-xs font-black uppercase text-white/48">{product.kicker}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl border-top border-white/20 py-12">
            <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
              <div className="max-w-3xl">
                <h2 className="text-5xl font-black leading-none text-white md:text-7xl">
                  Request a meeting.
                </h2>
                <p className="mt-6 text-lg font-semibold leading-8 text-white/70">
                  Send the rough idea, timeline, and what kind of help you need. I’ll follow up so we can find a good time to talk through it.
                </p>
                <a href="mailto:awladis@andytech.it.com" className="slab-button slab-button-dark mt-8 px-6 py-3">
                  awladis@andytech.it.com
                  <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none">
                    <path d="M4 5h16v14H4zM4 7l8 6 8-6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
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

              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/20 px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 text-sm font-bold text-white/58 md:flex-row md:items-center md:justify-between">
          <p>&copy; 2026 AndyTech, Inc.</p>
        </div>
      </footer>
    </div>
  );
}
