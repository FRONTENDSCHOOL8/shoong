/**
 *
 * @param {object} props
 * @param {string} props.title
 * @param {string} props.subTitle
 * @param {React.ReactNode} props.children
 * @returns
 */
export default function MainCardContainer({ title, subTitle, children }) {
  return (
    <section className="flex flex-col">
      <div className="flex flex-col items-start">
        <h2 className="font-bold text-contentPrimary text-xb05">{title}</h2>
        <p className="text-contentSecondary text-sb03">{subTitle}</p>
      </div>
      {children}
    </section>
  );
}
