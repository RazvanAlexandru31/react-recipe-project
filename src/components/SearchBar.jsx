import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const SearchBar = () => {
  const [text, setText] = useState("");
  const navigate = useNavigate()
  const handleSearch = (e) => {
    // console.log(e.target.value);
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?q=${text}`)
  };

  return (
    <div className="w-1/3 mt-10">
      <form onSubmit={handleSubmit}>
        <label htmlFor="search"></label>
        <input
          type="text"
          placeholder="Search here"
          id="search"
          value={text}
          onChange={handleSearch}
          className="input input-bordered input-info w-full"
          required
        />
      </form>
    </div>
  );
};

export default SearchBar;
