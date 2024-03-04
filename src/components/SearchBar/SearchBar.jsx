import { debounce } from 'lodash';
import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';

/**
 * @param {string} props.name
 * @param {string} props.placeholder
 * @returns
 */
export default function SearchBar({ name, placeholder, bgStyle }) {
  const [search, setSearch] = useState('');
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  return (
    <form
      className={`${bgStyle} py-1.5 px-4 rounded-[30px] flex-row justify-start items-start gap-2 inline-flex`}
    >
      <BsSearch className="h-6" />
      <label htmlFor={name}></label>
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        className="bg-transparent"
        onChange={debounce(handleSearch, 500)}
        defaultValue={search}
      />
    </form>
  );
}
