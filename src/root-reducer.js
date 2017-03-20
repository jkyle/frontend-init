import { combineReducers } from 'redux';
import NoOpReducer from '@resources/no-op';

const rootReducer = combineReducers({
  noop: NoOpReducer
});

export default rootReducer;
