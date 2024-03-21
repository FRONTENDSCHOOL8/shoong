import { Outlet } from 'react-router';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import { useLocation } from 'react-router-dom';
import ScrollToTop from '../ScrollToTop/ScrollToTop';

export default function RootLayout() {
  const { pathname } = useLocation();

  const isHiddenFooter = pathname === '/meetup';
  return (
    <>
      <Header />
      <ScrollToTop />
      <Outlet />
      {isHiddenFooter ? null : <Footer />}
      <NavBar />
    </>
  );
}
