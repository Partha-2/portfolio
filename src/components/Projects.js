import React from 'react';
import './Projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

const Projects = () => (
  <section className="projects-section">
    <h2>Projects</h2>
    <ul>
      <li>
        <a href="https://addapp-60030162551.development.catalystserverless.in/app/index.html" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faExternalLinkAlt} className="external-link-icon" /> Add App
        </a>
      </li>
      <li>
        <a href="https://studentdata-60030162551.development.catalystserverless.in/app/index.html" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faExternalLinkAlt} className="external-link-icon" /> Student Data
        </a>
      </li>
      <li>
        <a href="https://numbergame-60030162551.development.catalystserverless.in/app/index.html" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faExternalLinkAlt} className="external-link-icon" /> Number Game
        </a>
      </li>
      <li>
        <a href="https://datavisualization-60030162551.development.catalystserverless.in/app/index.html" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faExternalLinkAlt} className="external-link-icon" /> Data Visualization
        </a>
      </li>
      <li>
        <a href="https://knitwearshopping-60030162551.development.catalystserverless.in/app/index.html" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faExternalLinkAlt} className="external-link-icon" /> Knitwear Shopping
        </a>
      </li>
    </ul>
  </section>
);

export default Projects;

