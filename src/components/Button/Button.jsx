// 버튼 컴포넌트
export default function Button({
  small,
  disabled,
  bgClassName = '',
  textColorClassName = '',
  customClassNames = '',
  children,
}) {
  let width, height, fontWeight, backgroundColor, textColor;
  if (small) {
    (width = 'w-69pxr'), (height = 'h-28pxr'), (fontWeight = 'medium');
  } else {
    (width = 'w-265pxr'), (height = 'h-44pxr'), (fontWeight = 'semibold');
  }

  bgClassName
    ? (backgroundColor = bgClassName)
    : (backgroundColor = disabled ? 'bg-gray-400' : 'bg-indigo-500');

  textColorClassName
    ? (textColor = textColorClassName)
    : (textColor = 'text-white');

  const defaultClassNames = `${width} ${height} ${fontWeight} rounded-[10px] text-sm`;
  const classNames =
    `${textColor} ${backgroundColor} ${customClassNames} ${defaultClassNames}`.trim();

  return <button className={classNames}>{children}</button>;
}
