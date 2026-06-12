import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "durium — Space-Native AI Inference Chip",
  description:
    "A chip designed from first principles for orbital compute. Trade 40% peak FLOPS for 10× better annual chip mortality.",
};

const pillars = [
  {
    number: "01",
    title: "Triple Mode Redundancy",
    trade: "+3× area",
    gain: "~0 silent errors",
    detail:
      "Run every critical computation 3× simultaneously and vote on the result. Eliminates silent data corruption from cosmic-ray single-event upsets.",
    color: "#3ba4dc",
  },
  {
    number: "02",
    title: "Eliminate HBM",
    trade: "−50% bandwidth",
    gain: "5× lower annual failure",
    detail:
      "HBM is the most radiation-sensitive component in any modern AI accelerator. This chip is inference-only — radiation-tolerant alternatives are fully viable.",
    color: "#a78bfa",
  },
  {
    number: "03",
    title: "Deliberate Node Selection",
    trade: "−25% peak FLOPS",
    gain: "3–4× better rad tolerance",
    detail:
      "5–7nm, not 2nm. Smaller transistors are more radiation-vulnerable. We deliberately skip the bleeding edge for a more tolerant, commercially-priced process.",
    color: "#34d399",
  },
  {
    number: "04",
    title: "Graceful Degradation",
    trade: "−10% die efficiency",
    gain: "10–12yr satellite life",
    detail:
      "Chiplet array + hot spares. When one die fails, output drops 1/N — not zero. A node at 85% compute in year 8 rewrites lifetime economics entirely.",
    color: "#fb923c",
  },
];

