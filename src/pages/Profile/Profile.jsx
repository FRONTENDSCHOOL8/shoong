import NavigationTile from '@/components/NavigationTile/NavigationTile';

export default function Profile() {
  return (
    <div>
      Profile
      <NavigationTile to="/" text="가이드" />
      <NavigationTile to="/" text="제보하기" />
    </div>
  );
}
