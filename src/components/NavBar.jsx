import React from 'react';

export default function NavBar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-md border-b border-white/10">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 text-white">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-sm bg-gradient-to-tr from-cyan-400 to-fuchsia-400" />
          <span className="font-semibold tracking-wide">Penguin</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
          <a href="#" className="hover:text-white">Docs</a>
          <a href="#" className="hover:text-white">Ecosystem</a>
          <a href="#" className="hover:text-white">Community</a>
          <a href="#" className="rounded-md border border-white/20 bg-white/5 px-3 py-1.5 hover:bg-white/10">Launch</a>
        </nav>
      </div>
    </header>
  );
}
