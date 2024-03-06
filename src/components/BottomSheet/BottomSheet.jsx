import React, { useState } from 'react';
import Button from '../Button/Button';

export default function BottomSheet({
  itemList = [],
  radio = false,
  children,
}) {
  const [checkedName, setCheckedName] = useState(itemList[0]);
  const handleClick = (e) => {
    setCheckedName(e.target.name);
  };

  const radioLayout = (
    <>
      {itemList.map((item, index) => (
        <div className="w-10/12" key={index}>
          <RadioItem
            name={item}
            onChange={handleClick}
            checkedName={checkedName}
          >
            {item}
          </RadioItem>
          {index < itemList.length - 1 && <BorderLine />}
        </div>
      ))}
      <Button style="mt-8pxr">확인</Button>
    </>
  );

  const textLayout = (
    <div className="mx-60pxr mb-40pxr mt-20pxr text-left text-xs font-medium text-gray-500">
      {children}
    </div>
  );

  const bottomSheetHeight = radio ? 'h-296pxr' : '';

  return (
    // 왜 rounded에는 pxr 적용이 안 되지?
    <div
      className={`flex ${bottomSheetHeight} w-full flex-col items-center rounded-tl-[30px] rounded-tr-[30px] bg-indigo-200`}
    >
      <div className="mb-12pxr mt-10pxr h-5pxr w-38pxr rounded-[5px] bg-zinc-100" />
      {radio ? radioLayout : textLayout}
    </div>
  );
}

function RadioItem({ children, name, onChange, checkedName }) {
  let radioStyle = { background: "url('/radioUnchecked.svg') no-repeat" };
  if (name === checkedName) {
    radioStyle.background = "url('/radioChecked.svg') no-repeat";
  }
  return (
    <label className="my-14pxr flex flex-row gap-16pxr pl-16pxr">
      <input
        type="radio"
        name={name}
        onChange={onChange}
        checked={name === checkedName}
        className="absolute h-22pxr w-22pxr appearance-none"
      />
      <span className="h-22pxr w-22pxr" style={radioStyle} />
      <span className="grow text-left text-sm font-semibold text-neutral-600">
        {children}
      </span>
    </label>
  );
}

function BorderLine() {
  return <div className="h-1pxr w-full bg-zinc-100"></div>;
}
