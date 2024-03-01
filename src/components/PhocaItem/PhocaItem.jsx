import React from 'react';
import PhocaImg from './PhocaImg';
import ArtistLogo from './ArtistLogo';
import ArtistInfo from './ArtistInfo';
import PhocaTitle from './PhocaTitle';
import PhocaLikeCount from './PhocaLikeCount';
import { Link } from 'react-router-dom';
// import { Link, redirect, useOutletContext } from 'react-router-dom';

import pb from '@/api/pocketbase';
import { useState, useEffect } from 'react';

/**
 * @param {{
 *   title: string,
 *   altText: string,
 *   likes: number,
 *   imgUrl : string
 * }} props
 * @returns {JSX.Element}
 */

export default function PhocaItem({ title, altText, likes, imgUrl }) {
  const [phocaImg, setPhocaImg] = useState([]);

  useEffect(() => {
    const phocaImg = pb.collection('photoCards').getFullList();
    pb.autoCancellation(false);
    phocaImg.then((res) => {
      setPhocaImg(res);
      console.log(res);
    });
  }, []);

  return (
    <ul>
      {phocaImg.map((item, index) => {
        return (
          <li
            key={index}
            className="list-none m-0 p-0 w-44 h-[353px] relative"
            style={{ width: '11rem', height: '22rem' }}
          >
            <a
              to="/"
              aria-label={`${title} 카드 디테일 페이지로 이동`}
              className="flex flex-col"
            >
              <PhocaImg />
              <div className="flex gap-2">
                <ArtistLogo imgUrl={imgUrl} altText={altText} />
                <ArtistInfo />
              </div>
              <div className="flex flex-col items-start">
                <PhocaTitle title={title} />
                <PhocaLikeCount likes={likes} />
              </div>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
