// @ts-ignore
import PhocaImg from '../PhocaItem/PhocaImg';
import PhocaLikeButton from '../PhocaItem/PhocaLikeButton';
import PhocaTitle from '../PhocaItem/PhocaTitle';
import ArtistInfo from '../PhocaItem/ArtistInfo';
import ArtistLogo from '../PhocaItem/ArtistLogo';
import { useState } from 'react';

export default function ExchangeList({ photoCardData }) {
  const [comment, setComment] = useState('');
  const exchangeList = photoCardData.expand.exchangeList;
  console.log(photoCardData.exchangeList);
  console.log(photoCardData.expand.exchangeList);
  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleCancel = () => {
    setComment('');
  };

  const { cardImg, groupName, id, label, logoImage, memberName, title } =
    photoCardData;
  // const exchangeListData = photoCardData.expand.exchangeList;
  // const { created, description, status } = exchangeData;
  // const writerData = exchangeListData.expand.writer;
  // const { username, exchangeStatus, avatar } = writerData;
  console.log('포카데이터: ', photoCardData);
  // console.log('교환글 리스트: ', exchangeListAndWriter);
  // console.log('교환리스트데이터: ', exchangeData);
  // console.log('글작성유저데이터', writerData);

  return (
    <div className="flexCenter mx-auto my-5 w-11/12 flex-col">
      <PhocaImg
        phocaImgSrc={`https://shoong.pockethost.io/api/files/photoCards/${id}/${cardImg}`}
        phocaImgAlt={`${title} 포토카드`}
        imgClass={'w-8/12'}
      >
        <PhocaLikeButton />
      </PhocaImg>
      <div className="mt-4 flex w-10/12 flex-col">
        <div className="flex  items-center">
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
          titleClass={'mt-2 self-start text-2xl font-bold '}
        />
        <span className="mb-6 mt-3 self-start rounded-2xl border border-neutral-800 px-4 py-1pxr text-sm">
          {label}
        </span>
      </div>
      <div className="w-10/12 rounded-md border border-stone-300 bg-white p-2 text-center text-gray-500 ">
        <p className="font-medium">
          포토카드 교환 상대를 찾아 대화를 시도해 보세요!
        </p>
        <p className="text-x font-medium">
          프로필 이미지를 클릭해 대화를 시작하실 수 있습니다.
        </p>
        <p className="mt-2 text-sm font-normal">
          ** 포토카드 이미지는 거래의 이해를 돕는 식별 목적으로 사용하고 있어요
          ** <br /> ** 실제 포토카드와 사이즈가 상이할 수 있으니 주의해주세요!
          **
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
        <ul>
          <li className="rounded-15pxr w-80 bg-white"></li>
        </ul>
      </div>
    </div>
  );
}
