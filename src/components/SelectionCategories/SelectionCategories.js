import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './SelectionCategories.css';

const SelectionCategories = ({ categories, setCategories, onFinishCategories }) => {
  const allCategories = ['Classique', 'Hard', 'Débile'];

  const toggleCategory = (category) => {
    if (categories.includes(category)) {
      setCategories(categories.filter((cat) => cat !== category));
    } else {
      setCategories([...categories, category]);
    }
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
      <button onClick={onFinishCategories} className="finish-categories-button">
        Terminer
      </button>
    </div>
  );
};

SelectionCategories.propTypes = {
  categories: PropTypes.array.isRequired,
  setCategories: PropTypes.func.isRequired,
  onFinishCategories: PropTypes.func.isRequired,
};

export default SelectionCategories;