import CommentList from "./CommentList";
import CommentInput from "./CommentInput";

export default function CommentContainer() {
  return (
    <div>
      <p className="text-contentSecondary text-xl
font-bold text-left p-3"><span className="text-contentPrimary">3</span>개의 코멘트</p>
<hr className="border-primary"/>
      <CommentList />
      <CommentInput />
    </div>
  )
}