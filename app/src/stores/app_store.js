import { createStore } from 'redux';
import appReducer from '../reducers';

export function configureStore() {
  /* eslint-disable no-underscore-dangle */
  return createStore(
    appReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );
  /* eslint-enable */
}

const AppStore = configureStore();
export default AppStore