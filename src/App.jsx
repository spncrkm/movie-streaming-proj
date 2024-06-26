import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';


import './App.css'
import UserContext from './context/UserContext'
import Home from './components/Home';
import Login from './components/Login';
import MovieList from './components/MovieList';
import { store } from './store';


function App() {
  const [user, setUser] = useState({name: '', 
    isLoggedIn: false})

  return (
    <>
      {/* Providing our context to give our entire application access to our user state */}
      <Provider store={store}>
        <UserContext.Provider value={{user, setUser}}>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/login' element={<Login />} />
              <Route path='wish-list' element={<MovieList />} />
            </Routes>
          </BrowserRouter>
        </UserContext.Provider>
      </Provider>
    </>
  )
}

export default App
