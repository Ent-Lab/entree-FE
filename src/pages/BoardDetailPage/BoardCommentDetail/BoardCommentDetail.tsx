import BoardCommentItem from "../BoardCommentItem/BoardCommentItem";

export default function BoardCommentDetail({ comments }) {
  return (
    <>
      {comments.map((comment) => (
        <BoardCommentItem key={comment.id} comment={comment} />
      ))}
    </>
  );
}
