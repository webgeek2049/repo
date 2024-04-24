import React from "react";
import './searchBar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchField = () => {
  return (
    <div className="form-group has-search search">
      <input type="text" className="form-control input-search" placeholder="Search" />
      <button className="search-icon"><FontAwesomeIcon icon={faSearch} /></button>
    </div>
  );
};

export default SearchField;
