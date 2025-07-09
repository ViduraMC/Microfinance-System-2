import React from 'react'
import NavBar from "../Nav/NavBar";
import axios from "axios";
import { useNavigate } from 'react-router-dom';



function User(props) {
  const navigate = useNavigate();
   if (!props.user) {
    return <p>⚠️ No user data received</p>;
  }
  
  const { _id,name,gmail,age,address } = props.user;

  const deleteHandler = async() => {
   try {
      await axios.delete(`http://localhost:5000/users/${_id}`);
      // Update the state in the parent component
      props.setUsers((prevUsers) => prevUsers.filter((u) => u._id !== _id));
    } catch (err) {
      console.error("Delete failed:", err);
    
  }
  }

  return (
    <div>
      <br></br>
      <h2>ID:{_id}</h2>
      <h2>Name:{name}</h2>
      <h2>Gmail:{gmail}</h2>
      <h2>Age:{age}</h2>
      <h2>Address:{address}</h2>
      <button onClick={() => navigate(`/userdetails/${_id}`)}>Update</button>
      <button onClick={deleteHandler}>Delete</button>
    </div>
  );
}

export default User;
