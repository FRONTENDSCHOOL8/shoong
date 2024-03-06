import React, { useState, useEffect, useRef } from 'react';

export default function useBottomSheet() {
  const [isOpen, setIsOpen] = useState(false);
  const button = useRef(null);
  const bottomSheet = useRef(null);
  console.log(button.current);

  useEffect(() => {
    const handleBottomSheet = (e) => {
      setIsOpen((isOpen) => !isOpen);
    };

    button.current.addEventListener('click', handleBottomSheet);

    bottomSheet.current.className =
      'transition-all duration-500 ease-in-out absolute w-full left-0';

    if (isOpen) {
      bottomSheet.current.style.bottom = '0px';
    } else {
      bottomSheet.current.style.bottom = `-${getComputedStyle(bottomSheet.current).height}`;
    }

    //eslint가 이렇게 변수에 담으라고 해서 담았는데 왜 이렇게 해줘야 되는지는 모르겠음..
    const current = button.current;
    return function cleanUp() {
      current.removeEventListener('click', handleBottomSheet);
    };
  });

  return { button, bottomSheet };
}
