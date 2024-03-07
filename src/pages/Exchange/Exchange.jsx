import PhocaContainerEx from '@/components/PhocaContainer/PhocaContainerEx';
import SearchBar from '@/components/SearchBar/SearchBar';

export default function Exchange() {
  return (
    <div>
      <SearchBar name="Exchange" placeholder="포카찾기" bgStyle="bg-zinc-100" />
      <PhocaContainerEx />
    </div>
  );
}
