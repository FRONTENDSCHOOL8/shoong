/**
 *
 * @param {Object} props
 * @param {string} props.imgUrl
 * @param {string} props.altText
 * @returns {React.ReactElement}
 */
export default function ArtistLogo({ logoImgUrl, logoAltText }) {
  const style = {
    width: '2.5rem',
    height: '2.5rem',
    borderRadius: '50%',
    objectFit: 'cover',
    marginTop: '0.1rem',
  };

  return <img src={logoImgUrl} alt={logoAltText} style={style} />;
}
