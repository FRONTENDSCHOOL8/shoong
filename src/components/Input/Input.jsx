export default function Input({
  name,
  value,
  onChange,
  type,
  placeholder,
  customClassNames = '',
  bgClassName = '',
  labeled = false,
  label,
  mt = 0,
}) {
  const defaultClassNames = `h-44pxr w-265pxr rounded-[0.625rem] pl-20pxr text-sm font-medium text-contentTertiary outline-none`;
  const classNames =
    `${bgClassName} ${customClassNames} ${defaultClassNames}`.trim();

  return (
    <div className={`mt-${mt} flex flex-col`}>
      {labeled && (
        <label htmlFor={name} className="text-xs font-semibold text-primary">
          {label}
        </label>
      )}
      <input
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        className={classNames}
      />
    </div>
  );
}
