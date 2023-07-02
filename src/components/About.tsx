import { useScrollPosition } from "../hooks/useScrollPosition";

export function About() {
  const scrollPosition = useScrollPosition();

  return (
    <section className="about">
      <h2>About Me</h2>
      <div className={scrollPosition > 100 ? 'content animated' : 'content'}>
        {/* About content */}
      </div>
    </section>
  );
}
