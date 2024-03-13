import { useState } from 'react';
import Input from '@/components/Input/Input';
import Button from '@/components/Button/Button';
import pb from '../../api/pocketbase';
import { useLoaderData } from 'react-router-dom';
import debounce from '@/utils/debounce';

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

  const handleInputChange = (e) => {
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
      collectBook: ['9mbahw8twzvbrwr'],
    };

    try {
      await pb.collection('users').create(data);
    } catch (error) {
      alert('입력사항을 다시 확인해주세요.');
    }
  };

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const checkList = [
    'agreeOverFourteen',
    'agreeService',
    'agreePersonalInfo',
    'agreeMarketing',
  ];
  const [checkedList, setCheckedList] = useState([]);

  const handleCheckboxChange = (e) => {
    // checkedList.includes(e.target.name)와 console.log(e.target.checked)는 반대되는 값임에 주의
    // 가령 맨 처음 상태에서 아무것도 체크 안했을 때 체크박스 하나를 체크해서 이 handleCheckboxChange 발동하는 순간, 전자는 false인 반면 후자는 true임.

    const newCheckedList = checkedList.includes(e.target.name)
      ? checkedList.filter((name) => name !== e.target.name)
      : [...checkedList, e.target.name];

    setCheckedList((checkedList) => newCheckedList);
  };

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const handleAgreeAll = (e) => {
    checkedList.length === checkList.length
      ? setCheckedList((checkedList) => [])
      : setCheckedList((checkedList) => checkList);

    checkedList.length === checkList.length
      ? setAgreeAllButtonStyle({
          bg: 'bg-gray-100',
          text: 'text-contentTertiary',
        })
      : setAgreeAllButtonStyle({
          bg: 'bg-primary',
          text: 'text-white',
        });

    setIsRegisterButtonDisabled(!isRegisterButtonDisabled);
    setIsEmailCheckButtonDisabled(!isEmailCheckButtonDisabled);
  };

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const [agreeAllButtonStyle, setAgreeAllButtonStyle] = useState({
    bg: 'bg-gray-100',
    text: 'text-contentTertiary',
  });

  const [isRegisterButtonDisabled, setIsRegisterButtonDisabled] =
    useState(true);

  const [isEmailCheckButtonDisabled, setIsEmailCheckButtonDisabled] =
    useState(true);

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  return (
    <div className="flex flex-col items-center justify-center bg-white py-85pxr">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center gap-6"
      >
        <Input
          name="name"
          defaultValue={formData.name}
          onChange={debounce(handleInputChange)}
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
            defaultValue={formData.email}
            onChange={debounce(handleInputChange)}
            type="text"
            placeholder="이메일"
            customClassNames="h-9 mt-1"
            bgClassName="bg-gray-100"
            isLabeled
            label="이메일"
          />

          <Button
            type="button"
            isSmall
            isDisabled={isEmailCheckButtonDisabled}
            customClassNames="self-end"
          >
            중복확인
          </Button>
        </div>

        <div className="flex flex-col">
          <Input
            name="pwd"
            defaultValue={formData.pwd}
            onChange={debounce(handleInputChange)}
            type="password"
            customClassNames="h-9 mt-1"
            placeholder="비밀번호 입력 (영어+숫자 8자 이상)"
            bgClassName="bg-gray-100"
            isLabeled
            label="비밀번호"
          />
          <Input
            name="pwdConfirm"
            defaultValue={formData.pwdConfirm}
            onChange={debounce(handleInputChange)}
            type="password"
            placeholder="비밀번호 재확인"
            customClassNames="h-9 mt-2"
            bgClassName="bg-gray-100"
          />
        </div>

        <Input
          name="phone"
          defaultValue={formData.phone}
          onChange={debounce(handleInputChange)}
          type="text"
          placeholder="휴대폰 번호"
          customClassNames="h-9 mt-1"
          bgClassName="bg-gray-100"
          isLabeled
          label="휴대폰 번호"
        />

        <Input
          name="birth"
          defaultValue={formData.birth}
          onChange={debounce(handleInputChange)}
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
            onClick={handleAgreeAll}
            bgClassName={agreeAllButtonStyle.bg}
            textColorClassName={agreeAllButtonStyle.text}
            customClassNames="h-9 mt-1"
          >
            네, 모두 동의합니다.
          </Button>

          <div className="mt-3 flex flex-col gap-3 px-2">
            <TermsCheckbox
              name={checkList[0]}
              checkedList={checkedList}
              onChange={handleCheckboxChange}
            >
              [필수] 만 14세 이상입니다.
            </TermsCheckbox>

            <TermsCheckbox
              name={checkList[1]}
              checkedList={checkedList}
              onChange={handleCheckboxChange}
            >
              [필수] 서비스 이용약관 동의 {'>'}
            </TermsCheckbox>

            <TermsCheckbox
              name={checkList[2]}
              checkedList={checkedList}
              onChange={handleCheckboxChange}
            >
              [필수] 개인정보 처리방침 동의 {'>'}
            </TermsCheckbox>

            <TermsCheckbox
              name={checkList[3]}
              checkedList={checkedList}
              onChange={handleCheckboxChange}
            >
              [선택] 마케팅 수신 동의
            </TermsCheckbox>
          </div>
        </div>

        <Button
          type="submit"
          isDisabled={isRegisterButtonDisabled}
          customClassNames="mt-4"
        >
          가입하기
        </Button>
      </form>
    </div>
  );
}

function TermsCheckbox({ name, checkedList, onChange, children }) {
  const checked = checkedList.includes(name);

  const checkboxStyle = checked
    ? { background: "url('/checkboxChecked.svg') no-repeat" }
    : { background: "url('/checkboxUnchecked.svg') no-repeat" };

  return (
    <label className="relative flex justify-between">
      <span className="text-xs font-medium leading-none text-zinc-800">
        {children}
      </span>
      <input
        name={name}
        checked={checked}
        onChange={onChange}
        type="checkbox"
        className="absolute right-0 h-3 w-3 appearance-none"
      />
      <span className="h-3 w-3" style={checkboxStyle}></span>
    </label>
  );
}
