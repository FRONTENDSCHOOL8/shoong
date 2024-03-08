import pb from '@/api/pocketbase';
import { useEffect } from 'react';
import { userData } from '@/loader';
import { RiDeleteBin6Line } from 'react-icons/ri';

export default function ExchangeArticle({
  exchangeListData,
  setExchangeListData,
  users,
}) {
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

  const loggedInUserId = 'ctjl558hrfcvczo'; //임시 유저 ID

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
                <img
                  className="h-10 w-10 rounded-full"
                  src={`https://shoong.pockethost.io/api/files/users/${user.id}/${user.avatar}`}
                  alt={`${user.username} 프로필 사진`}
                  aria-hidden="true" // 스크린 리더에서는 숨김 처리
                />
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
                <RiDeleteBin6Line
                  className="mr-1 h-5 w-5 cursor-pointer"
                  onClick={() => handleDelete(exchangeData.id)}
                  aria-label="교환 글 삭제"
                />
              )}
            </div>
            <div className="mt-3">
              <p className="text-gray-700" aria-label="메시지 내용">
                {exchangeData.description}
              </p>
            </div>
            <div className="mt-4 flex justify-end">
              <button
                type="button"
                className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
