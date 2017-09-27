import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMessages } from '../actions';
import { setSelectedChannel } from '../actions';

class ChannelList extends Component {
  handleClick = (channel) => {
    this.props.fetchMessages(channel);
    this.props.setSelectedChannel(channel);
  }

  render() {
    return (
      <div className="channels">
        {this.props.channels.map(channel => <div key={channel} channel={channel} onClick={() => this.handleClick(channel)}>{channel}</div>)}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    channels: state.channels,
    selectedChannel: state.selectedChannel
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { fetchMessages, setSelectedChannel },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);
