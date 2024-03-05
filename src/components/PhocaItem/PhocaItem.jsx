import PhocaImg from './PhocaImg';
import ArtistLogo from './ArtistLogo';
import ArtistInfo from './ArtistInfo';
import PhocaTitle from './PhocaTitle';
import PhocaLikeButton from './PhocaLikeButton';
import PhocaLikeCount from './PhocaLikeCount';
import { Link } from 'react-router-dom';
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
 *   linkClass: string,
 *  logoImgClass: string,
 * }} props
 * @returns
 */

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

}) {
  return (
    <>
      <Link
        to="/"
        aria-label={`${title} 카드 디테일 페이지로 이동`}
        className={linkClass}
      >
        <div>
          <PhocaImg phocaImgSrc={phocaImgSrc} phocaImgAlt={title} imgClass={imgClass}>
            <PhocaLikeButton />
          </PhocaImg>
          <div className="flex gap-2 items-start ">
            <ArtistLogo logoImgSrc={logoImgSrc} groupName={groupName} logoImgClass={logoImgClass}/>
            <ArtistInfo groupName={groupName} memberName={memberName} infoClass={infoClass} groupClass={groupClass} memberClass={memberClass} />
          </div>
          <div className="flex flex-col items-start ">
            <PhocaTitle title={title} titleClass={titleClass}/>
            <PhocaLikeCount likeCount={likeCount} />
          </div>
        </div>
      </Link>
    </>
  );
}
