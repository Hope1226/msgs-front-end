import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import messagesReducer from './reducer/messages';

const reducer = combineReducers({
  messagesReducer,
});

const globalStore = createStore(
  reducer,
  applyMiddleware(
    thunk,
    logger,
  ),
);

export default globalStore;
