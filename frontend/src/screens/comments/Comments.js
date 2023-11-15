import React, { useState, useEffect } from 'react';
import {
  getComments as getCommentsApi,
  createComment as createCommentApi,
} from '../../data';
import Comment from './Comment';
import CommentForm from './CommentForm';

const Comments = ({ currentUserId }) => {
  const [backendComments, setBackendComments] = useState([]);
  const rootComments = backendComments.filter(
    (backendComment) => backendComment.parentId === null
  );
  const getReplies = (commendId) => {
    return backendComments
      .filter((backendComment) => backendComment.parentId === commendId)
      .sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );
  };
  const addComment = (text, parentId) => {
    console.log('AddComment', text, parentId);
    createCommentApi(text, parentId).then((comment) => {
      setBackendComments([comment, ...backendComments]);
    });
  };

  useEffect(() => {
    getCommentsApi().then((data) => {
      setBackendComments(data);
    });
  }, []);

  return (
    <div className="comments">
      <h3 className="comments-title">Comments</h3>
      <div className="comment-form-title">Write Comment</div>
      <CommentForm submitLabel="Write" handleSubmit={addComment} />
      <div className="comments-container">
        {rootComments.map((rootComment) => (
          <Comment
            key={rootComment.id}
            comment={rootComment}
            replies={getReplies(rootComment.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Comments;
