// @ts-ignore
import { useState, useEffect } from 'react';
import PhocaImg from '../PhocaItem/PhocaImg';
import PhocaLikeButton from '../PhocaItem/PhocaLikeButton';
import PhocaTitle from '../PhocaItem/PhocaTitle';
import ArtistInfo from '../PhocaItem/ArtistInfo';
import ArtistLogo from '../PhocaItem/ArtistLogo';
import pb from '@/api/pocketbase';
import DetailHeader from '../DetailHeader/DetailHeader';
import { useMemo } from 'react';

export default function ExchangeList({ photoCardData }) {
  const [comment, setComment] = useState('');
  const [users, setUsers] = useState([]);

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleCancel = () => {
    setComment('');
  };

  // photoCardData의 exchangeList를 계산하여 메모리에 저장
  const exchangeList = useMemo(() => {
    // photoCardData가 undefined이거나 exchangeList가 없으면 빈 배열을 반환
    return photoCardData?.expand?.exchangeList || [];
  }, [photoCardData]);

  useEffect(() => {
    const writerIds = exchangeList
      .map((exchangeData) => exchangeData?.writer)
      .filter((id) => id);

    if (writerIds.length > 0) {
      const fetchUsersData = async () => {
        try {
          pb.autoCancellation(false);
          const users = writerIds.map((writerId) => {
            return pb.collection('users').getOne(writerId);
          });
          const usersData = await Promise.all(users);

          setUsers(usersData);
        } catch (error) {
          console.error('Error fetching users data:', error);
        }
      };
      fetchUsersData();
    }
  }, [exchangeList]);
  console.log('users:', users);

  const { cardImg, groupName, id, label, logoImage, memberName, title } =
    photoCardData;

  return (
    <div className="flexCenter mx-auto my-5 w-11/12 flex-col">
      <DetailHeader>자세히</DetailHeader>
      <PhocaImg
        phocaImgSrc={`https://shoong.pockethost.io/api/files/photoCards/${id}/${cardImg}`}
        phocaImgAlt={`${title} 포토카드`}
        imgClass={'w-5/12 mt-3'}
      />
      <div className="mt-6 flex w-10/12 flex-col">
        <div className="flex items-end">
          <ArtistLogo
            logoImgSrc={`https://shoong.pockethost.io/api/files/photoCards/${id}/${logoImage}`}
            groupName={groupName}
            logoImgClass={'w-7 h-7 rounded-full object-cover mt-1'}
          />
          <ArtistInfo
            groupName={groupName}
            memberName={memberName}
            infoClass={'ml-2 flex gap-2 text-16pxr font-bold text-gray-500'}
            groupClass={''}
            memberClass={''}
          />
        </div>
        <PhocaTitle
          title={title}
          titleClass={'mt-1 self-start text-2xl font-bold '}
        />
        <span className="mb-6 mt-3 self-start rounded-2xl border border-neutral-800 px-4 py-1pxr text-sm">
          {label}
        </span>
      </div>
      <div className="w-8/12 rounded-md border border-stone-300 bg-white p-4 text-center text-gray-500 ">
        <p className="font-medium">
          포토카드 교환 상대를 찾아 대화를 시도해 보세요!
        </p>
        <p className="text-x font-medium">
          프로필 이미지를 클릭해 대화를 시작하실 수 있습니다.
        </p>
      </div>
      <div className="mx-auto mt-10 w-10/12 self-start">
        <span className="text-xl font-extrabold leading-7 text-neutral-600">
          {photoCardData.exchangeList ? photoCardData.exchangeList.length : 0}
        </span>
        <span className="text-xl font-bold leading-7 text-neutral-500">
          개의 교환글
        </span>
      </div>
      <div className="mx-auto mt-4 w-10/12">
        <form className="mx-auto overflow-hidden rounded-xl bg-white p-5 shadow-meetUp">
          <fieldset>
            <legend className="sr-only">교환글 작성 폼</legend>
            <div className="flex items-start space-x-4">
              {/* <ArtistLogo
                logoImgSrc={`https://shoong.pockethost.io/api/files/users/${writerData.id}/${avatar}`}
                groupName={username}
                logoImgClass={'w-10 h-10 rounded-full object-cover mt-1'}
              /> */}
              <div className="relative flex-1">
                <label htmlFor="exchangeArticle" className="sr-only">
                  교환 글을 입력하세요
                </label>
                <textarea
                  id="exchangeArticle"
                  name="exchangeArticle"
                  className="relative w-full rounded border border-gray-300 p-2 text-sm"
                  placeholder="코멘트를 입력하세요"
                  rows="3"
                  maxLength="150"
                  value={comment}
                  onChange={handleCommentChange}
                  aria-required="true"
                ></textarea>
                <span className="absolute bottom-60pxr right-2 text-xs text-gray-500">
                  {comment.length}/150
                </span>
                <div className="mt-2 flex items-center justify-end">
                  <div className="flex space-x-2">
                    <button
                      type="submit"
                      className="rounded bg-blue-500 px-4 py-2 text-white transition duration-300 hover:bg-blue-700"
                    >
                      저장
                    </button>
                    <button
                      type="button"
                      onClick={handleCancel}
                      className="rounded bg-blue-500 px-4 py-2 text-white transition duration-300 hover:bg-blue-700"
                    >
                      취소
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </fieldset>
        </form>
        <ul className="mt-5">
          {exchangeList.map((exchangeData) => (
            <li
              key={exchangeData.id}
              className="mx-auto mb-3 overflow-hidden rounded-lg bg-white p-5 shadow-lg"
            >
              <div className="flex items-center">
                <img
                  className="h-10 w-10 rounded-full"
                  src="/path/to/user-avatar.jpg" // 실제 사용자 이미지 경로로 바꿔주세요.
                  alt="김미미 프로필 사진"
                  aria-hidden="true" // 스크린 리더에서는 숨김 처리
                />
                <div className="ml-3">
                  <p className="font-semibold" aria-label="작성자 이름">
                    김미미
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
                  {}
                </p>
              </div>
              <div className="mt-4 flex justify-end">
                <button
                  type="button"
                  className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  aria-label="대화하기 버튼"
                >
                  대화하기
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
