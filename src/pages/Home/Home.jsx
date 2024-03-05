import NavBar from '@/components/NavBar/NavBar';
import PhocaContainer from '../../components/PhocaContainer/PhocaContainer';
import PhocaContainer2 from '@/components/PhocaContainer/PhocaContainer2';
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
      <PhocaContainer 

        />

      <PhocaContainer2

        />
      <NavBar />
    </div>
  );
}
