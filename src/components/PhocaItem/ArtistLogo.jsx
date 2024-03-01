/**
 *
 * @param {Object} props
 * @param {string} props.logoImgSrc
 * @param {string} props.groupName
 * @returns {React.ReactElement}
 */
export default function ArtistLogo({ logoImgSrc, groupName }) {
  const style = {
    width: '2.5rem',
    height: '2.5rem',
    borderRadius: '50%',
    objectFit: 'cover',
    marginTop: '0.1rem',
  };

  return <img src={logoImgSrc} alt={`${groupName} 로고`} style={style} />;
}
