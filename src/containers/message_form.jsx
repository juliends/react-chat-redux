import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMessages } from '../actions';

class MessageForm extends Component {
  
  clickHandler = (event) => {
    event.preventDefault();
    const message = document.getElementById('message').value;
    console.log(message);
  }

  render() {
    return (
      <form className='form-control'>
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
    { fetchMessages },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);

