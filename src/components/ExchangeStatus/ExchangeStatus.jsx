export default function ExchangeStatus() {
  return (
    <ul className="flex h-140pxr items-center justify-around rounded-xl bg-gray-200 px-8">
      <li className="flex flex-col items-center gap-5">
        <div>교환 대기 중</div>
        <div className="font-semibold text-red-600">2</div>
      </li>
      <li>
        <div className="h-60pxr w-0.5 bg-neutral-300" />
      </li>
      <li className="flex flex-col items-center gap-5">
        <div>거래 중</div>
        <div className="font-semibold text-red-600">0</div>
      </li>
      <li>
        <div className="h-60pxr w-0.5 bg-neutral-300" />
      </li>
      <li className="flex flex-col items-center gap-5">
        <div>거래 완료</div>
        <div className="font-semibold text-red-600">2</div>
      </li>
    </ul>
  );
}
