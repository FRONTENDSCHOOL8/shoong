import { useEffect, useRef, useState } from 'react';
import Slides from './Slides';

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
  return (
    <section className="w-full overflow-hidden" ref={container}>
      <div
        className="flex h-360pxr w-full flex-row "
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
    </section>
  );
}
