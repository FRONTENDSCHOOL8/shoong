import ProfileInfo from "./ProfileInfo";
import ProfileTitle from "./ProfileTitle";

export default function ProfileHeader() {
  return (
<div className="flex flex-col text-start gap-y-7 px-7 py-3">
<ProfileTitle />
<ProfileInfo />
</div>  )
}