import { useRef } from 'react';

export default function Slides({ order, alt }) {
  const imageRef = useRef(null);
  return (
    <img
      src={`/carousel/carousel_${order}.jpeg`}
      alt={alt}
      className={`w-screen object-contain`}
      ref={imageRef}
    />
  );
}
