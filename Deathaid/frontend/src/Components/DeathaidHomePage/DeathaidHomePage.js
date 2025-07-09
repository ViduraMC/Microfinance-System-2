import React from 'react'
import axios from 'axios';
import {useState, useEffect} from 'react';
import {useNavigate, Link} from 'react-router-dom';


//URL
const URI = "http://localhost:5000/deathaid";

//Get data from that URL
const fetchHandler = async () => {
    return await axios.get(URI).then((res) => res.data);
}


function DeathaidHomePage() {
  //--functions-- (need to put upper from return part )
  const [deathaid, setDeathaid] = useState();
  const navigate = useNavigate();

  //get data from that URL and set it to deathaid
  useEffect(() => {
    fetchHandler().then((data) => setDeathaid(data.deathaid));
  }, []);

  //handleAddPayment function
  const handleAddPayment = (deathaid) => {
    // Optionally, you can pass data via state or params if needed
    navigate('/insert');
  };

  //handleDelete function
  const history = useNavigate();
  const deleteHandler = async (id) => {
    if (window.confirm("Are you sure you want to delete this record?")) {
      await axios.delete(`http://localhost:5000/deathaid/${id}`)
        .then((res) => res.data);
      setDeathaid((prev) => prev.filter((item) => item._id !== id));
    }
  }



  //--return part--
  return (
    <div>
        <h1>Deathaid HomePage</h1>
        <button onClick={() => handleAddPayment(deathaid)}>Add Payment</button>
        <div>
          {deathaid && deathaid.map((deathaid, i) => (
            <div key={i}>
              <hr />
              <h3>Member ID: {deathaid.member_id}</h3>
              <h3>Name: {deathaid.name}</h3>
              <h3>month: {deathaid.month}</h3>
              <h3>Amount: {deathaid.amount}</h3>
              <h3>Total: {deathaid.Total}</h3>
              
              <Link to={`/DeathaidHomePage/update/${deathaid._id}`}>Update</Link>
              <button onClick={() => deleteHandler(deathaid._id)}>Delete</button>
            </div>
          ))}
        </div>
    </div>
  )
}

export default DeathaidHomePage;