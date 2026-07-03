import { createFileRoute, Link } from "@tanstack/react-router";
import heroMath from "@/assets/hero-math.jpg";

export const Route = createFileRoute("/")({
  component: Landing,
});

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Marquee />
      <Problem />
      <How />
      <Sample />
      <Manifesto />
      <CTA />
      <Footer />
    </div>
  );
}

function LemmaMark() {
  return (
    <span
      aria-hidden
      className="grid h-8 w-8 place-items-center rounded-md bg-primary font-display text-primary-foreground"
    >
      <span className="text-base italic">ℓ</span>
    </span>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2">
          <LemmaMark />
          <span className="font-display text-xl font-semibold tracking-tight">Lemma</span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a href="#how" className="hover:text-foreground">How it works</a>
          <a href="#sample" className="hover:text-foreground">Sample problem</a>
          <a href="#mission" className="hover:text-foreground">Mission</a>
        </nav>
        <a
          href="#waitlist"
          className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90"
        >
          Join the waitlist
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 grid-paper opacity-70" aria-hidden />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.15fr_1fr] lg:gap-16 lg:py-28">
        <div className="flex flex-col justify-center">
          <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium uppercase tracking-widest text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-amber" />
            V1 · Building in public
          </div>
          <h1 className="font-display text-5xl leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
            Competition math,{" "}
            <em className="italic text-amber">open</em> to everyone.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            The training ground that used to live inside elite prep schools — AMC, AIME, and
            MATHCOUNTS practice with adaptive problems, worked solutions, and AI-guided hints.
            Free, forever.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#waitlist"
              className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90"
            >
              Get early access →
            </a>
            <a
              href="#sample"
              className="inline-flex items-center justify-center rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-foreground transition hover:bg-secondary"
            >
              See a sample problem
            </a>
          </div>
          <dl className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-8">
            {[
              ["10k+", "Problems at launch"],
              ["AMC · AIME", "MATHCOUNTS · HMMT"],
              ["$0", "For every student"],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="font-display text-2xl font-semibold">{k}</dt>
                <dd className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-2xl bg-amber-soft/40 blur-2xl" aria-hidden />
          <figure className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-paper)]">
            <img
              src={heroMath}
              alt="Handwritten geometry proofs, series identities, and Fibonacci spiral in navy ink on cream paper"
              width={1600}
              height={1200}
              className="h-full w-full object-cover"
            />
            <figcaption className="absolute bottom-3 right-3 rounded-full bg-background/90 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              Problem set · 2026
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = ["AMC 8", "AMC 10", "AMC 12", "AIME", "MATHCOUNTS", "HMMT", "PUMaC", "USAMO"];
  return (
    <div className="border-y border-border bg-secondary/60 py-5">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-6 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
        <span className="text-foreground/70">Preparing for</span>
        {items.map((i) => (
          <span key={i}>{i}</span>
        ))}
      </div>
    </div>
  );
}

function Problem() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="font-mono text-xs uppercase tracking-widest text-amber">§ 01 · The gap</p>
          <h2 className="mt-4 font-display text-4xl leading-tight tracking-tight sm:text-5xl">
            A zip code shouldn&apos;t decide who learns to love a hard problem.
          </h2>
        </div>
        <div className="lg:col-span-7 lg:col-start-6">
          <p className="text-lg leading-relaxed text-muted-foreground">
            At Andover, Exeter, and a handful of magnet schools, competition math is a culture —
            weekly practice, coaches, older students to mimic. Everywhere else, a curious kid
            finds a PDF of last year&apos;s AMC, tries three problems alone, and quits.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Lemma is the coach and the practice room. It generates fresh problems at your level,
            gives you a nudge when you&apos;re stuck, and shows the elegant solution when you&apos;re
            done — the way a good teammate would.
          </p>
        </div>
      </div>
    </section>
  );
}

