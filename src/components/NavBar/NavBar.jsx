import { GoArrowSwitch, GoPerson, GoLocation, GoHome } from 'react-icons/go';
import NavBarItem from './NavBarItem';

export default function NavBar() {
  return (
    <div>
      <ul className="flex items-center justify-between px-5 pb-3 pt-10pxr shadow-navShadow">
        <NavBarItem togo={'home'} icon={GoHome} label={'홈'} />
        <NavBarItem togo={'exchange'} icon={GoArrowSwitch} label={'교환'} />
        <NavBarItem togo={'meetup'} icon={GoLocation} label={'밋업'} />
        <NavBarItem togo={'profile'} icon={GoPerson} label={'프로필'} />
      </ul>
    </div>
  );
}
