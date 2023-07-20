import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import './SelectionCategories.css';

const SelectionCategories = ({ onFinishCategories }) => {
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  const participants = useSelector((state) => state.participants);

  const allCategories = ['classique', 'hard', 'debile'];

  const toggleCategory = (category) => {
    if (categories.includes(category)) {
      dispatch({ type: 'REMOVE_CATEGORY', payload: category });
    } else {
      dispatch({ type: 'ADD_CATEGORY', payload: category });
    }
  };

  const handleFinishCategories = () => {
    // Passez participants en tant qu'argument à onFinishCategories
    onFinishCategories(categories, participants);
  };

  return (
    <div className="SelectionCategories">
      <h2>Sélectionnez les catégories</h2>
      <div className="categories-list">
        {allCategories.map((category, index) => (
          <button 
            key={index}
            className={`pushable categ-btn ${categories.includes(category) ? 'selected-btn-'+category : ''}`}
            onClick={() => toggleCategory(category)}
          >
          <span className={`front categ ${categories.includes(category) ? 'selected-'+category : ''}`}>
            {category}
          </span>
        </button>
        ))}
      </div>
      <button className='pushable terminer-btn' onClick={handleFinishCategories}>
        <span className='front terminer'>
          Terminer
        </span>
      </button>
    </div>
  );
};

SelectionCategories.propTypes = {
  onFinishCategories: PropTypes.func.isRequired,
};

export default SelectionCategories;