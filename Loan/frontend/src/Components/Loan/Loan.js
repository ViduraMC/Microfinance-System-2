import React, { useState } from 'react';
import Nav from '../Nav/Nav';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Loan() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    type: "",
    amount: "",
    interest_rate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);

    sendRequest().then(() => navigate("/viewloan"));
  };

  const sendRequest = async () => {
    await axios.post("http://localhost:5000/loans", {
      type: String(inputs.type),
      amount: Number(inputs.amount),
      interest_rate: Number(inputs.interest_rate),
    })
    .then((res) => res.data);
  };

  return (
    <div>
      <Nav />
      <h1>Loan New</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="type">Type of Loan:</label>
        <select
          id="type"
          name="type"
          value={inputs.type}
          onChange={handleChange}
          required
        >
          <option value="">--Select Type--</option>
          <option value="long">Long</option>
          <option value="short">Short</option>
        </select>
        <br /><br />

        <label htmlFor="amount">Amount:</label>
        <input
          type="number"
          id="amount"
          name="amount"
          value={inputs.amount}
          onChange={handleChange}
          required
        />
        <br /><br />

        <label htmlFor="interest_rate">Interest Rate (%):</label>
        <input
          type="number"
          id="interest_rate"
          name="interest_rate"
          step="0.01"
          value={inputs.interest_rate}
          onChange={handleChange}
          required
        />
        <br /><br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Loan;


