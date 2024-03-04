import { useState } from 'react';
import useProfileImage from './useProfileImage';

export default function FloatingButton() {
  const [isLogIn] = useState(true);
  const profileImage = useProfileImage(isLogIn);
  // const handleFloatingButton = () => {};
  return (
    <button
      type="button"
      aria-label="찜목록으로 가기"
      // onClick={() => handleFloatingButton}
      className="absolute bottom-5 right-5 w-59pxr h-59pxr bg-gradient-to-b from-red-400 to-indigo-500 rounded-full shadow-lg"
    >
      <img
        className="w-55pxr h-55pxr rounded-full absolute left-2pxr top-2pxr"
        src={profileImage}
      />
    </button>
  );
}
