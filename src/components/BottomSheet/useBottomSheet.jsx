import { useState, useEffect, useRef } from 'react';
import BottomSheet from './BottomSheet';

export default function useBottomSheet() {
  const [isOpen, setIsOpen] = useState(false);
  const button = useRef(null);
  const linkedBottomSheet = useRef(null);

  const handleBottomSheet = (e) => {
    setIsOpen((isOpen) => !isOpen);
  };

  useEffect(() => {
    button.current.addEventListener('click', handleBottomSheet);

    console.log(linkedBottomSheet);

    if (isOpen) {
      console.log(isOpen);
      //296px=18.5rem
      linkedBottomSheet.current.style.height = '18.5rem';
    } else {
      console.log(isOpen);
      linkedBottomSheet.current.style.height = '0';
    }

    //eslint가 이렇게 변수에 담으라고 해서 담았는데 왜 이렇게 해줘야 되는지는 모르겠음..
    const current = button.current;
    return function cleanUp() {
      current.removeEventListener('click', handleBottomSheet);
    };
  });

  return { button, linkedBottomSheet, isOpen, setIsOpen };
}
