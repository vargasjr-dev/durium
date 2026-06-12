# durium

**Space-native AI inference chip.** Designed from first principles for orbital compute.

> "Trade 40% peak FLOPS for 10× better annual chip mortality."

## The Thesis

Every AI accelerator in orbit today was designed for a data center on Earth. When a chip dies in space, it stays dead. durium is built around that constraint.

## Four Design Pillars

1. **Triple Mode Redundancy** — run 3× simultaneously, vote on result. ~0 silent errors.
2. **Eliminate HBM** — most radiation-sensitive component. −50% bandwidth, 5× lower annual failure.
3. **Deliberate Node Selection** — 5–7nm, not 2nm. More rad-tolerant, commercial fabs, no defense premium.
4. **Graceful Degradation** — chiplet array + hot spares. Satellite delivers 85% compute in year 8, not zero.

## Site

[durium.vercel.app](https://durium.vercel.app)

## Credibility Ladder

- [x] Architecture Document (Week 1)
- [ ] Open-Source RTL — Gemmini fork + TMR module (Month 1–3)
- [ ] Real Silicon via Open MPW — SkyWater 130nm (Month 3–6)
- [ ] Academic Partner — radiation validation (Month 2–4)
- [ ] Non-Dilutive Capital — DARPA ERI / DoD SBIR (Month 4–6)
