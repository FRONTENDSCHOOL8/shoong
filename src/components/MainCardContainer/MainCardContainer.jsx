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
    <section className="mx-3 flex flex-col">
      <div className="flex flex-col items-start">
        <h2 className="text-xb05 font-bold text-contentPrimary">{title}</h2>
        <p className="text-sb03 text-contentSecondary">{subTitle}</p>
      </div>
      {children}
    </section>
  );
}
