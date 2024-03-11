export default function CollectBookItem({ item, handleCard, filter }) {
  return (
    <li key={item.id}>
      <button
        onClick={handleCard}
        type="button"
        className="h-112pxr w-72pxr rounded-[5px] bg-zinc-300"
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
