import DetailHeader from '@/components/DetailHeader/DetailHeader';
import userData from '../../loader/userData';
import { useLoaderData } from 'react-router';

export default function LoginInfo() {
  const user = useLoaderData();
  console.log(user);
  return (
    <div className="pt-12">
      <DetailHeader title="로그인 정보" />
      <div className="flex min-h-screen flex-col">
        <div className="flex flex-col items-start space-y-4 p-6">
          <div className="text-gray-700">
            <p className="pb-2 pt-16 text-m03 font-m03 text-gray500">
              이메일 주소
            </p>
            <p className="text-m04 font-m04 text-gray-400">{user.email}</p>
          </div>
          <div className="text-gray-700">
            <p className="pb-2 pt-2 text-m03 font-m03 text-gray500">
              고유 닉네임
            </p>
            <p className="pb-2 text-m04 font-m04 text-gray-400">
              {user.username}
            </p>
          </div>
          <div className="my-4 w-full border-t border-gray300"></div>
          <p className="pt-2 text-m03 font-m03 text-gray500">소셜 로그인</p>
        </div>
        <div className="mt-24 flex flex-col items-center justify-center gap-5 p-6">
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
