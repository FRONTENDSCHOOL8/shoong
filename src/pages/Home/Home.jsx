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
      <MainCardContainer
        title="최신 업데이트 포카"
        subTitle="두근두근 오늘의 신상 포카는...!"
      >
        <PhocaContainer phocaData={phocaDataByCreated} />
      </MainCardContainer>
      <MainCardContainer
        title="가장 많이 찜한 포카"
        subTitle="갖.고.싶.다 🥰  너두? 야 나두!"
      >
        <PhocaContainer phocaData={phocaDataByLikeCount} />
      </MainCardContainer>
    </div>
  );
}
