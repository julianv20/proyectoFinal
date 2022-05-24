import React, { useState } from 'react';

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 2) {
      setCategories((cat) => [inputValue]);
      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-group mb-3">
      <input
        type="text"
        name="category"
        value={inputValue}
        onChange={handleInputChange}
        className="form-control"
        autoComplete="off"
      />
    </form>
  );
};
