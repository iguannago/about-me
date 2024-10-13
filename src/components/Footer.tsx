import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className='footer'>
      <p>&copy; 2024 Get in the Cloud. All rights reserved.</p>
      <p>
        Contact me at{' '}
        <a href='mailto:davidcrespoarroyo@gmail.com'>davidcrespoarroyo@gmail.com</a>
      </p>
      <div className='social-links'>
        <a
          href='https://x.com/IguannaGo'
          target='_blank'
          rel='noopener noreferrer'
        >
          X
        </a>{' '}
        |
        <a
          href='https://www.linkedin.com/in/davidcrespoarroyo/'
          target='_blank'
          rel='noopener noreferrer'
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
};

export default Footer;
