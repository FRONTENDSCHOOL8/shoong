import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
      <div className="flex h-11 w-full items-center justify-between bg-gray100 px-6 text-b01 font-m02 text-gray500 lg:px-10">
        <div className="flex flex-grow items-center justify-center">
          <Link to="/">회사소개</Link>
        </div>
        <span className="mx-2">|</span>
        <div className="flex flex-grow items-center justify-center">
          <Link to="/">커뮤니티</Link>
        </div>
        <span className="mx-2">|</span>
        <div className="flex flex-grow items-center justify-center">
          <Link to="/">채용정보</Link>
        </div>
        <span className="mx-2">|</span>
        <div className="flex flex-grow items-center justify-center">
          <Link to="/">고객센터</Link>
        </div>
      </div>

      <div className="mb-2 flex flex-col items-start bg-gray500 px-6 pb-20 text-white lg:px-10">
        <div className="flex flex-col items-start justify-center pb-4 pt-5 ">
          <p className=" text-b03 font-b03">SHOONG</p>
          <p className="mt-1 text-b01 ">(주)훅컴퍼니</p>
        </div>
        <div className="w-full border-t border-white border-opacity-50 px-6"></div>
        <div className="flex flex-col items-start ">
          <div className="flex h-12 items-center justify-center space-x-4 text-m02 font-m02 md:space-x-6">
            <Link to="/">이용약관</Link>
            <span className="mx-2">|</span>
            <Link to="/">개인정보처리방침</Link>
            <span className="mx-2">|</span>
            <Link to="/">FAQ</Link>
            <span className="mx-2">|</span>
            <Link to="/">공지사항</Link>
          </div>
          <div className="mt-3 flex flex-col items-start justify-center space-y-1 text-sb01 font-m03 text-gray200">
            <p>사업자등록번호 213-22-12211</p>
            <a href="tel:02-111-1111" className="hover:underline">
              전화번호 02-111-1111
            </a>
            <p>주중 10시~18시 (점심시간 12~13시 / 주말 및 공휴일 제외)</p>
            <div className="h-1"></div>
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
