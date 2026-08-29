import { useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Download,
  ExternalLink,
  Menu,
  X,
  Code2,
  Database,
  Cloud,
  BrainCircuit,
} from "lucide-react";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const projects = [
    {
      title: "AI Web Application",
      description:
        "A modern web application integrating AI features with a clean and responsive user interface.",
      tech: ["React", "Python", "AI"],
      github: "#",
      demo: "#",
    },
    {
      title: "Student Management System",
      description:
        "A full-stack system for managing students, courses, records and academic information.",
      tech: ["Laravel", "PHP", "MySQL"],
      github: "#",
      demo: "#",
    },
    {
      title: "Developer Portfolio",
      description:
        "A responsive personal portfolio built with React to showcase my skills and projects.",
      tech: ["React", "JavaScript", "CSS"],
      github: "#",
      demo: "#",
    },
  ];

  const skills = [
    {
      icon: <Code2 size={28} />,
      title: "Programming",
      items: ["Python", "Java", "JavaScript", "C#", "PHP"],
    },
    {
      icon: <Code2 size={28} />,
      title: "Web Development",
      items: ["React", "Laravel", "HTML", "CSS", "JavaScript"],
    },
    {
      icon: <Database size={28} />,
      title: "Database",
      items: ["MySQL", "SQL", "MongoDB"],
    },
    {
      icon: <Cloud size={28} />,
      title: "Tools & Cloud",
      items: ["Git", "GitHub", "VS Code", "Cloud"],
    },
  ];

  return (
    <div className="app">
      {/* NAVBAR */}
      <header className="navbar">
        <div className="container nav-content">
          <a href="#home" className="logo">
            HZT<span>.</span>
          </a>

          <nav className={menuOpen ? "nav-links active" : "nav-links"}>
            <a href="#home" onClick={() => setMenuOpen(false)}>
              Home
            </a>
            <a href="#about" onClick={() => setMenuOpen(false)}>
              About
            </a>
            <a href="#skills" onClick={() => setMenuOpen(false)}>
              Skills
            </a>
            <a href="#projects" onClick={() => setMenuOpen(false)}>
              Projects
            </a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>
          </nav>

          <button
            className="menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* HERO */}
      <main>
        <section id="home" className="hero">
          <div className="hero-bg"></div>

          <div className="container hero-grid">
            <div className="hero-text">
              <p className="eyebrow">HELLO, I'M</p>

              <h1>
                Hein Zayar
                <span> Tun.</span>
              </h1>

              <h2>
                Software Developer <span>•</span> AI Explorer
              </h2>

              <p className="hero-description">
                I build modern web applications and explore the intersection
                of software engineering, artificial intelligence and cloud
                technologies.
              </p>

              <div className="hero-buttons">
                <a href="#projects" className="btn primary">
                  View Projects
                  <ExternalLink size={18} />
                </a>

                <a href="/Hein-Zayar-Tun-CV.pdf" className="btn secondary">
                  Download CV
                  <Download size={18} />
                </a>
              </div>

              <div className="socials">
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github size={21} />
                </a>

                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Linkedin size={21} />
                </a>

                <a href="mailto:your-email@example.com">
                  <Mail size={21} />
                </a>
              </div>
            </div>

            {/* PROFILE MODEL */}
            <div className="model-area">
              <div className="model-glow"></div>

              <div className="developer-model">
                <div className="model-circle">
                  <BrainCircuit size={95} />
                </div>

                <div className="model-card card-one">
                  <span>01</span>
                  <p>React</p>
                </div>

                <div className="model-card card-two">
                  <span>02</span>
                  <p>Python</p>
                </div>

                <div className="model-card card-three">
                  <span>03</span>
                  <p>Cloud</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section">
          <div className="container">
            <div className="section-heading">
              <p>01 — ABOUT ME</p>
              <h2>Building my future with technology.</h2>
            </div>

            <div className="about-grid">
              <div>
                <p className="large-text">
                  I am a computing student and aspiring software developer
                  interested in building useful, scalable and modern
                  applications.
                </p>

                <p>
                  My technical background includes programming, web development,
                  databases, software engineering, networking and application
                  development. I enjoy learning new technologies and turning
                  ideas into practical projects.
                </p>

                <p>
                  My current interests include Artificial Intelligence,
                  Software Engineering and Cloud Computing.
                </p>
              </div>

              <div className="about-stats">
                <div>
                  <strong>Level 4</strong>
                  <span>NCC Computing</span>
                </div>

                <div>
                  <strong>Level 5</strong>
                  <span>NCC Computing</span>
                </div>

                <div>
                  <strong>Distinction</strong>
                  <span>Academic Achievement</span>
                </div>

                <div>
                  <strong>∞</strong>
                  <span>Learning</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="section skills-section">
          <div className="container">
            <div className="section-heading">
              <p>02 — SKILLS</p>
              <h2>Technologies I work with.</h2>
            </div>

            <div className="skills-grid">
              {skills.map((skill) => (
                <div className="skill-card" key={skill.title}>
                  <div className="skill-icon">{skill.icon}</div>

                  <h3>{skill.title}</h3>

                  <div className="skill-list">
                    {skill.items.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="section">
          <div className="container">
            <div className="section-heading">
              <p>03 — PROJECTS</p>
              <h2>Things I've built.</h2>
            </div>

            <div className="projects-grid">
              {projects.map((project, index) => (
                <article className="project-card" key={project.title}>
                  <div className="project-number">
                    0{index + 1}
                  </div>

                  <div className="project-content">
                    <h3>{project.title}</h3>

                    <p>{project.description}</p>

                    <div className="tech-list">
                      {project.tech.map((tech) => (
                        <span key={tech}>{tech}</span>
                      ))}
                    </div>

                    <div className="project-links">
                      <a href={project.github}>
                        <Github size={17} />
                        GitHub
                      </a>

                      <a href={project.demo}>
                        Live Demo
                        <ExternalLink size={17} />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* EDUCATION */}
        <section className="section education-section">
          <div className="container">
            <div className="section-heading">
              <p>04 — EDUCATION</p>
              <h2>My academic journey.</h2>
            </div>

            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-dot"></div>

                <div>
                  <span>KBTC College</span>
                  <h3>NCC Level 5 Diploma in Computing</h3>
                  <p>
                    Completed with Distinction. Studied software development,
                    databases, networking, cryptography and computing projects.
                  </p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot"></div>

                <div>
                  <span>KBTC College</span>
                  <h3>NCC Level 4 Diploma in Computing</h3>
                  <p>
                    Completed with Distinction with a focus on programming,
                    web development, computer systems and software engineering.
                  </p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot"></div>

                <div>
                  <span>Dagon University</span>
                  <h3>Physics</h3>
                  <p>
                    Studied Physics before changing my academic direction
                    toward computing and software development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section contact-section">
          <div className="container contact-box">
            <div>
              <p className="eyebrow">05 — CONTACT</p>

              <h2>
                Let's build something
                <span> together.</span>
              </h2>

              <p>
                I'm interested in software development, AI, web applications
                and future technology.
              </p>
            </div>

            <a href="mailto:your-email@example.com" className="btn primary">
              Get In Touch
              <Mail size={18} />
            </a>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer>
        <div className="container footer-content">
          <p>© 2026 Hein Zayar Tun</p>

          <div>
            <a href="https://github.com/" target="_blank" rel="noreferrer">
              <Github size={18} />
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;