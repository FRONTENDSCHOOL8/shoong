import pb from '@/api/pocketbase';
import { useState, useEffect } from 'react';

export default function useProfileImage(isAuth) {
  const defaultImage = '/icons/floatingDefault.jpg';
  const [profileImage, setProfileImage] = useState(defaultImage);
  // const userData = JSON.parse(localStorage.getItem('auth')).user;

  useEffect(() => {
    const userId = '173z2c41bbw6fp4';
    const record = pb.collection('users').getOne(userId);
    pb.autoCancellation(false);
    record
      .then((data) => {
        const avatar = data.avatar;
        const imageUrl = `https://shoong.pockethost.io/api/files/users/${userId}/${avatar}`;
        setProfileImage(imageUrl);
      })
      .catch((error) => console.log('에러: ', error));
  }, [isAuth]);

  return isAuth ? profileImage : defaultImage;
}
