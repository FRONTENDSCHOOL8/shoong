import DetailHeader from '@/components/DetailHeader/DetailHeader';
import { useEffect, useState } from 'react';
import PocketBase from 'pocketbase';

const pb = new PocketBase('https://shoong.pockethost.io');

export default function LoginInfo() {
  const [user, setUser] = useState({ email: '', username: '' });

  useEffect(() => {
    const authDataString = localStorage.getItem('auth');
    if (authDataString) {
      try {
        const auth = JSON.parse(authDataString);
        // 조건문을 단순화하여 중첩 깊이를 줄임
        if (auth?.user) {
          setUser({
            email: auth.user.email,
            username: auth.user.username,
          });
        }
      } catch (error) {
        console.error('Parsing authData error:', error);
      }
    }
  }, []);

  return (
    <div className="pt-12">
      <DetailHeader title="로그인 정보" />
      <div className="flex  flex-col">
        <div className="flex flex-col items-start space-y-4 p-6">
          <div className="text-gray-700">
            <p className="pb-2 pt-16 text-m04 font-m04 text-gray500">
              이메일 주소
            </p>
            <p className="text-b04 font-m04 text-gray300">{user.email}</p>
          </div>
          <div className="text-gray-700">
            <p className="pb-2 pt-2 text-m04 font-m04 text-gray500">
              고유 닉네임
            </p>
            <p className="pb-2 text-b04 font-m04 text-gray300">
              {user.username}
            </p>
          </div>
          <div className="my-4 w-full border-t border-gray500"></div>
          <p className="pt-2 text-m04 font-m04 text-gray500">소셜 로그인</p>
        </div>
        <div className="mt-32 flex flex-col items-center justify-center gap-5 p-6">
          <button className="rounded-lg border border-red-500 bg-white px-20 py-2 text-red-500 transition-all duration-300 hover:font-bold">
            로그아웃
          </button>

          <a href="#" className="text-m04 font-m04 text-gray300 underline">
            서비스 탈퇴하기
          </a>
        </div>
      </div>
    </div>
  );
}
