import { Children } from 'react';

export default function MapMarker() {
  return (
    <MapMarker
      key={data.id}
      position={data.coords}
      title={data.cafeName}
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
      {Children}
    </MapMarker>
  );
}
