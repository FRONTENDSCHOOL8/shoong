import { Outlet } from 'react-router';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';

export default function RootLayout() {
  return (
    <>
      <Header />
      <div className="pb-14">
        <Outlet />
      </div>
      <Footer />
      <NavBar />
    </>
  );
}
