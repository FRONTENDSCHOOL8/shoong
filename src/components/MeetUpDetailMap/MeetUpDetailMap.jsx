import { CustomOverlayMap, Map, MapMarker } from 'react-kakao-maps-sdk';

export default function MeetUpDetailMap({ meetUpData }) {
  return (
    <Map
      className="mx-auto h-full min-h-120pxr w-full rounded-xl object-cover px-20pxr py-15pxr shadow-meetUp"
      center={meetUpData.coords}
      level={3}
      zoomable={false}
    >
      <MapMarker
        position={meetUpData.coords}
        title={meetUpData.cafeName}
        image={{
          src: '/icons/marker2.svg', // 마커이미지의 주소입니다
          size: {
            width: 30,
            height: 40,
          },
        }}
      />
      <CustomOverlayMap position={meetUpData.coords} yAnchor={2.8}>
        <div className="customoverlay">
          <span className="title rounded border border-primary bg-white px-1 py-1 text-sm font-bold text-primary">
            {meetUpData.cafeName}
          </span>
        </div>
      </CustomOverlayMap>
    </Map>
  );
}
