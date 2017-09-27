import React from 'react';

const Message = ({ message: { author, content, createdAt } }) => {
  return (
    <div className="">
      <p>{author}</p>
      <p>{content}</p>
      <p>{createdAt}</p>
      <hr />
    </div>
  );
};

export default Message;
