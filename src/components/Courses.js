import React from 'react';
import coreJavaPDF from './Images/CORE JAVA.pdf';
import springBootPDF from './Images/Java.pdf';
import webDevelopmentPDF from './Images/Web Development.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';

import './Courses.css';

const Courses = () => (
  <section className="courses-section">
    <h2>Courses</h2>
    <ul>
      <li>
        Core Java, DHECIGAA Professional Computer Education (Aug 2023 – Dec 2023)
        <a href={coreJavaPDF} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFilePdf} className="pdf-icon" /> View Certificate
        </a>
      </li>
      <li>
        Core Java and Rest API With Spring Boot, UDEMY (Apr 2024 – May 2024)
        <a href={springBootPDF} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFilePdf} className="pdf-icon" /> View Certificate
        </a>
      </li>
      <li>
        Web Development, Maasai (June 2023)
        <a href={webDevelopmentPDF} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFilePdf} className="pdf-icon" /> View Certificate
        </a>
      </li>
    </ul>
  </section>
);

export default Courses;

