import { createStore, combineReducers } from 'redux';

// App Reducers
import { reducer as user } from './lib/user';
import { reducer as notification } from './lib/notification';

// Create Store
let store = createStore(
  combineReducers({
    user,
    notification
  }),
  window.devToolsExtension && process.env.NODE_ENV === 'development' ? window.devToolsExtension() : undefined
);

export default store;
