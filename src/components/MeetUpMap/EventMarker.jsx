import { useMeetUpStore } from '@/store/store';
import { MapMarker, useMap } from 'react-kakao-maps-sdk';

export default function EventMarker({ position, title }) {
  const map = useMap();

  const handleClickMarker = (title, marker) => {
    localStorage.setItem('selectedCafe', title);
    useMeetUpStore.setState({ selectedCafe: title });
    map.panTo(marker.getPosition());
  };

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
      onClick={(marker) => handleClickMarker(title, marker)}
    ></MapMarker>
  );
}
