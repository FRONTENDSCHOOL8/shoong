import Button from '../Button/Button';

export function TextLayout({ children }) {
  return (
    <div className="mx-60pxr mb-40pxr mt-20pxr text-left text-xs font-medium text-gray-500">
      {children}
    </div>
  );
}

export function RadioLayout({ itemList, onChange, checkedName }) {
  return (
    <div className="bottomBox w-10/12 text-center">
      <div className="h-200pxr overflow-y-auto">
        {itemList.map((item, index) => (
          <div key={index}>
            <RadioItem
              name={item}
              onChange={onChange}
              checkedName={checkedName}
            >
              {item}
            </RadioItem>
            {index < itemList.length - 1 && <BorderLine />}
          </div>
        ))}
      </div>
      <Button style="mt-8pxr">확인</Button>
    </div>
  );
}

function RadioItem({ children, name, onChange, checkedName }) {
  let radioStyle = { background: "url('/radioUnchecked.svg') no-repeat" };
  if (name === checkedName) {
    radioStyle.background = "url('/radioChecked.svg') no-repeat";
  }
  return (
    <label className="my-14pxr flex flex-row gap-16pxr  pl-16pxr">
      <input
        type="radio"
        name={name}
        onChange={onChange}
        checked={name === checkedName}
        className="absolute h-22pxr w-22pxr appearance-none"
      />
      <span className="h-22pxr w-22pxr" style={radioStyle} />
      <span className="grow text-left text-sm font-semibold text-neutral-600">
        {children}
      </span>
    </label>
  );
}

function BorderLine() {
  return <div className="h-1pxr w-full bg-zinc-100"></div>;
}
