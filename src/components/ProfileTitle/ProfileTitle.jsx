import { TbSettings } from "react-icons/tb";


export default function ProfileTitle() {
  return (
    <div className=" flex flex-row justify-between items-center">
    <h1 className="text-contentPrimary text-2xl font-extrabold">프로필</h1>
    <TbSettings className="h-6 text-2xl "/>
    </div>
  )
}