import { GoHeartFill } from 'react-icons/go';

export default function PhocaLikeButton() {
  return (
    <button className="focus:outline-none hover:text-red-500">
      <GoHeartFill className="text-white w-6 h-6 hover:text-red-500" />
    </button>
  );
}
