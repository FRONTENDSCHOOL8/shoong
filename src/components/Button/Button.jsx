// 버튼 컴포넌트
export default function Button({ small, disabled, children, ...restProps }) {
  let width, height, backgroundColor, fontWeight, paddingX, paddingY;
  if (small) {
    (width = 'w-69pxr'),
      (height = 'h-28pxr'),
      (fontWeight = 'medium'),
      (paddingX = 'px-10pxr'),
      (paddingY = 'py-4pxr');
  } else {
    (width = 'w-265pxr'),
      (height = 'h-44pxr'),
      (fontWeight = 'semibold'),
      (paddingX = 'px-91pxr'),
      (paddingY = 'py-12pxr');
  }

  if (disabled) {
    backgroundColor = 'bg-gray-400';
  } else {
    backgroundColor = 'bg-indigo-500';
  }

  return (
    <button
      className={`${width} ${height} ${paddingX} ${paddingY} ${backgroundColor} rounded-[10px] justify-center items-center gap-10pxr inline-flex`}
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
