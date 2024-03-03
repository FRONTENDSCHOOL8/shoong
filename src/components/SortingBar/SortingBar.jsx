import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useId } from 'react';
import { FaAngleDown, FaFilter, FaSort, FaCircleXmark } from 'react-icons/fa6';

export default function SortingBar() {
  const categoryRef = useRef(null);
  const id = useId();
  const [filter, setFilter] = useState('전체');

  const handleFilter = () => {
    categoryRef.current.style.display = 'block';
  };

  const handleCategory = (e) => {
    e.preventDefault();
    categoryRef.current.style.display = 'none';
    if (e.target.value) setFilter(e.target.value);
  };

  return (
    <>
      <div className="relative flex gap-9pxr justify-end pt-40pxr pb-24pxr pr-20pxr">
        <div
          ref={categoryRef}
          className="hidden absolute bg-black bg-opacity-90 w-full h-full p-20pxr  left-1/2 -translate-x-1/2 rounded"
        >
          <form action="#">
            <fieldset>
              <legend className="text-white flex items-center gap-2">
                카테고리
                <span
                  className="cursor-pointer text-red-600"
                  onClick={handleCategory}
                  value={filter}
                  aria-label="취소"
                >
                  <FaCircleXmark />
                </span>
              </legend>
              <div>
                <label htmlFor={id}></label>
                <select
                  name="category"
                  value={filter}
                  id={id}
                  onChange={handleCategory}
                  className="cursor-pointer"
                >
                  <option value="전체">전체</option>
                  <option value="찜한순">찜한순</option>
                  <option value="최신순">최신순</option>
                  <option value="오래된순">오래된순</option>
                  {/* <option value="앨범">앨범</option>
                  <option value="특전">특전</option>
                  <option value="팬싸">팬싸</option>
                  <option value="시즌그리팅">시즌그리팅</option>
                  <option value="팬미팅">팬미팅</option> */}
                </select>
              </div>
            </fieldset>
          </form>
        </div>
        <button
          onClick={handleFilter}
          type="button"
          className="flex items-center justify-evenly w-100pxr h-30pxr bg-white bg-opacity-40 rounded border border-zinc-500 "
        >
          <FaFilter />
          <span className="text-sm font-medium  leading-tight">{filter}</span>
          <FaAngleDown />
        </button>
        <button
          type="button"
          className="flex items-center justify-evenly w-100pxr h-30pxr bg-white bg-opacity-40 rounded border border-zinc-500 "
        >
          <FaSort />
          <span className="text-sm font-medium  leading-tight">최신순</span>
          <FaAngleDown />
        </button>
      </div>
    </>
  );
}
