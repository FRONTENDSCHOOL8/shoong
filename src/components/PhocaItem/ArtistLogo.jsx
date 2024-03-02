/**
 *
 * @param {{
 *  logoImgSrc: string
 *  groupName: string
 * }} props
 * @returns
 */

export default function ArtistLogo({ logoImgSrc, groupName }) {
  return (
    <img
      src={logoImgSrc}
      alt={`${groupName} 로고`}
      className="w-10 h-10 rounded-full object-cover mt-1"
    />
  );
}
