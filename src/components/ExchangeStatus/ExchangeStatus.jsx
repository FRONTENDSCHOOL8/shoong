export default function ExchangeStatus() {
  return (
    <ul className="flex h-110pxr items-center justify-around gap-2 rounded-xl bg-gray-200 px-4 font-m02 text-gray-800">
      <li className="flex w-80pxr flex-col items-center gap-5">
        <div>교환 대기 중</div>
        <div className="text-18pxr font-semibold text-red-600">2</div>
      </li>
      <li>
        <div className="h-60pxr w-0.5 bg-gray-300" />
      </li>
      <li className="flex w-80pxr flex-col items-center gap-5">
        <div>거래 중</div>
        <div className="text-18pxr font-semibold text-red-600">0</div>
      </li>
      <li>
        <div className="h-60pxr w-0.5 bg-gray-300" />
      </li>
      <li className="flex w-80pxr flex-col items-center gap-5">
        <div>거래 완료</div>
        <div className="text-18pxr font-semibold text-red-600">2</div>
      </li>
    </ul>
  );
}
