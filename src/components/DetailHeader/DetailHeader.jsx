import { IoIosInformationCircleOutline as Information } from 'react-icons/io';
import { FaChevronLeft as LeftArrow } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import useBottomSheet from '../BottomSheet/useBottomSheet';
import BottomSheet from '../BottomSheet/BottomSheet';

// 리액트 라우터 - 뒤로가기 구현 시 참고한 자료
// https://velog.io/@jellyjw/React-useNavigate로-뒤로가기-기능-구현하기

export default function DetailHeader({ children }) {
  const navigate = useNavigate();
  const { button, bottomSheet } = useBottomSheet();
  console.log(button);
  return (
    <>
      <div className="flex h-7 w-full items-center justify-between">
        <LeftArrow onClick={() => navigate(-1)} />
        <div className="font-bold text-neutral-800">{children}</div>
        <div ref={button}>
          <Information size="1.2rem" />
        </div>
      </div>

      <div ref={bottomSheet}>
        {/* <BottomSheet radio itemList={['전체', '앨범', '특전', '팬싸']} /> */}
        <BottomSheet>
          ** 포토카드 이미지는 거래의 이해를 돕는 식별 목적으로 사용하고
          있어요**
          <br />
          <br />
          ** 실제 포토카드와 이미지의 사이즈가 상이할 수 있으니 주의해주세요! **
        </BottomSheet>
      </div>
    </>
  );
}
