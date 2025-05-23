import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import Register from './components/Register';
import Layout from './components/Layout';
import User from './components/users/Users';
import ShoppingList from './components/shoppingList/ShoppingList';

function App() {
  return(
    <>
     <Router>
        <Routes>
        <Route index  element={<Login />} />
        <Route path="/register" element={<Register />} />
          <Route  path="/layout" element={<Layout />} >
          <Route path="User" element={<ShoppingList />}/>
          </Route>
        </Routes>
     </Router>
      
    </>
  
  )
  

}

export default App;
