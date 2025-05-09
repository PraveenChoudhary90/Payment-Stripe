
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './Layout'
import Home from './Pages/Home'
import Registration from './Pages/Registration'

function App() {
  

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Layout/>} >
      <Route index element={<Home/>}/>
      <Route path='home' element={<Home/>}/>
      <Route path='registration' element={<Registration/>}/>
      
      </Route>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
