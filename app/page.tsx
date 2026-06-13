import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "durium — Space-Native AI Inference Chip",
  description:
    "The first AI inference chip designed from first principles for orbital compute.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#05070f] text-[#e8eaf0] flex flex-col overflow-hidden">
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
              opacity: 0.04 + (i % 6) * 0.06,
            }}
          />
        ))}
      </div>

      {/* Nav */}
      <nav className="relative z-10 flex items-center justify-between px-6 py-5">
        <div className="flex items-center gap-2.5">
          <div className="w-6 h-6 rounded bg-gradient-to-br from-[#3ba4dc] to-[#1a3a5c] flex items-center justify-center text-xs select-none">
            ⬡
          </div>
          <span className="font-mono font-semibold text-sm tracking-wider">
            durium
          </span>
        </div>
        <Link
          href="/architecture"
          className="font-mono text-xs tracking-widest uppercase text-[#7a8099] hover:text-[#3ba4dc] transition-colors"
        >
          Architecture →
        </Link>
      </nav>

      {/* Hero */}
      <section className="relative z-10 flex flex-col items-center text-center px-6 pt-16 pb-14">
        <div className="inline-flex items-center gap-2 border border-[#3ba4dc22] rounded-full px-4 py-1.5 text-xs font-mono tracking-[0.18em] uppercase text-[#3ba4dc] bg-[#3ba4dc08] mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#3ba4dc] animate-pulse" />
          Architecture document live
        </div>

        <h1
          className="font-sans font-bold tracking-tight leading-[1.0] mb-5 max-w-xs sm:max-w-lg"
          style={{ fontSize: "clamp(40px, 10vw, 72px)" }}
        >
          The chip orbit
          <br />
          <span className="text-[#3ba4dc]">actually needs.</span>
        </h1>

        <p className="font-sans text-[#7a8099] max-w-sm leading-relaxed mb-8 text-base">
          Every AI accelerator in orbit was designed for Earth. When it dies in
          space, it stays dead.{" "}
          <span className="text-[#b0bcd4]">
            durium is built around that constraint.
          </span>
        </p>

        <div className="flex flex-col sm:flex-row gap-3 items-center">
          <Link
            href="/architecture"
            className="font-mono font-semibold text-sm tracking-wider bg-[#3ba4dc] text-[#05070f] px-7 py-3 rounded-lg hover:bg-[#5bbcf0] transition-colors"
          >
            Read the Architecture Doc
          </Link>
          <a
            href="mailto:hello@vargasjr.dev?subject=durium"
            className="font-mono text-sm tracking-wider text-[#7a8099] hover:text-[#e8eaf0] transition-colors"
          >
            Get in touch →
          </a>
        </div>
      </section>

      {/* Three pillars */}
      <section className="relative z-10 px-6 pb-16 max-w-2xl mx-auto w-full">
        <div className="grid md:grid-cols-3 gap-px bg-[#1e2535] rounded-xl overflow-hidden border border-[#1e2535]">
          {[
            [
              "Trade FLOPS for lifetime.",
              "−40% peak compute for 10× better annual chip mortality.",
            ],
            [
              "No HBM. No 2nm.",
              "Skip the most radiation-sensitive parts by design, not process.",
            ],
            [
              "Fails gracefully.",
              "Chiplet array with hot spares. 85% compute in year 8, not zero.",
            ],
          ].map(([title, body]) => (
            <div key={title} className="bg-[#090d18] px-5 py-6">
              <p className="font-sans font-semibold text-sm text-white mb-1.5">
                {title}
              </p>
              <p className="font-sans text-xs text-[#7a8099] leading-relaxed">
                {body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 mt-auto py-5 text-center font-mono text-[10px] text-[#2a3045] tracking-widest uppercase">
        durium · June 2026
      </footer>
    </main>
  );
}
