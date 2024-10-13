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
            <div className='skill-category'>
              <h3>Web Development</h3>
              <div className='skill-card'>
                <h4>JavaScript</h4>
              </div>
              <div className='skill-card'>
                <h4>TypeScript</h4>
              </div>
              <div className='skill-card'>
                <h4>React.js</h4>
              </div>
              <div className='skill-card'>
                <h4>Node.js</h4>
              </div>
            </div>
            <div className='skill-category'>
              <h3>Backend Development</h3>
              <div className='skill-card'>
                <h4>Spring Boot Framework</h4>
              </div>
              <div className='skill-card'>
                <h4>Java 8</h4>
              </div>
              <div className='skill-card'>
                <h4>Java 11</h4>
              </div>
              <div className='skill-card'>
                <h4>Java 21</h4>
              </div>
              <div className='skill-card'>
                <h4>JUnit 5</h4>
              </div>
            </div>
            <div className='skill-category'>
              <h3>DevOps Development</h3>
              <div className='skill-card'>
                <h4>Kubernetes</h4>
              </div>
              <div className='skill-card'>
                <h4>Docker</h4>
              </div>
              <div className='skill-card'>
                <h4>CI/CD</h4>
              </div>
            </div>
            <div className='skill-category'>
              <h3>Agile Development</h3>
              <div className='skill-card'>
                <h4>Scrum</h4>
              </div>
              <div className='skill-card'>
                <h4>Kanban</h4>
              </div>
              <div className='skill-card'>
                <h4>XP (Extreme Programming)</h4>
              </div>
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
