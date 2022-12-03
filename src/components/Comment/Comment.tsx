import React from "react";
import s from "./Comment.module.scss";
import { TComment } from "../../types/project";

interface CommentProps {
  comment: TComment;
}

const Comment: React.FC<CommentProps> = ({ comment}) => {
  return (
    <div className={s.comment}>
      <div className={s.comment_text}>{comment.content}</div>
    </div>
  );
};

export default Comment;
