import ProfileHeader from '@/components/ProfileTitle/ProfileHeader';
import NavigationTile from '@/components/NavigationTile/NavigationTile';
import ProfileFooter from '@/components/ProfileFooter/ProfileFooter';

export default function Profile() {
  return (
    <div className="min-w-360pxr">
      <ProfileHeader />
      <NavigationTile
        to="/"
        text="가이드"
        className="border-b-2 border-t-4 border-gray-200"
      />
      <NavigationTile
        to="/"
        text="제보하기"
        className=" border-b-4 border-gray-200 "
      />
      <ProfileFooter />
    </div>
  );
}
