import React from 'react';
import './Skills.css';

const Skills = () => (
  <section className="skills-section">
    <h2>Skills</h2>
    <div className="skills-grid">
      <div className="skill-category">
        <h3>Languages</h3>
        <p>Java, MySQL, JavaScript</p>
      </div>
      <div className="skill-category">
        <h3>Backend</h3>
        <p>Spring Boot, RESTful APIs, Microservices, JDBC, JPA, Hibernate, Spring Security</p>
      </div>
      <div className="skill-category">
        <h3>Frontend</h3>
        <p>HTML, CSS, JavaScript, React</p>
      </div>
      <div className="skill-category">
        <h3>Tools & Platforms</h3>
        <p>Docker, Git/GitHub, Postman, MySQL Workbench, Google Cloud, Aiven, Render, Zoho Catalyst, Groq</p>
      </div>
    </div>
  </section>
);

export default Skills;


