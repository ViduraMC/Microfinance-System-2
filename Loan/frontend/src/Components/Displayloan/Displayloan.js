import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Displayloan(props) {
  const {_id,type,amount,interest_rate} = props.loans; 

  const navigate = useNavigate();

  const deleteHandler = async () => {
    await axios.delete(`http://localhost:5000/loans/${_id}`)
        .then((res) => res.data)
        .then(() => navigate("/"))
        .then(() => navigate("/viewloan"));
}

  return (
    <div>
      <br />
      <table className="loan-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Type</th>
            <th>Amount</th>
            <th>Interest Rate</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
            <tr>
              <td>{_id}</td>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{interest_rate}%</td>
              <td><Link to={`/Viewloan/${_id}`}>Update</Link>
              <button onClick={deleteHandler}>Delete</button></td>
            </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Displayloan;

