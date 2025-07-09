import React, { useState } from 'react'
import NavBar from '../Nav/NavBar'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

function AddUser() {
  const history = useNavigate();
  const [inputs,setInputs] = useState({
    name:"",
    gmail:"",
    age:"",
    address:"",
  });

  const handleChange =(e)=>{
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e)=>{
    e.preventDefault();
    console.log(inputs);
    await sendRequest();
    history("/userdetails");
  }

  const sendRequest = async()=>{
    await axios.post("http://localhost:5000/users",{
      name:String (inputs.name),
      gmail:String  (inputs.gmail),
      age:Number (inputs.age),
      address: String (inputs.address),
    }).then(res => res.data);
  }

  return (
    <div>
        <NavBar />
      <h1>please enter user details</h1>
      <form onSubmit={handleSubmit}>
        Name : <input type="text" name="name" onChange={handleChange} value ={inputs.name} required></input><br></br>
        Gmail :<input type="text" name="gmail" onChange={handleChange} value ={inputs.gmail} required></input><br></br>
        Age : <input type="number" name="age" onChange={handleChange} value ={inputs.age} required></input><br></br>
        Address : <input type="text" name="address" onChange={handleChange} value ={inputs.address} required></input><br></br> 
        <button>Submit</button>
      </form>
    </div>
  )
}

export default AddUser;
