import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";

function Updateloan() {
  const [inputs, setInputs] = useState({});
  const navigate = useNavigate();
  const id = useParams().id;

  useEffect(() => {
    const fetchHandler = async () => {
      await axios
        .get(`http://localhost:5000/loans/${id}`)
        .then((res) => res.data)
        .then((data) => setInputs(data.loan));
    };
    fetchHandler();
  }, [id]);

  const sendRequest = async () => {
    await axios.put(`http://localhost:5000/loans/${id}`, {
      type: String(inputs.type),
      amount: Number(inputs.amount),
      interest_rate: Number(inputs.interest_rate),
    })
    .then((res) => res.data);
  };

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

  return (
    <div>
      <h1> update loan</h1>
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

export default Updateloan;
