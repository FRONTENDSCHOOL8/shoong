import { BsChat, BsBell } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="w-360pxr h-55pxr pl-20pxr pr-26pxr pt-8pxr pb-11pxr bg-white justify-start items-center gap-142pxr inline-flex">
      <Link to="./">
        <img
          className="w-100pxr h-36pxr justify-center items-center inline-flex"
          src="../icons/shoongLogo.svg"
        />
      </Link>
      <div className="justify-center items-center gap-20pxr inline-flex">
        <Link to="/chatting">
          <BsChat className="w-26pxr h-26pxr relative"></BsChat>
        </Link>
        <Link to="/alerts">
          <BsBell className="w-26pxr h-26pxr relative"></BsBell>
        </Link>
      </div>
    </div>
  );
}
