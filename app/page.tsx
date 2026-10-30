"use client"

import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(168,85,247,0.18),transparent_38%,transparent_100%)]" />

      <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-cyan-400 text-lg font-bold text-slate-950">
            S
          </div>
          <div>
            <p className="text-lg font-semibold tracking-tight">StartupForge</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
          <Link href="#features">Features</Link>
          <Link href="#workflow">Workflow</Link>
          <Link href="#agents">Agents</Link>
          <Link href="#pricing">Pricing</Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/dashboard" className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-100 transition hover:border-violet-400 hover:text-white">
            Open demo
          </Link>
          <Link href="/dashboard" className="rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 px-4 py-2 text-sm font-medium text-slate-950 shadow-lg shadow-violet-500/30 transition hover:scale-[1.02]">
            Start for free
          </Link>
        </div>
      </header>

      <section className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 pt-10 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:pb-28 lg:pt-16">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1.5 text-xs font-medium text-violet-200">
            AI startup studio
          </div>

          <h1 className="max-w-xl text-4xl font-black tracking-tight text-white md:text-6xl">
            Turn your idea into a real startup with AI agents.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
            Describe your idea once and let our specialist agents turn it into product strategy,
            market research, technical blueprint, MVP roadmap, landing page, and investor-ready pitch.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link href="/dashboard" className="rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 px-6 py-3 text-center font-semibold text-slate-950 shadow-xl shadow-violet-500/30 transition hover:scale-[1.02]">
              Describe my startup idea
            </Link>
            <Link href="#workflow" className="rounded-full border border-slate-700 px-6 py-3 text-center font-semibold text-slate-100 transition hover:border-slate-500 hover:bg-slate-900">
              See how it works
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-300">
            <div>
              <span className="block text-2xl font-bold text-white">12x</span>
              Faster startup planning
            </div>
            <div>
              <span className="block text-2xl font-bold text-white">7</span>
              Specialized AI agents
            </div>
            <div>
              <span className="block text-2xl font-bold text-white">24/7</span>
              Product co-pilot
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-4 shadow-2xl shadow-violet-950/30 backdrop-blur">
          <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Idea input</p>
                <p className="mt-2 text-lg font-semibold text-white">AI Startup Studio</p>
              </div>
              <div className="rounded-full bg-emerald-500/15 px-2.5 py-1 text-xs font-medium text-emerald-300">
                Ready
              </div>
            </div>

            <div className="mt-5 space-y-4">
              <div className="rounded-xl border border-slate-800 bg-slate-900 p-3 text-sm text-slate-300">
                “A platform that helps people book home services like cleaning, plumbing, and repairs in under 10 minutes.”
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-slate-800 bg-slate-900 p-3">
                  <p className="text-xs text-slate-400">Market</p>
                  <p className="mt-2 text-sm font-medium text-white">Home services</p>
                </div>
                <div className="rounded-xl border border-slate-800 bg-slate-900 p-3">
                  <p className="text-xs text-slate-400">Model</p>
                  <p className="mt-2 text-sm font-medium text-white">Commission + subscription</p>
                </div>
              </div>

              <div className="rounded-xl border border-violet-500/30 bg-violet-500/10 p-3">
                <p className="text-xs uppercase tracking-[0.2em] text-violet-200">Generated</p>
                <p className="mt-2 text-base font-semibold text-white">HomeNest</p>
                <p className="mt-2 text-sm text-slate-300">Target: busy homeowners and property managers.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-violet-300">Everything you need</p>
          <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">From idea to startup in one workspace</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {[
            ["Market research", "Analyze demand, competitors, and the strongest opportunity in your niche."],
            ["Product strategy", "Turn your raw idea into user flows, feature prioritization, and MVP scope."],
            ["Tech blueprint", "Choose the stack, architecture, and roadmap with clear execution guidance."],
            ["Brand & pitch", "Create your brand, landing page copy, and investor-ready pitch deck."],
          ].map(([title, text]) => (
            <div key={title} className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-cyan-400 text-sm font-bold text-slate-950">
                ✓
              </div>
              <h3 className="text-xl font-semibold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="workflow" className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">Workflow</p>
          <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">A startup-building workflow built for speed</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            ["01", "Describe your idea", "Tell us your concept, audience, and problem you want to solve."],
            ["02", "AI agents collaborate", "Research, product, growth, and technical models work together in parallel."],
            ["03", "Launch your startup kit", "Get strategy, pitch, MVP plan, and technical starter files for immediate action."],
          ].map(([step, title, text]) => (
            <div key={step} className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6">
              <div className="mb-4 text-sm font-semibold text-violet-300">{step}</div>
              <h3 className="text-xl font-semibold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="agents" className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-violet-300">Your team</p>
          <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">Specialized agents, one shared mission</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {[
            ["Idea Analyst", "Finds the real problem and the strongest startup angle."],
            ["Market Researcher", "Maps competitors, demand, and user opportunity."],
            ["Product Strategist", "Prioritizes features and turns the idea into an MVP."],
            ["Technical Builder", "Designs the architecture and creates starter code."],
          ].map(([name, text]) => (
            <div key={name} className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6">
              <div className="mb-4 h-10 w-10 rounded-full bg-gradient-to-br from-violet-500/20 to-cyan-400/20 ring-1 ring-violet-400/30" />
              <h3 className="text-lg font-semibold text-white">{name}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="pricing" className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">Pricing</p>
          <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">Simple plans for builders</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            ["Starter", "$0", ["1 active project", "Basic idea analysis", "Limited exports"], "Best for trying the workflow"],
            ["Pro", "$29", ["Unlimited projects", "Full AI agent workflow", "Export to PDF and Markdown"], "Most popular"],
            ["Team", "$99", ["Shared workspaces", "Team collaboration", "Priority generation"], "Scale your startup studio"],
          ].map(([name, price, features, badge]) => (
            <div key={name} className={`rounded-2xl border p-6 ${name === "Pro" ? "border-violet-500 bg-violet-500/10" : "border-slate-800 bg-slate-900/80"}`}>
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-white">{name}</h3>
                {name === "Pro" && (
                  <span className="rounded-full bg-violet-500/15 px-2 py-1 text-xs font-medium text-violet-200">{badge}</span>
                )}
              </div>
              <div className="mt-5 text-4xl font-black text-white">{price}<span className="text-base text-slate-400">/mo</span></div>
              <ul className="mt-5 space-y-3 text-sm text-slate-300">
                {features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-cyan-400" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link href="/dashboard" className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 px-5 py-3 font-semibold text-slate-950">
                Get started
              </Link>
            </div>
          ))}
        </div>
      </section>

      <footer className="relative z-10 border-t border-slate-800 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm text-slate-400 md:flex-row lg:px-8">
          <p>© 2026 StartupForge</p>
          <div className="flex gap-6">
            <Link href="#features">Features</Link>
            <Link href="#workflow">Workflow</Link>
            <Link href="#pricing">Pricing</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}














































































































