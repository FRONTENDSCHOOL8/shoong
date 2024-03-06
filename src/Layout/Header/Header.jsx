import { BsChat, BsBell } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="flex h-55pxr w-full justify-between bg-white ">
      <Link to="./">
        <img className="flex h-36pxr w-100pxr" src="/icons/shoongLogo.svg" />
      </Link>
      <div className="flex gap-20pxr">
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
