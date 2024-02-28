import pb from '@/api/pocketbase';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';

export default function Bias() {
  const [data, setData] = useState([]);
  const biasGroup = useRef(null);
  const handleSelect = (e) => {
    if (e.target.value) biasGroup.current.src = e.target.value;
    else biasGroup.current.src = e.target.src;
  };

  useEffect(() => {
    const pbData = pb.collection('photoCards').getFullList();
    pb.autoCancellation(false); // 포켓베이스 중복 호출 막기
    pbData.then((res) => {
      setData(res);
    });
  }, []);

  return (
    <>
      <figure className="flex flex-col gap-[7px]">
        <img
          ref={biasGroup}
          className="h-[50px] w-[50px] m-auto"
          src="/src/assets/icons/bias.svg"
          alt="내 최애 로고"
        />
        <figcaption className="text-sb02 w-[100px] font-sb02">
          내 최애
        </figcaption>
      </figure>

      <div className="biasContainer bg-[#D8D6FF] flex items-center gap-3 w-[360px] h-[100px] px-4 overflow-x-scroll">
        {data.map((item, index) => {
          return (
            <figure key={index} className="flex flex-col gap-[7px]">
              <button
                onClick={handleSelect}
                value={`https://shoong.pockethost.io/api/files/photoCards/${item.id}/${item.logoImage}`}
              >
                <img
                  className="hover:translate-y-1 duration-200 h-[50px] w-[50px] m-auto cursor-pointer"
                  src={`https://shoong.pockethost.io/api/files/photoCards/${item.id}/${item.logoImage}`}
                  alt={`${item.group} 로고`}
                />
              </button>
              <figcaption className="text-contentSecondary text-sb02 w-[100px] font-sb02">
                {item.group}
              </figcaption>
            </figure>
          );
        })}
      </div>
    </>
  );
}
