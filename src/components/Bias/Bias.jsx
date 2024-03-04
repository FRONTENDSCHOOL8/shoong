/**
 *
 * @param {{
 *    children?: string
 *    style?:string
 *    src?:string
 *    alt?:string
 *    value?:string
 *    fakeRef?:import('react').MutableRefObject
 *    handle?:import('react').MouseEventHandler
 * }} props
 * @returns
 */

export default function Bias({
  src = '/src/assets/icons/bias.svg',
  alt = '내 최애 로고',
  value,
  style = 'w-50pxr h-50pxr m-auto',
  handle,
  children,
  fakeRef,
}) {
  return (
    <>
      <figure>
        <button
          type="button"
          value={value}
          onClick={handle}
          className="flex flex-col gap-7pxr"
        >
          <img ref={fakeRef} className={style} src={src} alt={alt} />
          <figcaption className="text-sb02 text-center w-100pxr font-sb02">
            {children}
          </figcaption>
        </button>
      </figure>
    </>
  );
}
