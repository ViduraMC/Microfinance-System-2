import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <ul className="loan-ul">
        <li className="loan-li">
          <Link to="/createloan" className="active home-a">
            <h1>Create</h1>
          </Link>
        </li>
        <li className="loan-li">
          <Link to="/viewloan" className="active home-a">
            <h1>View Ongoing Loans</h1>
          </Link>
        </li>
        <li className="loan-li">
          <Link to="/history" className="active home-a">
            <h1>Loan History</h1>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
