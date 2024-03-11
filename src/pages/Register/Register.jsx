import Input from '@/components/Input/Input';
import Button from '@/components/Button/Button';

export default function Register() {
  return (
    <div className="flex flex-col items-center justify-center bg-white py-85pxr">
      <div className="flex flex-col items-center justify-center gap-6">
        <Input
          customClassNames="h-9 mt-1"
          placeholder="이름"
          bgClassName="bg-gray-100"
          isLabeled
          label="이름"
          mt={16}
        />

        <div className="flex flex-col gap-2">
          <Input
            customClassNames="h-9 mt-1"
            placeholder="이메일"
            bgClassName="bg-gray-100"
            isLabeled
            label="이메일"
          />
          <Button isSmall isDisabled customClassNames="self-end">
            중복확인
          </Button>
        </div>

        <div className="flex flex-col">
          <Input
            customClassNames="h-9 mt-1"
            placeholder="비밀번호 입력 (영어+숫자 8자 이상)"
            bgClassName="bg-gray-100"
            isLabeled
            label="비밀번호"
          />
          <Input
            customClassNames="h-9 mt-2"
            placeholder="비밀번호 재확인"
            bgClassName="bg-gray-100"
          />
        </div>

        <Input
          customClassNames="h-9 mt-1"
          placeholder="휴대폰 번호"
          bgClassName="bg-gray-100"
          isLabeled
          label="휴대폰 번호"
        />

        <Input
          customClassNames="h-9 mt-1"
          placeholder="생년월일"
          bgClassName="bg-gray-100"
          isLabeled
          label="생년월일"
        />

        <div className="flex w-full flex-col">
          <div className="self-start text-xs font-extrabold text-neutral-700">
            이용 약관 동의
          </div>
          <Button
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

        <Button isDisabled customClassNames="mt-4">
          가입하기
        </Button>
      </div>
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
