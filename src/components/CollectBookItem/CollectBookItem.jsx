export default function CollectBookItem({ item, handleCard, filter }) {
  return (
    <li key={item.id}>
      <button
        onClick={handleCard}
        type="button"
        className="m-2 flex h-120pxr w-78pxr items-center justify-center rounded-[5px] bg-zinc-300"
      >
        <img
          className={filter}
          src={`https://shoong.pockethost.io/api/files/photoCards/${item.id}/${item.cardImg}`}
          alt={item.memberName}
        />
      </button>
    </li>
  );
}
