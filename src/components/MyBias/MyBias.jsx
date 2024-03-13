import { Link } from 'react-router-dom';

export default function MyBias() {
  return (
    <div>
      <Link
        to="/myBias"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-b from-red-400 to-indigo-500"
      >
        <img
          src="/myBias.jpg"
          alt="내 최애 선택하기"
          className="m-auto h-52pxr cursor-pointer rounded-full"
        />
      </Link>
    </div>
  );
}
