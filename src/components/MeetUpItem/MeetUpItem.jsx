import { FaSquareArrowUpRight } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

export default function MeetUpItem({ info }) {
  return (
    <li className="min-h-120pxr min-w-300pxr rounded-xl bg-white px-20pxr py-15pxr shadow">
      <Link to={`/meetup/${info.id}`}>
        <div className="mb-4pxr flex items-center justify-between text-base font-extrabold leading-snug text-indigo-500">
          <h3 className="w-220pxr truncate">{info.eventTitle}</h3>
          <FaSquareArrowUpRight />
        </div>
      </Link>
      <h4 className="mb-10pxr text-sm font-extrabold leading-tight text-gray-500">
        {info.cafeName}
      </h4>
      <p className="mb-7pxr text-xs font-semibold leading-none text-gray-500">
        {info.address}
      </p>
      <p className=" text-xs font-semibold leading-none text-gray-500">
        {info.date}
      </p>
    </li>
  );
}
