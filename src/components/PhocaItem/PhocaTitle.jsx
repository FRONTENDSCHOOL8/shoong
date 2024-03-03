/**
 *
 * @param {{
 * title: string
 * }} props
 * @returns
 */

export default function PhocaTitle({ title }) {
  return (
    <>
      <p className="w-44 overflow-hidden whitespace-nowrap truncate text-sb03 font-sb03 text-gray600">
        {title}
      </p>
    </>
  );
}
