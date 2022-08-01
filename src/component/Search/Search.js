import axios from "axios";
import { useEffect, useState } from "react";
import { MagnifyingGlass } from "phosphor-react";
import context from "../../hooks/useMusic";

import styles from "./Search.module.css";

const Search = () => {
  const { searchData, SearchResult, IsSearchClick, SearchIconClick } =
    context();

  const USER_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
  const USER_SECRET = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;

  // Search
  const [search, setSearch] = useState("");
  const [token, setToken] = useState("");

  const handleSearch = (e) => {
    SearchIconClick(true);

    getSearchedData();
    e.preventDefault();
    console.log("searchData", searchData);
  };

  // Api Request
  useEffect(() => {
    axios("https://accounts.spotify.com/api/token", {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Basic " + btoa(USER_ID + ":" + USER_SECRET),
      },
      data: "grant_type=client_credentials",
      method: "POST",
    }).then((tokenResponse) => {
      setToken(tokenResponse.data.access_token);
    });
  }, []);

  const getSearchedData = () => {
    axios(`https://api.spotify.com/v1/search?q=${search}&type=track`, {
      method: "GET",
      headers: { Authorization: "Bearer " + token },
    }).then((response) => {
      SearchResult(response);
      setSearch("");
    });
  };
  return (
    <form style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <div className={styles["search-container"]}>
        <input
          type="text"
          placeholder="Search"
          className={styles.search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          value={search}
        />
        <button
          type={"submit"}
          style={{
            background: "none",
            outline: "none",
            border: "none",
            cursor: "pointer",
          }}
        >
          <MagnifyingGlass onClick={handleSearch} size={16} />
        </button>
      </div>
    </form>
  );
};

export default Search;
