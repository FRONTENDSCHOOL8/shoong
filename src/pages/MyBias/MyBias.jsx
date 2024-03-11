// import DetailHeader from '@/components/DetailHeader/DetailHeader';
import SearchBar from '@/components/SearchBar/SearchBar';
// import BiasContainer2 from '@/components/BiasContainer/BiasContainer2';
import { useLoaderData } from 'react-router';

export default function MyBias({ items }) {
  const group = useLoaderData();
  const phoca = group.map((item) => {
    return item;
  });

  return (
    <div className="flex flex-col px-6">
      <SearchBar
        name="search"
        placeholder="최애 그룹을 검색해 보세요!"
        bgStyle="bg-white mx-6 mt-10 mb-10"
      />
      <div className="mx-auto max-w-6xl">
        {' '}
        {/* 컨테이너에 최대 너비와 중앙 정렬을 적용 */}
        <ul className="grid grid-cols-3 gap-1">
          {phoca.map((item, index) => (
            <li
              key={index}
              className="flex flex-col items-center justify-center p-4"
            >
              <button className="flex flex-col items-center justify-center gap-2 text-center">
                <img
                  src={`https://shoong.pockethost.io/api/files/groups/${item.id}/${item.logoImage}`}
                  alt={item.groupName}
                  className="h-16 w-16 rounded-full object-cover"
                />
                <span className="text-sb01 font-sb02 text-contentSecondary sm:text-sb02">
                  {item.groupName}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
