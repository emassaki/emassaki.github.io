import React from 'react';
import Header from '../Header';

import { StyledLoading } from './styles';

export default function Loading() {
  return (
    <>
      <Header />
      <StyledLoading>
        <h1>Carregando...</h1>
        <h2>Se a página não carregar, verifique sua internet.</h2>
        <div className="loading" />
      </StyledLoading>
    </>
  );
}
