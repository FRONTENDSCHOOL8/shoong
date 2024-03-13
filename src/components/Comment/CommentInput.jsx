import pb from '@/api/pocketbase';
import { useCommentStore } from '@/store/store';
import { useCallback, useEffect } from 'react';
import useProfileImage from '../FloatingButton/useProfileImage';

export default function CommentInput({ id }) {
  const profileImage = useProfileImage(true);
  const userData = JSON.parse(localStorage.getItem('auth')).user;
  const { comments, setComments } = useCommentStore();

  const updateComments = useCallback(
    async (comment) => {
      const createdComment = await pb.collection('comments').create(comment);
      await pb.collection('meetUps').update(id, {
        'comments+': [...comments, createdComment.id],
      });
      setComments([...comments, createdComment]); // Update local state
    },
    [comments, id]
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      name: userData.id,
      ment: formData.get('comment'),
    };
    updateComments(data);
    e.target.reset();
  };

  useEffect(() => {
    pb.collection('comments').subscribe('*', (e) => {
      console.log(e.action);
      console.log(e.record);
      console.log(comments);
      if (e.action === 'update') {
        setComments([...comments, e.record]);
      }
    });

    return () => pb.collection('comments').unsubscribe('*');
  }, [comments]);

  return (
    <form
      method="post"
      className="flex h-14 flex-row items-center gap-x-2 rounded-lg bg-white px-2 py-2.5 shadow-meetUp"
      onSubmit={handleSubmit}
    >
      <img src={profileImage} alt="" className="h-10 rounded-full" />
      <input
        type="text"
        name="comment"
        placeholder="댓글달기"
        className="h-10 flex-grow rounded-lg  border border-gray-200 px-2 placeholder:text-r01"
      />
      <button
        type="submit"
        className="size-10 rounded-lg bg-secondary text-r01 text-white"
      >
        등록
      </button>
    </form>
  );
}