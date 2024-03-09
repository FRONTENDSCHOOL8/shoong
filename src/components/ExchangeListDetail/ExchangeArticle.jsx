import pb from '@/api/pocketbase';
import { useState } from 'react';
import { useEffect } from 'react';
import { GoTrash, GoPencil } from 'react-icons/go';

export default function ExchangeArticle({
  exchangeListData,
  setExchangeListData,
  users,
}) {
  // 수정 상태와 현재 수정 중인 교환글의 ID를 관리합니다.
  const [isEditing, setIsEditing] = useState(null);
  const [editingContent, setEditingContent] = useState('');

  const handleEdit = (exchangeData) => {
    setIsEditing(exchangeData.id);
    setEditingContent(exchangeData.description);
  };

  const handleEditSubmit = async (exchangeId) => {
    try {
      // const updatedRecord = await pb
      //   .collection('exchangeList')
      //   .update(exchangeId, {
      //     'description+': editingContent,
      //   });

      // 상태 업데이트 로직 수정
      setExchangeListData((prevData) =>
        prevData.map(
          (data) =>
            data.id === exchangeId
              ? { ...data, description: editingContent }
              : data // 직접 수정된 내용 반영
        )
      );

      // 수정 상태 종료 및 알림
      setIsEditing(null);
      setEditingContent('');
      alert('교환 글이 수정되었습니다.');
    } catch (error) {
      console.error('교환 글 수정 중 에러가 발생했습니다:', error);
      alert('교환 글 수정에 실패했습니다.');
    }
  };

  const handleEditCancel = () => {
    setIsEditing(null);
    setEditingContent('');
  };

  // users 배열을 id를 키로 사용하는 객체로 변환
  const usersById = {};
  users.forEach((user) => {
    usersById[user.id] = user;
  });

  // userData().then((result) => console.log(result));

  const handleDelete = async (exchangeId) => {
    try {
      // DB에서 해당 교환 글을 삭제
      await pb.collection('exchangeList').delete(exchangeId);
      alert('교환 글이 삭제되었습니다.');
      // 상태 업데이트 로직 추가 필요
      setExchangeListData((prevExchangeList) =>
        prevExchangeList.filter((exchange) => exchange.id !== exchangeId)
      );
    } catch (error) {
      console.error('교환 글을 삭제하는 중 에러가 발생했습니다:', error);
      alert('교환 글을 삭제하는 데 실패했습니다.');
    }
  };

  const loggedInUserId = 'sg01ds76ccvmji7'; //임시 유저 ID

  return (
    <ul className="mt-5">
      {exchangeListData.map((exchangeData) => {
        const user = usersById[exchangeData.writer];
        const isUserTheWriter = exchangeData.writer === loggedInUserId;
        if (!user) {
          return null;
        }
        return (
          <li
            key={exchangeData.id}
            className="mx-auto mb-3 overflow-hidden rounded-lg bg-white p-5 shadow-lg"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="h-11 w-10 ">
                  <img
                    className="h-full w-full rounded-full object-cover"
                    src={`https://shoong.pockethost.io/api/files/users/${user.id}/${user.avatar}`}
                    alt={`${user.username} 프로필 사진`}
                    aria-hidden="true" // 스크린 리더에서는 숨김 처리
                  />
                </div>

                <div className="ml-3">
                  <p className="font-semibold" aria-label="작성자 이름">
                    {user.username}
                  </p>
                  <time
                    dateTime="2023-01-01T08:00"
                    className="text-sm text-gray-500"
                    aria-label="게시된 시간"
                  >
                    1일 전
                  </time>
                </div>
              </div>
              {isUserTheWriter && (
                <div className="flex gap-1">
                  <GoPencil
                    className="mr-1 h-6 w-6 cursor-pointer text-primary"
                    onClick={() => handleEdit(exchangeData)}
                  />
                  <GoTrash
                    className="mr-1 h-6 w-6 cursor-pointer text-primary"
                    onClick={() => handleDelete(exchangeData.id)}
                  />
                </div>
              )}
            </div>
            {isEditing === exchangeData.id ? (
              <div className="mt-3">
                <textarea
                  className="w-full rounded border px-2 py-1 text-gray-700"
                  value={editingContent}
                  onChange={(e) => setEditingContent(e.target.value)}
                />
                <div className="mt-2 flex justify-end">
                  <button
                    className="mr-2 rounded bg-gray-300 px-4 py-2 text-sm"
                    onClick={handleEditCancel}
                  >
                    취소
                  </button>
                  <button
                    className="rounded bg-blue-500 px-4 py-2 text-sm text-white"
                    onClick={() => handleEditSubmit(exchangeData.id)}
                  >
                    저장
                  </button>
                </div>
              </div>
            ) : (
              <div className="mt-3">
                <p className="text-gray-700" aria-label="메시지 내용">
                  {exchangeData.description}
                </p>
              </div>
            )}
            <div className="mt-4 flex justify-end">
              <button
                type="button"
                className="rounded bg-primary px-4 py-2 text-white hover:bg-indigo-700 focus:bg-indigo-700 focus:outline-none focus:ring-2"
              >
                대화하기
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
