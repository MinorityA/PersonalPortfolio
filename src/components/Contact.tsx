import type { ProfileLink } from "@/content/types";

interface ContactProps {
  links: ProfileLink[];
}

export function Contact({ links }: ContactProps) {
  return (
    <section id="contact" className="section reveal" aria-labelledby="contact-title">
      <div className="section-heading">
        <h2 id="contact-title">Contact</h2>
        <p>I am open to collaboration, product roles, and engineering consulting.</p>
      </div>
      <article className="card">
        <ul className="contact-list">
          {links.map((link) => (
            <li key={link.label}>
              <a href={link.href} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
}
