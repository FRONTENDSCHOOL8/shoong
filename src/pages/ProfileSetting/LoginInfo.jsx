import DetailHeader from '@/components/DetailHeader/DetailHeader';

export default function LoginInfo() {
  return (
    <div>
      {/* <DetailHeader>로그인 정보</DetailHeader> */}
      <div className="flex h-screen flex-col">
        <div className="flex flex-col items-start space-y-4 p-6">
          <div className="text-gray-700">
            <p className="pb-2 font-semibold">이메일 주소</p>
            <p className="text-gray300">user@example.com</p>
          </div>
          <div className="text-gray-700">
            <p className="pb-2 font-semibold">고유 닉네임</p>
            <p className="text-gray300">UserNickname</p>
          </div>
          <p className="font-semibold text-gray-700">소셜 로그인</p>
        </div>
        <div className="flex-grow"></div>

        <div className="flex flex-col items-center justify-center gap-5 p-6">
          <button className="rounded-lg border border-red-500 bg-white px-20 py-2 text-red-500 transition-colors duration-300 hover:bg-red-500 hover:text-white">
            로그아웃
          </button>
          <a href="#" className="text-gray300 underline">
            서비스 탈퇴하기
          </a>
        </div>
      </div>
    </div>
  );
}
