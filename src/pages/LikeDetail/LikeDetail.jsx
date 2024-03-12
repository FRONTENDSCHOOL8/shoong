import DetailHeader from '@/components/DetailHeader/DetailHeader';
import SearchBar from '@/components/SearchBar/SearchBar';
// import SortingBar from '@/components/SortingBar/SortingBar';
// import PhocaContainerBias from '@/components/PhocaContainer/PhocaContainerBias';

export default function LikeDetail() {
  return (
    <div>
      <DetailHeader title="찜 목록" />
      <div className="flex h-200pxr items-center justify-center ">
        <SearchBar
          name="search"
          placeholder="찜한 포카 찾기"
          bgStyle="bg-gray-100"
        />
      </div>
      {/* <SortingBar /> */}
      {/* <PhocaContainerBias /> */}
      <div className="h-200pxr">포카</div>
    </div>
  );
}
