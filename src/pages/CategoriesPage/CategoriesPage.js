import React from 'react';
import PropTypes from 'prop-types';
import NavigationMenu from '../../components/NavigationMenu';
import CategoryContent from '../../components/CategoryContent';

const CategoriesPage = ({match}) => {
  const { params: { categoryName } } = match;
  return (
    <>
      <NavigationMenu context='category'/>
      <CategoryContent categoryName={categoryName} />
    </>
  );
};

CategoriesPage.propTypes = {
  match: PropTypes.object,
};

export default CategoriesPage;
