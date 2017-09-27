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
    this.props.fetchMessages('general');
  }

  componentDidMount() {
    // setInterval(() => this.props.fetchMessages('general'), 1000);
  }
 
  handleRef() {
    console.log(this);
  }

  render() {
    const messages = this.props.messages;
    return (
      <div>
        {messages.map(message => <Message ref={(input) => { this.textInput = input; }} key={message.created_at} message={message} />)}
        <MessageForm />
      </div>
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
