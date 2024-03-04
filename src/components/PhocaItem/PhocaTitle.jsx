/**
 *
 * @param {{
 * title: string,
 * titleClass: string,
 * }} props
 * @returns
 */

export default function PhocaTitle({ title, titleClass }) {
  return (
    <>
      <p className={titleClass}>
        {title}
      </p>
    </>
  );
}
