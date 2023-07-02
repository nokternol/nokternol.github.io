import { useScrollPosition } from "../hooks/useScrollPosition";

export function Projects() {
    const scrollPosition = useScrollPosition();

    return (
        <section className="projects">
            <h2>Projects</h2>
            <div className={scrollPosition > 100 ? 'content animated' : 'content'}>
                {/* Projects content */}
            </div>
        </section>
    );
}
