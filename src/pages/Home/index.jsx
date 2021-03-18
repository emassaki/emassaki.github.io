import React, { useContext, useEffect } from 'react';
import Header from '../../components/MainHeader';
import Context from '../../_context/Context';
import { Main } from '../../styles/globalStyles';
import useHideNavBar from '../../_context/useHideNavBar';

const Home = () => {
  const { open, setActualPage } = useContext(Context);

  useHideNavBar();

  useEffect(() => {
    setActualPage(1);
  }, [setActualPage]);

  return (
    <>
      <Header>Home</Header>
      <Main open={open}>Oi</Main>
    </>
  );
};

export default Home;
