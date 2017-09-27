import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createMessage } from '../actions';

class MessageForm extends Component {
  clickHandler = (event) => {
    event.preventDefault();
    const currentUsername = this.props.currentUsername;
    const selectedChannel = this.props.selectedChannel;
    const message = document.getElementById('message').value;
    this.props.createMessage(selectedChannel, currentUsername, message);
  }

  render() {
    return (
      <form className='form'>
        <input type="text" id="message" />
        <button onClick={this.clickHandler}>Send</button>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentUsername: state.currentUsername,
    selectedChannel: state.selectedChannel
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { createMessage },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);

