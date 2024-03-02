/**
 *
 * @param {{
 *  groupName: string
 *  artistName: string
 * }} props
 * @returns
 */

export default function ArtistInfo({ groupName, artistName }) {
  return (
    <div className="flex flex-col items-start">
      <p className="text-m04 font-m04 text-contentSecondary">{groupName}</p>
      <p className="text-r01 font-r01 text-contentSecondary">{artistName}</p>
    </div>
  );
}
