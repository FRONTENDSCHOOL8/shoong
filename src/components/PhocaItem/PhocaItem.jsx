import PhocaImg from './PhocaImg';
import ArtistLogo from './ArtistLogo';
import ArtistInfo from './ArtistInfo';
import PhocaTitle from './PhocaTitle';
import PhocaLikeButton from './PhocaLikeButton';
import PhocaLikeCount from './PhocaLikeCount';
// import { Link } from 'react-router-dom';
// import { Link, redirect, useOutletContext } from 'react-router-dom';

/**
 *
 * @param {{
 *   title: string,
 *   titleClass: string,
 *   phocaImgSrc: string,
 *   logoImgSrc: string,
 *   imgClass: string,
 *   groupName: string,
 *   memberName: string,
 *   likeCount: number,
 *   infoClass: string,
 *   groupClass: string,
 *   memberClass: string,
 * }} props
 * @returns
 */

export default function PhocaItem({
  title,
  titleClass="w-44 overflow-hidden whitespace-nowrap truncate text-sb03 font-sb03 text-gray600",
  phocaImgSrc,
  logoImgSrc,
  imgClass="mb-4 w-44 h-260pxr relative",
  groupName,
  memberName,
  likeCount,
  infoClass="flex flex-col items-start",
  groupClass="text-m04 font-m04 text-contentSecondary",
  memberClass="text-r01 font-r01 text-contentSecondary",
}) {
  return (
    <>
      <a
        to="/"
        aria-label={`${title} 카드 디테일 페이지로 이동`}
        className="flex flex-col transition-transform duration-300 cursor-pointer hover:scale-95 w-176pxr"
      >
        <PhocaImg phocaImgSrc={phocaImgSrc} phocaImgAlt={title} imgClass={imgClass}>
          <PhocaLikeButton />
        </PhocaImg>
        <div className="flex gap-2">
          <ArtistLogo logoImgSrc={logoImgSrc} groupName={groupName} />
          <ArtistInfo groupName={groupName} memberName={memberName} infoClass={infoClass} groupClass={groupClass} memberClass={memberClass} />
        </div>
        <div className="flex flex-col items-start ">
          <PhocaTitle title={title} titleClass={titleClass}/>
          <PhocaLikeCount likeCount={likeCount} />
        </div>
      </a>
    </>
  );
}
