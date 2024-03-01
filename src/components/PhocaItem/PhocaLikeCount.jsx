/**
 * @param {{ likes: number }} param0
 * @param {number} param0.likes
 * @returns {JSX.Element}
 */

export default function PhocaLikeCount({ phocaLikes }) {
  return (
    <div className="text-negative text-xb02 font-xb02 ">♥️ {phocaLikes} </div>
  );
}
