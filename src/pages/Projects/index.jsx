import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';

import Context from '../../_context/Context';
import Header from '../../components/Header';
import Loading from '../../components/Loading';
import CarouselProjects from '../../components/Carousel';
import useHideNavBar from '../../_context/useHideNavBar';

import { ProjectContent, ProjectMain } from './styles';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Projects = () => {
  const { setActualPage } = useContext(Context);
  const [gitHubProjects, setGitHubProjects] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  useHideNavBar();
  
  useEffect(() => {
    setActualPage(4);
    document.title = 'Eric Massaki | Portfolio | Projetos';
    const projectsAPI = async () => {
      const response = await axios.get('https://gitconnected.com/v1/portfolio/emassaki');
      if (response && response.status === 200) {
        setGitHubProjects(response.data);
        setIsFetching(false);
      }
      return response && response.status === 200 ? null : projectsAPI;
    };
    projectsAPI();
  }, [setActualPage]);

  if (isFetching) return <Loading />;
  return (
    <>
      <Header />
      <ProjectMain>
        <h1 className="title">Meus Projetos</h1>
        <ProjectContent>
          <CarouselProjects projects={gitHubProjects.projects}/>
        </ProjectContent>
      </ProjectMain>
    </>
  );
};

export default Projects;
