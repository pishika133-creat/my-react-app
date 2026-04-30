import { useState } from 'react'
import Header from './Components/Pages/Header';
import Footer from './Components/Pages/Footer';
import Listing from './Components/Pages/Listing';
import Home from './Components/Pages/Home'
import Condition from './Components/Pages/Condition';
import Login from './Components/Pages/Login';
import Signup from './Components/Pages/Signup';
import { Route, Routes } from 'react-router-dom';
import About from './Components/Pages/About';
import Contactus from './Components/Pages/Contactus';


function App() {

  let name = "harry"

  return (
    <>
      <div>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/" element={<Home />} />
          <Route path='/condition' element={<Condition />} />
          <Route path='/listing' element={<Listing data={name} />} />
          <Route path='/about' element={<About/>} />
          <Route path='/contactus' element={<Contactus/>} />
        </Routes>
        <Footer />
      </div>



    </>
  )
}

export default App;
