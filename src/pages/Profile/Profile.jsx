import CollectBook from '@/components/CollectBook/CollectBook';
import ProfileItemContainer from '@/components/ProfileItemContainer/ProfileItemContainer';

export default function Profile() {
  return (
    <>
      <div className="flex h-dvh flex-col gap-5 py-5">
        <ProfileItemContainer title="콜렉트북">
          <CollectBook />
        </ProfileItemContainer>
        <ProfileItemContainer title="교환현황" />
      </div>
    </>
  );
}
