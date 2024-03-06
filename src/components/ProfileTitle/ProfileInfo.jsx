import { useLoaderData } from "react-router";
import useProfileImage from "../FloatingButton/useProfileImage"

export default function ProfileInfo() {
  const profileImage = useProfileImage();
  const user = useLoaderData();
  return (
    <div className="flex gap-x-2 items-center">
       <img
          className="w-42pxr h-42pxr rounded-full"
          src={profileImage}
        />
      <p className="text-contentPrimary text-xl">{user.name}</p></div>    
  )
}