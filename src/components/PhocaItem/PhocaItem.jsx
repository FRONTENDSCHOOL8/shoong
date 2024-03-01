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

export default function PhocaItem({ props }) {
  const [phoca, setPhoca] = useState([]);

  useEffect(() => {
    const phoca = pb.collection('groups').getFullList({
      expand: 'photoCards',
    });
    pb.autoCancellation(false);
    phoca.then((res) => {
      setPhoca(res);
      console.log(res);
    });
  }, []);

  return (
    <ul>
      {phoca.map((item, index) => {
        return (
          <li
            key={index}
            className="list-none m-0 p-0 w-44 h-[353px] relative"
            style={{ width: '11rem', height: '22rem' }}
          >
            <a
              to="/"
              aria-label={`${item.title} 카드 디테일 페이지로 이동`}
              className="flex flex-col"
            >
              <PhocaImg />
              <div className="flex gap-2">
                <ArtistLogo
                  logoImgSrc={`https://shoong.pockethost.io/api/files/groups/${item.id}/${item.logoImage}`}
                  logoAltText={item.groupName}
                />
                <ArtistInfo
                  groupName={item.group}
                  artistName={item.memberName}
                />
              </div>
              <div className="flex flex-col items-start">
                <PhocaTitle title={item.title} />
                <PhocaLikeCount likes={item.likeCount} />
              </div>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
