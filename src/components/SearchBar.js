import React, { useState } from "react";

const SearchBar = () => {
  const [term, setTerm] = useState("");
  

  const onSubmit = (e) => {
    e.preventDefault();
    onSubmit(term);
  };
  return (
    <div className="search-bar ui segment">
      <form onSubmit={onSubmit} className="ui form">
        <div className="field">
          <label>Search for a Video</label>
          <input
            value={term}
            type="text"
            onChange={(event) => {
              setTerm(event.target.value);
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
