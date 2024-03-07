import CollectBookItem from '../CollectBookItem/CollectBookItem';

export default function CollectBookItemContainer({
  title,
  state,
  phocaData,
  phocaID,
  handleCard,
  imgFilter,
  pb,
}) {
  return (
    <div className={`${pb}`}>
      <div className="font-bold">{title}</div>
      <ul className="m-auto my-10pxr flex h-280pxr flex-wrap justify-center overflow-y-scroll">
        {phocaData.map((item) => {
          if (phocaID.includes(item.id) === state) {
            return (
              <CollectBookItem
                key={item.id}
                item={item}
                handleCard={handleCard}
                filter={imgFilter}
              />
            );
          }
        })}
      </ul>
    </div>
  );
}