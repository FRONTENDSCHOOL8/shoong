import { Link } from 'react-router-dom';

export default function ImageLink({ type }) {
  const banners = {
    like: {
      src: '/banner_7.png',
      alt: '콜렉트북 바로가기',
      to: '/profile',
    },
    faq: {
      src: '/banner_faq.png',
      alt: '자주하는 질문 페이지로 이동하기',
      to: '/profileSetting',
    },
  };
  const bannerData = banners[type];
  const { src, alt, to } = bannerData;
  return (
    <Link
      to={to}
      className="mb-10 flex w-full cursor-pointer flex-row justify-center"
    >
      <img src={src} alt={alt} className=" w-max-1/2 w-500pxr " />
    </Link>
  );
}
