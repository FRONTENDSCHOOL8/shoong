import { useEffect, useRef, useState } from 'react';
import Slides from './Slides';
import { GrPrevious, GrNext } from 'react-icons/gr';

export default function Carousel() {
  const [index, setIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const container = useRef(null);
  useEffect(() => {
    const { current } = container;
    setContainerWidth(current.offsetWidth);
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  const handleClick = (direction) => {
    if (direction === 'next') {
      return setIndex((x) => (x < 3 ? x + 1 : 0));
    }
    return setIndex((x) => (x > 0 ? x - 1 : 3));
  };
  return (
    <section
      className="relative mb-4 w-full overflow-hidden text-white"
      ref={container}
    >
      <div
        className="dr flex h-360pxr w-full flex-row"
        style={{
          width: `400%`,
          transform: `translate3d(-${index * containerWidth}px, 0, 0)`,
          transition: `transform 0.5s`,
        }}
      >
        <Slides order="1" alt="뉴진스 파워퍼프걸 콜라보" />
        <Slides order="2" alt="최애 포카 부적" />
        <Slides order="3" alt="투어스 단체" />
        <Slides order="4" alt="민지 바자 커버" />
      </div>
      <button
        type="button"
        onClick={() => handleClick('prev')}
        className="absolute left-2 top-1/2"
      >
        <GrPrevious className="text-2xl" />
      </button>
      <button
        type="button"
        onClick={() => handleClick('next')}
        className="absolute right-2 top-1/2"
      >
        <GrNext className="text-2xl" />
      </button>
    </section>
  );
}
