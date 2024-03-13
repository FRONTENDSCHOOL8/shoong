import pb from '@/api/pocketbase';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

export default function VerticalCarousel() {
  const [meetUps, setMeetups] = useState([]);
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    vertical: true,
    swipeToSlide: true,
    arrows: false,
  };

  useEffect(() => {
    const getMeetupData = async () => {
      try {
        pb.autoCancellation(false);
        const records = await pb.collection('MeetUps').getFullList();
        setMeetups(records);
      } catch (error) {
        console.log('Error getting meetup data:', error);
      }
    };
    getMeetupData();
  }, []);
  return (
    <div className=" mx-auto my-2.5 flex w-5/6 flex-col rounded-xl border-[1px]  border-gray-300 bg-white py-1 text-center text-contentPrimary shadow-md">
      <Slider {...settings} className="justify-center text-primary">
        {meetUps.map((meetUp) => (
          <div key={meetUp.id}>
            <p className="text-r01">
              {meetUp.eventTitle}
              <span className="text-ellipsis px-2 text-10pxr text-contentSecondary">
                {meetUp.date}
              </span>
            </p>
          </div>
        ))}
      </Slider>
    </div>
  );
}
