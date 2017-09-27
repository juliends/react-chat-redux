import React, { Component } from 'react';

// Redux config
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMessages } from '../actions';

// Components
import Message from '../components/message';
import MessageForm from './message_form';

class MessageList extends Component {
  componentWillMount() {
    this.props.fetchMessages(this.props.selectedChannel);
  }

  componentDidMount() {
    // setInterval(() => this.props.fetchMessages('general'), 1000);
    this.listDiv.scrollTop = this.listDiv.scrollHeight;
  }

  componentDidUpdate() {
    // console.log(this.listDiv.scrollHeight);
    // window.scrollTo(0, 10000000);
    this.listDiv.scrollTop = this.listDiv.scrollHeight;
  }

  render() {
    const messages = this.props.messages;
    return (
      <div className="messages" ref={(element) => { this.listDiv = element; }}>
        {messages.map(message => <Message key={message.created_at} message={message} />)}
        <MessageForm />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    messages: state.messages,
    selectedChannel: state.selectedChannel
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { fetchMessages },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
