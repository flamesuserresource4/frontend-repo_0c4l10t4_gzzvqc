import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero3D() {
  return (
    <section className="relative h-screen w-full bg-black text-white overflow-hidden snap-start">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/44zrIZf-iQZhbQNQ/scene.splinecode" style={{ width: '100%,', height: '100%' }} />
      </div>

      {/* Holographic gradient overlays that don't block Spline interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/80" />
      <div className="pointer-events-none absolute -left-32 top-1/3 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 top-1/2 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          <span className="text-xs uppercase tracking-widest text-white/70">Open Source Crypto</span>
        </div>
        <h1 className="mt-6 text-5xl font-extrabold leading-tight tracking-tight md:text-7xl">
          PENGUIN
          <span className="block bg-gradient-to-r from-cyan-400 via-sky-300 to-fuchsia-400 bg-clip-text text-transparent">The Intimidating Chain</span>
        </h1>
        <p className="mt-5 max-w-2xl text-base md:text-lg text-white/70">
          A ruthless, zero-compromise platform for trustless value. Built in the open. Forged for speed.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a href="#" className="group relative overflow-hidden rounded-md bg-white text-black px-6 py-3 font-semibold">
            <span className="relative z-10">Launch Docs</span>
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-300 to-fuchsia-300 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </a>
          <a href="#" className="rounded-md border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white/90 backdrop-blur-sm hover:bg-white/10">
            GitHub
          </a>
        </div>
        <div className="mt-10 text-xs uppercase tracking-widest text-white/40">Scroll to descend</div>
      </div>
    </section>
  );
}
