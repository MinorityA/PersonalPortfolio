import type { StackCategory } from "@/content/types";

interface StackGridProps {
  categories: StackCategory[];
}

export function StackGrid({ categories }: StackGridProps) {
  return (
    <section id="stack" className="section reveal" aria-labelledby="stack-title">
      <div className="section-heading">
        <h2 id="stack-title">Tech Stack</h2>
        <p>The tools and systems I use to train, optimize, deploy, and monitor ML models in production.</p>
      </div>
      <div className="stack-grid">
        {categories.map((category) => (
          <article key={category.name} className="card">
            <h3>{category.name}</h3>
            <ul className="stack-list">
              {category.items.map((item) => (
                <li key={item.label}>
                  <span>{item.label}</span>
                  {item.level ? <span className="badge">{item.level}</span> : null}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
