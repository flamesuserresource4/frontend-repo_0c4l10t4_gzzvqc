import React, { useEffect, useRef } from 'react';

// Creates an infinite scroll loop by observing the last section and jumping back to the top seamlessly.
export default function InfiniteSections({ children }) {
  const containerRef = useRef(null);
  const sentinelRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const sentinel = sentinelRef.current;
    if (!container || !sentinel) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Smoothly jump back to the first section to create a loop
            container.scrollTo({ top: 0, behavior: 'smooth' });
          }
        });
      },
      { root: container, threshold: 0.9 }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      {children}
      {/* Sentinel element at bottom to trigger reset */}
      <div ref={sentinelRef} className="h-[1px] w-full" />
    </div>
  );
}
