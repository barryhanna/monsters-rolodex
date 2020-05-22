import React from "react";
import "./search-box.styles.css";

const SearchBox = ({ placeholder, handleChange }) => (
  <input
    type="search"
    placeholder={placeholder}
    onChange={handleChange}
    className="search"
  />
);

export default SearchBox;
