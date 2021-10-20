import React, { useState } from "react";
import PropTypes from 'prop-types';

import "../css/AppHeader.css";

export const AppHeader = ({ AxiosAnime }) => {
  const [search, setSearch] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();

    AxiosAnime(search);
  };

  return (
    <>
      <header>
        <h1>
          El mejor <strong>-Anime-</strong> para comprar
        </h1>
        <form className="search-box" onSubmit={handleSearch}>
          <input
            type="search"
            className="search-input"
            placeholder="Buscar..."
            required
            value={search || ""}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
      </header>
      <div></div>
    </>
  );
};
AppHeader.propTypes = {
handleSearch : PropTypes.func

}