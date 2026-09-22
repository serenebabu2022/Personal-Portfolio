import "./App.css";

type Project = {
  number: string;
  title: string;
  description: string;
  stack: string;
  githubUrl?: string;
  accent: string;
};

const projects: Project[] = [
  {
    number: "01",
    title: "Project Atlas",
    description:
      "A full-stack project workspace for turning complex team workflows into clear, trackable progress.",
    stack: "React / TypeScript / Node.js",
    accent: "cyan",
  },
  {
    number: "02",
    title: "Data Pipeline Lab",
    description:
      "A Python service that processes, validates, and visualizes operational data for faster decisions.",
    stack: "Python / AWS / PostgreSQL",
    accent: "lime",
  },
  {
    number: "03",
    title: "Service Console",
    description:
      "A reliable internal dashboard for monitoring .NET services, deployments, and system health.",
    stack: "C# / .NET / Azure",
    accent: "orange",
  },
];

const technologies = [
  "React",
  "TypeScript",
  "JavaScript",
  "Python",
  "Node.js",
  "AWS",
  "C#",
  ".NET",
];

const experience = [
  {
    period: "2023 — Now",
    role: "Senior Full-Stack Developer",
    company: "Independent / Consulting",
    detail:
      "Building dependable products across frontend, APIs, data, and cloud infrastructure.",
  },
  {
    period: "2020 — 2023",
    role: "Software Developer",
    company: "Product & Platform Teams",
    detail:
      "Shipped customer-facing React applications and backend services in collaborative delivery teams.",
  },
];

const achievements = [
  { value: "8+", label: "years writing software" },
  { value: "30+", label: "projects shipped" },
  { value: "99.9%", label: "uptime targeted" },
];

function App() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Alex Morgan home">
          AM<span>_</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a className="nav-contact" href="#contact">
            Let's connect <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </header>

      <section className="hero-section" id="top" aria-labelledby="hero-title">
        <p className="eyebrow">
          Full-stack developer <span>React · TypeScript · Python · AWS</span>
        </p>
        <div className="hero-grid">
          <div>
            <p className="status-line">
              <span className="status-dot" aria-hidden="true" /> Available for
              select projects
            </p>
            <h1 id="hero-title">
              I build software
              <br />
              <em>that does the work.</em>
            </h1>
          </div>
          <div className="hero-aside">
            <p>
              Hi, I'm Alex. I turn ambiguous problems into clear, maintainable
              systems, from the first component to the last deployment.
            </p>
            <a className="scroll-link" href="#projects">
              Explore projects <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
        <div className="code-strip" aria-hidden="true">
          <span>const</span> craft = <b>[</b> "useful", "reliable", "human"{" "}
          <b>]</b>;
        </div>
      </section>

      <section className="stack-section" aria-labelledby="stack-title">
        <div>
          <p className="eyebrow">The toolkit</p>
          <h2 id="stack-title">
            Tools I use to
            <br />
            <em>make things move.</em>
          </h2>
        </div>
        <div className="technology-list">
          {technologies.map((technology, index) => (
            <span key={technology}>
              <small>{String(index + 1).padStart(2, "0")}</small>
              {technology}
            </span>
          ))}
        </div>
      </section>

      <section
        className="work-section"
        id="projects"
        aria-labelledby="projects-title"
      >
        <div className="section-heading">
          <p className="eyebrow">Selected projects</p>
          <h2 id="projects-title">
            Built, shipped,
            <br />
            <em>learned from.</em>
          </h2>
        </div>
        <div className="project-list">
          {projects.map((project) => (
            <article
              className={`project-card ${project.accent}`}
              key={project.number}
            >
              <div className="project-visual" aria-hidden="true">
                <span>{project.number}</span>
                <i />
                <b>./{project.title.toLowerCase().replaceAll(" ", "-")}</b>
              </div>
              <div className="project-copy">
                <p className="project-type">{project.stack}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                {project.githubUrl ? (
                  <a href={project.githubUrl} target="_blank" rel="noreferrer">
                    View on GitHub <span aria-hidden="true">↗</span>
                  </a>
                ) : (
                  <span className="coming-soon">GitHub link coming soon</span>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        className="experience-section"
        id="experience"
        aria-labelledby="experience-title"
      >
        <div>
          <p className="eyebrow">Experience</p>
          <h2 id="experience-title">
            A record of
            <br />
            <em>shipping well.</em>
          </h2>
        </div>
        <div className="experience-list">
          {experience.map((item) => (
            <article className="experience-item" key={item.period}>
              <p className="experience-period">{item.period}</p>
              <div>
                <h3>{item.role}</h3>
                <p className="experience-company">{item.company}</p>
                <p>{item.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        className="achievements-section"
        aria-labelledby="achievements-title"
      >
        <div>
          <p className="eyebrow">By the numbers</p>
          <h2 id="achievements-title">
            Small details.
            <br />
            <em>Solid results.</em>
          </h2>
        </div>
        <div className="achievement-list">
          {achievements.map((achievement) => (
            <div key={achievement.label}>
              <strong>{achievement.value}</strong>
              <span>{achievement.label}</span>
            </div>
          ))}
        </div>
      </section>

      <footer className="site-footer" id="contact">
        <div>
          <p className="eyebrow">Have a problem worth solving?</p>
          <h2>
            Let's build it
            <br />
            <em>properly.</em>
          </h2>
        </div>
        <div className="footer-links">
          <a className="email-link" href="mailto:hello@alexmorgan.dev">
            hello@alexmorgan.dev <span aria-hidden="true">↗</span>
          </a>
          <div>
            <a href="https://github.com/" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href="#top">LinkedIn</a>
            <a href="#top">Resume</a>
          </div>
        </div>
        <p className="copyright">© 2026 Alex Morgan</p>
      </footer>
    </main>
  );
}

export default App;
