import PhocaItem from '@/components/PhocaItem/PhocaItem';
import PhocaContainer from '../../components/PhocaContainer/PhocaContainer';

import { useLoaderData } from 'react-router';
import BiasContainer from '../../components/BiasContainer/BiasContainer';
import SortingBar from '../../components/SortingBar/SortingBar';
import FloatingButton from '@/components/FloatingButton/FloatingButton';

export default function Home() {
  const 그룹데이터 = useLoaderData();
  const 포카데이터 = 그룹데이터.map((item) => {
    return item.expand.photoCards;
  });

  return (
    <div>
      <FloatingButton />
      <PhocaContainer></PhocaContainer>
    </div>
  );
}
