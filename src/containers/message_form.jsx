import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createMessage } from '../actions';

class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

  clickHandler = (event) => {
    event.preventDefault();
    const currentUsername = this.props.currentUsername;
    const selectedChannel = this.props.selectedChannel;
    const message = this.state.value;
    this.props.createMessage(selectedChannel, currentUsername, message);
  }

  render() {
    return (
      <form className='form'>
        <input type="text" id="message" value={this.state.value} onChange={this.handleChange} />
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

