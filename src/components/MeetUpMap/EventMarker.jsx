import { useState } from 'react';
import { MapMarker, useMap } from 'react-kakao-maps-sdk';

export default function EventMarker({ position, title }) {
  const [isOpen, setIsOpen] = useState(false);
  const map = useMap();

  return (
    <MapMarker
      position={position}
      title={title}
      image={{
        src: '/icons/marker.svg', // 마커이미지의 주소입니다
        size: {
          width: 30,
          height: 40,
        },
      }}
      onClick={(marker) => map.panTo(marker.getPosition())}
      onMouseOver={() => setIsOpen(true)}
      onMouseOut={() => setIsOpen(false)}
    ></MapMarker>
  );
}
