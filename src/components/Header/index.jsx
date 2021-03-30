import React, { useContext } from 'react';

import Context from '../../_context/Context';
import NavBar from '../NavBar';
import { FiMenu } from 'react-icons/fi';

import { MainHeader } from './styles';

const Header = () => {
  const { setOpen } = useContext(Context);
  return (
    <MainHeader>
      <div className="header-mobile">
        <p>{document.title.split('|')[2]}</p>
        <FiMenu className="open-menu" onClick={() => setOpen(true)} />
      </div>
      <NavBar />
    </MainHeader>
  );
};

export default Header;
