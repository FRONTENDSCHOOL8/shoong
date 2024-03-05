import PhocaItem from '../PhocaItem/PhocaItem';
import { useLoaderData } from 'react-router';


/**
 *
 * @param {{
*  phocaImgSrc: string,
*  logoImgSrc: string,
*  groupName: string,
*  memberName: string,
*  imgClass: string,
*  infoClass: string,
*  groupClass: string,
*  memberClass: string,
*  title: string,
*  titleClass: string,
*  likeCount: number,
*  linkClass: string,
*  logoImgClass: string,
 * }} props
 * @returns
 */



export default function PhocaContainerEx({
  phocaImgSrc,
  logoImgSrc,
  groupName,
  imgClass,
  infoClass,
  groupClass,
  memberClass,
  memberName,
  title,
  titleClass,
  likeCount,
  linkClass,
  logoImgClass,
}) {
  const phoca = useLoaderData();

  return (
    <div className="mb-7 mt-7">
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 col-gap-8 gap-4">
        {phoca.map((group, groupIndex) => {
          return group.expand.photoCards.map((card, cardIndex) => (
            <li
              key={`${groupIndex}-${cardIndex}`} // key 값을 보다 유일하게 만들기 위해 수정
              className="list-none m-0 p-0 w-44 relative"
            >
              <PhocaItem
                phocaImgSrc={`https://shoong.pockethost.io/api/files/photoCards/${card.id}/${card.cardImg}`}
                logoImgSrc={`https://shoong.pockethost.io/api/files/groups/${group.id}/${group.logoImage}`}
                groupName={card.groupName}
                memberName={card.memberName}
                title={card.title}
                likeCount={card.likeCount}
                titleClass={titleClass}
                imgClass={imgClass}
                infoClass={infoClass}
                groupClass={groupClass}
                memberClass={memberClass}
                linkClass={linkClass}
                logoImgClass={logoImgClass}
              />
            </li>
          ));
        })}
      </ul>
    </div>
  );
}

