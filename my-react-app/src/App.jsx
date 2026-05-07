import { useState } from 'react'
import Header from './Components/Pages/Header';
import Footer from './Components/Pages/Footer';
import Listing from './Components/Pages/Listing';
import Home from './Components/Pages/Home'
import Condition from './Components/Pages/Condition';
import Login from './Components/Pages/Login';
import Signup from './Components/Pages/Signup';
import { Route, Routes, useLocation } from 'react-router-dom';
import About from './Components/Pages/About';
import Contactus from './Components/Pages/Contactus';
import Forms from './Components/Pages/Forms';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Counter from './useEffect/Counter';
import Users from './useEffect/Users';


function App() {
  const location = useLocation();

  const hideOnPaths = ['/login', '/signup'];
  const showHeaderFooter = !hideOnPaths.includes(location.pathname);
  console.log("showDeaderFooter:", showHeaderFooter)
  let name = "harry"

  return (
    <>
      <div>
        <ToastContainer />
        {showHeaderFooter && <Header />}


        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home />} />
          <Route path='/condition' element={<Condition />} />
          <Route path='/listing' element={<Listing data={name} />} />
          <Route path='/about' element={<About />} />
          <Route path='/contactus' element={<Contactus />} />
          <Route path="/forms" element={<Forms />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/users" element={<Users />} />


        </Routes>
        {showHeaderFooter && <Footer />}


      </div>



    </>
  )
}

export default App;
