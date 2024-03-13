import { useState } from 'react';
import useProfileImage from './useProfileImage';
import { Link } from 'react-router-dom';

export default function FloatingButton() {
  const [isLogIn] = useState(false);
  const profileImage = useProfileImage(isLogIn);
  return (
    <Link to={isLogIn ? '/LikeDetail' : '/Login'}>
      <button
        type="button"
        aria-label="찜목록으로 가기"
        className="fixed bottom-20 right-5 z-10 h-59pxr w-59pxr cursor-pointer rounded-full bg-gradient-to-b from-red-400 to-indigo-500 shadow-lg"
      >
        <img
          className="absolute left-2pxr top-2pxr h-55pxr w-55pxr rounded-full"
          src={profileImage}
        />
      </button>
    </Link>
  );
}
