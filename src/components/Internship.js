import React from 'react';
import './Internship.css';

const Internship = () => (
  <section className="internship-section">
    <h2>Work Experience</h2>
    <div className="experience-item">
      <div className="experience-header">
        <h3>Tata Consultancy Services (TCS)</h3>
        <p className="role">Analyst – Application Support</p>
        <p className="period">Feb 2025 – Present | Bengaluru, India</p>
      </div>
      <ul>
        <li>Supporting Java-based applications in a production environment under SLA-driven operational processes</li>
        <li>Assisting in incident investigation through log analysis, SQL queries, and backend data validation</li>
        <li>Participating in root cause analysis discussions for recurring application issues</li>
        <li>Collaborating with development and middleware teams during issue triage and release support</li>
        <li>Gaining exposure to SDLC practices including monitoring, deployment support, and regression testing</li>
      </ul>
    </div>
    <div className="experience-item">
      <div className="experience-header">
        <h3>Net Tel Solutions Pvt Ltd</h3>
        <p className="role">Web Development Intern</p>
        <p className="period">Jun 2022 – Jul 2022 | Coimbatore, India</p>
      </div>
      <ul>
        <li>Developed responsive UI components using HTML, CSS, JavaScript, and React</li>
        <li>Assisted frontend-backend integration using REST APIs</li>
        <li>Debugged UI issues to improve usability and layout consistency</li>
      </ul>
    </div>
  </section>
);

export default Internship;
