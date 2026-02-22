import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { ProjectCards } from "@/components/ProjectCards";
import { StackGrid } from "@/components/StackGrid";
import { profile } from "@/content/profile";
import { projects } from "@/content/projects";
import { stack } from "@/content/stack";

export default function HomePage() {
  return (
    <>
      <header className="top-nav" aria-label="Section navigation">
        <nav>
          <a href="#stack">Stack</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      <main className="container">
        <Hero profile={profile} />
        <StackGrid categories={stack} />
        <ProjectCards projects={projects} />
        <About />
        <Contact links={profile.links} />
      </main>
    </>
  );
}
