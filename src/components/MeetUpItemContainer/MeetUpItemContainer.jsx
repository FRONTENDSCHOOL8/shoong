import { useRef, useState } from 'react';
import MeetUpItem from '../MeetUpItem/MeetUpItem';

export default function MeetUpItemContainer({ meetUpData, mapStyle }) {
  return (
    <ul
      className={`${mapStyle} absolute bottom-3 z-20 mx-3 mb-3 flex w-full gap-5 rounded-xl shadow-md`}
    >
      {meetUpData.map((item) => {
        return <MeetUpItem key={item.id} info={item} />;
      })}
    </ul>
  );
}
