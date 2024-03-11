import MeetUpItem from '../MeetUpItem/MeetUpItem';

export default function MeetUpItemContainer({ meetUpData }) {
  return (
    <ul className="draggable m-5 flex gap-5 overflow-x-scroll rounded-xl">
      {meetUpData.map((item) => {
        return <MeetUpItem key={item.id} info={item} />;
      })}
    </ul>
  );
}
