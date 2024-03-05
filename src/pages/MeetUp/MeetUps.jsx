import SearchBar from '@/components/SearchBar/SearchBar';

export default function MeetUp() {
  return (
    <div>
      MeetUp
      <SearchBar
        name="MeetUp"
        placeholder="장소찾기"
        bgStyle="bg-white  shadow-meetUp"
      />
    </div>
  );
}
