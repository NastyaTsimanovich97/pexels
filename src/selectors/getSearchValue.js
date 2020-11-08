import { createSelector } from 'reselect';

const getSearchValue = (state) => state;

const searchValue = createSelector(
  getSearchValue,
  (search) => {
    console.log(search);
    return search;
  },
);

export default searchValue;
