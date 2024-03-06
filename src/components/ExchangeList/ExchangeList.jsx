// @ts-ignore
import PhocaImg from '../PhocaItem/PhocaImg';
import PhocaLikeButton from '../PhocaItem/PhocaLikeButton';
import PhocaTitle from '../PhocaItem/PhocaTitle';
import ArtistInfo from '../PhocaItem/ArtistInfo';
import ArtistLogo from '../PhocaItem/ArtistLogo';

export default function ExchangeList({ phocaData }) {
  const { cardImg, groupName, id, label, logoImage, memberName, title } =
    phocaData;
  const exchangeListData = phocaData.expand.exchangeList;
  const { created, description, status } = exchangeListData;
  const writerData = exchangeListData.expand.writer;
  const { username, exchangeStatus, avatar } = writerData;

  console.log('포카데이터: ', phocaData);
  console.log('교환리스트데이터: ', exchangeListData);
  console.log('글작성유저데이터', writerData);

  return (
    <div className="flexCenter mx-auto my-5 w-11/12 flex-col">
      <PhocaImg
        phocaImgSrc={`https://shoong.pockethost.io/api/files/photoCards/${id}/${cardImg}`}
        phocaImgAlt={`${title} 포토카드`}
        imgClass={'w-8/12'}
      >
        <PhocaLikeButton />
      </PhocaImg>
      <div className="mt-8 flex w-9/12 flex-col">
        <div className="flex  items-center">
          <ArtistLogo
            logoImgSrc={`https://shoong.pockethost.io/api/files/photoCards/${id}/${logoImage}`}
            groupName={groupName}
            logoImgClass={''}
          />
          <ArtistInfo
            groupName={groupName}
            memberName={memberName}
            infoClass={'ml-2 flex gap-2 text-xl font-bold text-gray-500'}
            groupClass={''}
            memberClass={''}
          />
        </div>
        <PhocaTitle
          title={title}
          titleClass={'mt-5 self-start text-3xl font-bold '}
        />
        <span className="mb-6 mt-3 self-start rounded-2xl border border-neutral-800 px-5 py-2pxr text-lg">
          {label}
        </span>
      </div>
      <div className="w-9/12 rounded-md border border-stone-300 bg-white  p-2 text-gray-500 ">
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
      <div className="mx-auto mt-8 w-9/12 self-start">
        <span className="text-xl font-extrabold leading-7 text-neutral-600">
          10
        </span>
        <span className="text-xl font-bold leading-7 text-neutral-500">
          개의 코멘트
        </span>
      </div>
      <div className="mx-auto mt-5 w-9/12">
        <section className="border border-gray-400 shadow-navShadow">
          <ArtistLogo logoImgSrc={''} groupName={''} logoImgClass={''} />
        </section>
        <ul>
          <li className="rounded-15pxr w-80 bg-white"></li>
        </ul>
      </div>
    </div>
  );
}
