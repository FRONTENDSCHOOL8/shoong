import { TbSettings } from 'react-icons/tb';
import { Link } from 'react-router-dom';

export default function ProfileTitle() {
  return (
    <div className=" flex flex-row items-center justify-between">
      <h1 className="text-2xl font-extrabold text-contentPrimary">프로필</h1>
      <Link to="/">
        <TbSettings className="h-6 text-2xl " />
      </Link>
    </div>
  );
}
