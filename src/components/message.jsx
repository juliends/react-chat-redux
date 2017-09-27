import React from 'react';
import Emojify from 'react-emojione';

const Message = ({ message: { author, content, createdAt } }) => {
  return (
    <div className="">
      <p><strong>{author}</strong></p>
      <Emojify>
        <p>{content}</p>
       </Emojify>
      <p>{createdAt}</p>
      <hr />
    </div>
  );
};

export default Message;
