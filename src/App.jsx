import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Signup from './components/Signup'
import Addmovies from './components/Addmovies'
import Listmvie from './components/Listmvie'
import Loginn from './components/Loginn'
import Indexx from './components/Indexx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
     <Routes>
      <Route path='/' element={<Indexx/>}/>
      <Route path='/k' element={<Signup/>}/>
      <Route path='/l' element={<Loginn/>}/>
      <Route path='/a' element={<Addmovies/>}/>
      <Route path='/m' element={<Listmvie/>}/>

     </Routes>
    </>
  )
}

export default App
