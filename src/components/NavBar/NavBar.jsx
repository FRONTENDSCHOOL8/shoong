import { GoArrowSwitch, GoPerson, GoLocation, GoHome } from 'react-icons/go';
import NavBarItem from './NavBarItem';
import { useId } from 'react';

export default function NavBar() {
  const navItems = [
    { id: useId(), togo: '/', icon: GoHome, label: '홈' },
    { id: useId(), togo: 'exchange', icon: GoArrowSwitch, label: '교환' },
    { id: useId(), togo: 'meetup', icon: GoLocation, label: '밋업' },
    { id: useId(), togo: 'profile', icon: GoPerson, label: '프로필' },
  ];
  return (
    <div>
      <ul className="flex items-center justify-between px-5 pb-3 pt-10pxr shadow-navShadow">
        {navItems.map((item) => (
          <NavBarItem
            key={item.id}
            togo={item.togo}
            icon={item.icon}
            label={item.label}
          />
        ))}
      </ul>
    </div>
  );
}
