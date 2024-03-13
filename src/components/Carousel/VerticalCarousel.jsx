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
    <div className=" mx-auto my-2.5 w-5/6 rounded-xl border  border-gray-300 bg-white pt-1 text-center text-contentPrimary shadow-md">
      <Slider {...settings}>
        {meetUps.map((meetUp) => (
          <div key={meetUp.id}>
            <p className="truncate text-r02 text-primary">
              {meetUp.eventTitle}
              <span className=" px-2 text-10pxr text-contentSecondary">
                {meetUp.date}
              </span>
            </p>
          </div>
        ))}
      </Slider>
    </div>
  );
}
