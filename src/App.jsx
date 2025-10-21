import Home from './component/Home';
import HomePage from './component/HomePage';
import Login from './component/Login';
import Basket from './component/Basket';
import Register from './component/Register';
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
        <Route path='/basket' element={<Basket/>}/>
        </Route>
      </Routes>
    </div>
     
    </>
  )
}

export default App
