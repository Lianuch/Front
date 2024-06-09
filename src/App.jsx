import Register from "./components/Forms/Register"
import Login from "./components/Forms/Login"

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from "./components/Pages/HomePage"

export default function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={ <HomePage/>}/>
        <Route path='/Login' element={<Login/> }/>
        <Route path='/Register' element={<Register/> }/>
      </Routes>
      </BrowserRouter>
     
    </>
   
  )
}