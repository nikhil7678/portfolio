import "./App.css";

function App() {
  return (
    <div className="portfolio">

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="nav-container">
          <a href="#home" className="logo">
            Nikhil B
          </a>

          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" className="hero">
        <div className="hero-content">

          <p className="hero-small">
            COMPUTER SCIENCE & ENGINEERING STUDENT
          </p>

          <h1>
            Hi, I'm <span>Nikhil B</span>
          </h1>

          <h2>
            CSE Student at REVA University
          </h2>

          <p className="hero-description">
            I'm a 2nd year Computer Science and Engineering student
            passionate about programming, software development, and
            learning new technologies.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-button">
              View My Projects →
            </a>

            <a href="#contact" className="secondary-button">
              Contact Me
            </a>
          </div>

          {/* SOCIAL LINKS */}
          <div className="social-links">

            <a
              href="https://github.com/nikhil7678"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>GitHub</span>
              ↗
            </a>

            <a
              href="https://www.linkedin.com/in/nikhil76780/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>LinkedIn</span>
              ↗
            </a>

            <a href="mailto:nikhil76780@gmail.com">
              <span>Email</span>
              ↗
            </a>

          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section about-section">
        <div className="section-heading">
          <p>ABOUT ME</p>
          <h2>Who I Am</h2>
        </div>

        <div className="about-grid">

          <div className="about-text">
            <p>
              I'm Nikhil B, a Computer Science and Engineering student
              at REVA University, currently pursuing my 2nd year.
            </p>

            <p>
              I'm passionate about software development, problem solving,
              and learning new technologies. I enjoy building practical
              projects and continuously improving my programming skills.
            </p>

            <p>
              I'm currently developing my knowledge in programming,
              web development, and modern software technologies.
            </p>
          </div>

          <div className="education-box">
            <h3>Education</h3>

            <div className="education-row">
              <span>University</span>
              <strong>REVA University</strong>
            </div>

            <div className="education-row">
              <span>Branch</span>
              <strong>Computer Science & Engineering</strong>
            </div>

            <div className="education-row">
              <span>Year</span>
              <strong>2nd Year</strong>
            </div>

            <div className="education-row">
              <span>Semester</span>
              <strong>3rd Semester</strong>
            </div>
          </div>

        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section skills-section">
        <div className="section-heading">
          <p>MY SKILLS</p>
          <h2>Technologies I Work With</h2>
        </div>

        <div className="skills-grid">

          <div className="skill-card">
            <div className="skill-icon">C</div>
            <h3>C</h3>
            <p>Programming</p>
          </div>

          <div className="skill-card">
            <div className="skill-icon">C++</div>
            <h3>C++</h3>
            <p>Programming & Problem Solving</p>
          </div>

          <div className="skill-card">
            <div className="skill-icon">J</div>
            <h3>Java</h3>
            <p>Object Oriented Programming</p>
          </div>

          <div className="skill-card">
            <div className="skill-icon">Py</div>
            <h3>Python</h3>
            <p>Programming & Scripting</p>
          </div>

          <div className="skill-card">
            <div className="skill-icon">H</div>
            <h3>HTML</h3>
            <p>Web Structure</p>
          </div>

          <div className="skill-card">
            <div className="skill-icon">C</div>
            <h3>CSS</h3>
            <p>Web Styling</p>
          </div>

          <div className="skill-card">
            <div className="skill-icon">JS</div>
            <h3>JavaScript</h3>
            <p>Web Development</p>
          </div>

          <div className="skill-card">
            <div className="skill-icon">R</div>
            <h3>React</h3>
            <p>Frontend Development</p>
          </div>

          <div className="skill-card">
            <div className="skill-icon">G</div>
            <h3>Git & GitHub</h3>
            <p>Version Control</p>
          </div>

        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section projects-section">
        <div className="section-heading">
          <p>MY WORK</p>
          <h2>Projects</h2>
        </div>

        <div className="projects-grid">

          {/* PROJECT 1 */}
          <div className="project-card">
            <div className="project-top">
              <span className="project-number">01</span>
              <span className="project-status">Completed</span>
            </div>

            <h3>Student Task Manager</h3>

            <p>
              A simple task management web application designed for
              students to add, manage, and track their daily tasks.
            </p>

            <div className="tech-tags">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
            </div>

            <a
              href="https://github.com/nikhil7678/student-task-manager"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Project →
            </a>
          </div>

          {/* PROJECT 2 */}
          <div className="project-card">
            <div className="project-top">
              <span className="project-number">02</span>
              <span className="project-status">Learning</span>
            </div>

            <h3>Personal Portfolio</h3>

            <p>
              A responsive personal portfolio website created to
              showcase my skills, projects, education, and contact
              information.
            </p>

            <div className="tech-tags">
              <span>React</span>
              <span>TypeScript</span>
              <span>CSS</span>
            </div>

            <a href="#home" className="project-link">
              View Project →
            </a>
          </div>

          {/* PROJECT 3 */}
          <div className="project-card">
            <div className="project-top">
              <span className="project-number">03</span>
              <span className="project-status">Coming Soon</span>
            </div>

            <h3>Future Project</h3>

            <p>
              More projects will be added as I continue learning
              programming, web development, and new technologies.
            </p>

            <div className="tech-tags">
              <span>Programming</span>
              <span>Web Development</span>
            </div>

            <span className="project-link coming-soon">
              Coming Soon →
            </span>
          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section contact-section">
        <div className="contact-box">

          <div className="section-heading contact-heading">
            <p>CONTACT</p>
            <h2>Let's Connect</h2>
          </div>

          <p className="contact-description">
            If you would like to contact me, feel free to send me an
            email. I would be happy to connect and discuss technology,
            projects, and learning opportunities.
          </p>

          <div className="contact-buttons">

            <a
              href="mailto:nikhil76780@gmail.com"
              className="contact-button"
            >
              📧 Email Me
            </a>

            <a
              href="https://github.com/nikhil7678"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-button"
            >
              💻 GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/nikhil76780/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-button"
            >
              🔗 LinkedIn
            </a>

          </div>

          <div className="contact-details">

            <a
              href="https://github.com/nikhil7678"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub: github.com/nikhil7678
            </a>

            <a
              href="https://www.linkedin.com/in/nikhil76780/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn: linkedin.com/in/nikhil76780
            </a>

            <a href="mailto:nikhil76780@gmail.com">
              Email: nikhil76780@gmail.com
            </a>

          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2026 Nikhil B. All rights reserved.</p>

        <div className="footer-links">

          <a
            href="https://github.com/nikhil7678"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/nikhil76780/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a href="mailto:nikhil76780@gmail.com">
            Email
          </a>

        </div>
      </footer>

    </div>
  );
}

export default App;