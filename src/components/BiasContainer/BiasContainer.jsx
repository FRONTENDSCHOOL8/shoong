import Bias from '../Bias/Bias';
import pb from '@/api/pocketbase';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';

export default function BiasContainer() {
  const [data, setData] = useState([]);
  const biasGroup = useRef(null);
  const handleSelect = (e) => {
    if (e.target.value) biasGroup.current.src = e.target.value;
    else biasGroup.current.src = e.target.src;
  };

  useEffect(() => {
    const data = pb.collection('groups').getFullList();
    pb.autoCancellation(false);
    data.then((res) => {
      setData(res);
      // console.log(res);
    });
  }, []);

  return (
    <>
      <div className="draggable flex items-center">
        <Bias fakeRef={biasGroup}>내 최애</Bias>

        <ul className="biasContainer flex items-center gap-3 h-100pxr px-4 overflow-x-scroll">
          {data.map((item, index) => {
            return (
              <li key={index}>
                <Bias
                  alt={`${item.groupName} 로고`}
                  style={`hover:translate-y-1 duration-200 h-50pxr w-50pxr m-auto cursor-pointer`}
                  src={`https://shoong.pockethost.io/api/files/groups/${item.id}/${item.logoImage}`}
                  value={`https://shoong.pockethost.io/api/files/groups/${item.id}/${item.logoImage}`}
                  handle={handleSelect}
                >
                  {item.groupName}
                </Bias>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
