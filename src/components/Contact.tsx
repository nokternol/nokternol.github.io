import { useScrollPosition } from "../hooks/useScrollPosition";

export function Contact() {
    const scrollPosition = useScrollPosition();

    return (
        <section className="contact">
            <h2>Contact</h2>
            <div className={scrollPosition > 100 ? 'content animated' : 'content'}>
                {/* Contact content */}
            </div>
        </section>
    );
}
