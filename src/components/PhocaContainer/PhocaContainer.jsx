import PhocaItem from '../PhocaItem/PhocaItem';
import pb from '@/api/pocketbase';
import { useState, useEffect } from 'react';

export default function PhocaContainer() {
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
                ariaLabel={`${card.title} 카드 디테일 페이지로 이동`}
                phocaImgSrc={`https://shoong.pockethost.io/api/files/photoCards/${card.id}/${card.cardImg}`}
                phocaImgAlt={`${card.title} 카드`}
                logoImgSrc={`https://shoong.pockethost.io/api/files/groups/${group.id}/${group.logoImage}`}
                logoAltText={group.groupName}
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
