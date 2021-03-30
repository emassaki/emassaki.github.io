import React, { useContext, useEffect } from 'react';

import Context from '../../_context/Context';
import Header from '../../components/Header';
import useHideNavBar from '../../_context/useHideNavBar';

import { Main } from '../../styles/globalStyles';
import { SkillsContent } from './styles';

const hardSkills = [
  'HTML',
  'CSS3',
  'JavaScript',
  'Jest',
  'ReactJS',
  'RTL',
  'React-Redux',
  'React Hooks',
  'Context API',
  'Git',
  'GitHub',
  'Styled Components',
];

const softSkills = [
  'Comunicação Oral',
  'Organização Financeira',
  'Resolução de Problemas',
  'Criatividade',
  'Tomada de Decisão',
  'Comunicação Não-Violenta',
];

const Skills = () => {
  const { setActualPage } = useContext(Context);

  useHideNavBar();

  useEffect(() => {
    setActualPage(3);
    document.title = 'Eric Massaki | Portfolio | Habilidades';
  }, [setActualPage]);

  return (
    <>
      <Header />
      <Main>
        <SkillsContent>
          <div className="wrapper">
            <h1>Hard Skills</h1>
            <div>
              {hardSkills.map((eachSkill) => (
                <h3 key={eachSkill}>{eachSkill}</h3>
              ))}
            </div>
          </div>
          <div className="vert-bar"></div>
          <div className="wrapper">
            <h1>Soft Skills *</h1>
            <div>
              {softSkills.map((eachSkill) => (
                <h3 key={eachSkill}>{eachSkill}</h3>
              ))}
            </div>
            <p>
              * Certificado pela{' '}
              <a
                href="https://www.linkedin.com/posts/ericmassakihirayama_mapa-de-talentos-tamboro-activity-6779389004916764672-XQ7b"
                target="_blank"
                rel="noreferrer"
              >
                Tamboro
              </a>
            </p>
          </div>
        </SkillsContent>
      </Main>
    </>
  );
};

export default Skills;