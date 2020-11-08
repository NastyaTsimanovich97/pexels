import { createStore } from 'redux';
import reducer from './reducers';

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const userData = JSON.parse(localStorage.getItem('likedImages'));
if (!userData) {
  localStorage.setItem('likedImages', JSON.stringify({}));
}

export default store;
