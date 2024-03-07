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
      <div className="mx-3 flex gap-2">
        {book.length !== 0
          ? book.map((item) => {
              return (
                <Link
                  key={item.id}
                  to={`/collectBook/${item.group}/${item.id}`}
                  className="flex min-h-32 min-w-20 cursor-pointer items-center justify-center rounded-[5px] bg-zinc-300"
                >
                  <img
                    className="h-full w-full rounded object-cover"
                    src={`https://shoong.pockethost.io/api/files/collectBook/${item.id}/${item.thumbNail}`}
                    alt={item.title}
                  />
                </Link>
              );
            })
          : null}
        <Link
          to="/profile"
          className="flex min-h-32 min-w-20 cursor-pointer items-center justify-center rounded-[5px] bg-zinc-300"
        >
          <FaPlus className="text-zinc-600" />
        </Link>
      </div>
    </>
  );
}
