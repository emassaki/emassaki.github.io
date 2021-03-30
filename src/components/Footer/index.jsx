import React from 'react';

import { StyledFooter } from './styles';
import { SiGithub, SiLinkedin, SiWhatsapp } from 'react-icons/si';

const Footer = () => {
  return (
    <StyledFooter>
      <p>Conecte-se comigo:</p>
      <div className="social-links">
        <a href="https://github.com/emassaki" target="_blank" rel="noreferrer">
          <SiGithub className="github" />
        </a>
        <a
          href="https://www.linkedin.com/in/erichirayama/"
          target="_blank"
          rel="noreferrer"
        >
          <SiLinkedin className="linkedin" />
        </a>
        <div className="whatsapp">
          <SiWhatsapp />
          <span className="tooltip">+55 (43) 9 9958-1921</span>
        </div>
      </div>
    </StyledFooter>
  );
};

export default Footer;
