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
    <div className="mx-auto my-2.5 flex w-3/4 flex-col rounded-xl border-[1px]  border-contentPrimary bg-white py-1 text-center text-contentPrimary shadow-md">
      <Slider
        {...settings}
        className="cursor-pointer justify-center text-primary"
      >
        {meetUps.map((meetUp) => (
          <Link key={meetUp.id} to={`/meetUp/${meetUp.id}`}>
            <p>
              {meetUp.eventTitle}
              <span className="px-2 text-10pxr text-contentSecondary">
                {meetUp.date}
              </span>
            </p>
          </Link>
        ))}
      </Slider>
    </div>
  );
}
