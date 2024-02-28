// 버튼 컴포넌트
export default function Button({ small, disabled, children, ...restProps }) {
  let width, height, backgroundColor, fontWeight, paddingX, paddingY;
  if (small) {
    (width = 'w-[69px]'),
      (height = 'h-7'),
      (fontWeight = 'medium'),
      (paddingX = 'px-2.5'),
      (paddingY = 'py-1');
  } else {
    (width = 'w-[265px]'),
      (height = 'h-11'),
      (fontWeight = 'semibold'),
      (paddingX = 'px-[91px]'),
      (paddingY = 'py-3');
  }

  if (disabled) {
    backgroundColor = 'bg-gray-400';
  } else {
    backgroundColor = 'bg-indigo-500';
  }

  return (
    <button
      className={`${width} ${height} ${paddingX} ${paddingY} ${backgroundColor} rounded-[10px] justify-center items-center gap-2.5 inline-flex`}
      {...restProps}
    >
      <div
        className={`text-white text-sm ${fontWeight} font-['SUIT Variable'] leading-tight`}
      >
        {children}
      </div>
    </button>
  );
}
