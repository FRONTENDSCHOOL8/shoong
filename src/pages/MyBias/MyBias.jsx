import DetailHeader from '@/components/DetailHeader/DetailHeader';
import SearchBar from '@/components/SearchBar/SearchBar';
import { useLoaderData } from 'react-router';

export default function MyBias({ items }) {
  const group = useLoaderData();
  const phoca = group.map((item) => {
    return item;
  });

  return (
    <div className="flex flex-col items-center px-6 pt-12">
      <DetailHeader title="내 최애" />
      <SearchBar
        name="search"
        placeholder="최애 그룹을 검색해 보세요!"
        bgStyle="bg-white mt-16 mb-10"
      />
      <div className="mx-auto max-w-6xl">
        <ul className="grid grid-cols-3 gap-1">
          {phoca.map((item, index) => (
            <li
              key={index}
              className="flex flex-col items-center justify-center p-4"
            >
              <button className="flex flex-col items-center justify-center gap-2 text-center transition-transform duration-150 hover:scale-95">
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