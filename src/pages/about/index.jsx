import React, { useContext, useEffect } from 'react';
import Header from '../../components/MainHeader';
import Context from '../../_context/Context';
import { Main } from '../../styles/globalStyles';
import useHideNavBar from '../../_context/useHideNavBar';

const About = () => {
  const { open, setActualPage } = useContext(Context);

  useHideNavBar();

  useEffect(() => {
    setActualPage(2);
  }, [setActualPage]);

  return (
    <>
      <Header>About</Header>
      <Main open={open}></Main>
    </>
  );
};

export default About;
