import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { Container, GithubLogo, SearchForm } from "./styles";

function Header({ themeName, setThemeName }) {
  const [search, setSearch] = useState("");
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    history.go("/" + search.toLowerCase().trim());
  }

  function toggleTheme() {
    setThemeName(themeName === "light" ? "dark" : "light");
  }

  return (
    <Container>
      <GithubLogo onClick={toggleTheme} />
      <SearchForm onSubmit={handleSubmit}>
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Enter Username or Repo..."
          value={search}
        />
      </SearchForm>
    </Container>
  );
}

export default Header;
