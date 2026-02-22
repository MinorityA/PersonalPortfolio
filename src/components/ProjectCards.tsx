import type { Project } from "@/content/types";

interface ProjectCardsProps {
  projects: Project[];
}

export function ProjectCards({ projects }: ProjectCardsProps) {
  return (
    <section id="projects" className="section reveal" aria-labelledby="projects-title">
      <div className="section-heading">
        <h2 id="projects-title">Projects</h2>
        <p>Selected work with impact, stack choices, and implementation ownership.</p>
      </div>
      <div className="project-grid">
        {projects.map((project) => (
          <article key={project.id} className="card project-card">
            <h3>{project.title}</h3>
            <p>{project.summary}</p>
            <p>
              <strong>Role:</strong> {project.role}
            </p>
            <p>
              <strong>Outcome:</strong> {project.outcome}
            </p>
            <ul className="chip-list" aria-label={`${project.title} technologies`}>
              {project.tech.map((tech) => (
                <li key={tech} className="chip">
                  {tech}
                </li>
              ))}
            </ul>
            <div className="project-links">
              {project.repoUrl ? (
                <a href={project.repoUrl} target="_blank" rel="noreferrer">
                  Repository
                </a>
              ) : null}
              {project.liveUrl ? (
                <a href={project.liveUrl} target="_blank" rel="noreferrer">
                  Live Demo
                </a>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
