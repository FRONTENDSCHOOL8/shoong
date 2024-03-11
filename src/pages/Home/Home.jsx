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
import MainCardContainer from '@/components/MainCardContainer/MainCardContainer';
import Carousel from '@/components/Carousel/Carousel';
import VerticalCarousel from '@/components/Carousel/VerticalCarousel';

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
      <Carousel />
      <VerticalCarousel />
      <MainCardContainer title="최신순" subTitle="인기신상!">
        <PhocaContainer phocaData={phocaDataByCreated} />
      </MainCardContainer>
      <MainCardContainer title="인기순" subTitle="찜갯수가 많은 순서대로">
        <PhocaContainer phocaData={phocaDataByLikeCount} />
      </MainCardContainer>
    </div>
  );
}
