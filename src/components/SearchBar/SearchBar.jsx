import { searchStore } from '@/store/store';
import { debounce } from 'lodash';
import { BsSearch } from 'react-icons/bs';

// import { useNavigate } from 'react-router';

/**
 * @param {{
 * name:string,
 * placeholder:string,
 * bgStyle:string}} props
 * @returns
 */
export default function SearchBar({ name, placeholder, bgStyle }) {
  const { search, setSearch } = searchStore();
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  console.log(search);
  return (
    <form
      className={`${bgStyle} py-1.5 px-4 rounded-[30px] flex-row justify-start items-start gap-2 inline-flex`}
    >
      <BsSearch className="h-6" />
      <label htmlFor={name}></label>
      <input
        type="text"
        id={name}
        placeholder={placeholder}
        className="bg-transparent"
        onChange={debounce(handleSearch, 500)}
        defaultValue={search}
      />
    </form>
  );
}
