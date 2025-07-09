import logo from "./logo.svg";
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from "./components/HomePage.js";
import AddUser from "./components/AddUser/AddUser.js";
import UserDetails from "./components/UserDetails/userdetails.js";
import UpdateUser from "./components/UpdateUser/UpdateUser.js";

function App() {
  return (
    <div>
      <React.Fragment>
        <Routes>
          <Route path ="/" element={<Home />}></Route>
          <Route path ="/mainhome" element={<Home />}></Route>
          <Route path ="/adduser" element={<AddUser/>}></Route>
          <Route path ="/userdetails" element={<UserDetails/>}></Route>
          <Route path ="/userdetails/:id" element={<UpdateUser/>}></Route>
        </Routes>
      </React.Fragment>
    </div>
  );
}

export default App;
