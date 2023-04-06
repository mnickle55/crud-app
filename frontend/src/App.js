import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Inventory from './components/Inventory';
import Dashboard from './components/Dashboard';
import Account from './components/Account';
import { Routes , Route } from 'react-router-dom';
import HomeInventory from './components/HomeInventory';
import HomeDashboard from './components/HomeDashboard';
import HomeAccount from './components/HomeAccount';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/inventory" element={<HomeInventory/>}/>
      <Route path="/dashboard" element={<HomeDashboard/>}/>
      <Route path="/account" element={<HomeAccount/>}/>
    </Routes>

  );
}

export default App;
