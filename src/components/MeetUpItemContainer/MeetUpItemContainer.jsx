import { useRef, useState } from 'react';
import MeetUpItem from '../MeetUpItem/MeetUpItem';

export default function MeetUpItemContainer({ meetUpData, mapStyle }) {
  const containerRef = useRef(null); // 컨테이너의 ref
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const startDragging = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const onDragging = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.touches[0].pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 1;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <ul
      ref={containerRef}
      className={`${mapStyle} absolute bottom-3 z-20 flex w-full  gap-5 rounded-xl`}
      onTouchStart={startDragging}
      onTouchMove={onDragging}
      onTouchEnd={() => setIsDragging(false)}
    >
      {meetUpData.map((item) => {
        return <MeetUpItem key={item.id} info={item} />;
      })}
    </ul>
  );
}
