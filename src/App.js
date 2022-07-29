import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import { firebase } from "./firebase/config";

function App() {
  const [isUserSignedIn, setIsUserSignIn] = useState(false);

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      const { displayName, photoURL } = user;
      // console.log(displayName);
      // setIsUserSignIn(displayName);
      return setIsUserSignIn(true);
    }
    setIsUserSignIn(false);
  });
  if (isUserSignedIn) {
    return (
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  } else {
    return (
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
