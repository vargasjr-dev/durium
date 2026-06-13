import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "durium — Space-Native AI Inference Chip",
  description:
    "The first AI inference chip designed from first principles for orbital compute. We trade FLOPS for lifetime.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#05070f] text-[#e8eaf0] overflow-x-hidden">
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
              opacity: 0.05 + (i % 6) * 0.07,
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        {/* Nav */}
        <nav className="flex items-center justify-between px-8 py-5">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded bg-gradient-to-br from-[#3ba4dc] to-[#1a3a5c] flex items-center justify-center text-sm select-none">
              ⬡
            </div>
            <span className="font-mono font-semibold text-sm tracking-wider text-white">
              durium
            </span>
          </div>
          <Link
            href="/architecture"
            className="font-mono text-[11px] tracking-widest uppercase text-[#7a8099] hover:text-[#3ba4dc] transition-colors border border-[#1e2535] hover:border-[#3ba4dc44] rounded px-4 py-2"
          >
            Architecture Doc →
          </Link>
        </nav>

        {/* Hero */}
        <section className="max-w-4xl mx-auto px-8 pt-24 pb-20 text-center">
          <div className="inline-block font-mono text-[11px] tracking-[0.2em] uppercase text-[#fb923c] mb-8 px-3 py-1.5 border border-[#fb923c22] rounded-full bg-[#fb923c08]">
            Space-Native AI Inference
          </div>
          <h1
            className="font-sans font-bold leading-[1.05] mb-7"
            style={{ fontSize: "clamp(42px, 7vw, 76px)" }}
          >
            The chip orbit{" "}
            <span className="text-[#3ba4dc]">actually needs.</span>
          </h1>
          <p className="text-[17px] leading-relaxed text-[#7a8099] max-w-xl mx-auto mb-12">
            Every AI accelerator in orbit today was designed for a data center
            on Earth. When it dies in space, it stays dead.{" "}
            <span className="text-[#b0bcd4]">
              durium is built from first principles around that constraint.
            </span>
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link
              href="/architecture"
              className="font-mono text-sm font-semibold tracking-wider bg-[#3ba4dc] text-[#05070f] px-7 py-3 rounded-lg hover:bg-[#5bbcf0] transition-colors"
            >
              Read the Architecture Doc
            </Link>
            <a
              href="mailto:hello@vargasjr.dev?subject=durium partnership"
              className="font-mono text-sm tracking-wider text-[#7a8099] border border-[#1e2535] px-7 py-3 rounded-lg hover:border-[#3ba4dc44] hover:text-[#e8eaf0] transition-colors"
            >
              Get in touch
            </a>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-4xl mx-auto px-8">
          <div className="border-t border-[#1e2535]" />
        </div>

        {/* Stats */}
        <section className="max-w-4xl mx-auto px-8 py-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#1e2535] rounded-xl overflow-hidden border border-[#1e2535]">
            {[
              ["18×", "monthly capex gap today", "vs terrestrial compute"],
              ["40%", "hardware over-provisioned", "to cover dead chips"],
              ["5 yrs", "satellite life today", "vs 15 terrestrial"],
              ["~0%", "silent error rate", "with this architecture"],
            ].map(([stat, label, sub]) => (
              <div
                key={label}
                className="bg-[#090d18] px-6 py-8 text-center flex flex-col gap-1"
              >
                <div
                  className="font-sans font-bold text-[#3ba4dc]"
                  style={{ fontSize: "clamp(28px, 3.5vw, 40px)" }}
                >
                  {stat}
                </div>
                <div className="text-[13px] text-white font-medium mt-1">
                  {label}
                </div>
                <div className="text-[11px] text-[#7a8099]">{sub}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Thesis */}
        <section className="max-w-4xl mx-auto px-8 pb-20">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-[#0d1a2e] to-[#090d18] border border-[#1e2535] rounded-xl p-8">
              <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-[#3ba4dc] mb-4">
                The trade
              </div>
              <p className="font-sans font-bold text-[22px] leading-snug text-white mb-4">
                Sacrifice 40% peak FLOPS for 10× better chip mortality.
              </p>
              <p className="text-[13px] text-[#7a8099] leading-relaxed">
                Obviously wrong for Earth. Obviously right for space. No chip
                has made this trade because none was designed for a satellite
                that can&apos;t be serviced.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#0a1a0d] to-[#090d18] border border-[#1e2535] rounded-xl p-8">
              <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-[#34d399] mb-4">
                The unlock
              </div>
              <p className="font-sans font-bold text-[22px] leading-snug text-white mb-4">
                Better mortality collapses the 18× cost gap.
              </p>
              <p className="text-[13px] text-[#7a8099] leading-relaxed">
                SemiAnalysis traces the capex gap almost entirely to
                overprovisioning and short satellite life. This chip attacks
                both. Combined with mass-driver launch economics, orbital
                compute crosses below terrestrial a decade early.
              </p>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-4xl mx-auto px-8">
          <div className="border-t border-[#1e2535]" />
        </div>

        {/* Partners */}
        <section className="max-w-4xl mx-auto px-8 py-20">
          <div className="text-center mb-12">
            <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-[#3ba4dc] mb-3">
              Who we&apos;re building with
            </div>
            <h2
              className="font-sans font-bold"
              style={{ fontSize: "clamp(24px, 4vw, 36px)" }}
            >
              Looking for partners at every layer.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                icon: "🛰",
                title: "Orbital compute operators",
                body: "Starcloud, Axiom, and anyone launching AI into orbit. You need chips that don't die on you. We need a customer who can validate in real radiation.",
                tag: "Customer / Validation",
                tagColor: "#3ba4dc",
              },
              {
                icon: "🎓",
                title: "Academic labs",
                body: "Berkeley, MIT, Georgia Tech. We want to run proton beam and heavy-ion testing on real silicon. We bring the chip; you bring the beam line.",
                tag: "Research Partner",
                tagColor: "#a78bfa",
              },
              {
                icon: "⚡",
                title: "DARPA & DoD programs",
                body: "ERI, SBIR Phase I. The case for American space compute independence writes itself. We're drafting proposals and want program office introductions.",
                tag: "Non-dilutive capital",
                tagColor: "#34d399",
              },
            ].map(({ icon, title, body, tag, tagColor }) => (
              <div
                key={title}
                className="bg-[#090d18] border border-[#1e2535] rounded-xl p-6 hover:border-[#1e2535] group transition-all hover:bg-[#0d1525]"
              >
                <div className="text-2xl mb-4">{icon}</div>
                <div
                  className="font-mono text-[10px] tracking-widest uppercase mb-3 font-semibold"
                  style={{ color: tagColor }}
                >
                  {tag}
                </div>
                <h3 className="font-sans font-semibold text-[15px] text-white mb-3">
                  {title}
                </h3>
                <p className="text-[12px] text-[#7a8099] leading-relaxed">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-4xl mx-auto px-8 pb-24">
          <div className="bg-gradient-to-br from-[#0d1a2e] via-[#090d18] to-[#0a1a0d] border border-[#1e2535] rounded-2xl p-12 text-center">
            <h2
              className="font-sans font-bold mb-4"
              style={{ fontSize: "clamp(24px, 4vw, 40px)" }}
            >
              We&apos;re at Rung 1.
            </h2>
            <p className="text-[15px] text-[#7a8099] max-w-md mx-auto mb-8 leading-relaxed">
              Architecture document is live. Open-source RTL is next. Physical
              silicon via Google&apos;s Open MPW shuttle by month six — no VC
              required.
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <Link
                href="/architecture"
                className="font-mono text-sm font-semibold tracking-wider bg-[#3ba4dc] text-[#05070f] px-7 py-3 rounded-lg hover:bg-[#5bbcf0] transition-colors"
              >
                Read the Architecture Doc
              </Link>
              <a
                href="mailto:hello@vargasjr.dev?subject=durium partnership"
                className="font-mono text-sm tracking-wider text-[#7a8099] border border-[#1e2535] px-7 py-3 rounded-lg hover:border-[#3ba4dc44] hover:text-[#e8eaf0] transition-colors"
              >
                hello@vargasjr.dev
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-[#1e2535] px-8 py-6 flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded bg-gradient-to-br from-[#3ba4dc] to-[#1a3a5c] flex items-center justify-center text-xs">
              ⬡
            </div>
            <span className="font-mono text-[11px] text-[#7a8099]">
              durium
            </span>
          </div>
          <p className="font-mono text-[10px] text-[#7a8099] tracking-wider">
            v0.1 · June 2026
          </p>
        </footer>
      </div>
    </main>
  );
}
