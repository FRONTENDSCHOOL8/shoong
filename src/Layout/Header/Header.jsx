import { BsChat, BsBell } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="fixed top-0 z-20 flex w-full items-center justify-between bg-white py-4 ">
      <Link to="./" className="px-10pxr">
        <img className="flex h-36pxr w-100pxr" src="/icons/shoongLogo.svg" />
      </Link>
      <div className="flex gap-20pxr px-10pxr">
        <Link to="/chatting">
          <BsChat className="h-26pxr w-26pxr"></BsChat>
        </Link>
        <Link to="/alerts">
          <BsBell className="h-26pxr w-26pxr"></BsBell>
        </Link>
      </div>
    </div>
  );
}
