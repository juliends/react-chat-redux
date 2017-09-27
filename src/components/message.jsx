import React from 'react';

const Message = (props) => {
  const message = props.message;
  return (
    <div className="">
      <p>{message.author}</p>
      <p>{message.content}</p>
      <p>{message.created_at}</p>
    </div>
  );
};

export default Message;
