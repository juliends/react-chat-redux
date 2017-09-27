import React, { Component } from 'react';

// Redux config
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMessages } from '../actions';

// Components
import Message from '../components/message';

class MessageList extends Component {
  componentWillMount() {
    this.props.fetchMessages('general');
  }
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { fetchMessages },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
