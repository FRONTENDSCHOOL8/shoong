export default function ExchangeArticle({ exchangeList, users }) {
  // users 배열을 id를 키로 사용하는 객체로 변환
  const usersById = {};
  users.forEach((user) => {
    usersById[user.id] = user;
  });

  return (
    <ul className="mt-5">
      {exchangeList.map((exchangeData) => {
        const user = usersById[exchangeData.writer];
        if (!user) {
          return null;
        }
        return (
          <li
            key={exchangeData.id}
            className="mx-auto mb-3 overflow-hidden rounded-lg bg-white p-5 shadow-lg"
          >
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
