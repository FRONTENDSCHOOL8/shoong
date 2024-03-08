import { TbSettings } from 'react-icons/tb';

export default function ProfileTitle() {
  return (
    <div className=" flex flex-row items-center justify-between">
      <h1 className="text-2xl font-extrabold text-contentPrimary">프로필</h1>
      <TbSettings className="h-6 text-2xl " />
    </div>
  );
}
