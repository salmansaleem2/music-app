import axios from "axios";
import { useEffect, useState } from "react";
import { MagnifyingGlass } from "phosphor-react";
// import { MusicContext } from "../../context/MusicContext";
// import { keys } from "../../../.env";
import context from "../../hooks/useMusic";

import styles from "./Search.module.css";
import { useFetch } from "../../hooks/useFetch";

const Search = () => {
  const { SearchResult } = context();
  console.log("SearchResult", SearchResult);
  // const { searchResult } = useMusic();
  const USER_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
  const USER_SECRET = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;

  // Search
  const [search, setSearch] = useState("");
  const [artistsData, setArtistsData] = useState([]);
  const [token, setToken] = useState("");
  const [genres, setGenres] = useState({
    selectedGenre: "",
    listOfGenresFromAPI: [],
  });

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // };

  const handleSearch = (e) => {
    getSearchedData();
    e.preventDefault();
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
    }).then((genreResponse) => {
      SearchResult(genreResponse);
      // setArtistsData(genreResponse);
      setSearch("");
      // setGenres({
      //   selectedGenre: genres.selectedGenre,
      //   listOfGenresFromAPI: genreResponse.data.categories.items,
      // });
    });
  };
  // onSubmit={handleSubmit}
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
