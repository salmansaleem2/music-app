import { createContext, useReducer } from "react";

export const MusicContext = createContext();

const MusicReducer = (state, action) => {
  switch (action.type) {
    case "SHOW_RESULT":
      return { ...state, color: action.payload };
    case "SEARCH_DATA":
      return { ...state, searchData: action.payload };
    default:
      return state;
  }
};

export function MusicProvider({ children }) {
  // Custom Logic
  const [state, dispatch] = useReducer(MusicReducer, {
    searchRequest: "false",
    searchData: [],
  });

  const searchRequest = () => {
    dispatch({ type: "SHOW_RESULT", payload: "true" });
  };
  const SearchResult = (payload) => {
    dispatch({ type: "SEARCH_DATA", payload: payload });
  };

  return (
    <MusicContext.Provider value={{ ...state, searchRequest, SearchResult }}>
      {children}
    </MusicContext.Provider>
  );
}
