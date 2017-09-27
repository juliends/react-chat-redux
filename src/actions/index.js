export function fetchMessages(channel) {
  const messages = fetch("https://wagon-chat.herokuapp.com/general/messages")
    .then(response => response.json());
  return {
    type: 'FETCH_MESSAGES',
    payload: messages
  };
}
