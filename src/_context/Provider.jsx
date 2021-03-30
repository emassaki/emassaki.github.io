import React, { useState } from 'react';
import Context from './Context';

const Provider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [actualPage, setActualPage] = useState();

  const context = { open, setOpen, actualPage, setActualPage };

  return <Context.Provider value={context}>{children}</Context.Provider>;
};

export default Provider;
