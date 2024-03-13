import { useEffect, useState } from 'react';
import { CustomOverlayMap, Map } from 'react-kakao-maps-sdk';
import EventMarker from './EventMarker';
import { useMeetUpStore, meetUpDataStore } from '@/store/store';

export default function MeetUpMap({ meetUpData }) {
  const [newMeetUpData, setNewMeetUpData] = useState(meetUpData);
  const { setMeetUpData } = meetUpDataStore();

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
        setMeetUpData(updatedMeetUpData);
        localStorage.setItem('meetupData', JSON.stringify(updatedMeetUpData));
      })
      .catch((error) => console.error(error));
  }, [meetUpData, setMeetUpData]);

  const handleClickMarker = (title) => {
    localStorage.setItem('selectedCafe', title);
    useMeetUpStore.setState({ selectedCafe: title });
  };

  return (
    <Map
      center={{ lat: 37.556944, lng: 126.923917 }}
      className="relative h-full w-full"
      level={5}
    >
      {newMeetUpData.map((data) => {
        return (
          data.coords && (
            <div key={data.id} onClick={() => handleClickMarker(data.cafeName)}>
              <EventMarker position={data.coords} title={data.cafeName} />
              <CustomOverlayMap position={data.coords} yAnchor={1.5}>
                <div className="customoverlay">
                  <span className="title rounded border border-primary bg-white px-1 py-1 text-sm font-bold text-primary">
                    {data.cafeName}
                  </span>
                </div>
              </CustomOverlayMap>
            </div>
          )
        );
      })}
    </Map>
  );
}
