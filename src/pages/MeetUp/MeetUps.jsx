import MeetUpItemContainer from '@/components/MeetUpItemContainer/MeetUpItemContainer';
import MeetUpMap from '@/components/MeetUpMap/MeetUpMap';
import SearchBar from '@/components/SearchBar/SearchBar';
import { useLoaderData } from 'react-router';

export default function MeetUp() {
  const meetUpData = useLoaderData();

  return (
    <div className="relative">
      <SearchBar
        name={'mapSearch'}
        placeholder={'장소,아티스트 이름'}
        bgStyle={'absolute top-2 left-4 z-20 bg-white px-4 py-3 shadow-meetUp'}
      />
      <MeetUpMap meetUpData={meetUpData} />
      <MeetUpItemContainer
        meetUpData={meetUpData}
        mapStyle={'absolute bottom-2 z-20 mx-4'}
      />
    </div>
  );
}
