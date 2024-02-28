import React from 'react';
import PhocaImg from './PhocaImg';
import ArtistInfo from './ArtistInfo';
import PhocaTitle from './PhocaTitle';
import { Link } from 'react-router-dom';
import ArtistLogo from './ArtistLogo';
import PhocaLikeCount from './PhocaLikeCount';

/**
 *
 * @param {{
 *   title: string,
 *   altText: string,
 *   likes: number,
 * }} props
 * @returns {JSX.Element}
 */
const PhocaItem = ({ title, altText, likes }) => {
  return (
    <Link
      to="/"
      aria-label={`${title} 카드 디테일 페이지로 이동`}
      className="flex flex-col mb-10"
      style={{ width: '11rem', height: '22rem' }}
    >
      <PhocaImg />
      <div className="flex gap-2">
        <ArtistLogo imgUrl="../../../public/blackPink.jpeg" altText={altText} />
        <ArtistInfo />
      </div>
      <div className="flex flex-col items-start mb-10">
        <PhocaTitle title="PhocaTitle" />
        <PhocaLikeCount likes={likes} />
      </div>
    </Link>
  );
};

export default PhocaItem;
