import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';

import Context from '../../_context/Context';
import { FiX } from 'react-icons/fi';
import { SiGithub, SiLinkedin } from 'react-icons/si';

import { StyledNavBar } from './styles';

const NavBar = () => {
  const { open, setOpen, actualPage } = useContext(Context);
  return (
    <StyledNavBar open={open} page={actualPage}>
      <div className="page-links">
        <a href="/">Home</a>
        <a href="/about">Sobre</a>
        <a href="/skills">Habilidades</a>
        <a href="/projects">Projetos</a>
        <a href='/contacts'>Contato</a>
      </div>
      <div className="social-links">
        <a href="https://github.com/emassaki" target="_blank" rel="noreferrer">
          <SiGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/erichirayama/"
          target="_blank"
          rel="noreferrer"
        >
          <SiLinkedin />
        </a>
      </div>
      <FiX className="close-menu" onClick={() => setOpen(false)} />
    </StyledNavBar>
  );
};

export default NavBar;
