import pb from '@/api/pocketbase';
import { useState, useEffect } from 'react';

export default function useProfileImage(isLogIn) {
  const defaultImage = '/icons/floatingDefault.jpg';
  const [profileImage, setProfileImage] = useState(defaultImage);
  useEffect(() => {
    const userId = 'dmpvqojkuclfp3q';
    const record = pb.collection('users').getOne(userId);
    pb.autoCancellation(false);
    record
      .then((data) => {
        const avatar = data.avatar;
        const imageUrl = `https://shoong.pockethost.io/api/files/users/${userId}/${avatar}`;
        setProfileImage(imageUrl);
      })
      .catch((error) => console.log('에러: ', error));
  }, [isLogIn]);

  return isLogIn ? profileImage : defaultImage;
}
