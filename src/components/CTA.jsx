import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="relative min-h-screen w-full bg-black text-white py-24 snap-start">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_20%,rgba(59,130,246,0.15),transparent_40%),radial-gradient(circle_at_20%_80%,rgba(236,72,153,0.15),transparent_40%)]" />
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-300 via-sky-200 to-fuchsia-300 bg-clip-text text-transparent">
          Build without permission
        </h2>
        <p className="mt-4 text-white/70 max-w-2xl mx-auto">
          Join the Penguin network. Ship contracts, launch tokens, and move liquidity at terrifying speed.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a href="#" className="inline-flex items-center gap-2 rounded-md bg-white text-black px-6 py-3 font-semibold hover:bg-neutral-100">
            Get Started <ArrowRight className="h-4 w-4" />
          </a>
          <a href="#" className="rounded-md border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white/90 backdrop-blur-sm hover:bg-white/10">
            Read the whitepaper
          </a>
        </div>
      </div>
    </section>
  );
}
