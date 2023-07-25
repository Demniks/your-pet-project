import Nav from './nav/Nav';
import AuthNav from './authNav/AuthNav';
import UserNav from './userNav/UserNav';
import { Div } from './Navigation.styled';
import LogoComponent from '../logo/Logo';
import { useEffect, useState } from 'react';
import MobMenu from '../mobMenu/MobMenu';
import { useResize } from 'hooks/useResize';
import { selectIsLoggedIn, selectUserName } from 'redux/auth/authSelectors';
import { useSelector } from 'react-redux';

const Navigation = () => {
  const { name } = useSelector(selectUserName);

  const isLogin = useSelector(selectIsLoggedIn);
  const [sizeDesk, setsizeDesk] = useState(false);
  const [sizeTab, setsizeTab] = useState(true);
  const [itsMobile, setitsMobile] = useState(false);

  const { width } = useResize();

  const resizeHandler = width => {
    if (width <= 766) {
      setitsMobile(true);
      setsizeTab(false);
      setsizeDesk(false);
    } else if (width < 1279) {
      setsizeTab(true);
      setitsMobile(false);
      setsizeDesk(false);
    } else if (width >= 1280) {
      setsizeDesk(true);
      setsizeTab(false);
      setitsMobile(false);
    }
  };

  useEffect(() => {
    resizeHandler(width);
  }, [width]);
  return (
    <Div>
      <LogoComponent itsMobile={itsMobile} />
      {sizeDesk ? <Nav /> : null}
      {!isLogin ? (
        <AuthNav size={itsMobile} />
      ) : (
        <UserNav userName={name} size={itsMobile} />
      )}
      {!sizeTab && !itsMobile ? null : (
        <MobMenu userName={name} size={itsMobile} isLogin={isLogin} />
      )}
    </Div>
  );
};

export default Navigation;
