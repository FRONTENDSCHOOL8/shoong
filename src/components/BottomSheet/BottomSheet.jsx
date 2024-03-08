import { useState, useEffect, useRef } from 'react';
import { TextLayout, RadioLayout } from './BottomSheetLayout';
// import { bottomSheetWebAnimation } from './BottomSheetAnimation';

export default function BottomSheet({
  itemList = [],
  radio = false,
  children,
  linkedBottomSheet,
}) {
  const [checkedName, setCheckedName] = useState(itemList[0]);
  const handleClick = (e) => {
    setCheckedName(e.target.name);
  };

  const upSensor = useRef(null);
  const bottomSheet = useRef(null);
  const handleWrap = useRef(null);

  // useEffect(() => bottomSheetWebAnimation(upSensor, bottomSheet, handleWrap));

  const radioLayout = (
    <RadioLayout
      itemList={itemList}
      onChange={handleClick}
      checkedName={checkedName}
    />
  );
  const textLayout = <TextLayout>{children}</TextLayout>;

  return (
    // 왜 rounded에는 pxr 적용이 안 되지?
    <div className="upSensor bg-transparent" ref={upSensor}>
      <div
        className={`bottomSheet fixed bottom-0 flex w-full flex-col items-center rounded-tl-[30px] rounded-tr-[30px] bg-indigo-200 duration-1000`}
        ref={linkedBottomSheet}
      >
        <div
          className="bottomSheetHandleWrap flex w-10/12 justify-center"
          ref={handleWrap}
        >
          <div className="bottomSheetHandle mb-12pxr mt-10pxr h-5pxr w-38pxr rounded-[5px] bg-zinc-100" />
        </div>
        {radio ? radioLayout : textLayout}
      </div>
    </div>
  );
}
