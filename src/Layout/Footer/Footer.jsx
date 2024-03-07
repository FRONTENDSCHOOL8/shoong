import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
      <div className=" flex h-12 items-center justify-center space-x-6 bg-gray100 text-m02 font-m02 text-contentSecondary md:space-x-8">
        <Link to="/">회사소개</Link>
        <span className="mx-2">|</span>
        <Link to="/">커뮤니티</Link>
        <span className="mx-2">|</span>
        <Link to="/">채용정보</Link>
        <span className="mx-2">|</span>
        <Link to="/">고객센터</Link>
      </div>
      <div className="mb-10 flex flex-col items-center bg-gray300 px-6 pb-20 text-white">
        <div className="flex flex-col items-center justify-center pb-5 pt-5 ">
          <p className="text-center text-b03 font-b03">SHOONG</p>
          <p className="mt-2 text-center text-b02 ">(주)훅컴퍼니</p>
        </div>
        <div className="flex flex-col items-start border-t border-white border-opacity-50">
          <div className="flex h-12 items-center justify-center space-x-4 text-m02 font-m02 md:space-x-6">
            <Link to="/">이용약관</Link>
            <span className="mx-2">|</span>
            <Link to="/">개인정보처리방침</Link>
            <span className="mx-2">|</span>
            <Link to="/">FAQ</Link>
            <span className="mx-2">|</span>
            <Link to="/">공지사항</Link>
          </div>
          <div className="mt-4 flex flex-col items-start justify-center space-y-2 text-m02 font-m03">
            <p>사업자등록번호 213-22-12211</p>
            <a href="tel:02-111-1111" className="hover:underline">
              전화번호 02-111-1111
            </a>
            <p>주중 10시~18시 (점심시간 12~13시 / 주말 및 공휴일 제외)</p>
            <div className="h-2"></div>
            <p>통신판매업 신고번호 : 제 2024-서울강남-01977호</p>
            <p>호스팅 서비스 사업자 PocketHost, Inc.</p>
            <a href="mailto:help@hook.com" className="hover:underline">
              E-mail help@hook.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
