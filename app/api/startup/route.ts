"use client";

import { useState } from "react";

const defaultIdea =
  "A platform that helps homeowners book trustworthy cleaning, repairs, and home services in under 10 minutes.";

type StartupResponse = {
  name: string;
  problem: string;
  targetAudience: string[];
  market: string;
  valueProp: string;
  features: string[];
  revenueModel: string[];
  stack: string[];
  mvpRoadmap: string[];
  pitch: string;
};

const emptyResult: StartupResponse = {
  name: "",
  problem: "",
  targetAudience: [],
  market: "",
  valueProp: "",
  features: [],
  revenueModel: [],
  stack: [],
  mvpRoadmap: [],
  pitch: "",
};

export default function DashboardPage() {
  const [idea, setIdea] = useState(defaultIdea);
  const [result, setResult] = useState<StartupResponse>(emptyResult);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);

    try {
      const response = await fetch("/api/startup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ idea }),
      });

      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error(error);
      setResult({
        name: "IdeaPilot",
        problem: "Unable to validate the idea at the moment, but the direction is promising.",
        targetAudience: ["Founders", "Makers", "Product builders"],
        market: "General startup market",
        valueProp: "A guided AI workflow for validating and structuring startup ideas.",
        features: ["Idea analysis", "Market scan", "Startup roadmap", "MVP planning"],
        revenueModel: ["Subscription", "B2B SaaS", "Premium workspaces"],
        stack: ["Next.js", "TypeScript", "Tailwind", "PostgreSQL"],
        mvpRoadmap: ["Landing page", "Idea workflow", "Output dashboard", "Export features"],
        pitch: "Turning raw ideas into action-ready startup plans.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto flex max-w-7xl gap-6 px-6 py-6 lg:px-8">
        <aside className="hidden w-72 rounded-2xl border border-slate-800 bg-slate-900/80 p-4 lg:block">
          <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-cyan-400 font-bold text-slate-950">
              S
            </div>
            <div>
              <p className="text-lg font-semibold">StartupForge</p>
              <p className="text-xs text-slate-400">Founder workspace</p>
            </div>
          </div>

          <nav className="mt-6 space-y-2 text-sm text-slate-300">
            {[
              "Idea input",
              "Market scan",
              "Product strategy",
              "Technical plan",
              "Brand kit",
              "MVP roadmap",
              "Pitch deck",
            ].map((item, index) => (
              <div
                key={item}
                className={`rounded-xl px-3 py-2 ${index === 0 ? "bg-violet-500/10 text-violet-200 ring-1 ring-violet-500/30" : "hover:bg-slate-800"}`}
              >
                {item}
              </div>
            ))}
          </nav>
        </aside>

        <div className="flex-1 space-y-6">
          <header className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-violet-300">Startup copilot</p>
                <h1 className="mt-2 text-3xl font-bold text-white">Your AI startup studio</h1>
              </div>
              <a href="/" className="inline-flex items-center rounded-full border border-slate-700 px-3 py-2 text-sm text-slate-200 hover:border-slate-500">
                Back to homepage
              </a>
            </div>
          </header>

          <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
            <section className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-xl font-semibold text-white">Idea input</h2>
                <span className="rounded-full bg-emerald-500/15 px-2 py-1 text-xs font-medium text-emerald-300">
                  {loading ? "Processing..." : "Live"}
                </span>
              </div>

              <textarea
                className="min-h-[180px] w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-slate-100 outline-none placeholder:text-slate-500 focus:border-violet-500"
                value={idea}
                onChange={(event) => setIdea(event.target.value)}
                placeholder="Describe your startup idea..."
              />

              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <button
                  onClick={handleGenerate}
                  disabled={loading}
                  className="rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 px-5 py-3 font-semibold text-slate-950 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? "Generating..." : "Generate startup plan"}
                </button>
                <button className="rounded-full border border-slate-700 px-5 py-3 font-semibold text-slate-200">
                  Save draft
                </button>
              </div>
            </section>

            <section className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5">
              <h2 className="text-xl font-semibold text-white">Generated output</h2>
              <div className="mt-4 space-y-4 text-sm text-slate-300">
                <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-violet-300">Startup name</p>
                  <p className="mt-2 text-xl font-semibold text-white">{result.name || "Waiting for analysis"}</p>
                </div>

                <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-violet-300">Problem</p>
                  <p className="mt-2">{result.problem || "The agent will identify the core problem and opportunity."}</p>
                </div>

                <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-violet-300">Audience</p>
                  <p className="mt-2">
                    {result.targetAudience.length
                      ? result.targetAudience.join(", ")
                      : "Homeowners, renters, and operators."}
                  </p>
                </div>
              </div>
            </section>
          </div>

          <section className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-white">Agent view</h2>
              <span className="text-sm text-slate-400">7 agents active</span>
            </div>

            <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {[
                ["Idea Analyst", "Validating the startup angle"],
                ["Market Researcher", "Mapping the service demand"],
                ["Product Strategist", "Designing the MVP"],
                ["Technical Builder", "Selecting the stack"],
              ].map(([name, status]) => (
                <div key={name} className="rounded-xl border border-slate-800 bg-slate-950 p-4">
                  <div className="flex items-center justify-between">
                    <p className="font-medium text-white">{name}</p>
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  </div>
                  <p className="mt-3 text-sm text-slate-300">{status}</p>
                </div>
              ))}
            </div>
          </section>

          {result.name && (
            <section className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5">
                <h3 className="text-xl font-semibold text-white">Market & value</h3>
                <div className="mt-4 space-y-4 text-sm text-slate-300">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Market</p>
                    <p className="mt-2">{result.market}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Value proposition</p>
                    <p className="mt-2">{result.valueProp}</p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5">
                <h3 className="text-xl font-semibold text-white">Features & revenue</h3>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Features</p>
                    <ul className="mt-2 space-y-2 text-sm text-slate-300">
                      {result.features.map((feature) => (
                        <li key={feature}>• {feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Revenue</p>
                    <ul className="mt-2 space-y-2 text-sm text-slate-300">
                      {result.revenueModel.map((model) => (
                        <li key={model}>• {model}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5 lg:col-span-2">
                <h3 className="text-xl font-semibold text-white">MVP roadmap & stack</h3>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-400">MVP roadmap</p>
                    <ul className="mt-2 space-y-2 text-sm text-slate-300">
                      {result.mvpRoadmap.map((step) => (
                        <li key={step}>• {step}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Stack</p>
                    <ul className="mt-2 space-y-2 text-sm text-slate-300">
                      {result.stack.map((tool) => (
                        <li key={tool}>• {tool}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5 lg:col-span-2">
                <h3 className="text-xl font-semibold text-white">Pitch angle</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{result.pitch}</p>
              </div>
            </section>
          )}
        </div>
      </div>
    </main>
  );
}
