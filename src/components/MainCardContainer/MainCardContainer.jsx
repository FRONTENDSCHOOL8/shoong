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
    <section className="mx-3 my-8 flex flex-col pb-4">
      <div className="flex flex-col items-start">
        <h2 className="px-2 text-xb05 font-bold text-contentPrimary">
          {title}
        </h2>
        <p className="px-2 pt-1 text-sb03 font-sb03 text-contentSecondary">
          {subTitle}
        </p>
      </div>
      {children}
    </section>
  );
}
