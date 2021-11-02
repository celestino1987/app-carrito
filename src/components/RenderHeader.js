import React from "react";

export const RenderHeader = ( {handleSearch , setSearch , search}) => {
  return (
    <>
      <header>
        <h1>
          El mejor <strong>-Anime</strong>
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
    </>
  );
};
