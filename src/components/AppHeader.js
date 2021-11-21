import React, { useState } from "react";
import PropTypes from "prop-types";
import { RenderHeader } from "./RenderHeader";

import "../css/AppHeader.css";

export const AppHeader = ({ AxiosAnime }) => {
  const [search, setSearch] = useState();

  const handleSearch = (e) => {
    e.preventDefault();

    AxiosAnime(search);
  };

  return (
    <>
      <RenderHeader
        handleSearch={handleSearch}
        setSearch={setSearch}
        search={search}
      />
    </>
  );
};
AppHeader.propTypes = {
  handleSearch: PropTypes.func,
};
