import { useLoaderData } from "react-router";
import useProfileImage from "../FloatingButton/useProfileImage"

export default function ProfileInfo() {
  const profileImage = useProfileImage();
  const user = useLoaderData();
  return (
    <div className="inline-flex"><p>{user.name}</p>
            <img
          className="w-55pxr h-55pxr rounded-full"
          src={profileImage}
        /></div>
  )
}