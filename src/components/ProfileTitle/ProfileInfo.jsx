import { useLoaderData } from 'react-router';
import useProfileImage from '../FloatingButton/useProfileImage';
import MyBias from '../MyBias/MyBias';

export default function ProfileInfo() {
  const profileImage = useProfileImage();
  const user = useLoaderData();
  return (
    <div className="flex w-full items-center justify-between">
      <div className="flex items-center gap-x-2">
        <img
          className="h-42pxr w-42pxr rounded-full"
          src={profileImage}
          alt="Profile"
        />
        <p className="text-xl text-contentPrimary">{user.name}</p>
      </div>
      <MyBias />
    </div>
  );
}
