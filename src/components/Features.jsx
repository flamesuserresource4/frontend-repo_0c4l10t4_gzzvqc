import React from 'react';
import { Shield, Zap, Globe, Lock } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Battle-hardened security',
    desc: 'Auditable primitives, aggressive invariants, and formal verifications where it counts.'
  },
  {
    icon: Zap,
    title: 'Brutal throughput',
    desc: 'Optimized execution with parallelism and zero-compromise finality.'
  },
  {
    icon: Globe,
    title: 'Truly open',
    desc: 'MIT-licensed core. Fork it, bend it, weaponize it. Transparency by default.'
  },
  {
    icon: Lock,
    title: 'Self-custody first',
    desc: 'No backdoors. No guardians. Keys rule everything around you.'
  }
];

export default function Features() {
  return (
    <section className="relative min-h-screen w-full bg-black text-white py-24 snap-start">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_10%,rgba(34,211,238,0.15),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(232,121,249,0.15),transparent_30%)]" />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="mb-12 flex items-end justify-between">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">Uncompromising primitives</h2>
          <span className="text-sm text-white/50">V1 • OSS</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1">
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-cyan-400/10 to-fuchsia-400/10" />
              <Icon className="h-8 w-8 text-cyan-300" />
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
