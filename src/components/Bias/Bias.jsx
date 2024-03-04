/**
 *
 * @param {{
 *    alt?:string
 *    src?:string
 *    style?:string
 *    value?:string
 *    groupName?:string
 *    children?: string
 *    fakeRef?:import('react').MutableRefObject
 *    handle?:import('react').MouseEventHandler
 * }} props
 * @returns
 */

export default function Bias({
  alt = '내 최애 로고',
  src = '/src/assets/icons/bias.svg',
  style = 'w-100pxr h-50pxr m-auto',
  value,
  groupName,
  handle,
  fakeRef,
  children,
}) {
  return (
    <>
      <figure>
        <button type="button" value={value} onClick={handle} id={groupName}>
          <img
            ref={fakeRef}
            className={style}
            src={src}
            alt={alt}
            title={groupName}
          />
        </button>
        <figcaption className="text-sb02 text-center w-100pxr font-sb02">
          {children}
        </figcaption>
      </figure>
    </>
  );
}
