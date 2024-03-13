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
  src = '/myBias.jpg',
  style = 'h-60pxr m-auto rounded-full shadow-lg border',
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
        <figcaption className="w-100pxr text-center text-sb02 font-sb02 text-gray600">
          {children}
        </figcaption>
      </figure>
    </>
  );
}
