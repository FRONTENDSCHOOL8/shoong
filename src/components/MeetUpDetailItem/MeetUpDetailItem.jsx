export default function MeetUpDetailItem({ title, content }) {
  return (
    <>
      <div className="flex items-baseline gap-3">
        <span className="my-5pxr inline-block min-w-45pxr text-xs font-extrabold leading-none text-gray-500">
          {title}
        </span>
        <div className="text-xs font-medium leading-[18px] text-gray-500">
          {content}
        </div>
      </div>
    </>
  );
}
