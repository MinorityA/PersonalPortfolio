import type { Profile } from "@/content/types";

interface HeroProps {
  profile: Profile;
}

export function Hero({ profile }: HeroProps) {
  return (
    <section className="hero reveal">
      <p className="eyebrow">Portfolio</p>
      <h1>{profile.name}</h1>
      <p className="headline">{profile.headline}</p>
      <p className="body">{profile.bio}</p>
      <div className="actions">
        <a className="btn btn-primary" href="#projects">
          View Projects
        </a>
        <a className="btn btn-secondary" href="#contact">
          Contact
        </a>
      </div>
      {profile.location ? <p className="meta">Based in {profile.location}</p> : null}
    </section>
  );
}
