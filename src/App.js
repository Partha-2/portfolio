import React from 'react';
import Header from './components/Header';
import Profile from './components/Profile';
import Education from './components/Education';
import Skills from './components/Skills';
import Internship from './components/Internship';
import Strengths from './components/Strength';
import Courses from './components/Courses';
import Interests from './components/Interests';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Achievements from './components/Achievements';
import './Global.css';

const App = () => (
  <div>
    <Header/>
    <Profile/>
    <Education/>
    <Skills/>
    <Internship/>
    <Strengths/>
    <Courses/>
    <Achievements/>
    <Interests/>
    <Projects/>
    <Footer />
  </div>
);

export default App;
