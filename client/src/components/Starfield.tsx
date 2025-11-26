import { useEffect, useRef } from 'react';

export default function Starfield() {
  const starfieldRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!starfieldRef.current) return;

    // Generate background stars (static, no animation for performance)
    const numStars = 200;
    for (let i = 0; i < numStars; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.animationDelay = `${Math.random() * 3}s`;
      star.style.animationDuration = `${2 + Math.random() * 4}s`;
      starfieldRef.current.appendChild(star);
    }

    // Generate comets (shooting stars) - optimized count
    const numComets = 12;
    for (let i = 0; i < numComets; i++) {
      const comet = document.createElement('div');
      comet.className = 'comet';
      comet.style.top = `${Math.random() * 80}%`;
      comet.style.animationDelay = `${Math.random() * 15}s`;
      comet.style.animationDuration = `${6 + Math.random() * 8}s`;
      comet.setAttribute('data-speed', String(0.5 + Math.random() * 0.5)); // For parallax
      starfieldRef.current.appendChild(comet);
    }

    // Generate distant galaxies - optimized
    const numGalaxies = 20;
    for (let i = 0; i < numGalaxies; i++) {
      const galaxy = document.createElement('div');
      galaxy.className = 'galaxy';
      galaxy.style.left = `${Math.random() * 100}%`;
      galaxy.style.top = `${Math.random() * 100}%`;
      galaxy.style.animationDelay = `${Math.random() * 5}s`;
      galaxy.setAttribute('data-speed', String(0.2 + Math.random() * 0.3)); // Slower parallax
      starfieldRef.current.appendChild(galaxy);
    }

    // Parallax scrolling effect
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      // Apply parallax to comets
      const comets = starfieldRef.current?.querySelectorAll('.comet');
      comets?.forEach((comet) => {
        const speed = parseFloat(comet.getAttribute('data-speed') || '0.5');
        (comet as HTMLElement).style.transform = `translateY(${scrollY * speed}px)`;
      });

      // Apply parallax to galaxies (slower)
      const galaxies = starfieldRef.current?.querySelectorAll('.galaxy');
      galaxies?.forEach((galaxy) => {
        const speed = parseFloat(galaxy.getAttribute('data-speed') || '0.2');
        (galaxy as HTMLElement).style.transform = `translateY(${scrollY * speed}px)`;
      });
    };

    // Use passive listener for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div ref={starfieldRef} className="starfield" />
      {/* Milky Way SVG overlay */}
      <div className="milky-way-container">
        <svg className="milky-way" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
          <defs>
            <radialGradient id="milkyGradient" cx="50%" cy="50%">
              <stop offset="0%" stopColor="rgba(168, 139, 250, 0.3)" />
              <stop offset="50%" stopColor="rgba(168, 139, 250, 0.15)" />
              <stop offset="100%" stopColor="rgba(168, 139, 250, 0)" />
            </radialGradient>
          </defs>
          <ellipse cx="960" cy="540" rx="800" ry="200" fill="url(#milkyGradient)" opacity="0.6" transform="rotate(-30 960 540)" />
          <ellipse cx="960" cy="540" rx="700" ry="150" fill="url(#milkyGradient)" opacity="0.4" transform="rotate(-30 960 540)" />
        </svg>
      </div>
    </>
  );
}
