import React from 'react';
import { Link } from 'react-router-dom';

export default function MyBias() {
  return (
    <div>
      <Link
        to="/myBias"
        className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-b from-red-400 to-indigo-500"
      >
        <img
          src="/public/myBias.jpg"
          alt="내 최애 선택하기"
          className="m-auto h-10 w-10 cursor-pointer rounded-full"
        />
      </Link>
    </div>
  );
}
