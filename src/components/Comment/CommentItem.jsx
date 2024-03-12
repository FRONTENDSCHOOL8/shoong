import pb from '@/api/pocketbase';
import { useState, useEffect } from 'react';

export default function CommentItem({ id, ment, date }) {
  const [writer, setWriter] = useState({});
  const [newDate, setNewDate] = useState('');
  useEffect(() => {
    const getuserInfo = async () => {
      const userData = await pb.collection('users').getOne(id);
      setWriter(userData);
    };
    getuserInfo();
    setNewDate(date.slice(0, 10));
  }, []);
  const src = `https://shoong.pockethost.io/api/files/users/${writer.id}/${writer.avatar}`;
  return (
    <article
      key={id} // Add a unique key for each comment
      className="my-4 flex flex-row items-center gap-x-4 rounded-xl bg-white p-2 shadow-lg"
    >
      <img src={src} className="aspect-square h-42pxr rounded-full" />
      <div className="flex flex-col flex-nowrap gap-x-1 ">
        <p className="text-left text-base font-bold">
          {writer.name}
          <span className="px-1 text-m01 text-contentSecondary">{newDate}</span>
        </p>
        <p className="text-left">{ment}</p>
      </div>
    </article>
  );
}
