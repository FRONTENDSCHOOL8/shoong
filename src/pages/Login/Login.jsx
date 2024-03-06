import { useState } from 'react';
import Input from '@/components/Input/Input';
import Button from '@/components/Button/Button';

export default function Login() {
  const [formData, setFormData] = useState({ email: '', pwd: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({ ...formData, [name]: value }));
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-tertiary">
      {/* shoong 로고 Link 안으로 넣어야 됨 */}
      <img
        className="mb-72pxr h-51pxr w-143pxr"
        src="/icons/shoongLogoLogin.svg"
      />

      <Input
        name="email"
        value={formData.email}
        onChange={handleChange}
        type="text"
      >
        이메일
      </Input>
      <Input
        name="pwd"
        value={formData.pwd}
        onChange={handleChange}
        type="password"
        mt={2}
      >
        비밀번호
      </Input>

      <Button style="mt-26pxr">로그인</Button>

      <div className="mt-18pxr text-xs font-medium text-neutral-800">
        <span>계정찾기</span>
        <span className="mx-10pxr">ㅣ</span>
        <span>회원가입</span>
      </div>

      <div className="mt-44pxr flex items-center">
        <div className="h-1pxr w-100pxr bg-primary"></div>
        <span className="mx-15pxr text-10pxr font-medium text-indigo-500">
          간편로그인
        </span>
        <div className="h-1pxr w-100pxr bg-primary"></div>
      </div>

      <div className="mt-6pxr flex gap-32pxr">
        <img src="/icons/kakao.svg" />
        <img src="/icons/naver.svg" />
        <img src="/icons/instagram.svg" />
      </div>

      <span className="mt-52pxr text-xs font-extrabold text-white underline">
        다음에 할게요
      </span>
    </div>
  );
}
