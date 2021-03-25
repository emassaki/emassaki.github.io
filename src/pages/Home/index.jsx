import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Context from '../../_context/Context';
import Header from '../../components/Header';
import useHideNavBar from '../../_context/useHideNavBar';

import { Main } from '../../styles/globalStyles';
import { HomeContent } from './styles';

const Home = () => {
  const { open, setActualPage } = useContext(Context);

  useHideNavBar();

  useEffect(() => {
    setActualPage(1);
    document.title = 'Eric Massaki | Portfolio | Home';
  }, [setActualPage]);
  
  return (
    <>
      <Header />
      <Main open={open}>
        <HomeContent>
          <h3>Olá! Eu sou </h3>
          <h1>Eric Massaki Hirayama</h1>
          <h4>Desenvolvedor Front-End Júnior</h4>
          <div className="link-buttons">
            <Link to="/projects">Meus projetos</Link>
            <Link to="/skills">Minhas habilidades</Link>
          </div>
        </HomeContent>
      </Main>
    </>
  );
};

export default Home;
