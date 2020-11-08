import SEARCH from '../constants/actionTypes';

export default function addSearchValue(searchData) {
  return { type: SEARCH, payload: searchData };
}
