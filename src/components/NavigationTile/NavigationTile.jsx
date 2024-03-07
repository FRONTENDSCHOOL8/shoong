import { FaChevronRight as RightArrow } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

export default function NavigationTile({ to, text }) {
  return (
    <Link
      to={to}
      className="flex cursor-pointer items-center justify-between border border-gray-200 bg-white p-10 text-contentSecondary transition duration-300 ease-in-out hover:bg-gray100"
    >
      <span>{text}</span>
      <RightArrow className="ml-2" />
    </Link>
  );
}
