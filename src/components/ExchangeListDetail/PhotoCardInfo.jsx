import PhocaImg from '../PhocaItem/PhocaImg';
import PhocaTitle from '../PhocaItem/PhocaTitle';
import ArtistInfo from '../PhocaItem/ArtistInfo';
import ArtistLogo from '../PhocaItem/ArtistLogo';

/**
 * 포토카드의 세부 정보를 표시하는 컴포넌트입니다.
 * 포토카드 이미지, 로고 이미지, 그룹명, 멤버 이름, 제목 및 라벨 정보를 포함하여 표시합니다.
 * 각 세부 정보는 컴포넌트의 props를 통해 전달된 포토카드 데이터 객체에서 가져옵니다.
 *
 * @param {Object} props 컴포넌트의 props
 * @param {Object} props.photoCardData 포토카드에 대한 세부 정보를 포함하는 객체입니다.
 * @param {string} props.photoCardData.cardImg 포토카드 이미지의 파일명입니다.
 * @param {string} props.photoCardData.groupName 포토카드와 연관된 그룹명입니다.
 * @param {string} props.photoCardData.id 포토카드의 고유 식별자입니다.
 * @param {string} props.photoCardData.label 포토카드에 대한 라벨 정보입니다.
 * @param {string} props.photoCardData.logoImage 포토카드와 연관된 로고 이미지의 파일명입니다.
 * @param {string} props.photoCardData.memberName 포토카드에 등장하는 구성원의 이름입니다.
 * @param {string} props.photoCardData.title 포토카드의 제목입니다.
 * @param {object} props.photoCardData.expand
 * @param {Object[]} [props.photoCardData.expand.exchangeList]
 *
 * @returns {React.ReactNode} 포토카드 세부 정보를 렌더링하는 React 컴포넌트입니다.
 */

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
            infoClass={'ml-2 flex gap-1 text-16pxr font-bold text-gray-500'}
            groupClass={''}
            memberClass={''}
          />
        </div>
        <PhocaTitle
          title={title}
          titleClass={'mt-1 self-start text-xl font-bold '}
        />
        <span className="mb-6 mt-3 self-start rounded-2xl border border-neutral-800 px-4 py-1pxr text-sm">
          {label}
        </span>
      </div>
    </>
  );
}
