import pb from '@/api/pocketbase';
import { useState } from 'react';
import { useEffect } from 'react';
import { FaPlus } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

export default function CollectBook() {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const authData = pb
      .collection('users')
      .authWithPassword('song', '123456789', { expand: 'collectBook' });
    pb.autoCancellation(false);

    authData.then((res) => {
      const collectBook = res.record.expand.collectBook;
      setBook(collectBook);
    });
  }, []);

  return (
    <>
      <ul className="flex h-145pxr min-w-700pxr gap-2">
        {book.length !== 0
          ? book.map((item) => {
              return (
                <li
                  key={item.id}
                  className="flex h-full w-100pxr cursor-pointer items-center justify-center overflow-hidden rounded-[5px] bg-zinc-300"
                >
                  <Link to={`/collectBook/${item.group}/${item.id}`}>
                    <img
                      className="h-full w-full rounded object-cover"
                      src={`https://shoong.pockethost.io/api/files/collectBook/${item.id}/${item.thumbNail}`}
                      alt={item.title}
                    />
                  </Link>
                </li>
              );
            })
          : null}
        <li className="flex h-full w-100pxr cursor-pointer items-center justify-center rounded-[5px] bg-zinc-300">
          <Link to="/profile">
            <FaPlus className="text-zinc-600" />
          </Link>
        </li>
      </ul>
    </>
  );
}
