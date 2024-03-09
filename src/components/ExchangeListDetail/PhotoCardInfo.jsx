import PhocaImg from '../PhocaItem/PhocaImg';
import PhocaLikeButton from '../PhocaItem/PhocaLikeButton';
import PhocaTitle from '../PhocaItem/PhocaTitle';
import ArtistInfo from '../PhocaItem/ArtistInfo';
import ArtistLogo from '../PhocaItem/ArtistLogo';

export default function PhotoCardInfo({ photoCardData }) {
  const { cardImg, groupName, id, label, logoImage, memberName, title } =
    photoCardData;
  return (
    <>
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
    </>
  );
}
