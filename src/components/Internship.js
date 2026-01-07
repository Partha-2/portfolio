import React from 'react';
import './Internship.css';

const Internship = () => (
  <section className="internship-section">
    <h2>Internship</h2>
    <p>You can view my internship details <a href={require('./Images/INTERN WEB DEVELOPMENT.pdf')} target="_blank" rel="noopener noreferrer"><i className="fas fa-file-pdf"></i> here</a>.</p>
  </section>
);

export default Internship;