const ladder = [
  { rung: 1, label: "Architecture Document", when: "Week 1", done: true },
  { rung: 2, label: "Open-Source RTL", when: "Month 1–3", done: false },
  { rung: 3, label: "Real Silicon via Open MPW", when: "Month 3–6", done: false },
  { rung: 4, label: "Academic Partner", when: "Month 2–4", done: false },
  { rung: 5, label: "Non-Dilutive Capital", when: "Month 4–6", done: false },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#05070f] text-[#e8eaf0]">
      {/* Star field via CSS */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {[...Array(60)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              left: `${(i * 137.5) % 100}%`,
              top: `${(i * 97.3) % 100}%`,
              width: i % 7 === 0 ? "2px" : "1px",
              height: i % 7 === 0 ? "2px" : "1px",
              opacity: 0.1 + (i % 5) * 0.08,
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        {/* Nav */}
        <nav className="sticky top-0 z-50 bg-[#05070f]/90 backdrop-blur border-b border-[#1e2535] px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded bg-gradient-to-br from-[#3ba4dc] to-[#1e3a5f] flex items-center justify-center text-sm">
              ⬡
            </div>
            <span className="font-mono font-semibold text-sm tracking-wider">
              durium
            </span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-[11px] tracking-widest uppercase text-[#7a8099] font-mono">
            <a href="#problem" className="hover:text-white transition-colors">Problem</a>
            <a href="#pillars" className="hover:text-white transition-colors">Pillars</a>
            <a href="#tco" className="hover:text-white transition-colors">TCO</a>
            <a href="#roadmap" className="hover:text-white transition-colors">Roadmap</a>
          </div>
        </nav>

        <div className="max-w-4xl mx-auto px-6 pb-24">
          {/* Hero */}
          <section className="pt-20 pb-16 border-b border-[#1e2535]">
            <p className="text-[11px] tracking-[0.2em] text-[#fb923c] uppercase font-mono mb-5">
              Space-Native AI Inference Chip
            </p>
            <h1 className="font-sans text-[clamp(36px,6vw,60px)] font-bold leading-[1.05] mb-6">
              Design for death.
              <br />
              <span className="text-[#3ba4dc]">Build to outlive.</span>
            </h1>
            <p className="text-[15px] leading-relaxed text-[#9aa3c0] max-w-xl mb-8">
              Every AI accelerator in orbit today was designed for a data center
              on Earth. When a chip dies in space, it stays dead. durium is the
              architecture of a chip designed from first principles around that
              constraint.
            </p>
            <div className="flex gap-8 flex-wrap">
              {[
                ["~0%", "silent error rate"],
                ["10–12yr", "satellite lifetime"],
                ["5–7nm", "process node"],
                ["RHBD", "hardening approach"],
              ].map(([v, l]) => (
                <div key={l}>
                  <div className="text-[#3ba4dc] font-sans font-bold text-2xl">{v}</div>
                  <div className="text-[10px] text-[#7a8099] tracking-widest uppercase mt-1 font-mono">{l}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Problem */}
          <section id="problem" className="py-16 border-b border-[#1e2535]">
            <p className="text-[10px] tracking-[0.15em] uppercase text-[#3ba4dc] font-mono mb-2">The Problem</p>
            <h2 className="font-sans text-[clamp(22px,3.5vw,32px)] font-bold leading-tight mb-4">
              Chips are the reason<br />space compute costs 4×
            </h2>
            <p className="text-[#9aa3c0] leading-relaxed max-w-xl mb-8">
              Launch cost is falling. Cooling is tractable. Power is abundant in
              orbit. The unsolved problem is chip mortality — dead chips
              accumulate, and nobody comes to fix them.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                ["40%", "Overprovisioning", "40% more hardware launched than needed, just to cover expected failures."],
                ["5 yrs", "Satellite useful life", "Terrestrial DCs last 15 years. Orbital nodes retire at 5 due to dead chips."],
                ["20 min", "To replace on Earth", "In space that failure is permanent for the satellite's entire life."],
                ["18×", "Monthly capex vs Earth", "SemiAnalysis traces this gap almost entirely to overprovisioning + short lifecycle."],
              ].map(([stat, label, sub]) => (
                <div key={label} className="bg-[#090d18] border border-[#1e2535] rounded-lg p-4">
                  <div className="font-sans font-bold text-3xl text-[#fb923c] leading-none">{stat}</div>
                  <div className="text-xs font-semibold text-white mt-2 mb-1">{label}</div>
                  <div className="text-[11px] text-[#7a8099] leading-relaxed">{sub}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Thesis */}
          <section className="py-16 border-b border-[#1e2535]">
            <p className="text-[10px] tracking-[0.15em] uppercase text-[#3ba4dc] font-mono mb-2">Core Thesis</p>
            <h2 className="font-sans text-[clamp(22px,3.5vw,32px)] font-bold mb-5">Trade FLOPS for lifetime.</h2>
            <div className="bg-gradient-to-br from-[#0d1a2e] to-[#091525] border-l-4 border-[#3ba4dc] border border-[#3ba4dc]/20 rounded-lg px-7 py-5 mb-5">
              <p className="font-sans font-semibold text-lg leading-snug text-white">
                &ldquo;Trade 40% peak FLOPS for 10× better annual chip mortality.&rdquo;
              </p>
            </div>
            <p className="text-[#9aa3c0] leading-relaxed max-w-xl">
              This trade is obviously wrong for Earth. It is obviously right for
              space. No existing chip has made it — because every existing chip
              was designed by an engineer optimizing for a benchmark, not for a
              satellite that cannot be serviced.
            </p>
          </section>

          {/* Pillars */}
          <section id="pillars" className="py-16 border-b border-[#1e2535]">
            <p className="text-[10px] tracking-[0.15em] uppercase text-[#3ba4dc] font-mono mb-2">Design Pillars</p>
            <h2 className="font-sans text-[clamp(22px,3.5vw,32px)] font-bold mb-2">Four decisions.<br />All wrong for Earth.</h2>
            <p className="text-[#9aa3c0] leading-relaxed max-w-xl mb-8">
              Each pillar makes a tradeoff that any Earth-focused chip designer
              would reject. In orbit, each tradeoff is the right call.
            </p>
            <div className="space-y-3">
              {pillars.map((p) => (
                <div
                  key={p.number}
                  className="bg-[#090d18] border border-[#1e2535] rounded-lg p-5"
                  style={{ borderLeftColor: p.color + "88", borderLeftWidth: "3px" }}
                >
                  <div className="flex items-start gap-4">
                    <span
                      className="font-mono text-[10px] font-semibold tracking-widest mt-1 shrink-0"
                      style={{ color: p.color }}
                    >
                      {p.number}
                    </span>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <span className="font-sans font-semibold text-[15px]">{p.title}</span>
                        <span className="text-[11px] bg-red-500/10 text-red-400 border border-red-500/20 rounded px-2 py-0.5 font-mono">
                          {p.trade}
                        </span>
                        <span className="text-[11px] bg-green-500/10 text-green-400 border border-green-500/20 rounded px-2 py-0.5 font-mono">
                          {p.gain}
                        </span>
                      </div>
                      <p className="text-[13px] text-[#9aa3c0] leading-relaxed">{p.detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* TCO */}
          <section id="tco" className="py-16 border-b border-[#1e2535]">
            <p className="text-[10px] tracking-[0.15em] uppercase text-[#3ba4dc] font-mono mb-2">TCO Impact</p>
            <h2 className="font-sans text-[clamp(22px,3.5vw,32px)] font-bold mb-4">What 10× mortality improvement does.</h2>
            <p className="text-[#9aa3c0] leading-relaxed max-w-xl mb-8">
              The 18× monthly capital cost gap traces almost entirely to
              overprovisioning and short satellite lifecycle. This chip attacks
              both directly.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-5">
              {[
                ["Hardware Overprovisioning", "40%", "5–10%", "−35pp"],
                ["Satellite Useful Life", "5 years", "10–12 years", "+100%"],
              ].map(([label, before, after, delta]) => (
                <div key={label} className="bg-[#090d18] border border-[#1e2535] rounded-lg p-5">
                  <div className="text-[10px] text-[#7a8099] tracking-widest uppercase font-mono mb-4">{label}</div>
                  <div className="flex items-center justify-between">
                    <div className="text-center">
                      <div className="text-[9px] text-[#7a8099] mb-1 uppercase tracking-widest font-mono">Today</div>
                      <div className="font-sans font-bold text-2xl text-[#fb923c]">{before}</div>
                    </div>
                    <div className="text-sm font-semibold text-green-400 font-mono">{delta}</div>
                    <div className="text-center">
                      <div className="text-[9px] text-[#7a8099] mb-1 uppercase tracking-widest font-mono">This Chip</div>
                      <div className="font-sans font-bold text-2xl text-green-400">{after}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-gradient-to-br from-[#0a1a0d] to-[#081408] border border-green-500/20 rounded-lg p-5">
              <p className="text-[10px] text-green-400 tracking-widest uppercase font-mono mb-2">
                Combined with eat-the-sun launch economics
              </p>
              <p className="text-[13px] text-[#b0bcd4] leading-relaxed">
                Google&apos;s feasibility study puts cost-competitiveness at $200/kg to
                orbit. Starship targets $250/kg. The eat-the-sun orbital ring targets
                ~$50/kg via mass driver. At that launch cost, combined with this
                chip&apos;s mortality profile, orbital compute TCO crosses below
                terrestrial{" "}
                <strong className="text-green-400">
                  a decade ahead of any existing model&apos;s projection
                </strong>
                . No other team attacks both dominant cost drivers simultaneously.
              </p>
            </div>
          </section>

          {/* Roadmap */}
          <section id="roadmap" className="py-16">
            <p className="text-[10px] tracking-[0.15em] uppercase text-[#3ba4dc] font-mono mb-2">Roadmap</p>
            <h2 className="font-sans text-[clamp(22px,3.5vw,32px)] font-bold mb-3">The credibility ladder.</h2>
            <p className="text-[#9aa3c0] leading-relaxed max-w-xl mb-8">
              Five rungs from zero to funded, with physical silicon in hand. No
              VC required to reach Rung 3.
            </p>
            <div className="bg-[#090d18] border border-[#1e2535] rounded-lg overflow-hidden">
              {ladder.map((r, i) => (
                <div
                  key={r.rung}
                  className={`flex items-center gap-5 px-6 py-5 ${i < ladder.length - 1 ? "border-b border-[#1e2535]" : ""}`}
                >
                  <div
                    className="shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center text-xs font-bold font-mono"
                    style={{
                      borderColor: r.done ? "#3ba4dc" : "#2a3045",
                      background: r.done ? "#3ba4dc1a" : "transparent",
                      color: r.done ? "#3ba4dc" : "#7a8099",
                    }}
                  >
                    {r.done ? "✓" : r.rung}
                  </div>
                  <div className="flex-1">
                    <div
                      className="font-sans font-semibold text-sm"
                      style={{ color: r.done ? "#e8eaf0" : "#9aa3c0" }}
                    >
                      {r.label}
                    </div>
                  </div>
                  <div
                    className="text-[10px] tracking-widest uppercase font-mono shrink-0"
                    style={{ color: r.done ? "#3ba4dc" : "#7a8099" }}
                  >
                    {r.when}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Footer */}
          <div className="border-t border-[#1e2535] pt-6 flex items-center justify-between flex-wrap gap-3">
            <p className="text-[10px] text-[#7a8099] font-mono tracking-widest uppercase">
              v0.1 Draft · June 2026 · All figures subject to revision
            </p>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded bg-gradient-to-br from-[#3ba4dc] to-[#1e3a5f] flex items-center justify-center text-xs">⬡</div>
              <span className="font-mono text-[11px] text-[#7a8099]">durium</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
