import { IoIosInformationCircleOutline as Information } from 'react-icons/io';
import { FaChevronLeft as LeftArrow } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

// 리액트 라우터 - 뒤로가기 구현 시 참고한 자료
// https://velog.io/@jellyjw/React-useNavigate로-뒤로가기-기능-구현하기

export default function DetailHeader({ children }) {
  const navigate = useNavigate();
  return (
    <div className="flex h-7 w-full items-center justify-between">
      <div onClick={() => navigate(-1)}>
        <LeftArrow />
      </div>
      <div className="font-bold text-neutral-800">{children}</div>
      <Information size="1.2rem" />
    </div>
  );
}
