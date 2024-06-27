import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { Query, QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "./App.css";
import UserContext from "./context/UserContext";
import Home from "./components/Home";
import Login from "./components/Login";
import MovieList from "./components/MovieList";
import { store } from "./store";

function App() {
  const queryClient = new QueryClient();

  const [user, setUser] = useState(() => {
    let currentUser = sessionStorage.getItem("user");
    return currentUser
    // if we get back a value, parse the string as an object
      ? JSON.parse(currentUser)
      // if not, set up default user instead
      : { name: "", isLoggedIn: false };
  });

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          {/* Providing our context to give our entire application access to our user state */}
          <UserContext.Provider value={{ user, setUser }}>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route
                  path="/wish-list"
                  element={<MovieList key={"wish-list"} listType={"wish"} />}
                />
                <Route
                  path="/watch-list"
                  element={<MovieList key={"watch-list"} listType={"watch"} />}
                />
              </Routes>
            </BrowserRouter>
          </UserContext.Provider>
        </Provider>
      </QueryClientProvider>
    </>
  );
}

export default App;
