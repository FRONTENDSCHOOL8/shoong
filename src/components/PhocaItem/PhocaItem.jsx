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
 *   likeCount: number,
 *   imgUrl : string
 * }} props
 * @returns
 */

export default function PhocaItem({ props }) {
  const [phoca, setPhoca] = useState([]);

  useEffect(() => {
    const phoca = pb.collection('groups').getFullList({
      expand: 'photoCards',
    });
    pb.autoCancellation();
    phoca.then((phocaData) => {
      setPhoca(phocaData);
      // console.log(phocaData);
    });
  }, []);

  return (
    <ul>
      {phoca.map((group, groupIndex) => {
        console.log(group);
        return group.photoCards.map((card, cardIndex) => {
          // console.log('Card:', card);
          return (
            <li
              key={`${groupIndex}-${cardIndex}`}
              className="list-none m-0 p-0 w-44 h-353pxr relative"
            >
              <Link
                to="/"
                aria-label={`${card.title} 카드 디테일 페이지로 이동`}
                className="flex flex-col"
              >
                <PhocaImg
                  phocaImgSrc={`https://shoong.pockethost.io/api/files/photoCards/${card.id}/${card.cardImg}`}
                  phocaImgAlt={`${card.title}`}
                />
                <div className="flex gap-2">
                  <ArtistLogo
                    logoImgSrc={`https://shoong.pockethost.io/api/files/groups/${group.id}/${group.logoImage}`}
                    logoAltText={group.groupName}
                  />
                  <ArtistInfo
                    groupName={group.groupName}
                    artistName={card.memberName}
                  />
                </div>
                <div className="flex flex-col items-start">
                  <PhocaTitle title={card.title} />
                  <PhocaLikeCount likes={card.likeCount} />
                </div>
              </Link>
            </li>
          );
        });
      })}
    </ul>
  );
}
