import { useContext, useEffect } from 'react';
import Context from './Context';

const useHideNavBar = () => {
  const { setOpen } = useContext(Context);

  useEffect(() => {
    return setOpen(false);
  }, [setOpen]);
};

export default useHideNavBar;
