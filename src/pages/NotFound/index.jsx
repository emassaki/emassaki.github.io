import React, { useContext, useEffect } from 'react';

import Context from '../../_context/Context';
import Header from '../../components/Header';
import useHideNavBar from '../../_context/useHideNavBar';

import { Main } from '../../styles/globalStyles';
// import { AboutContent } from './styles';
import { Redirect } from 'react-router';

const NotFound = () => {
  const { setActualPage } = useContext(Context);

  useHideNavBar();

  useEffect(() => {
    setActualPage(0);
    document.title = 'Portfolio | Not Found';
  }, [setActualPage]);

  return (
    <>
      <Header />
      <Main>
        <Redirect path='/'/>
      </Main>
    </>
  );
};

export default NotFound;
