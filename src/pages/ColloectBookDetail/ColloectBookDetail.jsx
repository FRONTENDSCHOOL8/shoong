// @ts-nocheck

import pb from '@/api/pocketbase';
import CollectBookItemContainer from '@/components/CollectBookItemContainer/CollectBookItemContainer';
import DragonSphere from '@/components/DragonSphere/DragonSphere';
import NavBar from '@/components/NavBar/NavBar';
import ToastAlert from '@/components/ToastAlert/ToastAlert';
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useParams } from 'react-router';
import { useLoaderData } from 'react-router';

export default function ColloectBookDetail() {
  const data = useLoaderData();
  const { group, id } = useParams();
  const editButton = useRef(null);
  const [phocaInfo, setPhocaInfo] = useState([]);
  const [phocaID, setPhocaID] = useState([]);
  const [addID, setAddID] = useState([]);

  // 선택한 카드 저장
  const handleSave = () => {
    editButton.current.disabled = true;

    toast(
      <ToastAlert ref={editButton} phocaID={phocaID} addID={addID} id={id} />,
      {
        duration: Infinity,
        position: 'bottom-center',
      }
    );
  };

  // 카드 클릭 시 색상 변화
  const handleCard = (e) => {
    const pocaIdExtraction = e.target.src.split('/');

    if (e.target.style.filter === 'none') {
      e.target.style.filter = 'grayscale(100%)';
      const copy = [...addID];
      const index = copy.indexOf(pocaIdExtraction[6]);
      if (index !== -1) copy.splice(index, 1);
      setAddID(copy);
    } else {
      e.target.style.filter = 'none';
      setAddID([...addID, pocaIdExtraction[6]]);
    }
  };

  const collectBook = data.filter((item) => {
    if (item.groupName === group) return true;
  });
  const phocaData = collectBook[0].expand.photoCards;

  useEffect(() => {
    // 업데이트 발생 시 실시간으로 보유한 포카 정보 렌더링
    pb.collection('collectBook').subscribe(
      id,
      function (e) {
        const secondPocaInfo = e.record.expand.cardInfo.map((item) => {
          return item;
        });
        setPhocaInfo(secondPocaInfo);

        const secondPocaID = secondPocaInfo.map((item) => {
          return item.id;
        });
        setPhocaID(secondPocaID);
      },
      { expand: 'cardInfo' }
    );

    // 처음 렌더링 시 보유한 포카 정보
    const pbData = pb
      .collection('collectBook')
      .getOne(id, { expand: 'cardInfo' });
    pb.autoCancellation(false);

    pbData.then((res) => {
      const firstPocaInfo = res.expand.cardInfo.map((item) => {
        return item;
      });
      setPhocaInfo(firstPocaInfo);

      const firstPocaID = firstPocaInfo.map((item) => {
        return item.id;
      });
      setPhocaID(firstPocaID);
    });

    return () => pb.collection('collectBook').unsubscribe(id);
  }, [id]);

  return (
    <>
      <div className="relative h-[100%] bg-[#D8D6FF]">
        <Toaster />

        <DragonSphere
          group={group}
          phocaData={phocaData}
          phocaInfo={phocaInfo}
        />

        <div className="mb-5 flex items-center justify-center gap-3 pt-12pxr text-xl font-bold text-zinc-800">
          갖고 있는 포카를 선택하세요!
          <button
            ref={editButton}
            type="button"
            className="font-200 my-4 cursor-pointer rounded-full bg-white px-4  text-14pxr duration-200 hover:bg-primary hover:text-white"
            onClick={handleSave}
          >
            저장
          </button>
        </div>

        <CollectBookItemContainer
          title="보유중"
          state={true}
          phocaData={phocaData}
          phocaID={phocaID}
          imgFilter="h-full w-full object-cover rounded"
          // imgFilter="rounded h-full w-full object-cover"
          pb="pb-5"
        />
        <hr className="mb-5" />
        <CollectBookItemContainer
          title="미보유"
          state={false}
          phocaData={phocaData}
          phocaID={phocaID}
          handleCard={handleCard}
          imgFilter="h-full w-full object-cover rounded grayscale"
          pb="pb-110pxr"
        />
      </div>
    </>
  );
}
