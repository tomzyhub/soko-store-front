import React from "react";
import "../search/Search.css";
import { BiSearch } from "react-icons/bi";
const Search = () => {
  return (
    <div>
      <div className="wrapper">
        <div className="search__container">
          <form role="search" method="get" class="search-form form" action="">
            <label>
              <input
                type="search"
                className="search-field"
                placeholder="search for products.."
              />
            </label>
            <button type="submit" className="search-submit button">
              <BiSearch className="search__icon" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;