function How() {
  const steps = [
    {
      k: "i",
      title: "Calibrate",
      body: "A short diagnostic places you on the AMC 8 → AIME ladder. No pressure, no score to publish.",
    },
    {
      k: "ii",
      title: "Practice, one problem at a time",
      body: "Adaptive sets on the topics you're weakest at — number theory, combinatorics, geometry, algebra.",
    },
    {
      k: "iii",
      title: "Hints, not answers",
      body: "Stuck? A Socratic hint reveals the next step, never the whole solution. Learn the move, not the shortcut.",
    },
    {
      k: "iv",
      title: "Review the elegant proof",
      body: "Every problem ends with the cleanest solution we know — often two, so you see the trick and the technique.",
    },
  ];
  return (
    <section id="how" className="border-t border-border bg-secondary/40 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-amber">
            § 02 · How it works
          </p>
          <h2 className="mt-4 font-display text-4xl tracking-tight sm:text-5xl">
            Four steps. One loop.
          </h2>
        </div>
        <ol className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <li key={s.k} className="flex flex-col bg-card p-8">
              <span className="font-mono text-xs uppercase tracking-widest text-amber">{s.k}.</span>
              <h3 className="mt-3 font-display text-2xl">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Sample() {
  return (
    <section id="sample" className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="font-mono text-xs uppercase tracking-widest text-amber">§ 03 · A taste</p>
          <h2 className="mt-4 font-display text-4xl tracking-tight sm:text-5xl">
            One problem, three ways to be helped.
          </h2>
          <p className="mt-6 text-muted-foreground">
            Every card in Lemma looks like this. Try it before you tap for a hint.
          </p>
        </div>
        <div className="lg:col-span-8">
          <article className="rounded-2xl border border-border bg-card shadow-[var(--shadow-paper)]">
            <header className="flex items-center justify-between border-b border-border px-6 py-4">
              <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                <span className="rounded-full bg-amber-soft/60 px-2 py-0.5 text-ink">AMC 10</span>
                <span>Number theory · Medium</span>
              </div>
              <span className="font-mono text-xs text-muted-foreground">#00427</span>
            </header>
            <div className="rule-line px-6 py-8">
              <p className="font-serif text-xl leading-relaxed">
                How many positive integers <em>n</em> less than{" "}
                <span className="font-mono">1000</span> are such that{" "}
                <span className="font-mono">n</span> and{" "}
                <span className="font-mono">n + 1</span> are both expressible as a sum of two
                positive squares?
              </p>
            </div>
            <footer className="flex flex-wrap gap-3 border-t border-border px-6 py-4">
              <button className="rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition hover:bg-secondary">
                Give me a nudge
              </button>
              <button className="rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition hover:bg-secondary">
                Show first step
              </button>
              <button className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90">
                Reveal solution
              </button>
              <span className="ml-auto self-center font-mono text-xs text-muted-foreground">
                ⏱ avg. 6 min
              </span>
            </footer>
          </article>
        </div>
      </div>
    </section>
  );
}

function Manifesto() {
  return (
    <section id="mission" className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto max-w-5xl px-6 py-24 text-center">
        <p className="font-mono text-xs uppercase tracking-widest text-amber">§ 04 · Mission</p>
        <blockquote className="mt-6 font-display text-3xl leading-snug tracking-tight sm:text-4xl lg:text-5xl">
          &ldquo;The kids who&apos;ll qualify for the AIME next year already exist. Most of them
          just haven&apos;t been handed the right problem yet.&rdquo;
        </blockquote>
        <p className="mt-8 font-mono text-xs uppercase tracking-[0.3em] text-primary-foreground/60">
          Lemma is free for students. Always.
        </p>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="waitlist" className="mx-auto max-w-4xl px-6 py-24 text-center">
      <p className="font-mono text-xs uppercase tracking-widest text-amber">§ 05 · Join</p>
      <h2 className="mt-4 font-display text-4xl tracking-tight sm:text-5xl">
        Be first in the practice room.
      </h2>
      <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
        We&apos;re piloting with math teams at a handful of schools this fall. Drop your email to
        get an invite when your level opens up.
      </p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const f = e.currentTarget as HTMLFormElement;
          const btn = f.querySelector("button")!;
          btn.textContent = "You’re on the list ✓";
          btn.setAttribute("disabled", "true");
        }}
        className="mx-auto mt-8 flex max-w-md flex-col gap-2 sm:flex-row"
      >
        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          placeholder="you@school.edu"
          className="flex-1 rounded-full border border-border bg-card px-5 py-3 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-amber"
        />
        <button
          type="submit"
          className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90"
        >
          Request access
        </button>
      </form>
      <p className="mt-4 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
        No spam. One update a month, at most.
      </p>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-muted-foreground sm:flex-row">
        <div className="flex items-center gap-2">
          <LemmaMark />
          <span>© {new Date().getFullYear()} Lemma. A student project.</span>
        </div>
        <div className="font-mono text-xs uppercase tracking-widest">
          Made for the kid who loves problem 25.
        </div>
      </div>
    </footer>
  );
}
