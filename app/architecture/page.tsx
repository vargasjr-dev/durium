"use client";

import Link from "next/link";
import { useState } from "react";

const BRAND_BLUE = "#3ba4dc";
const BRAND_ORANGE = "#fb923c";

const pillars = [
  {
    id: "tmr",
    number: "01",
    title: "Triple Mode Redundancy",
    subtitle: "Eliminate silent corruption",
    icon: "⚡",
    detail:
      "Run every critical computation 3× simultaneously and vote on the result. Eliminates silent data corruption from cosmic-ray single-event upsets — the leading cause of undetected inference errors in orbit. Costs 3× silicon area. In space, the alternative is silent wrong answers.",
    trade: "+3× area",
    gain: "~0 silent errors",
    color: "#3ba4dc",
  },
  {
    id: "memory",
    number: "02",
    title: "Eliminate HBM",
    subtitle: "Replace the most vulnerable component",
    icon: "🧠",
    detail:
      "HBM is the single most radiation-sensitive component in any modern AI accelerator. The industry standardized on it for training — but this chip is inference-only. Training requires inter-satellite bandwidth that does not yet exist. At inference-level bandwidth, radiation-tolerant alternatives are fully viable.",
    trade: "−50% bandwidth",
    gain: "5× lower annual failure",
    color: "#a78bfa",
  },
  {
    id: "node",
    number: "03",
    title: "Deliberate Node Selection",
    subtitle: "5–7nm, not 2nm",
    icon: "🔬",
    detail:
      "Smaller transistors are more vulnerable to radiation — a single ionizing particle disrupts a proportionally larger fraction of a 2nm gate than a 7nm gate. We deliberately do not chase the bleeding edge. 5–7nm hits the sweet spot: high enough performance for any inference workload, meaningfully more rad-tolerant, available at commercial fabs without defense-grade premiums.",
    trade: "−25% peak FLOPS",
    gain: "3–4× better rad tolerance",
    color: "#34d399",
  },
  {
    id: "chiplet",
    number: "04",
    title: "Graceful Degradation",
    subtitle: "Chiplet array with hot spares",
    icon: "🔷",
    detail:
      "Monolithic GPU dies fail catastrophically. This chip is an array of compute chiplets: when one dies, output drops by 1/N, not zero. With hot-spare tiles always in standby (e.g. 20 tiles, 4 in reserve), a satellite delivers 100% performance for years before any degradation begins. A node at 85% compute in year 8 rewrites lifetime economics entirely.",
    trade: "−10% die efficiency",
    gain: "10–12yr satellite life",
    color: "#fb923c",
  },
];

const ladder = [
  {
    rung: 1,
    label: "Architecture Document",
    sub: "Live on project site, downloadable as PDF",
    when: "Week 1",
    done: true,
  },
  {
    rung: 2,
    label: "Open-Source RTL",
    sub: "Gemmini fork + TMR module + chiplet degradation sim",
    when: "Month 1–3",
    done: false,
  },
  {
    rung: 3,
    label: "Real Silicon via Open MPW",
    sub: "Free shuttle, SkyWater 130nm — physical chips back in hand",
    when: "Month 3–6",
    done: false,
  },
  {
    rung: 4,
    label: "Academic Partner",
    sub: "Berkeley, MIT, or Georgia Tech for radiation validation",
    when: "Month 2–4",
    done: false,
  },
  {
    rung: 5,
    label: "Non-Dilutive Capital",
    sub: "DARPA ERI ($1–5M) or DoD SBIR Phase I ($150–300K)",
    when: "Month 4–6",
    done: false,
  },
];

const competitors = [
  {
    name: "Ramon.Space",
    approach: "RHBP — Hardening by Process",
    fab: "Specialty gov fabs",
    price: "$10K–$100K/chip",
    volume: "Low / gov",
    verdict: "gap",
  },
  {
    name: "NVIDIA (Earth)",
    approach: "Not hardened",
    fab: "TSMC 4nm",
    price: "Commercial",
    volume: "Massive",
    verdict: "wrong",
  },
  {
    name: "This Chip",
    approach: "RHBD — Hardening by Design",
    fab: "TSMC 5–7nm",
    price: "Commercial",
    volume: "High",
    verdict: "us",
  },
];

