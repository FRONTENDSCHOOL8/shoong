export default function Input({
  name,
  value,
  onChange,
  type,
  children,
  mt = 0,
  labeled = false,
}) {
  return (
    <>
      {labeled && <label htmlFor={name}>{children}</label>}
      <input
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        type={type}
        placeholder={children}
        className={`mt-${mt} h-44pxr w-265pxr rounded-[0.625rem] bg-white pl-20pxr pt-4pxr text-sm font-medium text-zinc-400 outline-none`}
      />
    </>
  );
}
