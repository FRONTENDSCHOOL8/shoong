import CollectBook from '@/components/CollectBook/CollectBook';
import ProfileItemContainer from '@/components/ProfileItemContainer/ProfileItemContainer';
import NavigationTile from '@/components/NavigationTile/NavigationTile';
import ProfileFooter from '@/components/ProfileFooter/ProfileFooter';
import ProfileHeader from '@/components/ProfileTitle/ProfileHeader';

export default function Profile() {
  return (
    <>
      <div className="flex h-dvh flex-col gap-5 py-5">
        <ProfileHeader />
        <ProfileItemContainer title="콜렉트북">
          <CollectBook />
        </ProfileItemContainer>
        <ProfileItemContainer title="교환현황" />
        <div>
          <NavigationTile
            to="/"
            text="가이드"
            className=" border-b-2 border-t-4 border-gray-200"
          />
          <NavigationTile
            to="/"
            text="제보하기"
            className=" border-b-4 border-gray-200 "
          />
          <ProfileFooter />
        </div>
      </div>
    </>
  );
}
