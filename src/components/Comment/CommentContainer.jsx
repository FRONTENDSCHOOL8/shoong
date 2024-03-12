import pb from '@/api/pocketbase';
import { useCommentStore } from '@/store/store';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useProfileImage from '../FloatingButton/useProfileImage';
import { Form } from 'react-router-dom';

function CommentItem({ id, ment, date }) {
  const [writer, setWriter] = useState({});
  const [newDate, setNewDate] = useState('');
  useEffect(() => {
    const getuserInfo = async () => {
      const userData = await pb.collection('users').getOne(id);
      setWriter(userData);
    };
    getuserInfo();
    setNewDate(date.slice(0, 10));
  }, [id]);
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

function CommentInput() {
  const profileImage = useProfileImage();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {};
    console.log(formData.get('comment'));
  };

  return (
    <form
      method="post"
      className="flex h-16 flex-row items-center gap-x-2 px-2 py-2.5 shadow-meetUp"
      onSubmit={handleSubmit}
    >
      <img src={profileImage} alt="" className="h-12 rounded-full" />
      <input
        type="text"
        name="comment"
        placeholder="댓글달기"
        className="h-10 flex-grow rounded-lg border border-contentTertiary px-2"
      />
      <button type="submit">등록</button>
    </form>
  );
}

export default function CommentContainer() {
  const { id } = useParams();
  const { comments, setComments } = useCommentStore();
  //real-time
  useEffect(() => {
    pb.collection('meetUps').subscribe(
      id,
      function (e) {
        console.log(e.action);
        console.log(e.record);
        // setComments(e.record.expand.comments);
      },
      { expand: 'comments' }
    );
    return () => {
      pb.collection('meetUps').unsubscribe();
    };
  });
  //get
  useEffect(() => {
    const getComments = async () => {
      const meetUp = await pb.collection('MeetUps').getOne(id, {
        expand: 'comments',
      });
      setComments(meetUp.expand.comments);
    };
    getComments();
  }, []);
  //write
  const writeComments = async () => {
    const data = {
      name: 'gs6h5psbs8c0ww', //임시
      ment: '',
      meetUpId: { id },
    };
    await pb.collection('comments').create(data);
  };
  //update
  const updateComments = async ({ rec_id, data }) => {
    await pb.collection('comments').update(rec_id, data);
  };
  return (
    <div className="m-20pxr">
      <p
        className="py-4 text-left
text-lg font-bold text-contentSecondary"
      >
        <span className="text-contentPrimary">{comments.length}</span>개의
        코멘트
      </p>
      <hr className="border-primary" />
      {comments.map((comment) => (
        <CommentItem
          key={comment.id}
          ment={comment.ment}
          id={comment.name}
          date={comment.created}
          updateComments={updateComments}
        />
      ))}
      <CommentInput onAddComment={setComments} />
    </div>
  );
}
