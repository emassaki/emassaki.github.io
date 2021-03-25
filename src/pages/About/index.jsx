import React, { useContext, useEffect } from 'react';

import Context from '../../_context/Context';
import Header from '../../components/Header';
import useHideNavBar from '../../_context/useHideNavBar';

import { Main } from '../../styles/globalStyles';
import { AboutContent } from './styles';

const About = () => {
  const { open, setActualPage } = useContext(Context);

  useHideNavBar();

  useEffect(() => {
    setActualPage(2);
    document.title = 'Eric Massaki | Portfolio | Sobre';
  }, [setActualPage]);

  return (
    <>
      <Header />
      <Main open={open}>
        <AboutContent>
          <h1>Eric Massaki Hirayama</h1>
          <p>
            Londrinense, 26 anos, aficcionado por tecnologia e video games. Atualmente
            estou estudando na Trybe para me tornar um Desenvolvedor Web Full-Stack.
          </p>
          <p>
            Em novembro de 2020, eu me voluntariei para ser um dos EmbaixaTrybers da Turma
            8. Meu trabalho é buscar formas de ajudar meus colegas de turma com dúvidas e
            problemas propondo projetos e atividades junto à equipe da Trybe.
          </p>
          <p>
            Acredito que a colaboração, o comprometimento e o trabalho em equipe são
            essenciais para que consigamos alcançar nossos objetivos. Esta experiência
            como Embaixa está me ajudando a evoluir essas e muitas outras Soft Skills que
            considero importante como a empatia e a comuniação assertiva.
          </p>
          <p>
            Estando próximo do encerramento do módulo de Front-End, busco oportunidades de
            iniciar minha carreira como desenvolvedor e ampliar meus conhecimentos das
            novas tecnologias
          </p>
        </AboutContent>
      </Main>
    </>
  );
};

export default About;
