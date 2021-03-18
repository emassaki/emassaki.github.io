import React, { useContext } from 'react';
import { FiMenu } from 'react-icons/fi';
import { MainHeader } from '../../styles/globalStyles';
import Context from '../../_context/Context';
import NavBar from '../NavBar';

const Header = () => {
  const { setOpen } = useContext(Context);
  return (
    <MainHeader>
      <NavBar />
      <FiMenu className="open-menu" onClick={() => setOpen(true)} />
    </MainHeader>
  );
};

export default Header;
