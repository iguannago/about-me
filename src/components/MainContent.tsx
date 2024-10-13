import React from 'react';
import './MainContent.css';

const MainContent: React.FC = () => {
  return (
    <main
      className='main-content'
      style={{
        backgroundImage: 'url(/pexels-pixabay-53594.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className='content-wrapper'>
        <section className='intro-section'>
          <h2>Introduction</h2>
          <p>
            Hello! I'm David, a software engineer with a passion for web
            development, technology, and continuous learning.
          </p>
        </section>
        <section className='skills-section'>
          <h2>Skills</h2>
          <div className='skills-grid'>
            <div className='skill-card'>
              <h3>TypeScript</h3>
            </div>
            <div className='skill-card'>
              <h3>JavaScript</h3>
            </div>
            <div className='skill-card'>
              <h3>React.js</h3>
            </div>
            <div className='skill-card'>
              <h3>Node.js</h3>
            </div>
            <div className='skill-card'>
              <h3>Web Development</h3>
            </div>
            <div className='skill-card'>
              <h3>Backend Development</h3>
            </div>
            <div className='skill-card'>
              <h3>SpringBoot and Java</h3>
            </div>
            <div className='skill-card'>
              <h3>Devops Development</h3>
            </div>
            <div className='skill-card'>
              <h3>Kubernetes</h3>
            </div>
            <div className='skill-card'>
              <h3>Docker</h3>
            </div>
            <div className='skill-card'>
              <h3>CI/CD</h3>
            </div>
            <div className='skill-card'>
              <h3>Agile Development</h3>
            </div>
            <div className='skill-card'>
              <h3>Scrum</h3>
            </div>
            <div className='skill-card'>
              <h3>Kanban</h3>
            </div>
          </div>
        </section>
        <section className='projects-section'>
          <h2>Projects</h2>
          <p>
            Check out some of my work on{' '}
            <a href='https://github.com/iguannago'>GitHub</a>.
          </p>
        </section>
      </div>
    </main>
  );
};

export default MainContent;
