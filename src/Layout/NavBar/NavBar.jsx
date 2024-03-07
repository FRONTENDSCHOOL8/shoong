import { GoArrowSwitch, GoPerson, GoLocation, GoHome } from 'react-icons/go';
import NavBarItem from './NavBarItem';
import { useId } from 'react';

export default function NavBar() {
  const navItems = [
    { id: useId(), togo: '/', icon: GoHome, label: '홈' },
    { id: useId(), togo: '/exchange', icon: GoArrowSwitch, label: '교환' },
    { id: useId(), togo: '/meetup', icon: GoLocation, label: '밋업' },
    { id: useId(), togo: '/profile', icon: GoPerson, label: '프로필' },
  ];
  return (
    <div className="fixed bottom-0 z-30 w-full bg-white shadow-navShadow">
      <ul className="flex items-center justify-between px-5 py-1">
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
