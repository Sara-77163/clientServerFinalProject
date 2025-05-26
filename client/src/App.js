import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import Register from './components/Register';
import Layout from './components/Layout';
import MenuSide from './components/shoppingList/MenuSide';
import { useSelector } from 'react-redux';
function App() {
  //const token=useSelector((state)=>{state.user.token})
  return(
    <>
     <Router>
        <Routes>
        <Route index  element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/layout" element={<Layout />} >
        <Route index element={<MenuSide />}/>
        </Route>
        </Routes>
     </Router>
      
    </>
  
  )
  

}

export default App;
