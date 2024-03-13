import { useEffect, useState } from 'react';

import MyBias from '../MyBias/MyBias';
import pb from '@/api/pocketbase';

export default function ProfileInfo() {
  const [profileImage, setProfileImage] = useState(
    '/icons/floatingDefault.jpg'
  );
  const [userName, setUserName] = useState('');
  useEffect(() => {
    const fetchProfileImage = async () => {
      try {
        const userId = JSON.parse(localStorage.getItem('auth')).user.id;
        const record = await pb.collection('users').getOne(userId);
        const url = `https://shoong.pockethost.io/api/files/users/${userId}/${record.avatar}`;
        const userName = record.name;
        setProfileImage(url);
        setUserName(userName);
      } catch (error) {
        console.error('Error fetching profile image:', error);
      }
    };
    fetchProfileImage();
  }, []);
  return (
    <div className="flex w-full items-center justify-between">
      <div className="flex items-center gap-x-2">
        <img
          className="h-42pxr w-42pxr rounded-full"
          src={profileImage}
          alt="Profile"
        />
        <p className="text-xl text-contentPrimary">{userName}</p>
      </div>
      <MyBias />
    </div>
  );
}
