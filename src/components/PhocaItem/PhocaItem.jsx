import PhocaImg from './PhocaImg';
import ArtistLogo from './ArtistLogo';
import ArtistInfo from './ArtistInfo';
import PhocaTitle from './PhocaTitle';
import PhocaLikeButton from './PhocaLikeButton';
import PhocaLikeCount from './PhocaLikeCount';
import { useNavigate } from 'react-router-dom';

export default function PhocaItem({
  title,
  titleClass,
  phocaImgSrc,
  logoImgSrc,
  imgClass,
  groupName,
  memberName,
  likeCount,
  infoClass,
  groupClass,
  memberClass,
  linkClass,
  logoImgClass,
  phocaId,
}) {
  let navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/exchangeDetail/${phocaId}`);
  };

  return (
    <>
      <button
        onClick={handleNavigate}
        aria-label={`${title} 카드 디테일 페이지로 이동`}
        className={`${linkClass} focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
      >
        <div>
          <PhocaImg
            phocaImgSrc={phocaImgSrc}
            phocaImgAlt={title}
            imgClass={imgClass}
          >
            <PhocaLikeButton phocaId={phocaId} />
          </PhocaImg>
          <div className="flex items-start gap-2">
            <ArtistLogo
              logoImgSrc={logoImgSrc}
              groupName={groupName}
              logoImgClass={logoImgClass}
            />
            <ArtistInfo
              groupName={groupName}
              memberName={memberName}
              infoClass={infoClass}
              groupClass={groupClass}
              memberClass={memberClass}
            />
          </div>
          <div className="flex flex-col items-start">
            <PhocaTitle title={title} titleClass={titleClass} />
            <PhocaLikeCount likeCount={likeCount} />
          </div>
        </div>
      </button>
    </>
  );
}
