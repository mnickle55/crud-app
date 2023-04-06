import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Inventory from './components/Inventory';
import Dashboard from './components/Dashboard';
import Account from './components/Account';
import { Routes , Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/inventory" element={<Inventory/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/account" element={<Account/>}/>
    </Routes>

  );
}

export default App;
