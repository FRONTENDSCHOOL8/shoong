export default function Footer() {
  return (
    <footer>
      {/* 최상단 영역 */}
      <div className="flex h-12 items-center justify-center space-x-4 bg-gray-100 text-m02 font-m02 text-contentSecondary">
        <span>회사소개</span>
        <span className="mx-2">|</span>
        <span>커뮤니티</span>
        <span className="mx-2">|</span>
        <span>채용정보</span>
        <span className="mx-2">|</span>
        <span>고객센터</span>
      </div>
      {/* 짙은 회색 영역 */}
      <div className="bg-gray-300 px-5 pb-12 text-white">
        {/* 실선 위의 영역 */}
        <div
          className="border-b border-white border-opacity-50 pb-5"
          style={{ paddingTop: '100px' }}
        >
          <p className="text-center text-b04 font-b03">shoong</p>
          <p className="mt-2 text-center">(주)훅컴퍼니</p>
        </div>
        {/* 실선 아래의 영역 */}
        <div className=" flex h-12 items-center justify-center space-x-4 text-m02 font-m02">
          <span>이용약관</span>
          <span className="mx-2">|</span>
          <span>개인정보처리방침</span>
          <span className="mx-2">|</span>
          <span>FAQ</span>
          <span className="mx-2">|</span>
          <span>공지사항</span>
        </div>
        <div className="mt-4 space-y-2">
          <p>사업자등록번호 213-22-12211</p>
          <p>전화번호 02-111-1111</p>
          <p>주중 10시~18시 (점심시간 12~13시 / 주말 및 공휴일 제외)</p>
          <div className="h-4"></div> {/* 4번과 5번 사이의 2배 너비 갭 */}
          <p>통신판매업 신고번호 : 제 2024-서울강남-01977호</p>
          <p>호스팅 서비스 사업자 PocketHost, Inc.</p>
          <p>E-mail help@hook.com</p>
        </div>
      </div>
    </footer>
  );
}
