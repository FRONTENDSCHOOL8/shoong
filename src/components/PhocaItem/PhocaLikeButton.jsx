import React, { useEffect, useState } from 'react';
import { GoHeartFill } from 'react-icons/go';
import { likeStore } from '@/store/store';
import PocketBase from 'pocketbase';

const pb = new PocketBase('https://shoong.pockethost.io');

export default function PhocaLikeButton({ phocaId }) {
  const [userId, setUserId] = useState(null); // 사용자 ID 상태를 관리하기 위한 useState 훅
  const isLiked = likeStore((state) => !!state.likedCards[phocaId]);
  const toggleLike = likeStore((state) => state.toggleLike);

  useEffect(() => {
    // 로컬 스토리지에서 'pocketbase_auth' 키에 해당하는 값을 가져옵니다.
    const authDataString = localStorage.getItem('pocketbase_auth');
    if (authDataString) {
      try {
        const authData = JSON.parse(authDataString);
        setUserId(authData.model.id); // 동적으로 가져온 사용자 ID를 상태로 설정
      } catch (error) {
        console.error('Parsing authData error:', error);
      }
    }
  }, []);

  async function updateLikeListInUserCollection(userId) {
    if (!userId) return; // userId가 없는 경우 함수 실행을 중단

    const likeListString = localStorage.getItem('likeList');
    let likedCards = {};
    if (likeListString) {
      likedCards = JSON.parse(likeListString).state.likedCards;
    }
    const likedPhotoCardIds = Object.keys(likedCards).filter(
      (id) => likedCards[id]
    );

    try {
      const record = await pb.collection('users').update(userId, {
        likeList: likedPhotoCardIds,
      });
      console.log('likeList update success:', record);
    } catch (error) {
      console.error('likeList update failed:', error);
    }
  }

  const handleClick = async (event) => {
    event.stopPropagation();
    toggleLike(phocaId);
    if (userId) {
      await updateLikeListInUserCollection(userId);
    }
  };

  return (
    <button
      className={`hover:text-red-500 focus:outline-none ${isLiked ? 'text-red-500' : 'text-white'}`}
      onClick={handleClick}
    >
      <GoHeartFill
        className={`h-6 w-6 ${isLiked ? 'text-red-500' : 'text-white'}`}
      />
    </button>
  );
}
