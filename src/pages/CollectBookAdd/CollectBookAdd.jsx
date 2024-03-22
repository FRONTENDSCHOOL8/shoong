import Bias from '@/components/Bias/Bias';
import DetailHeader from '@/components/DetailHeader/DetailHeader';
import { useRef } from 'react';
import { useLoaderData } from 'react-router';
import { Link } from 'react-router-dom';

export default function CollectBookAdd() {
  const photoCardsData = useLoaderData();
  const test = useRef(null);

  return (
    <div className="h-full overflow-x-hidden">
      <DetailHeader title="콜렉트북 추가" />

      <div className="flex  duration-500" ref={test}>
        <div className="mt-20pxr min-w-full">
          <h3 className="mt-30pxr pt-30pxr text-center text-18pxr">
            콜렉트북에 추가할 그룹 선택
          </h3>

          <div className="mt-5pxr text-center">
            <button
              onClick={() => {
                console.log(test.current);
                test.current.style.transform = `translateX(-100%)`;
              }}
              className="h-7 w-64pxr rounded-md bg-zinc-400 text-sm font-semibold text-white duration-200 hover:bg-primary hover:text-white"
            >
              다음
            </button>
          </div>

          <ul className="my-20pxr flex flex-wrap justify-center gap-3">
            {photoCardsData.map((item) => {
              return (
                <li key={item.id} className="mb-10pxr text-center">
                  <Bias
                    alt={`${item.groupName} 로고`}
                    style={`hover:translate-y-1 duration-200 h-58pxr rounded-full border m-auto cursor-pointer `}
                    src={`https://shoong.pockethost.io/api/files/groups/${item.id}/${item.logoImage}`}
                    value={`https://shoong.pockethost.io/api/files/groups/${item.id}/${item.logoImage}`}
                    groupName={item.groupName}
                  >
                    {item.groupName}
                  </Bias>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="relative mt-20pxr min-w-full">
          <h3 className="mt-30pxr pt-30pxr text-center text-18pxr">
            콜렉트북 제목 입력
          </h3>

          <div className="mt-5pxr flex justify-center gap-2">
            <button
              onClick={() => {
                console.log(test.current);
                test.current.style.transform = `translateX(0%)`;
              }}
              className="h-7 w-64pxr rounded-md bg-zinc-400 text-sm font-semibold text-white duration-200 hover:bg-primary hover:text-white"
            >
              이전
            </button>
            <button
              onClick={() => {
                console.log(test.current);
                test.current.style.transform = `translateX(-200%)`;
              }}
              className="h-7 w-64pxr rounded-md bg-zinc-400 text-sm font-semibold text-white duration-200 hover:bg-primary hover:text-white"
            >
              다음
            </button>
          </div>

          <div className=" absolute left-1/2 mt-50pxr w-4/5 -translate-x-1/2 text-center">
            <label htmlFor="collectBookTitle" className="">
              콜렉트북 제목
            </label>
            <input
              type="text"
              id="collectBookTitle"
              name="collectBookTitle"
              placeholder="ex) 새로운 청바지"
              className="w-full rounded-xl px-2 py-2 text-center"
            />
          </div>
        </div>

        <div className="mt-20pxr min-w-full">
          <h3 className="flex h-full flex-col items-center justify-center text-25pxr font-bold">
            <div>
              <strong>New</strong> 콜렉트북📘 추가완료!
            </div>
            <Link
              to="/profile"
              className="h-7 w-64pxr rounded-md bg-zinc-400 text-center text-sm font-semibold leading-28pxr text-white duration-200 hover:bg-primary hover:text-white"
            >
              확인
            </Link>
          </h3>
        </div>
      </div>
    </div>
  );
}
