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
  memberName,
  title,
  likeCount,
  imgClass = 'mb-2 w-150pxr h-215pxr rounded-xl relative',
  infoClass = 'flex flex-col items-start mb-1',
  groupClass = 'text-sb01 font-sb01 text-gray500',
  memberClass = 'text-sb01 font-sb01 text-contentSecondary',
  titleClass = 'w-150pxr overflow-hidden whitespace-nowrap truncate text-m03 font-m03 text-gray600 text-left ',
  linkClass = 'flex flex-col items-center justify-center cursor-pointer hover:scale-95 transition-transform duration-300 w-158pxr h-312pxr bg-gray-100 rounded-xl',
  logoImgClass = 'w-8 h-8 rounded-full object-cover mt-0.5',
}) {
  const phoca = useLoaderData();
  return (
    <div className="mb-7 mt-7 flex justify-center">
      <ul className="col-gap-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6 ">
        {phoca.map((group, groupIndex) => {
          return group.expand.photoCards.map((card, cardIndex) => (
            <li key={cardIndex} className="relative m-0 w-44 list-none p-0">
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
