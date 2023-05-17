
import React from "react";
import Header from "./Components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import AddMobile from "./Components/AddMobile";
import Mobiles from "./Components/Mobiles/Mobiles";
import About from "./Components/About";
import MobileDetail from "./Components/Mobiles/MobileDetails";

function App() {
  return (
    <div className="App">
      
      <React.Fragment>
        <header>
          <Header/>
        </header>
        <main>
          <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/add" element={<AddMobile />} exact />
          <Route path="/mobiles" element={<Mobiles />} exact />
          <Route path="/about" element={<About />} exact />
          <Route path="/mobiles/:id" element={<MobileDetail />} exact />
          
          </Routes>
        </main>
      </React.Fragment>
      
    </div>
  );
}

export default App;
