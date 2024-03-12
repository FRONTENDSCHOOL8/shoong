import pb from '@/api/pocketbase';
import useProfileImage from '../FloatingButton/useProfileImage';
import { useCommentStore } from '@/store/store';

useProfileImage;

export default function CommentInput({ id }) {
  const profileImage = useProfileImage();
  const userData = JSON.parse(localStorage.getItem('auth')).user;
  const { comments } = useCommentStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      name: userData.id,
      ment: formData.get('comment'),
    };
    // 작성 및 업데이트
    pb.collection('comments')
      .create(data)
      .then((c) =>
        pb.collection('meetUps').update(id, {
          'comments+': [...comments, c.id],
        })
      );
    e.target.reset();
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
