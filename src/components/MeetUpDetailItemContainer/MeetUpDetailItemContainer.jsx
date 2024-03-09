export default function MeetUpDetailItemContainer({ title, content }) {
  return (
    <div className="min-h-120pxr px-20pxr py-15pxr">
      <h3 className="mb-4pxr flex items-center justify-between text-base font-extrabold leading-snug text-primary">
        {title}
      </h3>

      {content}
    </div>
  );
}
