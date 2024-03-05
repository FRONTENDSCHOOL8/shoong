import { useLoaderData } from 'react-router';
import PhocaItem from '../PhocaItem/PhocaItem';


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


export default function PhocaContainer({
  phocaImgSrc,
  logoImgSrc,
  groupName,
  memberName,
  title,
  likeCount,
  imgClass="mb-3 w-44 h-260pxr relative",
  infoClass="flex flex-col items-start",
  groupClass="text-m04 font-m04 text-contentSecondary",
  memberClass="text-r01 font-r01 text-contentSecondary",
  titleClass="w-44 overflow-hidden whitespace-nowrap truncate text-sb03 font-sb03 text-gray600 mb-1 mt-1",
  linkClass="flex flex-col items-center cursor-pointer hover:scale-95 transition-transform duration-300 w-186pxr rounded-xl",
  logoImgClass="w-10 h-10 rounded-full object-cover mt-1"
}) {

  const phoca = useLoaderData();


  // 전체 그룹에 있는 모든 photoCards를 하나의 배열로 통합
  const allPhoca = phoca.reduce((acc, group) => {
    return acc.concat(group.expand.photoCards);
  }, []);


  // 통합된 photoCards 배열을 created 필드 기준으로 최신순으로 정렬
  const latestCreatedPhoca = allPhoca.sort((a, b) => new Date(b.created) - new Date(a.created));

  // 상위 10개의 photoCards만 선택
  const latestCreatedTop10Phoca = latestCreatedPhoca.slice(0, 10);
// console.log(latestCreatedTop10Phoca)


  return (
    <div className="draggable mb-7 mt-7">
      <ul className=" draggable flex gap-4 overflow-x-scroll">
      {latestCreatedTop10Phoca.map((card, index) => (
            <li
              key={index}
              className="list-none m-0 p-0 w-44 relative"
            >
              <PhocaItem
                phocaImgSrc={`https://shoong.pockethost.io/api/files/photoCards/${card.id}/${card.cardImg}`}
                logoImgSrc={`https://shoong.pockethost.io/api/files/photoCards/${card.id}/${card.logoImage}`}
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
          ))}
      </ul>
    </div>
  );
}
