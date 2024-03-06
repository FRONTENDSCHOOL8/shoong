import { BsChat, BsBell } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="inline-flex h-55pxr w-360pxr items-center justify-start gap-142pxr bg-white pb-11pxr pl-20pxr pr-26pxr pt-8pxr">
      <Link to="./">
        <img
          className="inline-flex h-36pxr w-100pxr items-center justify-center"
          src="../icons/shoongLogo.svg"
        />
      </Link>
      <div className="inline-flex items-center justify-center gap-20pxr">
        <Link to="/chatting">
          <BsChat className="relative h-26pxr w-26pxr"></BsChat>
        </Link>
        <Link to="/alerts">
          <BsBell className="relative h-26pxr w-26pxr"></BsBell>
        </Link>
      </div>
    </div>
  );
}
