import React from 'react';
import PropTypes from 'prop-types';
import './Search.css';

const Search = ({ query, onSearch }) => (
  <div className="searchContainer">
    <input
      type="text"
      placeholder="Enter the Coin name"
      value={query}
      onChange={onSearch}
    />
  </div>
);

Search.propTypes = {
  query: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default Search;
