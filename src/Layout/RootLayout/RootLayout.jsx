import { Outlet } from 'react-router';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import NavBar from '@/components/NavBar/NavBar';

export default function RootLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <NavBar />
      <Footer />
    </>
  );
}
