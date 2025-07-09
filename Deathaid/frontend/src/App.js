import React from 'react';
import {Routes, Route} from 'react-router-dom';
import './App.css';
import DeathaidHomePage from "./Components/DeathaidHomePage/DeathaidHomePage";
import {Nav} from './Components/Nav/Nav';
import Insert from "./Components/Insert/Insert";
import {Update} from "./Components/Update/Update";

function App() {
  return (
    <div>
      <Nav />
      <React.Fragment>
        <Routes>
          <Route path="/" element={<DeathaidHomePage/>}/>
          <Route path="/DeathaidHomePage" element={<DeathaidHomePage/>}/>
          <Route path="/insert" element={<Insert/>}/>
          <Route path="/DeathaidHomePage/update/:id" element={<Update/>}/>
          <Route path="/insert" element={<Insert/>}/>
        </Routes>
      </React.Fragment>
    </div>
  );
}

export default App;
