import pb from '@/api/pocketbase';
import { useCommentStore } from '@/store/store';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CommentInput from './CommentInput';
import CommentItem from './CommentItem';

export default function CommentContainer() {
  const { id } = useParams();
  const { comments, setComments } = useCommentStore();
  useEffect(() => {
    const getComments = async () => {
      const meetUp = await pb.collection('MeetUps').getOne(id, {
        expand: 'comments',
      });
      setComments(meetUp.expand.comments);
    };
    getComments();
  }, [setComments]);

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
        />
      ))}
      <CommentInput id={id} />
    </div>
  );
}
