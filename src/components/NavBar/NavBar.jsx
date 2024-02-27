import { GoArrowSwitch, GoPerson, GoLocation, GoHome } from 'react-icons/go';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div className="w-360pxr">
      <ul className="flex items-center justify-around px-5 pb-3 gap-64pxr pt-10pxr shadow-navShadow">
        <li className="cursor-pointer text-contentTertiary hover:text-primary">
          <Link to="home" className="flex flex-col items-center"></Link>
          <GoHome className="h-8 w-22pxr" />홈
        </li>
        <li className="cursor-pointer text-contentTertiary hover:text-primary">
          <Link to="exchange" className="flex flex-col items-center">
            <GoArrowSwitch className="h-8 w-22pxr" />
            교환
          </Link>
        </li>
        <li className="cursor-pointer text-contentTertiary hover:text-primary">
          <Link to="meetup" className="flex flex-col items-center">
            <GoLocation className="h-8 w-22pxr" />
            밋업
          </Link>
        </li>
        <li className="cursor-pointer text-contentTertiary hover:text-primary">
          <Link to="profile" className="flex flex-col items-center">
            <GoPerson className="h-8 w-22pxr" />
            프로필
          </Link>
        </li>
      </ul>
    </div>
  );
}
