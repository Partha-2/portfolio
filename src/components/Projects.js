import React from 'react';
import './Projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faGithub } from '@fortawesome/free-brands-svg-icons';

const Projects = () => (
  <section className="projects-section">
    <h2>Projects</h2>
    <div className="projects-grid">
      <div className="project-card">
        <h3>Career Agent AI – Full Stack Platform</h3>
        <p><strong>Tech Stack:</strong> Java, Spring Boot, React, JWT, Google OAuth2, Groq LLaMA, MySQL, Docker, Render</p>
        <ul>
          <li>Designed and developed backend services using Java and Spring Boot with well-structured RESTful APIs</li>
          <li>Implemented secure authentication using JWT and Google OAuth2</li>
          <li>Integrated AI chatbot powered by Groq-hosted LLaMA models for career guidance</li>
          <li>Built resume analysis logic to generate job matching scores (0–100%)</li>
          <li>Integrated external job data using JSearch API for real-time recommendations</li>
          <li>Hosted MySQL on Aiven and deployed services using Docker on Render</li>
        </ul>
        <div className="project-links">
          <a href="https://agent-backend-gttz.onrender.com/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faExternalLinkAlt} /> Live Demo</a>
          <a href="https://github.com/Partha-2/agent_backend" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /> GitHub</a>
        </div>
      </div>

      <div className="project-card">
        <h3>Data Visualization Dashboard – Full Stack Project</h3>
        <p><strong>Tech Stack:</strong> Java Spring Boot, React, JDBC, JPA, MySQL, Render, Zoho Catalyst</p>
        <ul>
          <li>Developed backend services using Java Spring Boot, JDBC, JPA, and MySQL</li>
          <li>Implemented RESTful APIs to manage and expose structured data for analytics</li>
          <li>Processed backend data to support metrics, percentages, and chart-ready outputs</li>
          <li>Integrated backend APIs with React-based frontend for dynamic data visualization</li>
          <li>Deployed backend on Render and frontend on Zoho Catalyst</li>
        </ul>
        <div className="project-links">
          <a href="https://datavisualization-60030162551.development.catalystserverless.in/app/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faExternalLinkAlt} /> Live Demo</a>
          <a href="https://github.com/Partha-2/DataRecord_Backend" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /> GitHub</a>
        </div>
      </div>
    </div>
  </section>
);

export default Projects;

