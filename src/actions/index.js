export function fetchMessages(channel) {
  const promise = fetch("https://wagon-chat.herokuapp.com/general/messages")
    .then(response => response.json());
  return {
    type: 'FETCH_MESSAGES',
    payload: promise
  };
}

export function createMessage(channel, author, content) {
  console.log(channel, author, content);
  const promise = fetch("https://wagon-chat.herokuapp.com/general/messages",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        channel: channel,
        author: author,
        content: content
      })
    })
    .then(response => response.json());
  return {
    type: 'CREATE_MESSAGES',
    payload: promise
  };
}
