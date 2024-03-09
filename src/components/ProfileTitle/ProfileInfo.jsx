import { useLoaderData } from 'react-router';
import useProfileImage from '../FloatingButton/useProfileImage';

export default function ProfileInfo() {
  const profileImage = useProfileImage();
  const user = useLoaderData();
  return (
    <div className="flex items-center gap-x-2">
      <img className="h-42pxr w-42pxr rounded-full" src={profileImage} />
      <p className="text-xl text-contentPrimary">{user.name}</p>
    </div>
  );
}
