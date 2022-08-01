import { createContext, useReducer } from "react";

export const MusicContext = createContext();

const MusicReducer = (state, action) => {
  switch (action.type) {
    case "SHOW_RESULT":
      return { ...state, color: action.payload };
    case "SEARCH_DATA":
      return { ...state, searchData: action.payload };
    case "SEARCH_ICON_CLICK":
      return { ...state, IsSearchClick: action.payload };
    case "CURRENT_TRACK":
      return { ...state, currentAudio: action.payload };

    default:
      return state;
  }
};

export function MusicProvider({ children }) {
  // Custom Logic
  const [state, dispatch] = useReducer(MusicReducer, {
    searchRequest: "false",
    IsSearchClick: false,
    searchData: [],
    currentAudio: {},
  });

  const searchRequest = () => {
    dispatch({ type: "SHOW_RESULT", payload: "true" });
  };
  const SearchResult = (searchresult) => {
    dispatch({ type: "SEARCH_DATA", payload: searchresult });
  };
  const SearchIconClick = (status) => {
    dispatch({ type: "SEARCH_ICON_CLICK", payload: status });
  };
  const currentTrack = (track) => {
    dispatch({ type: "CURRENT_TRACK", payload: track });
  };

  return (
    <MusicContext.Provider
      value={{
        ...state,
        searchRequest,
        SearchResult,
        SearchIconClick,
        currentTrack,
      }}
    >
      {children}
    </MusicContext.Provider>
  );
}
