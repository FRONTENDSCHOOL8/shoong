import React from 'react';
import { Link } from 'react-router-dom';

function MyBias() {
  return (
    <div>
      <Link to="/myBias">
        <img
          src="../../../public/myBias.jpg"
          alt="내 최애 선택하기"
          className="h-auto w-12 cursor-pointer rounded-full"
        />
      </Link>
    </div>
  );
}

export default MyBias;
