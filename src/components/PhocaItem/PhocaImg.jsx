
/**
 *
 * @param {{
 *  phocaImgSrc: string,
 *  phocaImgAlt: string,
 *  imgClass: string,
 *  children: JSX.Element | JSX.Element[], // children을 타입에 추가
 * }} props
 * @returns
 */

export default function PhocaImg({ phocaImgSrc, phocaImgAlt, imgClass, children }) {
  return (
    <div className={imgClass}>
      <img
        src={phocaImgSrc}
        className="h-full w-full object-cover rounded-xl"
        alt={phocaImgAlt}
      />
      <div className="absolute bottom-2 right-4">
        {children}
      </div>
    </div>
  );
}
