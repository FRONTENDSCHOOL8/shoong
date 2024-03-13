// @ts-ignore
import { useLoaderData } from 'react-router';
import { useLocation } from 'react-router-dom';
import { meetUpDataStore } from '@/store/store';
import MeetUpDetailItem from '../MeetUpDetailItem/MeetUpDetailItem';
import MeetUpDetailItemContainer from '../MeetUpDetailItemContainer/MeetUpDetailItemContainer';
import HashTagItem from '../HashTagItem/HashTagItem';
import CommentContainer from '../Comment/CommentContainer';
import MeetUpDetailMap from '../MeetUpDetailMap/MeetUpDetailMap';
import { useEffect } from 'react';
import { data } from 'autoprefixer';
import MeetUpItem from '../MeetUpItem/MeetUpItem';
import DetailHeader from '../DetailHeader/DetailHeader';
import MeetupCarousel from '../Carousel/ MeetupCarousel';

export default function MeetUpDetail() {
  const {
    eventTitle,
    cafeName,
    address,
    date,
    basicGift,
    event,
    priorityGift,
  } = useLoaderData();
  const { pathname } = useLocation();

  const cafeId = pathname.split('/meetupDetail/')[1];
  const getMeetUpData = JSON.parse(localStorage.getItem('meetupData'));
  const MeetUpData = getMeetUpData.find((data) => data.id === cafeId);

  return (
    <div className="pb-10 pt-50pxr">
      {/* 태그를 proprs로 전달하는 법은?? */}
      {/* <MeetUpItem info={data} /> */}
      <DetailHeader title="자세히" isBottomSheet={undefined} />
      <MeetupCarousel />
      <div className="mx-20pxr mb-20pxr min-h-120pxr min-w-320pxr rounded-xl bg-white px-20pxr py-15pxr shadow">
        <h3 className="mb-4pxr text-base font-extrabold leading-snug text-primary">
          {eventTitle}
        </h3>

        <h4 className="mb-10pxr text-sm font-extrabold leading-tight text-gray-500">
          {cafeName}
        </h4>

        <MeetUpDetailItem title="주소" content={address} />
        <MeetUpDetailItem title="영업기간" content={date} />
      </div>

      <div className="mx-20pxr flex flex-col rounded-xl bg-white shadow">
        <MeetUpDetailItemContainer
          title="GIFT"
          content={
            <>
              <MeetUpDetailItem title="기본특전" content={basicGift} />
              <MeetUpDetailItem
                title="선착특전"
                content="슬로건 10개, 키링 3명"
              />
            </>
          }
        />
        <MeetUpDetailItemContainer
          title="EVENT"
          content={
            <>
              <MeetUpDetailItem title="선착특전" content={priorityGift} />
              <MeetUpDetailItem
                title="해쉬태그"
                content={
                  <ul className="flex flex-col">
                    <HashTagItem data={eventTitle} />
                    <HashTagItem data={event} />
                    <HashTagItem data={cafeName} />
                  </ul>
                }
              />
            </>
          }
        />
      </div>
      <div className="mx-20pxr mt-6 flex h-300pxr flex-col rounded-xl shadow">
        <MeetUpDetailMap meetUpData={MeetUpData} />
      </div>
      <CommentContainer />
    </div>
  );
}
