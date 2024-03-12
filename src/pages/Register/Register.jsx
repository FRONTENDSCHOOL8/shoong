import { useState } from 'react';
import Input from '@/components/Input/Input';
import Button from '@/components/Button/Button';
import pb from '../../api/pocketbase';
import getNickname from './getNickname';
import { useLoaderData } from 'react-router-dom';

export default function Register() {
  const users = useLoaderData();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    pwd: '',
    pwdConfirm: '',
    phone: '',
    birth: '',
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({ ...formData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      email: formData.email,
      password: formData.pwd,
      passwordConfirm: formData.pwdConfirm,
      birth: formData.birth,
      phoneNumber: formData.phone,
      name: formData.name,
    };

    try {
      await pb.collection('users').create(data);
    } catch (error) {
      alert('입력사항을 다시 확인해주세요.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center bg-white py-85pxr">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center gap-6"
      >
        <Input
          name="name"
          value={formData.name}
          onChange={onChange}
          type="text"
          placeholder="이름"
          customClassNames="h-9 mt-1"
          bgClassName="bg-gray-100"
          isLabeled
          label="이름"
          mt={16}
        />

        <div className="flex flex-col gap-2">
          <Input
            name="email"
            value={formData.email}
            onChange={onChange}
            type="text"
            placeholder="이메일"
            customClassNames="h-9 mt-1"
            bgClassName="bg-gray-100"
            isLabeled
            label="이메일"
          />
          <Button type="button" isSmall isDisabled customClassNames="self-end">
            중복확인
          </Button>
        </div>

        <div className="flex flex-col">
          <Input
            name="pwd"
            value={formData.pwd}
            onChange={onChange}
            type="password"
            customClassNames="h-9 mt-1"
            placeholder="비밀번호 입력 (영어+숫자 8자 이상)"
            bgClassName="bg-gray-100"
            isLabeled
            label="비밀번호"
          />
          <Input
            name="pwdConfirm"
            value={formData.pwdConfirm}
            onChange={onChange}
            type="password"
            placeholder="비밀번호 재확인"
            customClassNames="h-9 mt-2"
            bgClassName="bg-gray-100"
          />
        </div>

        <Input
          name="phone"
          value={formData.phone}
          onChange={onChange}
          type="text"
          placeholder="휴대폰 번호"
          customClassNames="h-9 mt-1"
          bgClassName="bg-gray-100"
          isLabeled
          label="휴대폰 번호"
        />

        <Input
          name="birth"
          value={formData.birth}
          onChange={onChange}
          type="text"
          placeholder="생년월일"
          customClassNames="h-9 mt-1"
          bgClassName="bg-gray-100"
          isLabeled
          label="생년월일"
        />

        <div className="flex w-full flex-col">
          <div className="self-start text-xs font-extrabold text-neutral-700">
            이용 약관 동의
          </div>
          <Button
            type="button"
            bgClassName="bg-gray-100"
            textColorClassName="text-contentTertiary"
            customClassNames="h-9 mt-1"
          >
            네, 모두 동의합니다.
          </Button>
          <div className="mt-3 flex flex-col gap-3 px-2">
            <TermsCheckbox>[필수] 만 14세 이상입니다.</TermsCheckbox>
            <TermsCheckbox>[필수] 서비스 이용약관 동의 {'>'}</TermsCheckbox>
            <TermsCheckbox>[필수] 개인정보 처리방침 동의 {'>'}</TermsCheckbox>
            <TermsCheckbox>[선택] 마케팅 수신 동의</TermsCheckbox>
          </div>
        </div>

        <Button type="submit" isDisabled customClassNames="mt-4">
          가입하기
        </Button>
      </form>
    </div>
  );
}

function TermsCheckbox({ children }) {
  return (
    <label className="relative flex justify-between">
      <span className="text-xs font-medium leading-none text-zinc-800">
        {children}
      </span>
      <input
        type="checkbox"
        className="absolute right-0 h-3 w-3 appearance-none"
      />
      <span
        className="h-3 w-3"
        style={{
          background: "url('/checkboxUnchecked.svg') no-repeat",
        }}
      ></span>
    </label>
  );
}
