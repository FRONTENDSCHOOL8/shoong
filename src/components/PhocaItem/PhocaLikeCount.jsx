/**
 *
 * @param {{
 *  likeCount: number
 * }} props
 * @returns
 */

export default function PhocaLikeCount({ likeCount }) {
  return (
    <div className="text-negative text-xb02 font-xb02 ">♥️ {likeCount} </div>
  );
}
