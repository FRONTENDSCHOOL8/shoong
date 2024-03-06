import NavBar from '@/components/NavBar/NavBar';
import PhocaItem from '@/components/PhocaItem/PhocaItem';
import PhocaContainer from '../../components/PhocaContainer/PhocaContainer';
import {
  usePhocaDataByLikeCount,
  usePhocaDataByCreated,
} from '../../loader/usePhocaData';
import { useLoaderData } from 'react-router';
import BiasContainer from '../../components/BiasContainer/BiasContainer';
import SortingBar from '../../components/SortingBar/SortingBar';
import FloatingButton from '@/components/FloatingButton/FloatingButton';

export default function Home() {
  const group = useLoaderData();
  const phoca = group.map((item) => {
    return item.expand.photoCards;
  });

  const phocaDataByCreated = usePhocaDataByCreated();
  const phocaDataByLikeCount = usePhocaDataByLikeCount();

  return (
    <div>
      <FloatingButton />
      최신순
      <PhocaContainer phocaData={phocaDataByCreated} />
      인기순
      <PhocaContainer phocaData={phocaDataByLikeCount} />
      <NavBar />
    </div>
  );
}
