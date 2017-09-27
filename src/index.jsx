// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import reduxPromise from 'redux-promise';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';

// Reducers
import messagesReducer from './reducers/messages_reducer';
import channelsReducer from './reducers/channels_reducer';
import selectedChannelReducer from './reducers/selectedChannel_reducer';
import currentUsernameReducer from './reducers/currentUsername_reducer';

// Middlewares
const middlewares = applyMiddleware(logger, reduxPromise);

// Initial state
const initialState = {
  messages: [
    {
      author: 'anonymous92',
      content: 'Hello world!',
      created_at: '2017-09-26T23:03:16.365Z'
    },
    {
      author: 'anonymous77',
      content: 'My name is anonymous77',
      created_at: '2017-09-26T23:03:21.194Z'
    }
  ],
  channels: ['React', 'Le wagon'],
  selectedChannel: 'React',
  currentUsername: 'Juliends'
};

// State and reducers
const reducers = combineReducers({
  // state: (state = {}, action) => state
  messages: messagesReducer,
  channels: channelsReducer,
  selectedChannel: selectedChannelReducer,
  currentUsername: currentUsernameReducer
});

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, initialState, middlewares)}>
    <App />
  </Provider>,
  document.querySelector('.container')
);
