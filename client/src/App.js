import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import Register from './components/Register';
import Layout from './components/Layout';
import MenuSide from './components/shoppingList/MenuSide';
import { useSelector } from 'react-redux';
import PrivateRoute from './components/PrivateRoute';

function App() {
  const token=useSelector((state)=>{state.user.token})
  const isAuthenticated = token ? true : false;
  return(
    <>
     <Router>
        <Routes>
        <Route index  element={<Login />} />
        <Route path="/register" element={<Register />} />
        <PrivateRoute path="/layout" component={<Layout />} isAuthenticated={isAuthenticated}>
        <Route index element={<MenuSide />}/>
        </PrivateRoute>
          
        </Routes>
     </Router>
      
    </>
  
  )
  

}

export default App;
