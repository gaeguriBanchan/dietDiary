import React, { useState } from "react";

const Search = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState("");//검색어
  const [searchResults, setSearchResults] = useState([]);//검색결과 

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const results = data.filter((item) =>
      item.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={searchTerm} onChange={handleChange} />
        <button type="submit">검색</button>
      </form>
      <ul>
        {searchResults.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Search;