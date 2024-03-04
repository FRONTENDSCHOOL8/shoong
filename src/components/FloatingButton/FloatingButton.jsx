import { useState } from 'react';
import useProfileImage from './useProfileImage';
import { Link } from 'react-router-dom';

export default function FloatingButton() {
  const [isLogIn] = useState(false);
  const profileImage = useProfileImage(isLogIn);
  return (
    <Link to={isLogIn ? '/Like' : '/Login'}>
      <button
        type="button"
        aria-label="찜목록으로 가기"
        className="absolute bottom-5 right-5 w-59pxr h-59pxr bg-gradient-to-b from-red-400 to-indigo-500 rounded-full shadow-lg"
      >
        <img
          className="w-55pxr h-55pxr rounded-full absolute left-2pxr top-2pxr"
          src={profileImage}
        />
      </button>
    </Link>
  );
}
