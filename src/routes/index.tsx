import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import trainer from "@/assets/trainer.png";
import b1 from "@/assets/blog1.jpg";
import b2 from "@/assets/blog2.jpg";
import b3 from "@/assets/blog3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Marcus Reid — Forge Your Best Self" },
      { name: "description", content: "Certified personal trainer. Coaching, online programs, nutrition and group training." },
      { property: "og:title", content: "Marcus Reid — Forge Your Best Self" },
      { property: "og:description", content: "Personal training designed around your goals, your pace, your results." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const Eyebrow = ({ children }: { children: string }) => (
  <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-brand">
    <span className="h-1.5 w-1.5 rounded-full bg-brand" />
    {children}
  </div>
);
const H = "font-display font-black uppercase leading-[0.92] tracking-tight";

const programs = [
  ["01", "One-on-One Coaching", "Fully personalised training sessions built around your schedule, body, and goals. No templates — just results."],
  ["02", "Online Programs", "Train anywhere, anytime. Custom workout plans and video guidance delivered directly to your device."],
  ["03", "Nutrition Planning", "Fuel your transformation with a personalised nutrition strategy tailored to your goals and lifestyle."],
  ["04", "Group Training", "High-energy small group sessions combining community motivation with expert coaching for maximum output."],
];
const posts = [
  [b1, "Training", "5 Principles Every Beginner Must Know Before Starting", "Breaking into fitness is hard. These five fundamentals will set you up for long-term success from day one.", "Apr 8, 2026"],
  [b2, "Nutrition", "What to Eat Before and After Training for Maximum Gains", "Nutrition timing is everything. Learn exactly what to eat and when to maximise your training output.", "Mar 25, 2026"],
  [b3, "Mindset", "How to Stay Consistent When Motivation Runs Out", "Motivation fades. Discipline wins. Here's how to build the mental systems that keep you showing up every day.", "Mar 10, 2026"],
];

function Index() {
  return (
    <div className="min-h-screen bg-ink text-foreground">
      {/* HERO */}
      <section
        className="relative overflow-hidden"
        style={{ background: "radial-gradient(ellipse at 55% 20%, var(--brand) 0%, color-mix(in oklab, var(--brand) 45%, var(--ink)) 40%, var(--ink) 85%)" }}
      >
        <header className="relative z-20 mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div className="font-display text-sm font-extrabold uppercase tracking-wider">
            Marcus <span className="text-brand">Reid</span>
          </div>
          <nav className="hidden gap-8 text-[10px] font-medium uppercase tracking-[0.2em] md:flex">
            {["Services", "About", "Results", "Contact"].map((n) => (
              <a key={n} href="#" className="hover:text-brand">{n}</a>
            ))}
          </nav>
          <a href="#" className="bg-brand px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em]">Book Now</a>
        </header>

        <div aria-hidden className={`${H} pointer-events-none absolute inset-x-0 top-16 z-0 select-none text-[clamp(6rem,17vw,15rem)] text-foreground/[0.06]`}>
          <div className="pl-[6%]">Marcus</div>
          <div className="text-right pr-[2%] -mt-4">Reid</div>
        </div>

        <div className="relative z-10 mx-auto grid min-h-[700px] max-w-6xl px-6 md:grid-cols-2">
          <div className="relative z-20 flex flex-col justify-center pb-20 pt-10">
            <Eyebrow>Certified Personal Trainer</Eyebrow>
            <h1 className={`${H} mt-5 text-6xl md:text-7xl`}>Forge Your<br />Best Self</h1>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-foreground/70">
              Personal training designed around you — your goals, your pace, your results.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a href="#" className="flex items-center gap-3 bg-brand px-5 py-3 text-[10px] font-bold uppercase tracking-[0.2em]">
                Book a Free Session <ArrowRight className="h-3 w-3" />
              </a>
              <a href="#" className="text-[10px] uppercase tracking-[0.2em] text-foreground/80">View Programs</a>
            </div>
          </div>
          <img src={trainer} alt="Marcus Reid" width={1024} height={1280}
            className="absolute bottom-0 left-1/2 z-10 w-[min(560px,90vw)] -translate-x-[35%] md:left-[32%] md:translate-x-0" />
          <div className="relative z-20 hidden items-center justify-end gap-3 md:flex md:pt-60">
            {[["100%", "Client Satisfaction Guaranteed — every program is built around your goals."],
              ["500+", "Clients Trained Real people, real results — from beginners to athletes."]].map(([n, t], i) => (
              <div key={n} className={`w-44 rounded-lg p-4 shadow-2xl backdrop-blur ${i ? "bg-brand/60" : "bg-brand/90"}`}>
                <div className="text-5xl font-light tracking-tight">{n}</div>
                <p className="mt-3 text-[10px] leading-snug text-foreground/85">{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section style={{ background: "linear-gradient(180deg, var(--ink) 0%, var(--ink) 40%, color-mix(in oklab, var(--brand) 35%, var(--ink)) 100%)" }}>
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <Eyebrow>What I Offer</Eyebrow>
              <h2 className={`${H} mt-4 text-5xl`}>Programs<br />Built to Win</h2>
            </div>
            <div className="max-w-[300px]">
              <p className="text-xs leading-relaxed text-foreground/60">
                Every program is designed with one goal in mind — getting you the results you came here for. No fluff, no filler.
              </p>
              <a href="#" className="mt-6 flex w-fit items-center gap-3 bg-brand px-5 py-2.5 text-[9px] font-bold uppercase tracking-[0.2em] md:ml-auto">
                View All Programs <ArrowRight className="h-3 w-3" />
              </a>
            </div>
          </div>
          <div className="mt-12 grid border border-foreground/10 sm:grid-cols-2 lg:grid-cols-4">
            {programs.map(([n, t, d], i) => {
              const hl = i === 2;
              return (
                <div key={n} className={`border-foreground/10 p-6 lg:border-r ${hl ? "bg-brand" : "bg-ink"}`}>
                  <div className={`text-[9px] tracking-widest ${hl ? "" : "text-brand"}`}>{n}</div>
                  <div className={`my-4 h-px ${hl ? "bg-foreground/40" : "bg-brand/60"}`} />
                  <h3 className="font-display text-lg font-extrabold uppercase leading-tight">{t}</h3>
                  <p className={`mt-6 text-[10px] leading-relaxed ${hl ? "text-foreground/80" : "text-foreground/50"}`}>{d}</p>
                  <a href="#" className={`mt-6 flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.2em] ${hl ? "" : "text-brand"}`}>
                    Learn More <ArrowRight className="h-3 w-3" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex items-end justify-between">
          <div>
            <Eyebrow>Knowledge & Tips</Eyebrow>
            <h2 className={`${H} mt-4 text-5xl`}>Forge Your<br />Mindset</h2>
          </div>
          <a href="#" className="flex items-center gap-3 border border-foreground/20 px-5 py-2.5 text-[9px] font-bold uppercase tracking-[0.2em]">
            All Articles <ArrowRight className="h-3 w-3" />
          </a>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {posts.map(([img, tag, t, d, date], i) => {
            const hl = i === 2;
            return (
              <article key={t} className={hl ? "bg-brand" : "bg-foreground/[0.03]"}>
                <img src={img} alt={t} loading="lazy" width={1024} height={640} className="aspect-[16/9] w-full object-cover" />
                <div className="p-6">
                  <span className={`px-2 py-1 text-[8px] font-bold uppercase tracking-[0.2em] ${i === 0 ? "bg-brand" : hl ? "bg-ink/40" : "border border-brand/50 text-brand"}`}>{tag}</span>
                  <h3 className="mt-4 text-base font-bold leading-snug">{t}</h3>
                  <p className={`mt-4 text-[10px] leading-relaxed ${hl ? "text-foreground/80" : "text-foreground/45"}`}>{d}</p>
                  <div className="mt-8 flex items-center justify-between text-[9px]">
                    <span className={hl ? "text-foreground/70" : "text-foreground/35"}>{date}</span>
                    <a href="#" className={`flex items-center gap-2 font-bold uppercase tracking-[0.2em] ${hl ? "" : "text-brand"}`}>
                      Read More <ArrowRight className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}
