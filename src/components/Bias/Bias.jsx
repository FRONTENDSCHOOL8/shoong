export default function Bias() {
  const group = [
    'bias',
    'StrayKids',
    'fromis_9',
    'BlackPink',
    'NewJeans',
    'BTS',
    'GIDLE',
    'IVE',
    'MONSTA_X',
    'NCT',
    'TXT',
  ];

  return (
    <>
      {group.map((item, index) => {
        return (
          <img
            key={index}
            className="h-[50px]"
            src={`/src/assets/icons/${item}.svg`}
            alt={`${item} 로고`}
          />
        );
      })}
    </>
  );
}
