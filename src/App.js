import React from "react";
import {Route, Routes} from "react-router-dom";
import Splash from "./Splash";
import Earn from "./components/Earn";
import Navbar from "./components/NavBar";

function App() {
  return (
    
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/earn" element={<Earn />} />
        


      </Routes> 
        

     
    </div>
  );
}

export default App;
