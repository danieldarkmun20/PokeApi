import React from "react";

const SearchInput = ({search, setSearch}) => {
  return (
    <div className="col-md-4">
      <input
        className="form-control fs-4"
        type="text"
        name="search"
        id="search"
        placeholder="Ejemplo: Pikachu"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchInput;
