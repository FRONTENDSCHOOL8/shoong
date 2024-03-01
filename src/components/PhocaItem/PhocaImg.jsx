import PhocaLikeButton from './PhocaLikeButton';

export default function PhocaImg({ src, alt }) {
  return (
    <div className="mb-4 min-w-176pxr relative">
      <img
        src={src}
        className="h-full w-full object-cover rounded-xl"
        alt={alt}
      />
      <div className="absolute bottom-3 right-4">
        <PhocaLikeButton />
      </div>
    </div>
  );
}
