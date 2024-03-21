import pb from '@/api/pocketbase';
import { useState } from 'react';
import { GoTrash, GoPencil } from 'react-icons/go';

/**
 * 교환 글 목록을 표시하고 관리하는 컴포넌트입니다. 사용자는 이 컴포넌트를 통해 교환 글을 수정하거나 삭제할 수 있습니다.
 * 각 교환 글은 작성자의 정보와 함께 표시됩니다. 로그인한 사용자가 교환 글의 작성자인 경우, 수정 및 삭제 아이콘이 표시됩니다.
 *
 * @param {Object} props 컴포넌트 props
 * @param {Boolean} props.loginStatus
 * @param {Object} props.loginUser
 * @param {Object[]} props.exchangeListData 교환 글 데이터의 배열. 각 객체는 교환 글의 정보를 포함합니다.
 * @param {Function} props.setExchangeListData 교환 글 데이터를 업데이트하는 함수.
 * @param {Object[]} props.users 사용자 정보의 배열. 각 객체는 사용자의 상세 정보를 포함합니다.
 *
 * @returns {React.ReactNode} 교환 글 목록을 표시하는 React 컴포넌트.
 */

export default function ExchangeArticle({
  exchangeListData,
  setExchangeListData,
  users,
  loginUser,
  loginStatus,
}) {
  const [isEditing, setIsEditing] = useState(null);
  const [editingContent, setEditingContent] = useState('');
  let loggedInUserId = '';
  if (loginStatus === true) loggedInUserId = loginUser.user.id || null;

  // 수정
  const handleEdit = (exchangeData) => {
    setIsEditing(exchangeData.id);
    setEditingContent(exchangeData.description);
  };

  // 수정 취소
  const handleEditCancel = () => {
    setIsEditing(null);
    setEditingContent('');
  };

  // 삭제
  const handleDelete = async (exchangeId) => {
    try {
      // DB에서 해당 교환 글을 삭제
      await pb.collection('exchangeList').delete(exchangeId);
      alert('교환 글이 삭제되었습니다.');
      setExchangeListData((prevExchangeList) =>
        prevExchangeList.filter((exchange) => exchange.id !== exchangeId)
      );
    } catch (error) {
      // console.error('교환 글을 삭제하는 중 에러가 발생했습니다:', error);
      alert('교환 글을 삭제하는 데 실패했습니다.');
    }
  };

  // 수정 저장
  const handleEditSubmit = async (exchangeId) => {
    try {
      if (editingContent)
        await pb
          .collection('exchangeList')
          .update(exchangeId, { description: editingContent });

      // 상태 업데이트 로직 수정
      setExchangeListData((prevData) =>
        prevData.map((data) =>
          data.id === exchangeId
            ? { ...data, description: editingContent }
            : data
        )
      );

      // 수정 상태 종료 및 알림
      setIsEditing(null);
      setEditingContent('');
      alert('교환 글이 수정되었습니다.');
    } catch (error) {
      // console.error('교환 글 수정 중 에러가 발생했습니다:', error);
      alert('교환 글 수정에 실패했습니다.');
    }
  };

  // users 배열을 id를 키로 사용하는 객체로 변환
  const usersById = {};
  users.forEach((user) => {
    usersById[user.id] = user;
  });

  // 날짜 차이를 계산하는 함수
  function timeSince(dateToObject) {
    const date = new Date(Date.parse(dateToObject));
    // @ts-ignore
    const seconds = Math.floor((new Date() - date) / 1000);

    let interval = seconds / 31536000;
    if (interval > 1) {
      return Math.floor(interval) + '년 전';
    }
    interval = seconds / 2592000;
    if (interval > 1) {
      return Math.floor(interval) + '달 전';
    }
    interval = seconds / 86400;
    if (interval > 1) {
      return Math.floor(interval) + '일 전';
    }
    interval = seconds / 3600;
    if (interval > 1) {
      return Math.floor(interval) + '시간 전';
    }
    interval = seconds / 60;
    if (interval > 1) {
      return Math.floor(interval) + '분 전';
    }
    return '방금 전';
  }

  return (
    <ul className="mt-5">
      {exchangeListData.map((exchangeData) => {
        const user = usersById[exchangeData.writer];
        const isUserTheWriter = exchangeData.writer === loggedInUserId;
        const timeSinceUpdated = timeSince(exchangeData.updated);
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
                <div className="h-11 w-10  ">
                  <img
                    className="h-full w-full rounded-full border-2 object-cover"
                    src={`https://shoong.pockethost.io/api/files/users/${user.id}/${user.avatar}`}
                    alt={`${user.username} 프로필 사진`}
                    aria-hidden="true"
                  />
                </div>
                <div className="ml-3">
                  <p className="font-semibold">{user.username}</p>
                  <time
                    dateTime={exchangeData.updated}
                    className="text-sm text-gray-500"
                  >
                    {timeSinceUpdated}
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
                <div className="mt-2 flex justify-end gap-2">
                  <button
                    className="rounded bg-primary px-4 py-2 text-sm text-white"
                    onClick={() => handleEditSubmit(exchangeData.id)}
                  >
                    저장
                  </button>
                  <button
                    className="rounded bg-primary px-4 py-2 text-sm text-white"
                    onClick={handleEditCancel}
                  >
                    취소
                  </button>
                </div>
              </div>
            ) : (
              <div className="mt-3">
                <p className="text-gray-700">{exchangeData.description}</p>
              </div>
            )}
            <div className="mt-4 flex justify-end">
              <button
                type="button"
                className="rounded bg-primary px-4 py-1 text-white hover:bg-indigo-700 focus:bg-indigo-700 focus:outline-none"
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
