import { debounce } from 'lodash';
import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';

export default function SearchBar() {
  const [search, setSearch] = useState('');
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <form className="py-1.5 px-4 bg-zinc-100 rounded-[30px] flex-row justify-start items-start gap-2 inline-flex">
      <BsSearch className="h-6" />
      <label htmlFor=""></label>
      <input
        type="text"
        name=""
        placeholder="placeholder"
        className="bg-transparent"
        onChange={debounce(handleSearch, 500)}
        defaultValue={search}
      />
    </form>
  );
}
