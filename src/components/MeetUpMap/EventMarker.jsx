import { useState } from 'react';
import { MapMarker, useMap } from 'react-kakao-maps-sdk';

export default function EventMarker({ id, position, title }) {
  const [isOpen, setIsOpen] = useState(false);
  const map = useMap();

  return (
    <MapMarker
      key={id}
      position={position}
      title={title}
      image={{
        src: 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png', // 마커이미지의 주소입니다
        size: {
          width: 30,
          height: 40,
        },
      }}
      onClick={(marker) => map.panTo(marker.getPosition())}
      onMouseOver={() => setIsOpen(true)}
      onMouseOut={() => setIsOpen(false)}
    >
      {isOpen && <div style={{ padding: '5px', color: '#000' }}>{title}</div>}
    </MapMarker>
  );
}
