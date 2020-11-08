import SEARCH from '../constants/actionTypes';

const initialState = {
  search: ''
};

export default function reducer(state = initialState, action) {
  if (action.type === SEARCH) {
    return {...state, search: action.payload};
  }
  return state;
}
