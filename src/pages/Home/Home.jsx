import NavBar from '@/components/NavBar/NavBar';
import PhocaItem from '@/components/PhocaItem/PhocaItem';
import PhocaContainer from '../../components/PhocaContainer/PhocaContainer';
import { useLoaderData } from 'react-router';

export default function Home() {
  const 그룹데이터 = useLoaderData();
  const 포카데이터 = 그룹데이터.map((item) => {
    return item.expand.photoCards;
  });

  return (
    <div>
      <PhocaContainer></PhocaContainer>
      {/* <PhocaContainer></PhocaContainer> */}
      <PhocaItem />
      <NavBar />
    </div>
  );
}
