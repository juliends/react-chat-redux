import React from 'react';

const Message = ({ message: { author, content, createdAt } }) => {
  return (
    <div className="">
      <p><strong>{author}</strong></p>
      <p>{content}</p>
      <p>{createdAt}</p>
      <hr />
    </div>
  );
};

export default Message;
