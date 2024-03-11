import { Link } from 'react-router-dom';

export default function ImageLink({ type }) {
  const banners = {
    like: {
      src: '/banner_1.png',
      alt: '내가 찜한 갈망포카 모아보기',
      to: '/Like',
    },
    faq: {
      src: '/banner_faq.png',
      alt: '자주하는 질문 페이지로 이동하기',
      to: '/profile',
    },
  };
  const bannerData = banners[type];
  const { src, alt, to } = bannerData;
  return (
    <Link to={to} className="my-4 flex cursor-pointer flex-row justify-center">
      <img src={src} alt={alt} className=" w-max-500pxr w-1/2 rounded-md" />
    </Link>
  );
}
