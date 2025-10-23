import Home from './component/Home';
import HomePage from './component/HomePage';
import Login from './component/Login';
import Cart from './component/Cart';
import Register from './component/Register';
import Checkout from './component/checkout';
import Dashboard from './component/dashboard';
import Invoice from './component/Invoice';
import Orders from './component/Orders';
import UserInfo from './component/UserInfo'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import './index.css'
import { Route, Routes } from 'react-router-dom';

function App() {
  

  return (
    <><div>
      <Routes>
        <Route path='/' element={<Home/>}>
        <Route index element={<HomePage/>} /> 
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/invoice' element={<Invoice/>}/>
        <Route path='/orders' element={<Orders/>}/>
        <Route path='/userinfo' element={<UserInfo/>}/>
        </Route>
      </Routes>
    </div>
     
    </>
  )
}

export default App
