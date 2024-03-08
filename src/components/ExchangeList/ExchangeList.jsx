// @ts-ignore
import { useState, useEffect } from 'react';
// import { usePhotoCardStore } from '@/store/store';
import pb from '@/api/pocketbase';
import DetailHeader from '../DetailHeader/DetailHeader';
import { useMemo } from 'react';
import PhotoCardInfo from '../ExchangeListDetail/PhotoCardInfo';
import ExchangeEdit from '../ExchangeListDetail/ExchangeEdit';
import ExchangeArticle from '../ExchangeListDetail/ExchangeArticle';
import Modal from '../Modal/Modal';

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
  const [exchangeListData, setExchangeListData] = useState(
    photoCardData?.expand?.exchangeList || []
  );

  useEffect(() => {
    // 교환글에서 작성자들의 id들을 추출
    const writerIds = exchangeListData
      .map((exchangeData) => exchangeData?.writer)
      .filter((id) => id);

    // 작성자가 있을 경우엔, users에서 해당하는 유저의 정보 가져오기
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
      <Modal
        isOpen={undefined}
        onClose={undefined}
        title={undefined}
        content={undefined}
      />
      <div className="mx-auto my-4 w-10/12 border-t border-gray-200"></div>
      <div className="mx-auto mt-8 w-10/12 self-start">
        <span className="text-xl font-extrabold leading-7 text-neutral-600">
          {exchangeListData ? exchangeListData.length : 0}
        </span>
        <span className="text-xl font-bold leading-7 text-neutral-500">
          개의 교환글
        </span>
      </div>
      <div className="mx-auto mt-4 w-10/12">
        <ExchangeEdit
          exchangeListData={exchangeListData}
          setExchangeListData={setExchangeListData}
          // setPhocaData={setPhocaData}
        />
        <ExchangeArticle
          exchangeListData={exchangeListData}
          users={users}
          setExchangeListData={setExchangeListData}
        />
      </div>
    </div>
  );
}
