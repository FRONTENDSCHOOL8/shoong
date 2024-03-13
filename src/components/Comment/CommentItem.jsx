import pb from '@/api/pocketbase';
import { useState, useEffect, useId } from 'react';

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
      key={useId()}
      className="my-4 flex flex-row items-center gap-x-4 rounded-xl bg-white p-2 shadow-lg transition-all duration-1000"
    >
      <img src={src} className="aspect-square h-42pxr rounded-full shadow-md" />
      <div className="flex flex-col flex-nowrap gap-x-1 ">
        <p className="text-left text-sb02 font-sb02 text-contentPrimary">
          {writer.name}
          <span className="px-1 text-m01 text-contentSecondary">{newDate}</span>
        </p>
        <p className="text-left text-r01">{ment}</p>
      </div>
    </article>
  );
}
