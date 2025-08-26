import { Container } from "./styles";
import githubIcon from "../../assets/github.svg";
import externalLink from "../../assets/external-link.svg";
import ScrollAnimation from "react-animate-on-scroll";

export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">

        {/* Project 1: Volunteer Management Website */}
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
              </svg>
              <div className="project-links">
                <a href="https://github.com/iamdevraj2005/MERN-STACK-VOLUNTEER-main" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="GitHub" />
                </a>
                <a href="https://mern-stack-volunteer-main.vercel.app/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Live Site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Volunteer Management Website</h3>
              <p>
                A MERN stack web application that allows organizations to post volunteering opportunities and users to register, manage profiles, and track activities. Features include authentication, event creation, and admin dashboard.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>MongoDB</li>
                <li>Express</li>
                <li>React</li>
                <li>Node.js</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        {/* Project 2: ThreatGuard Cybersecurity App */}
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
              </svg>
              <div className="project-links">
                <a href="https://github.com/iamdevraj2005/Threat-Guard" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="GitHub" />
                </a>
                <a href="https://threat-guard-1.onrender.com/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Live Site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>ThreatGuard: Cybersecurity Analyzer</h3>
              <p>
                A full-stack web app that identifies potential cybersecurity threats in URLs. Users can input any link to check for malicious patterns, using a custom-trained model and Node.js backend API to ensure real-time detection.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>HTML</li>
                <li>CSS</li>
                <li>Python</li>
                <li>Google Api Key</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

      </div>
    </Container>
  );
}
