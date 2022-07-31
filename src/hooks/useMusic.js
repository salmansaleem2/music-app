import { useContext } from "react";
import { MusicContext } from "../context/MusicContext";

const useTheme = () => {
  const context = useContext(MusicContext);

  if (context === undefined) {
    throw new Error("useTheme() must be used inside a ThemeProvider");
  }

  return context;
};

export default useTheme;
