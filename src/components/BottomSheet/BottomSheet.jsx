import React, { useId } from 'react';
import Button from '../Button/Button';

export default function BottomSheetRadio({ itemList }) {
  return (
    // 왜 rounded에는 pxr 적용이 안 되지?
    <>
      <div className="flex h-296pxr flex-col items-center rounded-tl-[30px] rounded-tr-[30px] bg-indigo-200">
        <div className="mb-12pxr mt-10pxr h-5pxr w-38pxr rounded-[5px] bg-zinc-100" />
        {itemList.map((item, index) => (
          <div className="w-10/12" key={index}>
            <RadioItem>{item}</RadioItem>
            {index < itemList.length - 1 && <BorderLine />}
          </div>
        ))}
        <Button style="mt-16pxr">확인</Button>
      </div>
    </>
  );
}

function RadioItem({ children }) {
  return (
    <label className="my-12pxr flex flex-row gap-16pxr pl-16pxr">
      <input type="radio" />
      <span className="font-semiboldtext-neutral-600 grow text-left text-sm">
        {children}
      </span>
    </label>
  );
}

function BorderLine() {
  return <div className="h-1pxr w-full bg-zinc-100"></div>;
}
