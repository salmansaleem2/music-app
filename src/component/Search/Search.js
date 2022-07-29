import axios from "axios";
import { useState } from "react";
import { MagnifyingGlass } from "phosphor-react";

import styles from "./Search.module.css";

const Search = () => {
  const token = "58037c60e9cd4e30b35cbd0eb09d49e9";
  const [searchKey, setSearchKey] = useState("");
  const [artists, setArtists] = useState([]);

  // const searchArtists = async (e) => {
  //   e.preventDefault();
  //   const { data } = await axios.get("https://api.spotify.com/v1/search", {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //     params: {
  //       q: searchKey,
  //       type: "artist",
  //     },
  //   });

  //   setArtists(data.artists.items);
  // };
  axios("https://accounts.spotify.com/api/token", {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization:
        "Basic " + btoa(spotify.ClientId + ":" + spotify.ClientSecret),
    },
    data: "grant_type=client_credentials",
    method: "POST",
  });

  return (
    <form
      onSubmit={searchArtists}
      style={{ width: "100%", display: "flex", justifyContent: "center" }}
    >
      <div className={styles["search-container"]}>
        <input
          type="text"
          placeholder="Search"
          className={styles.search}
          onChange={(e) => {
            setSearchKey(e.target.value);
          }}
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
          <MagnifyingGlass size={16} />
        </button>
      </div>
    </form>
  );
};

export default Search;
