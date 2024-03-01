/**
 *
 * @param {{ title: string }} props
 * @param {string} props.phocaTitle
 * @returns {JSX.Element}
 */
export default function PhocaTitle({ title }) {
  return (
    <>
      <p className="text-sb03 font-sb03 text-gray600">{title}</p>
    </>
  );
}
