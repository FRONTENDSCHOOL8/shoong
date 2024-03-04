import { useEffect } from 'react';
import pb from '@/api/pocketbase';
import PhocaItem from '../PhocaItem/PhocaItem';
import { useState } from 'react';

export default function ExchangeList() {
  const [poca, setPhoca] = useState(null);
  // useEffect(() => {
  //   const phoca = pb.collection('photoCards').getFullList({
  //     expand: 'photoCards',
  //   });
  //   pb.autoCancellation(false);
  //   phoca.then((phocaData) => {
  //     setPhoca(phocaData);
  //     console.log(phocaData);
  //   });
  // }, []);

  return (
    <div className="flexCenter w-11/12 flex-col py-5">
      <div className="w-9/12 rounded-md border border-stone-300 bg-white p-2  text-gray-500">
        <p className="font-medium">
          포토카드 교환 상대를 찾아 대화를 시도해 보세요!
        </p>
        <p className="font-medium">
          프로필 이미지를 클릭해 대화를 시작하실 수 있습니다.
        </p>
        <p className="font-normal">
          ** 포토카드 이미지는 거래의 이해를 돕는 식별 목적으로 사용하고 있어요
          ** <br /> ** 실제 포토카드와 사이즈가 상이할 수 있으니 주의해주세요!
          **
        </p>
      </div>
      <div className="self-start">
        <span className="font-['SUIT Variable'] text-xl font-extrabold leading-7 text-neutral-600">
          10
        </span>
        <span className="font-['SUIT Variable'] text-xl font-bold leading-7 text-neutral-500">
          개의 코멘트
        </span>
      </div>
    </div>
  );
}
