import React from 'react';
import NavBar from './components/NavBar';
import Hero3D from './components/Hero3D';
import Features from './components/Features';
import CTA from './components/CTA';
import InfiniteSections from './components/InfiniteSections';

function App() {
  return (
    <div className="bg-black text-white">
      <NavBar />
      <InfiniteSections>
        <Hero3D />
        <Features />
        <CTA />
        {/* Repeat a condensed hero to intensify the loop */}
        <Hero3D />
      </InfiniteSections>
    </div>
  );
}

export default App;
