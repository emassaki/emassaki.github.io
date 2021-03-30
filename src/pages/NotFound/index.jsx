import React, { useContext, useEffect, useState } from 'react';

import Context from '../../_context/Context';
import Header from '../../components/Header';
import useHideNavBar from '../../_context/useHideNavBar';

import { Main } from '../../styles/globalStyles';
// import { AboutContent } from './styles';
import { Redirect } from 'react-router';

const NotFound = () => {
  const { setActualPage } = useContext(Context);
  const [timeToRedirect, setTimeToRedirect] = useState(5)

  useHideNavBar();

  useEffect(() => {
    setActualPage(0);
    document.title = 'Portfolio | Not Found';
  }, [setActualPage]);

  setInterval(() => setTimeToRedirect(timeToRedirect - 1), 1000)

  return (
    <>
      <Header />
      <Main>
        <h2>Página não encontrada.</h2>
        <h2>Você será redirecionado para a página inicial em {timeToRedirect}</h2>
        {!timeToRedirect && <Redirect path="/" />}
      </Main>
    </>
  );
};

export default NotFound;
