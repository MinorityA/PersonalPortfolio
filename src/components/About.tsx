export function About() {
  return (
    <section id="about" className="section reveal" aria-labelledby="about-title">
      <div className="section-heading">
        <h2 id="about-title">About</h2>
      </div>
      <article className="card prose">
        <p>
          I’m an ML engineer focused on turning models into production systems. I enjoy both model 
          training and real-world deployment, with early experience in Multi-Object Tracking and SLAM.
        </p>
        <p>
          Right now, I am work on bringing state-of-the-art models onto an AI accelerator platform 
          with practical performance and reliability constraints.
        </p>
      </article>
    </section>
  );
}
