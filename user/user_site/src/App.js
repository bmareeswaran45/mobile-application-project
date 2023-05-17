
import React from "react";
import Header from "./Components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Mobiles from "./Components/Mobiles/Mobiles";
import About from "./Components/About";
import MobileDetail from "./Components/Mobiles/MobileDetails";
import SignUp from './Components/SignUp';
import Login from './Components/Login';
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
          <Route path="/mobiles" element={<Mobiles />} exact />
          <Route path="/about" element={<About />} exact />
          <Route path="/mobiles/:id" element={<MobileDetail />} exact />
          <Route path="/signup" element={<SignUp />} exact />
          <Route path="/login" element={<Login />} exact />
          </Routes>
        </main>
      </React.Fragment>
      
    </div>
  );
}

export default App;
