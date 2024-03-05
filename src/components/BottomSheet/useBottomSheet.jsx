import React, { useState, useEffect, useRef } from 'react';

export default function useBottomSheet() {
  const [isOpen, setIsOpen] = useState(false);
  const button = useRef(null);
  const bottomSheet = useRef(null);

  useEffect(() => {
    const handleBottomSheet = (e) => {
      setIsOpen((isOpen) => !isOpen);
      bottomSheet.current.style.display = isOpen ? 'block' : 'none';
    };
    button.current.addEventListener('click', handleBottomSheet);
    return function cleanUp() {
      button.current.removeEventListener('click', handleBottomSheet);
    };
  });

  return { button, bottomSheet };
}
