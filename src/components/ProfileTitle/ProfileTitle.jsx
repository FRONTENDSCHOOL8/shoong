import { IoSettingsOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

export default function ProfileTitle() {
  return (
    <div className=" mr-2 flex flex-row items-center justify-between">
      <h1 className="text-2xl font-bold text-gray-900">프로필</h1>
      <Link to="/profileSetting">
        <IoSettingsOutline className="h-10 text-3xl " />
      </Link>
    </div>
  );
}
