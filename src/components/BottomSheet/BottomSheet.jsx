import React, { useId } from 'react';
import Button from '../Button/Button';

export default function BottomSheetRadio({ itemCount, itemList }) {
  return (
    // 왜 rounded에는 pxr 적용이 안 되지?
    <>
      <div className="flex h-296pxr flex-col items-center rounded-tl-[30px] rounded-tr-[30px] bg-indigo-200">
        <div className="mb-12pxr mt-10pxr h-5pxr w-38pxr rounded-[5px] bg-zinc-100" />
        <RadioItem>hello</RadioItem>
        <BorderLine />
        <RadioItem>hello</RadioItem>
        <BorderLine />
        <RadioItem>hello</RadioItem>
        <BorderLine />
        <RadioItem>hello</RadioItem>
        <BorderLine />
        <Button style="mt-16pxr">확인</Button>
      </div>
    </>
  );
}

function RadioItem({ children }) {
  return (
    <label className="my-12pxr flex w-9/12 flex-row gap-12pxr">
      <input type="radio" />
      <span className="font-semiboldtext-neutral-600 grow text-left text-sm">
        {children}
      </span>
    </label>
  );
}

function BorderLine() {
  return <div className="h-1pxr w-10/12 bg-zinc-100"></div>;
}