export default function ArchitecturePage() {
  const [activePillar, setActivePillar] = useState<string | null>(null);

  return (
    <main
      className="min-h-screen bg-[#05070f] text-[#e8eaf0]"
      style={{ fontFamily: "'IBM Plex Mono', monospace" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400;600&family=Space+Grotesk:wght@500;700&display=swap');
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-thumb { background: #3ba4dc44; border-radius: 2px; }
        .pcard { cursor: pointer; border: 1px solid #1e2535; border-radius: 8px; padding: 20px; transition: all 0.2s; background: #090d18; }
        .pcard:hover { background: #0d1525; }
        .tbadge { display: inline-block; background: #ff444422; color: #ff7777; border: 1px solid #ff444433; border-radius: 3px; padding: 2px 7px; font-size: 11px; }
        .gbadge { display: inline-block; background: #44ff8822; color: #66ffaa; border: 1px solid #44ff8833; border-radius: 3px; padding: 2px 7px; font-size: 11px; }
        @media print { nav, .noprint { display: none !important; } body, div { background: white !important; color: black !important; } }
      `}</style>

      {/* Stars */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              left: `${(i * 137.5) % 100}%`,
              top: `${(i * 97.3) % 100}%`,
              width: i % 7 === 0 ? "2px" : "1px",
              height: i % 7 === 0 ? "2px" : "1px",
              opacity: 0.04 + (i % 5) * 0.05,
            }}
          />
        ))}
      </div>

      {/* Nav */}
      <nav
        className="sticky top-0 z-50 border-b border-[#1e2535] px-8 py-3 flex items-center justify-between flex-wrap gap-3 noprint"
        style={{ background: "#05070fee", backdropFilter: "blur(12px)" }}
      >
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-6 h-6 rounded bg-gradient-to-br from-[#3ba4dc] to-[#1a3a5c] flex items-center justify-center text-xs">
              ⬡
            </div>
            <span className="text-[11px] text-[#7a8099] group-hover:text-white transition-colors tracking-wider">
              durium
            </span>
          </Link>
          <span className="text-[#1e2535]">/</span>
          <span
            className="text-[11px] tracking-widest uppercase"
            style={{ color: BRAND_BLUE }}
          >
            Architecture Doc
          </span>
          <span
            className="text-[10px] px-2 py-0.5 rounded border"
            style={{
              color: "#7a8099",
              borderColor: "#1e2535",
              background: "#090d18",
            }}
          >
            v0.1 · DRAFT
          </span>
        </div>
        <div className="flex items-center gap-3 flex-wrap">
          <div className="hidden md:flex gap-1">
            {[
              ["#problem", "Problem"],
              ["#thesis", "Thesis"],
              ["#pillars", "Pillars"],
              ["#tco", "TCO"],
              ["#moat", "Moat"],
              ["#roadmap", "Roadmap"],
            ].map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="text-[10px] tracking-widest uppercase text-[#7a8099] hover:text-white px-3 py-1.5 rounded border border-transparent hover:border-[#1e2535] transition-all"
              >
                {label}
              </a>
            ))}
          </div>
          <button
            onClick={() => window.print()}
            className="text-[11px] font-semibold tracking-wider px-4 py-2 rounded-md transition-colors noprint"
            style={{
              background: BRAND_BLUE,
              color: "#05070f",
              fontFamily: "inherit",
              border: "none",
              cursor: "pointer",
            }}
          >
            ↓ PDF
          </button>
        </div>
      </nav>

      <div
        className="relative z-10 max-w-[860px] mx-auto px-6 pb-24"
        style={{ fontFamily: "'IBM Plex Mono', monospace" }}
      >
        {/* Hero */}
        <div className="pt-16 pb-14 border-b border-[#1e2535]">
          <div
            className="text-[11px] tracking-[0.18em] uppercase mb-5"
            style={{ color: BRAND_ORANGE }}
          >
            Space-Native AI Inference Chip
          </div>
          <h1
            className="font-bold leading-[1.05] mb-5"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(30px, 5vw, 54px)",
            }}
          >
            Design for death.
            <br />
            <span style={{ color: BRAND_BLUE }}>Build to outlive.</span>
          </h1>
          <p
            className="leading-relaxed max-w-[540px] mb-8"
            style={{ fontSize: "14px", color: "#9aa3c0" }}
          >
            Every AI accelerator in orbit today was designed for a data center
            on Earth. When a chip dies in space, it stays dead. This is the
            architecture of a chip designed from first principles around that
            constraint.
          </p>
          <div className="flex gap-7 flex-wrap">
            {[
              ["~0%", "silent error rate"],
              ["10–12yr", "satellite lifetime"],
              ["5–7nm", "process node"],
              ["RHBD", "hardening approach"],
            ].map(([v, l]) => (
              <div key={l}>
                <div
                  className="font-bold"
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "24px",
                    color: BRAND_BLUE,
                  }}
                >
                  {v}
                </div>
                <div
                  className="uppercase tracking-widest mt-1"
                  style={{ fontSize: "10px", color: "#7a8099" }}
                >
                  {l}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Problem */}
        <section id="problem" className="py-14 border-b border-[#1e2535]">
          <div
            className="uppercase tracking-[0.15em] mb-2"
            style={{ fontSize: "10px", color: BRAND_BLUE }}
          >
            The Problem
          </div>
          <h2
            className="font-bold leading-tight mb-4"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(20px, 3vw, 30px)",
            }}
          >
            Chips are the reason
            <br />
            space compute costs 4×
          </h2>
          <p
            className="leading-relaxed max-w-[580px] mb-7"
            style={{ fontSize: "13px", color: "#9aa3c0" }}
          >
            The analysis converges: launch cost is falling, cooling is
            tractable, power is abundant in orbit. The unsolved problem is chip
            mortality. Dead chips accumulate. Nobody comes to fix them.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              [
                "40%",
                "Overprovisioning",
                "40% more hardware launched than needed just to cover expected failures.",
              ],
              [
                "5 yrs",
                "Satellite useful life",
                "Terrestrial DCs last 15 years. Orbital nodes retire at 5 due to dead chips.",
              ],
              [
                "20 min",
                "To replace on Earth",
                "In space that same failure is permanent for the satellite's life.",
              ],
              [
                "18×",
                "Monthly capex vs Earth",
                "SemiAnalysis traces this gap almost entirely to overprovisioning + short lifecycle.",
              ],
            ].map(([stat, label, sub]) => (
              <div
                key={label}
                className="rounded-lg p-4"
                style={{
                  background: "#090d18",
                  border: "1px solid #1e2535",
                }}
              >
                <div
                  className="font-bold leading-none"
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "30px",
                    color: BRAND_ORANGE,
                  }}
                >
                  {stat}
                </div>
                <div
                  className="font-semibold mt-2 mb-1"
                  style={{ fontSize: "12px", color: "#e8eaf0" }}
                >
                  {label}
                </div>
                <div style={{ fontSize: "11px", color: "#7a8099", lineHeight: "1.6" }}>
                  {sub}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Thesis */}
        <section id="thesis" className="py-14 border-b border-[#1e2535]">
          <div
            className="uppercase tracking-[0.15em] mb-2"
            style={{ fontSize: "10px", color: BRAND_BLUE }}
          >
            Core Thesis
          </div>
          <h2
            className="font-bold mb-5"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(20px, 3vw, 30px)",
            }}
          >
            Trade FLOPS for lifetime.
          </h2>
          <div
            className="rounded-lg px-7 py-5 mb-5"
            style={{
              background: "linear-gradient(135deg, #0d1a2e, #091525)",
              borderLeft: `3px solid ${BRAND_BLUE}`,
              border: `1px solid ${BRAND_BLUE}44`,
            }}
          >
            <p
              className="font-semibold leading-snug"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "18px",
                color: "#e8eaf0",
              }}
            >
              &ldquo;Trade 40% peak FLOPS for 10× better annual chip
              mortality.&rdquo;
            </p>
          </div>
          <p
            className="leading-relaxed max-w-[580px]"
            style={{ fontSize: "13px", color: "#9aa3c0" }}
          >
            This trade is obviously wrong for Earth. It is obviously right for
            space. No existing chip has made it — because every existing chip
            was designed by an engineer optimizing for a benchmark, not for a
            satellite that cannot be serviced.
          </p>
        </section>

        {/* Pillars */}
        <section id="pillars" className="py-14 border-b border-[#1e2535]">
          <div
            className="uppercase tracking-[0.15em] mb-2"
            style={{ fontSize: "10px", color: BRAND_BLUE }}
          >
            Design Pillars
          </div>
          <h2
            className="font-bold mb-2"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(20px, 3vw, 30px)",
            }}
          >
            Four decisions.
            <br />
            All wrong for Earth.
          </h2>
          <p
            className="leading-relaxed max-w-[580px] mb-7"
            style={{ fontSize: "13px", color: "#9aa3c0" }}
          >
            Each pillar makes a tradeoff that any Earth-focused chip designer
            would reject. In orbit, each is the right call. Click any to
            expand.
          </p>
          <div style={{ display: "grid", gap: "10px" }}>
            {pillars.map((p) => (
              <div
                key={p.id}
                className="pcard"
                style={{
                  borderColor:
                    activePillar === p.id ? p.color + "55" : "#1e2535",
                }}
                onClick={() =>
                  setActivePillar(activePillar === p.id ? null : p.id)
                }
              >
                <div className="flex items-center gap-3 flex-wrap">
                  <span
                    className="font-semibold tracking-widest"
                    style={{ fontSize: "10px", color: p.color, minWidth: "24px" }}
                  >
                    {p.number}
                  </span>
                  <span style={{ fontSize: "17px" }}>{p.icon}</span>
                  <div className="flex-1 min-w-0">
                    <div
                      className="font-semibold"
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: "15px",
                      }}
                    >
                      {p.title}
                    </div>
                    <div style={{ fontSize: "11px", color: "#7a8099", marginTop: "2px" }}>
                      {p.subtitle}
                    </div>
                  </div>
                  <div className="flex gap-1.5 flex-wrap">
                    <span className="tbadge">{p.trade}</span>
                    <span className="gbadge">{p.gain}</span>
                  </div>
                  <span
                    style={{
                      fontSize: "16px",
                      color: "#7a8099",
                      transform: activePillar === p.id ? "rotate(90deg)" : "none",
                      transition: "transform 0.2s",
                      marginLeft: "4px",
                    }}
                  >
                    ›
                  </span>
                </div>
                {activePillar === p.id && (
                  <div
                    style={{
                      marginTop: "14px",
                      paddingTop: "14px",
                      borderTop: `1px solid ${p.color}22`,
                      paddingLeft: "38px",
                    }}
                  >
                    <p
                      className="leading-relaxed"
                      style={{ fontSize: "13px", color: "#b0bcd4" }}
                    >
                      {p.detail}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* TCO */}
        <section id="tco" className="py-14 border-b border-[#1e2535]">
          <div
            className="uppercase tracking-[0.15em] mb-2"
            style={{ fontSize: "10px", color: BRAND_BLUE }}
          >
            TCO Impact
          </div>
          <h2
            className="font-bold mb-4"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(20px, 3vw, 30px)",
            }}
          >
            What 10× mortality improvement does.
          </h2>
          <p
            className="leading-relaxed max-w-[580px] mb-7"
            style={{ fontSize: "13px", color: "#9aa3c0" }}
          >
            The 18× monthly capital cost gap traces almost entirely to
            overprovisioning and short satellite lifecycle. This chip attacks
            both directly.
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-5">
            {[
              ["Hardware Overprovisioning", "40%", "5–10%", "−35pp"],
              ["Satellite Useful Life", "5 years", "10–12 years", "+100%"],
            ].map(([label, before, after, delta]) => (
              <div
                key={label}
                className="rounded-lg p-5"
                style={{ background: "#090d18", border: "1px solid #1e2535" }}
              >
                <div
                  className="uppercase tracking-widest mb-4"
                  style={{ fontSize: "10px", color: "#7a8099" }}
                >
                  {label}
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-center">
                    <div style={{ fontSize: "9px", color: "#7a8099", marginBottom: "3px" }}>TODAY</div>
                    <div
                      className="font-bold"
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: "24px",
                        color: BRAND_ORANGE,
                      }}
                    >
                      {before}
                    </div>
                  </div>
                  <div className="font-semibold" style={{ fontSize: "12px", color: "#34d399" }}>
                    {delta}
                  </div>
                  <div className="text-center">
                    <div style={{ fontSize: "9px", color: "#7a8099", marginBottom: "3px" }}>THIS CHIP</div>
                    <div
                      className="font-bold"
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: "24px",
                        color: "#34d399",
                      }}
                    >
                      {after}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div
            className="rounded-lg p-5"
            style={{
              background: "linear-gradient(135deg, #0a1a0d, #081408)",
              border: "1px solid #34d39933",
            }}
          >
            <div
              className="uppercase tracking-widest mb-2"
              style={{ fontSize: "10px", color: "#34d399" }}
            >
              Combined with eat-the-sun launch economics
            </div>
            <p className="leading-relaxed" style={{ fontSize: "13px", color: "#b0bcd4" }}>
              Google&apos;s feasibility study puts cost-competitiveness at $200/kg
              to orbit. Starship targets $250/kg. The eat-the-sun orbital ring
              targets ~$50/kg via mass driver. At that launch cost, combined
              with this chip&apos;s mortality profile, orbital compute TCO crosses
              below terrestrial{" "}
              <strong style={{ color: "#34d399" }}>
                a decade ahead of any existing model&apos;s projection
              </strong>
              . No other team attacks both dominant cost drivers simultaneously.
            </p>
          </div>
        </section>

        {/* Moat */}
        <section id="moat" className="py-14 border-b border-[#1e2535]">
          <div
            className="uppercase tracking-[0.15em] mb-2"
            style={{ fontSize: "10px", color: BRAND_BLUE }}
          >
            Competitive Moat
          </div>
          <h2
            className="font-bold mb-4"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(20px, 3vw, 30px)",
            }}
          >
            Where everyone else stops.
          </h2>
          <div style={{ overflowX: "auto", marginBottom: "20px" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: "12px",
                minWidth: "500px",
              }}
            >
              <thead>
                <tr style={{ borderBottom: "1px solid #1e2535" }}>
                  {["Player", "Hardening", "Fab", "Unit Price", "Volume"].map(
                    (h) => (
                      <th
                        key={h}
                        style={{
                          textAlign: "left",
                          padding: "9px 14px",
                          fontSize: "10px",
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          color: "#7a8099",
                          fontWeight: 500,
                        }}
                      >
                        {h}
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody>
                {competitors.map((c) => (
                  <tr
                    key={c.name}
                    style={{
                      borderBottom: "1px solid #1e2535",
                      background: c.verdict === "us" ? "#0a1e0b" : "transparent",
                    }}
                  >
                    <td
                      style={{
                        padding: "13px 14px",
                        fontWeight: 600,
                        color: c.verdict === "us" ? "#34d399" : "#9aa3c0",
                      }}
                    >
                      {c.verdict === "us" && (
                        <span style={{ color: BRAND_BLUE, marginRight: "5px" }}>
                          →
                        </span>
                      )}
                      {c.name}
                    </td>
                    <td style={{ padding: "13px 14px", color: "#9aa3c0" }}>
                      {c.approach}
                    </td>
                    <td style={{ padding: "13px 14px", color: "#9aa3c0" }}>
                      {c.fab}
                    </td>
                    <td
                      style={{
                        padding: "13px 14px",
                        color: c.verdict === "gap" ? BRAND_ORANGE : "#9aa3c0",
                      }}
                    >
                      {c.price}
                    </td>
                    <td style={{ padding: "13px 14px", color: "#9aa3c0" }}>
                      {c.volume}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: "12px", color: "#7a8099", lineHeight: "1.7", maxWidth: "560px" }}>
            Ramon.Space proves the market exists. They cannot serve it at scale
            — defense-process pricing locks them into government contracts. No
            commercial orbital compute operator can build a business on $100K
            chips. We fill that gap: commercial fab, commercial pricing,
            space-native design.
          </p>
        </section>

        {/* Roadmap */}
        <section id="roadmap" className="py-14">
          <div
            className="uppercase tracking-[0.15em] mb-2"
            style={{ fontSize: "10px", color: BRAND_BLUE }}
          >
            Roadmap
          </div>
          <h2
            className="font-bold mb-3"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(20px, 3vw, 30px)",
            }}
          >
            The credibility ladder.
          </h2>
          <p
            className="leading-relaxed max-w-[580px] mb-7"
            style={{ fontSize: "13px", color: "#9aa3c0" }}
          >
            Five rungs from zero to funded, with physical silicon in hand. No
            VC required to reach Rung 3.
          </p>
          <div
            className="rounded-lg overflow-hidden"
            style={{ background: "#090d18", border: "1px solid #1e2535" }}
          >
            {ladder.map((r, i) => (
              <div
                key={r.rung}
                style={{
                  padding: "18px 22px",
                  borderBottom: i < ladder.length - 1 ? "1px solid #1e2535" : "none",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "16px",
                }}
              >
                <div
                  style={{
                    minWidth: "34px",
                    height: "34px",
                    borderRadius: "50%",
                    border: `2px solid ${r.done ? BRAND_BLUE : "#2a3045"}`,
                    background: r.done ? "#3ba4dc1a" : "transparent",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "12px",
                    fontWeight: 700,
                    color: r.done ? BRAND_BLUE : "#7a8099",
                    flexShrink: 0,
                    marginTop: "2px",
                  }}
                >
                  {r.done ? "✓" : r.rung}
                </div>
                <div style={{ flex: 1 }}>
                  <div
                    className="font-semibold"
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "14px",
                      color: r.done ? "#e8eaf0" : "#9aa3c0",
                      marginBottom: "3px",
                    }}
                  >
                    {r.label}
                  </div>
                  <div style={{ fontSize: "11px", color: "#7a8099", lineHeight: "1.5" }}>
                    {r.sub}
                  </div>
                </div>
                <div
                  className="uppercase tracking-widest"
                  style={{
                    fontSize: "10px",
                    color: r.done ? BRAND_BLUE : "#7a8099",
                    flexShrink: 0,
                    paddingTop: "3px",
                  }}
                >
                  {r.when}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <div
          className="border-t border-[#1e2535] pt-6 flex items-center justify-between flex-wrap gap-3"
          style={{ fontSize: "10px", color: "#7a8099" }}
        >
          <span className="tracking-widest uppercase">
            v0.1 Draft · June 2026 · All figures subject to revision
          </span>
          <button
            onClick={() => window.print()}
            className="noprint"
            style={{
              background: BRAND_BLUE,
              color: "#05070f",
              border: "none",
              borderRadius: "5px",
              padding: "8px 16px",
              fontSize: "11px",
              fontWeight: 600,
              cursor: "pointer",
              fontFamily: "inherit",
              letterSpacing: "0.04em",
            }}
          >
            ↓ Download PDF
          </button>
        </div>
      </div>
    </main>
  );
}
