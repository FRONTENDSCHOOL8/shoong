import { FaRegAddressBook } from 'react-icons/fa6';

/**
 *
 * @param {{
 *    title?:string
 *    children?:React.ReactNode
 * }} props
 * @returns
 */

export default function ProfileItemContainer({ title, children }) {
  return (
    <>
      <div className="mx-20pxr h-52 rounded-[10px] bg-white bg-opacity-70 pb-10pxr shadow">
        <div className="font-semibold-40pxr flex items-center gap-1 p-3 text-gray-500">
          <FaRegAddressBook />
          <span>{title}</span>
        </div>

        <div className="mx-3 overflow-x-scroll">{children}</div>
      </div>
    </>
  );
}
