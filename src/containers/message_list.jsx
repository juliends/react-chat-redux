import React, { Component } from 'react';
import Message from '../components/message';

// Redux config
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { setMessages } from '../actions';

class MessageList extends Component {
  render() {
    const messages = this.props.messages;
    return (
      messages.map(message => <Message key={message.created_at} message={message}/>)
    );
  }
}

function mapStateToProps(state) {
  return {
    messages: state.messages
  };
}

export default connect(mapStateToProps)(MessageList);
