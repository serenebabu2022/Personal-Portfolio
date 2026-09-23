import "./App.css";
import profileImage from "./assets/profile.png";
import SpaceplorerImage from "./assets/spaceplorer.jpg";
import RentaraImage from "./assets/rentara.jpg";
import MovieListingImage from "./assets/movieListing.jpg";
import resume from "./assets/resume.pdf";

type Project = {
  number: string;
  title: string;
  description: string;
  stack: string;
  githubUrl?: string;
  image: string;
  liveUrl?: string;
};

const projects: Project[] = [
  {
    number: "01",
    title: "Spaceplorer",
    description:
      "A full-stack web application that allows users to explore NASA's space data",
    stack:
      "React / TypeScript / Node.js / Express / AWS / Jest / React Testing Library",
    githubUrl: "https://github.com/serenebabu2022/Spaceplorer",
    liveUrl: "https://spaceplorer-ijto.onrender.com/",
    image: SpaceplorerImage,
  },
  {
    number: "02",
    title: "Movie Listing App",
    description:
      "React and TypeScript application for browsing movies and TV series using the TMDB API, deployed to AWS S3",
    stack: "React / TypeScript / AWS / S3",
    githubUrl: "https://github.com/serenebabu2022/labMoviesApp",
    liveUrl: "https://github.com/serenebabu2022/labMoviesApp",
    image: MovieListingImage,
  },
  {
    number: "03",
    title: "Rentara",
    description:
      "React application for a rental service, with focus on UX and accessibility",
    stack: "React / TypeScript / UX / WCAG",
    githubUrl: "https://github.com/serenebabu2022/Rentara",
    liveUrl: "https://rentara.netlify.app/",
    image: RentaraImage,
  },
];

const skillGroups = [
  {
    title: "Frontend",
    skills: [
      "React",
      "Next.js",
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "C#",
      ".NET",
      "ASP.NET Core",
      "Python",
      "Flask",
    ],
  },
  {
    title: "Databases",
    skills: ["SQL Server", "PostgreSQL", "NoSQL"],
  },
  {
    title: "Programming Languages",
    skills: ["Python", "TypeScript", "JavaScript", "C#"],
  },
  {
    title: "ORM / Data Access",
    skills: ["Entity Framework Core", "LINQ"],
  },
  {
    title: "Cloud",
    skills: ["AWS Cloud Services"],
  },
  {
    title: "DevOps & Tools",
    skills: ["CI/CD Pipelines", "Git", "GitHub", "GitLab", "Docker", "Jira"],
  },
  {
    title: "AI Assisted Development",
    skills: ["Copilot", "Claude"],
  },
];

const experience = [
  {
    period: "Sept 2025 — Present",
    role: "Full Stack Developer",
    company: "Caddayn, Remote",
    detail:
      "Built ASP.NET Core (.NET 8) Web APIs using C#, Entity Framework Core, LINQ, SQL Server and containerized using Docker for ERP-based employee management system",
  },
  {
    period: "Dec 2024 — Sept 2025",
    role: "Full Stack Developer Volunteer",
    company: "Orcawise, Dublin, Ireland",
    detail:
      "Developed a GenAI-powered chatbot platform using React (TypeScript) and Python Flask APIs. Integrated OpenAI LLMs and worked with LangChain-based RAG pipelines using embeddings and FAISS vector storage.",
  },
  {
    period: "Nov 2022 — Aug 2023",
    role: "Front-End Developer",
    company: " Springpeople Software Pvt Ltd.",
    detail:
      "Developed responsive product platform using HTML, CSS, Javascript and jQuery, that can render dynamically managed content within a headless CMS-style architecture",
  },
  {
    period: "Apr 2022 — Nov 2022",
    role: "Software Development Engineer",
    company: "Cloudegic Inc",
    detail:
      "Built full-stack applications with React (TypeScript) frontend, Node.js/MongoDB backend, unit tested with Jest and React Testing Library, and deployed to AWS.",
  },
];

// const achievements = [
//   { value: "8+", label: "years writing software" },
//   { value: "30+", label: "projects shipped" },
//   { value: "99.9%", label: "uptime targeted" },
// ];

function App() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Serene Babu home">
          SB<span>_</span>
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
          <div className="hero-right">
            <div
              className="profile-image"
              aria-label="Profile photo placeholder"
            >
              <img
                src={profileImage}
                alt="Serene"
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                }}
              />
            </div>
            <div className="hero-aside">
              <p>
                Hi, I'm Serene. I turn ambiguous problems into clear,
                maintainable systems, from the first component to the last
                deployment.
              </p>
              <div className="hero-projects-resume">
                <a className="scroll-link" href="#projects">
                  Explore projects <span aria-hidden="true">↓</span>
                </a>
                <a
                  className="resume-link"
                  href={resume}
                  download="Serene-Babu-CV.pdf"
                >
                  Resume <span aria-hidden="true">↓</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="code-strip" aria-hidden="true">
          <span>const</span> craft = <b>[</b> "useful", "reliable", "human"{" "}
          <b>]</b>;
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
              className={`project-card ${project.number}`}
              key={project.number}
            >
              <a
                className="project-visual"
                href={project.liveUrl ? project.liveUrl : "#"}
                target="_blank"
                rel="noreferrer"
              >
                <img src={project.image} alt={`${project.title} preview`} />
                {/* <span>{project.number}</span>
                <i /> */}
                {/* <b>./{project.title.toLowerCase().replaceAll(" ", "-")}</b> */}
              </a>
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
      <section className="stack-section" aria-labelledby="stack-title">
        <div>
          <p className="eyebrow">The toolkit</p>
          <h2 id="stack-title">
            Tools I use to
            <br />
            <em>make things move.</em>
          </h2>
        </div>
        <div className="skill-card-grid">
          {skillGroups.map((group, index) => (
            <article className="skill-card" key={group.title}>
              <div className="skill-card-header">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{group.title}</h3>
              </div>
              <ul>
                {group.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* <section
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
      </section> */}

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
          <a
            className="email-link"
            href="mailto:serenedev.cold361@slmails.com?subject=Portfolio%20Enquiry"
          >
            Email me <span aria-hidden="true">↗</span>
          </a>
          <div>
            <a
              href="https://github.com/serenebabu2022"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/serene-babu-377974147/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <p className="copyright">© 2026 Serene Babu</p>
      </footer>
    </main>
  );
}

export default App;
