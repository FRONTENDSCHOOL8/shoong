// 버튼 컴포넌트
export default function Button({
  small,
  disabled,
  customClassNames = '',
  children,
}) {
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

  const defaultClassNames = `${width} ${height} ${paddingX} ${paddingY} ${backgroundColor} rounded-[10px] justify-center items-center gap-10pxr inline-flex text-white text-sm ${fontWeight} font-['SUIT Variable'] leading-tight`;
  const classNames = `${customClassNames} ${defaultClassNames}`.trim();

  return <button className={classNames}>{children}</button>;
}
