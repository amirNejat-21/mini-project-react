import React from "react";
import { Routes,Route } from "react-router-dom";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import Product from "./components/Product";



function App() {
  return (
    <div >
      <Navbar/>
       <Routes>
         <Route path="/"  element={<Landing/>}/>
         <Route path="/products" element={<Product/>}/>
       </Routes>
     <Footer/>
    </div>
  );
}

export default App;
