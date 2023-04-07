import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import PageNotFound from './components/PageNotFound';
import { createContext, useState } from 'react';
import {Routes , Route } from 'react-router-dom';
import HomeInventory from './components/HomeInventory';
import HomeDashboard from './components/HomeDashboard';
import HomeAccount from './components/HomeAccount';

export const UserContext = createContext();

function App() {
  const [user, setUser] = useState(null)

  return (
      <UserContext.Provider value={{user,setUser}}>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/inventory" element={<HomeInventory/>}/>
          <Route path="/dashboard" element={<HomeDashboard/>}/>
          <Route path="/account" element={<HomeAccount/>}/>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </UserContext.Provider>

  );
}

export default App;
