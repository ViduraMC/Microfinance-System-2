import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Loan from "./Components/Loan/Loan";
import Viewloan from "./Components/Viewloan/Viewloan";
import Loanhistory from "./Components/Loanhistory/Loanhistory";
import Updateloan from "./Components/Updateloan/Updateloan";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Loan />} />
      <Route path="/createloan" element={<Loan />} />
      <Route path="/viewloan" element={<Viewloan />} />
      <Route path="/history" element={<Loanhistory />} />
      <Route path="/viewloan/:id" element={<Updateloan />} />
    </Routes>
  );
}

export default App;

