import { useEffect, useState } from 'react';
import { Map, MapMarker, useMap } from 'react-kakao-maps-sdk';

export default function MeetUpMap({ meetUpData }) {
  const [newMeetUpData, setNewMeetUpData] = useState(meetUpData);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const geocoder = new window.kakao.maps.services.Geocoder();

    const addressSearchPromises = meetUpData.map(
      (data) =>
        new Promise((resolve, reject) => {
          geocoder.addressSearch(data.address, function (result, status) {
            if (status === window.kakao.maps.services.Status.OK) {
              const coords = new window.kakao.maps.LatLng(
                // @ts-ignore
                result[0].y,
                result[0].x
              );
              resolve({ lat: coords.getLat(), lng: coords.getLng() });
            } else {
              reject(new Error('AddressSearch failed'));
            }
          });
        })
    );

    Promise.all(addressSearchPromises)
      .then((positions) => {
        // meetUpData의 각 항목에 위도와 경도를 추가
        const updatedMeetUpData = meetUpData.map((data, index) => {
          return { ...data, coords: positions[index] };
        });
        setNewMeetUpData(updatedMeetUpData);
      })
      .catch((error) => console.error(error));
  }, [meetUpData]);

  return (
    <Map
      center={{ lat: 37.566535, lng: 126.9779692 }}
      className="h-screen-nav relative w-full overflow-hidden"
    >
      {newMeetUpData.map((data) => {
        return (
          data.coords && (
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
              onMouseOver={() => setIsOpen(true)}
              onMouseOut={() => setIsOpen(false)}
            >
              {isOpen && (
                <div style={{ padding: '5px', color: '#000' }}>
                  {data.cafeName}
                </div>
              )}
            </MapMarker>
          )
        );
      })}
    </Map>
  );
}

// 1. 지도 레이아웃 잡기
// 2. 데이터 받아오기
// 3. 주소 핀으로 표시
// 4. 핀 클릭 시 해당 카드로 focus
