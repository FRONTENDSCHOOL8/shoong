import MeetUpItemContainer from '@/components/MeetUpItemContainer/MeetUpItemContainer';
import SearchBar from '@/components/SearchBar/SearchBar';
import { useLoaderData } from 'react-router';

export default function MeetUp() {
  const meetUpData = useLoaderData();

  return (
    <div className="h-screen">
      <SearchBar
        name="MeetUp"
        placeholder="장소찾기"
        bgStyle="bg-white  shadow-meetUp"
      />
      <MeetUpItemContainer meetUpData={meetUpData} />
    </div>
  );
}
