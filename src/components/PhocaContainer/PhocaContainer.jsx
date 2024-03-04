import PhocaItem from '../PhocaItem/PhocaItem';
import pb from '@/api/pocketbase';
import { useState, useEffect } from 'react';


/**
 *
 * @param {{
 *  phocaImgSrc: string,
 *  logoImgSrc: string,
 *  groupName: string,
 *  memberName: string,
 *  title: string,
 *  likeCount: number,
 * }} props
 * @returns
 */


export default function PhocaContainer({phocaImgSrc,logoImgSrc,groupName,memberName,title,likeCount}) {
  const [phoca, setPhoca] = useState([]);

  useEffect(() => {
    const phoca = pb.collection('groups').getFullList({
      expand: 'photoCards',
    });
    pb.autoCancellation(false);
    phoca.then((phocaData) => {
      setPhoca(phocaData);
      console.log(phocaData);
    });
  }, []);

  return (
    <div className="draggable mb-7 mt-7">
      <ul className=" draggable flex gap-4 overflow-x-scroll">
        {phoca.map((group, groupIndex) => {
          return group.expand.photoCards.map((card, cardIndex) => (
            <li
              key={`${groupIndex}-${cardIndex}`}
              className="list-none m-0 p-0 w-44 relative"
            >
              <PhocaItem
                phocaImgSrc={`https://shoong.pockethost.io/api/files/photoCards/${card.id}/${card.cardImg}`}
                logoImgSrc={`https://shoong.pockethost.io/api/files/groups/${group.id}/${group.logoImage}`}
                groupName={card.groupName}
                memberName={card.memberName}
                title={card.title}
                likeCount={card.likeCount}
              />
            </li>
          ));
        })}
      </ul>
    </div>
  );
}
