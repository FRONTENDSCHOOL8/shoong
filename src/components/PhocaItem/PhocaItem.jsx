import PhocaImg from './PhocaImg';
import ArtistLogo from './ArtistLogo';
import ArtistInfo from './ArtistInfo';
import PhocaTitle from './PhocaTitle';
import PhocaLikeCount from './PhocaLikeCount';
// import { Link } from 'react-router-dom';
// import { Link, redirect, useOutletContext } from 'react-router-dom';

/**
 *
 * @param {
 *   title: string,
 *   phocaImgSrc: string,
 *   logoImgSrc: string,
 *   groupName: string,
 *   memberName: string,
 *   likeCount: number,
 * } props
 * @returns
 */

export default function PhocaItem({
  title,
  phocaImgSrc,
  logoImgSrc,
  groupName,
  memberName,
  likeCount,
}) {
  return (
    <>
      <a
        to="/"
        aria-label={`${title} 카드 디테일 페이지로 이동`}
        className="flex flex-col cursor-pointer hover:scale-95 transition-transform duration-300 w-176pxr"
      >
        <PhocaImg phocaImgSrc={phocaImgSrc} phocaImgAlt={title} />
        <div className="flex gap-2">
          <ArtistLogo logoImgSrc={logoImgSrc} groupName={groupName} />
          <ArtistInfo groupName={groupName} artistName={memberName} />
        </div>
        <div className="flex flex-col items-start">
          <PhocaTitle title={title} />
          <PhocaLikeCount likeCount={likeCount} />
        </div>
      </a>
    </>
  );
}
