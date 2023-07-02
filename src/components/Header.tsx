import { Parallax } from 'react-scroll-parallax';
import { useScrollPosition } from "../hooks/useScrollPosition";
export function Header() {
  const scrollPosition = useScrollPosition();
  return (
    <header>
      {/* Navigation menu */}
      <nav className={scrollPosition > 100 ? 'sticky' : ''}>
        {/* Navigation links */}
      </nav>

      {/* Hero section */}
      <div className="hero">
        <Parallax translateY={[30, -30]}>
          <h1>Mark Butterworth</h1>
        </Parallax>
        <Parallax translateY={[-20, 20]}>
          <p>Full Stack Developer</p>
        </Parallax>
      </div>
    </header>
  );
}