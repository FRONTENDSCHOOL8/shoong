// export function bottomSheetWebAnimation(upSensor, bottomSheet, handleWrap) {
//   let bottomTouchStart = 0;

//   //맨 위 핸들을 아래로 당겼을 경우
//   bottomSheet.current.addEventListener('mousedown', (e) => {
//     console.log('bottomTouchStart :', bottomTouchStart);
//     bottomTouchStart = e.clientY; // 클릭이 시작되는 위치 저장
//   });
//   bottomSheet.current.addEventListener('mousemove', (e) => {
//     console.log(bottomTouchStart);
//     console.log(e);
//     //사용자가 아래로 내렸을 경우 ("클릭 상태"에서 내리고 있어야 함)
//     if (bottomTouchStart - e.clientY < -120 && e.buttons === 1) {
//       console.log(bottomTouchStart - e.clientY);
//       //바텀시트 내리기
//       bottomSheet.current.style.height = 0 + '%';
//     }
//   });
// }

// export function bottomSheetAppAnimation(upSensor, bottomSheet, handleWrap) {
//   let bottomTouchStart = 0;
//   let bottomScrollStart;

//   //up_sensor에서 터치가 움직였을 경우 (바텀시트를 건드렸을 경우) -> 바텀시트를 올림
//   upSensor.current.addEventListener('mousemove', (e) => {
//     bottomSheet.current.style.height = 70 + '%'; //바텀시트 height를 올리기 10% -> 70%
//     upSensor.current.style.height = 70 + '%'; //up_sensor도 따라가기
//     setTimeout(function () {
//       upSensor.current.style.display = 'none';
//     }, 1000); // 바텀시트가 올라간 후, up_sensor 사라지기
//   });

//   //맨 위에서 아래로 스크롤했을 경우
//   bottomSheet.current.addEventListener('touchstart', (e) => {
//     bottomTouchStart = e.touches[0].pageY; // 터치가 시작되는 위치 저장
//     bottomScrollStart = bottomSheet.scrollTop; //터치 시작 시 스크롤 위치 저장
//   });
//   bottomSheet.current.addEventListener('touchmove', (e) => {
//     //유저가 아래로 내렸을 경우 + 스크롤 위치가 맨 위일 경우
//     if (bottomTouchStart - e.touches[0].pageY < 0 && bottomScrollStart <= 0) {
//       //바텀시트 내리기
//       bottomSheet.current.style.height = 10 + '%';
//       upSensor.current.style.display = 'block'; //up_sensor 다시 나타나기
//       upSensor.current.style.height = '10%'; //up_sensor height 다시 지정
//     }
//   });

//   //맨 위 핸들을 아래로 당겼을 경우
//   handleWrap.current.addEventListener('touchstart', (e) => {
//     bottomTouchStart = e.touches[0].pageY; // 터치가 시작되는 위치 저장
//   });
//   handleWrap.current.addEventListener('touchmove', (e) => {
//     //사용자가 아래로 내렸을 경우
//     if (bottomTouchStart - e.touches[0].pageY < 0) {
//       //바텀시트 내리기
//       bottomSheet.current.style.height = 10 + '%';
//       upSensor.current.style.display = 'block'; //up_sensor 다시 나타나기
//       upSensor.current.style.height = '10%'; //up_sensor height 다시 지정
//     }
//   });
// }
