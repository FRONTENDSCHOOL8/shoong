// @ts-ignore
import { useState, useEffect } from 'react';
// import { usePhotoCardStore } from '@/store/store';
import pb from '@/api/pocketbase';
import DetailHeader from '../DetailHeader/DetailHeader';
import { useMemo } from 'react';
import PhotoCardInfo from '../ExchangeListDetail/PhotoCardInfo';
import ExchangeEdit from '../ExchangeListDetail/ExchangeEdit';
import ExchangeArticle from '../ExchangeListDetail/ExchangeArticle';

/**
 * ExchangeList 컴포넌트는 photoCardData로부터 포토카드와 관련된 교환 글을 표시합니다.
 *
 * @param {Object} props - 컴포넌트 props 객체입니다.
 * @param {Object} props.photoCardData - 포토카드 데이터 객체입니다. expand 객체 내의 exchangeList 배열을 포함할 수 있습니다.
 * @param {string} [props.title] - (선택적) 컴포넌트 타이틀입니다.
 * @param {React.ReactNode} [props.children] - (선택적) 컴포넌트의 자식 요소들입니다.
 * @returns {React.ReactNode} - ExchangeList 컴포넌트를 렌더링합니다.
 */

export default function ExchangeList({ photoCardData }) {
  const [users, setUsers] = useState([]);
  // const [phocaData, setPhocaData] = useState(photoCardData);
  // console.log(phocaData);
  const [exchangeListData, setExchangeListData] = useState(
    photoCardData?.expand?.exchangeList || []
  );

  useEffect(() => {
    const writerIds = exchangeListData
      .map((exchangeData) => exchangeData?.writer)
      .filter((id) => id);

    if (writerIds.length > 0) {
      const fetchUsersData = async () => {
        try {
          pb.autoCancellation(false);
          const users = writerIds.map((writerId) => {
            return pb.collection('users').getOne(writerId);
          });
          const usersData = await Promise.all(users);

          setUsers(usersData);
        } catch (error) {
          console.error('Error fetching users data:', error);
        }
      };
      fetchUsersData();
    }
  }, [exchangeListData]);

  return (
    <div className="flexCenter mx-auto my-5 w-11/12 flex-col">
      {/* <DetailHeader>자세히</DetailHeader> */}
      <PhotoCardInfo photoCardData={photoCardData} />
      <div className="w-8/12 rounded-md border border-stone-300 bg-white p-4 text-center text-gray-500 ">
        <p className="font-medium">
          포토카드 교환 상대를 찾아 대화를 시도해 보세요!
        </p>
        <p className="text-x font-medium">
          프로필 이미지를 클릭해 대화를 시작하실 수 있습니다.
        </p>
      </div>
      <div className="mx-auto mt-10 w-10/12 self-start">
        <span className="text-xl font-extrabold leading-7 text-neutral-600">
          {exchangeListData ? exchangeListData.length : 0}
        </span>
        <span className="text-xl font-bold leading-7 text-neutral-500">
          개의 교환글
        </span>
      </div>
      <div className="mx-auto mt-4 w-10/12">
        <ExchangeEdit
          photoCardData={photoCardData}
          exchangeListData={exchangeListData}
          setExchangeListData={setExchangeListData}
        />
        <ExchangeArticle exchangeList={exchangeListData} users={users} />
      </div>
    </div>
  );
}
