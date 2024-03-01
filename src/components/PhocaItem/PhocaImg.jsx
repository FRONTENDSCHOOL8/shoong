import PhocaLikeButton from './PhocaLikeButton';

export default function PhocaImg({ phocaImgSrc, phocaImgAlt }) {
  return (
    <div className="mb-4 min-w-176pxr relative">
      <img
        src={phocaImgSrc}
        className="h-full w-full object-cover rounded-xl"
        alt={phocaImgAlt}
      />
      <div className="absolute bottom-3 right-4">
        <PhocaLikeButton />
      </div>
    </div>
  );
}
