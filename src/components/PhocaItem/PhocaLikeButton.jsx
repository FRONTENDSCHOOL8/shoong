import { GoHeartFill } from 'react-icons/go';
import { likeStore } from '@/store/store';

export default function PhocaLikeButton({ phocaId }) {
  // Zustand 스토어에서 현재 카드의 '찜' 상태를 조회합니다.
  const isLiked = likeStore((state) => !!state.likedCards[phocaId]);

  // 스토어의 toggleLike 액션을 사용하여 현재 카드의 '찜' 상태를 토글합니다.
  const toggleLike = likeStore((state) => state.toggleLike);

  const handleClick = (event) => {
    event.stopPropagation();
    console.log(`Phoca ID: ${phocaId}`); // 클릭 시 콘솔에 Phoca ID 출력
    toggleLike(phocaId); // 클릭 이벤트 핸들러에서 '찜' 상태를 토글합니다.
  };

  return (
    <button
      className={`hover:text-red-500 focus:outline-none ${isLiked ? 'text-red-500' : 'text-white'}`}
      onClick={handleClick}
    >
      <GoHeartFill
        className={`h-6 w-6 hover:text-red-500 ${isLiked ? 'text-red-500' : 'text-white'}`}
      />
    </button>
  );
}
