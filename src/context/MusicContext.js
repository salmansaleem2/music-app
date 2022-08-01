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

  return (
    <MusicContext.Provider
      value={{ ...state, searchRequest, SearchResult, SearchIconClick }}
    >
      {children}
    </MusicContext.Provider>
  );
}
