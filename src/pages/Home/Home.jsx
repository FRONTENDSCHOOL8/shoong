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
        titleClass="w-44 overflow-hidden whitespace-nowrap truncate text-sb03 font-sb03 text-gray600"
        imgClass="mb-4 w-44 h-260pxr relative"
        infoClass="flex flex-col items-start"
        groupClass="text-m04 font-m04 text-contentSecondary"
        memberClass="text-r01 font-r01 text-contentSecondary"
        linkClass="flex flex-col items-center cursor-pointer hover:scale-95 transition-transform duration-300 w-186pxr bg-gray100 rounded-xl"
        />

      <PhocaContainer2
        titleClass="w-44 overflow-hidden whitespace-nowrap truncate text-sb03 font-sb03 text-gray600"
        imgClass="mb-4 w-44 h-260pxr relative"
        infoClass="flex flex-col items-start"
        groupClass="text-m04 font-m04 text-contentSecondary"
        memberClass="text-r01 font-r01 text-contentSecondary"
        linkClass="flex flex-col items-center cursor-pointer hover:scale-95 transition-transform duration-300 w-186pxr bg-gray100 rounded-xl"
        />
      <NavBar />
    </div>
  );
}
