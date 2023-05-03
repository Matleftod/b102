import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import './SelectionCategories.css';

const SelectionCategories = ({ onFinishCategories }) => {
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  const allCategories = ['classique', 'hard', 'debile'];

  const toggleCategory = (category) => {
    if (categories.includes(category)) {
      dispatch({ type: 'REMOVE_CATEGORY', payload: category });
    } else {
      dispatch({ type: 'ADD_CATEGORY', payload: category });
    }
  };

  const handleFinishCategories = () => {
    onFinishCategories(categories);
  };

  return (
    <div className="SelectionCategories">
      <h2>Sélectionnez les catégories</h2>
      <div className="categories-list">
        {allCategories.map((category, index) => (
          <button
            key={index}
            className={`category-button ${categories.includes(category) ? 'selected' : ''}`}
            onClick={() => toggleCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <button onClick={handleFinishCategories} className="finish-categories-button">
        Terminer
      </button>
    </div>
  );
};

SelectionCategories.propTypes = {
  onFinishCategories: PropTypes.func.isRequired,
};

export default SelectionCategories;