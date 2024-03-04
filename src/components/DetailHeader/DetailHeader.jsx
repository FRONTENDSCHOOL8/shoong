import { IoIosInformationCircleOutline as Information } from 'react-icons/io';
import { FaChevronLeft as LeftArrow } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

// 리액트 라우터 - 뒤로가기 구현 시 참고한 자료
// https://velog.io/@jellyjw/React-useNavigate로-뒤로가기-기능-구현하기

export default function DetailHeader({ backLink, children }) {
  const navigate = useNavigate();
  return (
    <div className="w-full h-7 justify-between items-center inline-flex">
      {/* <Link to={`/${backLink}`}>
        <LeftArrow />
      </Link> */}
      <div onClick={() => navigate(-1)}>
        <LeftArrow />
      </div>
      <div className="text-neutral-800 text-base font-bold font-['SUIT Variable'] leading-snug">
        {children}
      </div>
      <Information size="1.2rem" />
    </div>
  );
}
