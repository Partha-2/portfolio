import React from 'react';
import tcsNqtPDF from './Images/TCS Nqt IT.pdf';
import nptelIOTPDF from './Images/NPTEL IOT.pdf'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';

import './Achievements.css';

const Achievements = () => (
  <section className="achievements-section">
    <h2>Achievements</h2>
    <ul>
      <li>
        TCS National Qualifier Test (NQT) Certificate
        <a href={tcsNqtPDF} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFilePdf} className="pdf-icon" /> View Certificate
        </a>
      </li>
      <li>
        Swayam NPTEL, Indian Institute of Technology Kharagpur (Jul 2021 – Jul 2022)
        <a href={nptelIOTPDF} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFilePdf} className="pdf-icon" /> View Certificate
        </a>
      </li>
    </ul>
  </section>
);

export default Achievements;
